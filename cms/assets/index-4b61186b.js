(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))p(h);new MutationObserver(h=>{for(const k of h)if(k.type==="childList")for(const m of k.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function d(h){const k={};return h.integrity&&(k.integrity=h.integrity),h.referrerPolicy&&(k.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?k.credentials="include":h.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function p(h){if(h.ep)return;h.ep=!0;const k=d(h);fetch(h.href,k)}})();function Bu(s,a){const d=Object.create(null),p=s.split(",");for(let h=0;h<p.length;h++)d[p[h]]=!0;return a?h=>!!d[h.toLowerCase()]:h=>!!d[h]}function Nu(s){if(Be(s)){const a={};for(let d=0;d<s.length;d++){const p=s[d],h=nn(p)?g3(p):Nu(p);if(h)for(const k in h)a[k]=h[k]}return a}else{if(nn(s))return s;if(Ct(s))return s}}const u3=/;(?![^(]*\))/g,h3=/:([^]+)/,p3=/\/\*.*?\*\//gs;function g3(s){const a={};return s.replace(p3,"").split(u3).forEach(d=>{if(d){const p=d.split(h3);p.length>1&&(a[p[0].trim()]=p[1].trim())}}),a}function _e(s){let a="";if(nn(s))a=s;else if(Be(s))for(let d=0;d<s.length;d++){const p=_e(s[d]);p&&(a+=p+" ")}else if(Ct(s))for(const d in s)s[d]&&(a+=d+" ");return a.trim()}const f3="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m3=Bu(f3);function Gw(s){return!!s||s===""}function k3(s,a){if(s.length!==a.length)return!1;let d=!0;for(let p=0;d&&p<s.length;p++)d=Wr(s[p],a[p]);return d}function Wr(s,a){if(s===a)return!0;let d=Nb(s),p=Nb(a);if(d||p)return d&&p?s.getTime()===a.getTime():!1;if(d=Or(s),p=Or(a),d||p)return s===a;if(d=Be(s),p=Be(a),d||p)return d&&p?k3(s,a):!1;if(d=Ct(s),p=Ct(a),d||p){if(!d||!p)return!1;const h=Object.keys(s).length,k=Object.keys(a).length;if(h!==k)return!1;for(const m in s){const v=s.hasOwnProperty(m),w=a.hasOwnProperty(m);if(v&&!w||!v&&w||!Wr(s[m],a[m]))return!1}}return String(s)===String(a)}function Pu(s,a){return s.findIndex(d=>Wr(d,a))}const Ae=s=>nn(s)?s:s==null?"":Be(s)||Ct(s)&&(s.toString===Yw||!Ve(s.toString))?JSON.stringify(s,Ww,2):String(s),Ww=(s,a)=>a&&a.__v_isRef?Ww(s,a.value):Ps(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((d,[p,h])=>(d[`${p} =>`]=h,d),{})}:Hs(a)?{[`Set(${a.size})`]:[...a.values()]}:Ct(a)&&!Be(a)&&!Qw(a)?String(a):a,Mt={},Ns=[],ho=()=>{},_3=()=>!1,b3=/^on[^a-z]/,_l=s=>b3.test(s),Lu=s=>s.startsWith("onUpdate:"),bn=Object.assign,Ou=(s,a)=>{const d=s.indexOf(a);d>-1&&s.splice(d,1)},w3=Object.prototype.hasOwnProperty,nt=(s,a)=>w3.call(s,a),Be=Array.isArray,Ps=s=>Kr(s)==="[object Map]",Hs=s=>Kr(s)==="[object Set]",Nb=s=>Kr(s)==="[object Date]",Ve=s=>typeof s=="function",nn=s=>typeof s=="string",Or=s=>typeof s=="symbol",Ct=s=>s!==null&&typeof s=="object",Kw=s=>Ct(s)&&Ve(s.then)&&Ve(s.catch),Yw=Object.prototype.toString,Kr=s=>Yw.call(s),v3=s=>Kr(s).slice(8,-1),Qw=s=>Kr(s)==="[object Object]",$u=s=>nn(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,el=Bu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bl=s=>{const a=Object.create(null);return d=>a[d]||(a[d]=s(d))},C3=/-(\w)/g,Po=bl(s=>s.replace(C3,(a,d)=>d?d.toUpperCase():"")),A3=/\B([A-Z])/g,qs=bl(s=>s.replace(A3,"-$1").toLowerCase()),wl=bl(s=>s.charAt(0).toUpperCase()+s.slice(1)),Fd=bl(s=>s?`on${wl(s)}`:""),$r=(s,a)=>!Object.is(s,a),tl=(s,a)=>{for(let d=0;d<s.length;d++)s[d](a)},cl=(s,a,d)=>{Object.defineProperty(s,a,{configurable:!0,enumerable:!1,value:d})},dl=s=>{const a=parseFloat(s);return isNaN(a)?s:a},y3=s=>{const a=nn(s)?Number(s):NaN;return isNaN(a)?s:a};let Pb;const x3=()=>Pb||(Pb=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let lo;class E3{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=lo,!a&&lo&&(this.index=(lo.scopes||(lo.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const d=lo;try{return lo=this,a()}finally{lo=d}}}on(){lo=this}off(){lo=this.parent}stop(a){if(this._active){let d,p;for(d=0,p=this.effects.length;d<p;d++)this.effects[d].stop();for(d=0,p=this.cleanups.length;d<p;d++)this.cleanups[d]();if(this.scopes)for(d=0,p=this.scopes.length;d<p;d++)this.scopes[d].stop(!0);if(!this.detached&&this.parent&&!a){const h=this.parent.scopes.pop();h&&h!==this&&(this.parent.scopes[this.index]=h,h.index=this.index)}this.parent=void 0,this._active=!1}}}function D3(s,a=lo){a&&a.active&&a.effects.push(s)}function I3(){return lo}const zu=s=>{const a=new Set(s);return a.w=0,a.n=0,a},Zw=s=>(s.w&ki)>0,Jw=s=>(s.n&ki)>0,M3=({deps:s})=>{if(s.length)for(let a=0;a<s.length;a++)s[a].w|=ki},S3=s=>{const{deps:a}=s;if(a.length){let d=0;for(let p=0;p<a.length;p++){const h=a[p];Zw(h)&&!Jw(h)?h.delete(s):a[d++]=h,h.w&=~ki,h.n&=~ki}a.length=d}},su=new WeakMap;let Tr=0,ki=1;const ru=30;let co;const Yi=Symbol(""),au=Symbol("");class Ru{constructor(a,d=null,p){this.fn=a,this.scheduler=d,this.active=!0,this.deps=[],this.parent=void 0,D3(this,p)}run(){if(!this.active)return this.fn();let a=co,d=fi;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=co,co=this,fi=!0,ki=1<<++Tr,Tr<=ru?M3(this):Lb(this),this.fn()}finally{Tr<=ru&&S3(this),ki=1<<--Tr,co=this.parent,fi=d,this.parent=void 0,this.deferStop&&this.stop()}}stop(){co===this?this.deferStop=!0:this.active&&(Lb(this),this.onStop&&this.onStop(),this.active=!1)}}function Lb(s){const{deps:a}=s;if(a.length){for(let d=0;d<a.length;d++)a[d].delete(s);a.length=0}}let fi=!0;const Xw=[];function Gs(){Xw.push(fi),fi=!1}function Ws(){const s=Xw.pop();fi=s===void 0?!0:s}function Pn(s,a,d){if(fi&&co){let p=su.get(s);p||su.set(s,p=new Map);let h=p.get(d);h||p.set(d,h=zu()),e0(h)}}function e0(s,a){let d=!1;Tr<=ru?Jw(s)||(s.n|=ki,d=!Zw(s)):d=!s.has(co),d&&(s.add(co),co.deps.push(s))}function Ho(s,a,d,p,h,k){const m=su.get(s);if(!m)return;let v=[];if(a==="clear")v=[...m.values()];else if(d==="length"&&Be(s)){const w=Number(p);m.forEach((x,A)=>{(A==="length"||A>=w)&&v.push(x)})}else switch(d!==void 0&&v.push(m.get(d)),a){case"add":Be(s)?$u(d)&&v.push(m.get("length")):(v.push(m.get(Yi)),Ps(s)&&v.push(m.get(au)));break;case"delete":Be(s)||(v.push(m.get(Yi)),Ps(s)&&v.push(m.get(au)));break;case"set":Ps(s)&&v.push(m.get(Yi));break}if(v.length===1)v[0]&&lu(v[0]);else{const w=[];for(const x of v)x&&w.push(...x);lu(zu(w))}}function lu(s,a){const d=Be(s)?s:[...s];for(const p of d)p.computed&&Ob(p);for(const p of d)p.computed||Ob(p)}function Ob(s,a){(s!==co||s.allowRecurse)&&(s.scheduler?s.scheduler():s.run())}const T3=Bu("__proto__,__v_isRef,__isVue"),t0=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(Or)),B3=ju(),N3=ju(!1,!0),P3=ju(!0),$b=L3();function L3(){const s={};return["includes","indexOf","lastIndexOf"].forEach(a=>{s[a]=function(...d){const p=dt(this);for(let k=0,m=this.length;k<m;k++)Pn(p,"get",k+"");const h=p[a](...d);return h===-1||h===!1?p[a](...d.map(dt)):h}}),["push","pop","shift","unshift","splice"].forEach(a=>{s[a]=function(...d){Gs();const p=dt(this)[a].apply(this,d);return Ws(),p}}),s}function O3(s){const a=dt(this);return Pn(a,"has",s),a.hasOwnProperty(s)}function ju(s=!1,a=!1){return function(p,h,k){if(h==="__v_isReactive")return!s;if(h==="__v_isReadonly")return s;if(h==="__v_isShallow")return a;if(h==="__v_raw"&&k===(s?a?J3:r0:a?s0:i0).get(p))return p;const m=Be(p);if(!s){if(m&&nt($b,h))return Reflect.get($b,h,k);if(h==="hasOwnProperty")return O3}const v=Reflect.get(p,h,k);return(Or(h)?t0.has(h):T3(h))||(s||Pn(p,"get",h),a)?v:ct(v)?m&&$u(h)?v:v.value:Ct(v)?s?a0(v):Ks(v):v}}const $3=n0(),z3=n0(!0);function n0(s=!1){return function(d,p,h,k){let m=d[p];if(zs(m)&&ct(m)&&!ct(h))return!1;if(!s&&(!ul(h)&&!zs(h)&&(m=dt(m),h=dt(h)),!Be(d)&&ct(m)&&!ct(h)))return m.value=h,!0;const v=Be(d)&&$u(p)?Number(p)<d.length:nt(d,p),w=Reflect.set(d,p,h,k);return d===dt(k)&&(v?$r(h,m)&&Ho(d,"set",p,h):Ho(d,"add",p,h)),w}}function R3(s,a){const d=nt(s,a);s[a];const p=Reflect.deleteProperty(s,a);return p&&d&&Ho(s,"delete",a,void 0),p}function j3(s,a){const d=Reflect.has(s,a);return(!Or(a)||!t0.has(a))&&Pn(s,"has",a),d}function F3(s){return Pn(s,"iterate",Be(s)?"length":Yi),Reflect.ownKeys(s)}const o0={get:B3,set:$3,deleteProperty:R3,has:j3,ownKeys:F3},V3={get:P3,set(s,a){return!0},deleteProperty(s,a){return!0}},U3=bn({},o0,{get:N3,set:z3}),Fu=s=>s,vl=s=>Reflect.getPrototypeOf(s);function Wa(s,a,d=!1,p=!1){s=s.__v_raw;const h=dt(s),k=dt(a);d||(a!==k&&Pn(h,"get",a),Pn(h,"get",k));const{has:m}=vl(h),v=p?Fu:d?Hu:zr;if(m.call(h,a))return v(s.get(a));if(m.call(h,k))return v(s.get(k));s!==h&&s.get(a)}function Ka(s,a=!1){const d=this.__v_raw,p=dt(d),h=dt(s);return a||(s!==h&&Pn(p,"has",s),Pn(p,"has",h)),s===h?d.has(s):d.has(s)||d.has(h)}function Ya(s,a=!1){return s=s.__v_raw,!a&&Pn(dt(s),"iterate",Yi),Reflect.get(s,"size",s)}function zb(s){s=dt(s);const a=dt(this);return vl(a).has.call(a,s)||(a.add(s),Ho(a,"add",s,s)),this}function Rb(s,a){a=dt(a);const d=dt(this),{has:p,get:h}=vl(d);let k=p.call(d,s);k||(s=dt(s),k=p.call(d,s));const m=h.call(d,s);return d.set(s,a),k?$r(a,m)&&Ho(d,"set",s,a):Ho(d,"add",s,a),this}function jb(s){const a=dt(this),{has:d,get:p}=vl(a);let h=d.call(a,s);h||(s=dt(s),h=d.call(a,s)),p&&p.call(a,s);const k=a.delete(s);return h&&Ho(a,"delete",s,void 0),k}function Fb(){const s=dt(this),a=s.size!==0,d=s.clear();return a&&Ho(s,"clear",void 0,void 0),d}function Qa(s,a){return function(p,h){const k=this,m=k.__v_raw,v=dt(m),w=a?Fu:s?Hu:zr;return!s&&Pn(v,"iterate",Yi),m.forEach((x,A)=>p.call(h,w(x),w(A),k))}}function Za(s,a,d){return function(...p){const h=this.__v_raw,k=dt(h),m=Ps(k),v=s==="entries"||s===Symbol.iterator&&m,w=s==="keys"&&m,x=h[s](...p),A=d?Fu:a?Hu:zr;return!a&&Pn(k,"iterate",w?au:Yi),{next(){const{value:E,done:y}=x.next();return y?{value:E,done:y}:{value:v?[A(E[0]),A(E[1])]:A(E),done:y}},[Symbol.iterator](){return this}}}}function ri(s){return function(...a){return s==="delete"?!1:this}}function H3(){const s={get(k){return Wa(this,k)},get size(){return Ya(this)},has:Ka,add:zb,set:Rb,delete:jb,clear:Fb,forEach:Qa(!1,!1)},a={get(k){return Wa(this,k,!1,!0)},get size(){return Ya(this)},has:Ka,add:zb,set:Rb,delete:jb,clear:Fb,forEach:Qa(!1,!0)},d={get(k){return Wa(this,k,!0)},get size(){return Ya(this,!0)},has(k){return Ka.call(this,k,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Qa(!0,!1)},p={get(k){return Wa(this,k,!0,!0)},get size(){return Ya(this,!0)},has(k){return Ka.call(this,k,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:Qa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(k=>{s[k]=Za(k,!1,!1),d[k]=Za(k,!0,!1),a[k]=Za(k,!1,!0),p[k]=Za(k,!0,!0)}),[s,d,a,p]}const[q3,G3,W3,K3]=H3();function Vu(s,a){const d=a?s?K3:W3:s?G3:q3;return(p,h,k)=>h==="__v_isReactive"?!s:h==="__v_isReadonly"?s:h==="__v_raw"?p:Reflect.get(nt(d,h)&&h in p?d:p,h,k)}const Y3={get:Vu(!1,!1)},Q3={get:Vu(!1,!0)},Z3={get:Vu(!0,!1)},i0=new WeakMap,s0=new WeakMap,r0=new WeakMap,J3=new WeakMap;function X3(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eI(s){return s.__v_skip||!Object.isExtensible(s)?0:X3(v3(s))}function Ks(s){return zs(s)?s:Uu(s,!1,o0,Y3,i0)}function tI(s){return Uu(s,!1,U3,Q3,s0)}function a0(s){return Uu(s,!0,V3,Z3,r0)}function Uu(s,a,d,p,h){if(!Ct(s)||s.__v_raw&&!(a&&s.__v_isReactive))return s;const k=h.get(s);if(k)return k;const m=eI(s);if(m===0)return s;const v=new Proxy(s,m===2?p:d);return h.set(s,v),v}function Ls(s){return zs(s)?Ls(s.__v_raw):!!(s&&s.__v_isReactive)}function zs(s){return!!(s&&s.__v_isReadonly)}function ul(s){return!!(s&&s.__v_isShallow)}function l0(s){return Ls(s)||zs(s)}function dt(s){const a=s&&s.__v_raw;return a?dt(a):s}function c0(s){return cl(s,"__v_skip",!0),s}const zr=s=>Ct(s)?Ks(s):s,Hu=s=>Ct(s)?a0(s):s;function d0(s){fi&&co&&(s=dt(s),e0(s.dep||(s.dep=zu())))}function u0(s,a){s=dt(s);const d=s.dep;d&&lu(d)}function ct(s){return!!(s&&s.__v_isRef===!0)}function q(s){return h0(s,!1)}function nI(s){return h0(s,!0)}function h0(s,a){return ct(s)?s:new oI(s,a)}class oI{constructor(a,d){this.__v_isShallow=d,this.dep=void 0,this.__v_isRef=!0,this._rawValue=d?a:dt(a),this._value=d?a:zr(a)}get value(){return d0(this),this._value}set value(a){const d=this.__v_isShallow||ul(a)||zs(a);a=d?a:dt(a),$r(a,this._rawValue)&&(this._rawValue=a,this._value=d?a:zr(a),u0(this))}}function J(s){return ct(s)?s.value:s}const iI={get:(s,a,d)=>J(Reflect.get(s,a,d)),set:(s,a,d,p)=>{const h=s[a];return ct(h)&&!ct(d)?(h.value=d,!0):Reflect.set(s,a,d,p)}};function p0(s){return Ls(s)?s:new Proxy(s,iI)}var g0;class sI{constructor(a,d,p,h){this._setter=d,this.dep=void 0,this.__v_isRef=!0,this[g0]=!1,this._dirty=!0,this.effect=new Ru(a,()=>{this._dirty||(this._dirty=!0,u0(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!h,this.__v_isReadonly=p}get value(){const a=dt(this);return d0(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}g0="__v_isReadonly";function rI(s,a,d=!1){let p,h;const k=Ve(s);return k?(p=s,h=ho):(p=s.get,h=s.set),new sI(p,h,k||!h,d)}function mi(s,a,d,p){let h;try{h=p?s(...p):s()}catch(k){Cl(k,a,d)}return h}function Jn(s,a,d,p){if(Ve(s)){const k=mi(s,a,d,p);return k&&Kw(k)&&k.catch(m=>{Cl(m,a,d)}),k}const h=[];for(let k=0;k<s.length;k++)h.push(Jn(s[k],a,d,p));return h}function Cl(s,a,d,p=!0){const h=a?a.vnode:null;if(a){let k=a.parent;const m=a.proxy,v=d;for(;k;){const x=k.ec;if(x){for(let A=0;A<x.length;A++)if(x[A](s,m,v)===!1)return}k=k.parent}const w=a.appContext.config.errorHandler;if(w){mi(w,null,10,[s,m,v]);return}}aI(s,d,h,p)}function aI(s,a,d,p=!0){console.error(s)}let Rr=!1,cu=!1;const vn=[];let To=0;const Os=[];let Fo=null,qi=0;const f0=Promise.resolve();let qu=null;function Vo(s){const a=qu||f0;return s?a.then(this?s.bind(this):s):a}function lI(s){let a=To+1,d=vn.length;for(;a<d;){const p=a+d>>>1;jr(vn[p])<s?a=p+1:d=p}return a}function Gu(s){(!vn.length||!vn.includes(s,Rr&&s.allowRecurse?To+1:To))&&(s.id==null?vn.push(s):vn.splice(lI(s.id),0,s),m0())}function m0(){!Rr&&!cu&&(cu=!0,qu=f0.then(_0))}function cI(s){const a=vn.indexOf(s);a>To&&vn.splice(a,1)}function dI(s){Be(s)?Os.push(...s):(!Fo||!Fo.includes(s,s.allowRecurse?qi+1:qi))&&Os.push(s),m0()}function Vb(s,a=Rr?To+1:0){for(;a<vn.length;a++){const d=vn[a];d&&d.pre&&(vn.splice(a,1),a--,d())}}function k0(s){if(Os.length){const a=[...new Set(Os)];if(Os.length=0,Fo){Fo.push(...a);return}for(Fo=a,Fo.sort((d,p)=>jr(d)-jr(p)),qi=0;qi<Fo.length;qi++)Fo[qi]();Fo=null,qi=0}}const jr=s=>s.id==null?1/0:s.id,uI=(s,a)=>{const d=jr(s)-jr(a);if(d===0){if(s.pre&&!a.pre)return-1;if(a.pre&&!s.pre)return 1}return d};function _0(s){cu=!1,Rr=!0,vn.sort(uI);const a=ho;try{for(To=0;To<vn.length;To++){const d=vn[To];d&&d.active!==!1&&mi(d,null,14)}}finally{To=0,vn.length=0,k0(),Rr=!1,qu=null,(vn.length||Os.length)&&_0()}}function hI(s,a,...d){if(s.isUnmounted)return;const p=s.vnode.props||Mt;let h=d;const k=a.startsWith("update:"),m=k&&a.slice(7);if(m&&m in p){const A=`${m==="modelValue"?"model":m}Modifiers`,{number:E,trim:y}=p[A]||Mt;y&&(h=d.map(N=>nn(N)?N.trim():N)),E&&(h=d.map(dl))}let v,w=p[v=Fd(a)]||p[v=Fd(Po(a))];!w&&k&&(w=p[v=Fd(qs(a))]),w&&Jn(w,s,6,h);const x=p[v+"Once"];if(x){if(!s.emitted)s.emitted={};else if(s.emitted[v])return;s.emitted[v]=!0,Jn(x,s,6,h)}}function b0(s,a,d=!1){const p=a.emitsCache,h=p.get(s);if(h!==void 0)return h;const k=s.emits;let m={},v=!1;if(!Ve(s)){const w=x=>{const A=b0(x,a,!0);A&&(v=!0,bn(m,A))};!d&&a.mixins.length&&a.mixins.forEach(w),s.extends&&w(s.extends),s.mixins&&s.mixins.forEach(w)}return!k&&!v?(Ct(s)&&p.set(s,null),null):(Be(k)?k.forEach(w=>m[w]=null):bn(m,k),Ct(s)&&p.set(s,m),m)}function Al(s,a){return!s||!_l(a)?!1:(a=a.slice(2).replace(/Once$/,""),nt(s,a[0].toLowerCase()+a.slice(1))||nt(s,qs(a))||nt(s,a))}let Rn=null,yl=null;function hl(s){const a=Rn;return Rn=s,yl=s&&s.type.__scopeId||null,a}function Ot(s){yl=s}function $t(){yl=null}function ht(s,a=Rn,d){if(!a||s._n)return s;const p=(...h)=>{p._d&&Jb(-1);const k=hl(a);let m;try{m=s(...h)}finally{hl(k),p._d&&Jb(1)}return m};return p._n=!0,p._c=!0,p._d=!0,p}function Vd(s){const{type:a,vnode:d,proxy:p,withProxy:h,props:k,propsOptions:[m],slots:v,attrs:w,emit:x,render:A,renderCache:E,data:y,setupState:N,ctx:R,inheritAttrs:L}=s;let V,P;const D=hl(s);try{if(d.shapeFlag&4){const O=h||p;V=So(A.call(O,O,E,k,N,y,R)),P=w}else{const O=a;V=So(O.length>1?O(k,{attrs:w,slots:v,emit:x}):O(k,null)),P=a.props?w:pI(w)}}catch(O){Nr.length=0,Cl(O,s,1),V=Me(po)}let W=V;if(P&&L!==!1){const O=Object.keys(P),{shapeFlag:Q}=W;O.length&&Q&7&&(m&&O.some(Lu)&&(P=gI(P,m)),W=qo(W,P))}return d.dirs&&(W=qo(W),W.dirs=W.dirs?W.dirs.concat(d.dirs):d.dirs),d.transition&&(W.transition=d.transition),V=W,hl(D),V}const pI=s=>{let a;for(const d in s)(d==="class"||d==="style"||_l(d))&&((a||(a={}))[d]=s[d]);return a},gI=(s,a)=>{const d={};for(const p in s)(!Lu(p)||!(p.slice(9)in a))&&(d[p]=s[p]);return d};function fI(s,a,d){const{props:p,children:h,component:k}=s,{props:m,children:v,patchFlag:w}=a,x=k.emitsOptions;if(a.dirs||a.transition)return!0;if(d&&w>=0){if(w&1024)return!0;if(w&16)return p?Ub(p,m,x):!!m;if(w&8){const A=a.dynamicProps;for(let E=0;E<A.length;E++){const y=A[E];if(m[y]!==p[y]&&!Al(x,y))return!0}}}else return(h||v)&&(!v||!v.$stable)?!0:p===m?!1:p?m?Ub(p,m,x):!0:!!m;return!1}function Ub(s,a,d){const p=Object.keys(a);if(p.length!==Object.keys(s).length)return!0;for(let h=0;h<p.length;h++){const k=p[h];if(a[k]!==s[k]&&!Al(d,k))return!0}return!1}function mI({vnode:s,parent:a},d){for(;a&&a.subTree===s;)(s=a.vnode).el=d,a=a.parent}const kI=s=>s.__isSuspense;function _I(s,a){a&&a.pendingBranch?Be(s)?a.effects.push(...s):a.effects.push(s):dI(s)}function $s(s,a){if(Xt){let d=Xt.provides;const p=Xt.parent&&Xt.parent.provides;p===d&&(d=Xt.provides=Object.create(p)),d[s]=a}}function Fn(s,a,d=!1){const p=Xt||Rn;if(p){const h=p.parent==null?p.vnode.appContext&&p.vnode.appContext.provides:p.parent.provides;if(h&&s in h)return h[s];if(arguments.length>1)return d&&Ve(a)?a.call(p.proxy):a}}function xl(s,a){return Wu(s,null,a)}const Ja={};function No(s,a,d){return Wu(s,a,d)}function Wu(s,a,{immediate:d,deep:p,flush:h,onTrack:k,onTrigger:m}=Mt){const v=I3()===(Xt==null?void 0:Xt.scope)?Xt:null;let w,x=!1,A=!1;if(ct(s)?(w=()=>s.value,x=ul(s)):Ls(s)?(w=()=>s,p=!0):Be(s)?(A=!0,x=s.some(W=>Ls(W)||ul(W)),w=()=>s.map(W=>{if(ct(W))return W.value;if(Ls(W))return Ki(W);if(Ve(W))return mi(W,v,2)})):Ve(s)?a?w=()=>mi(s,v,2):w=()=>{if(!(v&&v.isUnmounted))return E&&E(),Jn(s,v,3,[y])}:w=ho,a&&p){const W=w;w=()=>Ki(W())}let E,y=W=>{E=P.onStop=()=>{mi(W,v,4)}},N;if(Vr)if(y=ho,a?d&&Jn(a,v,3,[w(),A?[]:void 0,y]):w(),h==="sync"){const W=pM();N=W.__watcherHandles||(W.__watcherHandles=[])}else return ho;let R=A?new Array(s.length).fill(Ja):Ja;const L=()=>{if(P.active)if(a){const W=P.run();(p||x||(A?W.some((O,Q)=>$r(O,R[Q])):$r(W,R)))&&(E&&E(),Jn(a,v,3,[W,R===Ja?void 0:A&&R[0]===Ja?[]:R,y]),R=W)}else P.run()};L.allowRecurse=!!a;let V;h==="sync"?V=L:h==="post"?V=()=>Nn(L,v&&v.suspense):(L.pre=!0,v&&(L.id=v.uid),V=()=>Gu(L));const P=new Ru(w,V);a?d?L():R=P.run():h==="post"?Nn(P.run.bind(P),v&&v.suspense):P.run();const D=()=>{P.stop(),v&&v.scope&&Ou(v.scope.effects,P)};return N&&N.push(D),D}function bI(s,a,d){const p=this.proxy,h=nn(s)?s.includes(".")?w0(p,s):()=>p[s]:s.bind(p,p);let k;Ve(a)?k=a:(k=a.handler,d=a);const m=Xt;Rs(this);const v=Wu(h,k.bind(p),d);return m?Rs(m):Qi(),v}function w0(s,a){const d=a.split(".");return()=>{let p=s;for(let h=0;h<d.length&&p;h++)p=p[d[h]];return p}}function Ki(s,a){if(!Ct(s)||s.__v_skip||(a=a||new Set,a.has(s)))return s;if(a.add(s),ct(s))Ki(s.value,a);else if(Be(s))for(let d=0;d<s.length;d++)Ki(s[d],a);else if(Hs(s)||Ps(s))s.forEach(d=>{Ki(d,a)});else if(Qw(s))for(const d in s)Ki(s[d],a);return s}function wI(){const s={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xt(()=>{s.isMounted=!0}),x0(()=>{s.isUnmounting=!0}),s}const Zn=[Function,Array],vI={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Zn,onEnter:Zn,onAfterEnter:Zn,onEnterCancelled:Zn,onBeforeLeave:Zn,onLeave:Zn,onAfterLeave:Zn,onLeaveCancelled:Zn,onBeforeAppear:Zn,onAppear:Zn,onAfterAppear:Zn,onAppearCancelled:Zn},setup(s,{slots:a}){const d=sM(),p=wI();let h;return()=>{const k=a.default&&A0(a.default(),!0);if(!k||!k.length)return;let m=k[0];if(k.length>1){for(const L of k)if(L.type!==po){m=L;break}}const v=dt(s),{mode:w}=v;if(p.isLeaving)return Ud(m);const x=Hb(m);if(!x)return Ud(m);const A=du(x,v,p,d);uu(x,A);const E=d.subTree,y=E&&Hb(E);let N=!1;const{getTransitionKey:R}=x.type;if(R){const L=R();h===void 0?h=L:L!==h&&(h=L,N=!0)}if(y&&y.type!==po&&(!Gi(x,y)||N)){const L=du(y,v,p,d);if(uu(y,L),w==="out-in")return p.isLeaving=!0,L.afterLeave=()=>{p.isLeaving=!1,d.update.active!==!1&&d.update()},Ud(m);w==="in-out"&&x.type!==po&&(L.delayLeave=(V,P,D)=>{const W=C0(p,y);W[String(y.key)]=y,V._leaveCb=()=>{P(),V._leaveCb=void 0,delete A.delayedLeave},A.delayedLeave=D})}return m}}},v0=vI;function C0(s,a){const{leavingVNodes:d}=s;let p=d.get(a.type);return p||(p=Object.create(null),d.set(a.type,p)),p}function du(s,a,d,p){const{appear:h,mode:k,persisted:m=!1,onBeforeEnter:v,onEnter:w,onAfterEnter:x,onEnterCancelled:A,onBeforeLeave:E,onLeave:y,onAfterLeave:N,onLeaveCancelled:R,onBeforeAppear:L,onAppear:V,onAfterAppear:P,onAppearCancelled:D}=a,W=String(s.key),O=C0(d,s),Q=(le,z)=>{le&&Jn(le,p,9,z)},H=(le,z)=>{const be=z[1];Q(le,z),Be(le)?le.every(ze=>ze.length<=1)&&be():le.length<=1&&be()},K={mode:k,persisted:m,beforeEnter(le){let z=v;if(!d.isMounted)if(h)z=L||v;else return;le._leaveCb&&le._leaveCb(!0);const be=O[W];be&&Gi(s,be)&&be.el._leaveCb&&be.el._leaveCb(),Q(z,[le])},enter(le){let z=w,be=x,ze=A;if(!d.isMounted)if(h)z=V||w,be=P||x,ze=D||A;else return;let me=!1;const Ne=le._enterCb=mt=>{me||(me=!0,mt?Q(ze,[le]):Q(be,[le]),K.delayedLeave&&K.delayedLeave(),le._enterCb=void 0)};z?H(z,[le,Ne]):Ne()},leave(le,z){const be=String(s.key);if(le._enterCb&&le._enterCb(!0),d.isUnmounting)return z();Q(E,[le]);let ze=!1;const me=le._leaveCb=Ne=>{ze||(ze=!0,z(),Ne?Q(R,[le]):Q(N,[le]),le._leaveCb=void 0,O[be]===s&&delete O[be])};O[be]=s,y?H(y,[le,me]):me()},clone(le){return du(le,a,d,p)}};return K}function Ud(s){if(El(s))return s=qo(s),s.children=null,s}function Hb(s){return El(s)?s.children?s.children[0]:void 0:s}function uu(s,a){s.shapeFlag&6&&s.component?uu(s.component.subTree,a):s.shapeFlag&128?(s.ssContent.transition=a.clone(s.ssContent),s.ssFallback.transition=a.clone(s.ssFallback)):s.transition=a}function A0(s,a=!1,d){let p=[],h=0;for(let k=0;k<s.length;k++){let m=s[k];const v=d==null?m.key:String(d)+String(m.key!=null?m.key:k);m.type===Fe?(m.patchFlag&128&&h++,p=p.concat(A0(m.children,a,v))):(a||m.type!==po)&&p.push(v!=null?qo(m,{key:v}):m)}if(h>1)for(let k=0;k<p.length;k++)p[k].patchFlag=-2;return p}function Ys(s){return Ve(s)?{setup:s,name:s.name}:s}const nl=s=>!!s.type.__asyncLoader,El=s=>s.type.__isKeepAlive;function CI(s,a){y0(s,"a",a)}function AI(s,a){y0(s,"da",a)}function y0(s,a,d=Xt){const p=s.__wdc||(s.__wdc=()=>{let h=d;for(;h;){if(h.isDeactivated)return;h=h.parent}return s()});if(Dl(a,p,d),d){let h=d.parent;for(;h&&h.parent;)El(h.parent.vnode)&&yI(p,a,d,h),h=h.parent}}function yI(s,a,d,p){const h=Dl(a,s,p,!0);Ku(()=>{Ou(p[a],h)},d)}function Dl(s,a,d=Xt,p=!1){if(d){const h=d[s]||(d[s]=[]),k=a.__weh||(a.__weh=(...m)=>{if(d.isUnmounted)return;Gs(),Rs(d);const v=Jn(a,d,s,m);return Qi(),Ws(),v});return p?h.unshift(k):h.push(k),k}}const Go=s=>(a,d=Xt)=>(!Vr||s==="sp")&&Dl(s,(...p)=>a(...p),d),xI=Go("bm"),xt=Go("m"),EI=Go("bu"),DI=Go("u"),x0=Go("bum"),Ku=Go("um"),II=Go("sp"),MI=Go("rtg"),SI=Go("rtc");function TI(s,a=Xt){Dl("ec",s,a)}function re(s,a){const d=Rn;if(d===null)return s;const p=Sl(d)||d.proxy,h=s.dirs||(s.dirs=[]);for(let k=0;k<a.length;k++){let[m,v,w,x=Mt]=a[k];m&&(Ve(m)&&(m={mounted:m,updated:m}),m.deep&&Ki(v),h.push({dir:m,instance:p,value:v,oldValue:void 0,arg:w,modifiers:x}))}return s}function ji(s,a,d,p){const h=s.dirs,k=a&&a.dirs;for(let m=0;m<h.length;m++){const v=h[m];k&&(v.oldValue=k[m].value);let w=v.dir[p];w&&(Gs(),Jn(w,d,8,[s.el,v,s,a]),Ws())}}const E0="components";function Vn(s,a){return NI(E0,s,!0,a)||s}const BI=Symbol();function NI(s,a,d=!0,p=!1){const h=Rn||Xt;if(h){const k=h.type;if(s===E0){const v=dM(k,!1);if(v&&(v===a||v===Po(a)||v===wl(Po(a))))return k}const m=qb(h[s]||k[s],a)||qb(h.appContext[s],a);return!m&&p?k:m}}function qb(s,a){return s&&(s[a]||s[Po(a)]||s[wl(Po(a))])}function it(s,a,d,p){let h;const k=d&&d[p];if(Be(s)||nn(s)){h=new Array(s.length);for(let m=0,v=s.length;m<v;m++)h[m]=a(s[m],m,void 0,k&&k[m])}else if(typeof s=="number"){h=new Array(s);for(let m=0;m<s;m++)h[m]=a(m+1,m,void 0,k&&k[m])}else if(Ct(s))if(s[Symbol.iterator])h=Array.from(s,(m,v)=>a(m,v,void 0,k&&k[v]));else{const m=Object.keys(s);h=new Array(m.length);for(let v=0,w=m.length;v<w;v++){const x=m[v];h[v]=a(s[x],x,v,k&&k[v])}}else h=[];return d&&(d[p]=h),h}const hu=s=>s?z0(s)?Sl(s)||s.proxy:hu(s.parent):null,Br=bn(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>hu(s.parent),$root:s=>hu(s.root),$emit:s=>s.emit,$options:s=>Yu(s),$forceUpdate:s=>s.f||(s.f=()=>Gu(s.update)),$nextTick:s=>s.n||(s.n=Vo.bind(s.proxy)),$watch:s=>bI.bind(s)}),Hd=(s,a)=>s!==Mt&&!s.__isScriptSetup&&nt(s,a),PI={get({_:s},a){const{ctx:d,setupState:p,data:h,props:k,accessCache:m,type:v,appContext:w}=s;let x;if(a[0]!=="$"){const N=m[a];if(N!==void 0)switch(N){case 1:return p[a];case 2:return h[a];case 4:return d[a];case 3:return k[a]}else{if(Hd(p,a))return m[a]=1,p[a];if(h!==Mt&&nt(h,a))return m[a]=2,h[a];if((x=s.propsOptions[0])&&nt(x,a))return m[a]=3,k[a];if(d!==Mt&&nt(d,a))return m[a]=4,d[a];pu&&(m[a]=0)}}const A=Br[a];let E,y;if(A)return a==="$attrs"&&Pn(s,"get",a),A(s);if((E=v.__cssModules)&&(E=E[a]))return E;if(d!==Mt&&nt(d,a))return m[a]=4,d[a];if(y=w.config.globalProperties,nt(y,a))return y[a]},set({_:s},a,d){const{data:p,setupState:h,ctx:k}=s;return Hd(h,a)?(h[a]=d,!0):p!==Mt&&nt(p,a)?(p[a]=d,!0):nt(s.props,a)||a[0]==="$"&&a.slice(1)in s?!1:(k[a]=d,!0)},has({_:{data:s,setupState:a,accessCache:d,ctx:p,appContext:h,propsOptions:k}},m){let v;return!!d[m]||s!==Mt&&nt(s,m)||Hd(a,m)||(v=k[0])&&nt(v,m)||nt(p,m)||nt(Br,m)||nt(h.config.globalProperties,m)},defineProperty(s,a,d){return d.get!=null?s._.accessCache[a]=0:nt(d,"value")&&this.set(s,a,d.value,null),Reflect.defineProperty(s,a,d)}};let pu=!0;function LI(s){const a=Yu(s),d=s.proxy,p=s.ctx;pu=!1,a.beforeCreate&&Gb(a.beforeCreate,s,"bc");const{data:h,computed:k,methods:m,watch:v,provide:w,inject:x,created:A,beforeMount:E,mounted:y,beforeUpdate:N,updated:R,activated:L,deactivated:V,beforeDestroy:P,beforeUnmount:D,destroyed:W,unmounted:O,render:Q,renderTracked:H,renderTriggered:K,errorCaptured:le,serverPrefetch:z,expose:be,inheritAttrs:ze,components:me,directives:Ne,filters:mt}=a;if(x&&OI(x,p,null,s.appContext.config.unwrapInjectedRef),m)for(const ae in m){const Ie=m[ae];Ve(Ie)&&(p[ae]=Ie.bind(d))}if(h){const ae=h.call(d,d);Ct(ae)&&(s.data=Ks(ae))}if(pu=!0,k)for(const ae in k){const Ie=k[ae],st=Ve(Ie)?Ie.bind(d,d):Ve(Ie.get)?Ie.get.bind(d,d):ho,Oe=!Ve(Ie)&&Ve(Ie.set)?Ie.set.bind(d):ho,Ut=Ze({get:st,set:Oe});Object.defineProperty(p,ae,{enumerable:!0,configurable:!0,get:()=>Ut.value,set:Lt=>Ut.value=Lt})}if(v)for(const ae in v)D0(v[ae],p,d,ae);if(w){const ae=Ve(w)?w.call(d):w;Reflect.ownKeys(ae).forEach(Ie=>{$s(Ie,ae[Ie])})}A&&Gb(A,s,"c");function Ye(ae,Ie){Be(Ie)?Ie.forEach(st=>ae(st.bind(d))):Ie&&ae(Ie.bind(d))}if(Ye(xI,E),Ye(xt,y),Ye(EI,N),Ye(DI,R),Ye(CI,L),Ye(AI,V),Ye(TI,le),Ye(SI,H),Ye(MI,K),Ye(x0,D),Ye(Ku,O),Ye(II,z),Be(be))if(be.length){const ae=s.exposed||(s.exposed={});be.forEach(Ie=>{Object.defineProperty(ae,Ie,{get:()=>d[Ie],set:st=>d[Ie]=st})})}else s.exposed||(s.exposed={});Q&&s.render===ho&&(s.render=Q),ze!=null&&(s.inheritAttrs=ze),me&&(s.components=me),Ne&&(s.directives=Ne)}function OI(s,a,d=ho,p=!1){Be(s)&&(s=gu(s));for(const h in s){const k=s[h];let m;Ct(k)?"default"in k?m=Fn(k.from||h,k.default,!0):m=Fn(k.from||h):m=Fn(k),ct(m)&&p?Object.defineProperty(a,h,{enumerable:!0,configurable:!0,get:()=>m.value,set:v=>m.value=v}):a[h]=m}}function Gb(s,a,d){Jn(Be(s)?s.map(p=>p.bind(a.proxy)):s.bind(a.proxy),a,d)}function D0(s,a,d,p){const h=p.includes(".")?w0(d,p):()=>d[p];if(nn(s)){const k=a[s];Ve(k)&&No(h,k)}else if(Ve(s))No(h,s.bind(d));else if(Ct(s))if(Be(s))s.forEach(k=>D0(k,a,d,p));else{const k=Ve(s.handler)?s.handler.bind(d):a[s.handler];Ve(k)&&No(h,k,s)}}function Yu(s){const a=s.type,{mixins:d,extends:p}=a,{mixins:h,optionsCache:k,config:{optionMergeStrategies:m}}=s.appContext,v=k.get(a);let w;return v?w=v:!h.length&&!d&&!p?w=a:(w={},h.length&&h.forEach(x=>pl(w,x,m,!0)),pl(w,a,m)),Ct(a)&&k.set(a,w),w}function pl(s,a,d,p=!1){const{mixins:h,extends:k}=a;k&&pl(s,k,d,!0),h&&h.forEach(m=>pl(s,m,d,!0));for(const m in a)if(!(p&&m==="expose")){const v=$I[m]||d&&d[m];s[m]=v?v(s[m],a[m]):a[m]}return s}const $I={data:Wb,props:Hi,emits:Hi,methods:Hi,computed:Hi,beforeCreate:Dn,created:Dn,beforeMount:Dn,mounted:Dn,beforeUpdate:Dn,updated:Dn,beforeDestroy:Dn,beforeUnmount:Dn,destroyed:Dn,unmounted:Dn,activated:Dn,deactivated:Dn,errorCaptured:Dn,serverPrefetch:Dn,components:Hi,directives:Hi,watch:RI,provide:Wb,inject:zI};function Wb(s,a){return a?s?function(){return bn(Ve(s)?s.call(this,this):s,Ve(a)?a.call(this,this):a)}:a:s}function zI(s,a){return Hi(gu(s),gu(a))}function gu(s){if(Be(s)){const a={};for(let d=0;d<s.length;d++)a[s[d]]=s[d];return a}return s}function Dn(s,a){return s?[...new Set([].concat(s,a))]:a}function Hi(s,a){return s?bn(bn(Object.create(null),s),a):a}function RI(s,a){if(!s)return a;if(!a)return s;const d=bn(Object.create(null),s);for(const p in a)d[p]=Dn(s[p],a[p]);return d}function jI(s,a,d,p=!1){const h={},k={};cl(k,Ml,1),s.propsDefaults=Object.create(null),I0(s,a,h,k);for(const m in s.propsOptions[0])m in h||(h[m]=void 0);d?s.props=p?h:tI(h):s.type.props?s.props=h:s.props=k,s.attrs=k}function FI(s,a,d,p){const{props:h,attrs:k,vnode:{patchFlag:m}}=s,v=dt(h),[w]=s.propsOptions;let x=!1;if((p||m>0)&&!(m&16)){if(m&8){const A=s.vnode.dynamicProps;for(let E=0;E<A.length;E++){let y=A[E];if(Al(s.emitsOptions,y))continue;const N=a[y];if(w)if(nt(k,y))N!==k[y]&&(k[y]=N,x=!0);else{const R=Po(y);h[R]=fu(w,v,R,N,s,!1)}else N!==k[y]&&(k[y]=N,x=!0)}}}else{I0(s,a,h,k)&&(x=!0);let A;for(const E in v)(!a||!nt(a,E)&&((A=qs(E))===E||!nt(a,A)))&&(w?d&&(d[E]!==void 0||d[A]!==void 0)&&(h[E]=fu(w,v,E,void 0,s,!0)):delete h[E]);if(k!==v)for(const E in k)(!a||!nt(a,E))&&(delete k[E],x=!0)}x&&Ho(s,"set","$attrs")}function I0(s,a,d,p){const[h,k]=s.propsOptions;let m=!1,v;if(a)for(let w in a){if(el(w))continue;const x=a[w];let A;h&&nt(h,A=Po(w))?!k||!k.includes(A)?d[A]=x:(v||(v={}))[A]=x:Al(s.emitsOptions,w)||(!(w in p)||x!==p[w])&&(p[w]=x,m=!0)}if(k){const w=dt(d),x=v||Mt;for(let A=0;A<k.length;A++){const E=k[A];d[E]=fu(h,w,E,x[E],s,!nt(x,E))}}return m}function fu(s,a,d,p,h,k){const m=s[d];if(m!=null){const v=nt(m,"default");if(v&&p===void 0){const w=m.default;if(m.type!==Function&&Ve(w)){const{propsDefaults:x}=h;d in x?p=x[d]:(Rs(h),p=x[d]=w.call(null,a),Qi())}else p=w}m[0]&&(k&&!v?p=!1:m[1]&&(p===""||p===qs(d))&&(p=!0))}return p}function M0(s,a,d=!1){const p=a.propsCache,h=p.get(s);if(h)return h;const k=s.props,m={},v=[];let w=!1;if(!Ve(s)){const A=E=>{w=!0;const[y,N]=M0(E,a,!0);bn(m,y),N&&v.push(...N)};!d&&a.mixins.length&&a.mixins.forEach(A),s.extends&&A(s.extends),s.mixins&&s.mixins.forEach(A)}if(!k&&!w)return Ct(s)&&p.set(s,Ns),Ns;if(Be(k))for(let A=0;A<k.length;A++){const E=Po(k[A]);Kb(E)&&(m[E]=Mt)}else if(k)for(const A in k){const E=Po(A);if(Kb(E)){const y=k[A],N=m[E]=Be(y)||Ve(y)?{type:y}:Object.assign({},y);if(N){const R=Zb(Boolean,N.type),L=Zb(String,N.type);N[0]=R>-1,N[1]=L<0||R<L,(R>-1||nt(N,"default"))&&v.push(E)}}}const x=[m,v];return Ct(s)&&p.set(s,x),x}function Kb(s){return s[0]!=="$"}function Yb(s){const a=s&&s.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:s===null?"null":""}function Qb(s,a){return Yb(s)===Yb(a)}function Zb(s,a){return Be(a)?a.findIndex(d=>Qb(d,s)):Ve(a)&&Qb(a,s)?0:-1}const S0=s=>s[0]==="_"||s==="$stable",Qu=s=>Be(s)?s.map(So):[So(s)],VI=(s,a,d)=>{if(a._n)return a;const p=ht((...h)=>Qu(a(...h)),d);return p._c=!1,p},T0=(s,a,d)=>{const p=s._ctx;for(const h in s){if(S0(h))continue;const k=s[h];if(Ve(k))a[h]=VI(h,k,p);else if(k!=null){const m=Qu(k);a[h]=()=>m}}},B0=(s,a)=>{const d=Qu(a);s.slots.default=()=>d},UI=(s,a)=>{if(s.vnode.shapeFlag&32){const d=a._;d?(s.slots=dt(a),cl(a,"_",d)):T0(a,s.slots={})}else s.slots={},a&&B0(s,a);cl(s.slots,Ml,1)},HI=(s,a,d)=>{const{vnode:p,slots:h}=s;let k=!0,m=Mt;if(p.shapeFlag&32){const v=a._;v?d&&v===1?k=!1:(bn(h,a),!d&&v===1&&delete h._):(k=!a.$stable,T0(a,h)),m=a}else a&&(B0(s,a),m={default:1});if(k)for(const v in h)!S0(v)&&!(v in m)&&delete h[v]};function N0(){return{app:null,config:{isNativeTag:_3,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qI=0;function GI(s,a){return function(p,h=null){Ve(p)||(p=Object.assign({},p)),h!=null&&!Ct(h)&&(h=null);const k=N0(),m=new Set;let v=!1;const w=k.app={_uid:qI++,_component:p,_props:h,_container:null,_context:k,_instance:null,version:gM,get config(){return k.config},set config(x){},use(x,...A){return m.has(x)||(x&&Ve(x.install)?(m.add(x),x.install(w,...A)):Ve(x)&&(m.add(x),x(w,...A))),w},mixin(x){return k.mixins.includes(x)||k.mixins.push(x),w},component(x,A){return A?(k.components[x]=A,w):k.components[x]},directive(x,A){return A?(k.directives[x]=A,w):k.directives[x]},mount(x,A,E){if(!v){const y=Me(p,h);return y.appContext=k,A&&a?a(y,x):s(y,x,E),v=!0,w._container=x,x.__vue_app__=w,Sl(y.component)||y.component.proxy}},unmount(){v&&(s(null,w._container),delete w._container.__vue_app__)},provide(x,A){return k.provides[x]=A,w}};return w}}function mu(s,a,d,p,h=!1){if(Be(s)){s.forEach((y,N)=>mu(y,a&&(Be(a)?a[N]:a),d,p,h));return}if(nl(p)&&!h)return;const k=p.shapeFlag&4?Sl(p.component)||p.component.proxy:p.el,m=h?null:k,{i:v,r:w}=s,x=a&&a.r,A=v.refs===Mt?v.refs={}:v.refs,E=v.setupState;if(x!=null&&x!==w&&(nn(x)?(A[x]=null,nt(E,x)&&(E[x]=null)):ct(x)&&(x.value=null)),Ve(w))mi(w,v,12,[m,A]);else{const y=nn(w),N=ct(w);if(y||N){const R=()=>{if(s.f){const L=y?nt(E,w)?E[w]:A[w]:w.value;h?Be(L)&&Ou(L,k):Be(L)?L.includes(k)||L.push(k):y?(A[w]=[k],nt(E,w)&&(E[w]=A[w])):(w.value=[k],s.k&&(A[s.k]=w.value))}else y?(A[w]=m,nt(E,w)&&(E[w]=m)):N&&(w.value=m,s.k&&(A[s.k]=m))};m?(R.id=-1,Nn(R,d)):R()}}}const Nn=_I;function WI(s){return KI(s)}function KI(s,a){const d=x3();d.__VUE__=!0;const{insert:p,remove:h,patchProp:k,createElement:m,createText:v,createComment:w,setText:x,setElementText:A,parentNode:E,nextSibling:y,setScopeId:N=ho,insertStaticContent:R}=s,L=(j,U,ee,Z=null,ne=null,ue=null,Ce=!1,pe=null,we=!!U.dynamicChildren)=>{if(j===U)return;j&&!Gi(j,U)&&(Z=ve(j),Lt(j,ne,ue,!0),j=null),U.patchFlag===-2&&(we=!1,U.dynamicChildren=null);const{type:ce,ref:Se,shapeFlag:xe}=U;switch(ce){case Il:V(j,U,ee,Z);break;case po:P(j,U,ee,Z);break;case ol:j==null&&D(U,ee,Z,Ce);break;case Fe:me(j,U,ee,Z,ne,ue,Ce,pe,we);break;default:xe&1?Q(j,U,ee,Z,ne,ue,Ce,pe,we):xe&6?Ne(j,U,ee,Z,ne,ue,Ce,pe,we):(xe&64||xe&128)&&ce.process(j,U,ee,Z,ne,ue,Ce,pe,we,Ue)}Se!=null&&ne&&mu(Se,j&&j.ref,ue,U||j,!U)},V=(j,U,ee,Z)=>{if(j==null)p(U.el=v(U.children),ee,Z);else{const ne=U.el=j.el;U.children!==j.children&&x(ne,U.children)}},P=(j,U,ee,Z)=>{j==null?p(U.el=w(U.children||""),ee,Z):U.el=j.el},D=(j,U,ee,Z)=>{[j.el,j.anchor]=R(j.children,U,ee,Z,j.el,j.anchor)},W=({el:j,anchor:U},ee,Z)=>{let ne;for(;j&&j!==U;)ne=y(j),p(j,ee,Z),j=ne;p(U,ee,Z)},O=({el:j,anchor:U})=>{let ee;for(;j&&j!==U;)ee=y(j),h(j),j=ee;h(U)},Q=(j,U,ee,Z,ne,ue,Ce,pe,we)=>{Ce=Ce||U.type==="svg",j==null?H(U,ee,Z,ne,ue,Ce,pe,we):z(j,U,ne,ue,Ce,pe,we)},H=(j,U,ee,Z,ne,ue,Ce,pe)=>{let we,ce;const{type:Se,props:xe,shapeFlag:De,transition:$e,dirs:qe}=j;if(we=j.el=m(j.type,ue,xe&&xe.is,xe),De&8?A(we,j.children):De&16&&le(j.children,we,null,Z,ne,ue&&Se!=="foreignObject",Ce,pe),qe&&ji(j,null,Z,"created"),K(we,j,j.scopeId,Ce,Z),xe){for(const He in xe)He!=="value"&&!el(He)&&k(we,He,null,xe[He],ue,j.children,Z,ne,ye);"value"in xe&&k(we,"value",null,xe.value),(ce=xe.onVnodeBeforeMount)&&Mo(ce,Z,j)}qe&&ji(j,null,Z,"beforeMount");const Ge=(!ne||ne&&!ne.pendingBranch)&&$e&&!$e.persisted;Ge&&$e.beforeEnter(we),p(we,U,ee),((ce=xe&&xe.onVnodeMounted)||Ge||qe)&&Nn(()=>{ce&&Mo(ce,Z,j),Ge&&$e.enter(we),qe&&ji(j,null,Z,"mounted")},ne)},K=(j,U,ee,Z,ne)=>{if(ee&&N(j,ee),Z)for(let ue=0;ue<Z.length;ue++)N(j,Z[ue]);if(ne){let ue=ne.subTree;if(U===ue){const Ce=ne.vnode;K(j,Ce,Ce.scopeId,Ce.slotScopeIds,ne.parent)}}},le=(j,U,ee,Z,ne,ue,Ce,pe,we=0)=>{for(let ce=we;ce<j.length;ce++){const Se=j[ce]=pe?hi(j[ce]):So(j[ce]);L(null,Se,U,ee,Z,ne,ue,Ce,pe)}},z=(j,U,ee,Z,ne,ue,Ce)=>{const pe=U.el=j.el;let{patchFlag:we,dynamicChildren:ce,dirs:Se}=U;we|=j.patchFlag&16;const xe=j.props||Mt,De=U.props||Mt;let $e;ee&&Fi(ee,!1),($e=De.onVnodeBeforeUpdate)&&Mo($e,ee,U,j),Se&&ji(U,j,ee,"beforeUpdate"),ee&&Fi(ee,!0);const qe=ne&&U.type!=="foreignObject";if(ce?be(j.dynamicChildren,ce,pe,ee,Z,qe,ue):Ce||Ie(j,U,pe,null,ee,Z,qe,ue,!1),we>0){if(we&16)ze(pe,U,xe,De,ee,Z,ne);else if(we&2&&xe.class!==De.class&&k(pe,"class",null,De.class,ne),we&4&&k(pe,"style",xe.style,De.style,ne),we&8){const Ge=U.dynamicProps;for(let He=0;He<Ge.length;He++){const jt=Ge[He],On=xe[jt],Ko=De[jt];(Ko!==On||jt==="value")&&k(pe,jt,On,Ko,ne,j.children,ee,Z,ye)}}we&1&&j.children!==U.children&&A(pe,U.children)}else!Ce&&ce==null&&ze(pe,U,xe,De,ee,Z,ne);(($e=De.onVnodeUpdated)||Se)&&Nn(()=>{$e&&Mo($e,ee,U,j),Se&&ji(U,j,ee,"updated")},Z)},be=(j,U,ee,Z,ne,ue,Ce)=>{for(let pe=0;pe<U.length;pe++){const we=j[pe],ce=U[pe],Se=we.el&&(we.type===Fe||!Gi(we,ce)||we.shapeFlag&70)?E(we.el):ee;L(we,ce,Se,null,Z,ne,ue,Ce,!0)}},ze=(j,U,ee,Z,ne,ue,Ce)=>{if(ee!==Z){if(ee!==Mt)for(const pe in ee)!el(pe)&&!(pe in Z)&&k(j,pe,ee[pe],null,Ce,U.children,ne,ue,ye);for(const pe in Z){if(el(pe))continue;const we=Z[pe],ce=ee[pe];we!==ce&&pe!=="value"&&k(j,pe,ce,we,Ce,U.children,ne,ue,ye)}"value"in Z&&k(j,"value",ee.value,Z.value)}},me=(j,U,ee,Z,ne,ue,Ce,pe,we)=>{const ce=U.el=j?j.el:v(""),Se=U.anchor=j?j.anchor:v("");let{patchFlag:xe,dynamicChildren:De,slotScopeIds:$e}=U;$e&&(pe=pe?pe.concat($e):$e),j==null?(p(ce,ee,Z),p(Se,ee,Z),le(U.children,ee,Se,ne,ue,Ce,pe,we)):xe>0&&xe&64&&De&&j.dynamicChildren?(be(j.dynamicChildren,De,ee,ne,ue,Ce,pe),(U.key!=null||ne&&U===ne.subTree)&&P0(j,U,!0)):Ie(j,U,ee,Se,ne,ue,Ce,pe,we)},Ne=(j,U,ee,Z,ne,ue,Ce,pe,we)=>{U.slotScopeIds=pe,j==null?U.shapeFlag&512?ne.ctx.activate(U,ee,Z,Ce,we):mt(U,ee,Z,ne,ue,Ce,we):Vt(j,U,we)},mt=(j,U,ee,Z,ne,ue,Ce)=>{const pe=j.component=iM(j,Z,ne);if(El(j)&&(pe.ctx.renderer=Ue),rM(pe),pe.asyncDep){if(ne&&ne.registerDep(pe,Ye),!j.el){const we=pe.subTree=Me(po);P(null,we,U,ee)}return}Ye(pe,j,U,ee,ne,ue,Ce)},Vt=(j,U,ee)=>{const Z=U.component=j.component;if(fI(j,U,ee))if(Z.asyncDep&&!Z.asyncResolved){ae(Z,U,ee);return}else Z.next=U,cI(Z.update),Z.update();else U.el=j.el,Z.vnode=U},Ye=(j,U,ee,Z,ne,ue,Ce)=>{const pe=()=>{if(j.isMounted){let{next:Se,bu:xe,u:De,parent:$e,vnode:qe}=j,Ge=Se,He;Fi(j,!1),Se?(Se.el=qe.el,ae(j,Se,Ce)):Se=qe,xe&&tl(xe),(He=Se.props&&Se.props.onVnodeBeforeUpdate)&&Mo(He,$e,Se,qe),Fi(j,!0);const jt=Vd(j),On=j.subTree;j.subTree=jt,L(On,jt,E(On.el),ve(On),j,ne,ue),Se.el=jt.el,Ge===null&&mI(j,jt.el),De&&Nn(De,ne),(He=Se.props&&Se.props.onVnodeUpdated)&&Nn(()=>Mo(He,$e,Se,qe),ne)}else{let Se;const{el:xe,props:De}=U,{bm:$e,m:qe,parent:Ge}=j,He=nl(U);if(Fi(j,!1),$e&&tl($e),!He&&(Se=De&&De.onVnodeBeforeMount)&&Mo(Se,Ge,U),Fi(j,!0),xe&&je){const jt=()=>{j.subTree=Vd(j),je(xe,j.subTree,j,ne,null)};He?U.type.__asyncLoader().then(()=>!j.isUnmounted&&jt()):jt()}else{const jt=j.subTree=Vd(j);L(null,jt,ee,Z,j,ne,ue),U.el=jt.el}if(qe&&Nn(qe,ne),!He&&(Se=De&&De.onVnodeMounted)){const jt=U;Nn(()=>Mo(Se,Ge,jt),ne)}(U.shapeFlag&256||Ge&&nl(Ge.vnode)&&Ge.vnode.shapeFlag&256)&&j.a&&Nn(j.a,ne),j.isMounted=!0,U=ee=Z=null}},we=j.effect=new Ru(pe,()=>Gu(ce),j.scope),ce=j.update=()=>we.run();ce.id=j.uid,Fi(j,!0),ce()},ae=(j,U,ee)=>{U.component=j;const Z=j.vnode.props;j.vnode=U,j.next=null,FI(j,U.props,Z,ee),HI(j,U.children,ee),Gs(),Vb(),Ws()},Ie=(j,U,ee,Z,ne,ue,Ce,pe,we=!1)=>{const ce=j&&j.children,Se=j?j.shapeFlag:0,xe=U.children,{patchFlag:De,shapeFlag:$e}=U;if(De>0){if(De&128){Oe(ce,xe,ee,Z,ne,ue,Ce,pe,we);return}else if(De&256){st(ce,xe,ee,Z,ne,ue,Ce,pe,we);return}}$e&8?(Se&16&&ye(ce,ne,ue),xe!==ce&&A(ee,xe)):Se&16?$e&16?Oe(ce,xe,ee,Z,ne,ue,Ce,pe,we):ye(ce,ne,ue,!0):(Se&8&&A(ee,""),$e&16&&le(xe,ee,Z,ne,ue,Ce,pe,we))},st=(j,U,ee,Z,ne,ue,Ce,pe,we)=>{j=j||Ns,U=U||Ns;const ce=j.length,Se=U.length,xe=Math.min(ce,Se);let De;for(De=0;De<xe;De++){const $e=U[De]=we?hi(U[De]):So(U[De]);L(j[De],$e,ee,null,ne,ue,Ce,pe,we)}ce>Se?ye(j,ne,ue,!0,!1,xe):le(U,ee,Z,ne,ue,Ce,pe,we,xe)},Oe=(j,U,ee,Z,ne,ue,Ce,pe,we)=>{let ce=0;const Se=U.length;let xe=j.length-1,De=Se-1;for(;ce<=xe&&ce<=De;){const $e=j[ce],qe=U[ce]=we?hi(U[ce]):So(U[ce]);if(Gi($e,qe))L($e,qe,ee,null,ne,ue,Ce,pe,we);else break;ce++}for(;ce<=xe&&ce<=De;){const $e=j[xe],qe=U[De]=we?hi(U[De]):So(U[De]);if(Gi($e,qe))L($e,qe,ee,null,ne,ue,Ce,pe,we);else break;xe--,De--}if(ce>xe){if(ce<=De){const $e=De+1,qe=$e<Se?U[$e].el:Z;for(;ce<=De;)L(null,U[ce]=we?hi(U[ce]):So(U[ce]),ee,qe,ne,ue,Ce,pe,we),ce++}}else if(ce>De)for(;ce<=xe;)Lt(j[ce],ne,ue,!0),ce++;else{const $e=ce,qe=ce,Ge=new Map;for(ce=qe;ce<=De;ce++){const yn=U[ce]=we?hi(U[ce]):So(U[ce]);yn.key!=null&&Ge.set(yn.key,ce)}let He,jt=0;const On=De-qe+1;let Ko=!1,Yo=0;const bi=new Array(On);for(ce=0;ce<On;ce++)bi[ce]=0;for(ce=$e;ce<=xe;ce++){const yn=j[ce];if(jt>=On){Lt(yn,ne,ue,!0);continue}let Hn;if(yn.key!=null)Hn=Ge.get(yn.key);else for(He=qe;He<=De;He++)if(bi[He-qe]===0&&Gi(yn,U[He])){Hn=He;break}Hn===void 0?Lt(yn,ne,ue,!0):(bi[Hn-qe]=ce+1,Hn>=Yo?Yo=Hn:Ko=!0,L(yn,U[Hn],ee,null,ne,ue,Ce,pe,we),jt++)}const Jr=Ko?YI(bi):Ns;for(He=Jr.length-1,ce=On-1;ce>=0;ce--){const yn=qe+ce,Hn=U[yn],Xr=yn+1<Se?U[yn+1].el:Z;bi[ce]===0?L(null,Hn,ee,Xr,ne,ue,Ce,pe,we):Ko&&(He<0||ce!==Jr[He]?Ut(Hn,ee,Xr,2):He--)}}},Ut=(j,U,ee,Z,ne=null)=>{const{el:ue,type:Ce,transition:pe,children:we,shapeFlag:ce}=j;if(ce&6){Ut(j.component.subTree,U,ee,Z);return}if(ce&128){j.suspense.move(U,ee,Z);return}if(ce&64){Ce.move(j,U,ee,Ue);return}if(Ce===Fe){p(ue,U,ee);for(let xe=0;xe<we.length;xe++)Ut(we[xe],U,ee,Z);p(j.anchor,U,ee);return}if(Ce===ol){W(j,U,ee);return}if(Z!==2&&ce&1&&pe)if(Z===0)pe.beforeEnter(ue),p(ue,U,ee),Nn(()=>pe.enter(ue),ne);else{const{leave:xe,delayLeave:De,afterLeave:$e}=pe,qe=()=>p(ue,U,ee),Ge=()=>{xe(ue,()=>{qe(),$e&&$e()})};De?De(ue,qe,Ge):Ge()}else p(ue,U,ee)},Lt=(j,U,ee,Z=!1,ne=!1)=>{const{type:ue,props:Ce,ref:pe,children:we,dynamicChildren:ce,shapeFlag:Se,patchFlag:xe,dirs:De}=j;if(pe!=null&&mu(pe,null,ee,j,!0),Se&256){U.ctx.deactivate(j);return}const $e=Se&1&&De,qe=!nl(j);let Ge;if(qe&&(Ge=Ce&&Ce.onVnodeBeforeUnmount)&&Mo(Ge,U,j),Se&6)oe(j.component,ee,Z);else{if(Se&128){j.suspense.unmount(ee,Z);return}$e&&ji(j,null,U,"beforeUnmount"),Se&64?j.type.remove(j,U,ee,ne,Ue,Z):ce&&(ue!==Fe||xe>0&&xe&64)?ye(ce,U,ee,!1,!0):(ue===Fe&&xe&384||!ne&&Se&16)&&ye(we,U,ee),Z&&An(j)}(qe&&(Ge=Ce&&Ce.onVnodeUnmounted)||$e)&&Nn(()=>{Ge&&Mo(Ge,U,j),$e&&ji(j,null,U,"unmounted")},ee)},An=j=>{const{type:U,el:ee,anchor:Z,transition:ne}=j;if(U===Fe){an(ee,Z);return}if(U===ol){O(j);return}const ue=()=>{h(ee),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(j.shapeFlag&1&&ne&&!ne.persisted){const{leave:Ce,delayLeave:pe}=ne,we=()=>Ce(ee,ue);pe?pe(j.el,ue,we):we()}else ue()},an=(j,U)=>{let ee;for(;j!==U;)ee=y(j),h(j),j=ee;h(U)},oe=(j,U,ee)=>{const{bum:Z,scope:ne,update:ue,subTree:Ce,um:pe}=j;Z&&tl(Z),ne.stop(),ue&&(ue.active=!1,Lt(Ce,j,U,ee)),pe&&Nn(pe,U),Nn(()=>{j.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&j.asyncDep&&!j.asyncResolved&&j.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},ye=(j,U,ee,Z=!1,ne=!1,ue=0)=>{for(let Ce=ue;Ce<j.length;Ce++)Lt(j[Ce],U,ee,Z,ne)},ve=j=>j.shapeFlag&6?ve(j.component.subTree):j.shapeFlag&128?j.suspense.next():y(j.anchor||j.el),ke=(j,U,ee)=>{j==null?U._vnode&&Lt(U._vnode,null,null,!0):L(U._vnode||null,j,U,null,null,null,ee),Vb(),k0(),U._vnode=j},Ue={p:L,um:Lt,m:Ut,r:An,mt,mc:le,pc:Ie,pbc:be,n:ve,o:s};let rt,je;return a&&([rt,je]=a(Ue)),{render:ke,hydrate:rt,createApp:GI(ke,rt)}}function Fi({effect:s,update:a},d){s.allowRecurse=a.allowRecurse=d}function P0(s,a,d=!1){const p=s.children,h=a.children;if(Be(p)&&Be(h))for(let k=0;k<p.length;k++){const m=p[k];let v=h[k];v.shapeFlag&1&&!v.dynamicChildren&&((v.patchFlag<=0||v.patchFlag===32)&&(v=h[k]=hi(h[k]),v.el=m.el),d||P0(m,v)),v.type===Il&&(v.el=m.el)}}function YI(s){const a=s.slice(),d=[0];let p,h,k,m,v;const w=s.length;for(p=0;p<w;p++){const x=s[p];if(x!==0){if(h=d[d.length-1],s[h]<x){a[p]=h,d.push(p);continue}for(k=0,m=d.length-1;k<m;)v=k+m>>1,s[d[v]]<x?k=v+1:m=v;x<s[d[k]]&&(k>0&&(a[p]=d[k-1]),d[k]=p)}}for(k=d.length,m=d[k-1];k-- >0;)d[k]=m,m=a[m];return d}const QI=s=>s.__isTeleport,Fe=Symbol(void 0),Il=Symbol(void 0),po=Symbol(void 0),ol=Symbol(void 0),Nr=[];let uo=null;function S(s=!1){Nr.push(uo=s?null:[])}function ZI(){Nr.pop(),uo=Nr[Nr.length-1]||null}let Fr=1;function Jb(s){Fr+=s}function L0(s){return s.dynamicChildren=Fr>0?uo||Ns:null,ZI(),Fr>0&&uo&&uo.push(s),s}function T(s,a,d,p,h,k){return L0(g(s,a,d,p,h,k,!0))}function JI(s,a,d,p,h){return L0(Me(s,a,d,p,h,!0))}function ku(s){return s?s.__v_isVNode===!0:!1}function Gi(s,a){return s.type===a.type&&s.key===a.key}const Ml="__vInternal",O0=({key:s})=>s??null,il=({ref:s,ref_key:a,ref_for:d})=>s!=null?nn(s)||ct(s)||Ve(s)?{i:Rn,r:s,k:a,f:!!d}:s:null;function g(s,a=null,d=null,p=0,h=null,k=s===Fe?0:1,m=!1,v=!1){const w={__v_isVNode:!0,__v_skip:!0,type:s,props:a,key:a&&O0(a),ref:a&&il(a),scopeId:yl,slotScopeIds:null,children:d,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:k,patchFlag:p,dynamicProps:h,dynamicChildren:null,appContext:null,ctx:Rn};return v?(Zu(w,d),k&128&&s.normalize(w)):d&&(w.shapeFlag|=nn(d)?8:16),Fr>0&&!m&&uo&&(w.patchFlag>0||k&6)&&w.patchFlag!==32&&uo.push(w),w}const Me=XI;function XI(s,a=null,d=null,p=0,h=null,k=!1){if((!s||s===BI)&&(s=po),ku(s)){const v=qo(s,a,!0);return d&&Zu(v,d),Fr>0&&!k&&uo&&(v.shapeFlag&6?uo[uo.indexOf(s)]=v:uo.push(v)),v.patchFlag|=-2,v}if(uM(s)&&(s=s.__vccOpts),a){a=eM(a);let{class:v,style:w}=a;v&&!nn(v)&&(a.class=_e(v)),Ct(w)&&(l0(w)&&!Be(w)&&(w=bn({},w)),a.style=Nu(w))}const m=nn(s)?1:kI(s)?128:QI(s)?64:Ct(s)?4:Ve(s)?2:0;return g(s,a,d,p,h,m,k,!0)}function eM(s){return s?l0(s)||Ml in s?bn({},s):s:null}function qo(s,a,d=!1){const{props:p,ref:h,patchFlag:k,children:m}=s,v=a?tM(p||{},a):p;return{__v_isVNode:!0,__v_skip:!0,type:s.type,props:v,key:v&&O0(v),ref:a&&a.ref?d&&h?Be(h)?h.concat(il(a)):[h,il(a)]:il(a):h,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:m,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:a&&s.type!==Fe?k===-1?16:k|16:k,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:s.transition,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&qo(s.ssContent),ssFallback:s.ssFallback&&qo(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce}}function In(s=" ",a=0){return Me(Il,null,s,a)}function $0(s,a){const d=Me(ol,null,s);return d.staticCount=a,d}function Y(s="",a=!1){return a?(S(),JI(po,null,s)):Me(po,null,s)}function So(s){return s==null||typeof s=="boolean"?Me(po):Be(s)?Me(Fe,null,s.slice()):typeof s=="object"?hi(s):Me(Il,null,String(s))}function hi(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:qo(s)}function Zu(s,a){let d=0;const{shapeFlag:p}=s;if(a==null)a=null;else if(Be(a))d=16;else if(typeof a=="object")if(p&65){const h=a.default;h&&(h._c&&(h._d=!1),Zu(s,h()),h._c&&(h._d=!0));return}else{d=32;const h=a._;!h&&!(Ml in a)?a._ctx=Rn:h===3&&Rn&&(Rn.slots._===1?a._=1:(a._=2,s.patchFlag|=1024))}else Ve(a)?(a={default:a,_ctx:Rn},d=32):(a=String(a),p&64?(d=16,a=[In(a)]):d=8);s.children=a,s.shapeFlag|=d}function tM(...s){const a={};for(let d=0;d<s.length;d++){const p=s[d];for(const h in p)if(h==="class")a.class!==p.class&&(a.class=_e([a.class,p.class]));else if(h==="style")a.style=Nu([a.style,p.style]);else if(_l(h)){const k=a[h],m=p[h];m&&k!==m&&!(Be(k)&&k.includes(m))&&(a[h]=k?[].concat(k,m):m)}else h!==""&&(a[h]=p[h])}return a}function Mo(s,a,d,p=null){Jn(s,a,7,[d,p])}const nM=N0();let oM=0;function iM(s,a,d){const p=s.type,h=(a?a.appContext:s.appContext)||nM,k={uid:oM++,vnode:s,type:p,parent:a,appContext:h,root:null,next:null,subTree:null,effect:null,update:null,scope:new E3(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(h.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:M0(p,h),emitsOptions:b0(p,h),emit:null,emitted:null,propsDefaults:Mt,inheritAttrs:p.inheritAttrs,ctx:Mt,data:Mt,props:Mt,attrs:Mt,slots:Mt,refs:Mt,setupState:Mt,setupContext:null,suspense:d,suspenseId:d?d.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return k.ctx={_:k},k.root=a?a.root:k,k.emit=hI.bind(null,k),s.ce&&s.ce(k),k}let Xt=null;const sM=()=>Xt||Rn,Rs=s=>{Xt=s,s.scope.on()},Qi=()=>{Xt&&Xt.scope.off(),Xt=null};function z0(s){return s.vnode.shapeFlag&4}let Vr=!1;function rM(s,a=!1){Vr=a;const{props:d,children:p}=s.vnode,h=z0(s);jI(s,d,h,a),UI(s,p);const k=h?aM(s,a):void 0;return Vr=!1,k}function aM(s,a){const d=s.type;s.accessCache=Object.create(null),s.proxy=c0(new Proxy(s.ctx,PI));const{setup:p}=d;if(p){const h=s.setupContext=p.length>1?cM(s):null;Rs(s),Gs();const k=mi(p,s,0,[s.props,h]);if(Ws(),Qi(),Kw(k)){if(k.then(Qi,Qi),a)return k.then(m=>{Xb(s,m,a)}).catch(m=>{Cl(m,s,0)});s.asyncDep=k}else Xb(s,k,a)}else R0(s,a)}function Xb(s,a,d){Ve(a)?s.type.__ssrInlineRender?s.ssrRender=a:s.render=a:Ct(a)&&(s.setupState=p0(a)),R0(s,d)}let ew;function R0(s,a,d){const p=s.type;if(!s.render){if(!a&&ew&&!p.render){const h=p.template||Yu(s).template;if(h){const{isCustomElement:k,compilerOptions:m}=s.appContext.config,{delimiters:v,compilerOptions:w}=p,x=bn(bn({isCustomElement:k,delimiters:v},m),w);p.render=ew(h,x)}}s.render=p.render||ho}Rs(s),Gs(),LI(s),Ws(),Qi()}function lM(s){return new Proxy(s.attrs,{get(a,d){return Pn(s,"get","$attrs"),a[d]}})}function cM(s){const a=p=>{s.exposed=p||{}};let d;return{get attrs(){return d||(d=lM(s))},slots:s.slots,emit:s.emit,expose:a}}function Sl(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(p0(c0(s.exposed)),{get(a,d){if(d in a)return a[d];if(d in Br)return Br[d](s)},has(a,d){return d in a||d in Br}}))}function dM(s,a=!0){return Ve(s)?s.displayName||s.name:s.name||a&&s.__name}function uM(s){return Ve(s)&&"__vccOpts"in s}const Ze=(s,a)=>rI(s,a,Vr);function Tl(s,a,d){const p=arguments.length;return p===2?Ct(a)&&!Be(a)?ku(a)?Me(s,null,[a]):Me(s,a):Me(s,null,a):(p>3?d=Array.prototype.slice.call(arguments,2):p===3&&ku(d)&&(d=[d]),Me(s,a,d))}const hM=Symbol(""),pM=()=>Fn(hM),gM="3.2.47",fM="http://www.w3.org/2000/svg",Wi=typeof document<"u"?document:null,tw=Wi&&Wi.createElement("template"),mM={insert:(s,a,d)=>{a.insertBefore(s,d||null)},remove:s=>{const a=s.parentNode;a&&a.removeChild(s)},createElement:(s,a,d,p)=>{const h=a?Wi.createElementNS(fM,s):Wi.createElement(s,d?{is:d}:void 0);return s==="select"&&p&&p.multiple!=null&&h.setAttribute("multiple",p.multiple),h},createText:s=>Wi.createTextNode(s),createComment:s=>Wi.createComment(s),setText:(s,a)=>{s.nodeValue=a},setElementText:(s,a)=>{s.textContent=a},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Wi.querySelector(s),setScopeId(s,a){s.setAttribute(a,"")},insertStaticContent(s,a,d,p,h,k){const m=d?d.previousSibling:a.lastChild;if(h&&(h===k||h.nextSibling))for(;a.insertBefore(h.cloneNode(!0),d),!(h===k||!(h=h.nextSibling)););else{tw.innerHTML=p?`<svg>${s}</svg>`:s;const v=tw.content;if(p){const w=v.firstChild;for(;w.firstChild;)v.appendChild(w.firstChild);v.removeChild(w)}a.insertBefore(v,d)}return[m?m.nextSibling:a.firstChild,d?d.previousSibling:a.lastChild]}};function kM(s,a,d){const p=s._vtc;p&&(a=(a?[a,...p]:[...p]).join(" ")),a==null?s.removeAttribute("class"):d?s.setAttribute("class",a):s.className=a}function _M(s,a,d){const p=s.style,h=nn(d);if(d&&!h){if(a&&!nn(a))for(const k in a)d[k]==null&&_u(p,k,"");for(const k in d)_u(p,k,d[k])}else{const k=p.display;h?a!==d&&(p.cssText=d):a&&s.removeAttribute("style"),"_vod"in s&&(p.display=k)}}const nw=/\s*!important$/;function _u(s,a,d){if(Be(d))d.forEach(p=>_u(s,a,p));else if(d==null&&(d=""),a.startsWith("--"))s.setProperty(a,d);else{const p=bM(s,a);nw.test(d)?s.setProperty(qs(p),d.replace(nw,""),"important"):s[p]=d}}const ow=["Webkit","Moz","ms"],qd={};function bM(s,a){const d=qd[a];if(d)return d;let p=Po(a);if(p!=="filter"&&p in s)return qd[a]=p;p=wl(p);for(let h=0;h<ow.length;h++){const k=ow[h]+p;if(k in s)return qd[a]=k}return a}const iw="http://www.w3.org/1999/xlink";function wM(s,a,d,p,h){if(p&&a.startsWith("xlink:"))d==null?s.removeAttributeNS(iw,a.slice(6,a.length)):s.setAttributeNS(iw,a,d);else{const k=m3(a);d==null||k&&!Gw(d)?s.removeAttribute(a):s.setAttribute(a,k?"":d)}}function vM(s,a,d,p,h,k,m){if(a==="innerHTML"||a==="textContent"){p&&m(p,h,k),s[a]=d??"";return}if(a==="value"&&s.tagName!=="PROGRESS"&&!s.tagName.includes("-")){s._value=d;const w=d??"";(s.value!==w||s.tagName==="OPTION")&&(s.value=w),d==null&&s.removeAttribute(a);return}let v=!1;if(d===""||d==null){const w=typeof s[a];w==="boolean"?d=Gw(d):d==null&&w==="string"?(d="",v=!0):w==="number"&&(d=0,v=!0)}try{s[a]=d}catch{}v&&s.removeAttribute(a)}function gi(s,a,d,p){s.addEventListener(a,d,p)}function CM(s,a,d,p){s.removeEventListener(a,d,p)}function AM(s,a,d,p,h=null){const k=s._vei||(s._vei={}),m=k[a];if(p&&m)m.value=p;else{const[v,w]=yM(a);if(p){const x=k[a]=DM(p,h);gi(s,v,x,w)}else m&&(CM(s,v,m,w),k[a]=void 0)}}const sw=/(?:Once|Passive|Capture)$/;function yM(s){let a;if(sw.test(s)){a={};let p;for(;p=s.match(sw);)s=s.slice(0,s.length-p[0].length),a[p[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):qs(s.slice(2)),a]}let Gd=0;const xM=Promise.resolve(),EM=()=>Gd||(xM.then(()=>Gd=0),Gd=Date.now());function DM(s,a){const d=p=>{if(!p._vts)p._vts=Date.now();else if(p._vts<=d.attached)return;Jn(IM(p,d.value),a,5,[p])};return d.value=s,d.attached=EM(),d}function IM(s,a){if(Be(a)){const d=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{d.call(s),s._stopped=!0},a.map(p=>h=>!h._stopped&&p&&p(h))}else return a}const rw=/^on[a-z]/,MM=(s,a,d,p,h=!1,k,m,v,w)=>{a==="class"?kM(s,p,h):a==="style"?_M(s,d,p):_l(a)?Lu(a)||AM(s,a,d,p,m):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):SM(s,a,p,h))?vM(s,a,p,k,m,v,w):(a==="true-value"?s._trueValue=p:a==="false-value"&&(s._falseValue=p),wM(s,a,p,h))};function SM(s,a,d,p){return p?!!(a==="innerHTML"||a==="textContent"||a in s&&rw.test(a)&&Ve(d)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&s.tagName==="INPUT"||a==="type"&&s.tagName==="TEXTAREA"||rw.test(a)&&nn(d)?!1:a in s}const ai="transition",Dr="animation",Ju=(s,{slots:a})=>Tl(v0,TM(s),a);Ju.displayName="Transition";const j0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ju.props=bn({},v0.props,j0);const Vi=(s,a=[])=>{Be(s)?s.forEach(d=>d(...a)):s&&s(...a)},aw=s=>s?Be(s)?s.some(a=>a.length>1):s.length>1:!1;function TM(s){const a={};for(const me in s)me in j0||(a[me]=s[me]);if(s.css===!1)return a;const{name:d="v",type:p,duration:h,enterFromClass:k=`${d}-enter-from`,enterActiveClass:m=`${d}-enter-active`,enterToClass:v=`${d}-enter-to`,appearFromClass:w=k,appearActiveClass:x=m,appearToClass:A=v,leaveFromClass:E=`${d}-leave-from`,leaveActiveClass:y=`${d}-leave-active`,leaveToClass:N=`${d}-leave-to`}=s,R=BM(h),L=R&&R[0],V=R&&R[1],{onBeforeEnter:P,onEnter:D,onEnterCancelled:W,onLeave:O,onLeaveCancelled:Q,onBeforeAppear:H=P,onAppear:K=D,onAppearCancelled:le=W}=a,z=(me,Ne,mt)=>{Ui(me,Ne?A:v),Ui(me,Ne?x:m),mt&&mt()},be=(me,Ne)=>{me._isLeaving=!1,Ui(me,E),Ui(me,N),Ui(me,y),Ne&&Ne()},ze=me=>(Ne,mt)=>{const Vt=me?K:D,Ye=()=>z(Ne,me,mt);Vi(Vt,[Ne,Ye]),lw(()=>{Ui(Ne,me?w:k),li(Ne,me?A:v),aw(Vt)||cw(Ne,p,L,Ye)})};return bn(a,{onBeforeEnter(me){Vi(P,[me]),li(me,k),li(me,m)},onBeforeAppear(me){Vi(H,[me]),li(me,w),li(me,x)},onEnter:ze(!1),onAppear:ze(!0),onLeave(me,Ne){me._isLeaving=!0;const mt=()=>be(me,Ne);li(me,E),LM(),li(me,y),lw(()=>{me._isLeaving&&(Ui(me,E),li(me,N),aw(O)||cw(me,p,V,mt))}),Vi(O,[me,mt])},onEnterCancelled(me){z(me,!1),Vi(W,[me])},onAppearCancelled(me){z(me,!0),Vi(le,[me])},onLeaveCancelled(me){be(me),Vi(Q,[me])}})}function BM(s){if(s==null)return null;if(Ct(s))return[Wd(s.enter),Wd(s.leave)];{const a=Wd(s);return[a,a]}}function Wd(s){return y3(s)}function li(s,a){a.split(/\s+/).forEach(d=>d&&s.classList.add(d)),(s._vtc||(s._vtc=new Set)).add(a)}function Ui(s,a){a.split(/\s+/).forEach(p=>p&&s.classList.remove(p));const{_vtc:d}=s;d&&(d.delete(a),d.size||(s._vtc=void 0))}function lw(s){requestAnimationFrame(()=>{requestAnimationFrame(s)})}let NM=0;function cw(s,a,d,p){const h=s._endId=++NM,k=()=>{h===s._endId&&p()};if(d)return setTimeout(k,d);const{type:m,timeout:v,propCount:w}=PM(s,a);if(!m)return p();const x=m+"end";let A=0;const E=()=>{s.removeEventListener(x,y),k()},y=N=>{N.target===s&&++A>=w&&E()};setTimeout(()=>{A<w&&E()},v+1),s.addEventListener(x,y)}function PM(s,a){const d=window.getComputedStyle(s),p=R=>(d[R]||"").split(", "),h=p(`${ai}Delay`),k=p(`${ai}Duration`),m=dw(h,k),v=p(`${Dr}Delay`),w=p(`${Dr}Duration`),x=dw(v,w);let A=null,E=0,y=0;a===ai?m>0&&(A=ai,E=m,y=k.length):a===Dr?x>0&&(A=Dr,E=x,y=w.length):(E=Math.max(m,x),A=E>0?m>x?ai:Dr:null,y=A?A===ai?k.length:w.length:0);const N=A===ai&&/\b(transform|all)(,|$)/.test(p(`${ai}Property`).toString());return{type:A,timeout:E,propCount:y,hasTransform:N}}function dw(s,a){for(;s.length<a.length;)s=s.concat(s);return Math.max(...a.map((d,p)=>uw(d)+uw(s[p])))}function uw(s){return Number(s.slice(0,-1).replace(",","."))*1e3}function LM(){return document.body.offsetHeight}const js=s=>{const a=s.props["onUpdate:modelValue"]||!1;return Be(a)?d=>tl(a,d):a};function OM(s){s.target.composing=!0}function hw(s){const a=s.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const Te={created(s,{modifiers:{lazy:a,trim:d,number:p}},h){s._assign=js(h);const k=p||h.props&&h.props.type==="number";gi(s,a?"change":"input",m=>{if(m.target.composing)return;let v=s.value;d&&(v=v.trim()),k&&(v=dl(v)),s._assign(v)}),d&&gi(s,"change",()=>{s.value=s.value.trim()}),a||(gi(s,"compositionstart",OM),gi(s,"compositionend",hw),gi(s,"change",hw))},mounted(s,{value:a}){s.value=a??""},beforeUpdate(s,{value:a,modifiers:{lazy:d,trim:p,number:h}},k){if(s._assign=js(k),s.composing||document.activeElement===s&&s.type!=="range"&&(d||p&&s.value.trim()===a||(h||s.type==="number")&&dl(s.value)===a))return;const m=a??"";s.value!==m&&(s.value=m)}},ut={deep:!0,created(s,a,d){s._assign=js(d),gi(s,"change",()=>{const p=s._modelValue,h=Ur(s),k=s.checked,m=s._assign;if(Be(p)){const v=Pu(p,h),w=v!==-1;if(k&&!w)m(p.concat(h));else if(!k&&w){const x=[...p];x.splice(v,1),m(x)}}else if(Hs(p)){const v=new Set(p);k?v.add(h):v.delete(h),m(v)}else m(F0(s,k))})},mounted:pw,beforeUpdate(s,a,d){s._assign=js(d),pw(s,a,d)}};function pw(s,{value:a,oldValue:d},p){s._modelValue=a,Be(a)?s.checked=Pu(a,p.props.value)>-1:Hs(a)?s.checked=a.has(p.props.value):a!==d&&(s.checked=Wr(a,F0(s,!0)))}const Xn={deep:!0,created(s,{value:a,modifiers:{number:d}},p){const h=Hs(a);gi(s,"change",()=>{const k=Array.prototype.filter.call(s.options,m=>m.selected).map(m=>d?dl(Ur(m)):Ur(m));s._assign(s.multiple?h?new Set(k):k:k[0])}),s._assign=js(p)},mounted(s,{value:a}){gw(s,a)},beforeUpdate(s,a,d){s._assign=js(d)},updated(s,{value:a}){gw(s,a)}};function gw(s,a){const d=s.multiple;if(!(d&&!Be(a)&&!Hs(a))){for(let p=0,h=s.options.length;p<h;p++){const k=s.options[p],m=Ur(k);if(d)Be(a)?k.selected=Pu(a,m)>-1:k.selected=a.has(m);else if(Wr(Ur(k),a)){s.selectedIndex!==p&&(s.selectedIndex=p);return}}!d&&s.selectedIndex!==-1&&(s.selectedIndex=-1)}}function Ur(s){return"_value"in s?s._value:s.value}function F0(s,a){const d=a?"_trueValue":"_falseValue";return d in s?s[d]:a}const $M=["ctrl","shift","alt","meta"],zM={stop:s=>s.stopPropagation(),prevent:s=>s.preventDefault(),self:s=>s.target!==s.currentTarget,ctrl:s=>!s.ctrlKey,shift:s=>!s.shiftKey,alt:s=>!s.altKey,meta:s=>!s.metaKey,left:s=>"button"in s&&s.button!==0,middle:s=>"button"in s&&s.button!==1,right:s=>"button"in s&&s.button!==2,exact:(s,a)=>$M.some(d=>s[`${d}Key`]&&!a.includes(d))},en=(s,a)=>(d,...p)=>{for(let h=0;h<a.length;h++){const k=zM[a[h]];if(k&&k(d,a))return}return s(d,...p)},Kd={beforeMount(s,{value:a},{transition:d}){s._vod=s.style.display==="none"?"":s.style.display,d&&a?d.beforeEnter(s):Ir(s,a)},mounted(s,{value:a},{transition:d}){d&&a&&d.enter(s)},updated(s,{value:a,oldValue:d},{transition:p}){!a!=!d&&(p?a?(p.beforeEnter(s),Ir(s,!0),p.enter(s)):p.leave(s,()=>{Ir(s,!1)}):Ir(s,a))},beforeUnmount(s,{value:a}){Ir(s,a)}};function Ir(s,a){s.style.display=a?s._vod:"none"}const RM=bn({patchProp:MM},mM);let fw;function jM(){return fw||(fw=WI(RM))}const FM=(...s)=>{const a=jM().createApp(...s),{mount:d}=a;return a.mount=p=>{const h=VM(p);if(!h)return;const k=a._component;!Ve(k)&&!k.render&&!k.template&&(k.template=h.innerHTML),h.innerHTML="";const m=d(h,!1,h instanceof SVGElement);return h instanceof Element&&(h.removeAttribute("v-cloak"),h.setAttribute("data-v-app","")),m},a};function VM(s){return nn(s)?document.querySelector(s):s}function UM(){return V0().__VUE_DEVTOOLS_GLOBAL_HOOK__}function V0(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const HM=typeof Proxy=="function",qM="devtools-plugin:setup",GM="plugin:settings:set";let Ms,bu;function WM(){var s;return Ms!==void 0||(typeof window<"u"&&window.performance?(Ms=!0,bu=window.performance):typeof global<"u"&&(!((s=global.perf_hooks)===null||s===void 0)&&s.performance)?(Ms=!0,bu=global.perf_hooks.performance):Ms=!1),Ms}function KM(){return WM()?bu.now():Date.now()}class YM{constructor(a,d){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=a,this.hook=d;const p={};if(a.settings)for(const m in a.settings){const v=a.settings[m];p[m]=v.defaultValue}const h=`__vue-devtools-plugin-settings__${a.id}`;let k=Object.assign({},p);try{const m=localStorage.getItem(h),v=JSON.parse(m);Object.assign(k,v)}catch{}this.fallbacks={getSettings(){return k},setSettings(m){try{localStorage.setItem(h,JSON.stringify(m))}catch{}k=m},now(){return KM()}},d&&d.on(GM,(m,v)=>{m===this.plugin.id&&this.fallbacks.setSettings(v)}),this.proxiedOn=new Proxy({},{get:(m,v)=>this.target?this.target.on[v]:(...w)=>{this.onQueue.push({method:v,args:w})}}),this.proxiedTarget=new Proxy({},{get:(m,v)=>this.target?this.target[v]:v==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(v)?(...w)=>(this.targetQueue.push({method:v,args:w,resolve:()=>{}}),this.fallbacks[v](...w)):(...w)=>new Promise(x=>{this.targetQueue.push({method:v,args:w,resolve:x})})})}async setRealTarget(a){this.target=a;for(const d of this.onQueue)this.target.on[d.method](...d.args);for(const d of this.targetQueue)d.resolve(await this.target[d.method](...d.args))}}function QM(s,a){const d=s,p=V0(),h=UM(),k=HM&&d.enableEarlyProxy;if(h&&(p.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!k))h.emit(qM,s,a);else{const m=k?new YM(d,h):null;(p.__VUE_DEVTOOLS_PLUGINS__=p.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:d,setupFn:a,proxy:m}),m&&a(m.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var ZM="store";function Qs(s,a){Object.keys(s).forEach(function(d){return a(s[d],d)})}function JM(s){return s!==null&&typeof s=="object"}function XM(s){return s&&typeof s.then=="function"}function eS(s,a){return function(){return s(a)}}function U0(s,a,d){return a.indexOf(s)<0&&(d&&d.prepend?a.unshift(s):a.push(s)),function(){var p=a.indexOf(s);p>-1&&a.splice(p,1)}}function H0(s,a){s._actions=Object.create(null),s._mutations=Object.create(null),s._wrappedGetters=Object.create(null),s._modulesNamespaceMap=Object.create(null);var d=s.state;Bl(s,d,[],s._modules.root,!0),Xu(s,d,a)}function Xu(s,a,d){var p=s._state;s.getters={},s._makeLocalGettersCache=Object.create(null);var h=s._wrappedGetters,k={};Qs(h,function(m,v){k[v]=eS(m,s),Object.defineProperty(s.getters,v,{get:function(){return k[v]()},enumerable:!0})}),s._state=Ks({data:a}),s.strict&&sS(s),p&&d&&s._withCommit(function(){p.data=null})}function Bl(s,a,d,p,h){var k=!d.length,m=s._modules.getNamespace(d);if(p.namespaced&&(s._modulesNamespaceMap[m],s._modulesNamespaceMap[m]=p),!k&&!h){var v=eh(a,d.slice(0,-1)),w=d[d.length-1];s._withCommit(function(){v[w]=p.state})}var x=p.context=tS(s,m,d);p.forEachMutation(function(A,E){var y=m+E;nS(s,y,A,x)}),p.forEachAction(function(A,E){var y=A.root?E:m+E,N=A.handler||A;oS(s,y,N,x)}),p.forEachGetter(function(A,E){var y=m+E;iS(s,y,A,x)}),p.forEachChild(function(A,E){Bl(s,a,d.concat(E),A,h)})}function tS(s,a,d){var p=a==="",h={dispatch:p?s.dispatch:function(k,m,v){var w=gl(k,m,v),x=w.payload,A=w.options,E=w.type;return(!A||!A.root)&&(E=a+E),s.dispatch(E,x)},commit:p?s.commit:function(k,m,v){var w=gl(k,m,v),x=w.payload,A=w.options,E=w.type;(!A||!A.root)&&(E=a+E),s.commit(E,x,A)}};return Object.defineProperties(h,{getters:{get:p?function(){return s.getters}:function(){return q0(s,a)}},state:{get:function(){return eh(s.state,d)}}}),h}function q0(s,a){if(!s._makeLocalGettersCache[a]){var d={},p=a.length;Object.keys(s.getters).forEach(function(h){if(h.slice(0,p)===a){var k=h.slice(p);Object.defineProperty(d,k,{get:function(){return s.getters[h]},enumerable:!0})}}),s._makeLocalGettersCache[a]=d}return s._makeLocalGettersCache[a]}function nS(s,a,d,p){var h=s._mutations[a]||(s._mutations[a]=[]);h.push(function(m){d.call(s,p.state,m)})}function oS(s,a,d,p){var h=s._actions[a]||(s._actions[a]=[]);h.push(function(m){var v=d.call(s,{dispatch:p.dispatch,commit:p.commit,getters:p.getters,state:p.state,rootGetters:s.getters,rootState:s.state},m);return XM(v)||(v=Promise.resolve(v)),s._devtoolHook?v.catch(function(w){throw s._devtoolHook.emit("vuex:error",w),w}):v})}function iS(s,a,d,p){s._wrappedGetters[a]||(s._wrappedGetters[a]=function(k){return d(p.state,p.getters,k.state,k.getters)})}function sS(s){No(function(){return s._state.data},function(){},{deep:!0,flush:"sync"})}function eh(s,a){return a.reduce(function(d,p){return d[p]},s)}function gl(s,a,d){return JM(s)&&s.type&&(d=a,a=s,s=s.type),{type:s,payload:a,options:d}}var rS="vuex bindings",mw="vuex:mutations",Yd="vuex:actions",Ss="vuex",aS=0;function lS(s,a){QM({id:"org.vuejs.vuex",app:s,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[rS]},function(d){d.addTimelineLayer({id:mw,label:"Vuex Mutations",color:kw}),d.addTimelineLayer({id:Yd,label:"Vuex Actions",color:kw}),d.addInspector({id:Ss,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),d.on.getInspectorTree(function(p){if(p.app===s&&p.inspectorId===Ss)if(p.filter){var h=[];Y0(h,a._modules.root,p.filter,""),p.rootNodes=h}else p.rootNodes=[K0(a._modules.root,"")]}),d.on.getInspectorState(function(p){if(p.app===s&&p.inspectorId===Ss){var h=p.nodeId;q0(a,h),p.state=uS(pS(a._modules,h),h==="root"?a.getters:a._makeLocalGettersCache,h)}}),d.on.editInspectorState(function(p){if(p.app===s&&p.inspectorId===Ss){var h=p.nodeId,k=p.path;h!=="root"&&(k=h.split("/").filter(Boolean).concat(k)),a._withCommit(function(){p.set(a._state.data,k,p.state.value)})}}),a.subscribe(function(p,h){var k={};p.payload&&(k.payload=p.payload),k.state=h,d.notifyComponentUpdate(),d.sendInspectorTree(Ss),d.sendInspectorState(Ss),d.addTimelineEvent({layerId:mw,event:{time:Date.now(),title:p.type,data:k}})}),a.subscribeAction({before:function(p,h){var k={};p.payload&&(k.payload=p.payload),p._id=aS++,p._time=Date.now(),k.state=h,d.addTimelineEvent({layerId:Yd,event:{time:p._time,title:p.type,groupId:p._id,subtitle:"start",data:k}})},after:function(p,h){var k={},m=Date.now()-p._time;k.duration={_custom:{type:"duration",display:m+"ms",tooltip:"Action duration",value:m}},p.payload&&(k.payload=p.payload),k.state=h,d.addTimelineEvent({layerId:Yd,event:{time:Date.now(),title:p.type,groupId:p._id,subtitle:"end",data:k}})}})})}var kw=8702998,cS=6710886,dS=16777215,G0={label:"namespaced",textColor:dS,backgroundColor:cS};function W0(s){return s&&s!=="root"?s.split("/").slice(-2,-1)[0]:"Root"}function K0(s,a){return{id:a||"root",label:W0(a),tags:s.namespaced?[G0]:[],children:Object.keys(s._children).map(function(d){return K0(s._children[d],a+d+"/")})}}function Y0(s,a,d,p){p.includes(d)&&s.push({id:p||"root",label:p.endsWith("/")?p.slice(0,p.length-1):p||"Root",tags:a.namespaced?[G0]:[]}),Object.keys(a._children).forEach(function(h){Y0(s,a._children[h],d,p+h+"/")})}function uS(s,a,d){a=d==="root"?a:a[d];var p=Object.keys(a),h={state:Object.keys(s.state).map(function(m){return{key:m,editable:!0,value:s.state[m]}})};if(p.length){var k=hS(a);h.getters=Object.keys(k).map(function(m){return{key:m.endsWith("/")?W0(m):m,editable:!1,value:wu(function(){return k[m]})}})}return h}function hS(s){var a={};return Object.keys(s).forEach(function(d){var p=d.split("/");if(p.length>1){var h=a,k=p.pop();p.forEach(function(m){h[m]||(h[m]={_custom:{value:{},display:m,tooltip:"Module",abstract:!0}}),h=h[m]._custom.value}),h[k]=wu(function(){return s[d]})}else a[d]=wu(function(){return s[d]})}),a}function pS(s,a){var d=a.split("/").filter(function(p){return p});return d.reduce(function(p,h,k){var m=p[h];if(!m)throw new Error('Missing module "'+h+'" for path "'+a+'".');return k===d.length-1?m:m._children},a==="root"?s:s.root._children)}function wu(s){try{return s()}catch(a){return a}}var go=function(a,d){this.runtime=d,this._children=Object.create(null),this._rawModule=a;var p=a.state;this.state=(typeof p=="function"?p():p)||{}},Q0={namespaced:{configurable:!0}};Q0.namespaced.get=function(){return!!this._rawModule.namespaced};go.prototype.addChild=function(a,d){this._children[a]=d};go.prototype.removeChild=function(a){delete this._children[a]};go.prototype.getChild=function(a){return this._children[a]};go.prototype.hasChild=function(a){return a in this._children};go.prototype.update=function(a){this._rawModule.namespaced=a.namespaced,a.actions&&(this._rawModule.actions=a.actions),a.mutations&&(this._rawModule.mutations=a.mutations),a.getters&&(this._rawModule.getters=a.getters)};go.prototype.forEachChild=function(a){Qs(this._children,a)};go.prototype.forEachGetter=function(a){this._rawModule.getters&&Qs(this._rawModule.getters,a)};go.prototype.forEachAction=function(a){this._rawModule.actions&&Qs(this._rawModule.actions,a)};go.prototype.forEachMutation=function(a){this._rawModule.mutations&&Qs(this._rawModule.mutations,a)};Object.defineProperties(go.prototype,Q0);var Zi=function(a){this.register([],a,!1)};Zi.prototype.get=function(a){return a.reduce(function(d,p){return d.getChild(p)},this.root)};Zi.prototype.getNamespace=function(a){var d=this.root;return a.reduce(function(p,h){return d=d.getChild(h),p+(d.namespaced?h+"/":"")},"")};Zi.prototype.update=function(a){Z0([],this.root,a)};Zi.prototype.register=function(a,d,p){var h=this;p===void 0&&(p=!0);var k=new go(d,p);if(a.length===0)this.root=k;else{var m=this.get(a.slice(0,-1));m.addChild(a[a.length-1],k)}d.modules&&Qs(d.modules,function(v,w){h.register(a.concat(w),v,p)})};Zi.prototype.unregister=function(a){var d=this.get(a.slice(0,-1)),p=a[a.length-1],h=d.getChild(p);h&&h.runtime&&d.removeChild(p)};Zi.prototype.isRegistered=function(a){var d=this.get(a.slice(0,-1)),p=a[a.length-1];return d?d.hasChild(p):!1};function Z0(s,a,d){if(a.update(d),d.modules)for(var p in d.modules){if(!a.getChild(p))return;Z0(s.concat(p),a.getChild(p),d.modules[p])}}function gS(s){return new Ln(s)}var Ln=function(a){var d=this;a===void 0&&(a={});var p=a.plugins;p===void 0&&(p=[]);var h=a.strict;h===void 0&&(h=!1);var k=a.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Zi(a),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=k;var m=this,v=this,w=v.dispatch,x=v.commit;this.dispatch=function(y,N){return w.call(m,y,N)},this.commit=function(y,N,R){return x.call(m,y,N,R)},this.strict=h;var A=this._modules.root.state;Bl(this,A,[],this._modules.root),Xu(this,A),p.forEach(function(E){return E(d)})},th={state:{configurable:!0}};Ln.prototype.install=function(a,d){a.provide(d||ZM,this),a.config.globalProperties.$store=this;var p=this._devtools!==void 0?this._devtools:!1;p&&lS(a,this)};th.state.get=function(){return this._state.data};th.state.set=function(s){};Ln.prototype.commit=function(a,d,p){var h=this,k=gl(a,d,p),m=k.type,v=k.payload,w={type:m,payload:v},x=this._mutations[m];x&&(this._withCommit(function(){x.forEach(function(E){E(v)})}),this._subscribers.slice().forEach(function(A){return A(w,h.state)}))};Ln.prototype.dispatch=function(a,d){var p=this,h=gl(a,d),k=h.type,m=h.payload,v={type:k,payload:m},w=this._actions[k];if(w){try{this._actionSubscribers.slice().filter(function(A){return A.before}).forEach(function(A){return A.before(v,p.state)})}catch{}var x=w.length>1?Promise.all(w.map(function(A){return A(m)})):w[0](m);return new Promise(function(A,E){x.then(function(y){try{p._actionSubscribers.filter(function(N){return N.after}).forEach(function(N){return N.after(v,p.state)})}catch{}A(y)},function(y){try{p._actionSubscribers.filter(function(N){return N.error}).forEach(function(N){return N.error(v,p.state,y)})}catch{}E(y)})})}};Ln.prototype.subscribe=function(a,d){return U0(a,this._subscribers,d)};Ln.prototype.subscribeAction=function(a,d){var p=typeof a=="function"?{before:a}:a;return U0(p,this._actionSubscribers,d)};Ln.prototype.watch=function(a,d,p){var h=this;return No(function(){return a(h.state,h.getters)},d,Object.assign({},p))};Ln.prototype.replaceState=function(a){var d=this;this._withCommit(function(){d._state.data=a})};Ln.prototype.registerModule=function(a,d,p){p===void 0&&(p={}),typeof a=="string"&&(a=[a]),this._modules.register(a,d),Bl(this,this.state,a,this._modules.get(a),p.preserveState),Xu(this,this.state)};Ln.prototype.unregisterModule=function(a){var d=this;typeof a=="string"&&(a=[a]),this._modules.unregister(a),this._withCommit(function(){var p=eh(d.state,a.slice(0,-1));delete p[a[a.length-1]]}),H0(this)};Ln.prototype.hasModule=function(a){return typeof a=="string"&&(a=[a]),this._modules.isRegistered(a)};Ln.prototype.hotUpdate=function(a){this._modules.update(a),H0(this,!0)};Ln.prototype._withCommit=function(a){var d=this._committing;this._committing=!0,a(),this._committing=d};Object.defineProperties(Ln.prototype,th);function J0(s,a){return function(){return s.apply(a,arguments)}}const{toString:X0}=Object.prototype,{getPrototypeOf:nh}=Object,oh=(s=>a=>{const d=X0.call(a);return s[d]||(s[d]=d.slice(8,-1).toLowerCase())})(Object.create(null)),Wo=s=>(s=s.toLowerCase(),a=>oh(a)===s),Nl=s=>a=>typeof a===s,{isArray:Zs}=Array,Hr=Nl("undefined");function fS(s){return s!==null&&!Hr(s)&&s.constructor!==null&&!Hr(s.constructor)&&_i(s.constructor.isBuffer)&&s.constructor.isBuffer(s)}const ev=Wo("ArrayBuffer");function mS(s){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(s):a=s&&s.buffer&&ev(s.buffer),a}const kS=Nl("string"),_i=Nl("function"),tv=Nl("number"),ih=s=>s!==null&&typeof s=="object",_S=s=>s===!0||s===!1,sl=s=>{if(oh(s)!=="object")return!1;const a=nh(s);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)},bS=Wo("Date"),wS=Wo("File"),vS=Wo("Blob"),CS=Wo("FileList"),AS=s=>ih(s)&&_i(s.pipe),yS=s=>{const a="[object FormData]";return s&&(typeof FormData=="function"&&s instanceof FormData||X0.call(s)===a||_i(s.toString)&&s.toString()===a)},xS=Wo("URLSearchParams"),ES=s=>s.trim?s.trim():s.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Yr(s,a,{allOwnKeys:d=!1}={}){if(s===null||typeof s>"u")return;let p,h;if(typeof s!="object"&&(s=[s]),Zs(s))for(p=0,h=s.length;p<h;p++)a.call(null,s[p],p,s);else{const k=d?Object.getOwnPropertyNames(s):Object.keys(s),m=k.length;let v;for(p=0;p<m;p++)v=k[p],a.call(null,s[v],v,s)}}function nv(s,a){a=a.toLowerCase();const d=Object.keys(s);let p=d.length,h;for(;p-- >0;)if(h=d[p],a===h.toLowerCase())return h;return null}const ov=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),iv=s=>!Hr(s)&&s!==ov;function vu(){const{caseless:s}=iv(this)&&this||{},a={},d=(p,h)=>{const k=s&&nv(a,h)||h;sl(a[k])&&sl(p)?a[k]=vu(a[k],p):sl(p)?a[k]=vu({},p):Zs(p)?a[k]=p.slice():a[k]=p};for(let p=0,h=arguments.length;p<h;p++)arguments[p]&&Yr(arguments[p],d);return a}const DS=(s,a,d,{allOwnKeys:p}={})=>(Yr(a,(h,k)=>{d&&_i(h)?s[k]=J0(h,d):s[k]=h},{allOwnKeys:p}),s),IS=s=>(s.charCodeAt(0)===65279&&(s=s.slice(1)),s),MS=(s,a,d,p)=>{s.prototype=Object.create(a.prototype,p),s.prototype.constructor=s,Object.defineProperty(s,"super",{value:a.prototype}),d&&Object.assign(s.prototype,d)},SS=(s,a,d,p)=>{let h,k,m;const v={};if(a=a||{},s==null)return a;do{for(h=Object.getOwnPropertyNames(s),k=h.length;k-- >0;)m=h[k],(!p||p(m,s,a))&&!v[m]&&(a[m]=s[m],v[m]=!0);s=d!==!1&&nh(s)}while(s&&(!d||d(s,a))&&s!==Object.prototype);return a},TS=(s,a,d)=>{s=String(s),(d===void 0||d>s.length)&&(d=s.length),d-=a.length;const p=s.indexOf(a,d);return p!==-1&&p===d},BS=s=>{if(!s)return null;if(Zs(s))return s;let a=s.length;if(!tv(a))return null;const d=new Array(a);for(;a-- >0;)d[a]=s[a];return d},NS=(s=>a=>s&&a instanceof s)(typeof Uint8Array<"u"&&nh(Uint8Array)),PS=(s,a)=>{const p=(s&&s[Symbol.iterator]).call(s);let h;for(;(h=p.next())&&!h.done;){const k=h.value;a.call(s,k[0],k[1])}},LS=(s,a)=>{let d;const p=[];for(;(d=s.exec(a))!==null;)p.push(d);return p},OS=Wo("HTMLFormElement"),$S=s=>s.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(d,p,h){return p.toUpperCase()+h}),_w=(({hasOwnProperty:s})=>(a,d)=>s.call(a,d))(Object.prototype),zS=Wo("RegExp"),sv=(s,a)=>{const d=Object.getOwnPropertyDescriptors(s),p={};Yr(d,(h,k)=>{a(h,k,s)!==!1&&(p[k]=h)}),Object.defineProperties(s,p)},RS=s=>{sv(s,(a,d)=>{if(_i(s)&&["arguments","caller","callee"].indexOf(d)!==-1)return!1;const p=s[d];if(_i(p)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+d+"'")})}})},jS=(s,a)=>{const d={},p=h=>{h.forEach(k=>{d[k]=!0})};return Zs(s)?p(s):p(String(s).split(a)),d},FS=()=>{},VS=(s,a)=>(s=+s,Number.isFinite(s)?s:a),Qd="abcdefghijklmnopqrstuvwxyz",bw="0123456789",rv={DIGIT:bw,ALPHA:Qd,ALPHA_DIGIT:Qd+Qd.toUpperCase()+bw},US=(s=16,a=rv.ALPHA_DIGIT)=>{let d="";const{length:p}=a;for(;s--;)d+=a[Math.random()*p|0];return d};function HS(s){return!!(s&&_i(s.append)&&s[Symbol.toStringTag]==="FormData"&&s[Symbol.iterator])}const qS=s=>{const a=new Array(10),d=(p,h)=>{if(ih(p)){if(a.indexOf(p)>=0)return;if(!("toJSON"in p)){a[h]=p;const k=Zs(p)?[]:{};return Yr(p,(m,v)=>{const w=d(m,h+1);!Hr(w)&&(k[v]=w)}),a[h]=void 0,k}}return p};return d(s,0)},ie={isArray:Zs,isArrayBuffer:ev,isBuffer:fS,isFormData:yS,isArrayBufferView:mS,isString:kS,isNumber:tv,isBoolean:_S,isObject:ih,isPlainObject:sl,isUndefined:Hr,isDate:bS,isFile:wS,isBlob:vS,isRegExp:zS,isFunction:_i,isStream:AS,isURLSearchParams:xS,isTypedArray:NS,isFileList:CS,forEach:Yr,merge:vu,extend:DS,trim:ES,stripBOM:IS,inherits:MS,toFlatObject:SS,kindOf:oh,kindOfTest:Wo,endsWith:TS,toArray:BS,forEachEntry:PS,matchAll:LS,isHTMLForm:OS,hasOwnProperty:_w,hasOwnProp:_w,reduceDescriptors:sv,freezeMethods:RS,toObjectSet:jS,toCamelCase:$S,noop:FS,toFiniteNumber:VS,findKey:nv,global:ov,isContextDefined:iv,ALPHABET:rv,generateString:US,isSpecCompliantForm:HS,toJSONObject:qS};function ot(s,a,d,p,h){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=s,this.name="AxiosError",a&&(this.code=a),d&&(this.config=d),p&&(this.request=p),h&&(this.response=h)}ie.inherits(ot,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ie.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const av=ot.prototype,lv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(s=>{lv[s]={value:s}});Object.defineProperties(ot,lv);Object.defineProperty(av,"isAxiosError",{value:!0});ot.from=(s,a,d,p,h,k)=>{const m=Object.create(av);return ie.toFlatObject(s,m,function(w){return w!==Error.prototype},v=>v!=="isAxiosError"),ot.call(m,s.message,a,d,p,h),m.cause=s,m.name=s.name,k&&Object.assign(m,k),m};const GS=null;function Cu(s){return ie.isPlainObject(s)||ie.isArray(s)}function cv(s){return ie.endsWith(s,"[]")?s.slice(0,-2):s}function ww(s,a,d){return s?s.concat(a).map(function(h,k){return h=cv(h),!d&&k?"["+h+"]":h}).join(d?".":""):a}function WS(s){return ie.isArray(s)&&!s.some(Cu)}const KS=ie.toFlatObject(ie,{},null,function(a){return/^is[A-Z]/.test(a)});function Pl(s,a,d){if(!ie.isObject(s))throw new TypeError("target must be an object");a=a||new FormData,d=ie.toFlatObject(d,{metaTokens:!0,dots:!1,indexes:!1},!1,function(L,V){return!ie.isUndefined(V[L])});const p=d.metaTokens,h=d.visitor||A,k=d.dots,m=d.indexes,w=(d.Blob||typeof Blob<"u"&&Blob)&&ie.isSpecCompliantForm(a);if(!ie.isFunction(h))throw new TypeError("visitor must be a function");function x(R){if(R===null)return"";if(ie.isDate(R))return R.toISOString();if(!w&&ie.isBlob(R))throw new ot("Blob is not supported. Use a Buffer instead.");return ie.isArrayBuffer(R)||ie.isTypedArray(R)?w&&typeof Blob=="function"?new Blob([R]):Buffer.from(R):R}function A(R,L,V){let P=R;if(R&&!V&&typeof R=="object"){if(ie.endsWith(L,"{}"))L=p?L:L.slice(0,-2),R=JSON.stringify(R);else if(ie.isArray(R)&&WS(R)||(ie.isFileList(R)||ie.endsWith(L,"[]"))&&(P=ie.toArray(R)))return L=cv(L),P.forEach(function(W,O){!(ie.isUndefined(W)||W===null)&&a.append(m===!0?ww([L],O,k):m===null?L:L+"[]",x(W))}),!1}return Cu(R)?!0:(a.append(ww(V,L,k),x(R)),!1)}const E=[],y=Object.assign(KS,{defaultVisitor:A,convertValue:x,isVisitable:Cu});function N(R,L){if(!ie.isUndefined(R)){if(E.indexOf(R)!==-1)throw Error("Circular reference detected in "+L.join("."));E.push(R),ie.forEach(R,function(P,D){(!(ie.isUndefined(P)||P===null)&&h.call(a,P,ie.isString(D)?D.trim():D,L,y))===!0&&N(P,L?L.concat(D):[D])}),E.pop()}}if(!ie.isObject(s))throw new TypeError("data must be an object");return N(s),a}function vw(s){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(s).replace(/[!'()~]|%20|%00/g,function(p){return a[p]})}function sh(s,a){this._pairs=[],s&&Pl(s,this,a)}const dv=sh.prototype;dv.append=function(a,d){this._pairs.push([a,d])};dv.toString=function(a){const d=a?function(p){return a.call(this,p,vw)}:vw;return this._pairs.map(function(h){return d(h[0])+"="+d(h[1])},"").join("&")};function YS(s){return encodeURIComponent(s).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function uv(s,a,d){if(!a)return s;const p=d&&d.encode||YS,h=d&&d.serialize;let k;if(h?k=h(a,d):k=ie.isURLSearchParams(a)?a.toString():new sh(a,d).toString(p),k){const m=s.indexOf("#");m!==-1&&(s=s.slice(0,m)),s+=(s.indexOf("?")===-1?"?":"&")+k}return s}class QS{constructor(){this.handlers=[]}use(a,d,p){return this.handlers.push({fulfilled:a,rejected:d,synchronous:p?p.synchronous:!1,runWhen:p?p.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){ie.forEach(this.handlers,function(p){p!==null&&a(p)})}}const Cw=QS,hv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ZS=typeof URLSearchParams<"u"?URLSearchParams:sh,JS=typeof FormData<"u"?FormData:null,XS=typeof Blob<"u"?Blob:null,eT=(()=>{let s;return typeof navigator<"u"&&((s=navigator.product)==="ReactNative"||s==="NativeScript"||s==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),tT=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Bo={isBrowser:!0,classes:{URLSearchParams:ZS,FormData:JS,Blob:XS},isStandardBrowserEnv:eT,isStandardBrowserWebWorkerEnv:tT,protocols:["http","https","file","blob","url","data"]};function nT(s,a){return Pl(s,new Bo.classes.URLSearchParams,Object.assign({visitor:function(d,p,h,k){return Bo.isNode&&ie.isBuffer(d)?(this.append(p,d.toString("base64")),!1):k.defaultVisitor.apply(this,arguments)}},a))}function oT(s){return ie.matchAll(/\w+|\[(\w*)]/g,s).map(a=>a[0]==="[]"?"":a[1]||a[0])}function iT(s){const a={},d=Object.keys(s);let p;const h=d.length;let k;for(p=0;p<h;p++)k=d[p],a[k]=s[k];return a}function pv(s){function a(d,p,h,k){let m=d[k++];const v=Number.isFinite(+m),w=k>=d.length;return m=!m&&ie.isArray(h)?h.length:m,w?(ie.hasOwnProp(h,m)?h[m]=[h[m],p]:h[m]=p,!v):((!h[m]||!ie.isObject(h[m]))&&(h[m]=[]),a(d,p,h[m],k)&&ie.isArray(h[m])&&(h[m]=iT(h[m])),!v)}if(ie.isFormData(s)&&ie.isFunction(s.entries)){const d={};return ie.forEachEntry(s,(p,h)=>{a(oT(p),h,d,0)}),d}return null}const sT={"Content-Type":void 0};function rT(s,a,d){if(ie.isString(s))try{return(a||JSON.parse)(s),ie.trim(s)}catch(p){if(p.name!=="SyntaxError")throw p}return(d||JSON.stringify)(s)}const Ll={transitional:hv,adapter:["xhr","http"],transformRequest:[function(a,d){const p=d.getContentType()||"",h=p.indexOf("application/json")>-1,k=ie.isObject(a);if(k&&ie.isHTMLForm(a)&&(a=new FormData(a)),ie.isFormData(a))return h&&h?JSON.stringify(pv(a)):a;if(ie.isArrayBuffer(a)||ie.isBuffer(a)||ie.isStream(a)||ie.isFile(a)||ie.isBlob(a))return a;if(ie.isArrayBufferView(a))return a.buffer;if(ie.isURLSearchParams(a))return d.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let v;if(k){if(p.indexOf("application/x-www-form-urlencoded")>-1)return nT(a,this.formSerializer).toString();if((v=ie.isFileList(a))||p.indexOf("multipart/form-data")>-1){const w=this.env&&this.env.FormData;return Pl(v?{"files[]":a}:a,w&&new w,this.formSerializer)}}return k||h?(d.setContentType("application/json",!1),rT(a)):a}],transformResponse:[function(a){const d=this.transitional||Ll.transitional,p=d&&d.forcedJSONParsing,h=this.responseType==="json";if(a&&ie.isString(a)&&(p&&!this.responseType||h)){const m=!(d&&d.silentJSONParsing)&&h;try{return JSON.parse(a)}catch(v){if(m)throw v.name==="SyntaxError"?ot.from(v,ot.ERR_BAD_RESPONSE,this,null,this.response):v}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Bo.classes.FormData,Blob:Bo.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ie.forEach(["delete","get","head"],function(a){Ll.headers[a]={}});ie.forEach(["post","put","patch"],function(a){Ll.headers[a]=ie.merge(sT)});const rh=Ll,aT=ie.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),lT=s=>{const a={};let d,p,h;return s&&s.split(`
`).forEach(function(m){h=m.indexOf(":"),d=m.substring(0,h).trim().toLowerCase(),p=m.substring(h+1).trim(),!(!d||a[d]&&aT[d])&&(d==="set-cookie"?a[d]?a[d].push(p):a[d]=[p]:a[d]=a[d]?a[d]+", "+p:p)}),a},Aw=Symbol("internals");function Mr(s){return s&&String(s).trim().toLowerCase()}function rl(s){return s===!1||s==null?s:ie.isArray(s)?s.map(rl):String(s)}function cT(s){const a=Object.create(null),d=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let p;for(;p=d.exec(s);)a[p[1]]=p[2];return a}function dT(s){return/^[-_a-zA-Z]+$/.test(s.trim())}function Zd(s,a,d,p,h){if(ie.isFunction(p))return p.call(this,a,d);if(h&&(a=d),!!ie.isString(a)){if(ie.isString(p))return a.indexOf(p)!==-1;if(ie.isRegExp(p))return p.test(a)}}function uT(s){return s.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,d,p)=>d.toUpperCase()+p)}function hT(s,a){const d=ie.toCamelCase(" "+a);["get","set","has"].forEach(p=>{Object.defineProperty(s,p+d,{value:function(h,k,m){return this[p].call(this,a,h,k,m)},configurable:!0})})}class Ol{constructor(a){a&&this.set(a)}set(a,d,p){const h=this;function k(v,w,x){const A=Mr(w);if(!A)throw new Error("header name must be a non-empty string");const E=ie.findKey(h,A);(!E||h[E]===void 0||x===!0||x===void 0&&h[E]!==!1)&&(h[E||w]=rl(v))}const m=(v,w)=>ie.forEach(v,(x,A)=>k(x,A,w));return ie.isPlainObject(a)||a instanceof this.constructor?m(a,d):ie.isString(a)&&(a=a.trim())&&!dT(a)?m(lT(a),d):a!=null&&k(d,a,p),this}get(a,d){if(a=Mr(a),a){const p=ie.findKey(this,a);if(p){const h=this[p];if(!d)return h;if(d===!0)return cT(h);if(ie.isFunction(d))return d.call(this,h,p);if(ie.isRegExp(d))return d.exec(h);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,d){if(a=Mr(a),a){const p=ie.findKey(this,a);return!!(p&&this[p]!==void 0&&(!d||Zd(this,this[p],p,d)))}return!1}delete(a,d){const p=this;let h=!1;function k(m){if(m=Mr(m),m){const v=ie.findKey(p,m);v&&(!d||Zd(p,p[v],v,d))&&(delete p[v],h=!0)}}return ie.isArray(a)?a.forEach(k):k(a),h}clear(a){const d=Object.keys(this);let p=d.length,h=!1;for(;p--;){const k=d[p];(!a||Zd(this,this[k],k,a,!0))&&(delete this[k],h=!0)}return h}normalize(a){const d=this,p={};return ie.forEach(this,(h,k)=>{const m=ie.findKey(p,k);if(m){d[m]=rl(h),delete d[k];return}const v=a?uT(k):String(k).trim();v!==k&&delete d[k],d[v]=rl(h),p[v]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const d=Object.create(null);return ie.forEach(this,(p,h)=>{p!=null&&p!==!1&&(d[h]=a&&ie.isArray(p)?p.join(", "):p)}),d}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,d])=>a+": "+d).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...d){const p=new this(a);return d.forEach(h=>p.set(h)),p}static accessor(a){const p=(this[Aw]=this[Aw]={accessors:{}}).accessors,h=this.prototype;function k(m){const v=Mr(m);p[v]||(hT(h,m),p[v]=!0)}return ie.isArray(a)?a.forEach(k):k(a),this}}Ol.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ie.freezeMethods(Ol.prototype);ie.freezeMethods(Ol);const Uo=Ol;function Jd(s,a){const d=this||rh,p=a||d,h=Uo.from(p.headers);let k=p.data;return ie.forEach(s,function(v){k=v.call(d,k,h.normalize(),a?a.status:void 0)}),h.normalize(),k}function gv(s){return!!(s&&s.__CANCEL__)}function Qr(s,a,d){ot.call(this,s??"canceled",ot.ERR_CANCELED,a,d),this.name="CanceledError"}ie.inherits(Qr,ot,{__CANCEL__:!0});function pT(s,a,d){const p=d.config.validateStatus;!d.status||!p||p(d.status)?s(d):a(new ot("Request failed with status code "+d.status,[ot.ERR_BAD_REQUEST,ot.ERR_BAD_RESPONSE][Math.floor(d.status/100)-4],d.config,d.request,d))}const gT=Bo.isStandardBrowserEnv?function(){return{write:function(d,p,h,k,m,v){const w=[];w.push(d+"="+encodeURIComponent(p)),ie.isNumber(h)&&w.push("expires="+new Date(h).toGMTString()),ie.isString(k)&&w.push("path="+k),ie.isString(m)&&w.push("domain="+m),v===!0&&w.push("secure"),document.cookie=w.join("; ")},read:function(d){const p=document.cookie.match(new RegExp("(^|;\\s*)("+d+")=([^;]*)"));return p?decodeURIComponent(p[3]):null},remove:function(d){this.write(d,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function fT(s){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(s)}function mT(s,a){return a?s.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):s}function fv(s,a){return s&&!fT(a)?mT(s,a):a}const kT=Bo.isStandardBrowserEnv?function(){const a=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a");let p;function h(k){let m=k;return a&&(d.setAttribute("href",m),m=d.href),d.setAttribute("href",m),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return p=h(window.location.href),function(m){const v=ie.isString(m)?h(m):m;return v.protocol===p.protocol&&v.host===p.host}}():function(){return function(){return!0}}();function _T(s){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(s);return a&&a[1]||""}function bT(s,a){s=s||10;const d=new Array(s),p=new Array(s);let h=0,k=0,m;return a=a!==void 0?a:1e3,function(w){const x=Date.now(),A=p[k];m||(m=x),d[h]=w,p[h]=x;let E=k,y=0;for(;E!==h;)y+=d[E++],E=E%s;if(h=(h+1)%s,h===k&&(k=(k+1)%s),x-m<a)return;const N=A&&x-A;return N?Math.round(y*1e3/N):void 0}}function yw(s,a){let d=0;const p=bT(50,250);return h=>{const k=h.loaded,m=h.lengthComputable?h.total:void 0,v=k-d,w=p(v),x=k<=m;d=k;const A={loaded:k,total:m,progress:m?k/m:void 0,bytes:v,rate:w||void 0,estimated:w&&m&&x?(m-k)/w:void 0,event:h};A[a?"download":"upload"]=!0,s(A)}}const wT=typeof XMLHttpRequest<"u",vT=wT&&function(s){return new Promise(function(d,p){let h=s.data;const k=Uo.from(s.headers).normalize(),m=s.responseType;let v;function w(){s.cancelToken&&s.cancelToken.unsubscribe(v),s.signal&&s.signal.removeEventListener("abort",v)}ie.isFormData(h)&&(Bo.isStandardBrowserEnv||Bo.isStandardBrowserWebWorkerEnv)&&k.setContentType(!1);let x=new XMLHttpRequest;if(s.auth){const N=s.auth.username||"",R=s.auth.password?unescape(encodeURIComponent(s.auth.password)):"";k.set("Authorization","Basic "+btoa(N+":"+R))}const A=fv(s.baseURL,s.url);x.open(s.method.toUpperCase(),uv(A,s.params,s.paramsSerializer),!0),x.timeout=s.timeout;function E(){if(!x)return;const N=Uo.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),L={data:!m||m==="text"||m==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:N,config:s,request:x};pT(function(P){d(P),w()},function(P){p(P),w()},L),x=null}if("onloadend"in x?x.onloadend=E:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(E)},x.onabort=function(){x&&(p(new ot("Request aborted",ot.ECONNABORTED,s,x)),x=null)},x.onerror=function(){p(new ot("Network Error",ot.ERR_NETWORK,s,x)),x=null},x.ontimeout=function(){let R=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||hv;s.timeoutErrorMessage&&(R=s.timeoutErrorMessage),p(new ot(R,L.clarifyTimeoutError?ot.ETIMEDOUT:ot.ECONNABORTED,s,x)),x=null},Bo.isStandardBrowserEnv){const N=(s.withCredentials||kT(A))&&s.xsrfCookieName&&gT.read(s.xsrfCookieName);N&&k.set(s.xsrfHeaderName,N)}h===void 0&&k.setContentType(null),"setRequestHeader"in x&&ie.forEach(k.toJSON(),function(R,L){x.setRequestHeader(L,R)}),ie.isUndefined(s.withCredentials)||(x.withCredentials=!!s.withCredentials),m&&m!=="json"&&(x.responseType=s.responseType),typeof s.onDownloadProgress=="function"&&x.addEventListener("progress",yw(s.onDownloadProgress,!0)),typeof s.onUploadProgress=="function"&&x.upload&&x.upload.addEventListener("progress",yw(s.onUploadProgress)),(s.cancelToken||s.signal)&&(v=N=>{x&&(p(!N||N.type?new Qr(null,s,x):N),x.abort(),x=null)},s.cancelToken&&s.cancelToken.subscribe(v),s.signal&&(s.signal.aborted?v():s.signal.addEventListener("abort",v)));const y=_T(A);if(y&&Bo.protocols.indexOf(y)===-1){p(new ot("Unsupported protocol "+y+":",ot.ERR_BAD_REQUEST,s));return}x.send(h||null)})},al={http:GS,xhr:vT};ie.forEach(al,(s,a)=>{if(s){try{Object.defineProperty(s,"name",{value:a})}catch{}Object.defineProperty(s,"adapterName",{value:a})}});const CT={getAdapter:s=>{s=ie.isArray(s)?s:[s];const{length:a}=s;let d,p;for(let h=0;h<a&&(d=s[h],!(p=ie.isString(d)?al[d.toLowerCase()]:d));h++);if(!p)throw p===!1?new ot(`Adapter ${d} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(ie.hasOwnProp(al,d)?`Adapter '${d}' is not available in the build`:`Unknown adapter '${d}'`);if(!ie.isFunction(p))throw new TypeError("adapter is not a function");return p},adapters:al};function Xd(s){if(s.cancelToken&&s.cancelToken.throwIfRequested(),s.signal&&s.signal.aborted)throw new Qr(null,s)}function xw(s){return Xd(s),s.headers=Uo.from(s.headers),s.data=Jd.call(s,s.transformRequest),["post","put","patch"].indexOf(s.method)!==-1&&s.headers.setContentType("application/x-www-form-urlencoded",!1),CT.getAdapter(s.adapter||rh.adapter)(s).then(function(p){return Xd(s),p.data=Jd.call(s,s.transformResponse,p),p.headers=Uo.from(p.headers),p},function(p){return gv(p)||(Xd(s),p&&p.response&&(p.response.data=Jd.call(s,s.transformResponse,p.response),p.response.headers=Uo.from(p.response.headers))),Promise.reject(p)})}const Ew=s=>s instanceof Uo?s.toJSON():s;function Fs(s,a){a=a||{};const d={};function p(x,A,E){return ie.isPlainObject(x)&&ie.isPlainObject(A)?ie.merge.call({caseless:E},x,A):ie.isPlainObject(A)?ie.merge({},A):ie.isArray(A)?A.slice():A}function h(x,A,E){if(ie.isUndefined(A)){if(!ie.isUndefined(x))return p(void 0,x,E)}else return p(x,A,E)}function k(x,A){if(!ie.isUndefined(A))return p(void 0,A)}function m(x,A){if(ie.isUndefined(A)){if(!ie.isUndefined(x))return p(void 0,x)}else return p(void 0,A)}function v(x,A,E){if(E in a)return p(x,A);if(E in s)return p(void 0,x)}const w={url:k,method:k,data:k,baseURL:m,transformRequest:m,transformResponse:m,paramsSerializer:m,timeout:m,timeoutMessage:m,withCredentials:m,adapter:m,responseType:m,xsrfCookieName:m,xsrfHeaderName:m,onUploadProgress:m,onDownloadProgress:m,decompress:m,maxContentLength:m,maxBodyLength:m,beforeRedirect:m,transport:m,httpAgent:m,httpsAgent:m,cancelToken:m,socketPath:m,responseEncoding:m,validateStatus:v,headers:(x,A)=>h(Ew(x),Ew(A),!0)};return ie.forEach(Object.keys(s).concat(Object.keys(a)),function(A){const E=w[A]||h,y=E(s[A],a[A],A);ie.isUndefined(y)&&E!==v||(d[A]=y)}),d}const mv="1.3.4",ah={};["object","boolean","number","function","string","symbol"].forEach((s,a)=>{ah[s]=function(p){return typeof p===s||"a"+(a<1?"n ":" ")+s}});const Dw={};ah.transitional=function(a,d,p){function h(k,m){return"[Axios v"+mv+"] Transitional option '"+k+"'"+m+(p?". "+p:"")}return(k,m,v)=>{if(a===!1)throw new ot(h(m," has been removed"+(d?" in "+d:"")),ot.ERR_DEPRECATED);return d&&!Dw[m]&&(Dw[m]=!0,console.warn(h(m," has been deprecated since v"+d+" and will be removed in the near future"))),a?a(k,m,v):!0}};function AT(s,a,d){if(typeof s!="object")throw new ot("options must be an object",ot.ERR_BAD_OPTION_VALUE);const p=Object.keys(s);let h=p.length;for(;h-- >0;){const k=p[h],m=a[k];if(m){const v=s[k],w=v===void 0||m(v,k,s);if(w!==!0)throw new ot("option "+k+" must be "+w,ot.ERR_BAD_OPTION_VALUE);continue}if(d!==!0)throw new ot("Unknown option "+k,ot.ERR_BAD_OPTION)}}const Au={assertOptions:AT,validators:ah},ci=Au.validators;class fl{constructor(a){this.defaults=a,this.interceptors={request:new Cw,response:new Cw}}request(a,d){typeof a=="string"?(d=d||{},d.url=a):d=a||{},d=Fs(this.defaults,d);const{transitional:p,paramsSerializer:h,headers:k}=d;p!==void 0&&Au.assertOptions(p,{silentJSONParsing:ci.transitional(ci.boolean),forcedJSONParsing:ci.transitional(ci.boolean),clarifyTimeoutError:ci.transitional(ci.boolean)},!1),h!==void 0&&Au.assertOptions(h,{encode:ci.function,serialize:ci.function},!0),d.method=(d.method||this.defaults.method||"get").toLowerCase();let m;m=k&&ie.merge(k.common,k[d.method]),m&&ie.forEach(["delete","get","head","post","put","patch","common"],R=>{delete k[R]}),d.headers=Uo.concat(m,k);const v=[];let w=!0;this.interceptors.request.forEach(function(L){typeof L.runWhen=="function"&&L.runWhen(d)===!1||(w=w&&L.synchronous,v.unshift(L.fulfilled,L.rejected))});const x=[];this.interceptors.response.forEach(function(L){x.push(L.fulfilled,L.rejected)});let A,E=0,y;if(!w){const R=[xw.bind(this),void 0];for(R.unshift.apply(R,v),R.push.apply(R,x),y=R.length,A=Promise.resolve(d);E<y;)A=A.then(R[E++],R[E++]);return A}y=v.length;let N=d;for(E=0;E<y;){const R=v[E++],L=v[E++];try{N=R(N)}catch(V){L.call(this,V);break}}try{A=xw.call(this,N)}catch(R){return Promise.reject(R)}for(E=0,y=x.length;E<y;)A=A.then(x[E++],x[E++]);return A}getUri(a){a=Fs(this.defaults,a);const d=fv(a.baseURL,a.url);return uv(d,a.params,a.paramsSerializer)}}ie.forEach(["delete","get","head","options"],function(a){fl.prototype[a]=function(d,p){return this.request(Fs(p||{},{method:a,url:d,data:(p||{}).data}))}});ie.forEach(["post","put","patch"],function(a){function d(p){return function(k,m,v){return this.request(Fs(v||{},{method:a,headers:p?{"Content-Type":"multipart/form-data"}:{},url:k,data:m}))}}fl.prototype[a]=d(),fl.prototype[a+"Form"]=d(!0)});const ll=fl;class lh{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let d;this.promise=new Promise(function(k){d=k});const p=this;this.promise.then(h=>{if(!p._listeners)return;let k=p._listeners.length;for(;k-- >0;)p._listeners[k](h);p._listeners=null}),this.promise.then=h=>{let k;const m=new Promise(v=>{p.subscribe(v),k=v}).then(h);return m.cancel=function(){p.unsubscribe(k)},m},a(function(k,m,v){p.reason||(p.reason=new Qr(k,m,v),d(p.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const d=this._listeners.indexOf(a);d!==-1&&this._listeners.splice(d,1)}static source(){let a;return{token:new lh(function(h){a=h}),cancel:a}}}const yT=lh;function xT(s){return function(d){return s.apply(null,d)}}function ET(s){return ie.isObject(s)&&s.isAxiosError===!0}const yu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(yu).forEach(([s,a])=>{yu[a]=s});const DT=yu;function kv(s){const a=new ll(s),d=J0(ll.prototype.request,a);return ie.extend(d,ll.prototype,a,{allOwnKeys:!0}),ie.extend(d,a,null,{allOwnKeys:!0}),d.create=function(h){return kv(Fs(s,h))},d}const cn=kv(rh);cn.Axios=ll;cn.CanceledError=Qr;cn.CancelToken=yT;cn.isCancel=gv;cn.VERSION=mv;cn.toFormData=Pl;cn.AxiosError=ot;cn.Cancel=cn.CanceledError;cn.all=function(a){return Promise.all(a)};cn.spread=xT;cn.isAxiosError=ET;cn.mergeConfig=Fs;cn.AxiosHeaders=Uo;cn.formToJSON=s=>pv(ie.isHTMLForm(s)?new FormData(s):s);cn.HttpStatusCode=DT;cn.default=cn;const IT=cn;/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const _v=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",Js=s=>_v?Symbol(s):"_vr_"+s,MT=Js("rvlm"),Iw=Js("rvd"),$l=Js("r"),ch=Js("rl"),xu=Js("rvl"),Bs=typeof window<"u";function ST(s){return s.__esModule||_v&&s[Symbol.toStringTag]==="Module"}const vt=Object.assign;function eu(s,a){const d={};for(const p in a){const h=a[p];d[p]=Array.isArray(h)?h.map(s):s(h)}return d}const Pr=()=>{},TT=/\/$/,BT=s=>s.replace(TT,"");function tu(s,a,d="/"){let p,h={},k="",m="";const v=a.indexOf("?"),w=a.indexOf("#",v>-1?v:0);return v>-1&&(p=a.slice(0,v),k=a.slice(v+1,w>-1?w:a.length),h=s(k)),w>-1&&(p=p||a.slice(0,w),m=a.slice(w,a.length)),p=OT(p??a,d),{fullPath:p+(k&&"?")+k+m,path:p,query:h,hash:m}}function NT(s,a){const d=a.query?s(a.query):"";return a.path+(d&&"?")+d+(a.hash||"")}function Mw(s,a){return!a||!s.toLowerCase().startsWith(a.toLowerCase())?s:s.slice(a.length)||"/"}function PT(s,a,d){const p=a.matched.length-1,h=d.matched.length-1;return p>-1&&p===h&&Vs(a.matched[p],d.matched[h])&&bv(a.params,d.params)&&s(a.query)===s(d.query)&&a.hash===d.hash}function Vs(s,a){return(s.aliasOf||s)===(a.aliasOf||a)}function bv(s,a){if(Object.keys(s).length!==Object.keys(a).length)return!1;for(const d in s)if(!LT(s[d],a[d]))return!1;return!0}function LT(s,a){return Array.isArray(s)?Sw(s,a):Array.isArray(a)?Sw(a,s):s===a}function Sw(s,a){return Array.isArray(a)?s.length===a.length&&s.every((d,p)=>d===a[p]):s.length===1&&s[0]===a}function OT(s,a){if(s.startsWith("/"))return s;if(!s)return a;const d=a.split("/"),p=s.split("/");let h=d.length-1,k,m;for(k=0;k<p.length;k++)if(m=p[k],!(h===1||m==="."))if(m==="..")h--;else break;return d.slice(0,h).join("/")+"/"+p.slice(k-(k===p.length?1:0)).join("/")}var qr;(function(s){s.pop="pop",s.push="push"})(qr||(qr={}));var Lr;(function(s){s.back="back",s.forward="forward",s.unknown=""})(Lr||(Lr={}));function $T(s){if(!s)if(Bs){const a=document.querySelector("base");s=a&&a.getAttribute("href")||"/",s=s.replace(/^\w+:\/\/[^\/]+/,"")}else s="/";return s[0]!=="/"&&s[0]!=="#"&&(s="/"+s),BT(s)}const zT=/^[^#]+#/;function RT(s,a){return s.replace(zT,"#")+a}function jT(s,a){const d=document.documentElement.getBoundingClientRect(),p=s.getBoundingClientRect();return{behavior:a.behavior,left:p.left-d.left-(a.left||0),top:p.top-d.top-(a.top||0)}}const zl=()=>({left:window.pageXOffset,top:window.pageYOffset});function FT(s){let a;if("el"in s){const d=s.el,p=typeof d=="string"&&d.startsWith("#"),h=typeof d=="string"?p?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!h)return;a=jT(h,s)}else a=s;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Tw(s,a){return(history.state?history.state.position-a:-1)+s}const Eu=new Map;function VT(s,a){Eu.set(s,a)}function UT(s){const a=Eu.get(s);return Eu.delete(s),a}let HT=()=>location.protocol+"//"+location.host;function wv(s,a){const{pathname:d,search:p,hash:h}=a,k=s.indexOf("#");if(k>-1){let v=h.includes(s.slice(k))?s.slice(k).length:1,w=h.slice(v);return w[0]!=="/"&&(w="/"+w),Mw(w,"")}return Mw(d,s)+p+h}function qT(s,a,d,p){let h=[],k=[],m=null;const v=({state:y})=>{const N=wv(s,location),R=d.value,L=a.value;let V=0;if(y){if(d.value=N,a.value=y,m&&m===R){m=null;return}V=L?y.position-L.position:0}else p(N);h.forEach(P=>{P(d.value,R,{delta:V,type:qr.pop,direction:V?V>0?Lr.forward:Lr.back:Lr.unknown})})};function w(){m=d.value}function x(y){h.push(y);const N=()=>{const R=h.indexOf(y);R>-1&&h.splice(R,1)};return k.push(N),N}function A(){const{history:y}=window;y.state&&y.replaceState(vt({},y.state,{scroll:zl()}),"")}function E(){for(const y of k)y();k=[],window.removeEventListener("popstate",v),window.removeEventListener("beforeunload",A)}return window.addEventListener("popstate",v),window.addEventListener("beforeunload",A),{pauseListeners:w,listen:x,destroy:E}}function Bw(s,a,d,p=!1,h=!1){return{back:s,current:a,forward:d,replaced:p,position:window.history.length,scroll:h?zl():null}}function GT(s){const{history:a,location:d}=window,p={value:wv(s,d)},h={value:a.state};h.value||k(p.value,{back:null,current:p.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function k(w,x,A){const E=s.indexOf("#"),y=E>-1?(d.host&&document.querySelector("base")?s:s.slice(E))+w:HT()+s+w;try{a[A?"replaceState":"pushState"](x,"",y),h.value=x}catch(N){console.error(N),d[A?"replace":"assign"](y)}}function m(w,x){const A=vt({},a.state,Bw(h.value.back,w,h.value.forward,!0),x,{position:h.value.position});k(w,A,!0),p.value=w}function v(w,x){const A=vt({},h.value,a.state,{forward:w,scroll:zl()});k(A.current,A,!0);const E=vt({},Bw(p.value,w,null),{position:A.position+1},x);k(w,E,!1),p.value=w}return{location:p,state:h,push:v,replace:m}}function WT(s){s=$T(s);const a=GT(s),d=qT(s,a.state,a.location,a.replace);function p(k,m=!0){m||d.pauseListeners(),history.go(k)}const h=vt({location:"",base:s,go:p,createHref:RT.bind(null,s)},a,d);return Object.defineProperty(h,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(h,"state",{enumerable:!0,get:()=>a.state.value}),h}function KT(s){return typeof s=="string"||s&&typeof s=="object"}function vv(s){return typeof s=="string"||typeof s=="symbol"}const di={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Cv=Js("nf");var Nw;(function(s){s[s.aborted=4]="aborted",s[s.cancelled=8]="cancelled",s[s.duplicated=16]="duplicated"})(Nw||(Nw={}));function Us(s,a){return vt(new Error,{type:s,[Cv]:!0},a)}function ui(s,a){return s instanceof Error&&Cv in s&&(a==null||!!(s.type&a))}const Pw="[^/]+?",YT={sensitive:!1,strict:!1,start:!0,end:!0},QT=/[.+*?^${}()[\]/\\]/g;function ZT(s,a){const d=vt({},YT,a),p=[];let h=d.start?"^":"";const k=[];for(const x of s){const A=x.length?[]:[90];d.strict&&!x.length&&(h+="/");for(let E=0;E<x.length;E++){const y=x[E];let N=40+(d.sensitive?.25:0);if(y.type===0)E||(h+="/"),h+=y.value.replace(QT,"\\$&"),N+=40;else if(y.type===1){const{value:R,repeatable:L,optional:V,regexp:P}=y;k.push({name:R,repeatable:L,optional:V});const D=P||Pw;if(D!==Pw){N+=10;try{new RegExp(`(${D})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${R}" (${D}): `+O.message)}}let W=L?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;E||(W=V&&x.length<2?`(?:/${W})`:"/"+W),V&&(W+="?"),h+=W,N+=20,V&&(N+=-8),L&&(N+=-20),D===".*"&&(N+=-50)}A.push(N)}p.push(A)}if(d.strict&&d.end){const x=p.length-1;p[x][p[x].length-1]+=.7000000000000001}d.strict||(h+="/?"),d.end?h+="$":d.strict&&(h+="(?:/|$)");const m=new RegExp(h,d.sensitive?"":"i");function v(x){const A=x.match(m),E={};if(!A)return null;for(let y=1;y<A.length;y++){const N=A[y]||"",R=k[y-1];E[R.name]=N&&R.repeatable?N.split("/"):N}return E}function w(x){let A="",E=!1;for(const y of s){(!E||!A.endsWith("/"))&&(A+="/"),E=!1;for(const N of y)if(N.type===0)A+=N.value;else if(N.type===1){const{value:R,repeatable:L,optional:V}=N,P=R in x?x[R]:"";if(Array.isArray(P)&&!L)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const D=Array.isArray(P)?P.join("/"):P;if(!D)if(V)y.length<2&&(A.endsWith("/")?A=A.slice(0,-1):E=!0);else throw new Error(`Missing required param "${R}"`);A+=D}}return A}return{re:m,score:p,keys:k,parse:v,stringify:w}}function JT(s,a){let d=0;for(;d<s.length&&d<a.length;){const p=a[d]-s[d];if(p)return p;d++}return s.length<a.length?s.length===1&&s[0]===40+40?-1:1:s.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function XT(s,a){let d=0;const p=s.score,h=a.score;for(;d<p.length&&d<h.length;){const k=JT(p[d],h[d]);if(k)return k;d++}return h.length-p.length}const e7={type:0,value:""},t7=/[a-zA-Z0-9_]/;function n7(s){if(!s)return[[]];if(s==="/")return[[e7]];if(!s.startsWith("/"))throw new Error(`Invalid path "${s}"`);function a(N){throw new Error(`ERR (${d})/"${x}": ${N}`)}let d=0,p=d;const h=[];let k;function m(){k&&h.push(k),k=[]}let v=0,w,x="",A="";function E(){x&&(d===0?k.push({type:0,value:x}):d===1||d===2||d===3?(k.length>1&&(w==="*"||w==="+")&&a(`A repeatable param (${x}) must be alone in its segment. eg: '/:ids+.`),k.push({type:1,value:x,regexp:A,repeatable:w==="*"||w==="+",optional:w==="*"||w==="?"})):a("Invalid state to consume buffer"),x="")}function y(){x+=w}for(;v<s.length;){if(w=s[v++],w==="\\"&&d!==2){p=d,d=4;continue}switch(d){case 0:w==="/"?(x&&E(),m()):w===":"?(E(),d=1):y();break;case 4:y(),d=p;break;case 1:w==="("?d=2:t7.test(w)?y():(E(),d=0,w!=="*"&&w!=="?"&&w!=="+"&&v--);break;case 2:w===")"?A[A.length-1]=="\\"?A=A.slice(0,-1)+w:d=3:A+=w;break;case 3:E(),d=0,w!=="*"&&w!=="?"&&w!=="+"&&v--,A="";break;default:a("Unknown state");break}}return d===2&&a(`Unfinished custom RegExp for param "${x}"`),E(),m(),h}function o7(s,a,d){const p=ZT(n7(s.path),d),h=vt(p,{record:s,parent:a,children:[],alias:[]});return a&&!h.record.aliasOf==!a.record.aliasOf&&a.children.push(h),h}function i7(s,a){const d=[],p=new Map;a=Ow({strict:!1,end:!0,sensitive:!1},a);function h(A){return p.get(A)}function k(A,E,y){const N=!y,R=r7(A);R.aliasOf=y&&y.record;const L=Ow(a,A),V=[R];if("alias"in A){const W=typeof A.alias=="string"?[A.alias]:A.alias;for(const O of W)V.push(vt({},R,{components:y?y.record.components:R.components,path:O,aliasOf:y?y.record:R}))}let P,D;for(const W of V){const{path:O}=W;if(E&&O[0]!=="/"){const Q=E.record.path,H=Q[Q.length-1]==="/"?"":"/";W.path=E.record.path+(O&&H+O)}if(P=o7(W,E,L),y?y.alias.push(P):(D=D||P,D!==P&&D.alias.push(P),N&&A.name&&!Lw(P)&&m(A.name)),"children"in R){const Q=R.children;for(let H=0;H<Q.length;H++)k(Q[H],P,y&&y.children[H])}y=y||P,w(P)}return D?()=>{m(D)}:Pr}function m(A){if(vv(A)){const E=p.get(A);E&&(p.delete(A),d.splice(d.indexOf(E),1),E.children.forEach(m),E.alias.forEach(m))}else{const E=d.indexOf(A);E>-1&&(d.splice(E,1),A.record.name&&p.delete(A.record.name),A.children.forEach(m),A.alias.forEach(m))}}function v(){return d}function w(A){let E=0;for(;E<d.length&&XT(A,d[E])>=0&&(A.record.path!==d[E].record.path||!Av(A,d[E]));)E++;d.splice(E,0,A),A.record.name&&!Lw(A)&&p.set(A.record.name,A)}function x(A,E){let y,N={},R,L;if("name"in A&&A.name){if(y=p.get(A.name),!y)throw Us(1,{location:A});L=y.record.name,N=vt(s7(E.params,y.keys.filter(D=>!D.optional).map(D=>D.name)),A.params),R=y.stringify(N)}else if("path"in A)R=A.path,y=d.find(D=>D.re.test(R)),y&&(N=y.parse(R),L=y.record.name);else{if(y=E.name?p.get(E.name):d.find(D=>D.re.test(E.path)),!y)throw Us(1,{location:A,currentLocation:E});L=y.record.name,N=vt({},E.params,A.params),R=y.stringify(N)}const V=[];let P=y;for(;P;)V.unshift(P.record),P=P.parent;return{name:L,path:R,params:N,matched:V,meta:l7(V)}}return s.forEach(A=>k(A)),{addRoute:k,resolve:x,removeRoute:m,getRoutes:v,getRecordMatcher:h}}function s7(s,a){const d={};for(const p of a)p in s&&(d[p]=s[p]);return d}function r7(s){return{path:s.path,redirect:s.redirect,name:s.name,meta:s.meta||{},aliasOf:void 0,beforeEnter:s.beforeEnter,props:a7(s),children:s.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in s?s.components||{}:{default:s.component}}}function a7(s){const a={},d=s.props||!1;if("component"in s)a.default=d;else for(const p in s.components)a[p]=typeof d=="boolean"?d:d[p];return a}function Lw(s){for(;s;){if(s.record.aliasOf)return!0;s=s.parent}return!1}function l7(s){return s.reduce((a,d)=>vt(a,d.meta),{})}function Ow(s,a){const d={};for(const p in s)d[p]=p in a?a[p]:s[p];return d}function Av(s,a){return a.children.some(d=>d===s||Av(s,d))}const yv=/#/g,c7=/&/g,d7=/\//g,u7=/=/g,h7=/\?/g,xv=/\+/g,p7=/%5B/g,g7=/%5D/g,Ev=/%5E/g,f7=/%60/g,Dv=/%7B/g,m7=/%7C/g,Iv=/%7D/g,k7=/%20/g;function dh(s){return encodeURI(""+s).replace(m7,"|").replace(p7,"[").replace(g7,"]")}function _7(s){return dh(s).replace(Dv,"{").replace(Iv,"}").replace(Ev,"^")}function Du(s){return dh(s).replace(xv,"%2B").replace(k7,"+").replace(yv,"%23").replace(c7,"%26").replace(f7,"`").replace(Dv,"{").replace(Iv,"}").replace(Ev,"^")}function b7(s){return Du(s).replace(u7,"%3D")}function w7(s){return dh(s).replace(yv,"%23").replace(h7,"%3F")}function v7(s){return s==null?"":w7(s).replace(d7,"%2F")}function ml(s){try{return decodeURIComponent(""+s)}catch{}return""+s}function C7(s){const a={};if(s===""||s==="?")return a;const p=(s[0]==="?"?s.slice(1):s).split("&");for(let h=0;h<p.length;++h){const k=p[h].replace(xv," "),m=k.indexOf("="),v=ml(m<0?k:k.slice(0,m)),w=m<0?null:ml(k.slice(m+1));if(v in a){let x=a[v];Array.isArray(x)||(x=a[v]=[x]),x.push(w)}else a[v]=w}return a}function $w(s){let a="";for(let d in s){const p=s[d];if(d=b7(d),p==null){p!==void 0&&(a+=(a.length?"&":"")+d);continue}(Array.isArray(p)?p.map(k=>k&&Du(k)):[p&&Du(p)]).forEach(k=>{k!==void 0&&(a+=(a.length?"&":"")+d,k!=null&&(a+="="+k))})}return a}function A7(s){const a={};for(const d in s){const p=s[d];p!==void 0&&(a[d]=Array.isArray(p)?p.map(h=>h==null?null:""+h):p==null?p:""+p)}return a}function Sr(){let s=[];function a(p){return s.push(p),()=>{const h=s.indexOf(p);h>-1&&s.splice(h,1)}}function d(){s=[]}return{add:a,list:()=>s,reset:d}}function pi(s,a,d,p,h){const k=p&&(p.enterCallbacks[h]=p.enterCallbacks[h]||[]);return()=>new Promise((m,v)=>{const w=E=>{E===!1?v(Us(4,{from:d,to:a})):E instanceof Error?v(E):KT(E)?v(Us(2,{from:a,to:E})):(k&&p.enterCallbacks[h]===k&&typeof E=="function"&&k.push(E),m())},x=s.call(p&&p.instances[h],a,d,w);let A=Promise.resolve(x);s.length<3&&(A=A.then(w)),A.catch(E=>v(E))})}function nu(s,a,d,p){const h=[];for(const k of s)for(const m in k.components){let v=k.components[m];if(!(a!=="beforeRouteEnter"&&!k.instances[m]))if(y7(v)){const x=(v.__vccOpts||v)[a];x&&h.push(pi(x,d,p,k,m))}else{let w=v();h.push(()=>w.then(x=>{if(!x)return Promise.reject(new Error(`Couldn't resolve component "${m}" at "${k.path}"`));const A=ST(x)?x.default:x;k.components[m]=A;const y=(A.__vccOpts||A)[a];return y&&pi(y,d,p,k,m)()}))}}return h}function y7(s){return typeof s=="object"||"displayName"in s||"props"in s||"__vccOpts"in s}function zw(s){const a=Fn($l),d=Fn(ch),p=Ze(()=>a.resolve(J(s.to))),h=Ze(()=>{const{matched:w}=p.value,{length:x}=w,A=w[x-1],E=d.matched;if(!A||!E.length)return-1;const y=E.findIndex(Vs.bind(null,A));if(y>-1)return y;const N=Rw(w[x-2]);return x>1&&Rw(A)===N&&E[E.length-1].path!==N?E.findIndex(Vs.bind(null,w[x-2])):y}),k=Ze(()=>h.value>-1&&I7(d.params,p.value.params)),m=Ze(()=>h.value>-1&&h.value===d.matched.length-1&&bv(d.params,p.value.params));function v(w={}){return D7(w)?a[J(s.replace)?"replace":"push"](J(s.to)).catch(Pr):Promise.resolve()}return{route:p,href:Ze(()=>p.value.href),isActive:k,isExactActive:m,navigate:v}}const x7=Ys({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zw,setup(s,{slots:a}){const d=Ks(zw(s)),{options:p}=Fn($l),h=Ze(()=>({[jw(s.activeClass,p.linkActiveClass,"router-link-active")]:d.isActive,[jw(s.exactActiveClass,p.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const k=a.default&&a.default(d);return s.custom?k:Tl("a",{"aria-current":d.isExactActive?s.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:h.value},k)}}}),E7=x7;function D7(s){if(!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)&&!s.defaultPrevented&&!(s.button!==void 0&&s.button!==0)){if(s.currentTarget&&s.currentTarget.getAttribute){const a=s.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return s.preventDefault&&s.preventDefault(),!0}}function I7(s,a){for(const d in a){const p=a[d],h=s[d];if(typeof p=="string"){if(p!==h)return!1}else if(!Array.isArray(h)||h.length!==p.length||p.some((k,m)=>k!==h[m]))return!1}return!0}function Rw(s){return s?s.aliasOf?s.aliasOf.path:s.path:""}const jw=(s,a,d)=>s??a??d,M7=Ys({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(s,{attrs:a,slots:d}){const p=Fn(xu),h=Ze(()=>s.route||p.value),k=Fn(Iw,0),m=Ze(()=>h.value.matched[k]);$s(Iw,k+1),$s(MT,m),$s(xu,h);const v=q();return No(()=>[v.value,m.value,s.name],([w,x,A],[E,y,N])=>{x&&(x.instances[A]=w,y&&y!==x&&w&&w===E&&(x.leaveGuards.size||(x.leaveGuards=y.leaveGuards),x.updateGuards.size||(x.updateGuards=y.updateGuards))),w&&x&&(!y||!Vs(x,y)||!E)&&(x.enterCallbacks[A]||[]).forEach(R=>R(w))},{flush:"post"}),()=>{const w=h.value,x=m.value,A=x&&x.components[s.name],E=s.name;if(!A)return Fw(d.default,{Component:A,route:w});const y=x.props[s.name],N=y?y===!0?w.params:typeof y=="function"?y(w):y:null,L=Tl(A,vt({},N,a,{onVnodeUnmounted:V=>{V.component.isUnmounted&&(x.instances[E]=null)},ref:v}));return Fw(d.default,{Component:L,route:w})||L}}});function Fw(s,a){if(!s)return null;const d=s(a);return d.length===1?d[0]:d}const S7=M7;function T7(s){const a=i7(s.routes,s),d=s.parseQuery||C7,p=s.stringifyQuery||$w,h=s.history,k=Sr(),m=Sr(),v=Sr(),w=nI(di);let x=di;Bs&&s.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const A=eu.bind(null,oe=>""+oe),E=eu.bind(null,v7),y=eu.bind(null,ml);function N(oe,ye){let ve,ke;return vv(oe)?(ve=a.getRecordMatcher(oe),ke=ye):ke=oe,a.addRoute(ke,ve)}function R(oe){const ye=a.getRecordMatcher(oe);ye&&a.removeRoute(ye)}function L(){return a.getRoutes().map(oe=>oe.record)}function V(oe){return!!a.getRecordMatcher(oe)}function P(oe,ye){if(ye=vt({},ye||w.value),typeof oe=="string"){const j=tu(d,oe,ye.path),U=a.resolve({path:j.path},ye),ee=h.createHref(j.fullPath);return vt(j,U,{params:y(U.params),hash:ml(j.hash),redirectedFrom:void 0,href:ee})}let ve;if("path"in oe)ve=vt({},oe,{path:tu(d,oe.path,ye.path).path});else{const j=vt({},oe.params);for(const U in j)j[U]==null&&delete j[U];ve=vt({},oe,{params:E(oe.params)}),ye.params=E(ye.params)}const ke=a.resolve(ve,ye),Ue=oe.hash||"";ke.params=A(y(ke.params));const rt=NT(p,vt({},oe,{hash:_7(Ue),path:ke.path})),je=h.createHref(rt);return vt({fullPath:rt,hash:Ue,query:p===$w?A7(oe.query):oe.query||{}},ke,{redirectedFrom:void 0,href:je})}function D(oe){return typeof oe=="string"?tu(d,oe,w.value.path):vt({},oe)}function W(oe,ye){if(x!==oe)return Us(8,{from:ye,to:oe})}function O(oe){return K(oe)}function Q(oe){return O(vt(D(oe),{replace:!0}))}function H(oe){const ye=oe.matched[oe.matched.length-1];if(ye&&ye.redirect){const{redirect:ve}=ye;let ke=typeof ve=="function"?ve(oe):ve;return typeof ke=="string"&&(ke=ke.includes("?")||ke.includes("#")?ke=D(ke):{path:ke},ke.params={}),vt({query:oe.query,hash:oe.hash,params:oe.params},ke)}}function K(oe,ye){const ve=x=P(oe),ke=w.value,Ue=oe.state,rt=oe.force,je=oe.replace===!0,j=H(ve);if(j)return K(vt(D(j),{state:Ue,force:rt,replace:je}),ye||ve);const U=ve;U.redirectedFrom=ye;let ee;return!rt&&PT(p,ke,ve)&&(ee=Us(16,{to:U,from:ke}),Oe(ke,ke,!0,!1)),(ee?Promise.resolve(ee):z(U,ke)).catch(Z=>ui(Z)?ui(Z,2)?Z:st(Z):ae(Z,U,ke)).then(Z=>{if(Z){if(ui(Z,2))return K(vt(D(Z.to),{state:Ue,force:rt,replace:je}),ye||U)}else Z=ze(U,ke,!0,je,Ue);return be(U,ke,Z),Z})}function le(oe,ye){const ve=W(oe,ye);return ve?Promise.reject(ve):Promise.resolve()}function z(oe,ye){let ve;const[ke,Ue,rt]=B7(oe,ye);ve=nu(ke.reverse(),"beforeRouteLeave",oe,ye);for(const j of ke)j.leaveGuards.forEach(U=>{ve.push(pi(U,oe,ye))});const je=le.bind(null,oe,ye);return ve.push(je),Ts(ve).then(()=>{ve=[];for(const j of k.list())ve.push(pi(j,oe,ye));return ve.push(je),Ts(ve)}).then(()=>{ve=nu(Ue,"beforeRouteUpdate",oe,ye);for(const j of Ue)j.updateGuards.forEach(U=>{ve.push(pi(U,oe,ye))});return ve.push(je),Ts(ve)}).then(()=>{ve=[];for(const j of oe.matched)if(j.beforeEnter&&!ye.matched.includes(j))if(Array.isArray(j.beforeEnter))for(const U of j.beforeEnter)ve.push(pi(U,oe,ye));else ve.push(pi(j.beforeEnter,oe,ye));return ve.push(je),Ts(ve)}).then(()=>(oe.matched.forEach(j=>j.enterCallbacks={}),ve=nu(rt,"beforeRouteEnter",oe,ye),ve.push(je),Ts(ve))).then(()=>{ve=[];for(const j of m.list())ve.push(pi(j,oe,ye));return ve.push(je),Ts(ve)}).catch(j=>ui(j,8)?j:Promise.reject(j))}function be(oe,ye,ve){for(const ke of v.list())ke(oe,ye,ve)}function ze(oe,ye,ve,ke,Ue){const rt=W(oe,ye);if(rt)return rt;const je=ye===di,j=Bs?history.state:{};ve&&(ke||je?h.replace(oe.fullPath,vt({scroll:je&&j&&j.scroll},Ue)):h.push(oe.fullPath,Ue)),w.value=oe,Oe(oe,ye,ve,je),st()}let me;function Ne(){me=h.listen((oe,ye,ve)=>{const ke=P(oe),Ue=H(ke);if(Ue){K(vt(Ue,{replace:!0}),ke).catch(Pr);return}x=ke;const rt=w.value;Bs&&VT(Tw(rt.fullPath,ve.delta),zl()),z(ke,rt).catch(je=>ui(je,12)?je:ui(je,2)?(K(je.to,ke).then(j=>{ui(j,20)&&!ve.delta&&ve.type===qr.pop&&h.go(-1,!1)}).catch(Pr),Promise.reject()):(ve.delta&&h.go(-ve.delta,!1),ae(je,ke,rt))).then(je=>{je=je||ze(ke,rt,!1),je&&(ve.delta?h.go(-ve.delta,!1):ve.type===qr.pop&&ui(je,20)&&h.go(-1,!1)),be(ke,rt,je)}).catch(Pr)})}let mt=Sr(),Vt=Sr(),Ye;function ae(oe,ye,ve){st(oe);const ke=Vt.list();return ke.length?ke.forEach(Ue=>Ue(oe,ye,ve)):console.error(oe),Promise.reject(oe)}function Ie(){return Ye&&w.value!==di?Promise.resolve():new Promise((oe,ye)=>{mt.add([oe,ye])})}function st(oe){return Ye||(Ye=!oe,Ne(),mt.list().forEach(([ye,ve])=>oe?ve(oe):ye()),mt.reset()),oe}function Oe(oe,ye,ve,ke){const{scrollBehavior:Ue}=s;if(!Bs||!Ue)return Promise.resolve();const rt=!ve&&UT(Tw(oe.fullPath,0))||(ke||!ve)&&history.state&&history.state.scroll||null;return Vo().then(()=>Ue(oe,ye,rt)).then(je=>je&&FT(je)).catch(je=>ae(je,oe,ye))}const Ut=oe=>h.go(oe);let Lt;const An=new Set;return{currentRoute:w,addRoute:N,removeRoute:R,hasRoute:V,getRoutes:L,resolve:P,options:s,push:O,replace:Q,go:Ut,back:()=>Ut(-1),forward:()=>Ut(1),beforeEach:k.add,beforeResolve:m.add,afterEach:v.add,onError:Vt.add,isReady:Ie,install(oe){const ye=this;oe.component("RouterLink",E7),oe.component("RouterView",S7),oe.config.globalProperties.$router=ye,Object.defineProperty(oe.config.globalProperties,"$route",{enumerable:!0,get:()=>J(w)}),Bs&&!Lt&&w.value===di&&(Lt=!0,O(h.location).catch(Ue=>{}));const ve={};for(const Ue in di)ve[Ue]=Ze(()=>w.value[Ue]);oe.provide($l,ye),oe.provide(ch,Ks(ve)),oe.provide(xu,w);const ke=oe.unmount;An.add(oe),oe.unmount=function(){An.delete(oe),An.size<1&&(x=di,me&&me(),w.value=di,Lt=!1,Ye=!1),ke()}}}}function Ts(s){return s.reduce((a,d)=>a.then(()=>d()),Promise.resolve())}function B7(s,a){const d=[],p=[],h=[],k=Math.max(a.matched.length,s.matched.length);for(let m=0;m<k;m++){const v=a.matched[m];v&&(s.matched.find(x=>Vs(x,v))?p.push(v):d.push(v));const w=s.matched[m];w&&(a.matched.find(x=>Vs(x,w))||h.push(w))}return[d,p,h]}function Kt(){return Fn($l)}function Lo(){return Fn(ch)}const ft=(s,a)=>{const d=s.__vccOpts||s;for(const[p,h]of a)d[p]=h;return d},N7={},P7=$0('<svg width="0" height="0" data-v-428703f5><filter id="gooey-black-hole" data-v-428703f5><feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" data-v-428703f5></feGaussianBlur><feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16" result="goo" data-v-428703f5></feColorMatrix></filter></svg><div class="black-hole" data-v-428703f5><ul class="gooey-container" data-v-428703f5><li class="bubble" data-v-428703f5></li><li class="bubble" data-v-428703f5></li><li class="bubble" data-v-428703f5></li><li class="bubble" data-v-428703f5></li><li class="bubble" data-v-428703f5></li><li class="bubble" data-v-428703f5></li></ul></div>',2);function L7(s,a){return P7}const O7=ft(N7,[["render",L7],["__scopeId","data-v-428703f5"]]),$7="/assets/logo-sm-3caf833c.svg";const z7={__name:"CloseText",props:{textName:String,modelValue:Boolean},setup(s){const a=s,d=Ze(()=>a.modelValue),p=Ze(()=>a.textName);return(h,k)=>(S(),T("span",{class:_e({close:J(d)})},Ae(J(p)),3))}},wn=ft(z7,[["__scopeId","data-v-f5164e6a"]]);const dn=s=>(Ot("data-v-54252600"),s=s(),$t(),s),R7=dn(()=>g("img",{src:$7},null,-1)),j7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"})],-1)),F7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"})],-1)),V7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})],-1)),U7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"})],-1)),H7=dn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),q7=[H7],G7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),W7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),K7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"})],-1)),Y7=dn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Q7=[Y7],Z7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),J7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),X7=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"})],-1)),eB=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"})],-1)),tB=dn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),nB=[tB],oB=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),iB=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),sB=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-3 h-3"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 4.5l7.5 7.5-7.5 7.5"})],-1)),rB=dn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"})],-1)),aB={__name:"SideBar",props:{modelValue:Boolean},emits:["openSideBar"],setup(s,{emit:a}){const d=s,p=q(!1),h=q(!1),k=q(!1),m=Ze(()=>d.modelValue),v=()=>{p.value=!1,h.value=!1,k.value=!1};No(m,x=>{x&&v()});const w=x=>{if(a("openSideBar"),x==="about")return p.value=!p.value;if(x==="awards")return h.value=!h.value;if(x==="info")return k.value=!k.value};return(x,A)=>{const E=Vn("router-link");return S(),T("div",{class:_e(["sideBar",{close:J(m)}])},[Me(E,{to:"/",class:"logo"},{default:ht(()=>[R7,Me(wn,{textName:"Carbon",modelValue:J(m),"onUpdate:modelValue":A[0]||(A[0]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1}),g("ul",null,[Me(E,{to:{name:"app.dashboard"}},{default:ht(()=>[j7,Me(wn,{textName:"首頁",modelValue:J(m),"onUpdate:modelValue":A[1]||(A[1]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),Me(E,{to:{name:"app.articles"}},{default:ht(()=>[F7,Me(wn,{textName:"最新消息",modelValue:J(m),"onUpdate:modelValue":A[2]||(A[2]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),Me(E,{to:{name:"app.banners"}},{default:ht(()=>[V7,Me(wn,{textName:"首頁輪播圖",modelValue:J(m),"onUpdate:modelValue":A[3]||(A[3]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),g("a",{href:"javascript:;",onClick:A[5]||(A[5]=y=>w("about"))},[U7,Me(wn,{textName:"關於學會",modelValue:J(m),"onUpdate:modelValue":A[4]||(A[4]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"]),re((S(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:_e(["w-3","h-3","ml-auto",{active:p.value}])},q7,2)),[[Kd,!J(m)]])]),g("ol",{class:_e({open:p.value})},[Me(E,{to:{name:"app.chairmans"}},{default:ht(()=>[G7,Me(wn,{textName:"理事長的話",modelValue:J(m),"onUpdate:modelValue":A[6]||(A[6]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),Me(E,{to:{name:"app.organization"}},{default:ht(()=>[W7,Me(wn,{textName:"組織架構",modelValue:J(m),"onUpdate:modelValue":A[7]||(A[7]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"])],2),g("a",{href:"javascript:;",onClick:A[9]||(A[9]=y=>w("awards"))},[K7,Me(wn,{textName:"學會獎項",modelValue:J(m),"onUpdate:modelValue":A[8]||(A[8]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"]),re((S(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:_e(["w-3","h-3","ml-auto",{active:h.value}])},Q7,2)),[[Kd,!J(m)]])]),g("ol",{class:_e({open:h.value})},[Me(E,{to:{name:"app.award-program"}},{default:ht(()=>[Z7,Me(wn,{textName:"歷年獲獎名單",modelValue:J(m),"onUpdate:modelValue":A[10]||(A[10]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),Me(E,{to:{name:"app.letters"}},{default:ht(()=>[J7,Me(wn,{textName:"推薦書下載",modelValue:J(m),"onUpdate:modelValue":A[11]||(A[11]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"])],2),Me(E,{to:{name:"app.cst-database"}},{default:ht(()=>[X7,Me(wn,{textName:"碳才資料庫",modelValue:J(m),"onUpdate:modelValue":A[12]||(A[12]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),g("a",{href:"javascript:;",onClick:A[14]||(A[14]=y=>w("info"))},[eB,Me(wn,{textName:"論壇&研討會資訊",modelValue:J(m),"onUpdate:modelValue":A[13]||(A[13]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"]),re((S(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:_e(["w-3","h-3","ml-auto",{active:k.value}])},nB,2)),[[Kd,!J(m)]])]),g("ol",{class:_e({open:k.value})},[Me(E,{to:{name:"app.cst-seminar"}},{default:ht(()=>[oB,Me(wn,{textName:"臺灣碳材料學術研討會",modelValue:J(m),"onUpdate:modelValue":A[15]||(A[15]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),Me(E,{to:{name:"app.overseas"}},{default:ht(()=>[iB,Me(wn,{textName:"國內外研討會",modelValue:J(m),"onUpdate:modelValue":A[16]||(A[16]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"]),Me(E,{to:{name:"app.forums"}},{default:ht(()=>[sB,Me(wn,{textName:"碳材料論壇",modelValue:J(m),"onUpdate:modelValue":A[17]||(A[17]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"])],2),Me(E,{to:{name:"app.dashboard"}},{default:ht(()=>[rB,Me(wn,{textName:"Email",modelValue:J(m),"onUpdate:modelValue":A[18]||(A[18]=y=>ct(m)?m.value=y:null)},null,8,["modelValue"])]),_:1},8,["to"])])],2)}}},lB=ft(aB,[["__scopeId","data-v-54252600"]]),cB="/assets/hea-37976f3c.jpg";function Rl(s,a,...d){if(s in a){let h=a[s];return typeof h=="function"?h(...d):h}let p=new Error(`Tried to handle "${s}" but there is no handler defined. Only defined handlers are: ${Object.keys(a).map(h=>`"${h}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,Rl),p}var Iu=(s=>(s[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s))(Iu||{}),dB=(s=>(s[s.Unmount=0]="Unmount",s[s.Hidden=1]="Hidden",s))(dB||{});function jl({visible:s=!0,features:a=0,ourProps:d,theirProps:p,...h}){var k;let m=Sv(p,d),v=Object.assign(h,{props:m});if(s||a&2&&m.static)return ou(v);if(a&1){let w=(k=m.unmount)==null||k?0:1;return Rl(w,{[0](){return null},[1](){return ou({...h,props:{...m,hidden:!0,style:{display:"none"}}})}})}return ou(v)}function ou({props:s,attrs:a,slots:d,slot:p,name:h}){var k,m;let{as:v,...w}=uB(s,["unmount","static"]),x=(k=d.default)==null?void 0:k.call(d,p),A={};if(p){let E=!1,y=[];for(let[N,R]of Object.entries(p))typeof R=="boolean"&&(E=!0),R===!0&&y.push(N);E&&(A["data-headlessui-state"]=y.join(" "))}if(v==="template"){if(x=Mv(x??[]),Object.keys(w).length>0||Object.keys(a).length>0){let[E,...y]=x??[];if(!hB(E)||y.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${h} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(w).concat(Object.keys(a)).map(L=>L.trim()).filter((L,V,P)=>P.indexOf(L)===V).sort((L,V)=>L.localeCompare(V)).map(L=>`  - ${L}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(L=>`  - ${L}`).join(`
`)].join(`
`));let N=Sv((m=E.props)!=null?m:{},w),R=qo(E,N);for(let L in N)L.startsWith("on")&&(R.props||(R.props={}),R.props[L]=N[L]);return R}return Array.isArray(x)&&x.length===1?x[0]:x}return Tl(v,Object.assign({},w,A),{default:()=>x})}function Mv(s){return s.flatMap(a=>a.type===Fe?Mv(a.children):[a])}function Sv(...s){if(s.length===0)return{};if(s.length===1)return s[0];let a={},d={};for(let p of s)for(let h in p)h.startsWith("on")&&typeof p[h]=="function"?(d[h]!=null||(d[h]=[]),d[h].push(p[h])):a[h]=p[h];if(a.disabled||a["aria-disabled"])return Object.assign(a,Object.fromEntries(Object.keys(d).map(p=>[p,void 0])));for(let p in d)Object.assign(a,{[p](h,...k){let m=d[p];for(let v of m){if(h instanceof Event&&h.defaultPrevented)return;v(h,...k)}}});return a}function uB(s,a=[]){let d=Object.assign({},s);for(let p of a)p in d&&delete d[p];return d}function hB(s){return s==null?!1:typeof s.type=="string"||typeof s.type=="object"||typeof s.type=="function"}let pB=0;function gB(){return++pB}function uh(){return gB()}var _n=(s=>(s.Space=" ",s.Enter="Enter",s.Escape="Escape",s.Backspace="Backspace",s.Delete="Delete",s.ArrowLeft="ArrowLeft",s.ArrowUp="ArrowUp",s.ArrowRight="ArrowRight",s.ArrowDown="ArrowDown",s.Home="Home",s.End="End",s.PageUp="PageUp",s.PageDown="PageDown",s.Tab="Tab",s))(_n||{});function fB(s){throw new Error("Unexpected object: "+s)}var jn=(s=>(s[s.First=0]="First",s[s.Previous=1]="Previous",s[s.Next=2]="Next",s[s.Last=3]="Last",s[s.Specific=4]="Specific",s[s.Nothing=5]="Nothing",s))(jn||{});function mB(s,a){let d=a.resolveItems();if(d.length<=0)return null;let p=a.resolveActiveIndex(),h=p??-1,k=(()=>{switch(s.focus){case 0:return d.findIndex(m=>!a.resolveDisabled(m));case 1:{let m=d.slice().reverse().findIndex((v,w,x)=>h!==-1&&x.length-w-1>=h?!1:!a.resolveDisabled(v));return m===-1?m:d.length-1-m}case 2:return d.findIndex((m,v)=>v<=h?!1:!a.resolveDisabled(m));case 3:{let m=d.slice().reverse().findIndex(v=>!a.resolveDisabled(v));return m===-1?m:d.length-1-m}case 4:return d.findIndex(m=>a.resolveId(m)===s.id);case 5:return null;default:fB(s)}})();return k===-1?p:k}function Jt(s){var a;return s==null||s.value==null?null:(a=s.value.$el)!=null?a:s.value}let Tv=Symbol("Context");var Gr=(s=>(s[s.Open=1]="Open",s[s.Closed=2]="Closed",s[s.Closing=4]="Closing",s[s.Opening=8]="Opening",s))(Gr||{});function kB(){return Fn(Tv,null)}function _B(s){$s(Tv,s)}function Vw(s,a){if(s)return s;let d=a??"button";if(typeof d=="string"&&d.toLowerCase()==="button")return"button"}function bB(s,a){let d=q(Vw(s.value.type,s.value.as));return xt(()=>{d.value=Vw(s.value.type,s.value.as)}),xl(()=>{var p;d.value||Jt(a)&&Jt(a)instanceof HTMLButtonElement&&!((p=Jt(a))!=null&&p.hasAttribute("type"))&&(d.value="button")}),d}var wB=Object.defineProperty,vB=(s,a,d)=>a in s?wB(s,a,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[a]=d,Uw=(s,a,d)=>(vB(s,typeof a!="symbol"?a+"":a,d),d);class CB{constructor(){Uw(this,"current",this.detect()),Uw(this,"currentId",0)}set(a){this.current!==a&&(this.currentId=0,this.current=a)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Bv=new CB;function hh(s){if(Bv.isServer)return null;if(s instanceof Node)return s.ownerDocument;if(s!=null&&s.hasOwnProperty("value")){let a=Jt(s);if(a)return a.ownerDocument}return document}function AB({container:s,accept:a,walk:d,enabled:p}){xl(()=>{let h=s.value;if(!h||p!==void 0&&!p.value)return;let k=hh(s);if(!k)return;let m=Object.assign(w=>a(w),{acceptNode:a}),v=k.createTreeWalker(h,NodeFilter.SHOW_ELEMENT,m,!1);for(;v.nextNode();)d(v.currentNode)})}let Mu=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(s=>`${s}:not([tabindex='-1'])`).join(",");var Su=(s=>(s[s.First=1]="First",s[s.Previous=2]="Previous",s[s.Next=4]="Next",s[s.Last=8]="Last",s[s.WrapAround=16]="WrapAround",s[s.NoScroll=32]="NoScroll",s))(Su||{}),yB=(s=>(s[s.Error=0]="Error",s[s.Overflow=1]="Overflow",s[s.Success=2]="Success",s[s.Underflow=3]="Underflow",s))(yB||{}),xB=(s=>(s[s.Previous=-1]="Previous",s[s.Next=1]="Next",s))(xB||{});function Nv(s=document.body){return s==null?[]:Array.from(s.querySelectorAll(Mu)).sort((a,d)=>Math.sign((a.tabIndex||Number.MAX_SAFE_INTEGER)-(d.tabIndex||Number.MAX_SAFE_INTEGER)))}var ph=(s=>(s[s.Strict=0]="Strict",s[s.Loose=1]="Loose",s))(ph||{});function gh(s,a=0){var d;return s===((d=hh(s))==null?void 0:d.body)?!1:Rl(a,{[0](){return s.matches(Mu)},[1](){let p=s;for(;p!==null;){if(p.matches(Mu))return!0;p=p.parentElement}return!1}})}function Pv(s){let a=hh(s);Vo(()=>{a&&!gh(a.activeElement,0)&&EB(s)})}function EB(s){s==null||s.focus({preventScroll:!0})}let DB=["textarea","input"].join(",");function IB(s){var a,d;return(d=(a=s==null?void 0:s.matches)==null?void 0:a.call(s,DB))!=null?d:!1}function Lv(s,a=d=>d){return s.slice().sort((d,p)=>{let h=a(d),k=a(p);if(h===null||k===null)return 0;let m=h.compareDocumentPosition(k);return m&Node.DOCUMENT_POSITION_FOLLOWING?-1:m&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function MB(s,a){return SB(Nv(),a,{relativeTo:s})}function SB(s,a,{sorted:d=!0,relativeTo:p=null,skipElements:h=[]}={}){var k;let m=(k=Array.isArray(s)?s.length>0?s[0].ownerDocument:document:s==null?void 0:s.ownerDocument)!=null?k:document,v=Array.isArray(s)?d?Lv(s):s:Nv(s);h.length>0&&v.length>1&&(v=v.filter(R=>!h.includes(R))),p=p??m.activeElement;let w=(()=>{if(a&5)return 1;if(a&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(a&1)return 0;if(a&2)return Math.max(0,v.indexOf(p))-1;if(a&4)return Math.max(0,v.indexOf(p))+1;if(a&8)return v.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),A=a&32?{preventScroll:!0}:{},E=0,y=v.length,N;do{if(E>=y||E+y<=0)return 0;let R=x+E;if(a&16)R=(R+y)%y;else{if(R<0)return 3;if(R>=y)return 1}N=v[R],N==null||N.focus(A),E+=w}while(N!==m.activeElement);return a&6&&IB(N)&&N.select(),N.hasAttribute("tabindex")||N.setAttribute("tabindex","0"),2}function iu(s,a,d){Bv.isServer||xl(p=>{document.addEventListener(s,a,d),p(()=>document.removeEventListener(s,a,d))})}function TB(s,a,d=Ze(()=>!0)){function p(k,m){if(!d.value||k.defaultPrevented)return;let v=m(k);if(v===null||!v.getRootNode().contains(v))return;let w=function x(A){return typeof A=="function"?x(A()):Array.isArray(A)||A instanceof Set?A:[A]}(s);for(let x of w){if(x===null)continue;let A=x instanceof HTMLElement?x:Jt(x);if(A!=null&&A.contains(v)||k.composed&&k.composedPath().includes(A))return}return!gh(v,ph.Loose)&&v.tabIndex!==-1&&k.preventDefault(),a(k,v)}let h=q(null);iu("mousedown",k=>{var m,v;d.value&&(h.value=((v=(m=k.composedPath)==null?void 0:m.call(k))==null?void 0:v[0])||k.target)},!0),iu("click",k=>{h.value&&(p(k,()=>h.value),h.value=null)},!0),iu("blur",k=>p(k,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function Hw(s){return[s.screenX,s.screenY]}function BB(){let s=q([-1,-1]);return{wasMoved(a){let d=Hw(a);return s.value[0]===d[0]&&s.value[1]===d[1]?!1:(s.value=d,!0)},update(a){s.value=Hw(a)}}}var NB=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(NB||{}),PB=(s=>(s[s.Pointer=0]="Pointer",s[s.Other=1]="Other",s))(PB||{});function LB(s){requestAnimationFrame(()=>requestAnimationFrame(s))}let Ov=Symbol("MenuContext");function Fl(s){let a=Fn(Ov,null);if(a===null){let d=new Error(`<${s} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(d,Fl),d}return a}let OB=Ys({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup(s,{slots:a,attrs:d}){let p=q(1),h=q(null),k=q(null),m=q([]),v=q(""),w=q(null),x=q(1);function A(y=N=>N){let N=w.value!==null?m.value[w.value]:null,R=Lv(y(m.value.slice()),V=>Jt(V.dataRef.domRef)),L=N?R.indexOf(N):null;return L===-1&&(L=null),{items:R,activeItemIndex:L}}let E={menuState:p,buttonRef:h,itemsRef:k,items:m,searchQuery:v,activeItemIndex:w,activationTrigger:x,closeMenu:()=>{p.value=1,w.value=null},openMenu:()=>p.value=0,goToItem(y,N,R){let L=A(),V=mB(y===jn.Specific?{focus:jn.Specific,id:N}:{focus:y},{resolveItems:()=>L.items,resolveActiveIndex:()=>L.activeItemIndex,resolveId:P=>P.id,resolveDisabled:P=>P.dataRef.disabled});v.value="",w.value=V,x.value=R??1,m.value=L.items},search(y){let N=v.value!==""?0:1;v.value+=y.toLowerCase();let R=(w.value!==null?m.value.slice(w.value+N).concat(m.value.slice(0,w.value+N)):m.value).find(V=>V.dataRef.textValue.startsWith(v.value)&&!V.dataRef.disabled),L=R?m.value.indexOf(R):-1;L===-1||L===w.value||(w.value=L,x.value=1)},clearSearch(){v.value=""},registerItem(y,N){let R=A(L=>[...L,{id:y,dataRef:N}]);m.value=R.items,w.value=R.activeItemIndex,x.value=1},unregisterItem(y){let N=A(R=>{let L=R.findIndex(V=>V.id===y);return L!==-1&&R.splice(L,1),R});m.value=N.items,w.value=N.activeItemIndex,x.value=1}};return TB([h,k],(y,N)=>{var R;E.closeMenu(),gh(N,ph.Loose)||(y.preventDefault(),(R=Jt(h))==null||R.focus())},Ze(()=>p.value===0)),$s(Ov,E),_B(Ze(()=>Rl(p.value,{[0]:Gr.Open,[1]:Gr.Closed}))),()=>{let y={open:p.value===0,close:E.closeMenu};return jl({ourProps:{},theirProps:s,slot:y,slots:a,attrs:d,name:"Menu"})}}}),$B=Ys({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"},id:{type:String,default:()=>`headlessui-menu-button-${uh()}`}},setup(s,{attrs:a,slots:d,expose:p}){let h=Fl("MenuButton");p({el:h.buttonRef,$el:h.buttonRef});function k(x){switch(x.key){case _n.Space:case _n.Enter:case _n.ArrowDown:x.preventDefault(),x.stopPropagation(),h.openMenu(),Vo(()=>{var A;(A=Jt(h.itemsRef))==null||A.focus({preventScroll:!0}),h.goToItem(jn.First)});break;case _n.ArrowUp:x.preventDefault(),x.stopPropagation(),h.openMenu(),Vo(()=>{var A;(A=Jt(h.itemsRef))==null||A.focus({preventScroll:!0}),h.goToItem(jn.Last)});break}}function m(x){switch(x.key){case _n.Space:x.preventDefault();break}}function v(x){s.disabled||(h.menuState.value===0?(h.closeMenu(),Vo(()=>{var A;return(A=Jt(h.buttonRef))==null?void 0:A.focus({preventScroll:!0})})):(x.preventDefault(),h.openMenu(),LB(()=>{var A;return(A=Jt(h.itemsRef))==null?void 0:A.focus({preventScroll:!0})})))}let w=bB(Ze(()=>({as:s.as,type:a.type})),h.buttonRef);return()=>{var x;let A={open:h.menuState.value===0},{id:E,...y}=s,N={ref:h.buttonRef,id:E,type:w.value,"aria-haspopup":"menu","aria-controls":(x=Jt(h.itemsRef))==null?void 0:x.id,"aria-expanded":s.disabled?void 0:h.menuState.value===0,onKeydown:k,onKeyup:m,onClick:v};return jl({ourProps:N,theirProps:y,slot:A,attrs:a,slots:d,name:"MenuButton"})}}}),zB=Ys({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:()=>`headlessui-menu-items-${uh()}`}},setup(s,{attrs:a,slots:d,expose:p}){let h=Fl("MenuItems"),k=q(null);p({el:h.itemsRef,$el:h.itemsRef}),AB({container:Ze(()=>Jt(h.itemsRef)),enabled:Ze(()=>h.menuState.value===0),accept(A){return A.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:A.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(A){A.setAttribute("role","none")}});function m(A){var E;switch(k.value&&clearTimeout(k.value),A.key){case _n.Space:if(h.searchQuery.value!=="")return A.preventDefault(),A.stopPropagation(),h.search(A.key);case _n.Enter:if(A.preventDefault(),A.stopPropagation(),h.activeItemIndex.value!==null){let y=h.items.value[h.activeItemIndex.value];(E=Jt(y.dataRef.domRef))==null||E.click()}h.closeMenu(),Pv(Jt(h.buttonRef));break;case _n.ArrowDown:return A.preventDefault(),A.stopPropagation(),h.goToItem(jn.Next);case _n.ArrowUp:return A.preventDefault(),A.stopPropagation(),h.goToItem(jn.Previous);case _n.Home:case _n.PageUp:return A.preventDefault(),A.stopPropagation(),h.goToItem(jn.First);case _n.End:case _n.PageDown:return A.preventDefault(),A.stopPropagation(),h.goToItem(jn.Last);case _n.Escape:A.preventDefault(),A.stopPropagation(),h.closeMenu(),Vo(()=>{var y;return(y=Jt(h.buttonRef))==null?void 0:y.focus({preventScroll:!0})});break;case _n.Tab:A.preventDefault(),A.stopPropagation(),h.closeMenu(),Vo(()=>MB(Jt(h.buttonRef),A.shiftKey?Su.Previous:Su.Next));break;default:A.key.length===1&&(h.search(A.key),k.value=setTimeout(()=>h.clearSearch(),350));break}}function v(A){switch(A.key){case _n.Space:A.preventDefault();break}}let w=kB(),x=Ze(()=>w!==null?(w.value&Gr.Open)===Gr.Open:h.menuState.value===0);return()=>{var A,E;let y={open:h.menuState.value===0},{id:N,...R}=s,L={"aria-activedescendant":h.activeItemIndex.value===null||(A=h.items.value[h.activeItemIndex.value])==null?void 0:A.id,"aria-labelledby":(E=Jt(h.buttonRef))==null?void 0:E.id,id:N,onKeydown:m,onKeyup:v,role:"menu",tabIndex:0,ref:h.itemsRef};return jl({ourProps:L,theirProps:R,slot:y,attrs:a,slots:d,features:Iu.RenderStrategy|Iu.Static,visible:x.value,name:"MenuItems"})}}}),qw=Ys({name:"MenuItem",inheritAttrs:!1,props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1},id:{type:String,default:()=>`headlessui-menu-item-${uh()}`}},setup(s,{slots:a,attrs:d,expose:p}){let h=Fl("MenuItem"),k=q(null);p({el:k,$el:k});let m=Ze(()=>h.activeItemIndex.value!==null?h.items.value[h.activeItemIndex.value].id===s.id:!1),v=Ze(()=>({disabled:s.disabled,textValue:"",domRef:k}));xt(()=>{var R,L;let V=(L=(R=Jt(k))==null?void 0:R.textContent)==null?void 0:L.toLowerCase().trim();V!==void 0&&(v.value.textValue=V)}),xt(()=>h.registerItem(s.id,v)),Ku(()=>h.unregisterItem(s.id)),xl(()=>{h.menuState.value===0&&m.value&&h.activationTrigger.value!==0&&Vo(()=>{var R,L;return(L=(R=Jt(k))==null?void 0:R.scrollIntoView)==null?void 0:L.call(R,{block:"nearest"})})});function w(R){if(s.disabled)return R.preventDefault();h.closeMenu(),Pv(Jt(h.buttonRef))}function x(){if(s.disabled)return h.goToItem(jn.Nothing);h.goToItem(jn.Specific,s.id)}let A=BB();function E(R){A.update(R)}function y(R){A.wasMoved(R)&&(s.disabled||m.value||h.goToItem(jn.Specific,s.id,0))}function N(R){A.wasMoved(R)&&(s.disabled||m.value&&h.goToItem(jn.Nothing))}return()=>{let{disabled:R}=s,L={active:m.value,disabled:R,close:h.closeMenu},{id:V,...P}=s;return jl({ourProps:{id:V,ref:k,role:"menuitem",tabIndex:R===!0?void 0:-1,"aria-disabled":R===!0?!0:void 0,disabled:void 0,onClick:w,onFocus:x,onPointerenter:E,onMouseenter:E,onPointermove:y,onMousemove:y,onPointerleave:N,onMouseleave:N},theirProps:{...d,...P},slot:L,attrs:d,slots:a,name:"MenuItem"})}}});const Zr=s=>(Ot("data-v-1935399f"),s=s(),$t(),s),RB={class:"left"},jB=Zr(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},null,-1)),FB=[jB],VB=Zr(()=>g("img",{src:cB,class:"rounded-full w-10 mr-2"},null,-1)),UB={class:"text-sm"},HB=Zr(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-4 w-4 ml-6"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1)),qB={class:"px-1 py-1"},GB=Zr(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"})],-1)),WB=Zr(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 mr-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"})],-1)),KB={__name:"Header",props:{userName:String},emits:["openSideBar"],setup(s,{emit:a}){const d=s,p=Ze(()=>d.userName),h=Kt(),k=()=>{he.dispatch("logout").then(()=>{h.push({name:"login"})})};return(m,v)=>(S(),T("header",null,[g("div",RB,[(S(),T("svg",{onClick:v[0]||(v[0]=w=>a("openSideBar")),xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},FB))]),Me(J(OB),{as:"div",class:"relative inline-block text-left"},{default:ht(()=>[g("div",null,[Me(J($B),{class:"flex items-center"},{default:ht(()=>[VB,g("p",UB,Ae(J(p)),1),HB]),_:1})]),Me(Ju,{"enter-active-class":"transition duration-100 ease-out","enter-from-class":"transform scale-95 opacity-0","enter-to-class":"transform scale-100 opacity-100","leave-active-class":"transition duration-75 ease-in","leave-from-class":"transform scale-100 opacity-100","leave-to-class":"transform scale-95 opacity-0"},{default:ht(()=>[Me(J(zB),{class:"absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-sm bg-[#293037] shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none"},{default:ht(()=>[g("div",qB,[Me(J(qw),null,{default:ht(({active:w})=>[g("button",{class:_e([w?"bg-[#293037]-600 text-[#ced4da]":"text-[#ced4da]","group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-[#aaa] hover:text-[#333]"])},[GB,In(" Profile ")],2)]),_:1}),Me(J(qw),null,{default:ht(({active:w})=>[g("button",{onClick:k,class:_e([w?"bg-[#293037] text-[#ced4da]":"text-[#ced4da]","group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-[#aaa] hover:text-[#333]"])},[WB,In(" Logout ")],2)]),_:1})])]),_:1})]),_:1})]),_:1})]))}},YB=ft(KB,[["__scopeId","data-v-1935399f"]]);const QB={__name:"Footer",props:{text:String},setup(s){const a=s,d=Ze(()=>a.text);return(p,h)=>{const k=Vn("router-link");return S(),T("footer",null,[g("span",null,Ae(J(d)),1),g("span",null,[In("2023 © "),Me(k,{to:{name:"app.dashboard"}},{default:ht(()=>[In(Ae(J(d))+".",1)]),_:1},8,["to"])])])}}},ZB=ft(QB,[["__scopeId","data-v-cbbfc981"]]);const JB=s=>(Ot("data-v-69b7da2d"),s=s(),$t(),s),XB={key:0,class:"app"},eN={class:"main"},tN={key:1,class:"loading"},nN=JB(()=>g("span",null,"LOADING...",-1)),oN={__name:"AppLayout",setup(s){const a=q(!1);xt(()=>{he.dispatch("getUser")});const d=Ze(()=>he.state.user.data),p=()=>{a.value=!a.value},h=()=>{a.value=!1};return(k,m)=>{const v=Vn("router-view");return J(d).id?(S(),T("div",XB,[Me(lB,{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=w=>a.value=w),onOpenSideBar:h},null,8,["modelValue"]),g("div",eN,[Me(YB,{onOpenSideBar:p,userName:J(d).name},null,8,["userName"]),g("main",null,[Me(v)]),Me(ZB,{text:"Carbon"})])])):(S(),T("div",tN,[Me(O7),nN]))}}},iN=ft(oN,[["__scopeId","data-v-69b7da2d"]]),sN={};function rN(s,a){return S(),T("h1",null,"Dashboard")}const aN=ft(sN,[["render",rN]]),Ji="/assets/news-6d7fd9b8.jpg",$v=10,lN=10,cN=10,dN=10,uN=10,hN=10,pN=10,gN=10,fN=10;const St=s=>(Ot("data-v-cd89bcd0"),s=s(),$t(),s),mN={class:"articles"},kN=St(()=>g("pre",null,null,-1)),_N=St(()=>g("h1",null,"最新消息列表",-1)),bN={class:"card"},wN={class:"card-header"},vN={class:"left"},CN={class:"form-group"},AN=St(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),yN={class:"form-group"},xN=St(()=>g("option",{value:"10"},"10",-1)),EN=St(()=>g("option",{value:"20"},"20",-1)),DN=St(()=>g("option",{value:"50"},"50",-1)),IN=St(()=>g("option",{value:"100"},"100",-1)),MN=[xN,EN,DN,IN],SN={class:"right"},TN={class:"form-group"},BN={class:"table-responsive"},NN={class:"table table-auto w-full animate-fade-in-down"},PN={class:"w-[20px]"},LN={class:"flex items-center"},ON=St(()=>g("div",null,"Id",-1)),$N={key:0,class:"ml-2"},zN={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},RN=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),jN=[RN],FN={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},VN=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),UN=[VN],HN={class:"flex items-center"},qN=St(()=>g("div",null,"圖片",-1)),GN={key:0,class:"ml-2"},WN={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},KN=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),YN=[KN],QN={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},ZN=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),JN=[ZN],XN={class:"flex items-center"},eP=St(()=>g("div",null,"標題",-1)),tP={key:0,class:"ml-2"},nP={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},oP=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),iP=[oP],sP={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},rP=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),aP=[rP],lP={class:"flex items-center"},cP=St(()=>g("div",null,"最後更新時間",-1)),dP={key:0,class:"ml-2"},uP={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},hP=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),pP=[hP],gP={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},fP=St(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),mP=[fP],kP=St(()=>g("th",null,"是否顯示",-1)),_P=St(()=>g("th",null,"操作",-1)),bP={key:0,class:"loadingTable"},wP=St(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),vP=[wP],CP={key:1},AP={class:"w-[20px]"},yP=["value"],xP={class:"w-[40px]"},EP=["src"],DP={key:1,src:Ji},IP={key:0},MP={key:1,class:"active"},SP=["onClick"],TP=St(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),BP=[TP],NP=["onClick"],PP=St(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),LP=[PP],OP={key:0},$P={colspan:"7"},zP={class:"flex items-center"},RP=St(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),jP=["disabled"],FP={key:0,class:"paging"},VP={class:"pageInfo"},UP={class:"pageBtn"},HP=["onClick","disabled","innerHTML"],qP={__name:"Articles",setup(s){const a=Kt(),d=q($v),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.articles),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getArticles",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm(`確定要刪除 ${P.title} 嗎？`)&&he.dispatch("deleteArticle",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteArticleItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",mN,[kN,_N,g("div",bN,[g("div",wN,[g("div",vN,[g("div",CN,[AN,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",yN,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},MN,544),[[Xn,d.value]])])]),g("div",SN,[g("div",TN,[Me(W,{class:"btn",to:{name:"app.add-article",params:{id:"create"}}},{default:ht(()=>[In("+ 新增文章")]),_:1},8,["to"])])])]),g("div",BN,[g("table",NN,[g("thead",null,[g("tr",null,[g("th",PN,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",LN,[ON,h.value==="id"?(S(),T("div",$N,[k.value==="desc"?(S(),T("svg",zN,jN)):Y("",!0),k.value==="asc"?(S(),T("svg",FN,UN)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("image")),class:_e(["cursor-pointer",{active:h.value==="image"}])},[g("div",HN,[qN,h.value==="image"?(S(),T("div",GN,[k.value==="desc"?(S(),T("svg",WN,YN)):Y("",!0),k.value==="asc"?(S(),T("svg",QN,JN)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("title")),class:_e(["cursor-pointer",{active:h.value==="title"}])},[g("div",XN,[eP,h.value==="title"?(S(),T("div",tP,[k.value==="desc"?(S(),T("svg",nP,iP)):Y("",!0),k.value==="asc"?(S(),T("svg",sP,aP)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",lP,[cP,h.value==="updated_at"?(S(),T("div",dP,[k.value==="desc"?(S(),T("svg",uP,pP)):Y("",!0),k.value==="asc"?(S(),T("svg",gP,mP)):Y("",!0)])):Y("",!0)])],2),kP,_P])]),J(m).loading?(S(),T("tbody",bP,vP)):(S(),T("tbody",CP,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",AP,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=H=>v.value=H),onChange:D[11]||(D[11]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,yP),[[ut,v.value]])]),g("td",xP,Ae(O.id),1),g("td",null,[O.image_url?(S(),T("img",{key:0,src:O.image_url},null,8,EP)):(S(),T("img",DP))]),g("td",null,Ae(O.title),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",IP,"隱藏")):(S(),T("span",MP,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-article",params:{id:O.id}})},BP,8,SP),g("button",{class:"delete ml-5",onClick:H=>N(O)},LP,8,NP)])]))),128)),J(m).data.length>0?(S(),T("tr",OP,[g("td",$P,[g("div",zP,[RP,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=O=>V())}," 一鍵刪除 ",10,jP)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",FP,[g("div",VP,"Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",UP,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,HP))),128))])])])):Y("",!0)])])}}},GP=ft(qP,[["__scopeId","data-v-cd89bcd0"]]);const Mn=s=>(Ot("data-v-67771e98"),s=s(),$t(),s),WP={class:"addArticle"},KP={key:0},YP={key:1},QP={class:"card"},ZP=Mn(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),JP={class:"form-group"},XP=Mn(()=>g("label",{for:""},"文章分類",-1)),e6=Mn(()=>g("option",{value:"0"},"會務公告",-1)),t6=Mn(()=>g("option",{value:"1"},"徵才公告",-1)),n6=[e6,t6],o6={class:"form-group"},i6=Mn(()=>g("label",{for:""},"文章標題",-1)),s6={class:"form-group"},r6=Mn(()=>g("label",{for:""},"文章內容",-1)),a6={class:"form-group"},l6=Mn(()=>g("label",{for:""},"文章圖片",-1)),c6={for:"imagefile",class:"imagefileFor"},d6={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},u6=Mn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),h6=Mn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),p6=[u6,h6],g6={key:1},f6=Mn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),m6=Mn(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),k6=[f6,m6],_6={key:2,class:"isPreview"},b6={class:"chkbox-group"},w6={class:"form-group"},v6=Mn(()=>g("label",{for:""},"隱藏文章",-1)),C6={key:0,class:"successMsg"},A6={class:"form-group btn-group mt-10"},y6={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},x6=Mn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),E6=Mn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),D6=[x6,E6],I6={key:1},M6={key:1,class:"flex items-center justify-center py-10"},S6=Mn(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),T6=[S6],B6={key:2,class:"errorMsg"},N6={__name:"AddArticle",setup(s){const a=Lo(),d=Kt(),p={id:"",title:"",image:"",content:"",category:0,hidden:!1},h=q(""),k=q(!1),m=q(!1),v=q(!1),w=q(null),x=q(!1),A=q(null),E=q(null),y=q({...p}),N=q(!1);xt(()=>{const V=a.params.id;if(V==="create"){k.value=!0,y.value.id=V,N.value=!0;return}he.dispatch("isExistArticle",V).then(P=>{P.data?he.dispatch("getArticle",V).then(D=>{y.value=D.data,h.value=D.data.image_url,h.value&&(x.value=!0),k.value=!0,y.value.title=y.value.title=="null"?"":y.value.title,y.value.content=y.value.content=="null"?"":y.value.content}).then(()=>{h.value!=""&&(w.value.src=h.value)}):d.push({path:"/notfound"})}).catch(P=>{console.error(P)})});const R=V=>{if(v.value=!0,V.target.files&&V.target.files[0]){y.value.image=V.target.files[0];const P=new FileReader;P.onload=D=>{w.value.src=D.target.result},P.readAsDataURL(V.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,N.value?he.dispatch("createArticle",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="上傳成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors}):he.dispatch("updateArticle",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="更新成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors})};return No(()=>y.value,V=>{E.value=null},{deep:!0}),(V,P)=>(S(),T("div",WP,[N.value?(S(),T("h1",KP,"新增文章")):(S(),T("h1",YP,"編輯文章")),g("div",QP,[ZP,k.value?(S(),T("form",{key:0,action:"",onSubmit:P[6]||(P[6]=en(D=>L(),["prevent"]))},[g("div",JP,[XP,re(g("select",{"onUpdate:modelValue":P[0]||(P[0]=D=>y.value.category=D)},n6,512),[[Xn,y.value.category]])]),g("div",o6,[i6,re(g("input",{type:"text","onUpdate:modelValue":P[1]||(P[1]=D=>y.value.title=D)},null,512),[[Te,y.value.title]])]),g("div",s6,[r6,re(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":P[2]||(P[2]=D=>y.value.content=D)},null,512),[[Te,y.value.content]])]),g("div",a6,[l6,g("label",c6,[v.value?(S(),T("svg",d6,p6)):Y("",!0),x.value?(S(),T("div",_6,[g("img",{src:"",ref_key:"previewImg",ref:w,id:"previewImg"},null,512)])):(S(),T("div",g6,k6))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:P[3]||(P[3]=D=>R(D))},null,32)]),g("div",b6,[g("div",w6,[v6,re(g("input",{type:"checkbox","onUpdate:modelValue":P[4]||(P[4]=D=>y.value.hidden=D)},null,512),[[ut,y.value.hidden]])])]),E.value?(S(),T("span",C6,Ae(E.value),1)):Y("",!0),g("div",A6,[g("button",{type:"submit",class:_e({loading:m.value})},[m.value?(S(),T("svg",y6,D6)):(S(),T("span",I6,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:P[5]||(P[5]=D=>J(d).push({name:"app.articles"}))}," 回列表 ")])],32)):(S(),T("div",M6,T6)),A.value?(S(),T("div",B6,[(S(!0),T(Fe,null,it(A.value,(D,W)=>(S(),T("span",{key:W},Ae(D[0]),1))),128))])):Y("",!0)])]))}},P6=ft(N6,[["__scopeId","data-v-67771e98"]]);const on=s=>(Ot("data-v-1305181b"),s=s(),$t(),s),L6={class:"banners"},O6=on(()=>g("h1",null,"輪播圖列表",-1)),$6={class:"card"},z6={class:"card-header"},R6={class:"left"},j6={class:"form-group"},F6=on(()=>g("option",{value:"10"},"10",-1)),V6=on(()=>g("option",{value:"20"},"20",-1)),U6=on(()=>g("option",{value:"50"},"50",-1)),H6=on(()=>g("option",{value:"100"},"100",-1)),q6=[F6,V6,U6,H6],G6={class:"right"},W6={class:"form-group"},K6={class:"table-responsive"},Y6={class:"table table-auto w-full animate-fade-in-down"},Q6={class:"w-[20px]"},Z6={class:"flex items-center"},J6=on(()=>g("div",null,"Id",-1)),X6={key:0,class:"ml-2"},eL={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},tL=on(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),nL=[tL],oL={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},iL=on(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),sL=[iL],rL={class:"flex items-center"},aL=on(()=>g("div",null,"圖片",-1)),lL={key:0,class:"ml-2"},cL={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},dL=on(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),uL=[dL],hL={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},pL=on(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),gL=[pL],fL={class:"flex items-center"},mL=on(()=>g("div",null,"最後更新時間",-1)),kL={key:0,class:"ml-2"},_L={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},bL=on(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),wL=[bL],vL={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},CL=on(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),AL=[CL],yL=on(()=>g("th",null,"是否顯示",-1)),xL=on(()=>g("th",null,"操作",-1)),EL={key:0,class:"loadingTable"},DL=on(()=>g("tr",{draggable:"true"},[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),IL=[DL],ML={key:1},SL={class:"w-[20px]"},TL=["value"],BL={class:"w-[40px]"},NL=["src"],PL={key:1,src:Ji},LL={key:0},OL={key:1,class:"active"},$L=["onClick"],zL=on(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),RL=[zL],jL=["onClick"],FL=on(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),VL=[FL],UL={key:0},HL={colspan:"7"},qL={class:"flex items-center"},GL=on(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),WL=["disabled"],KL={key:0,class:"paging"},YL={class:"pageInfo"},QL={class:"pageBtn"},ZL=["onClick","disabled","innerHTML"],JL={__name:"Banners",setup(s){const a=Kt(),d=q(lN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.banners),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getBanners",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm("確定要刪除此圖片嗎？")&&he.dispatch("deleteBanner",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteBannerItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",L6,[O6,g("div",$6,[g("div",z6,[g("div",R6,[g("div",j6,[re(g("select",{"onUpdate:modelValue":D[0]||(D[0]=O=>d.value=O),onChange:D[1]||(D[1]=O=>E())},q6,544),[[Xn,d.value]])])]),g("div",G6,[g("div",W6,[Me(W,{class:"btn",to:{name:"app.add-banner",params:{id:"create"}}},{default:ht(()=>[In("+ 新增輪播圖")]),_:1},8,["to"])])])]),g("div",K6,[g("table",Y6,[g("thead",null,[g("tr",null,[g("th",Q6,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[2]||(D[2]=O=>w.value=O),onChange:D[3]||(D[3]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[4]||(D[4]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",Z6,[J6,h.value==="id"?(S(),T("div",X6,[k.value==="desc"?(S(),T("svg",eL,nL)):Y("",!0),k.value==="asc"?(S(),T("svg",oL,sL)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[5]||(D[5]=O=>y("image")),class:_e(["cursor-pointer",{active:h.value==="image"}])},[g("div",rL,[aL,h.value==="image"?(S(),T("div",lL,[k.value==="desc"?(S(),T("svg",cL,uL)):Y("",!0),k.value==="asc"?(S(),T("svg",hL,gL)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[6]||(D[6]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",fL,[mL,h.value==="updated_at"?(S(),T("div",kL,[k.value==="desc"?(S(),T("svg",_L,wL)):Y("",!0),k.value==="asc"?(S(),T("svg",vL,AL)):Y("",!0)])):Y("",!0)])],2),yL,xL])]),J(m).loading?(S(),T("tbody",EL,IL)):(S(),T("tbody",ML,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",SL,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[7]||(D[7]=H=>v.value=H),onChange:D[8]||(D[8]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,TL),[[ut,v.value]])]),g("td",BL,Ae(O.id),1),g("td",null,[O.image_url?(S(),T("img",{key:0,src:O.image_url},null,8,NL)):(S(),T("img",PL))]),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",LL,"隱藏")):(S(),T("span",OL,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-banner",params:{id:O.id}})},RL,8,$L),g("button",{class:"delete ml-5",onClick:H=>N(O)},VL,8,jL)])]))),128)),J(m).data.length>0?(S(),T("tr",UL,[g("td",HL,[g("div",qL,[GL,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[9]||(D[9]=O=>V())}," 一鍵刪除 ",10,WL)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",KL,[g("div",YL,"Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",QL,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,ZL))),128))])])])):Y("",!0)])])}}},XL=ft(JL,[["__scopeId","data-v-1305181b"]]);const fo=s=>(Ot("data-v-5c93b605"),s=s(),$t(),s),eO={class:"addBanner"},tO={key:0},nO={key:1},oO={class:"card"},iO=fo(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),sO={class:"form-group"},rO=fo(()=>g("label",{for:""},"輪播圖連結",-1)),aO={class:"form-group"},lO=fo(()=>g("label",{for:""},"輪播圖上傳",-1)),cO={for:"imagefile",class:"imagefileFor"},dO={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},uO=fo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),hO=fo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),pO=[uO,hO],gO={key:1},fO=fo(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),mO=fo(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),kO=[fO,mO],_O={key:2,class:"isPreview"},bO={class:"chkbox-group"},wO={class:"form-group"},vO=fo(()=>g("label",{for:""},"隱藏圖片",-1)),CO={key:0,class:"successMsg"},AO={class:"form-group btn-group mt-10"},yO={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},xO=fo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),EO=fo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),DO=[xO,EO],IO={key:1},MO={key:1,class:"flex items-center justify-center py-10"},SO=fo(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),TO=[SO],BO={key:2,class:"errorMsg"},NO={__name:"AddBanner",setup(s){const a=Lo(),d=Kt(),p={id:"",image:"",url:"",hidden:!1},h=q(""),k=q(!1),m=q(!1),v=q(!1),w=q(null),x=q(!1),A=q(null),E=q(null),y=q({...p}),N=q(!1);xt(()=>{const V=a.params.id;if(V==="create"){k.value=!0,y.value.id=V,N.value=!0;return}he.dispatch("isExistBanner",V).then(P=>{P.data?he.dispatch("getBanner",V).then(D=>{y.value=D.data,h.value=D.data.image_url,x.value=!0,k.value=!0,y.value.url=y.value.url=="null"?"":y.value.url}).then(()=>{h.value!=""&&(w.value.src=h.value)}):d.push({path:"/notfound"})}).catch(P=>{console.error(P)})});const R=V=>{if(v.value=!0,V.target.files&&V.target.files[0]){y.value.image=V.target.files[0];const P=new FileReader;P.onload=D=>{w.value.src=D.target.result},P.readAsDataURL(V.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,N.value?he.dispatch("createBanner",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="上傳成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors}):he.dispatch("updateBanner",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="更新成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors})};return No(()=>y.value,V=>{E.value=null},{deep:!0}),(V,P)=>(S(),T("div",eO,[N.value?(S(),T("h1",tO,"新增輪播圖")):(S(),T("h1",nO,"編輯輪播圖")),g("div",oO,[iO,k.value?(S(),T("form",{key:0,action:"",onSubmit:P[4]||(P[4]=en(D=>L(),["prevent"]))},[g("div",sO,[rO,re(g("input",{type:"text","onUpdate:modelValue":P[0]||(P[0]=D=>y.value.url=D)},null,512),[[Te,y.value.url]])]),g("div",aO,[lO,g("label",cO,[v.value?(S(),T("svg",dO,pO)):Y("",!0),x.value?(S(),T("div",_O,[g("img",{src:"",ref_key:"previewImg",ref:w,id:"previewImg"},null,512)])):(S(),T("div",gO,kO))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:P[1]||(P[1]=D=>R(D))},null,32)]),g("div",bO,[g("div",wO,[vO,re(g("input",{type:"checkbox","onUpdate:modelValue":P[2]||(P[2]=D=>y.value.hidden=D)},null,512),[[ut,y.value.hidden]])])]),E.value?(S(),T("span",CO,Ae(E.value),1)):Y("",!0),g("div",AO,[g("button",{type:"submit",class:_e({loading:m.value})},[m.value?(S(),T("svg",yO,DO)):(S(),T("span",IO,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:P[3]||(P[3]=D=>J(d).push({name:"app.banners"}))}," 回列表 ")])],32)):(S(),T("div",MO,TO)),A.value?(S(),T("div",BO,[(S(!0),T(Fe,null,it(A.value,(D,W)=>(S(),T("span",{key:W},Ae(D[0]),1))),128))])):Y("",!0)])]))}},PO=ft(NO,[["__scopeId","data-v-5c93b605"]]);const Tt=s=>(Ot("data-v-09fd9f12"),s=s(),$t(),s),LO={class:"chairmans"},OO=Tt(()=>g("pre",null,null,-1)),$O=Tt(()=>g("h1",null,"理事長的話",-1)),zO={class:"card"},RO={class:"card-header"},jO={class:"left"},FO={class:"form-group"},VO=Tt(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),UO={class:"form-group"},HO=Tt(()=>g("option",{value:"10"},"10",-1)),qO=Tt(()=>g("option",{value:"20"},"20",-1)),GO=Tt(()=>g("option",{value:"50"},"50",-1)),WO=Tt(()=>g("option",{value:"100"},"100",-1)),KO=[HO,qO,GO,WO],YO={class:"right"},QO={class:"form-group"},ZO={class:"table-responsive"},JO={class:"table table-auto w-full animate-fade-in-down"},XO={class:"w-[20px]"},e8={class:"flex items-center"},t8=Tt(()=>g("div",null,"Id",-1)),n8={key:0,class:"ml-2"},o8={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},i8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),s8=[i8],r8={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},a8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),l8=[a8],c8={class:"flex items-center"},d8=Tt(()=>g("div",null,"圖片",-1)),u8={key:0,class:"ml-2"},h8={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},p8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),g8=[p8],f8={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},m8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),k8=[m8],_8={class:"flex items-center"},b8=Tt(()=>g("div",null,"姓名",-1)),w8={key:0,class:"ml-2"},v8={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},C8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),A8=[C8],y8={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},x8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),E8=[x8],D8={class:"flex items-center"},I8=Tt(()=>g("div",null,"最後更新時間",-1)),M8={key:0,class:"ml-2"},S8={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},T8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),B8=[T8],N8={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},P8=Tt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),L8=[P8],O8=Tt(()=>g("th",null,"是否顯示",-1)),$8=Tt(()=>g("th",null,"操作",-1)),z8={key:0,class:"loadingTable"},R8=Tt(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),j8=[R8],F8={key:1},V8={class:"w-[20px]"},U8=["value"],H8={class:"w-[40px]"},q8=["src"],G8={key:1,src:Ji},W8={key:0},K8={key:1,class:"active"},Y8=["onClick"],Q8=Tt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),Z8=[Q8],J8=["onClick"],X8=Tt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),e$=[X8],t$={key:0},n$={colspan:"7"},o$={class:"flex items-center"},i$=Tt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),s$=["disabled"],r$={key:0,class:"paging"},a$={class:"pageInfo"},l$={class:"pageBtn"},c$=["onClick","disabled","innerHTML"],d$={__name:"Chairman",setup(s){const a=Kt(),d=q(cN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.chairmans),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getChairmans",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm(`確定要刪除 ${P.name} 嗎？`)&&he.dispatch("deleteChairman",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteChairmanItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",LO,[OO,$O,g("div",zO,[g("div",RO,[g("div",jO,[g("div",FO,[VO,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",UO,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},KO,544),[[Xn,d.value]])])]),g("div",YO,[g("div",QO,[Me(W,{class:"btn",to:{name:"app.add-chairman",params:{id:"create"}}},{default:ht(()=>[In("+ 新增理事長")]),_:1},8,["to"])])])]),g("div",ZO,[g("table",JO,[g("thead",null,[g("tr",null,[g("th",XO,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",e8,[t8,h.value==="id"?(S(),T("div",n8,[k.value==="desc"?(S(),T("svg",o8,s8)):Y("",!0),k.value==="asc"?(S(),T("svg",r8,l8)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("image")),class:_e(["cursor-pointer",{active:h.value==="image"}])},[g("div",c8,[d8,h.value==="image"?(S(),T("div",u8,[k.value==="desc"?(S(),T("svg",h8,g8)):Y("",!0),k.value==="asc"?(S(),T("svg",f8,k8)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("name")),class:_e(["cursor-pointer",{active:h.value==="name"}])},[g("div",_8,[b8,h.value==="name"?(S(),T("div",w8,[k.value==="desc"?(S(),T("svg",v8,A8)):Y("",!0),k.value==="asc"?(S(),T("svg",y8,E8)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",D8,[I8,h.value==="updated_at"?(S(),T("div",M8,[k.value==="desc"?(S(),T("svg",S8,B8)):Y("",!0),k.value==="asc"?(S(),T("svg",N8,L8)):Y("",!0)])):Y("",!0)])],2),O8,$8])]),J(m).loading?(S(),T("tbody",z8,j8)):(S(),T("tbody",F8,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",V8,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=H=>v.value=H),onChange:D[11]||(D[11]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,U8),[[ut,v.value]])]),g("td",H8,Ae(O.id),1),g("td",null,[O.image_url?(S(),T("img",{key:0,src:O.image_url},null,8,q8)):(S(),T("img",G8))]),g("td",null,Ae(O.name),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",W8,"隱藏")):(S(),T("span",K8,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-chairman",params:{id:O.id}})},Z8,8,Y8),g("button",{class:"delete ml-5",onClick:H=>N(O)},e$,8,J8)])]))),128)),J(m).data.length>0?(S(),T("tr",t$,[g("td",n$,[g("div",o$,[i$,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=O=>V())}," 一鍵刪除 ",10,s$)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",r$,[g("div",a$," Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",l$,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,c$))),128))])])])):Y("",!0)])])}}},u$=ft(d$,[["__scopeId","data-v-09fd9f12"]]);const Un=s=>(Ot("data-v-01da0ff2"),s=s(),$t(),s),h$={class:"addChairman"},p$={key:0},g$={key:1},f$={class:"card"},m$=Un(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),k$={class:"form-group"},_$=Un(()=>g("label",{for:""},"理事長名稱及抬頭",-1)),b$={class:"form-group"},w$=Un(()=>g("label",{for:""},"留言時間",-1)),v$={class:"form-group"},C$=Un(()=>g("label",{for:""},"內容",-1)),A$={class:"form-group"},y$=Un(()=>g("label",{for:""},"理事長圖片",-1)),x$={for:"imagefile",class:"imagefileFor"},E$={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},D$=Un(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),I$=Un(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),M$=[D$,I$],S$={key:1},T$=Un(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),B$=Un(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),N$=[T$,B$],P$={key:2,class:"isPreview"},L$={class:"chkbox-group"},O$={class:"form-group"},$$=Un(()=>g("label",{for:""},"隱藏文章",-1)),z$={key:0,class:"successMsg"},R$={class:"form-group btn-group mt-10"},j$={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},F$=Un(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),V$=Un(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),U$=[F$,V$],H$={key:1},q$={key:1,class:"flex items-center justify-center py-10"},G$=Un(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),W$=[G$],K$={key:2,class:"errorMsg"},Y$={__name:"AddChairman",setup(s){const a=Lo(),d=Kt(),p={id:"",name:"",message_date:"",image:"",content:"",hidden:!1},h=q(""),k=q(!1),m=q(!1),v=q(!1),w=q(null),x=q(!1),A=q(null),E=q(null),y=q({...p}),N=q(!1);xt(()=>{const V=a.params.id;if(V==="create"){k.value=!0,y.value.id=V,N.value=!0;return}he.dispatch("isExistChairman",V).then(P=>{P.data?he.dispatch("getChairman",V).then(D=>{y.value=D.data,h.value=D.data.image_url,h.value&&(x.value=!0),k.value=!0,y.value.name=y.value.name=="null"?"":y.value.name,y.value.content=y.value.content=="null"?"":y.value.content}).then(()=>{h.value!=""&&(w.value.src=h.value)}):d.push({path:"/notfound"})}).catch(P=>{console.error(P)})});const R=V=>{if(v.value=!0,V.target.files&&V.target.files[0]){y.value.image=V.target.files[0];const P=new FileReader;P.onload=D=>{w.value.src=D.target.result},P.readAsDataURL(V.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,N.value?he.dispatch("createChairman",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="上傳成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors}):he.dispatch("updateChairman",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="更新成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors})};return(V,P)=>(S(),T("div",h$,[N.value?(S(),T("h1",p$,"新增理事長的話")):(S(),T("h1",g$,"編輯理事長的話")),g("div",f$,[m$,k.value?(S(),T("form",{key:0,action:"",onSubmit:P[6]||(P[6]=en(D=>L(),["prevent"]))},[g("div",k$,[_$,re(g("input",{type:"text","onUpdate:modelValue":P[0]||(P[0]=D=>y.value.name=D)},null,512),[[Te,y.value.name]])]),g("div",b$,[w$,re(g("input",{type:"text","onUpdate:modelValue":P[1]||(P[1]=D=>y.value.message_date=D)},null,512),[[Te,y.value.message_date]])]),g("div",v$,[C$,re(g("textarea",{"onUpdate:modelValue":P[2]||(P[2]=D=>y.value.content=D)},null,512),[[Te,y.value.content]])]),g("div",A$,[y$,g("label",x$,[v.value?(S(),T("svg",E$,M$)):Y("",!0),x.value?(S(),T("div",P$,[g("img",{src:"",ref_key:"previewImg",ref:w,id:"previewImg"},null,512)])):(S(),T("div",S$,N$))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:P[3]||(P[3]=D=>R(D))},null,32)]),g("div",L$,[g("div",O$,[$$,re(g("input",{type:"checkbox","onUpdate:modelValue":P[4]||(P[4]=D=>y.value.hidden=D)},null,512),[[ut,y.value.hidden]])])]),E.value?(S(),T("span",z$,Ae(E.value),1)):Y("",!0),g("div",R$,[g("button",{type:"submit",class:_e({loading:m.value})},[m.value?(S(),T("svg",j$,U$)):(S(),T("span",H$,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:P[5]||(P[5]=D=>J(d).push({name:"app.chairmans"}))}," 回列表 ")])],32)):(S(),T("div",q$,W$)),A.value?(S(),T("div",K$,[(S(!0),T(Fe,null,it(A.value,(D,W)=>(S(),T("span",{key:W},Ae(D[0]),1))),128))])):Y("",!0)])]))}},Q$=ft(Y$,[["__scopeId","data-v-01da0ff2"]]);const Et=s=>(Ot("data-v-b9a95e9e"),s=s(),$t(),s),Z$={class:"organizations"},J$=Et(()=>g("pre",null,null,-1)),X$=Et(()=>g("h1",null,"組織架構",-1)),ez={class:"card"},tz={class:"card-header"},nz={class:"left"},oz={class:"form-group"},iz=Et(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),sz={class:"form-group"},rz=Et(()=>g("option",{value:"10"},"10",-1)),az=Et(()=>g("option",{value:"20"},"20",-1)),lz=Et(()=>g("option",{value:"50"},"50",-1)),cz=Et(()=>g("option",{value:"100"},"100",-1)),dz=[rz,az,lz,cz],uz=Et(()=>g("div",{class:"right"},[g("div",{class:"form-group"})],-1)),hz={class:"table-responsive"},pz={class:"table table-auto w-full animate-fade-in-down"},gz={class:"w-[20px]"},fz={class:"flex items-center"},mz=Et(()=>g("div",null,"Id",-1)),kz={key:0,class:"ml-2"},_z={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},bz=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),wz=[bz],vz={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Cz=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Az=[Cz],yz={class:"flex items-center"},xz=Et(()=>g("div",null,"圖片",-1)),Ez={key:0,class:"ml-2"},Dz={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Iz=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),Mz=[Iz],Sz={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Tz=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Bz=[Tz],Nz={class:"flex items-center"},Pz=Et(()=>g("div",null,"標題",-1)),Lz={key:0,class:"ml-2"},Oz={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},$z=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),zz=[$z],Rz={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},jz=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Fz=[jz],Vz={class:"flex items-center"},Uz=Et(()=>g("div",null,"最後更新時間",-1)),Hz={key:0,class:"ml-2"},qz={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Gz=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),Wz=[Gz],Kz={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Yz=Et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),Qz=[Yz],Zz=Et(()=>g("th",null,"是否顯示",-1)),Jz=Et(()=>g("th",null,"操作",-1)),Xz={key:0,class:"loadingTable"},eR=Et(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),tR=[eR],nR={key:1},oR={class:"w-[20px]"},iR=["value"],sR={class:"w-[40px]"},rR=["src"],aR={key:1,src:Ji},lR={key:0},cR={key:1,class:"active"},dR=["onClick"],uR=Et(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),hR=[uR],pR=["onClick"],gR=Et(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),fR=[gR],mR={key:0},kR={colspan:"7"},_R={class:"flex items-center"},bR=Et(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),wR=["disabled"],vR={key:0,class:"paging"},CR={class:"pageInfo"},AR={class:"pageBtn"},yR=["onClick","disabled","innerHTML"],xR={__name:"Organization",setup(s){const a=Kt(),d=q(fN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.organizations),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getOrganizations",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm("確定要刪除嗎？")&&he.dispatch("deleteOrganization",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteOrganizationItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>(S(),T("div",Z$,[J$,X$,g("div",ez,[g("div",tz,[g("div",nz,[g("div",oz,[iz,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=W=>p.value=W),onChange:D[1]||(D[1]=W=>E())},null,544),[[Te,p.value]])]),g("div",sz,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=W=>d.value=W),onChange:D[3]||(D[3]=W=>E())},dz,544),[[Xn,d.value]])])]),uz]),g("div",hz,[g("table",pz,[g("thead",null,[g("tr",null,[g("th",gz,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=W=>w.value=W),onChange:D[5]||(D[5]=W=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=W=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",fz,[mz,h.value==="id"?(S(),T("div",kz,[k.value==="desc"?(S(),T("svg",_z,wz)):Y("",!0),k.value==="asc"?(S(),T("svg",vz,Az)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=W=>y("image")),class:_e(["cursor-pointer",{active:h.value==="image"}])},[g("div",yz,[xz,h.value==="image"?(S(),T("div",Ez,[k.value==="desc"?(S(),T("svg",Dz,Mz)):Y("",!0),k.value==="asc"?(S(),T("svg",Sz,Bz)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=W=>y("title")),class:_e(["cursor-pointer",{active:h.value==="title"}])},[g("div",Nz,[Pz,h.value==="title"?(S(),T("div",Lz,[k.value==="desc"?(S(),T("svg",Oz,zz)):Y("",!0),k.value==="asc"?(S(),T("svg",Rz,Fz)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=W=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",Vz,[Uz,h.value==="updated_at"?(S(),T("div",Hz,[k.value==="desc"?(S(),T("svg",qz,Wz)):Y("",!0),k.value==="asc"?(S(),T("svg",Kz,Qz)):Y("",!0)])):Y("",!0)])],2),Zz,Jz])]),J(m).loading?(S(),T("tbody",Xz,tR)):(S(),T("tbody",nR,[(S(!0),T(Fe,null,it(J(m).data,(W,O)=>(S(),T("tr",{key:W.id,class:"animate-fade-in-down"},[g("td",oR,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=Q=>v.value=Q),onChange:D[11]||(D[11]=Q=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:W.id},null,40,iR),[[ut,v.value]])]),g("td",sR,Ae(W.id),1),g("td",null,[W.image_url?(S(),T("img",{key:0,src:W.image_url},null,8,rR)):(S(),T("img",aR))]),g("td",null,Ae(W.title),1),g("td",null,Ae(W.updated_at),1),g("td",null,[W.hidden?(S(),T("span",lR,"隱藏")):(S(),T("span",cR,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:Q=>J(a).push({name:"app.add-organization",params:{id:W.id}})},hR,8,dR),g("button",{class:"delete ml-5",onClick:Q=>N(W)},fR,8,pR)])]))),128)),J(m).data.length>0?(S(),T("tr",mR,[g("td",kR,[g("div",_R,[bR,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=W=>V())}," 一鍵刪除 ",10,wR)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",vR,[g("div",CR," Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",AR,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(W,O)=>(S(),T("a",{href:"#",key:O,onClick:en(Q=>A(Q,W),["prevent"]),disabled:!W.url,class:_e([{active:W.active},{disabled:!W.url}]),innerHTML:W.label},null,10,yR))),128))])])])):Y("",!0)])]))}},ER=ft(xR,[["__scopeId","data-v-b9a95e9e"]]);const eo=s=>(Ot("data-v-0159b91c"),s=s(),$t(),s),DR={class:"addOrganization"},IR={key:0},MR={key:1},SR={class:"card"},TR=eo(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),BR={class:"form-group"},NR=eo(()=>g("label",{for:""},"標題",-1)),PR={class:"form-group"},LR=eo(()=>g("label",{for:""},"內容",-1)),OR={class:"form-group"},$R=eo(()=>g("label",{for:""},"圖片",-1)),zR={for:"imagefile",class:"imagefileFor"},RR={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},jR=eo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),FR=eo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),VR=[jR,FR],UR={key:1},HR=eo(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),qR=eo(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),GR=[HR,qR],WR={key:2,class:"isPreview"},KR={class:"chkbox-group"},YR={class:"form-group"},QR=eo(()=>g("label",{for:""},"隱藏文章",-1)),ZR={key:0,class:"successMsg"},JR={class:"form-group btn-group mt-10"},XR={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e9=eo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),t9=eo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),n9=[e9,t9],o9={key:1},i9={key:1,class:"flex items-center justify-center py-10"},s9=eo(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),r9=[s9],a9={key:2,class:"errorMsg"},l9={__name:"AddOrganization",setup(s){const a=Lo(),d=Kt(),p={id:"",title:"",image:"",content:"",hidden:!1},h=q(""),k=q(!1),m=q(!1),v=q(!1),w=q(null),x=q(!1),A=q(null),E=q(null),y=q({...p}),N=q(!1);xt(()=>{const V=a.params.id;if(V==="create"){k.value=!0,y.value.id=V,N.value=!0;return}he.dispatch("isExistOrganization",V).then(P=>{P.data?he.dispatch("getOrganization",V).then(D=>{y.value=D.data,h.value=D.data.image_url,h.value&&(x.value=!0),k.value=!0,y.value.title=y.value.title=="null"?"":y.value.title,y.value.content=y.value.content=="null"?"":y.value.content}).then(()=>{h.value!=""&&(w.value.src=h.value)}):d.push({path:"/notfound"})}).catch(P=>{console.error(P)})});const R=V=>{if(v.value=!0,V.target.files&&V.target.files[0]){y.value.image=V.target.files[0];const P=new FileReader;P.onload=D=>{w.value.src=D.target.result},P.readAsDataURL(V.target.files[0])}v.value=!1,x.value=!0},L=()=>{m.value=!0,N.value?he.dispatch("createOrganization",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="上傳成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors}):he.dispatch("updateOrganization",y.value).then(V=>{(V.status===200||V.status===201)&&(E.value="更新成功！",A.value=null),m.value=!1}).catch(V=>{m.value=!1,A.value=V.response.data.errors})};return(V,P)=>(S(),T("div",DR,[N.value?(S(),T("h1",IR,"新增組織架構")):(S(),T("h1",MR,"編輯組織架構")),g("div",SR,[TR,k.value?(S(),T("form",{key:0,action:"",onSubmit:P[5]||(P[5]=en(D=>L(),["prevent"]))},[g("div",BR,[NR,re(g("input",{type:"text","onUpdate:modelValue":P[0]||(P[0]=D=>y.value.title=D)},null,512),[[Te,y.value.title]])]),g("div",PR,[LR,re(g("textarea",{"onUpdate:modelValue":P[1]||(P[1]=D=>y.value.content=D)},null,512),[[Te,y.value.content]])]),g("div",OR,[$R,g("label",zR,[v.value?(S(),T("svg",RR,VR)):Y("",!0),x.value?(S(),T("div",WR,[g("img",{src:"",ref_key:"previewImg",ref:w,id:"previewImg"},null,512)])):(S(),T("div",UR,GR))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:P[2]||(P[2]=D=>R(D))},null,32)]),g("div",KR,[g("div",YR,[QR,re(g("input",{type:"checkbox","onUpdate:modelValue":P[3]||(P[3]=D=>y.value.hidden=D)},null,512),[[ut,y.value.hidden]])])]),E.value?(S(),T("span",ZR,Ae(E.value),1)):Y("",!0),g("div",JR,[g("button",{type:"submit",class:_e({loading:m.value})},[m.value?(S(),T("svg",XR,n9)):(S(),T("span",o9,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:P[4]||(P[4]=D=>J(d).push({name:"app.organization"}))}," 回列表 ")])],32)):(S(),T("div",i9,r9)),A.value?(S(),T("div",a9,[(S(!0),T(Fe,null,it(A.value,(D,W)=>(S(),T("span",{key:W},Ae(D[0]),1))),128))])):Y("",!0)])]))}},c9=ft(l9,[["__scopeId","data-v-0159b91c"]]);const wt=s=>(Ot("data-v-5be0d1f5"),s=s(),$t(),s),d9={class:"awardprograms"},u9=wt(()=>g("pre",null,null,-1)),h9=wt(()=>g("h1",null,"歷年獲獎名單",-1)),p9={class:"card"},g9={class:"card-header"},f9={class:"left"},m9={class:"form-group"},k9=wt(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),_9={class:"form-group"},b9=wt(()=>g("option",{value:"10"},"10",-1)),w9=wt(()=>g("option",{value:"20"},"20",-1)),v9=wt(()=>g("option",{value:"50"},"50",-1)),C9=wt(()=>g("option",{value:"100"},"100",-1)),A9=[b9,w9,v9,C9],y9={class:"right"},x9={class:"form-group"},E9={class:"table-responsive"},D9={class:"table table-auto w-full animate-fade-in-down"},I9={class:"w-[20px]"},M9={class:"flex items-center"},S9=wt(()=>g("div",null,"Id",-1)),T9={key:0,class:"ml-2"},B9={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},N9=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),P9=[N9],L9={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},O9=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),$9=[O9],z9={class:"flex items-center"},R9=wt(()=>g("div",null,"年度",-1)),j9={key:0,class:"ml-2"},F9={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},V9=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),U9=[V9],H9={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},q9=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),G9=[q9],W9={class:"flex items-center"},K9=wt(()=>g("div",null,"獎項名稱",-1)),Y9={key:0,class:"ml-2"},Q9={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},Z9=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),J9=[Z9],X9={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},ej=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),tj=[ej],nj={class:"flex items-center"},oj=wt(()=>g("div",null,"獲獎者",-1)),ij={key:0,class:"ml-2"},sj={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},rj=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),aj=[rj],lj={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},cj=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),dj=[cj],uj={class:"flex items-center"},hj=wt(()=>g("div",null,"最後更新時間",-1)),pj={key:0,class:"ml-2"},gj={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},fj=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),mj=[fj],kj={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},_j=wt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),bj=[_j],wj=wt(()=>g("th",null,"是否顯示",-1)),vj=wt(()=>g("th",null,"操作",-1)),Cj={key:0,class:"loadingTable"},Aj=wt(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),yj=[Aj],xj={key:1},Ej={class:"w-[20px]"},Dj=["value"],Ij={class:"w-[40px]"},Mj={key:0},Sj={key:1,class:"active"},Tj=["onClick"],Bj=wt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),Nj=[Bj],Pj=["onClick"],Lj=wt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),Oj=[Lj],$j={key:0},zj={colspan:"7"},Rj={class:"flex items-center"},jj=wt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),Fj=["disabled"],Vj={key:0,class:"paging"},Uj={class:"pageInfo"},Hj={class:"pageBtn"},qj=["onClick","disabled","innerHTML"],Gj={__name:"Awardprogram",setup(s){const a=Kt(),d=q(dN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.awardprograms),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getAwardprograms",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm("確定要刪除該項目嗎？")&&he.dispatch("deleteAwardprogram",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteAwardprogramItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",d9,[u9,h9,g("div",p9,[g("div",g9,[g("div",f9,[g("div",m9,[k9,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",_9,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},A9,544),[[Xn,d.value]])])]),g("div",y9,[g("div",x9,[Me(W,{class:"btn",to:{name:"app.add-award-program",params:{id:"create"}}},{default:ht(()=>[In("+ 新增項目")]),_:1},8,["to"])])])]),g("div",E9,[g("table",D9,[g("thead",null,[g("tr",null,[g("th",I9,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",M9,[S9,h.value==="id"?(S(),T("div",T9,[k.value==="desc"?(S(),T("svg",B9,P9)):Y("",!0),k.value==="asc"?(S(),T("svg",L9,$9)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("year")),class:_e(["cursor-pointer",{active:h.value==="year"}])},[g("div",z9,[R9,h.value==="year"?(S(),T("div",j9,[k.value==="desc"?(S(),T("svg",F9,U9)):Y("",!0),k.value==="asc"?(S(),T("svg",H9,G9)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("award_name")),class:_e(["cursor-pointer",{active:h.value==="award_name"}])},[g("div",W9,[K9,h.value==="award_name"?(S(),T("div",Y9,[k.value==="desc"?(S(),T("svg",Q9,J9)):Y("",!0),k.value==="asc"?(S(),T("svg",X9,tj)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=O=>y("name")),class:_e(["cursor-pointer",{active:h.value==="name"}])},[g("div",nj,[oj,h.value==="name"?(S(),T("div",ij,[k.value==="desc"?(S(),T("svg",sj,aj)):Y("",!0),k.value==="asc"?(S(),T("svg",lj,dj)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[10]||(D[10]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",uj,[hj,h.value==="updated_at"?(S(),T("div",pj,[k.value==="desc"?(S(),T("svg",gj,mj)):Y("",!0),k.value==="asc"?(S(),T("svg",kj,bj)):Y("",!0)])):Y("",!0)])],2),wj,vj])]),J(m).loading?(S(),T("tbody",Cj,yj)):(S(),T("tbody",xj,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",Ej,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[11]||(D[11]=H=>v.value=H),onChange:D[12]||(D[12]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,Dj),[[ut,v.value]])]),g("td",Ij,Ae(O.id),1),g("td",null,Ae(O.year),1),g("td",null,Ae(O.award_name),1),g("td",null,Ae(O.name),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",Mj,"隱藏")):(S(),T("span",Sj,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-award-program",params:{id:O.id}})},Nj,8,Tj),g("button",{class:"delete ml-5",onClick:H=>N(O)},Oj,8,Pj)])]))),128)),J(m).data.length>0?(S(),T("tr",$j,[g("td",zj,[g("div",Rj,[jj,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[13]||(D[13]=O=>V())}," 一鍵刪除 ",10,Fj)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",Vj,[g("div",Uj," Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",Hj,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,qj))),128))])])])):Y("",!0)])])}}},Wj=ft(Gj,[["__scopeId","data-v-5be0d1f5"]]);const Cn=s=>(Ot("data-v-6c1e1002"),s=s(),$t(),s),Kj={class:"addAwardprogram"},Yj={key:0},Qj={key:1},Zj={class:"card"},Jj=Cn(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),Xj={class:"form-group"},eF=Cn(()=>g("label",{for:""},"年度",-1)),tF=$0('<option value="2020" data-v-6c1e1002>2020</option><option value="2021" data-v-6c1e1002>2021</option><option value="2022" data-v-6c1e1002>2022</option><option value="2023" data-v-6c1e1002>2023</option><option value="2024" data-v-6c1e1002>2024</option><option value="2025" data-v-6c1e1002>2025</option><option value="2026" data-v-6c1e1002>2026</option><option value="2027" data-v-6c1e1002>2027</option><option value="2028" data-v-6c1e1002>2028</option><option value="2029" data-v-6c1e1002>2029</option><option value="2030" data-v-6c1e1002>2030</option>',11),nF=[tF],oF={class:"form-group"},iF=Cn(()=>g("label",{for:""},"獎項名稱",-1)),sF={class:"form-group"},rF=Cn(()=>g("label",{for:""},"獲獎者抬頭",-1)),aF={class:"form-group"},lF=Cn(()=>g("label",{for:""},"服務單位",-1)),cF={class:"form-group"},dF=Cn(()=>g("label",{for:""},"服務單位連結",-1)),uF={class:"form-group"},hF=Cn(()=>g("label",{for:""},"檔案名稱",-1)),pF={class:"form-group"},gF=Cn(()=>g("label",{for:""},"檔案上傳",-1)),fF={for:"imagefile",class:"imagefileFor"},mF={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},kF=Cn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),_F=Cn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),bF=[kF,_F],wF={key:1},vF=Cn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),CF=Cn(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),AF=[vF,CF],yF={key:2,class:"isPreview"},xF={class:"chkbox-group"},EF={class:"form-group"},DF=Cn(()=>g("label",{for:""},"隱藏",-1)),IF={key:0,class:"successMsg"},MF={class:"form-group btn-group mt-10"},SF={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},TF=Cn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),BF=Cn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),NF=[TF,BF],PF={key:1},LF={key:1,class:"flex items-center justify-center py-10"},OF=Cn(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),$F=[OF],zF={key:2,class:"errorMsg"},RF={__name:"AddAwardprogram",setup(s){const a=Lo(),d=Kt(),p={id:"",year:new Date().getFullYear(),award_name:"",name:"",link:"",units:"",file:"",file_name:"",hidden:!1},h=q(""),k=q(!1),m=q(!1),v=q(!1);q(null);const w=q(null),x=q(!1),A=q(null),E=q(null),y=q({...p}),N=q(!1);xt(()=>{const P=a.params.id;if(P==="create"){k.value=!0,y.value.id=P,N.value=!0;return}he.dispatch("isExistAwardprogram",P).then(D=>{D.data?he.dispatch("getAwardprogram",P).then(W=>{y.value=W.data,h.value=W.data.file_url,x.value=!0,k.value=!0,y.value.title=y.value.title=="null"?"":y.value.title,y.value.content=y.value.content=="null"?"":y.value.content}).then(()=>{h.value!=""&&(w.value.innerText=h.value)}):d.push({path:"/notfound"})}).catch(D=>{console.error(D)})});const R=P=>{if(v.value=!0,P.target.files&&P.target.files[0]){y.value.file=P.target.files[0];const D=new FileReader;D.onload=W=>{w.value.innerText=P.target.files[0].name},D.readAsDataURL(P.target.files[0])}v.value=!1,x.value=!0},L=()=>{y.value.file="",w.value.innerText="",x.value=!1},V=()=>{m.value=!0,N.value?he.dispatch("createAwardprogram",y.value).then(P=>{(P.status===200||P.status===201)&&(E.value="上傳成功！",A.value=null),m.value=!1}).catch(P=>{m.value=!1,A.value=P.response.data.errors}):he.dispatch("updateAwardprogram",y.value).then(P=>{(P.status===200||P.status===201)&&(E.value="更新成功！",A.value=null),m.value=!1}).catch(P=>{m.value=!1,A.value=P.response.data.errors})};return(P,D)=>(S(),T("div",Kj,[N.value?(S(),T("h1",Yj,"新增獎項")):(S(),T("h1",Qj,"編輯獎項")),g("div",Zj,[Jj,k.value?(S(),T("form",{key:0,action:"",onSubmit:D[10]||(D[10]=en(W=>V(),["prevent"]))},[g("div",Xj,[eF,re(g("select",{"onUpdate:modelValue":D[0]||(D[0]=W=>y.value.year=W)},nF,512),[[Xn,y.value.year]])]),g("div",oF,[iF,re(g("input",{type:"text","onUpdate:modelValue":D[1]||(D[1]=W=>y.value.award_name=W)},null,512),[[Te,y.value.award_name]])]),g("div",sF,[rF,re(g("input",{type:"text","onUpdate:modelValue":D[2]||(D[2]=W=>y.value.name=W)},null,512),[[Te,y.value.name]])]),g("div",aF,[lF,re(g("input",{type:"text","onUpdate:modelValue":D[3]||(D[3]=W=>y.value.units=W)},null,512),[[Te,y.value.units]])]),g("div",cF,[dF,re(g("input",{type:"text","onUpdate:modelValue":D[4]||(D[4]=W=>y.value.link=W)},null,512),[[Te,y.value.link]])]),g("div",uF,[hF,re(g("input",{type:"text","onUpdate:modelValue":D[5]||(D[5]=W=>y.value.file_name=W)},null,512),[[Te,y.value.file_name]])]),g("div",pF,[gF,g("label",fF,[v.value?(S(),T("svg",mF,bF)):Y("",!0),!x.value||!y.value.file_url?(S(),T("div",wF,AF)):(S(),T("div",yF,[g("a",{href:"javascript:;",class:"deleteFileBtn",onClick:D[6]||(D[6]=W=>L())},"X"),g("p",{ref_key:"previewFi",ref:w,class:"w-[200px]"},null,512)]))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:D[7]||(D[7]=W=>R(W))},null,32)]),g("div",xF,[g("div",EF,[DF,re(g("input",{type:"checkbox","onUpdate:modelValue":D[8]||(D[8]=W=>y.value.hidden=W)},null,512),[[ut,y.value.hidden]])])]),E.value?(S(),T("span",IF,Ae(E.value),1)):Y("",!0),g("div",MF,[g("button",{type:"submit",class:_e({loading:m.value})},[m.value?(S(),T("svg",SF,NF)):(S(),T("span",PF,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:D[9]||(D[9]=W=>J(d).push({name:"app.award-program"}))}," 回列表 ")])],32)):(S(),T("div",LF,$F)),A.value?(S(),T("div",zF,[(S(!0),T(Fe,null,it(A.value,(W,O)=>(S(),T("span",{key:O},Ae(W[0]),1))),128))])):Y("",!0)])]))}},jF=ft(RF,[["__scopeId","data-v-6c1e1002"]]);const Yt=s=>(Ot("data-v-dd8856e5"),s=s(),$t(),s),FF={class:"letters"},VF=Yt(()=>g("pre",null,null,-1)),UF=Yt(()=>g("h1",null,"推薦書列表",-1)),HF={class:"card"},qF={class:"card-header"},GF={class:"left"},WF={class:"form-group"},KF=Yt(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),YF={class:"form-group"},QF=Yt(()=>g("option",{value:"10"},"10",-1)),ZF=Yt(()=>g("option",{value:"20"},"20",-1)),JF=Yt(()=>g("option",{value:"50"},"50",-1)),XF=Yt(()=>g("option",{value:"100"},"100",-1)),eV=[QF,ZF,JF,XF],tV={class:"right"},nV={class:"form-group"},oV={class:"table-responsive"},iV={class:"table table-auto w-full animate-fade-in-down"},sV={class:"w-[20px]"},rV={class:"flex items-center"},aV=Yt(()=>g("div",null,"Id",-1)),lV={key:0,class:"ml-2"},cV={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},dV=Yt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),uV=[dV],hV={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},pV=Yt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),gV=[pV],fV={class:"flex items-center"},mV=Yt(()=>g("div",null,"推薦書名稱",-1)),kV={key:0,class:"ml-2"},_V={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},bV=Yt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),wV=[bV],vV={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},CV=Yt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),AV=[CV],yV={class:"flex items-center"},xV=Yt(()=>g("div",null,"最後更新時間",-1)),EV={key:0,class:"ml-2"},DV={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},IV=Yt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),MV=[IV],SV={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},TV=Yt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),BV=[TV],NV=Yt(()=>g("th",null,"是否顯示",-1)),PV=Yt(()=>g("th",null,"操作",-1)),LV={key:0,class:"loadingTable"},OV=Yt(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),$V=[OV],zV={key:1},RV={class:"w-[20px]"},jV=["value"],FV={class:"w-[40px]"},VV={key:0},UV={key:1,class:"active"},HV=["onClick"],qV=Yt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),GV=[qV],WV=["onClick"],KV=Yt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),YV=[KV],QV={key:0},ZV={colspan:"7"},JV={class:"flex items-center"},XV=Yt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),eU=["disabled"],tU={key:0,class:"paging"},nU={class:"pageInfo"},oU={class:"pageBtn"},iU=["onClick","disabled","innerHTML"],sU={__name:"Letters",setup(s){const a=Kt(),d=q($v),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.letters),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getLetters",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm("確定要刪除該項目嗎？")&&he.dispatch("deleteLetter",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteLetterItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",FF,[VF,UF,g("div",HF,[g("div",qF,[g("div",GF,[g("div",WF,[KF,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",YF,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},eV,544),[[Xn,d.value]])])]),g("div",tV,[g("div",nV,[Me(W,{class:"btn",to:{name:"app.add-letter",params:{id:"create"}}},{default:ht(()=>[In("+ 新增推薦書")]),_:1},8,["to"])])])]),g("div",oV,[g("table",iV,[g("thead",null,[g("tr",null,[g("th",sV,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",rV,[aV,h.value==="id"?(S(),T("div",lV,[k.value==="desc"?(S(),T("svg",cV,uV)):Y("",!0),k.value==="asc"?(S(),T("svg",hV,gV)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("name")),class:_e(["cursor-pointer",{active:h.value==="name"}])},[g("div",fV,[mV,h.value==="name"?(S(),T("div",kV,[k.value==="desc"?(S(),T("svg",_V,wV)):Y("",!0),k.value==="asc"?(S(),T("svg",vV,AV)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",yV,[xV,h.value==="updated_at"?(S(),T("div",EV,[k.value==="desc"?(S(),T("svg",DV,MV)):Y("",!0),k.value==="asc"?(S(),T("svg",SV,BV)):Y("",!0)])):Y("",!0)])],2),NV,PV])]),J(m).loading?(S(),T("tbody",LV,$V)):(S(),T("tbody",zV,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",RV,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[9]||(D[9]=H=>v.value=H),onChange:D[10]||(D[10]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,jV),[[ut,v.value]])]),g("td",FV,Ae(O.id),1),g("td",null,Ae(O.name),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",VV,"隱藏")):(S(),T("span",UV,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-letter",params:{id:O.id}})},GV,8,HV),g("button",{class:"delete ml-5",onClick:H=>N(O)},YV,8,WV)])]))),128)),J(m).data.length>0?(S(),T("tr",QV,[g("td",ZV,[g("div",JV,[XV,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[11]||(D[11]=O=>V())}," 一鍵刪除 ",10,eU)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",tU,[g("div",nU,"Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",oU,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,iU))),128))])])])):Y("",!0)])])}}},rU=ft(sU,[["__scopeId","data-v-dd8856e5"]]);const mo=s=>(Ot("data-v-c5376598"),s=s(),$t(),s),aU={class:"addLetter"},lU={key:0},cU={key:1},dU={class:"card"},uU=mo(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),hU={class:"form-group"},pU=mo(()=>g("label",{for:""},"推薦書名稱",-1)),gU={class:"form-group"},fU=mo(()=>g("label",{for:""},"推薦書檔案",-1)),mU={for:"imagefile",class:"imagefileFor"},kU={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},_U=mo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),bU=mo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),wU=[_U,bU],vU={key:1},CU=mo(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),AU=mo(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),yU=[CU,AU],xU={key:2,class:"isPreview"},EU={class:"chkbox-group"},DU={class:"form-group"},IU=mo(()=>g("label",{for:""},"隱藏",-1)),MU={key:0,class:"successMsg"},SU={class:"form-group btn-group mt-10"},TU={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},BU=mo(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),NU=mo(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),PU=[BU,NU],LU={key:1},OU={key:1,class:"flex items-center justify-center py-10"},$U=mo(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),zU=[$U],RU={key:2,class:"errorMsg"},jU={__name:"AddLetter",setup(s){const a=Lo(),d=Kt(),p={id:"",name:"",file:"",hidden:!1},h=q(""),k=q(!1),m=q(!1),v=q(!1);q(null);const w=q(null),x=q(!1),A=q(null),E=q(null),y=q({...p}),N=q(!1);xt(()=>{const P=a.params.id;if(P==="create"){k.value=!0,y.value.id=P,N.value=!0;return}he.dispatch("isExistLetter",P).then(D=>{D.data?he.dispatch("getLetter",P).then(W=>{y.value=W.data,h.value=W.data.file_url,x.value=!0,k.value=!0,y.value.title=y.value.title=="null"?"":y.value.title,y.value.content=y.value.content=="null"?"":y.value.content}).then(()=>{h.value!=""&&(w.value.innerText=h.value)}):d.push({path:"/notfound"})}).catch(D=>{console.error(D)})});const R=P=>{if(v.value=!0,P.target.files&&P.target.files[0]){y.value.file=P.target.files[0];const D=new FileReader;D.onload=W=>{w.value.innerText=P.target.files[0].name},D.readAsDataURL(P.target.files[0])}v.value=!1,x.value=!0},L=()=>{y.value.file="",w.value.innerText="",x.value=!1},V=()=>{m.value=!0,N.value?he.dispatch("createLetter",y.value).then(P=>{(P.status===200||P.status===201)&&(E.value="上傳成功！",A.value=null),m.value=!1}).catch(P=>{m.value=!1,A.value=P.response.data.errors}):he.dispatch("updateLetter",y.value).then(P=>{(P.status===200||P.status===201)&&(E.value="更新成功！",A.value=null),m.value=!1}).catch(P=>{m.value=!1,A.value=P.response.data.errors})};return No(()=>y.value,P=>{E.value=null},{deep:!0}),(P,D)=>(S(),T("div",aU,[N.value?(S(),T("h1",lU,"新增推薦書")):(S(),T("h1",cU,"編輯推薦書")),g("div",dU,[uU,k.value?(S(),T("form",{key:0,action:"",onSubmit:D[5]||(D[5]=en(W=>V(),["prevent"]))},[g("div",hU,[pU,re(g("input",{type:"text","onUpdate:modelValue":D[0]||(D[0]=W=>y.value.name=W)},null,512),[[Te,y.value.name]])]),g("div",gU,[fU,g("label",mU,[v.value?(S(),T("svg",kU,wU)):Y("",!0),!x.value||!y.value.file_url?(S(),T("div",vU,yU)):(S(),T("div",xU,[g("a",{href:"javascript:;",class:"deleteFileBtn",onClick:D[1]||(D[1]=W=>L())},"X"),g("p",{ref_key:"previewFi",ref:w,class:"w-[200px]"},null,512)]))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:D[2]||(D[2]=W=>R(W))},null,32)]),g("div",EU,[g("div",DU,[IU,re(g("input",{type:"checkbox","onUpdate:modelValue":D[3]||(D[3]=W=>y.value.hidden=W)},null,512),[[ut,y.value.hidden]])])]),E.value?(S(),T("span",MU,Ae(E.value),1)):Y("",!0),g("div",SU,[g("button",{type:"submit",class:_e({loading:m.value})},[m.value?(S(),T("svg",TU,PU)):(S(),T("span",LU,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:D[4]||(D[4]=W=>J(d).push({name:"app.letters"}))}," 回列表 ")])],32)):(S(),T("div",OU,zU)),A.value?(S(),T("div",RU,[(S(!0),T(Fe,null,it(A.value,(W,O)=>(S(),T("span",{key:O},Ae(W[0]),1))),128))])):Y("",!0)])]))}},FU=ft(jU,[["__scopeId","data-v-c5376598"]]);const zt=s=>(Ot("data-v-962e2f00"),s=s(),$t(),s),VU={class:"cstdatabases"},UU=zt(()=>g("h1",null,"碳才資料庫列表",-1)),HU={class:"card"},qU={class:"card-header"},GU={class:"left"},WU={class:"form-group"},KU=zt(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),YU={class:"form-group"},QU=zt(()=>g("option",{value:"10"},"10",-1)),ZU=zt(()=>g("option",{value:"20"},"20",-1)),JU=zt(()=>g("option",{value:"50"},"50",-1)),XU=zt(()=>g("option",{value:"100"},"100",-1)),eH=[QU,ZU,JU,XU],tH={class:"right"},nH={class:"form-group"},oH={class:"table-responsive"},iH={class:"table table-auto w-full animate-fade-in-down"},sH={class:"w-[20px]"},rH={class:"flex items-center"},aH=zt(()=>g("div",null,"Id",-1)),lH={key:0,class:"ml-2"},cH={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},dH=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),uH=[dH],hH={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},pH=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),gH=[pH],fH={class:"flex items-center"},mH=zt(()=>g("div",null,"姓名",-1)),kH={key:0,class:"ml-2"},_H={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},bH=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),wH=[bH],vH={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},CH=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),AH=[CH],yH={class:"flex items-center"},xH=zt(()=>g("div",null,"服務單位",-1)),EH={key:0,class:"ml-2"},DH={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},IH=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),MH=[IH],SH={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},TH=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),BH=[TH],NH={class:"flex items-center"},PH=zt(()=>g("div",null,"最後更新時間",-1)),LH={key:0,class:"ml-2"},OH={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},$H=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),zH=[$H],RH={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},jH=zt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),FH=[jH],VH=zt(()=>g("th",null,"是否顯示",-1)),UH=zt(()=>g("th",null,"操作",-1)),HH={key:0,class:"loadingTable"},qH=zt(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),GH=[qH],WH={key:1},KH={class:"w-[20px]"},YH=["value"],QH={class:"w-[40px]"},ZH={key:0},JH={key:1,class:"active"},XH=["onClick"],eq=zt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),tq=[eq],nq=["onClick"],oq=zt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),iq=[oq],sq={key:0},rq={colspan:"7"},aq={class:"flex items-center"},lq=zt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),cq=["disabled"],dq={key:0,class:"paging"},uq={class:"pageInfo"},hq={class:"pageBtn"},pq=["onClick","disabled","innerHTML"],gq={__name:"CstDatabase",setup(s){const a=Kt(),d=q(uN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.cstdatabases),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getCstDatabases",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm("確定要刪除該項目嗎？")&&he.dispatch("deleteCstDatabase",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteCstDatabaseItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",VU,[UU,g("div",HU,[g("div",qU,[g("div",GU,[g("div",WU,[KU,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",YU,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},eH,544),[[Xn,d.value]])])]),g("div",tH,[g("div",nH,[Me(W,{class:"btn",to:{name:"app.add-cst-database",params:{id:"create"}}},{default:ht(()=>[In("+ 新增碳才資料庫")]),_:1},8,["to"])])])]),g("div",oH,[g("table",iH,[g("thead",null,[g("tr",null,[g("th",sH,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",rH,[aH,h.value==="id"?(S(),T("div",lH,[k.value==="desc"?(S(),T("svg",cH,uH)):Y("",!0),k.value==="asc"?(S(),T("svg",hH,gH)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("name")),class:_e(["cursor-pointer",{active:h.value==="name"}])},[g("div",fH,[mH,h.value==="name"?(S(),T("div",kH,[k.value==="desc"?(S(),T("svg",_H,wH)):Y("",!0),k.value==="asc"?(S(),T("svg",vH,AH)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("units")),class:_e(["cursor-pointer",{active:h.value==="units"}])},[g("div",yH,[xH,h.value==="units"?(S(),T("div",EH,[k.value==="desc"?(S(),T("svg",DH,MH)):Y("",!0),k.value==="asc"?(S(),T("svg",SH,BH)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",NH,[PH,h.value==="updated_at"?(S(),T("div",LH,[k.value==="desc"?(S(),T("svg",OH,zH)):Y("",!0),k.value==="asc"?(S(),T("svg",RH,FH)):Y("",!0)])):Y("",!0)])],2),VH,UH])]),J(m).loading?(S(),T("tbody",HH,GH)):(S(),T("tbody",WH,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",KH,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=H=>v.value=H),onChange:D[11]||(D[11]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,YH),[[ut,v.value]])]),g("td",QH,Ae(O.id),1),g("td",null,Ae(O.name),1),g("td",null,Ae(O.units),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",ZH,"隱藏")):(S(),T("span",JH,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-cst-database",params:{id:O.id}})},tq,8,XH),g("button",{class:"delete ml-5",onClick:H=>N(O)},iq,8,nq)])]))),128)),J(m).data.length>0?(S(),T("tr",sq,[g("td",rq,[g("div",aq,[lq,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=O=>V())}," 一鍵刪除 ",10,cq)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",dq,[g("div",uq," Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",hq,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,pq))),128))])])])):Y("",!0)])])}}},fq=ft(gq,[["__scopeId","data-v-962e2f00"]]);const Rt=s=>(Ot("data-v-3b26d08d"),s=s(),$t(),s),mq={class:"addCstDatabase"},kq={key:0},_q={key:1},bq={class:"card"},wq=Rt(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),vq={class:"form-group"},Cq=Rt(()=>g("label",{for:""},"姓名",-1)),Aq={class:"form-group"},yq=Rt(()=>g("label",{for:""},"服務單位",-1)),xq={class:"form-group"},Eq=Rt(()=>g("label",{for:""},"職稱",-1)),Dq={class:"form-group"},Iq=Rt(()=>g("label",{for:""},"研究領域",-1)),Mq={class:"form-group"},Sq=Rt(()=>g("label",{for:""},"相關連結1(可選)",-1)),Tq={class:"flex"},Bq={class:"form-group w-[50%] mr-2"},Nq=Rt(()=>g("label",{for:""},"按鈕名稱",-1)),Pq={class:"form-group w-[50%] ml-2"},Lq=Rt(()=>g("label",{for:""},"網址連結",-1)),Oq={class:"form-group"},$q=Rt(()=>g("label",{for:""},"相關連結2(可選)",-1)),zq={class:"flex"},Rq={class:"form-group w-[50%] mr-2"},jq=Rt(()=>g("label",{for:""},"按鈕名稱",-1)),Fq={class:"form-group w-[50%] ml-2"},Vq=Rt(()=>g("label",{for:""},"網址連結",-1)),Uq={class:"form-group"},Hq=Rt(()=>g("label",{for:""},"相關連結3(可選)",-1)),qq={class:"flex"},Gq={class:"form-group w-[50%] mr-2"},Wq=Rt(()=>g("label",{for:""},"按鈕名稱",-1)),Kq={class:"form-group w-[50%] ml-2"},Yq=Rt(()=>g("label",{for:""},"網址連結",-1)),Qq={class:"form-group"},Zq=Rt(()=>g("label",{for:""},"相關連結4(可選)",-1)),Jq={class:"flex"},Xq={class:"form-group w-[50%] mr-2"},eG=Rt(()=>g("label",{for:""},"按鈕名稱",-1)),tG={class:"form-group w-[50%] ml-2"},nG=Rt(()=>g("label",{for:""},"網址連結",-1)),oG={class:"form-group"},iG=Rt(()=>g("label",{for:""},"相關連結5(可選)",-1)),sG={class:"flex"},rG={class:"form-group w-[50%] mr-2"},aG=Rt(()=>g("label",{for:""},"按鈕名稱",-1)),lG={class:"form-group w-[50%] ml-2"},cG=Rt(()=>g("label",{for:""},"網址連結",-1)),dG={class:"chkbox-group"},uG={class:"form-group"},hG=Rt(()=>g("label",{for:""},"隱藏",-1)),pG={key:0,class:"successMsg"},gG={class:"form-group btn-group mt-10"},fG={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},mG=Rt(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),kG=Rt(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),_G=[mG,kG],bG={key:1},wG={key:1,class:"flex items-center justify-center py-10"},vG=Rt(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),CG=[vG],AG={key:2,class:"errorMsg"},yG={__name:"AddCstDatabase",setup(s){const a=Lo(),d=Kt(),p={id:"",name:"",job_title:"",units:"",field:"",button_1:"",link_1:"",button_2:"",link_2:"",button_3:"",link_3:"",button_4:"",link_4:"",button_5:"",link_5:"",hidden:!1},h=q(""),k=q(!1),m=q(!1);q(!1),q(null);const v=q(!1),w=q(null),x=q(null),A=q({...p}),E=q(!1);xt(()=>{const N=a.params.id;if(N==="create"){k.value=!0,A.value.id=N,E.value=!0;return}he.dispatch("isExistCstDatabase",N).then(R=>{R.data?he.dispatch("getCstDatabase",N).then(L=>{console.log(L),A.value=L.data,h.value=L.data.image_url,v.value=!0,k.value=!0,A.value.button_1=A.value.button_1=="null"?"":A.value.button_1,A.value.link_1=A.value.link_1=="null"?"":A.value.link_1,A.value.button_2=A.value.button_2=="null"?"":A.value.button_2,A.value.link_2=A.value.link_2=="null"?"":A.value.link_2,A.value.button_3=A.value.button_3=="null"?"":A.value.button_3,A.value.link_3=A.value.link_3=="null"?"":A.value.link_3,A.value.button_4=A.value.button_4=="null"?"":A.value.button_4,A.value.link_4=A.value.link_4=="null"?"":A.value.link_4,A.value.button_5=A.value.button_5=="null"?"":A.value.button_5,A.value.link_5=A.value.link_5=="null"?"":A.value.link_5}):d.push({path:"/notfound"})}).catch(R=>{console.error(R)})});const y=()=>{m.value=!0,E.value?he.dispatch("createCstDatabase",A.value).then(N=>{(N.status===200||N.status===201)&&(x.value="上傳成功！",w.value=null),m.value=!1}).catch(N=>{m.value=!1,w.value=N.response.data.errors}):he.dispatch("updateCstDatabase",A.value).then(N=>{(N.status===200||N.status===201)&&(x.value="更新成功！",w.value=null),m.value=!1}).catch(N=>{m.value=!1,w.value=N.response.data.errors})};return(N,R)=>(S(),T("div",mq,[E.value?(S(),T("h1",kq,"新增碳才資料庫")):(S(),T("h1",_q,"編輯碳才資料庫")),g("div",bq,[wq,k.value?(S(),T("form",{key:0,action:"",onSubmit:R[16]||(R[16]=en(L=>y(),["prevent"]))},[g("div",vq,[Cq,re(g("input",{type:"text","onUpdate:modelValue":R[0]||(R[0]=L=>A.value.name=L)},null,512),[[Te,A.value.name]])]),g("div",Aq,[yq,re(g("input",{type:"text","onUpdate:modelValue":R[1]||(R[1]=L=>A.value.units=L)},null,512),[[Te,A.value.units]])]),g("div",xq,[Eq,re(g("input",{type:"text","onUpdate:modelValue":R[2]||(R[2]=L=>A.value.job_title=L)},null,512),[[Te,A.value.job_title]])]),g("div",Dq,[Iq,re(g("input",{type:"text","onUpdate:modelValue":R[3]||(R[3]=L=>A.value.field=L)},null,512),[[Te,A.value.field]])]),g("div",Mq,[Sq,g("div",Tq,[g("div",Bq,[Nq,re(g("input",{type:"text","onUpdate:modelValue":R[4]||(R[4]=L=>A.value.button_1=L)},null,512),[[Te,A.value.button_1]])]),g("div",Pq,[Lq,re(g("input",{type:"text","onUpdate:modelValue":R[5]||(R[5]=L=>A.value.link_1=L)},null,512),[[Te,A.value.link_1]])])])]),g("div",Oq,[$q,g("div",zq,[g("div",Rq,[jq,re(g("input",{type:"text","onUpdate:modelValue":R[6]||(R[6]=L=>A.value.button_2=L)},null,512),[[Te,A.value.button_2]])]),g("div",Fq,[Vq,re(g("input",{type:"text","onUpdate:modelValue":R[7]||(R[7]=L=>A.value.link_2=L)},null,512),[[Te,A.value.link_2]])])])]),g("div",Uq,[Hq,g("div",qq,[g("div",Gq,[Wq,re(g("input",{type:"text","onUpdate:modelValue":R[8]||(R[8]=L=>A.value.button_3=L)},null,512),[[Te,A.value.button_3]])]),g("div",Kq,[Yq,re(g("input",{type:"text","onUpdate:modelValue":R[9]||(R[9]=L=>A.value.link_3=L)},null,512),[[Te,A.value.link_3]])])])]),g("div",Qq,[Zq,g("div",Jq,[g("div",Xq,[eG,re(g("input",{type:"text","onUpdate:modelValue":R[10]||(R[10]=L=>A.value.button_4=L)},null,512),[[Te,A.value.button_4]])]),g("div",tG,[nG,re(g("input",{type:"text","onUpdate:modelValue":R[11]||(R[11]=L=>A.value.link_4=L)},null,512),[[Te,A.value.link_4]])])])]),g("div",oG,[iG,g("div",sG,[g("div",rG,[aG,re(g("input",{type:"text","onUpdate:modelValue":R[12]||(R[12]=L=>A.value.button_5=L)},null,512),[[Te,A.value.button_5]])]),g("div",lG,[cG,re(g("input",{type:"text","onUpdate:modelValue":R[13]||(R[13]=L=>A.value.link_5=L)},null,512),[[Te,A.value.link_5]])])])]),g("div",dG,[g("div",uG,[hG,re(g("input",{type:"checkbox","onUpdate:modelValue":R[14]||(R[14]=L=>A.value.hidden=L)},null,512),[[ut,A.value.hidden]])])]),x.value?(S(),T("span",pG,Ae(x.value),1)):Y("",!0),g("div",gG,[g("button",{type:"submit",class:_e({loading:m.value})},[m.value?(S(),T("svg",fG,_G)):(S(),T("span",bG,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:R[15]||(R[15]=L=>J(d).push({name:"app.cst-database"}))}," 回列表 ")])],32)):(S(),T("div",wG,CG)),w.value?(S(),T("div",AG,[(S(!0),T(Fe,null,it(w.value,(L,V)=>(S(),T("span",{key:V},Ae(L[0]),1))),128))])):Y("",!0)])]))}},xG=ft(yG,[["__scopeId","data-v-3b26d08d"]]);const Bt=s=>(Ot("data-v-b55cf552"),s=s(),$t(),s),EG={class:"cstSeminars"},DG=Bt(()=>g("pre",null,null,-1)),IG=Bt(()=>g("h1",null,"最新消息列表",-1)),MG={class:"card"},SG={class:"card-header"},TG={class:"left"},BG={class:"form-group"},NG=Bt(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),PG={class:"form-group"},LG=Bt(()=>g("option",{value:"10"},"10",-1)),OG=Bt(()=>g("option",{value:"20"},"20",-1)),$G=Bt(()=>g("option",{value:"50"},"50",-1)),zG=Bt(()=>g("option",{value:"100"},"100",-1)),RG=[LG,OG,$G,zG],jG={class:"right"},FG={class:"form-group"},VG={class:"table-responsive"},UG={class:"table table-auto w-full animate-fade-in-down"},HG={class:"w-[20px]"},qG={class:"flex items-center"},GG=Bt(()=>g("div",null,"Id",-1)),WG={key:0,class:"ml-2"},KG={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},YG=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),QG=[YG],ZG={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},JG=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),XG=[JG],eW={class:"flex items-center"},tW=Bt(()=>g("div",null,"圖片",-1)),nW={key:0,class:"ml-2"},oW={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},iW=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),sW=[iW],rW={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},aW=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),lW=[aW],cW={class:"flex items-center"},dW=Bt(()=>g("div",null,"標題",-1)),uW={key:0,class:"ml-2"},hW={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},pW=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),gW=[pW],fW={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},mW=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),kW=[mW],_W={class:"flex items-center"},bW=Bt(()=>g("div",null,"最後更新時間",-1)),wW={key:0,class:"ml-2"},vW={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},CW=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),AW=[CW],yW={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},xW=Bt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),EW=[xW],DW=Bt(()=>g("th",null,"是否顯示",-1)),IW=Bt(()=>g("th",null,"操作",-1)),MW={key:0,class:"loadingTable"},SW=Bt(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),TW=[SW],BW={key:1},NW={class:"w-[20px]"},PW=["value"],LW={class:"w-[40px]"},OW=["src"],$W={key:1,src:Ji},zW={key:0},RW={key:1,class:"active"},jW=["onClick"],FW=Bt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),VW=[FW],UW=["onClick"],HW=Bt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),qW=[HW],GW={key:0},WW={colspan:"7"},KW={class:"flex items-center"},YW=Bt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),QW=["disabled"],ZW={key:0,class:"paging"},JW={class:"pageInfo"},XW={class:"pageBtn"},eK=["onClick","disabled","innerHTML"],tK={__name:"CstSeminar",setup(s){const a=Kt(),d=q(hN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.cstseminars),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getCstSeminars",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm(`確定要刪除 ${P.title} 嗎？`)&&he.dispatch("deleteCstSeminar",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteCstSeminarItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",EG,[DG,IG,g("div",MG,[g("div",SG,[g("div",TG,[g("div",BG,[NG,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",PG,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},RG,544),[[Xn,d.value]])])]),g("div",jG,[g("div",FG,[Me(W,{class:"btn",to:{name:"app.add-cst-seminar",params:{id:"create"}}},{default:ht(()=>[In("+ 新增文章")]),_:1},8,["to"])])])]),g("div",VG,[g("table",UG,[g("thead",null,[g("tr",null,[g("th",HG,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",qG,[GG,h.value==="id"?(S(),T("div",WG,[k.value==="desc"?(S(),T("svg",KG,QG)):Y("",!0),k.value==="asc"?(S(),T("svg",ZG,XG)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("image")),class:_e(["cursor-pointer",{active:h.value==="image"}])},[g("div",eW,[tW,h.value==="image"?(S(),T("div",nW,[k.value==="desc"?(S(),T("svg",oW,sW)):Y("",!0),k.value==="asc"?(S(),T("svg",rW,lW)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("title")),class:_e(["cursor-pointer",{active:h.value==="title"}])},[g("div",cW,[dW,h.value==="title"?(S(),T("div",uW,[k.value==="desc"?(S(),T("svg",hW,gW)):Y("",!0),k.value==="asc"?(S(),T("svg",fW,kW)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",_W,[bW,h.value==="updated_at"?(S(),T("div",wW,[k.value==="desc"?(S(),T("svg",vW,AW)):Y("",!0),k.value==="asc"?(S(),T("svg",yW,EW)):Y("",!0)])):Y("",!0)])],2),DW,IW])]),J(m).loading?(S(),T("tbody",MW,TW)):(S(),T("tbody",BW,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",NW,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=H=>v.value=H),onChange:D[11]||(D[11]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,PW),[[ut,v.value]])]),g("td",LW,Ae(O.id),1),g("td",null,[O.image_url?(S(),T("img",{key:0,src:O.image_url},null,8,OW)):(S(),T("img",$W))]),g("td",null,Ae(O.title),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",zW,"隱藏")):(S(),T("span",RW,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-cst-seminar",params:{id:O.id}})},VW,8,jW),g("button",{class:"delete ml-5",onClick:H=>N(O)},qW,8,UW)])]))),128)),J(m).data.length>0?(S(),T("tr",GW,[g("td",WW,[g("div",KW,[YW,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=O=>V())}," 一鍵刪除 ",10,QW)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",ZW,[g("div",JW," Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",XW,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,eK))),128))])])])):Y("",!0)])])}}},nK=ft(tK,[["__scopeId","data-v-b55cf552"]]);const sn=s=>(Ot("data-v-c674b22d"),s=s(),$t(),s),oK={class:"addCstSeminar"},iK={key:0},sK={key:1},rK={class:"card"},aK=sn(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),lK={class:"form-group"},cK=sn(()=>g("label",{for:""},"研討會標題",-1)),dK={class:"form-group"},uK=sn(()=>g("label",{for:""},"研討會內容",-1)),hK={class:"form-group"},pK=sn(()=>g("label",{for:""},"大會網站連結",-1)),gK={class:"form-group"},fK=sn(()=>g("label",{for:""},"研討會封面圖片",-1)),mK={for:"imagefile",class:"imagefileFor"},kK={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},_K=sn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),bK=sn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),wK=[_K,bK],vK={key:1},CK=sn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),AK=sn(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),yK=[CK,AK],xK={key:2,class:"isPreview"},EK={class:"form-group"},DK=sn(()=>g("label",{for:""},"研討會其他圖片",-1)),IK={for:"imagefiles",class:"imagefileFor"},MK={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},SK=sn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),TK=sn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),BK=[SK,TK],NK={key:1},PK=sn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),LK=sn(()=>g("span",null,"單擊此處以上傳多張圖片。",-1)),OK=[PK,LK],$K={class:"form-group"},zK=sn(()=>g("label",{for:""},"預覽圖片",-1)),RK={class:"prviews"},jK=["src"],FK=["onClick"],VK=sn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)),UK=[VK],HK={class:"chkbox-group"},qK={class:"form-group"},GK=sn(()=>g("label",{for:""},"隱藏文章",-1)),WK={key:0,class:"successMsg"},KK={class:"form-group btn-group mt-10"},YK={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},QK=sn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ZK=sn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),JK=[QK,ZK],XK={key:1},eY={key:1,class:"flex items-center justify-center py-10"},tY=sn(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),nY=[tY],oY={key:2,class:"errorMsg"},iY={__name:"AddCstSeminar",setup(s){const a=Lo(),d=Kt(),p={id:"",title:"",link:"",image:"",images:[],content:"",category:0,hidden:!1},h=q(""),k=q([]),m=q(!1),v=q(!1),w=q(!1),x=q(!1),A=q(null),E=q(null),y=q(!1),N=q(null),R=q(null),L=q({...p}),V=q(!1);xt(()=>{const Q=a.params.id;if(Q==="create"){m.value=!0,L.value.id=Q,V.value=!0;return}he.dispatch("isExistCstSeminar",Q).then(H=>{H.data?he.dispatch("getCstSeminar",Q).then(K=>{L.value=K.data,h.value=K.data.image_url,console.log(K.data.images_url),K.data.images_url==""||K.data.images_url==null?k.value=null:k.value=K.data.images_url.split(","),h.value&&(y.value=!0),m.value=!0,L.value.title=L.value.title=="null"?"":L.value.title,L.value.content=L.value.content=="null"?"":L.value.content,L.value.link=L.value.link=="null"?"":L.value.link}).then(()=>{h.value!=""&&(A.value.src=h.value)}):d.push({path:"/notfound"})}).catch(H=>{console.error(H)})});const P=Q=>{if(w.value=!0,Q.target.files&&Q.target.files[0]){L.value.image=Q.target.files[0];const H=new FileReader;H.onload=K=>{A.value.src=K.target.result},H.readAsDataURL(Q.target.files[0])}w.value=!1,y.value=!0},D=Q=>{if(x.value=!0,console.log(Q.target.files),Q.target.files&&Q.target.files[0]){Array.from(Q.target.files).forEach(H=>{L.value.images.push(H)});for(let H=0;H<Q.target.files.length;H++){const K=new FileReader;K.onload=le=>{const z=document.createElement("img");z.src=le.target.result,E.value.appendChild(z)},K.readAsDataURL(Q.target.files[H])}}x.value=!1},W=Q=>{confirm("確定要刪除此圖片嗎?")&&k.value.splice(Q,1)},O=()=>{v.value=!0,V.value?he.dispatch("createCstSeminar",L.value).then(Q=>{(Q.status===200||Q.status===201)&&(R.value="上傳成功！",N.value=null),v.value=!1}).catch(Q=>{v.value=!1,N.value=Q.response.data.errors}):(L.value.ori_images=k.value,he.dispatch("updateCstSeminar",L.value).then(Q=>{(Q.status===200||Q.status===201)&&(R.value="更新成功！",N.value=null),v.value=!1}).catch(Q=>{v.value=!1,N.value=Q.response.data.errors}))};return(Q,H)=>(S(),T("div",oK,[V.value?(S(),T("h1",iK,"新增研討會")):(S(),T("h1",sK,"編輯研討會")),g("div",rK,[aK,m.value?(S(),T("form",{key:0,action:"",onSubmit:H[7]||(H[7]=en(K=>O(),["prevent"]))},[g("div",lK,[cK,re(g("input",{type:"text","onUpdate:modelValue":H[0]||(H[0]=K=>L.value.title=K)},null,512),[[Te,L.value.title]])]),g("div",dK,[uK,re(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":H[1]||(H[1]=K=>L.value.content=K)},null,512),[[Te,L.value.content]])]),g("div",hK,[pK,re(g("input",{type:"text","onUpdate:modelValue":H[2]||(H[2]=K=>L.value.link=K)},null,512),[[Te,L.value.link]])]),g("div",gK,[fK,g("label",mK,[w.value?(S(),T("svg",kK,wK)):Y("",!0),y.value?(S(),T("div",xK,[g("img",{src:"",ref_key:"previewImg",ref:A,id:"previewImg"},null,512)])):(S(),T("div",vK,yK))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:H[3]||(H[3]=K=>P(K))},null,32)]),g("div",EK,[DK,g("label",IK,[x.value?(S(),T("svg",MK,BK)):Y("",!0),(S(),T("div",NK,OK))]),g("input",{type:"file",id:"imagefiles",multiple:"",hidden:"",onChange:H[4]||(H[4]=K=>D(K))},null,32)]),g("div",$K,[zK,g("div",{class:"prviews mb-3",ref_key:"prviews",ref:E},null,512),g("div",RK,[(S(!0),T(Fe,null,it(k.value,(K,le)=>(S(),T("div",{class:"imgbox",key:K},[g("img",{src:K},null,8,jK),(S(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",onClick:z=>W(le)},UK,8,FK))]))),128))])]),g("div",HK,[g("div",qK,[GK,re(g("input",{type:"checkbox","onUpdate:modelValue":H[5]||(H[5]=K=>L.value.hidden=K)},null,512),[[ut,L.value.hidden]])])]),R.value?(S(),T("span",WK,Ae(R.value),1)):Y("",!0),g("div",KK,[g("button",{type:"submit",class:_e({loading:v.value})},[v.value?(S(),T("svg",YK,JK)):(S(),T("span",XK,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:H[6]||(H[6]=K=>J(d).push({name:"app.cst-seminar"}))}," 回列表 ")])],32)):(S(),T("div",eY,nY)),N.value?(S(),T("div",oY,[(S(!0),T(Fe,null,it(N.value,(K,le)=>(S(),T("span",{key:le},Ae(K[0]),1))),128))])):Y("",!0)])]))}},sY=ft(iY,[["__scopeId","data-v-c674b22d"]]);const Nt=s=>(Ot("data-v-8eb780da"),s=s(),$t(),s),rY={class:"overseas"},aY=Nt(()=>g("pre",null,null,-1)),lY=Nt(()=>g("h1",null,"國內外研討會",-1)),cY={class:"card"},dY={class:"card-header"},uY={class:"left"},hY={class:"form-group"},pY=Nt(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),gY={class:"form-group"},fY=Nt(()=>g("option",{value:"10"},"10",-1)),mY=Nt(()=>g("option",{value:"20"},"20",-1)),kY=Nt(()=>g("option",{value:"50"},"50",-1)),_Y=Nt(()=>g("option",{value:"100"},"100",-1)),bY=[fY,mY,kY,_Y],wY={class:"right"},vY={class:"form-group"},CY={class:"table-responsive"},AY={class:"table table-auto w-full animate-fade-in-down"},yY={class:"w-[20px]"},xY={class:"flex items-center"},EY=Nt(()=>g("div",null,"Id",-1)),DY={key:0,class:"ml-2"},IY={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},MY=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),SY=[MY],TY={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},BY=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),NY=[BY],PY={class:"flex items-center"},LY=Nt(()=>g("div",null,"圖片",-1)),OY={key:0,class:"ml-2"},$Y={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},zY=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),RY=[zY],jY={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},FY=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),VY=[FY],UY={class:"flex items-center"},HY=Nt(()=>g("div",null,"標題",-1)),qY={key:0,class:"ml-2"},GY={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},WY=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),KY=[WY],YY={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},QY=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),ZY=[QY],JY={class:"flex items-center"},XY=Nt(()=>g("div",null,"最後更新時間",-1)),eQ={key:0,class:"ml-2"},tQ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},nQ=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),oQ=[nQ],iQ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},sQ=Nt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),rQ=[sQ],aQ=Nt(()=>g("th",null,"是否顯示",-1)),lQ=Nt(()=>g("th",null,"操作",-1)),cQ={key:0,class:"loadingTable"},dQ=Nt(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),uQ=[dQ],hQ={key:1},pQ={class:"w-[20px]"},gQ=["value"],fQ={class:"w-[40px]"},mQ=["src"],kQ={key:1,src:Ji},_Q={key:0},bQ={key:1,class:"active"},wQ=["onClick"],vQ=Nt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),CQ=[vQ],AQ=["onClick"],yQ=Nt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),xQ=[yQ],EQ={key:0},DQ={colspan:"7"},IQ={class:"flex items-center"},MQ=Nt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),SQ=["disabled"],TQ={key:0,class:"paging"},BQ={class:"pageInfo"},NQ={class:"pageBtn"},PQ=["onClick","disabled","innerHTML"],LQ={__name:"Oversea",setup(s){const a=Kt(),d=q(pN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.overseas),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getOverseas",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm(`確定要刪除 ${P.title} 嗎？`)&&he.dispatch("deleteOversea",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteOverseaItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",rY,[aY,lY,g("div",cY,[g("div",dY,[g("div",uY,[g("div",hY,[pY,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",gY,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},bY,544),[[Xn,d.value]])])]),g("div",wY,[g("div",vY,[Me(W,{class:"btn",to:{name:"app.add-oversea",params:{id:"create"}}},{default:ht(()=>[In("+ 新增研討會")]),_:1},8,["to"])])])]),g("div",CY,[g("table",AY,[g("thead",null,[g("tr",null,[g("th",yY,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",xY,[EY,h.value==="id"?(S(),T("div",DY,[k.value==="desc"?(S(),T("svg",IY,SY)):Y("",!0),k.value==="asc"?(S(),T("svg",TY,NY)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("image")),class:_e(["cursor-pointer",{active:h.value==="image"}])},[g("div",PY,[LY,h.value==="image"?(S(),T("div",OY,[k.value==="desc"?(S(),T("svg",$Y,RY)):Y("",!0),k.value==="asc"?(S(),T("svg",jY,VY)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("title")),class:_e(["cursor-pointer",{active:h.value==="title"}])},[g("div",UY,[HY,h.value==="title"?(S(),T("div",qY,[k.value==="desc"?(S(),T("svg",GY,KY)):Y("",!0),k.value==="asc"?(S(),T("svg",YY,ZY)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",JY,[XY,h.value==="updated_at"?(S(),T("div",eQ,[k.value==="desc"?(S(),T("svg",tQ,oQ)):Y("",!0),k.value==="asc"?(S(),T("svg",iQ,rQ)):Y("",!0)])):Y("",!0)])],2),aQ,lQ])]),J(m).loading?(S(),T("tbody",cQ,uQ)):(S(),T("tbody",hQ,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",pQ,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=H=>v.value=H),onChange:D[11]||(D[11]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,gQ),[[ut,v.value]])]),g("td",fQ,Ae(O.id),1),g("td",null,[O.image_url?(S(),T("img",{key:0,src:O.image_url},null,8,mQ)):(S(),T("img",kQ))]),g("td",null,Ae(O.title),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",_Q,"隱藏")):(S(),T("span",bQ,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-oversea",params:{id:O.id}})},CQ,8,wQ),g("button",{class:"delete ml-5",onClick:H=>N(O)},xQ,8,AQ)])]))),128)),J(m).data.length>0?(S(),T("tr",EQ,[g("td",DQ,[g("div",IQ,[MQ,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=O=>V())}," 一鍵刪除 ",10,SQ)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",TQ,[g("div",BQ,"Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",NQ,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,PQ))),128))])])])):Y("",!0)])])}}},OQ=ft(LQ,[["__scopeId","data-v-8eb780da"]]);const rn=s=>(Ot("data-v-e6b5b02c"),s=s(),$t(),s),$Q={class:"addOversea"},zQ={key:0},RQ={key:1},jQ={class:"card"},FQ=rn(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),VQ={class:"form-group"},UQ=rn(()=>g("label",{for:""},"文章標題",-1)),HQ={class:"form-group"},qQ=rn(()=>g("label",{for:""},"文章內容",-1)),GQ={class:"form-group"},WQ=rn(()=>g("label",{for:""},"研討會連結",-1)),KQ={class:"form-group"},YQ=rn(()=>g("label",{for:""},"文章圖片",-1)),QQ={for:"imagefile",class:"imagefileFor"},ZQ={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},JQ=rn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),XQ=rn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),eZ=[JQ,XQ],tZ={key:1},nZ=rn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),oZ=rn(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),iZ=[nZ,oZ],sZ={key:2,class:"isPreview"},rZ={class:"form-group"},aZ=rn(()=>g("label",{for:""},"研討會其他圖片",-1)),lZ={for:"imagefiles",class:"imagefileFor"},cZ={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},dZ=rn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),uZ=rn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),hZ=[dZ,uZ],pZ={key:1},gZ=rn(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),fZ=rn(()=>g("span",null,"單擊此處以上傳多張圖片。",-1)),mZ=[gZ,fZ],kZ={class:"form-group"},_Z=rn(()=>g("label",{for:""},"預覽圖片",-1)),bZ={class:"prviews"},wZ=["src"],vZ=["onClick"],CZ=rn(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)),AZ=[CZ],yZ={class:"chkbox-group"},xZ={class:"form-group"},EZ=rn(()=>g("label",{for:""},"隱藏文章",-1)),DZ={key:0,class:"successMsg"},IZ={class:"form-group btn-group mt-10"},MZ={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},SZ=rn(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),TZ=rn(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),BZ=[SZ,TZ],NZ={key:1},PZ={key:1,class:"flex items-center justify-center py-10"},LZ=rn(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),OZ=[LZ],$Z={key:2,class:"errorMsg"},zZ={__name:"AddOversea",setup(s){const a=Lo(),d=Kt(),p={id:"",title:"",link:"",image:"",images:[],content:"",category:0,hidden:!1},h=q(""),k=q([]),m=q(!1),v=q(!1),w=q(!1),x=q(!1),A=q(null),E=q(null),y=q(!1),N=q(null),R=q(null),L=q({...p}),V=q(!1);xt(()=>{const Q=a.params.id;if(Q==="create"){m.value=!0,L.value.id=Q,V.value=!0;return}he.dispatch("isExistOversea",Q).then(H=>{H.data?he.dispatch("getOversea",Q).then(K=>{L.value=K.data,h.value=K.data.image_url,K.data.images_url==""||K.data.images_url==null?k.value=null:k.value=K.data.images_url.split(","),h.value&&(y.value=!0),m.value=!0,L.value.title=L.value.title=="null"?"":L.value.title,L.value.content=L.value.content=="null"?"":L.value.content,L.value.link=L.value.link=="null"?"":L.value.link}).then(()=>{h.value!=""&&(A.value.src=h.value)}):d.push({path:"/notfound"})}).catch(H=>{console.error(H)})});const P=Q=>{if(w.value=!0,Q.target.files&&Q.target.files[0]){L.value.image=Q.target.files[0];const H=new FileReader;H.onload=K=>{A.value.src=K.target.result},H.readAsDataURL(Q.target.files[0])}w.value=!1,y.value=!0},D=Q=>{if(x.value=!0,Q.target.files&&Q.target.files[0]){Array.from(Q.target.files).forEach(H=>{L.value.images.push(H)});for(let H=0;H<Q.target.files.length;H++){const K=new FileReader;K.onload=le=>{const z=document.createElement("img");z.src=le.target.result,E.value.appendChild(z)},K.readAsDataURL(Q.target.files[H])}}x.value=!1},W=Q=>{confirm("確定要刪除此圖片嗎?")&&k.value.splice(Q,1)},O=()=>{v.value=!0,V.value?he.dispatch("createOversea",L.value).then(Q=>{(Q.status===200||Q.status===201)&&(R.value="上傳成功！",N.value=null),v.value=!1}).catch(Q=>{v.value=!1,N.value=Q.response.data.errors}):(L.value.ori_images=k.value,he.dispatch("updateOversea",L.value).then(Q=>{(Q.status===200||Q.status===201)&&(R.value="更新成功！",N.value=null),v.value=!1}).catch(Q=>{v.value=!1,N.value=Q.response.data.errors}))};return(Q,H)=>(S(),T("div",$Q,[V.value?(S(),T("h1",zQ,"新增研討會")):(S(),T("h1",RQ,"編輯研討會")),g("div",jQ,[FQ,m.value?(S(),T("form",{key:0,action:"",onSubmit:H[7]||(H[7]=en(K=>O(),["prevent"]))},[g("div",VQ,[UQ,re(g("input",{type:"text","onUpdate:modelValue":H[0]||(H[0]=K=>L.value.title=K)},null,512),[[Te,L.value.title]])]),g("div",HQ,[qQ,re(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":H[1]||(H[1]=K=>L.value.content=K)},null,512),[[Te,L.value.content]])]),g("div",GQ,[WQ,re(g("input",{type:"text","onUpdate:modelValue":H[2]||(H[2]=K=>L.value.link=K)},null,512),[[Te,L.value.link]])]),g("div",KQ,[YQ,g("label",QQ,[w.value?(S(),T("svg",ZQ,eZ)):Y("",!0),y.value?(S(),T("div",sZ,[g("img",{src:"",ref_key:"previewImg",ref:A,id:"previewImg"},null,512)])):(S(),T("div",tZ,iZ))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:H[3]||(H[3]=K=>P(K))},null,32)]),g("div",rZ,[aZ,g("label",lZ,[x.value?(S(),T("svg",cZ,hZ)):Y("",!0),(S(),T("div",pZ,mZ))]),g("input",{type:"file",id:"imagefiles",multiple:"",hidden:"",onChange:H[4]||(H[4]=K=>D(K))},null,32)]),g("div",kZ,[_Z,g("div",{class:"prviews mb-3",ref_key:"prviews",ref:E},null,512),g("div",bZ,[(S(!0),T(Fe,null,it(k.value,(K,le)=>(S(),T("div",{class:"imgbox",key:K},[g("img",{src:K},null,8,wZ),(S(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",onClick:z=>W(le)},AZ,8,vZ))]))),128))])]),g("div",yZ,[g("div",xZ,[EZ,re(g("input",{type:"checkbox","onUpdate:modelValue":H[5]||(H[5]=K=>L.value.hidden=K)},null,512),[[ut,L.value.hidden]])])]),R.value?(S(),T("span",DZ,Ae(R.value),1)):Y("",!0),g("div",IZ,[g("button",{type:"submit",class:_e({loading:v.value})},[v.value?(S(),T("svg",MZ,BZ)):(S(),T("span",NZ,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:H[6]||(H[6]=K=>J(d).push({name:"app.overseas"}))}," 回列表 ")])],32)):(S(),T("div",PZ,OZ)),N.value?(S(),T("div",$Z,[(S(!0),T(Fe,null,it(N.value,(K,le)=>(S(),T("span",{key:le},Ae(K[0]),1))),128))])):Y("",!0)])]))}},RZ=ft(zZ,[["__scopeId","data-v-e6b5b02c"]]);const Pt=s=>(Ot("data-v-eb622f8f"),s=s(),$t(),s),jZ={class:"forums"},FZ=Pt(()=>g("pre",null,null,-1)),VZ=Pt(()=>g("h1",null,"碳材料論壇列表",-1)),UZ={class:"card"},HZ={class:"card-header"},qZ={class:"left"},GZ={class:"form-group"},WZ=Pt(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),KZ={class:"form-group"},YZ=Pt(()=>g("option",{value:"10"},"10",-1)),QZ=Pt(()=>g("option",{value:"20"},"20",-1)),ZZ=Pt(()=>g("option",{value:"50"},"50",-1)),JZ=Pt(()=>g("option",{value:"100"},"100",-1)),XZ=[YZ,QZ,ZZ,JZ],eJ={class:"right"},tJ={class:"form-group"},nJ={class:"table-responsive"},oJ={class:"table table-auto w-full animate-fade-in-down"},iJ={class:"w-[20px]"},sJ={class:"flex items-center"},rJ=Pt(()=>g("div",null,"Id",-1)),aJ={key:0,class:"ml-2"},lJ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},cJ=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),dJ=[cJ],uJ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},hJ=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),pJ=[hJ],gJ={class:"flex items-center"},fJ=Pt(()=>g("div",null,"圖片",-1)),mJ={key:0,class:"ml-2"},kJ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},_J=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),bJ=[_J],wJ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},vJ=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),CJ=[vJ],AJ={class:"flex items-center"},yJ=Pt(()=>g("div",null,"標題",-1)),xJ={key:0,class:"ml-2"},EJ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},DJ=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),IJ=[DJ],MJ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},SJ=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),TJ=[SJ],BJ={class:"flex items-center"},NJ=Pt(()=>g("div",null,"最後更新時間",-1)),PJ={key:0,class:"ml-2"},LJ={key:0,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},OJ=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 15.75l7.5-7.5 7.5 7.5"},null,-1)),$J=[OJ],zJ={key:1,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},RJ=Pt(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"},null,-1)),jJ=[RJ],FJ=Pt(()=>g("th",null,"是否顯示",-1)),VJ=Pt(()=>g("th",null,"操作",-1)),UJ={key:0,class:"loadingTable"},HJ=Pt(()=>g("tr",null,[g("td",{colspan:"7",class:"w-full",style:{"text-align":"center"}},[g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])],-1)),qJ=[HJ],GJ={key:1},WJ={class:"w-[20px]"},KJ=["value"],YJ={class:"w-[40px]"},QJ=["src"],ZJ={key:1,src:Ji},JJ={key:0},XJ={key:1,class:"active"},eX=["onClick"],tX=Pt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})],-1)),nX=[tX],oX=["onClick"],iX=Pt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})],-1)),sX=[iX],rX={key:0},aX={colspan:"7"},lX={class:"flex items-center"},cX=Pt(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4 text-white"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})],-1)),dX=["disabled"],uX={key:0,class:"paging"},hX={class:"pageInfo"},pX={class:"pageBtn"},gX=["onClick","disabled","innerHTML"],fX={__name:"Forum",setup(s){const a=Kt(),d=q(gN),p=q(""),h=q("updated_at"),k=q("desc"),m=Ze(()=>he.state.forums),v=q([]),w=q(!1),x=q(null);xt(()=>{E()});const A=(P,D)=>{!D.url||D.active||E(D.url)},E=(P=null)=>{he.dispatch("getForums",{url:P,sort_field:h.value,sort_direction:k.value,search:p.value,perPage:d.value})},y=P=>{h.value=P,h.value===P?k.value==="asc"?k.value="desc":k.value="asc":(h.value=P,k.value="asc"),E()},N=P=>{confirm(`確定要刪除 ${P.title} 嗎？`)&&he.dispatch("deleteForum",P.id).then(D=>{alert("刪除成功！"),E()})},R=()=>{v.value.length<m.value.total&&(w.value=!1)},L=()=>{w.value?x.value.forEach(P=>{v.value.push(P.value)}):x.value.forEach(P=>{v.value=[]})},V=()=>{confirm("確定刪除？")&&he.dispatch("deleteForumItems",v.value).then(P=>{alert("刪除成功！"),E(),v.value=[]})};return(P,D)=>{const W=Vn("router-link");return S(),T("div",jZ,[FZ,VZ,g("div",UZ,[g("div",HZ,[g("div",qZ,[g("div",GZ,[WZ,re(g("input",{type:"text",placeholder:"搜尋...","onUpdate:modelValue":D[0]||(D[0]=O=>p.value=O),onChange:D[1]||(D[1]=O=>E())},null,544),[[Te,p.value]])]),g("div",KZ,[re(g("select",{"onUpdate:modelValue":D[2]||(D[2]=O=>d.value=O),onChange:D[3]||(D[3]=O=>E())},XZ,544),[[Xn,d.value]])])]),g("div",eJ,[g("div",tJ,[Me(W,{class:"btn",to:{name:"app.add-forum",params:{id:"create"}}},{default:ht(()=>[In("+ 新增碳材料論壇")]),_:1},8,["to"])])])]),g("div",nJ,[g("table",oJ,[g("thead",null,[g("tr",null,[g("th",iJ,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[4]||(D[4]=O=>w.value=O),onChange:D[5]||(D[5]=O=>L())},null,544),[[ut,w.value]])]),g("th",{onClick:D[6]||(D[6]=O=>y("id")),class:_e(["w-[40px]","cursor-pointer",{active:h.value==="id"}])},[g("div",sJ,[rJ,h.value==="id"?(S(),T("div",aJ,[k.value==="desc"?(S(),T("svg",lJ,dJ)):Y("",!0),k.value==="asc"?(S(),T("svg",uJ,pJ)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[7]||(D[7]=O=>y("image")),class:_e(["cursor-pointer",{active:h.value==="image"}])},[g("div",gJ,[fJ,h.value==="image"?(S(),T("div",mJ,[k.value==="desc"?(S(),T("svg",kJ,bJ)):Y("",!0),k.value==="asc"?(S(),T("svg",wJ,CJ)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[8]||(D[8]=O=>y("title")),class:_e(["cursor-pointer",{active:h.value==="title"}])},[g("div",AJ,[yJ,h.value==="title"?(S(),T("div",xJ,[k.value==="desc"?(S(),T("svg",EJ,IJ)):Y("",!0),k.value==="asc"?(S(),T("svg",MJ,TJ)):Y("",!0)])):Y("",!0)])],2),g("th",{onClick:D[9]||(D[9]=O=>y("updated_at")),class:_e(["cursor-pointer",{active:h.value==="updated_at"}])},[g("div",BJ,[NJ,h.value==="updated_at"?(S(),T("div",PJ,[k.value==="desc"?(S(),T("svg",LJ,$J)):Y("",!0),k.value==="asc"?(S(),T("svg",zJ,jJ)):Y("",!0)])):Y("",!0)])],2),FJ,VJ])]),J(m).loading?(S(),T("tbody",UJ,qJ)):(S(),T("tbody",GJ,[(S(!0),T(Fe,null,it(J(m).data,(O,Q)=>(S(),T("tr",{key:O.id,class:"animate-fade-in-down"},[g("td",WJ,[re(g("input",{type:"checkbox","onUpdate:modelValue":D[10]||(D[10]=H=>v.value=H),onChange:D[11]||(D[11]=H=>R()),ref_for:!0,ref_key:"checkItem",ref:x,value:O.id},null,40,KJ),[[ut,v.value]])]),g("td",YJ,Ae(O.id),1),g("td",null,[O.image_url?(S(),T("img",{key:0,src:O.image_url},null,8,QJ)):(S(),T("img",ZJ))]),g("td",null,Ae(O.title),1),g("td",null,Ae(O.updated_at),1),g("td",null,[O.hidden?(S(),T("span",JJ,"隱藏")):(S(),T("span",XJ,"顯示"))]),g("td",null,[g("button",{class:"edit ml-1",onClick:H=>J(a).push({name:"app.add-forum",params:{id:O.id}})},nX,8,eX),g("button",{class:"delete ml-5",onClick:H=>N(O)},sX,8,oX)])]))),128)),J(m).data.length>0?(S(),T("tr",rX,[g("td",aX,[g("div",lX,[cX,g("button",{class:_e([{"bg-red-600":v.value.length>0},"py-1","px-3","ml-4","text-white","rounded-sm",{"bg-gray-400":v.value.length<=0}]),disabled:v.value.length<=0,onClick:D[12]||(D[12]=O=>V())}," 一鍵刪除 ",10,dX)])])])):Y("",!0)]))])]),J(m).total>J(m).limit?(S(),T("div",uX,[g("div",hX,"Showing from "+Ae(J(m).from)+" to "+Ae(J(m).to),1),g("div",pX,[g("nav",null,[(S(!0),T(Fe,null,it(J(m).links,(O,Q)=>(S(),T("a",{href:"#",key:Q,onClick:en(H=>A(H,O),["prevent"]),disabled:!O.url,class:_e([{active:O.active},{disabled:!O.url}]),innerHTML:O.label},null,10,gX))),128))])])])):Y("",!0)])])}}},mX=ft(fX,[["__scopeId","data-v-eb622f8f"]]);const et=s=>(Ot("data-v-d669692b"),s=s(),$t(),s),kX={class:"addForum"},_X={key:0},bX={key:1},wX={class:"card"},vX=et(()=>g("div",{class:"card-title"},[g("h2",null,"Basic Information")],-1)),CX={class:"form-group"},AX=et(()=>g("label",{for:""},"論壇標題",-1)),yX={class:"form-group"},xX=et(()=>g("label",{for:""},"論壇內容",-1)),EX={class:"form-group"},DX=et(()=>g("label",{for:""},"文章圖片",-1)),IX={for:"imagefile",class:"imagefileFor"},MX={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},SX=et(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),TX=et(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),BX=[SX,TX],NX={key:1},PX=et(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),LX=et(()=>g("span",null,"將文件拖放到此處或單擊以上傳。",-1)),OX=[PX,LX],$X={key:2,class:"isPreview"},zX={class:"form-group"},RX=et(()=>g("label",{for:""},"論壇其他圖片",-1)),jX={for:"imagefiles",class:"imagefileFor"},FX={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},VX=et(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),UX=et(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),HX=[VX,UX],qX={key:1},GX=et(()=>g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-5 h-5 mb-2"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1)),WX=et(()=>g("span",null,"單擊此處以上傳多張圖片。",-1)),KX=[GX,WX],YX={class:"form-group"},QX=et(()=>g("label",{for:""},"預覽圖片",-1)),ZX={class:"prviews"},JX=["src"],XX=["onClick"],eee=et(()=>g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"},null,-1)),tee=[eee],nee={class:"form-group"},oee=et(()=>g("label",{for:""},"相關連結1(可選)",-1)),iee={class:"flex"},see={class:"form-group w-[50%] mr-2"},ree=et(()=>g("label",{for:""},"按鈕名稱",-1)),aee={class:"form-group w-[50%] ml-2"},lee=et(()=>g("label",{for:""},"網址連結",-1)),cee={class:"form-group"},dee=et(()=>g("label",{for:""},"相關連結2(可選)",-1)),uee={class:"flex"},hee={class:"form-group w-[50%] mr-2"},pee=et(()=>g("label",{for:""},"按鈕名稱",-1)),gee={class:"form-group w-[50%] ml-2"},fee=et(()=>g("label",{for:""},"網址連結",-1)),mee={class:"form-group"},kee=et(()=>g("label",{for:""},"相關連結3(可選)",-1)),_ee={class:"flex"},bee={class:"form-group w-[50%] mr-2"},wee=et(()=>g("label",{for:""},"按鈕名稱",-1)),vee={class:"form-group w-[50%] ml-2"},Cee=et(()=>g("label",{for:""},"網址連結",-1)),Aee={class:"form-group"},yee=et(()=>g("label",{for:""},"相關連結4(可選)",-1)),xee={class:"flex"},Eee={class:"form-group w-[50%] mr-2"},Dee=et(()=>g("label",{for:""},"按鈕名稱",-1)),Iee={class:"form-group w-[50%] ml-2"},Mee=et(()=>g("label",{for:""},"網址連結",-1)),See={class:"form-group"},Tee=et(()=>g("label",{for:""},"相關連結5(可選)",-1)),Bee={class:"flex"},Nee={class:"form-group w-[50%] mr-2"},Pee=et(()=>g("label",{for:""},"按鈕名稱",-1)),Lee={class:"form-group w-[50%] ml-2"},Oee=et(()=>g("label",{for:""},"網址連結",-1)),$ee={class:"chkbox-group"},zee={class:"form-group"},Ree=et(()=>g("label",{for:""},"隱藏",-1)),jee={key:0,class:"successMsg"},Fee={class:"form-group btn-group mt-10"},Vee={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Uee=et(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),Hee=et(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),qee=[Uee,Hee],Gee={key:1},Wee={key:1,class:"flex items-center justify-center py-10"},Kee=et(()=>g("svg",{class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1)),Yee=[Kee],Qee={key:2,class:"errorMsg"},Zee={__name:"AddForum",setup(s){const a=Lo(),d=Kt(),p={id:"",title:"",image:"",images:[],content:"",button_1:"",link_1:"",button_2:"",link_2:"",button_3:"",link_3:"",button_4:"",link_4:"",button_5:"",link_5:"",hidden:!1},h=q(""),k=q([]),m=q(!1),v=q(!1),w=q(!1),x=q(!1),A=q(null),E=q(null),y=q(!1),N=q(null),R=q(null),L=q({...p}),V=q(!1);xt(()=>{const Q=a.params.id;if(Q==="create"){m.value=!0,L.value.id=Q,V.value=!0;return}he.dispatch("isExistForum",Q).then(H=>{H.data?he.dispatch("getForum",Q).then(K=>{L.value=K.data,h.value=K.data.image_url,K.data.images_url==""||K.data.images_url==null?k.value=null:k.value=K.data.images_url.split(","),h.value&&(y.value=!0),m.value=!0,L.value.title=L.value.title=="null"?"":L.value.title,L.value.content=L.value.content=="null"?"":L.value.content,L.value.button_1=L.value.button_1=="null"?"":L.value.button_1,L.value.link_1=L.value.link_1=="null"?"":L.value.link_1,L.value.button_2=L.value.button_2=="null"?"":L.value.button_2,L.value.link_2=L.value.link_2=="null"?"":L.value.link_2,L.value.button_3=L.value.button_3=="null"?"":L.value.button_3,L.value.link_3=L.value.link_3=="null"?"":L.value.link_3,L.value.button_4=L.value.button_4=="null"?"":L.value.button_4,L.value.link_4=L.value.link_4=="null"?"":L.value.link_4,L.value.button_5=L.value.button_5=="null"?"":L.value.button_5,L.value.link_5=L.value.link_5=="null"?"":L.value.link_5}).then(()=>{h.value!=""&&(A.value.src=h.value)}):d.push({path:"/notfound"})}).catch(H=>{console.error(H)})});const P=Q=>{if(w.value=!0,Q.target.files&&Q.target.files[0]){L.value.image=Q.target.files[0];const H=new FileReader;H.onload=K=>{A.value.src=K.target.result},H.readAsDataURL(Q.target.files[0])}w.value=!1,y.value=!0},D=Q=>{if(x.value=!0,Q.target.files&&Q.target.files[0]){Array.from(Q.target.files).forEach(H=>{L.value.images.push(H)});for(let H=0;H<Q.target.files.length;H++){const K=new FileReader;K.onload=le=>{const z=document.createElement("img");z.src=le.target.result,E.value.appendChild(z)},K.readAsDataURL(Q.target.files[H])}}x.value=!1},W=Q=>{confirm("確定要刪除此圖片嗎?")&&k.value.splice(Q,1)},O=()=>{v.value=!0,V.value?he.dispatch("createForum",L.value).then(Q=>{(Q.status===200||Q.status===201)&&(R.value="上傳成功！",N.value=null),v.value=!1}).catch(Q=>{v.value=!1,N.value=Q.response.data.errors}):(L.value.ori_images=k.value,he.dispatch("updateForum",L.value).then(Q=>{(Q.status===200||Q.status===201)&&(R.value="更新成功！",N.value=null),v.value=!1}).catch(Q=>{v.value=!1,N.value=Q.response.data.errors}))};return(Q,H)=>(S(),T("div",kX,[V.value?(S(),T("h1",_X,"新增碳材料論壇")):(S(),T("h1",bX,"編輯碳材料論壇")),g("div",wX,[vX,m.value?(S(),T("form",{key:0,action:"",onSubmit:H[16]||(H[16]=en(K=>O(),["prevent"]))},[g("div",CX,[AX,re(g("input",{type:"text","onUpdate:modelValue":H[0]||(H[0]=K=>L.value.title=K)},null,512),[[Te,L.value.title]])]),g("div",yX,[xX,re(g("textarea",{id:"editor1",name:"editor1","onUpdate:modelValue":H[1]||(H[1]=K=>L.value.content=K)},null,512),[[Te,L.value.content]])]),g("div",EX,[DX,g("label",IX,[w.value?(S(),T("svg",MX,BX)):Y("",!0),y.value?(S(),T("div",$X,[g("img",{src:"",ref_key:"previewImg",ref:A,id:"previewImg"},null,512)])):(S(),T("div",NX,OX))]),g("input",{type:"file",id:"imagefile",hidden:"",onChange:H[2]||(H[2]=K=>P(K))},null,32)]),g("div",zX,[RX,g("label",jX,[x.value?(S(),T("svg",FX,HX)):Y("",!0),(S(),T("div",qX,KX))]),g("input",{type:"file",id:"imagefiles",multiple:"",hidden:"",onChange:H[3]||(H[3]=K=>D(K))},null,32)]),g("div",YX,[QX,g("div",{class:"prviews mb-3",ref_key:"prviews",ref:E},null,512),g("div",ZX,[(S(!0),T(Fe,null,it(k.value,(K,le)=>(S(),T("div",{class:"imgbox",key:K},[g("img",{src:K},null,8,JX),(S(),T("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6",onClick:z=>W(le)},tee,8,XX))]))),128))])]),g("div",nee,[oee,g("div",iee,[g("div",see,[ree,re(g("input",{type:"text","onUpdate:modelValue":H[4]||(H[4]=K=>L.value.button_1=K)},null,512),[[Te,L.value.button_1]])]),g("div",aee,[lee,re(g("input",{type:"text","onUpdate:modelValue":H[5]||(H[5]=K=>L.value.link_1=K)},null,512),[[Te,L.value.link_1]])])])]),g("div",cee,[dee,g("div",uee,[g("div",hee,[pee,re(g("input",{type:"text","onUpdate:modelValue":H[6]||(H[6]=K=>L.value.button_2=K)},null,512),[[Te,L.value.button_2]])]),g("div",gee,[fee,re(g("input",{type:"text","onUpdate:modelValue":H[7]||(H[7]=K=>L.value.link_2=K)},null,512),[[Te,L.value.link_2]])])])]),g("div",mee,[kee,g("div",_ee,[g("div",bee,[wee,re(g("input",{type:"text","onUpdate:modelValue":H[8]||(H[8]=K=>L.value.button_3=K)},null,512),[[Te,L.value.button_3]])]),g("div",vee,[Cee,re(g("input",{type:"text","onUpdate:modelValue":H[9]||(H[9]=K=>L.value.link_3=K)},null,512),[[Te,L.value.link_3]])])])]),g("div",Aee,[yee,g("div",xee,[g("div",Eee,[Dee,re(g("input",{type:"text","onUpdate:modelValue":H[10]||(H[10]=K=>L.value.button_4=K)},null,512),[[Te,L.value.button_4]])]),g("div",Iee,[Mee,re(g("input",{type:"text","onUpdate:modelValue":H[11]||(H[11]=K=>L.value.link_4=K)},null,512),[[Te,L.value.link_4]])])])]),g("div",See,[Tee,g("div",Bee,[g("div",Nee,[Pee,re(g("input",{type:"text","onUpdate:modelValue":H[12]||(H[12]=K=>L.value.button_5=K)},null,512),[[Te,L.value.button_5]])]),g("div",Lee,[Oee,re(g("input",{type:"text","onUpdate:modelValue":H[13]||(H[13]=K=>L.value.link_5=K)},null,512),[[Te,L.value.link_5]])])])]),g("div",$ee,[g("div",zee,[Ree,re(g("input",{type:"checkbox","onUpdate:modelValue":H[14]||(H[14]=K=>L.value.hidden=K)},null,512),[[ut,L.value.hidden]])])]),R.value?(S(),T("span",jee,Ae(R.value),1)):Y("",!0),g("div",Fee,[g("button",{type:"submit",class:_e({loading:v.value})},[v.value?(S(),T("svg",Vee,qee)):(S(),T("span",Gee,"保存更改"))],2),g("button",{class:"pre",type:"button",onClick:H[15]||(H[15]=K=>J(d).push({name:"app.forums"}))}," 回列表 ")])],32)):(S(),T("div",Wee,Yee)),N.value?(S(),T("div",Qee,[(S(!0),T(Fe,null,it(N.value,(K,le)=>(S(),T("span",{key:le},Ae(K[0]),1))),128))])):Y("",!0)])]))}},Jee=ft(Zee,[["__scopeId","data-v-d669692b"]]);const Xs=s=>(Ot("data-v-f7302224"),s=s(),$t(),s),Xee={class:"login"},ete=Xs(()=>g("div",{class:"darken"},null,-1)),tte={class:"main"},nte=Xs(()=>g("h1",null,"Carbon 後臺管理系統",-1)),ote={class:"form-group"},ite=Xs(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})])],-1)),ste={class:"form-group"},rte=Xs(()=>g("div",{class:"icon"},[g("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-4 h-4"},[g("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})])],-1)),ate={class:"commit-text"},lte={for:"remember"},cte={key:0,class:"animate-spin h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},dte=Xs(()=>g("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1)),ute=Xs(()=>g("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)),hte=[dte,ute],pte={key:1},gte={key:0,class:"errorMsg"},fte={__name:"Login",setup(s){const a=Kt(),d=q(!1),p=q(""),h={email:"",password:"",remember:!1},k=()=>{d.value=!0,he.dispatch("login",h).then(()=>{d.value=!1,a.push({name:"app.dashboard"})}).catch(({response:m})=>{d.value=!1,console.log(m),p.value=m.data.message})};return(m,v)=>(S(),T("div",Xee,[ete,g("div",tte,[nte,g("form",{onSubmit:v[3]||(v[3]=en(w=>k(),["prevent"]))},[g("div",ote,[ite,re(g("input",{type:"email",name:"email",placeholder:"Email","onUpdate:modelValue":v[0]||(v[0]=w=>h.email=w)},null,512),[[Te,h.email]])]),g("div",ste,[rte,re(g("input",{type:"password",name:"password",placeholder:"Password","onUpdate:modelValue":v[1]||(v[1]=w=>h.password=w)},null,512),[[Te,h.password]])]),g("div",ate,[g("label",lte,[re(g("input",{type:"checkbox",id:"remember","onUpdate:modelValue":v[2]||(v[2]=w=>h.remember=w)},null,512),[[ut,h.remember]]),In(" 記住我 ")])]),g("button",{type:"submit",class:_e({loading:d.value}),disabled:!1},[d.value?(S(),T("svg",cte,hte)):(S(),T("span",pte,"Login"))],2)],32),p.value?(S(),T("div",gte,[g("p",null,Ae(p.value),1)])):Y("",!0)])]))}},mte=ft(fte,[["__scopeId","data-v-f7302224"]]),kte=[{path:"/",name:"app",component:iN,meta:{requiresAuth:!0},children:[{path:"",name:"app.dashboard",component:aN},{path:"articles",name:"app.articles",component:GP},{path:"add-articles/:id",name:"app.add-article",component:P6},{path:"banners",name:"app.banners",component:XL},{path:"add-banner/:id",name:"app.add-banner",component:PO},{path:"chairmans",name:"app.chairmans",component:u$},{path:"add-chairman/:id",name:"app.add-chairman",component:Q$},{path:"organization",name:"app.organization",component:ER},{path:"add-organization/:id",name:"app.add-organization",component:c9},{path:"award-program",name:"app.award-program",component:Wj},{path:"add-award-program/:id",name:"app.add-award-program",component:jF},{path:"letter",name:"app.letters",component:rU},{path:"add-letter/:id",name:"app.add-letter",component:FU},{path:"cst-database",name:"app.cst-database",component:fq},{path:"add-cst-database/:id",name:"app.add-cst-database",component:xG},{path:"cst-seminar",name:"app.cst-seminar",component:nK},{path:"add-cst-seminar/:id",name:"app.add-cst-seminar",component:sY},{path:"overseas",name:"app.overseas",component:OQ},{path:"add-oversea/:id",name:"app.add-oversea",component:RZ},{path:"forums",name:"app.forums",component:mX},{path:"add-forum/:id",name:"app.add-forum",component:Jee}]},{path:"/login",name:"login",component:mte,meta:{requiresGuest:!0}}],fh=T7({history:WT(),routes:kte});fh.beforeEach((s,a,d)=>{s.meta.requiresAuth&&!he.state.user.token?d({name:"login"}):s.meta.requiresGuest&&he.state.user.token?d({name:"app.dashboard"}):d()});const Ee=IT.create({baseURL:"https://carboncst.com/api"});Ee.interceptors.request.use(s=>(s.headers.Authorization=`Bearer ${he.state.user.token}`,s),s=>Promise.reject(s));Ee.interceptors.response.use(s=>s,s=>{throw s.response.status===401&&(he.commit("setToken",null),sessionStorage.removeItem("TOKEN"),fh.push({name:"login"})),s});function _te({commit:s},a){return Ee.post("login",a).then(d=>(s("setUser",d.data.user),s("setToken",d.data.token),a))}function bte({commit:s}){return Ee.post("logout").then(a=>(s("setToken",null),a))}function wte({commit:s}){return Ee.get("/user").then(a=>(s("setUser",a.data),a))}function vte({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setArticles",[!0]),a=a||"/articles",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setArticles",[!1,m.data])}).catch(m=>{s("setArticles",[!1])})}function Cte({commit:s},a){return Ee.get(`/articles/${a}`)}function Ate({commit:s},a){const d=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("title",a.title),p.append("image",a.image),p.append("content",a.content),p.append("category",a.category),p.append("hidden",d),a=p}return Ee.post("/articles",a)}function yte({commit:s},a){return Ee.post("/isExistArticle",{id:a}).then(d=>d)}function xte({commit:s},a){const d=a.id,p=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("id",a.id),h.append("title",a.title),h.append("image",a.image),h.append("content",a.content),h.append("category",a.category),h.append("hidden",p),h.append("_method","PUT"),a=h}else a._method="PUT";return Ee.post(`/articles/${d}`,a)}function Ete({commit:s},a){return Ee.delete(`/articles/${a}`)}function Dte({commit:s},a){return Ee.post("/articleItems",{ids:a})}function Ite({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setBanners",[!0]),a=a||"/banners",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setBanners",[!1,m.data])}).catch(m=>{s("setBanners",[!1])})}function Mte({commit:s},a){return Ee.get(`/banners/${a}`)}function Ste({commit:s},a){const d=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("url",a.url),p.append("image",a.image),p.append("hidden",d),a=p}return Ee.post("/banners",a)}function Tte({commit:s},a){return Ee.post("/isExistBanner",{id:a}).then(d=>d)}function Bte({commit:s},a){const d=a.id,p=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("id",a.id),h.append("url",a.url),h.append("image",a.image),h.append("hidden",p),h.append("_method","PUT"),a=h}else a._method="PUT";return Ee.post(`/banners/${d}`,a)}function Nte({commit:s},a){return Ee.delete(`/banners/${a}`)}function Pte({commit:s},a){return Ee.post("/bannerItems",{ids:a})}function Lte({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setChairmans",[!0]),a=a||"/chairmans",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setChairmans",[!1,m.data])}).catch(m=>{s("setChairmans",[!1])})}function Ote({commit:s},a){return Ee.get(`/chairmans/${a}`)}function $te({commit:s},a){const d=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("name",a.name),p.append("message_date",a.message_date),p.append("content",a.content),p.append("image",a.image),p.append("hidden",d),a=p}return Ee.post("/chairmans",a)}function zte({commit:s},a){return Ee.post("/isExistChairman",{id:a}).then(d=>d)}function Rte({commit:s},a){const d=a.id,p=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("id",a.id),h.append("name",a.name),h.append("message_date",a.message_date),h.append("content",a.content),h.append("image",a.image),h.append("hidden",p),h.append("_method","PUT"),a=h}else a._method="PUT";return Ee.post(`/chairmans/${d}`,a)}function jte({commit:s},a){return Ee.delete(`/chairmans/${a}`)}function Fte({commit:s},a){return Ee.post("/chairmanItems",{ids:a})}function Vte({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setOrganizations",[!0]),a=a||"/organizations",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setOrganizations",[!1,m.data])}).catch(m=>{s("setOrganizations",[!1])})}function Ute({commit:s},a){return Ee.get(`/organizations/${a}`)}function Hte({commit:s},a){console.log(a);const d=a.hidden?1:0;if(a.image instanceof File){const p=new FormData;p.append("title",a.title),p.append("content",a.content),p.append("image",a.image),p.append("hidden",d),a=p}return Ee.post("/organizations",a)}function qte({commit:s},a){return Ee.post("/isExistOrganization",{id:a}).then(d=>d)}function Gte({commit:s},a){const d=a.id,p=a.hidden?1:0;if(a.image instanceof File){const h=new FormData;h.append("id",a.id),h.append("title",a.title),h.append("content",a.content),h.append("image",a.image),h.append("hidden",p),h.append("_method","PUT"),a=h}else a._method="PUT";return Ee.post(`/organizations/${d}`,a)}function Wte({commit:s},a){return Ee.delete(`/organizations/${a}`)}function Kte({commit:s},a){return Ee.post("/organizationItems",{ids:a})}function Yte({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setAwardprograms",[!0]),a=a||"/awardprograms",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setAwardprograms",[!1,m.data])}).catch(m=>{s("setAwardprograms",[!1])})}function Qte({commit:s},a){return Ee.get(`/awardprograms/${a}`)}function Zte({commit:s},a){const d=a.hidden?1:0,p=new FormData;return p.append("name",a.name),p.append("award_name",a.award_name),p.append("year",a.year),p.append("units",a.units),p.append("link",a.link),p.append("file",a.file),p.append("file_name",a.file_name),p.append("hidden",d),a=p,Ee.post("/awardprograms",a)}function Jte({commit:s},a){return Ee.post("/isExistAwardprogram",{id:a}).then(d=>d)}function Xte({commit:s},a){const d=a.id,p=a.hidden?1:0;if(a.file instanceof File){const h=new FormData;h.append("id",a.id),h.append("name",a.name),h.append("award_name",a.award_name),h.append("year",a.year),h.append("link",a.link),h.append("units",a.units),h.append("file",a.file),h.append("file_name",a.file_name),h.append("hidden",p),h.append("_method","PUT"),a=h}else a._method="PUT";return Ee.post(`/awardprograms/${d}`,a)}function ene({commit:s},a){return Ee.delete(`/awardprograms/${a}`)}function tne({commit:s},a){return Ee.post("/awardprogramItems",{ids:a})}function nne({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setLetters",[!0]),a=a||"/letters",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setLetters",[!1,m.data])}).catch(m=>{s("setLetters",[!1])})}function one({commit:s},a){return Ee.get(`/letters/${a}`)}function ine({commit:s},a){const d=a.hidden?1:0;if(a.file instanceof File){const p=new FormData;p.append("name",a.name),p.append("file",a.file),p.append("hidden",d),a=p}return Ee.post("/letters",a)}function sne({commit:s},a){return Ee.post("/isExistLetter",{id:a}).then(d=>d)}function rne({commit:s},a){const d=a.id,p=a.hidden?1:0;if(a.file instanceof File){const h=new FormData;h.append("id",a.id),h.append("name",a.name),h.append("file",a.file),h.append("hidden",p),h.append("_method","PUT"),a=h}else a._method="PUT";return Ee.post(`/letters/${d}`,a)}function ane({commit:s},a){return Ee.delete(`/letters/${a}`)}function lne({commit:s},a){return Ee.post("/letterItems",{ids:a})}function cne({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setCstDatabases",[!0]),a=a||"/cstDatabases",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setCstDatabases",[!1,m.data])}).catch(m=>{s("setCstDatabases",[!1])})}function dne({commit:s},a){return Ee.get(`/cstDatabases/${a}`)}function une({commit:s},a){const d=a.hidden?1:0;if(a.file instanceof File){const p=new FormData;p.append("name",a.name),p.append("units",a.units),p.append("job_title",a.job_title),p.append("field",a.field),p.append("button_1",a.button_1),p.append("link_1",a.link_1),p.append("button_2",a.button_2),p.append("link_2",a.link_2),p.append("button_3",a.button_3),p.append("link_3",a.link_3),p.append("button_4",a.button_4),p.append("link_4",a.link_4),p.append("button_5",a.button_5),p.append("link_5",a.link_5),p.append("hidden",d),a=p}return Ee.post("/cstDatabases",a)}function hne({commit:s},a){return Ee.post("/isExistCstDatabase",{id:a}).then(d=>d)}function pne({commit:s},a){const d=a.id,p=a.hidden?1:0;if(a.file instanceof File){const h=new FormData;h.append("id",a.id),h.append("name",a.name),h.append("units",a.units),h.append("job_title",a.job_title),h.append("field",a.field),h.append("button_1",a.button_1),h.append("link_1",a.link_1),h.append("button_2",a.button_2),h.append("link_2",a.link_2),h.append("button_3",a.button_3),h.append("link_3",a.link_3),h.append("button_4",a.button_4),h.append("link_4",a.link_4),h.append("button_5",a.button_5),h.append("link_5",a.link_5),h.append("hidden",p),h.append("_method","PUT"),a=h}else a._method="PUT";return Ee.post(`/cstDatabases/${d}`,a)}function gne({commit:s},a){return Ee.delete(`/cstDatabases/${a}`)}function fne({commit:s},a){return Ee.post("/cstdatabaseItems",{ids:a})}function mne({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setCstSeminars",[!0]),a=a||"/cstSeminars",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setCstSeminars",[!1,m.data])}).catch(m=>{s("setCstSeminars",[!1])})}function kne({commit:s},a){return Ee.get(`/cstSeminars/${a}`)}function _ne({commit:s},a){const d=a.hidden?1:0;let p=-1;const h=new FormData;return h.append("title",a.title),h.append("link",a.link),h.append("image",a.image),a.images.forEach((k,m)=>{h.append(`images${m}`,k),p++}),h.append("imagesNum",p),h.append("content",a.content),h.append("hidden",d),a=h,Ee.post("/cstSeminars",a)}function bne({commit:s},a){return Ee.post("/isExistCstSeminar",{id:a}).then(d=>d)}function wne({commit:s},a){const d=a.id,p=a.hidden?1:0;let h=-1;const k=new FormData;return k.append("id",a.id),k.append("title",a.title),k.append("link",a.link),a.image instanceof File&&k.append("image",a.image),a.images.forEach((m,v)=>{k.append(`images${v}`,m),h++}),k.append("imagesNum",h),k.append("ori_images",a.ori_images),k.append("content",a.content),k.append("hidden",p),k.append("_method","PUT"),a=k,Ee.post(`/cstSeminars/${d}`,a)}function vne({commit:s},a){return Ee.delete(`/cstSeminars/${a}`)}function Cne({commit:s},a){return Ee.post("/cstseminarItems",{ids:a})}function Ane({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setOverseas",[!0]),a=a||"/overseas",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setOverseas",[!1,m.data])}).catch(m=>{s("setOverseas",[!1])})}function yne({commit:s},a){return Ee.get(`/overseas/${a}`)}function xne({commit:s},a){const d=a.hidden?1:0;let p=-1;const h=new FormData;return h.append("title",a.title),h.append("link",a.link),a.image instanceof File&&h.append("image",a.image),a.images.forEach((k,m)=>{h.append(`images${m}`,k),p++}),h.append("imagesNum",p),h.append("content",a.content),h.append("hidden",d),a=h,Ee.post("/overseas",a)}function Ene({commit:s},a){return Ee.post("/isExistOversea",{id:a}).then(d=>d)}function Dne({commit:s},a){const d=a.id,p=a.hidden?1:0;let h=-1;const k=new FormData;return k.append("id",a.id),k.append("title",a.title),k.append("link",a.link),a.image instanceof File&&k.append("image",a.image),a.images.forEach((m,v)=>{k.append(`images${v}`,m),h++}),k.append("imagesNum",h),k.append("ori_images",a.ori_images),k.append("content",a.content),k.append("hidden",p),k.append("_method","PUT"),a=k,Ee.post(`/overseas/${d}`,a)}function Ine({commit:s},a){return Ee.delete(`/overseas/${a}`)}function Mne({commit:s},a){return Ee.post("/overseaItems",{ids:a})}function Sne({commit:s},{url:a=null,search:d="",perPage:p=10,sort_field:h,sort_direction:k}){return s("setForums",[!0]),a=a||"/forums",Ee.get(a,{params:{search:d,per_page:p,sort_field:h,sort_direction:k}}).then(m=>{s("setForums",[!1,m.data])}).catch(m=>{s("setForums",[!1])})}function Tne({commit:s},a){return Ee.get(`/forums/${a}`)}function Bne({commit:s},a){const d=a.hidden?1:0;let p=-1;const h=new FormData;return h.append("title",a.title),a.image instanceof File&&h.append("image",a.image),a.images.forEach((k,m)=>{h.append(`images${m}`,k),p++}),h.append("imagesNum",p),h.append("content",a.content),h.append("hidden",d),h.append("button_1",a.button_1),h.append("link_1",a.link_1),h.append("button_2",a.button_2),h.append("link_2",a.link_2),h.append("button_3",a.button_3),h.append("link_3",a.link_3),h.append("button_4",a.button_4),h.append("link_4",a.link_4),h.append("button_5",a.button_5),h.append("link_5",a.link_5),a=h,Ee.post("/forums",a)}function Nne({commit:s},a){return Ee.post("/isExistForum",{id:a}).then(d=>d)}function Pne({commit:s},a){const d=a.id,p=a.hidden?1:0;let h=-1;const k=new FormData;return k.append("id",a.id),k.append("title",a.title),a.image instanceof File&&k.append("image",a.image),a.images.forEach((m,v)=>{k.append(`images${v}`,m),h++}),k.append("imagesNum",h),k.append("ori_images",a.ori_images),k.append("content",a.content),k.append("hidden",p),k.append("button_1",a.button_1),k.append("link_1",a.link_1),k.append("button_2",a.button_2),k.append("link_2",a.link_2),k.append("button_3",a.button_3),k.append("link_3",a.link_3),k.append("button_4",a.button_4),k.append("link_4",a.link_4),k.append("button_5",a.button_5),k.append("link_5",a.link_5),k.append("_method","PUT"),a=k,Ee.post(`/forums/${d}`,a)}function Lne({commit:s},a){return Ee.delete(`/forums/${a}`)}function One({commit:s},a){return Ee.post("/forumItems",{ids:a})}const $ne=Object.freeze(Object.defineProperty({__proto__:null,createArticle:Ate,createAwardprogram:Zte,createBanner:Ste,createChairman:$te,createCstDatabase:une,createCstSeminar:_ne,createForum:Bne,createLetter:ine,createOrganization:Hte,createOversea:xne,deleteArticle:Ete,deleteArticleItems:Dte,deleteAwardprogram:ene,deleteAwardprogramItems:tne,deleteBanner:Nte,deleteBannerItems:Pte,deleteChairman:jte,deleteChairmanItems:Fte,deleteCstDatabase:gne,deleteCstDatabaseItems:fne,deleteCstSeminar:vne,deleteCstSeminarItems:Cne,deleteForum:Lne,deleteForumItems:One,deleteLetter:ane,deleteLetterItems:lne,deleteOrganization:Wte,deleteOrganizationItems:Kte,deleteOversea:Ine,deleteOverseaItems:Mne,getArticle:Cte,getArticles:vte,getAwardprogram:Qte,getAwardprograms:Yte,getBanner:Mte,getBanners:Ite,getChairman:Ote,getChairmans:Lte,getCstDatabase:dne,getCstDatabases:cne,getCstSeminar:kne,getCstSeminars:mne,getForum:Tne,getForums:Sne,getLetter:one,getLetters:nne,getOrganization:Ute,getOrganizations:Vte,getOversea:yne,getOverseas:Ane,getUser:wte,isExistArticle:yte,isExistAwardprogram:Jte,isExistBanner:Tte,isExistChairman:zte,isExistCstDatabase:hne,isExistCstSeminar:bne,isExistForum:Nne,isExistLetter:sne,isExistOrganization:qte,isExistOversea:Ene,login:_te,logout:bte,updateArticle:xte,updateAwardprogram:Xte,updateBanner:Bte,updateChairman:Rte,updateCstDatabase:pne,updateCstSeminar:wne,updateForum:Pne,updateLetter:rne,updateOrganization:Gte,updateOversea:Dne},Symbol.toStringTag,{value:"Module"}));function zne(s,a){s.user.data=a}function Rne(s,a){s.user.token=a,a?sessionStorage.setItem("TOKEN",a):sessionStorage.removeItem("TOKEN")}function jne(s,[a,d=null]){d&&(s.articles={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.articles.loading=a}function Fne(s,[a,d=null]){d&&(s.banners={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.banners.loading=a}function Vne(s,[a,d=null]){d&&(s.chairmans={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.chairmans.loading=a}function Une(s,[a,d=null]){d&&(s.organizations={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.organizations.loading=a}function Hne(s,[a,d=null]){d&&(s.awardprograms={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.awardprograms.loading=a}function qne(s,[a,d=null]){d&&(s.letters={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.letters.loading=a}function Gne(s,[a,d=null]){d&&(s.cstdatabases={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.cstdatabases.loading=a}function Wne(s,[a,d=null]){d&&(s.cstseminars={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.cstseminars.loading=a}function Kne(s,[a,d=null]){d&&(s.overseas={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.overseas.loading=a}function Yne(s,[a,d=null]){d&&(s.forums={data:d.data,links:d.meta.links,total:d.meta.total,limit:d.meta.per_page,from:d.meta.from,to:d.meta.to,page:d.meta.current_page}),s.forums.loading=a}const Qne=Object.freeze(Object.defineProperty({__proto__:null,setArticles:jne,setAwardprograms:Hne,setBanners:Fne,setChairmans:Vne,setCstDatabases:Gne,setCstSeminars:Wne,setForums:Yne,setLetters:qne,setOrganizations:Une,setOverseas:Kne,setToken:Rne,setUser:zne},Symbol.toStringTag,{value:"Module"})),Zne=gS({state:{user:{token:sessionStorage.getItem("TOKEN"),data:{}},articles:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},banners:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},chairmans:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},organizations:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},awardprograms:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},letters:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},cstdatabases:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},cstseminars:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},overseas:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null},forums:{loading:!1,data:[],links:[],from:null,to:null,page:1,limit:null,total:null}},getters:{},actions:$ne,mutations:Qne}),he=Zne;var Xa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function zv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Tu={},Jne={get exports(){return Tu},set exports(s){Tu=s}};/*!
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(s,a){(function(d,p){s.exports=p()})(window,function(){return function(d){var p={};function h(k){if(p[k])return p[k].exports;var m=p[k]={i:k,l:!1,exports:{}};return d[k].call(m.exports,m,m.exports,h),m.l=!0,m.exports}return h.m=d,h.c=p,h.d=function(k,m,v){h.o(k,m)||Object.defineProperty(k,m,{enumerable:!0,get:v})},h.r=function(k){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(k,"__esModule",{value:!0})},h.t=function(k,m){if(1&m&&(k=h(k)),8&m||4&m&&typeof k=="object"&&k&&k.__esModule)return k;var v=Object.create(null);if(h.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:k}),2&m&&typeof k!="string")for(var w in k)h.d(v,w,function(x){return k[x]}.bind(null,w));return v},h.n=function(k){var m=k&&k.__esModule?function(){return k.default}:function(){return k};return h.d(m,"a",m),m},h.o=function(k,m){return Object.prototype.hasOwnProperty.call(k,m)},h.p="",h(h.s=2)}([function(d,p,h){(function(k){var m=typeof k=="object"&&k&&k.Object===Object&&k;p.a=m}).call(this,h(1))},function(d,p){var h;h=function(){return this}();try{h=h||new Function("return this")()}catch{typeof window=="object"&&(h=window)}d.exports=h},function(d,p,h){h.r(p);var k=function(ae){var Ie=typeof ae;return ae!=null&&(Ie=="object"||Ie=="function")},m=h(0),v=typeof self=="object"&&self&&self.Object===Object&&self,w=m.a||v||Function("return this")(),x=function(){return w.Date.now()},A=w.Symbol,E=Object.prototype,y=E.hasOwnProperty,N=E.toString,R=A?A.toStringTag:void 0,L=function(ae){var Ie=y.call(ae,R),st=ae[R];try{ae[R]=void 0;var Oe=!0}catch{}var Ut=N.call(ae);return Oe&&(Ie?ae[R]=st:delete ae[R]),Ut},V=Object.prototype.toString,P=function(ae){return V.call(ae)},D=A?A.toStringTag:void 0,W=function(ae){return ae==null?ae===void 0?"[object Undefined]":"[object Null]":D&&D in Object(ae)?L(ae):P(ae)},O=function(ae){return ae!=null&&typeof ae=="object"},Q=function(ae){return typeof ae=="symbol"||O(ae)&&W(ae)=="[object Symbol]"},H=/^\s+|\s+$/g,K=/^[-+]0x[0-9a-f]+$/i,le=/^0b[01]+$/i,z=/^0o[0-7]+$/i,be=parseInt,ze=function(ae){if(typeof ae=="number")return ae;if(Q(ae))return NaN;if(k(ae)){var Ie=typeof ae.valueOf=="function"?ae.valueOf():ae;ae=k(Ie)?Ie+"":Ie}if(typeof ae!="string")return ae===0?ae:+ae;ae=ae.replace(H,"");var st=le.test(ae);return st||z.test(ae)?be(ae.slice(2),st?2:8):K.test(ae)?NaN:+ae},me=Math.max,Ne=Math.min,mt=function(ae,Ie,st){var Oe,Ut,Lt,An,an,oe,ye=0,ve=!1,ke=!1,Ue=!0;if(typeof ae!="function")throw new TypeError("Expected a function");function rt(ne){var ue=Oe,Ce=Ut;return Oe=Ut=void 0,ye=ne,An=ae.apply(Ce,ue)}function je(ne){return ye=ne,an=setTimeout(U,Ie),ve?rt(ne):An}function j(ne){var ue=ne-oe;return oe===void 0||ue>=Ie||ue<0||ke&&ne-ye>=Lt}function U(){var ne=x();if(j(ne))return ee(ne);an=setTimeout(U,function(ue){var Ce=Ie-(ue-oe);return ke?Ne(Ce,Lt-(ue-ye)):Ce}(ne))}function ee(ne){return an=void 0,Ue&&Oe?rt(ne):(Oe=Ut=void 0,An)}function Z(){var ne=x(),ue=j(ne);if(Oe=arguments,Ut=this,oe=ne,ue){if(an===void 0)return je(oe);if(ke)return clearTimeout(an),an=setTimeout(U,Ie),rt(oe)}return an===void 0&&(an=setTimeout(U,Ie)),An}return Ie=ze(Ie)||0,k(st)&&(ve=!!st.leading,Lt=(ke="maxWait"in st)?me(ze(st.maxWait)||0,Ie):Lt,Ue="trailing"in st?!!st.trailing:Ue),Z.cancel=function(){an!==void 0&&clearTimeout(an),ye=0,Oe=oe=Ut=an=void 0},Z.flush=function(){return an===void 0?An:ee(x())},Z},Vt={name:"ckeditor",render(ae){return ae(this.tagName)},props:{editor:{type:Function,default:null},value:{type:String,default:""},config:{type:Object,default:()=>({})},tagName:{type:String,default:"div"},disabled:{type:Boolean,default:!1}},data:()=>({$_instance:null,$_lastEditorData:{type:String,default:""}}),mounted(){const ae=Object.assign({},this.config);this.value&&(ae.initialData=this.value),this.editor.create(this.$el,ae).then(Ie=>{this.$_instance=Ie,Ie.isReadOnly=this.disabled,this.$_setUpEditorEvents(),this.$emit("ready",Ie)}).catch(Ie=>{console.error(Ie)})},beforeDestroy(){this.$_instance&&(this.$_instance.destroy(),this.$_instance=null),this.$emit("destroy",this.$_instance)},watch:{value(ae,Ie){ae!==Ie&&ae!==this.$_lastEditorData&&this.$_instance.setData(ae)},disabled(ae){this.$_instance.isReadOnly=ae}},methods:{$_setUpEditorEvents(){const ae=this.$_instance,Ie=mt(st=>{const Oe=this.$_lastEditorData=ae.getData();this.$emit("input",Oe,st,ae)},300,{leading:!0});ae.model.document.on("change:data",Ie),ae.editing.view.document.on("focus",st=>{this.$emit("focus",st,ae)}),ae.editing.view.document.on("blur",st=>{this.$emit("blur",st,ae)})}}};const Ye={install(ae){ae.component("ckeditor",Vt)},component:Vt};p.default=Ye}]).default})})(Jne);const Xne=zv(Tu);var kl={},eoe={get exports(){return kl},set exports(s){kl=s}};(function(s,a){(function(d){const p=d.en=d.en||{};p.dictionary=Object.assign(p.dictionary||{},{"%0 of %1":"%0 of %1",Aquamarine:"Aquamarine",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Break text":"Break text","Bulleted List":"Bulleted List",Cancel:"Cancel","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Downloadable:"Downloadable","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Full size image":"Full size image",Green:"Green",Grey:"Grey","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Italic:"Italic","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link URL":"Link URL","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","Numbered List":"Numbered List","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Rich Text Editor":"Rich Text Editor","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically","Table toolbar":"Table toolbar","Text alternative":"Text alternative","The URL must not be empty.":"The URL must not be empty.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on",Turquoise:"Turquoise",Undo:"Undo",Unlink:"Unlink","Upload failed":"Upload failed","Upload in progress":"Upload in progress",White:"White","Widget toolbar":"Widget toolbar","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,p){s.exports=p()}(self,()=>(()=>{var d={3062:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},903:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CCzBF,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CA2DF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3143:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4717:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},9315:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const N=y},8733:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3508:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image-inline.ck-widget_selected,.ck.ck-editor__editable .image.ck-widget_selected{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBAuBD,CAbC,uBAEC,aAAc,CAGd,aAAc,CAGd,cAAe,CAGf,cACD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAWA,2GACC,SAUD,CAHC,qEACC,YACD,CAOA,0FACC,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},2640:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},5083:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4036:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3773:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3689:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},1905:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},9773:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},2347:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},7754:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4564:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4652:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},7442:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},9292:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},1613:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
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

`],sourceRoot:""}]);const N=y},6306:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3881:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-color-table-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-table-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,6DACD,CAKE,8QAGC,wDAAyD,CAKzD,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},6945:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4906:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;justify-content:left;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAOA,6BAMC,kBAAmB,CADnB,mBAAoB,CAEpB,oBAAqB,CAHrB,iBAAkB,CCFlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDkBD,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEjBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},5332:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},6781:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-table__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,4DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},5485:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eH8GD,CA5BA,qFG9EE,qCH0GF,CA5BA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAmBD,CAfC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3949:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},7686:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},7339:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},9688:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,mDACD,CAIA,gEACC,gDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},8847:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BACD,CCNA,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAQD,CAHC,4CACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},6574:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4879:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3662:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},2577:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD8GD,CAzGA,2FCDE,qCD0GF,CAtGC,mEACC,UAmCD,CAjCC,gFACC,KA+BD,CAhCA,0FAIE,MA4BF,CAhCA,0FAQE,OAwBF,CAhCA,gFAiBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAP9C,mBAAoB,CAYpB,sBAAuB,CARvB,6DAA+D,CAH/D,oBAAqB,CAgBrB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},1046:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base));text-align:left;width:100%}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEfD,YCEC,eDGD,CALA,+DCME,qCDDF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAIC,eAAgB,CAHhB,gBAAiB,CAQjB,iIAEiE,CARjE,eAAgB,CADhB,UAwCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},8793:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4650:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},7676:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},5868:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},6764:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},9695:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},5542:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDoGD,CAvGA,qECOE,qCDgGF,CAvGA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAmGD,CAhGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAjGF,qCAqGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3332:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDPnC,mBAAoB,CAEpB,qCACD,CCMC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAbD,gCAgBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4793:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAwD,CCvGxD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJuGD,CIjGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},3488:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},8506:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},4921:(m,v,w)=>{w.d(v,{Z:()=>N});var x=w(1799),A=w.n(x),E=w(2609),y=w.n(E)()(A());y.push([m.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
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
`],sourceRoot:""}]);const N=y},2609:m=>{m.exports=function(v){var w=[];return w.toString=function(){return this.map(function(x){var A=v(x);return x[2]?"@media ".concat(x[2]," {").concat(A,"}"):A}).join("")},w.i=function(x,A,E){typeof x=="string"&&(x=[[null,x,""]]);var y={};if(E)for(var N=0;N<this.length;N++){var R=this[N][0];R!=null&&(y[R]=!0)}for(var L=0;L<x.length;L++){var V=[].concat(x[L]);E&&y[V[0]]||(A&&(V[2]?V[2]="".concat(A," and ").concat(V[2]):V[2]=A),w.push(V))}},w}},1799:m=>{function v(x,A){return function(E){if(Array.isArray(E))return E}(x)||function(E,y){var N=E&&(typeof Symbol<"u"&&E[Symbol.iterator]||E["@@iterator"]);if(N!=null){var R,L,V=[],P=!0,D=!1;try{for(N=N.call(E);!(P=(R=N.next()).done)&&(V.push(R.value),!y||V.length!==y);P=!0);}catch(W){D=!0,L=W}finally{try{P||N.return==null||N.return()}finally{if(D)throw L}}return V}}(x,A)||function(E,y){if(E){if(typeof E=="string")return w(E,y);var N=Object.prototype.toString.call(E).slice(8,-1);if(N==="Object"&&E.constructor&&(N=E.constructor.name),N==="Map"||N==="Set")return Array.from(E);if(N==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(N))return w(E,y)}}(x,A)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function w(x,A){(A==null||A>x.length)&&(A=x.length);for(var E=0,y=new Array(A);E<A;E++)y[E]=x[E];return y}m.exports=function(x){var A=v(x,4),E=A[1],y=A[3];if(!y)return E;if(typeof btoa=="function"){var N=btoa(unescape(encodeURIComponent(JSON.stringify(y)))),R="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(N),L="/*# ".concat(R," */"),V=y.sources.map(function(P){return"/*# sourceURL=".concat(y.sourceRoot||"").concat(P," */")});return[E].concat(V).concat([L]).join(`
`)}return[E].join(`
`)}},6062:(m,v,w)=>{var x,A=function(){return x===void 0&&(x=!!(window&&document&&document.all&&!window.atob)),x},E=function(){var K={};return function(le){if(K[le]===void 0){var z=document.querySelector(le);if(window.HTMLIFrameElement&&z instanceof window.HTMLIFrameElement)try{z=z.contentDocument.head}catch{z=null}K[le]=z}return K[le]}}(),y=[];function N(K){for(var le=-1,z=0;z<y.length;z++)if(y[z].identifier===K){le=z;break}return le}function R(K,le){for(var z={},be=[],ze=0;ze<K.length;ze++){var me=K[ze],Ne=le.base?me[0]+le.base:me[0],mt=z[Ne]||0,Vt="".concat(Ne," ").concat(mt);z[Ne]=mt+1;var Ye=N(Vt),ae={css:me[1],media:me[2],sourceMap:me[3]};Ye!==-1?(y[Ye].references++,y[Ye].updater(ae)):y.push({identifier:Vt,updater:H(ae,le),references:1}),be.push(Vt)}return be}function L(K){var le=document.createElement("style"),z=K.attributes||{};if(z.nonce===void 0){var be=w.nc;be&&(z.nonce=be)}if(Object.keys(z).forEach(function(me){le.setAttribute(me,z[me])}),typeof K.insert=="function")K.insert(le);else{var ze=E(K.insert||"head");if(!ze)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");ze.appendChild(le)}return le}var V,P=(V=[],function(K,le){return V[K]=le,V.filter(Boolean).join(`
`)});function D(K,le,z,be){var ze=z?"":be.media?"@media ".concat(be.media," {").concat(be.css,"}"):be.css;if(K.styleSheet)K.styleSheet.cssText=P(le,ze);else{var me=document.createTextNode(ze),Ne=K.childNodes;Ne[le]&&K.removeChild(Ne[le]),Ne.length?K.insertBefore(me,Ne[le]):K.appendChild(me)}}function W(K,le,z){var be=z.css,ze=z.media,me=z.sourceMap;if(ze?K.setAttribute("media",ze):K.removeAttribute("media"),me&&typeof btoa<"u"&&(be+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(me))))," */")),K.styleSheet)K.styleSheet.cssText=be;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(be))}}var O=null,Q=0;function H(K,le){var z,be,ze;if(le.singleton){var me=Q++;z=O||(O=L(le)),be=D.bind(null,z,me,!1),ze=D.bind(null,z,me,!0)}else z=L(le),be=W.bind(null,z,le),ze=function(){(function(Ne){if(Ne.parentNode===null)return!1;Ne.parentNode.removeChild(Ne)})(z)};return be(K),function(Ne){if(Ne){if(Ne.css===K.css&&Ne.media===K.media&&Ne.sourceMap===K.sourceMap)return;be(K=Ne)}else ze()}}m.exports=function(K,le){(le=le||{}).singleton||typeof le.singleton=="boolean"||(le.singleton=A());var z=R(K=K||[],le);return function(be){if(be=be||[],Object.prototype.toString.call(be)==="[object Array]"){for(var ze=0;ze<z.length;ze++){var me=N(z[ze]);y[me].references--}for(var Ne=R(be,le),mt=0;mt<z.length;mt++){var Vt=N(z[mt]);y[Vt].references===0&&(y[Vt].updater(),y.splice(Vt,1))}z=Ne}}}}},p={};function h(m){var v=p[m];if(v!==void 0)return v.exports;var w=p[m]={id:m,exports:{}};return d[m](w,w.exports,h),w.exports}h.n=m=>{var v=m&&m.__esModule?()=>m.default:()=>m;return h.d(v,{a:v}),v},h.d=(m,v)=>{for(var w in v)h.o(v,w)&&!h.o(m,w)&&Object.defineProperty(m,w,{enumerable:!0,get:v[w]})},h.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),h.o=(m,v)=>Object.prototype.hasOwnProperty.call(m,v),h.nc=void 0;var k={};return(()=>{function m({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!e())return;const l=typeof r.composedPath=="function"?r.composedPath():[],c=typeof n=="function"?n():n;for(const u of c)if(u.contains(r.target)||l.includes(u))return;t()})}function v(i){const e=i;e.set("_isCssTransitionsDisabled",!1),e.disableCssTransitions=()=>{e._isCssTransitionsDisabled=!0},e.enableCssTransitions=()=>{e._isCssTransitionsDisabled=!1},e.extendTemplate({attributes:{class:[e.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}function w({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}h.d(k,{default:()=>jd});const x=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}(),A={isMac:y(x),isWindows:function(i){return i.indexOf("windows")>-1}(x),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(x),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(x),isiOS:function(i){return!!i.match(/iphone|ipad/i)||y(i)&&navigator.maxTouchPoints>0}(x),isAndroid:function(i){return i.indexOf("android")>-1}(x),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(x),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}},E=A;function y(i){return i.indexOf("macintosh")>-1}function N(i,e,t,n){t=t||function(u,f){return u===f};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(e)?e:Array.prototype.slice.call(e),l=function(u,f,_){const b=R(u,f,_);if(b===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const C=L(u,b),I=L(f,b),M=R(C,I,_),B=u.length-M,$=f.length-M;return{firstIndex:b,lastIndexOld:B,lastIndexNew:$}}(o,r,t);return n?function(u,f){const{firstIndex:_,lastIndexOld:b,lastIndexNew:C}=u;if(_===-1)return Array(f).fill("equal");let I=[];return _>0&&(I=I.concat(Array(_).fill("equal"))),C-_>0&&(I=I.concat(Array(C-_).fill("insert"))),b-_>0&&(I=I.concat(Array(b-_).fill("delete"))),C<f&&(I=I.concat(Array(f-C).fill("equal"))),I}(l,r.length):function(u,f){const _=[],{firstIndex:b,lastIndexOld:C,lastIndexNew:I}=f;return I-b>0&&_.push({index:b,type:"insert",values:u.slice(b,I)}),C-b>0&&_.push({index:b+(I-b),type:"delete",howMany:C-b}),_}(r,l)}function R(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function L(i,e){return i.slice(e).reverse()}function V(i,e,t){t=t||function(B,$){return B===$};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return V.fastDiff(i,e,t,!0);let r,l;if(o<n){const B=i;i=e,e=B,r="delete",l="insert"}else r="insert",l="delete";const c=i.length,u=e.length,f=u-c,_={},b={};function C(B){const $=(b[B-1]!==void 0?b[B-1]:-1)+1,F=b[B+1]!==void 0?b[B+1]:-1,G=$>F?-1:1;_[B+G]&&(_[B]=_[B+G].slice(0)),_[B]||(_[B]=[]),_[B].push($>F?r:l);let te=Math.max($,F),fe=te-B;for(;fe<c&&te<u&&t(i[fe],e[te]);)fe++,te++,_[B].push("equal");return te}let I,M=0;do{for(I=-M;I<f;I++)b[I]=C(I);for(I=f+M;I>f;I--)b[I]=C(I);b[f]=C(f),M++}while(b[f]!==u);return _[f].slice(1)}function P(i,...e){e.forEach(t=>{const n=Object.getOwnPropertyNames(t),o=Object.getOwnPropertySymbols(t);n.concat(o).forEach(r=>{if(r in i.prototype||typeof t=="function"&&(r=="length"||r=="name"||r=="prototype"))return;const l=Object.getOwnPropertyDescriptor(t,r);l.enumerable=!1,Object.defineProperty(i.prototype,r,l)})})}V.fastDiff=N;const D=function(){return function i(){i.called=!0}};class W{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=D(),this.off=D()}}const O=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function Q(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+O[i>>0&255]+O[i>>8&255]+O[i>>16&255]+O[i>>24&255]+O[e>>0&255]+O[e>>8&255]+O[e>>16&255]+O[e>>24&255]+O[t>>0&255]+O[t>>8&255]+O[t>>16&255]+O[t>>24&255]+O[n>>0&255]+O[n>>8&255]+O[n>>16&255]+O[n>>24&255]}const H={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function K(i,e){const t=H.get(e.priority);for(let n=0;n<i.length;n++)if(H.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}const le="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class z extends Error{constructor(e,t,n){super(function(o,r){const l=new WeakSet,c=(_,b)=>{if(typeof b=="object"&&b!==null){if(l.has(b))return`[object ${b.constructor.name}]`;l.add(b)}return b},u=r?` ${JSON.stringify(r,c)}`:"",f=me(o);return o+u+f}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new z(e.message,t);throw n.stack=e.stack,n}}function be(i,e){console.warn(...Ne(i,e))}function ze(i,e){console.error(...Ne(i,e))}function me(i){return`
Read more: ${le}#error-${i}`}function Ne(i,e){const t=me(i);return e?[i,e,t]:[i,t]}const mt="36.0.1",Vt=typeof window=="object"?window:h.g;if(Vt.CKEDITOR_VERSION)throw new z("ckeditor-duplicated-modules",null);Vt.CKEDITOR_VERSION=mt;const Ye=Symbol("listeningTo"),ae=Symbol("emitterId"),Ie=Symbol("delegations"),st=Oe(Object);function Oe(i){return i?class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let o=!1;this.listenTo(this,e,(r,...l)=>{o||(o=!0,r.off(),t.call(this,r,...l))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,o={}){let r,l;this[Ye]||(this[Ye]={});const c=this[Ye];Lt(e)||Ut(e);const u=Lt(e);(r=c[u])||(r=c[u]={emitter:e,callbacks:{}}),(l=r.callbacks[t])||(l=r.callbacks[t]=[]),l.push(n),function(f,_,b,C,I){_._addEventListener?_._addEventListener(b,C,I):f._addEventListener.call(_,b,C,I)}(this,e,t,n,o)}stopListening(e,t,n){const o=this[Ye];let r=e&&Lt(e);const l=o&&r?o[r]:void 0,c=l&&t?l.callbacks[t]:void 0;if(!(!o||e&&!l||t&&!c))if(n)ve(this,e,t,n),c.indexOf(n)!==-1&&(c.length===1?delete l.callbacks[t]:ve(this,e,t,n));else if(c){for(;n=c.pop();)ve(this,e,t,n);delete l.callbacks[t]}else if(l){for(t in l.callbacks)this.stopListening(e,t);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[Ye]}}fire(e,...t){try{const n=e instanceof W?e:new W(this,e),o=n.name;let r=oe(this,o);if(n.path.push(this),r){const c=[n,...t];r=Array.from(r);for(let u=0;u<r.length&&(r[u].callback.apply(this,c),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[u].callback)),!n.stop.called);u++);}const l=this[Ie];if(l){const c=l.get(o),u=l.get("*");c&&ye(c,n,t),u&&ye(u,n,t)}return n.return}catch(n){z.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[Ie]||(this[Ie]=new Map),e.forEach(o=>{const r=this[Ie].get(o);r?r.set(t,n):this[Ie].set(o,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[Ie])if(e)if(t){const n=this[Ie].get(e);n&&n.delete(t)}else this[Ie].delete(e);else this[Ie].clear()}_addEventListener(e,t,n){(function(l,c){const u=An(l);if(u[c])return;let f=c,_=null;const b=[];for(;f!==""&&!u[f];)u[f]={callbacks:[],childEvents:[]},b.push(u[f]),_&&u[f].childEvents.push(_),_=f,f=f.substr(0,f.lastIndexOf(":"));if(f!==""){for(const C of b)C.callbacks=u[f].callbacks.slice();u[f].childEvents.push(_)}})(this,e);const o=an(this,e),r={callback:t,priority:H.get(n.priority)};for(const l of o)K(l,r)}_removeEventListener(e,t){const n=an(this,e);for(const o of n)for(let r=0;r<o.length;r++)o[r].callback==t&&(o.splice(r,1),r--)}}:st}function Ut(i,e){i[ae]||(i[ae]=e||Q())}function Lt(i){return i[ae]}function An(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function an(i,e){const t=An(i)[e];if(!t)return[];let n=[t.callbacks];for(let o=0;o<t.childEvents.length;o++){const r=an(i,t.childEvents[o]);n=n.concat(r)}return n}function oe(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?oe(i,e.substr(0,e.lastIndexOf(":"))):null}function ye(i,e,t){for(let[n,o]of i){o?typeof o=="function"&&(o=o(e.name)):o=e.name;const r=new W(e.source,o);r.path=[...e.path],n.fire(r,...t)}}function ve(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Oe[i]=st.prototype[i]});const ke=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},Ue=Symbol("observableProperties"),rt=Symbol("boundObservables"),je=Symbol("boundProperties"),j=Symbol("decoratedMethods"),U=Symbol("decoratedOriginal"),ee=Z(Oe());function Z(i){return i?class extends i{set(e,t){if(ke(e))return void Object.keys(e).forEach(o=>{this.set(o,e[o])},this);ne(this);const n=this[Ue];if(e in this&&!n.has(e))throw new z("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(o){const r=n.get(e);let l=this.fire(`set:${e}`,e,o,r);l===void 0&&(l=o),r===l&&n.has(e)||(n.set(e,l),this.fire(`change:${e}`,e,l,r))}}),this[e]=t}bind(...e){if(!e.length||!pe(e))throw new z("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new z("observable-bind-duplicate-properties",this);ne(this);const t=this[je];e.forEach(o=>{if(t.has(o))throw new z("observable-bind-rebind",this)});const n=new Map;return e.forEach(o=>{const r={property:o,to:[]};t.set(o,r),n.set(o,r)}),{to:ue,toMany:Ce,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[Ue])return;const t=this[je],n=this[rt];if(e.length){if(!pe(e))throw new z("observable-unbind-wrong-properties",this);e.forEach(o=>{const r=t.get(o);r&&(r.to.forEach(([l,c])=>{const u=n.get(l),f=u[c];f.delete(r),f.size||delete u[c],Object.keys(u).length||(n.delete(l),this.stopListening(l,"change"))}),t.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),t.clear()}decorate(e){ne(this);const t=this[e];if(!t)throw new z("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,o)=>{n.return=t.apply(this,o)}),this[e]=function(...n){return this.fire(e,n)},this[e][U]=t,this[j]||(this[j]=[]),this[j].push(e)}stopListening(e,t,n){if(!e&&this[j]){for(const o of this[j])this[o]=this[o][U];delete this[j]}super.stopListening(e,t,n)}}:ee}function ne(i){i[Ue]||(Object.defineProperty(i,Ue,{value:new Map}),Object.defineProperty(i,rt,{value:new Map}),Object.defineProperty(i,je,{value:new Map}))}function ue(...i){const e=function(...r){if(!r.length)throw new z("observable-bind-to-parse-error",null);const l={to:[]};let c;return typeof r[r.length-1]=="function"&&(l.callback=r.pop()),r.forEach(u=>{if(typeof u=="string")c.properties.push(u);else{if(typeof u!="object")throw new z("observable-bind-to-parse-error",null);c={observable:u,properties:[]},l.to.push(c)}}),l}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new z("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new z("observable-bind-to-extra-callback",this);var o;e.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new z("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),o=this._observable,this._to.forEach(r=>{const l=o[rt];let c;l.get(r.observable)||o.listenTo(r.observable,"change",(u,f)=>{c=l.get(r.observable)[f],c&&c.forEach(_=>{we(o,_.property)})})}),function(r){let l;r._bindings.forEach((c,u)=>{r._to.forEach(f=>{l=f.properties[c.callback?0:r._bindProperties.indexOf(u)],c.to.push([f.observable,l]),function(_,b,C,I){const M=_[rt],B=M.get(C),$=B||{};$[I]||($[I]=new Set),$[I].add(b),B||M.set(C,$)}(r._observable,c,f.observable,l)})})}(this),this._bindProperties.forEach(r=>{we(this._observable,r)})}function Ce(i,e,t){if(this._bindings.size>1)throw new z("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(l=>[l,o]);return Array.prototype.concat.apply([],r)}(i,e),t)}function pe(i){return i.every(e=>typeof e=="string")}function we(i,e){const t=i[je].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(o=>o[0][o[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Z[i]=ee.prototype[i]});class ce{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function Se(i){let e=0;for(const t of i)e++;return e}function xe(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function De(i){return!(!i||!i[Symbol.iterator])}const $e=typeof Xa=="object"&&Xa&&Xa.Object===Object&&Xa;var qe=typeof self=="object"&&self&&self.Object===Object&&self;const Ge=$e||qe||Function("return this")(),He=Ge.Symbol;var jt=Object.prototype,On=jt.hasOwnProperty,Ko=jt.toString,Yo=He?He.toStringTag:void 0;const bi=function(i){var e=On.call(i,Yo),t=i[Yo];try{i[Yo]=void 0;var n=!0}catch{}var o=Ko.call(i);return n&&(e?i[Yo]=t:delete i[Yo]),o};var Jr=Object.prototype.toString;const yn=function(i){return Jr.call(i)};var Hn="[object Null]",Xr="[object Undefined]",mh=He?He.toStringTag:void 0;const Qo=function(i){return i==null?i===void 0?Xr:Hn:mh&&mh in Object(i)?bi(i):yn(i)},xn=Array.isArray,qn=function(i){return i!=null&&typeof i=="object"};var jv="[object String]";const kh=function(i){return typeof i=="string"||!xn(i)&&qn(i)&&Qo(i)==jv};function _h(i,e,t={},n=[]){const o=t&&t.xmlns,r=o?i.createElementNS(o,e):i.createElement(e);for(const l in t)r.setAttribute(l,t[l]);!kh(n)&&De(n)||(n=[n]);for(let l of n)kh(l)&&(l=i.createTextNode(l)),r.appendChild(l);return r}const bh=function(i,e){return function(t){return i(e(t))}},Vl=bh(Object.getPrototypeOf,Object);var Fv="[object Object]",Vv=Function.prototype,Uv=Object.prototype,wh=Vv.toString,Hv=Uv.hasOwnProperty,qv=wh.call(Object);const Sn=function(i){if(!qn(i)||Qo(i)!=Fv)return!1;var e=Vl(i);if(e===null)return!0;var t=Hv.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&wh.call(t)==qv},Gv=function(){this.__data__=[],this.size=0},er=function(i,e){return i===e||i!=i&&e!=e},ea=function(i,e){for(var t=i.length;t--;)if(er(i[t][0],e))return t;return-1};var Wv=Array.prototype.splice;const Kv=function(i){var e=this.__data__,t=ea(e,i);return!(t<0)&&(t==e.length-1?e.pop():Wv.call(e,t,1),--this.size,!0)},Yv=function(i){var e=this.__data__,t=ea(e,i);return t<0?void 0:e[t][1]},Qv=function(i){return ea(this.__data__,i)>-1},Zv=function(i,e){var t=this.__data__,n=ea(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function Xi(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Xi.prototype.clear=Gv,Xi.prototype.delete=Kv,Xi.prototype.get=Yv,Xi.prototype.has=Qv,Xi.prototype.set=Zv;const ta=Xi,Jv=function(){this.__data__=new ta,this.size=0},Xv=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},e1=function(i){return this.__data__.get(i)},t1=function(i){return this.__data__.has(i)};var n1="[object AsyncFunction]",o1="[object Function]",i1="[object GeneratorFunction]",s1="[object Proxy]";const wi=function(i){if(!ke(i))return!1;var e=Qo(i);return e==o1||e==i1||e==n1||e==s1},Ul=Ge["__core-js_shared__"];var vh=function(){var i=/[^.]+$/.exec(Ul&&Ul.keys&&Ul.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const r1=function(i){return!!vh&&vh in i};var a1=Function.prototype.toString;const vi=function(i){if(i!=null){try{return a1.call(i)}catch{}try{return i+""}catch{}}return""};var l1=/^\[object .+?Constructor\]$/,c1=Function.prototype,d1=Object.prototype,u1=c1.toString,h1=d1.hasOwnProperty,p1=RegExp("^"+u1.call(h1).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const g1=function(i){return!(!ke(i)||r1(i))&&(wi(i)?p1:l1).test(vi(i))},f1=function(i,e){return i==null?void 0:i[e]},Ci=function(i,e){var t=f1(i,e);return g1(t)?t:void 0},tr=Ci(Ge,"Map"),nr=Ci(Object,"create"),m1=function(){this.__data__=nr?nr(null):{},this.size=0},k1=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var _1="__lodash_hash_undefined__",b1=Object.prototype.hasOwnProperty;const w1=function(i){var e=this.__data__;if(nr){var t=e[i];return t===_1?void 0:t}return b1.call(e,i)?e[i]:void 0};var v1=Object.prototype.hasOwnProperty;const C1=function(i){var e=this.__data__;return nr?e[i]!==void 0:v1.call(e,i)};var A1="__lodash_hash_undefined__";const y1=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=nr&&e===void 0?A1:e,this};function es(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}es.prototype.clear=m1,es.prototype.delete=k1,es.prototype.get=w1,es.prototype.has=C1,es.prototype.set=y1;const Ch=es,x1=function(){this.size=0,this.__data__={hash:new Ch,map:new(tr||ta),string:new Ch}},E1=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},na=function(i,e){var t=i.__data__;return E1(e)?t[typeof e=="string"?"string":"hash"]:t.map},D1=function(i){var e=na(this,i).delete(i);return this.size-=e?1:0,e},I1=function(i){return na(this,i).get(i)},M1=function(i){return na(this,i).has(i)},S1=function(i,e){var t=na(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function ts(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}ts.prototype.clear=x1,ts.prototype.delete=D1,ts.prototype.get=I1,ts.prototype.has=M1,ts.prototype.set=S1;const oa=ts;var T1=200;const B1=function(i,e){var t=this.__data__;if(t instanceof ta){var n=t.__data__;if(!tr||n.length<T1-1)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new oa(n)}return t.set(i,e),this.size=t.size,this};function ns(i){var e=this.__data__=new ta(i);this.size=e.size}ns.prototype.clear=Jv,ns.prototype.delete=Xv,ns.prototype.get=e1,ns.prototype.has=t1,ns.prototype.set=B1;const or=ns,N1=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},ia=function(){try{var i=Ci(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Hl=function(i,e,t){e=="__proto__"&&ia?ia(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var P1=Object.prototype.hasOwnProperty;const ql=function(i,e,t){var n=i[e];P1.call(i,e)&&er(n,t)&&(t!==void 0||e in i)||Hl(i,e,t)},os=function(i,e,t,n){var o=!t;t||(t={});for(var r=-1,l=e.length;++r<l;){var c=e[r],u=n?n(t[c],i[c],c,t,i):void 0;u===void 0&&(u=i[c]),o?Hl(t,c,u):ql(t,c,u)}return t},L1=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n};var O1="[object Arguments]";const Ah=function(i){return qn(i)&&Qo(i)==O1};var yh=Object.prototype,$1=yh.hasOwnProperty,z1=yh.propertyIsEnumerable;const Gl=Ah(function(){return arguments}())?Ah:function(i){return qn(i)&&$1.call(i,"callee")&&!z1.call(i,"callee")},R1=function(){return!1};var xh=a&&!a.nodeType&&a,Eh=xh&&!0&&s&&!s.nodeType&&s,Dh=Eh&&Eh.exports===xh?Ge.Buffer:void 0;const ir=(Dh?Dh.isBuffer:void 0)||R1;var j1=9007199254740991,F1=/^(?:0|[1-9]\d*)$/;const Wl=function(i,e){var t=typeof i;return!!(e=e??j1)&&(t=="number"||t!="symbol"&&F1.test(i))&&i>-1&&i%1==0&&i<e};var V1=9007199254740991;const Ih=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=V1};var Dt={};Dt["[object Float32Array]"]=Dt["[object Float64Array]"]=Dt["[object Int8Array]"]=Dt["[object Int16Array]"]=Dt["[object Int32Array]"]=Dt["[object Uint8Array]"]=Dt["[object Uint8ClampedArray]"]=Dt["[object Uint16Array]"]=Dt["[object Uint32Array]"]=!0,Dt["[object Arguments]"]=Dt["[object Array]"]=Dt["[object ArrayBuffer]"]=Dt["[object Boolean]"]=Dt["[object DataView]"]=Dt["[object Date]"]=Dt["[object Error]"]=Dt["[object Function]"]=Dt["[object Map]"]=Dt["[object Number]"]=Dt["[object Object]"]=Dt["[object RegExp]"]=Dt["[object Set]"]=Dt["[object String]"]=Dt["[object WeakMap]"]=!1;const U1=function(i){return qn(i)&&Ih(i.length)&&!!Dt[Qo(i)]},Kl=function(i){return function(e){return i(e)}};var Mh=a&&!a.nodeType&&a,sr=Mh&&!0&&s&&!s.nodeType&&s,Yl=sr&&sr.exports===Mh&&$e.process;const is=function(){try{var i=sr&&sr.require&&sr.require("util").types;return i||Yl&&Yl.binding&&Yl.binding("util")}catch{}}();var Sh=is&&is.isTypedArray;const Ql=Sh?Kl(Sh):U1;var H1=Object.prototype.hasOwnProperty;const Th=function(i,e){var t=xn(i),n=!t&&Gl(i),o=!t&&!n&&ir(i),r=!t&&!n&&!o&&Ql(i),l=t||n||o||r,c=l?L1(i.length,String):[],u=c.length;for(var f in i)!e&&!H1.call(i,f)||l&&(f=="length"||o&&(f=="offset"||f=="parent")||r&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Wl(f,u))||c.push(f);return c};var q1=Object.prototype;const Zl=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||q1)},G1=bh(Object.keys,Object);var W1=Object.prototype.hasOwnProperty;const K1=function(i){if(!Zl(i))return G1(i);var e=[];for(var t in Object(i))W1.call(i,t)&&t!="constructor"&&e.push(t);return e},sa=function(i){return i!=null&&Ih(i.length)&&!wi(i)},Jl=function(i){return sa(i)?Th(i):K1(i)},Y1=function(i,e){return i&&os(e,Jl(e),i)},Q1=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var Z1=Object.prototype.hasOwnProperty;const J1=function(i){if(!ke(i))return Q1(i);var e=Zl(i),t=[];for(var n in i)(n!="constructor"||!e&&Z1.call(i,n))&&t.push(n);return t},ss=function(i){return sa(i)?Th(i,!0):J1(i)},X1=function(i,e){return i&&os(e,ss(e),i)};var Bh=a&&!a.nodeType&&a,Nh=Bh&&!0&&s&&!s.nodeType&&s,Ph=Nh&&Nh.exports===Bh?Ge.Buffer:void 0,Lh=Ph?Ph.allocUnsafe:void 0;const Oh=function(i,e){if(e)return i.slice();var t=i.length,n=Lh?Lh(t):new i.constructor(t);return i.copy(n),n},$h=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},eC=function(i,e){for(var t=-1,n=i==null?0:i.length,o=0,r=[];++t<n;){var l=i[t];e(l,t,i)&&(r[o++]=l)}return r},zh=function(){return[]};var tC=Object.prototype.propertyIsEnumerable,Rh=Object.getOwnPropertySymbols;const Xl=Rh?function(i){return i==null?[]:(i=Object(i),eC(Rh(i),function(e){return tC.call(i,e)}))}:zh,nC=function(i,e){return os(i,Xl(i),e)},jh=function(i,e){for(var t=-1,n=e.length,o=i.length;++t<n;)i[o+t]=e[t];return i},Fh=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)jh(e,Xl(i)),i=Vl(i);return e}:zh,oC=function(i,e){return os(i,Fh(i),e)},Vh=function(i,e,t){var n=e(i);return xn(i)?n:jh(n,t(i))},ec=function(i){return Vh(i,Jl,Xl)},iC=function(i){return Vh(i,ss,Fh)},tc=Ci(Ge,"DataView"),nc=Ci(Ge,"Promise"),oc=Ci(Ge,"Set"),ic=Ci(Ge,"WeakMap");var Uh="[object Map]",Hh="[object Promise]",qh="[object Set]",Gh="[object WeakMap]",Wh="[object DataView]",sC=vi(tc),rC=vi(tr),aC=vi(nc),lC=vi(oc),cC=vi(ic),Ai=Qo;(tc&&Ai(new tc(new ArrayBuffer(1)))!=Wh||tr&&Ai(new tr)!=Uh||nc&&Ai(nc.resolve())!=Hh||oc&&Ai(new oc)!=qh||ic&&Ai(new ic)!=Gh)&&(Ai=function(i){var e=Qo(i),t=e=="[object Object]"?i.constructor:void 0,n=t?vi(t):"";if(n)switch(n){case sC:return Wh;case rC:return Uh;case aC:return Hh;case lC:return qh;case cC:return Gh}return e});const rr=Ai;var dC=Object.prototype.hasOwnProperty;const uC=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&dC.call(i,"index")&&(t.index=i.index,t.input=i.input),t},ra=Ge.Uint8Array,sc=function(i){var e=new i.constructor(i.byteLength);return new ra(e).set(new ra(i)),e},hC=function(i,e){var t=e?sc(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var pC=/\w*$/;const gC=function(i){var e=new i.constructor(i.source,pC.exec(i));return e.lastIndex=i.lastIndex,e};var Kh=He?He.prototype:void 0,Yh=Kh?Kh.valueOf:void 0;const fC=function(i){return Yh?Object(Yh.call(i)):{}},Qh=function(i,e){var t=e?sc(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)};var mC="[object Boolean]",kC="[object Date]",_C="[object Map]",bC="[object Number]",wC="[object RegExp]",vC="[object Set]",CC="[object String]",AC="[object Symbol]",yC="[object ArrayBuffer]",xC="[object DataView]",EC="[object Float32Array]",DC="[object Float64Array]",IC="[object Int8Array]",MC="[object Int16Array]",SC="[object Int32Array]",TC="[object Uint8Array]",BC="[object Uint8ClampedArray]",NC="[object Uint16Array]",PC="[object Uint32Array]";const LC=function(i,e,t){var n=i.constructor;switch(e){case yC:return sc(i);case mC:case kC:return new n(+i);case xC:return hC(i,t);case EC:case DC:case IC:case MC:case SC:case TC:case BC:case NC:case PC:return Qh(i,t);case _C:return new n;case bC:case CC:return new n(i);case wC:return gC(i);case vC:return new n;case AC:return fC(i)}};var Zh=Object.create;const OC=function(){function i(){}return function(e){if(!ke(e))return{};if(Zh)return Zh(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),Jh=function(i){return typeof i.constructor!="function"||Zl(i)?{}:OC(Vl(i))};var $C="[object Map]";const zC=function(i){return qn(i)&&rr(i)==$C};var Xh=is&&is.isMap;const RC=Xh?Kl(Xh):zC;var jC="[object Set]";const FC=function(i){return qn(i)&&rr(i)==jC};var ep=is&&is.isSet;const VC=ep?Kl(ep):FC;var UC=1,HC=2,qC=4,tp="[object Arguments]",np="[object Function]",GC="[object GeneratorFunction]",op="[object Object]",At={};At[tp]=At["[object Array]"]=At["[object ArrayBuffer]"]=At["[object DataView]"]=At["[object Boolean]"]=At["[object Date]"]=At["[object Float32Array]"]=At["[object Float64Array]"]=At["[object Int8Array]"]=At["[object Int16Array]"]=At["[object Int32Array]"]=At["[object Map]"]=At["[object Number]"]=At[op]=At["[object RegExp]"]=At["[object Set]"]=At["[object String]"]=At["[object Symbol]"]=At["[object Uint8Array]"]=At["[object Uint8ClampedArray]"]=At["[object Uint16Array]"]=At["[object Uint32Array]"]=!0,At["[object Error]"]=At[np]=At["[object WeakMap]"]=!1;const rc=function i(e,t,n,o,r,l){var c,u=t&UC,f=t&HC,_=t&qC;if(n&&(c=r?n(e,o,r,l):n(e)),c!==void 0)return c;if(!ke(e))return e;var b=xn(e);if(b){if(c=uC(e),!u)return $h(e,c)}else{var C=rr(e),I=C==np||C==GC;if(ir(e))return Oh(e,u);if(C==op||C==tp||I&&!r){if(c=f||I?{}:Jh(e),!u)return f?oC(e,X1(c,e)):nC(e,Y1(c,e))}else{if(!At[C])return r?e:{};c=LC(e,C,u)}}l||(l=new or);var M=l.get(e);if(M)return M;l.set(e,c),VC(e)?e.forEach(function($){c.add(i($,t,n,$,e,l))}):RC(e)&&e.forEach(function($,F){c.set(F,i($,t,n,F,e,l))});var B=b?void 0:(_?f?iC:ec:f?ss:Jl)(e);return N1(B||e,function($,F){B&&($=e[F=$]),ql(c,F,i($,t,n,F,e,l))}),c};var WC=1,KC=4;const ip=function(i,e){return rc(i,WC|KC,e=typeof e=="function"?e:void 0)},ar=function(i){return qn(i)&&i.nodeType===1&&!Sn(i)};class sp{constructor(e,t){this._config={},t&&this.define(rp(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,o=!1){if(Sn(t))return void this._setObjectToTarget(e,t,o);const r=t.split(".");t=r.pop();for(const l of r)Sn(e[l])||(e[l]={}),e=e[l];if(Sn(n))return Sn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,o);o&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const o of n){if(!Sn(e[o])){e=null;break}e=e[o]}return e?rp(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(o=>{this._setToTarget(e,o,t[o],n)})}}function rp(i){return ip(i,YC)}function YC(i){return ar(i)?i:void 0}function Zo(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function aa(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const ap=yi(Oe());function yi(i){return i?class extends i{listenTo(e,t,n,o={}){if(Zo(e)||aa(e)){const r={capture:!!o.useCapture,passive:!!o.usePassive},l=this._getProxyEmitter(e,r)||new QC(e,r);this.listenTo(l,t,n,o)}else super.listenTo(e,t,n,o)}stopListening(e,t,n){if(Zo(e)||aa(e)){const o=this._getAllProxyEmitters(e);for(const r of o)this.stopListening(r,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,o){const r=n[Ye];return r&&r[o]?r[o].emitter:null}(this,lp(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:ap}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{yi[i]=ap.prototype[i]});class QC extends Oe(){constructor(e,t){super(),Ut(this,lp(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),Oe().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){Oe().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function lp(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Q())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let ac;try{ac={window,document}}catch{ac={window:{},document:{}}}const Ke=ac;function cp(i){const e=[];let t=i;for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}function Ht(i){return Object.prototype.toString.call(i)=="[object Text]"}function la(i){return Object.prototype.toString.apply(i)=="[object Range]"}function dp(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}const up=["top","right","bottom","left","width","height"];class qt{constructor(e){const t=la(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),pp(e)||t)if(t){const n=qt.getDomRangeRects(e);ca(this,qt.getBoundingRect(n))}else ca(this,e.getBoundingClientRect());else if(aa(e)){const{innerWidth:n,innerHeight:o}=e;ca(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else ca(this,e)}clone(){return new qt(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};return t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0?null:new qt(t)}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(!hp(e)){let n=e.parentNode||e.commonAncestorContainer;for(;n&&!hp(n);){const o=new qt(n),r=t.getIntersection(o);if(!r)return null;r.getArea()<t.getArea()&&(t=r),n=n.parentNode}}return t}isEqual(e){for(const t of up)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}excludeScrollbarsAndBorders(){const e=this._source;let t,n,o;if(aa(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,o=e.getComputedStyle(e.document.documentElement).direction;else{const r=dp(e);t=e.offsetWidth-e.clientWidth-r.left-r.right,n=e.offsetHeight-e.clientHeight-r.top-r.bottom,o=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,o==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const o of n)t.push(new qt(o));else{let o=e.startContainer;Ht(o)&&(o=o.parentNode);const r=new qt(o.getBoundingClientRect());r.right=r.left,r.width=0,t.push(r)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of e)n++,t.left=Math.min(t.left,o.left),t.top=Math.min(t.top,o.top),t.right=Math.max(t.right,o.right),t.bottom=Math.max(t.bottom,o.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new qt(t))}}function ca(i,e){for(const t of up)i[t]=e[t]}function hp(i){return!!pp(i)&&i===i.ownerDocument.body}function pp(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}class It{constructor(e,t){It._observerInstance||It._createObserver(),this._element=e,this._callback=t,It._addElementCallback(e,t),It._observerInstance.observe(e)}destroy(){It._deleteElementCallback(this._element,this._callback)}static _addElementCallback(e,t){It._elementCallbacks||(It._elementCallbacks=new Map);let n=It._elementCallbacks.get(e);n||(n=new Set,It._elementCallbacks.set(e,n)),n.add(t)}static _deleteElementCallback(e,t){const n=It._getElementCallbacks(e);n&&(n.delete(t),n.size||(It._elementCallbacks.delete(e),It._observerInstance.unobserve(e))),It._elementCallbacks&&!It._elementCallbacks.size&&(It._observerInstance=null,It._elementCallbacks=null)}static _getElementCallbacks(e){return It._elementCallbacks?It._elementCallbacks.get(e):null}static _createObserver(){It._observerInstance=new Ke.window.ResizeObserver(e=>{for(const t of e){const n=It._getElementCallbacks(t.target);if(n)for(const o of n)o(t)}})}}function ZC(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function lc(i){return e=>e+i}function da(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function gp(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function rs(i){return i&&i.nodeType===Node.COMMENT_NODE}function xi(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}function fp({element:i,target:e,positions:t,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){wi(e)&&(e=e()),wi(n)&&(n=n());const l=function(C){return C&&C.parentNode?C.offsetParent===Ke.document.body?null:C.offsetParent:null}(i),c=new qt(i),u=new qt(e);let f;const _=o&&function(C){C=Object.assign({top:0,bottom:0,left:0,right:0},C);const I=new qt(Ke.window);return I.top+=C.top,I.height-=C.top,I.bottom-=C.bottom,I.height-=C.bottom,I}(r)||null,b={targetRect:u,elementRect:c,positionedElementAncestor:l,viewportRect:_};if(n||o){const C=n&&new qt(n).getVisible();Object.assign(b,{limiterRect:C,viewportRect:_}),f=function(I,M){const{elementRect:B}=M,$=B.getArea(),F=I.map(fe=>new cc(fe,M)).filter(fe=>!!fe.name);let G=0,te=null;for(const fe of F){const{limiterIntersectionArea:Re,viewportIntersectionArea:Xe}=fe;if(Re===$)return fe;const lt=Xe**2+Re**2;lt>G&&(G=lt,te=fe)}return te}(t,b)||new cc(t[0],b)}else f=new cc(t[0],b);return f}function mp(i){const{scrollX:e,scrollY:t}=Ke.window;return i.clone().moveBy(e,t)}It._observerInstance=null,It._elementCallbacks=null;class cc{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect);if(!n)return;const{left:o,top:r,name:l,config:c}=n;this.name=l,this.config=c,this._positioningFunctionCorrdinates={left:o,top:r},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;if(e){const t=this._options.viewportRect;if(!t)return e.getIntersectionArea(this._rect);{const n=e.getIntersection(t);if(n)return n.getIntersectionArea(this._rect)}}return 0}get viewportIntersectionArea(){const e=this._options.viewportRect;return e?e.getIntersectionArea(this._rect):0}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCorrdinates.left,this._positioningFunctionCorrdinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=mp(this._rect),this._options.positionedElementAncestor&&function(e,t){const n=mp(new qt(t)),o=dp(t);let r=0,l=0;r-=n.left,l-=n.top,r+=t.scrollLeft,l+=t.scrollTop,r-=o.left,l-=o.top,e.moveBy(r,l)}(this._cachedAbsoluteRect,this._options.positionedElementAncestor)),this._cachedAbsoluteRect}}function kp(i){const e=i.parentNode;e&&e.removeChild(i)}function JC(i,e,t){const n=e.clone().moveBy(0,t),o=e.clone().moveBy(0,-t),r=new qt(i).excludeScrollbarsAndBorders();if(![o,n].every(l=>r.contains(l))){let{scrollX:l,scrollY:c}=i;bp(o,r)?c-=r.top-e.top+t:_p(n,r)&&(c+=e.bottom-r.bottom+t),wp(e,r)?l-=r.left-e.left+t:vp(e,r)&&(l+=e.right-r.right+t),i.scrollTo(l,c)}}function XC(i,e){const t=dc(i);let n,o;for(;i!=t.document.body;)o=e(),n=new qt(i).excludeScrollbarsAndBorders(),n.contains(o)||(bp(o,n)?i.scrollTop-=n.top-o.top:_p(o,n)&&(i.scrollTop+=o.bottom-n.bottom),wp(o,n)?i.scrollLeft-=n.left-o.left:vp(o,n)&&(i.scrollLeft+=o.right-n.right)),i=i.parentNode}function _p(i,e){return i.bottom>e.bottom}function bp(i,e){return i.top<e.top}function wp(i,e){return i.left<e.left}function vp(i,e){return i.right>e.right}function dc(i){return la(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function eA(i){if(la(i)){let e=i.commonAncestorContainer;return Ht(e)&&(e=e.parentNode),e}return i.parentNode}function Cp(i,e){const t=dc(i),n=new qt(i);if(t===e)return n;{let o=t;for(;o!=e;){const r=o.frameElement,l=new qt(r).excludeScrollbarsAndBorders();n.moveBy(l.left,l.top),o=o.parent}}return n}const tA={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},nA={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},Je=function(){const i={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;for(const e of"`-=[];',./\\")i[e]=e.charCodeAt(0);return i}(),oA=Object.fromEntries(Object.entries(Je).map(([i,e])=>[e,i.charAt(0).toUpperCase()+i.slice(1)]));function as(i){let e;if(typeof i=="string"){if(e=Je[i.toLowerCase()],!e)throw new z("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?Je.alt:0)+(i.ctrlKey?Je.ctrl:0)+(i.shiftKey?Je.shift:0)+(i.metaKey?Je.cmd:0);return e}function uc(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return as(t.slice(0,-1));const n=as(t);return E.isMac&&n==Je.ctrl?Je.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Ap(i){let e=uc(i);return Object.entries(E.isMac?tA:nA).reduce((t,[n,o])=>(e&Je[n]&&(e&=~Je[n],t+=o),t),"")+(e?oA[e]:"")}function hc(i,e){const t=e==="ltr";switch(i){case Je.arrowleft:return t?"left":"right";case Je.arrowright:return t?"right":"left";case Je.arrowup:return"up";case Je.arrowdown:return"down"}}function un(i){return Array.isArray(i)?i:[i]}function iA(i,e,t=1){if(typeof t!="number")throw new z("translation-service-quantity-not-a-number",null,{quantity:t});const n=Object.keys(Ke.window.CKEDITOR_TRANSLATIONS).length;n===1&&(i=Object.keys(Ke.window.CKEDITOR_TRANSLATIONS)[0]);const o=e.id||e.string;if(n===0||!function(u,f){return!!Ke.window.CKEDITOR_TRANSLATIONS[u]&&!!Ke.window.CKEDITOR_TRANSLATIONS[u].dictionary[f]}(i,o))return t!==1?e.plural:e.string;const r=Ke.window.CKEDITOR_TRANSLATIONS[i].dictionary,l=Ke.window.CKEDITOR_TRANSLATIONS[i].getPluralForm||(u=>u===1?0:1),c=r[o];return typeof c=="string"?c:c[Number(l(t))]}Ke.window.CKEDITOR_TRANSLATIONS||(Ke.window.CKEDITOR_TRANSLATIONS={});const sA=["ar","ara","fa","per","fas","he","heb","ku","kur","ug","uig"];function yp(i){return sA.includes(i)?"rtl":"ltr"}class rA{constructor({uiLanguage:e="en",contentLanguage:t}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=yp(this.uiLanguage),this.contentLanguageDirection=yp(this.contentLanguage),this.t=(n,o)=>this._t(n,o)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=un(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(l,c)=>c<r.length?r[c]:l)}(iA(this.uiLanguage,e,n),t)}}class to extends Oe(){constructor(e={},t={}){super();const n=De(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of e)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new z("collection-add-item-invalid-index",this);let n=0;for(const o of e){const r=this._getItemIdBeforeAdding(o),l=t+n;this._items.splice(l,0,o),this._itemMap.set(r,o),this.fire("add",o,l),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new z("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new z("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(o,r,l)=>{const c=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(r);if(c&&u)this._bindToExternalToInternalMap.set(r,u),this._bindToInternalToExternalMap.set(u,r);else{const f=e(r);if(!f)return void this._skippedIndexesFromExternal.push(l);let _=l;for(const b of this._skippedIndexesFromExternal)l>b&&_--;for(const b of t._skippedIndexesFromExternal)_>=b&&_++;this._bindToExternalToInternalMap.set(r,f),this._bindToInternalToExternalMap.set(f,r),this.add(f,_);for(let b=0;b<t._skippedIndexesFromExternal.length;b++)_<=t._skippedIndexesFromExternal[b]&&t._skippedIndexesFromExternal[b]++}};for(const o of t)n(0,o,t.getIndex(o));this.listenTo(t,"add",n),this.listenTo(t,"remove",(o,r,l)=>{const c=this._bindToExternalToInternalMap.get(r);c&&this.remove(c),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,f)=>(l<f&&u.push(f-1),l>f&&u.push(f),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new z("collection-add-invalid-id",this);if(this.get(n))throw new z("collection-add-item-already-exists",this)}else e[t]=n=Q();return n}_remove(e){let t,n,o,r=!1;const l=this._idProperty;if(typeof e=="string"?(n=e,o=this._itemMap.get(n),r=!o,o&&(t=this._items.indexOf(o))):typeof e=="number"?(t=e,o=this._items[t],r=!o,o&&(n=o[l])):(o=e,n=o[l],t=this._items.indexOf(o),r=t==-1||!this._itemMap.get(n)),r)throw new z("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const c=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(c),this.fire("remove",o,t),[o,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function tn(i){const e=i.next();return e.done?null:e.value}class Gn extends yi(Z()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new z("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class ko{constructor(){this._listener=new(yi())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+as(n),n)})}set(e,t,n={}){const o=uc(e),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(l,c)=>{t(c,()=>{c.preventDefault(),c.stopPropagation(),l.stop()}),l.return=!0},{priority:r})}press(e){return!!this._listener.fire("_keydown:"+as(e),e)}destroy(){this._listener.stopListening()}}function _o(i){return De(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}const aA=1e4;function xp(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function Ep(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const lA=function(){const i=/\p{Regional_Indicator}{2}/u.source,e="(?:"+[/\p{Emoji}[\u{E0020}-\u{E007E}]+\u{E007F}/u,/\p{Emoji}\u{FE0F}?\u{20E3}/u,/\p{Emoji}\u{FE0F}/u,/(?=\p{General_Category=Other_Symbol})\p{Emoji}\p{Emoji_Modifier}*/u].map(t=>t.source).join("|")+")";return new RegExp(`${i}|${e}(?:‍${e})*`,"ug")}();function cA(i,e){const t=String(i).matchAll(lA);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class Jo extends to{constructor(e=[]){super(e,{idProperty:"viewUid"}),this.on("add",(t,n,o)=>{this._renderViewIntoCollectionParent(n,o)}),this.on("remove",(t,n)=>{n.element&&this._parentElement&&n.element.remove()}),this._parentElement=null}destroy(){this.map(e=>e.destroy())}setParent(e){this._parentElement=e;for(const t of this)this._renderViewIntoCollectionParent(t)}delegate(...e){if(!e.length||!e.every(t=>typeof t=="string"))throw new z("ui-viewcollection-delegate-wrong-events",this);return{to:t=>{for(const n of this)for(const o of e)n.delegate(o).to(t);this.on("add",(n,o)=>{for(const r of e)o.delegate(r).to(t)}),this.on("remove",(n,o)=>{for(const r of e)o.stopDelegating(r,t)})}}}_renderViewIntoCollectionParent(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}var dA=h(6062),Pe=h.n(dA),Dp=h(4793),uA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Dp.Z,uA),Dp.Z.locals;class Qe extends yi(Z()){constructor(e){super(),this.element=null,this.isRendered=!1,this.locale=e,this.t=e&&e.t,this._viewCollections=new to,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(t,n)=>{n.locale=e,n.t=e&&e.t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=no.bind(this,this)}createCollection(e){const t=new Jo(e);return this._viewCollections.add(t),t}registerChild(e){De(e)||(e=[e]);for(const t of e)this._unboundChildren.add(t)}deregisterChild(e){De(e)||(e=[e]);for(const t of e)this._unboundChildren.remove(t)}setTemplate(e){this.template=new no(e)}extendTemplate(e){no.extend(this.template,e)}render(){if(this.isRendered)throw new z("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(e=>e.destroy()),this.template&&this.template._revertData&&this.template.revert(this.element)}}class no extends Oe(){constructor(e){super(),Object.assign(this,Tp(Sp(e))),this._isRendered=!1,this._revertData=null}render(){const e=this._renderNode({intoFragment:!0});return this._isRendered=!0,e}apply(e){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:e,intoFragment:!1,isApplying:!0,revertData:this._revertData}),e}revert(e){if(!this._revertData)throw new z("ui-template-revert-not-applied",[this,e]);this._revertTemplateFromNode(e,this._revertData)}*getViews(){yield*function*e(t){if(t.children)for(const n of t.children)ha(n)?yield n:pc(n)&&(yield*e(n))}(this)}static bind(e,t){return{to:(n,o)=>new hA({eventNameOrFunction:n,attribute:n,observable:e,emitter:t,callback:o}),if:(n,o,r)=>new Ip({observable:e,emitter:t,attribute:n,valueIfTrue:o,callback:r})}}static extend(e,t){if(e._isRendered)throw new z("template-extend-render",[this,e]);Lp(e,Tp(Sp(t)))}_renderNode(e){let t;if(t=e.node?this.tag&&this.text:this.tag?this.text:!this.text,t)throw new z("ui-template-wrong-syntax",this);return this.text?this._renderText(e):this._renderElement(e)}_renderElement(e){let t=e.node;return t||(t=e.node=document.createElementNS(this.ns||"http://www.w3.org/1999/xhtml",this.tag)),this._renderAttributes(e),this._renderElementChildren(e),this._setUpListeners(e),t}_renderText(e){let t=e.node;return t?e.revertData.text=t.textContent:t=e.node=document.createTextNode(""),ua(this.text)?this._bindToObservable({schema:this.text,updater:pA(t),data:e}):t.textContent=this.text.join(""),t}_renderAttributes(e){if(!this.attributes)return;const t=e.node,n=e.revertData;for(const o in this.attributes){const r=t.getAttribute(o),l=this.attributes[o];n&&(n.attributes[o]=r);const c=Op(l)?l[0].ns:null;if(ua(l)){const u=Op(l)?l[0].value:l;n&&$p(o)&&u.unshift(r),this._bindToObservable({schema:u,updater:gA(t,o,c),data:e})}else if(o=="style"&&typeof l[0]!="string")this._renderStyleAttribute(l[0],e);else{n&&r&&$p(o)&&l.unshift(r);const u=l.map(f=>f&&f.value||f).reduce((f,_)=>f.concat(_),[]).reduce(Np,"");ls(u)||t.setAttributeNS(c,o,u)}}}_renderStyleAttribute(e,t){const n=t.node;for(const o in e){const r=e[o];ua(r)?this._bindToObservable({schema:[r],updater:fA(n,o),data:t}):n.style[o]=r}}_renderElementChildren(e){const t=e.node,n=e.intoFragment?document.createDocumentFragment():t,o=e.isApplying;let r=0;for(const l of this.children)if(gc(l)){if(!o){l.setParent(t);for(const c of l)n.appendChild(c.element)}}else if(ha(l))o||(l.isRendered||l.render(),n.appendChild(l.element));else if(Zo(l))n.appendChild(l);else if(o){const c={children:[],bindings:[],attributes:{}};e.revertData.children.push(c),l._renderNode({intoFragment:!1,node:n.childNodes[r++],isApplying:!0,revertData:c})}else n.appendChild(l.render());e.intoFragment&&t.appendChild(n)}_setUpListeners(e){if(this.eventListeners)for(const t in this.eventListeners){const n=this.eventListeners[t].map(o=>{const[r,l]=t.split("@");return o.activateDomEventListener(r,l,e)});e.revertData&&e.revertData.bindings.push(n)}}_bindToObservable({schema:e,updater:t,data:n}){const o=n.revertData;Mp(e,t,n);const r=e.filter(l=>!ls(l)).filter(l=>l.observable).map(l=>l.activateAttributeListener(e,t,n));o&&o.bindings.push(r)}_revertTemplateFromNode(e,t){for(const o of t.bindings)for(const r of o)r();if(t.text)return void(e.textContent=t.text);const n=e;for(const o in t.attributes){const r=t.attributes[o];r===null?n.removeAttribute(o):n.setAttribute(o,r)}for(let o=0;o<t.children.length;++o)this._revertTemplateFromNode(n.childNodes[o],t.children[o])}}class lr{constructor(e){this.attribute=e.attribute,this.observable=e.observable,this.emitter=e.emitter,this.callback=e.callback}getValue(e){const t=this.observable[this.attribute];return this.callback?this.callback(t,e):t}activateAttributeListener(e,t,n){const o=()=>Mp(e,t,n);return this.emitter.listenTo(this.observable,`change:${this.attribute}`,o),()=>{this.emitter.stopListening(this.observable,`change:${this.attribute}`,o)}}}class hA extends lr{constructor(e){super(e),this.eventNameOrFunction=e.eventNameOrFunction}activateDomEventListener(e,t,n){const o=(r,l)=>{t&&!l.target.matches(t)||(typeof this.eventNameOrFunction=="function"?this.eventNameOrFunction(l):this.observable.fire(this.eventNameOrFunction,l))};return this.emitter.listenTo(n.node,e,o),()=>{this.emitter.stopListening(n.node,e,o)}}}class Ip extends lr{constructor(e){super(e),this.valueIfTrue=e.valueIfTrue}getValue(e){return!ls(super.getValue(e))&&(this.valueIfTrue||!0)}}function ua(i){return!!i&&(i.value&&(i=i.value),Array.isArray(i)?i.some(ua):i instanceof lr)}function Mp(i,e,{node:t}){const n=function(r,l){return r.map(c=>c instanceof lr?c.getValue(l):c)}(i,t);let o;o=i.length==1&&i[0]instanceof Ip?n[0]:n.reduce(Np,""),ls(o)?e.remove():e.set(o)}function pA(i){return{set(e){i.textContent=e},remove(){i.textContent=""}}}function gA(i,e,t){return{set(n){i.setAttributeNS(t,e,n)},remove(){i.removeAttributeNS(t,e)}}}function fA(i,e){return{set(t){i.style[e]=t},remove(){i.style[e]=null}}}function Sp(i){return ip(i,e=>{if(e&&(e instanceof lr||pc(e)||ha(e)||gc(e)))return e})}function Tp(i){if(typeof i=="string"?i=function(e){return{text:[e]}}(i):i.text&&function(e){e.text=un(e.text)}(i),i.on&&(i.eventListeners=function(e){for(const t in e)Bp(e,t);return e}(i.on),delete i.on),!i.text){i.attributes&&function(t){for(const n in t)t[n].value&&(t[n].value=un(t[n].value)),Bp(t,n)}(i.attributes);const e=[];if(i.children)if(gc(i.children))e.push(i.children);else for(const t of i.children)pc(t)||ha(t)||Zo(t)?e.push(t):e.push(new no(t));i.children=e}return i}function Bp(i,e){i[e]=un(i[e])}function Np(i,e){return ls(e)?i:ls(i)?e:`${i} ${e}`}function Pp(i,e){for(const t in e)i[t]?i[t].push(...e[t]):i[t]=e[t]}function Lp(i,e){if(e.attributes&&(i.attributes||(i.attributes={}),Pp(i.attributes,e.attributes)),e.eventListeners&&(i.eventListeners||(i.eventListeners={}),Pp(i.eventListeners,e.eventListeners)),e.text&&i.text.push(...e.text),e.children&&e.children.length){if(i.children.length!=e.children.length)throw new z("ui-template-extend-children-mismatch",i);let t=0;for(const n of e.children)Lp(i.children[t++],n)}}function ls(i){return!i&&i!==0}function ha(i){return i instanceof Qe}function pc(i){return i instanceof no}function gc(i){return i instanceof Jo}function Op(i){return ke(i[0])&&i[0].ns}function $p(i){return i=="class"||i=="style"}class mA extends Jo{constructor(e,t=[]){super(t),this.locale=e}attachToDom(){this._bodyCollectionContainer=new no({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();let e=document.querySelector(".ck-body-wrapper");e||(e=_h(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}detachFromDom(){super.destroy(),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();const e=document.querySelector(".ck-body-wrapper");e&&e.childElementCount==0&&e.remove()}}var zp=h(6574),kA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(zp.Z,kA),zp.Z.locals;class Ei extends Qe{constructor(){super();const e=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.set("isColorInherited",!0),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon","ck-reset_all-excluded",e.if("isColorInherited","ck-icon_inherit-color")],viewBox:e.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const e=new DOMParser().parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),t=e.getAttribute("viewBox");t&&(this.viewBox=t);for(const{name:n,value:o}of Array.from(e.attributes))Ei.presentationalAttributeNames.includes(n)&&this.element.setAttribute(n,o);for(;this.element.firstChild;)this.element.removeChild(this.element.firstChild);for(;e.childNodes.length>0;)this.element.appendChild(e.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(e=>{e.style.fill=this.fillColor})}}Ei.presentationalAttributeNames=["alignment-baseline","baseline-shift","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-rendering","cursor","direction","display","dominant-baseline","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","mask","opacity","overflow","paint-order","pointer-events","shape-rendering","stop-color","stop-opacity","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-overflow","text-rendering","transform","unicode-bidi","vector-effect","visibility","white-space","word-spacing","writing-mode"];var Rp=h(4906),_A={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Rp.Z,_A),Rp.Z.locals;class yt extends Qe{constructor(e){super(e);const t=this.bindTemplate,n=Q();this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("isToggleable",!1),this.set("keystroke",void 0),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.set("withKeystroke",!1),this.children=this.createCollection(),this.labelView=this._createLabelView(n),this.iconView=new Ei,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.keystrokeView=this._createKeystrokeView(),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this));const o={tag:"button",attributes:{class:["ck","ck-button",t.to("class"),t.if("isEnabled","ck-disabled",r=>!r),t.if("isVisible","ck-hidden",r=>!r),t.to("isOn",r=>r?"ck-on":"ck-off"),t.if("withText","ck-button_with-text"),t.if("withKeystroke","ck-button_with-keystroke")],type:t.to("type",r=>r||"button"),tabindex:t.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":t.if("isEnabled",!0,r=>!r),"aria-pressed":t.to("isOn",r=>!!this.isToggleable&&String(!!r)),"data-cke-tooltip-text":t.to("_tooltipString"),"data-cke-tooltip-position":t.to("tooltipPosition")},children:this.children,on:{click:t.to(r=>{this.isEnabled?this.fire("execute"):r.preventDefault()})}};E.isSafari&&(o.on.mousedown=t.to(r=>{this.focus(),r.preventDefault()})),this.setTemplate(o)}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.labelView),this.withKeystroke&&this.keystroke&&this.children.add(this.keystrokeView)}focus(){this.element.focus()}_createLabelView(e){const t=new Qe,n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${e}`},children:[{text:this.bindTemplate.to("label")}]}),t}_createKeystrokeView(){const e=new Qe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",t=>Ap(t))}]}),e}_getTooltipString(e,t,n){return e?typeof e=="string"?e:(n&&(n=Ap(n)),e instanceof Function?e(t,n):`${t}${n?` (${n})`:""}`):""}}var jp=h(5332),bA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(jp.Z,bA),jp.Z.locals;class pa extends yt{constructor(e){super(e),this.isToggleable=!0,this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const e=new Qe;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}var Fp=h(6781),wA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Fp.Z,wA),Fp.Z.locals;class vA{constructor(e){this.editor=e,this._components=new Map}*names(){for(const e of this._components.values())yield e.originalName}add(e,t){this._components.set(fc(e),{callback:t,originalName:e})}create(e){if(!this.has(e))throw new z("componentfactory-item-missing",this,{name:e});return this._components.get(fc(e)).callback(this.editor.locale)}has(e){return this._components.has(fc(e))}}function fc(i){return String(i).toLowerCase()}var Vp=h(5485),CA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Vp.Z,CA),Vp.Z.locals;class cs extends Qe{constructor(e,t,n){super(e);const o=this.bindTemplate;this.buttonView=t,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("class",void 0),this.set("id",void 0),this.set("panelPosition","auto"),this.keystrokes=new ko,this.focusTracker=new Gn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.to("class"),o.if("isEnabled","ck-disabled",r=>!r)],id:o.to("id"),"aria-describedby":o.to("ariaDescribedById")},children:[t,n]}),t.extendTemplate({attributes:{class:["ck-dropdown__button"],"data-cke-tooltip-disabled":o.to("isOpen")}})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(t,n,o)=>{o&&(this.panelPosition==="auto"?this.panelView.position=cs._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions}).name:this.panelView.position=this.panelPosition)}),this.keystrokes.listenTo(this.element);const e=(t,n)=>{this.isOpen&&(this.isOpen=!1,n())};this.keystrokes.set("arrowdown",(t,n)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,n())}),this.keystrokes.set("arrowright",(t,n)=>{this.isOpen&&n()}),this.keystrokes.set("arrowleft",e),this.keystrokes.set("esc",e)}focus(){this.buttonView.focus()}get _panelPositions(){const{south:e,north:t,southEast:n,southWest:o,northEast:r,northWest:l,southMiddleEast:c,southMiddleWest:u,northMiddleEast:f,northMiddleWest:_}=cs.defaultPanelPositions;return this.locale.uiLanguageDirection!=="rtl"?[n,o,c,u,e,r,l,f,_,t]:[o,n,u,c,e,l,r,_,f,t]}}cs.defaultPanelPositions={south:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/2,name:"s"}),southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),southMiddleEast:(i,e)=>({top:i.bottom,left:i.left-(e.width-i.width)/4,name:"sme"}),southMiddleWest:(i,e)=>({top:i.bottom,left:i.left-3*(e.width-i.width)/4,name:"smw"}),north:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/2,name:"n"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),northMiddleEast:(i,e)=>({top:i.top-e.height,left:i.left-(e.width-i.width)/4,name:"nme"}),northMiddleWest:(i,e)=>({top:i.top-e.height,left:i.left-3*(e.width-i.width)/4,name:"nmw"})},cs._getOptimalPosition=fp;const Up='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>';class AA extends yt{constructor(e){super(e),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",t=>String(t))}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Ei;return e.content=Up,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}var Hp=h(7686),yA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Hp.Z,yA),Hp.Z.locals;class mc extends Qe{constructor(e){super(e);const t=this.bindTemplate;this.set("class",void 0),this.set("labelStyle",void 0),this.set("icon",void 0),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isToggleable",!1),this.set("isVisible",!0),this.set("keystroke",void 0),this.set("withKeystroke",!1),this.set("label",void 0),this.set("tabindex",-1),this.set("tooltip",!1),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.actionView=this._createActionView(),this.arrowView=this._createArrowView(),this.keystrokes=new ko,this.focusTracker=new Gn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",t.to("class"),t.if("isVisible","ck-hidden",n=>!n),this.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:this.children})}render(){super.render(),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(e,t)=>{this.focusTracker.focusedElement===this.actionView.element&&(this.arrowView.focus(),t())}),this.keystrokes.set("arrowleft",(e,t)=>{this.focusTracker.focusedElement===this.arrowView.element&&(this.actionView.focus(),t())})}destroy(){super.destroy(),this.focusTracker.destroy(),this.keystrokes.destroy()}focus(){this.actionView.focus()}_createActionView(){const e=new yt;return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}_createArrowView(){const e=new yt,t=e.bindTemplate;return e.icon=Up,e.extendTemplate({attributes:{class:["ck-splitbutton__arrow"],"data-cke-tooltip-disabled":t.to("isOn"),"aria-haspopup":!0,"aria-expanded":t.to("isOn",n=>String(n))}}),e.bind("isEnabled").to(this),e.bind("label").to(this),e.bind("tooltip").to(this),e.delegate("execute").to(this,"open"),e}}class xA extends Qe{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",t.to("position",n=>`ck-dropdown__panel_${n}`),t.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:t.to(n=>n.preventDefault())}})}focus(){if(this.children.length){const e=this.children.first;typeof e.focus=="function"?e.focus():be("ui-dropdown-panel-focus-child-missing-focus",{childView:this.children.first,dropdownPanel:this})}}focusLast(){if(this.children.length){const e=this.children.last;typeof e.focusLast=="function"?e.focusLast():e.focus()}}}class ds{constructor(e){if(this.focusables=e.focusables,this.focusTracker=e.focusTracker,this.keystrokeHandler=e.keystrokeHandler,this.actions=e.actions,e.actions&&e.keystrokeHandler)for(const t in e.actions){let n=e.actions[t];typeof n=="string"&&(n=[n]);for(const o of n)e.keystrokeHandler.set(o,(r,l)=>{this[t](),l()})}}get first(){return this.focusables.find(kc)||null}get last(){return this.focusables.filter(kc).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let e=null;return this.focusTracker.focusedElement===null?null:(this.focusables.find((t,n)=>{const o=t.element===this.focusTracker.focusedElement;return o&&(e=n),o}),e)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(e){e&&e.focus()}_getFocusableItem(e){const t=this.current,n=this.focusables.length;if(!n)return null;if(t===null)return this[e===1?"first":"last"];let o=(t+n+e)%n;do{const r=this.focusables.get(o);if(kc(r))return r;o=(o+n+e)%n}while(o!==t);return null}}function kc(i){return!(!i.focus||!xi(i.element))}class qp extends Qe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}class EA extends Qe{constructor(e){super(e),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__line-break"]}})}}function Gp(i){return Array.isArray(i)?{items:i,removeItems:[]}:i?Object.assign({items:[],removeItems:[]},i):{items:[],removeItems:[]}}class de extends Z(){constructor(e){super(),this.editor=e,this.set("isEnabled",!0),this._disableStack=new Set}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Wp,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Wp),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Wp(i){i.return=!1,i.stop()}class We extends Z(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(e,"change:isReadOnly",(t,n,o)=>{o&&this.affectsData?this.forceDisabled("readOnlyMode"):this.clearForceDisabled("readOnlyMode")})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Kp,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Kp),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Kp(i){i.return=!1,i.stop()}class Yp extends We{constructor(e){super(e),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){K(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class Qp extends Oe(){constructor(e,t=[],n=[]){super(),this._context=e,this._plugins=new Map,this._availablePlugins=new Map;for(const o of t)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new z("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const o=this,r=this._context;(function M(B,$=new Set){B.forEach(F=>{u(F)&&($.has(F)||($.add(F),F.pluginName&&!o._availablePlugins.has(F.pluginName)&&o._availablePlugins.set(F.pluginName,F),F.requires&&M(F.requires,$)))})})(e),C(e);const l=[...function M(B,$=new Set){return B.map(F=>u(F)?F:o._availablePlugins.get(F)).reduce((F,G)=>$.has(G)?F:($.add(G),G.requires&&(C(G.requires,G),M(G.requires,$).forEach(te=>F.add(te))),F.add(G)),new Set)}(e.filter(M=>!_(M,t)))];(function(M,B){for(const $ of B){if(typeof $!="function")throw new z("plugincollection-replace-plugin-invalid-type",null,{pluginItem:$});const F=$.pluginName;if(!F)throw new z("plugincollection-replace-plugin-missing-name",null,{pluginItem:$});if($.requires&&$.requires.length)throw new z("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:F});const G=o._availablePlugins.get(F);if(!G)throw new z("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:F});const te=M.indexOf(G);if(te===-1){if(o._contextPlugins.has(G))return;throw new z("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:F})}if(G.requires&&G.requires.length)throw new z("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:F});M.splice(te,1,$),o._availablePlugins.set(F,$)}})(l,n);const c=function(M){return M.map(B=>{let $=o._contextPlugins.get(B);return $=$||new B(r),o._add(B,$),$})}(l);return I(c,"init").then(()=>I(c,"afterInit")).then(()=>c);function u(M){return typeof M=="function"}function f(M){return u(M)&&M.isContextPlugin}function _(M,B){return B.some($=>$===M||b(M)===$||b($)===M)}function b(M){return u(M)?M.pluginName||M.name:M}function C(M,B=null){M.map($=>u($)?$:o._availablePlugins.get($)||$).forEach($=>{(function(F,G){if(!u(F))throw G?new z("plugincollection-soft-required",r,{missingPlugin:F,requiredBy:b(G)}):new z("plugincollection-plugin-not-found",r,{plugin:F})})($,B),function(F,G){if(f(G)&&!f(F))throw new z("plugincollection-context-required",r,{plugin:b(F),requiredBy:b(G)})}($,B),function(F,G){if(G&&_(F,t))throw new z("plugincollection-required",r,{plugin:b(F),requiredBy:b(G)})}($,B)})}function I(M,B){return M.reduce(($,F)=>F[B]?o._contextPlugins.has(F)?$:$.then(F[B].bind(F)):$,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new z("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}class DA{constructor(e){this.config=new sp(e,this.constructor.defaultConfig);const t=this.constructor.builtinPlugins;this.config.define("plugins",t),this.plugins=new Qp(this,t);const n=this.config.get("language")||{};this.locale=new rA({uiLanguage:typeof n=="string"?n:n.ui,contentLanguage:this.config.get("language.content")}),this.t=this.locale.t,this.editors=new to,this._contextOwner=null}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new z("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new z("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new z("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class ga extends Z(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}var Zp=h(4717),IA={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Zp.Z,IA),Zp.Z.locals;const fa=new WeakMap;function Jp(i){const{view:e,element:t,text:n,isDirectHost:o=!0,keepOnFocus:r=!1}=i,l=e.document;fa.has(l)||(fa.set(l,new Map),l.registerPostFixer(c=>_c(l,c)),l.on("change:isComposing",()=>{e.change(c=>_c(l,c))},{priority:"high"})),fa.get(l).set(t,{text:n,isDirectHost:o,keepOnFocus:r,hostElement:o?t:null}),e.change(c=>_c(l,c))}function MA(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function _c(i,e){const t=fa.get(i),n=[];let o=!1;for(const[r,l]of t)l.isDirectHost&&(n.push(r),Xp(e,r,l)&&(o=!0));for(const[r,l]of t){if(l.isDirectHost)continue;const c=SA(r);c&&(n.includes(c)||(l.hostElement=c,Xp(e,r,l)&&(o=!0)))}return o}function Xp(i,e,t){const{text:n,isDirectHost:o,hostElement:r}=t;let l=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),l=!0),(o||e.childCount==1)&&function(c,u){if(!c.isAttached()||Array.from(c.getChildren()).some(C=>!C.is("uiElement")))return!1;const _=c.document,b=_.selection.anchor;return!(_.isComposing&&b&&b.parent===c||!u&&_.isFocused&&(!b||b.parent===c))}(r,t.keepOnFocus)?function(c,u){return!u.hasClass("ck-placeholder")&&(c.addClass("ck-placeholder",u),!0)}(i,r)&&(l=!0):MA(i,r)&&(l=!0),l}function SA(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Di{is(){throw new Error("is() method is abstract")}}var TA=4;const eg=function(i){return rc(i,TA)};class Ii extends Oe(Di){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new z("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),o=e.getAncestors(t);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),o=xe(t,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return t[o]<n[o]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=eg(this);return delete e.parent,e}}Ii.prototype.is=function(i){return i==="node"||i==="view:node"};class kt extends Ii{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof kt&&(this===e||this.data===e.data)}_clone(){return new kt(this.document,this.data)}}kt.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class bo extends Di{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new z("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new z("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}bo.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class wo{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const o=tg(t,n);if(o)return{element:t,pattern:n,match:o}}return null}matchAll(...e){const t=[];for(const n of e)for(const o of this._patterns){const r=tg(n,o);r&&t.push({element:n,pattern:o,match:r})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function tg(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return Sn(n)?(n.style!==void 0&&be("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&be("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),bc(n,r,l=>o.getAttribute(l))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,o){return bc(n,o.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,o){return bc(n,o.getStyleNames(!0),r=>o.getStyle(r))}(e.styles,i),!t.styles)?null:t}function bc(i,e,t){const n=function(l){return Array.isArray(l)?l.map(c=>Sn(c)?(c.key!==void 0&&c.value!==void 0||be("matcher-pattern-missing-key-or-value",c),[c.key,c.value]):[c,!0]):Sn(l)?Object.entries(l):[[l,!0]]}(i),o=Array.from(e),r=[];if(n.forEach(([l,c])=>{o.forEach(u=>{(function(f,_){return f===!0||f===_||f instanceof RegExp&&_.match(f)})(l,u)&&function(f,_,b){if(f===!0)return!0;const C=b(_);return f===C||f instanceof RegExp&&!!String(C).match(f)}(c,u,t)&&r.push(u)})}),n.length&&!(r.length<n.length))return r}var BA="[object Symbol]";const ma=function(i){return typeof i=="symbol"||qn(i)&&Qo(i)==BA};var NA=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,PA=/^\w*$/;const LA=function(i,e){if(xn(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!ma(i))||PA.test(i)||!NA.test(i)||e!=null&&i in Object(e)};var OA="Expected a function";function wc(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError(OA);var t=function(){var n=arguments,o=e?e.apply(this,n):n[0],r=t.cache;if(r.has(o))return r.get(o);var l=i.apply(this,n);return t.cache=r.set(o,l)||r,l};return t.cache=new(wc.Cache||oa),t}wc.Cache=oa;const $A=wc;var zA=500,RA=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jA=/\\(\\)?/g,FA=function(i){var e=$A(i,function(n){return t.size===zA&&t.clear(),n}),t=e.cache;return e}(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(RA,function(t,n,o,r){e.push(o?r.replace(jA,"$1"):n||t)}),e});const VA=FA,UA=function(i,e){for(var t=-1,n=i==null?0:i.length,o=Array(n);++t<n;)o[t]=e(i[t],t,i);return o};var HA=1/0,ng=He?He.prototype:void 0,og=ng?ng.toString:void 0;const qA=function i(e){if(typeof e=="string")return e;if(xn(e))return UA(e,i)+"";if(ma(e))return og?og.call(e):"";var t=e+"";return t=="0"&&1/e==-HA?"-0":t},vc=function(i){return i==null?"":qA(i)},Cc=function(i,e){return xn(i)?i:LA(i,e)?[i]:VA(vc(i))},GA=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0};var WA=1/0;const Ac=function(i){if(typeof i=="string"||ma(i))return i;var e=i+"";return e=="0"&&1/i==-WA?"-0":e},ig=function(i,e){for(var t=0,n=(e=Cc(e,i)).length;i!=null&&t<n;)i=i[Ac(e[t++])];return t&&t==n?i:void 0},sg=function(i,e,t){var n=-1,o=i.length;e<0&&(e=-e>o?0:o+e),(t=t>o?o:t)<0&&(t+=o),o=e>t?0:t-e>>>0,e>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+e];return r},KA=function(i,e){return e.length<2?i:ig(i,sg(e,0,-1))},YA=function(i,e){return e=Cc(e,i),(i=KA(i,e))==null||delete i[Ac(GA(e))]},QA=function(i,e){return i==null||YA(i,e)},ka=function(i,e,t){var n=i==null?void 0:ig(i,e);return n===void 0?t:n},yc=function(i,e,t){(t!==void 0&&!er(i[e],t)||t===void 0&&!(e in i))&&Hl(i,e,t)},ZA=function(i){return function(e,t,n){for(var o=-1,r=Object(e),l=n(e),c=l.length;c--;){var u=l[i?c:++o];if(t(r[u],u,r)===!1)break}return e}}(),JA=function(i){return qn(i)&&sa(i)},xc=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},XA=function(i){return os(i,ss(i))},ey=function(i,e,t,n,o,r,l){var c=xc(i,t),u=xc(e,t),f=l.get(u);if(f)yc(i,t,f);else{var _=r?r(c,u,t+"",i,e,l):void 0,b=_===void 0;if(b){var C=xn(u),I=!C&&ir(u),M=!C&&!I&&Ql(u);_=u,C||I||M?xn(c)?_=c:JA(c)?_=$h(c):I?(b=!1,_=Oh(u,!0)):M?(b=!1,_=Qh(u,!0)):_=[]:Sn(u)||Gl(u)?(_=c,Gl(c)?_=XA(c):ke(c)&&!wi(c)||(_=Jh(u))):b=!1}b&&(l.set(u,_),o(_,u,n,r,l),l.delete(u)),yc(i,t,_)}},ty=function i(e,t,n,o,r){e!==t&&ZA(t,function(l,c){if(r||(r=new or),ke(l))ey(e,t,c,n,i,o,r);else{var u=o?o(xc(e,c),l,c+"",e,t,r):void 0;u===void 0&&(u=l),yc(e,c,u)}},ss)},Mi=function(i){return i},ny=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var rg=Math.max;const oy=function(i,e,t){return e=rg(e===void 0?i.length-1:e,0),function(){for(var n=arguments,o=-1,r=rg(n.length-e,0),l=Array(r);++o<r;)l[o]=n[e+o];o=-1;for(var c=Array(e+1);++o<e;)c[o]=n[o];return c[e]=t(l),ny(i,this,c)}},iy=function(i){return function(){return i}},sy=ia?function(i,e){return ia(i,"toString",{configurable:!0,enumerable:!1,value:iy(e),writable:!0})}:Mi;var ry=800,ay=16,ly=Date.now;const cy=function(i){var e=0,t=0;return function(){var n=ly(),o=ay-(n-t);if(t=n,o>0){if(++e>=ry)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(sy),dy=function(i,e){return cy(oy(i,e,Mi),i+"")},uy=function(i,e,t){if(!ke(t))return!1;var n=typeof e;return!!(n=="number"?sa(t)&&Wl(e,t.length):n=="string"&&e in t)&&er(t[e],i)},ag=function(i){return dy(function(e,t){var n=-1,o=t.length,r=o>1?t[o-1]:void 0,l=o>2?t[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,l&&uy(t[0],t[1],l)&&(r=o<3?void 0:r,o=1),e=Object(e);++n<o;){var c=t[n];c&&i(e,c,n,r)}return e})},lg=ag(function(i,e,t){ty(i,e,t)}),hy=function(i,e,t,n){if(!ke(i))return i;for(var o=-1,r=(e=Cc(e,i)).length,l=r-1,c=i;c!=null&&++o<r;){var u=Ac(e[o]),f=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return i;if(o!=l){var _=c[u];(f=n?n(_,u,c):void 0)===void 0&&(f=ke(_)?_:Wl(e[o+1])?[]:{})}ql(c,u,f),c=c[u]}return i},py=function(i,e,t){return i==null?i:hy(i,e,t)};class gy{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){const e=Object.entries(this._styles);return!Array.from(e).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=Array.from(function(n){let o=null,r=0,l=0,c=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let f=0;f<n.length;f++){const _=n.charAt(f);if(o===null)switch(_){case":":c||(c=n.substr(r,f-r),l=f+1);break;case'"':case"'":o=_;break;case";":{const b=n.substr(l,f-l);c&&u.set(c.trim(),b.trim()),c=null,r=f+1;break}}else _===o&&(o=null)}return u}(e).entries());for(const[n,o]of t)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(ke(e))for(const[n,o]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=Ec(e);QA(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this._getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!ke(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this._getStylesEntries().map(([t])=>t)}clear(){this._styles={}}_getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),o=ka(this._styles,n);o&&!Array.from(Object.keys(o)).length&&this.remove(n)}}class fy{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(ke(t))Dc(n,Ec(e),t);else if(this._normalizers.has(e)){const o=this._normalizers.get(e),{path:r,value:l}=o(t);Dc(n,r,l)}else Dc(n,e,t)}getNormalized(e,t){if(!e)return lg({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return ka(t,n);const o=n(e,t);if(o)return o}return ka(t,Ec(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,e);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...t,...Object.keys(e)]);return Array.from(n.values())}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function Ec(i){return i.replace("-",".")}function Dc(i,e,t){let n=t;ke(t)&&(n=lg({},ka(i,e),t)),py(i,e,n)}class $n extends Ii{constructor(e,t,n,o){if(super(e),this.name=t,this._attrs=function(r){const l=_o(r);for(const[c,u]of l)u===null?l.delete(c):typeof u!="string"&&l.set(c,String(u));return l}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");cg(this._classes,r),this._attrs.delete("class")}this._styles=new gy(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map,this._unsafeAttributesToRender=[]}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof $n))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new wo(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const o of this.getChildren())t.push(o._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,l){return typeof l=="string"?[new kt(r,l)]:(De(l)||(l=[l]),Array.from(l).map(c=>typeof c=="string"?new kt(r,c):c instanceof bo?new kt(r,c.data):c))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?cg(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of un(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of un(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),Sn(e)?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of un(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function cg(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}$n.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class cr extends $n{constructor(...e){super(...e),this.getFillerOffset=dg}}function dg(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}cr.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class _a extends Z(cr){constructor(...e){super(...e);const t=e[0];this.set("isReadOnly",!1),this.set("isFocused",!1),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",n=>n&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}_a.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const ug=Symbol("rootName");class hg extends _a{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(ug)}set rootName(e){this._setCustomProperty(ug,e)}set _name(e){this.name=e}}hg.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Si{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new z("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new z("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this.position=ge._createAt(e.startPosition):this.position=ge._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(e){let t,n,o;do o=this.position,{done:t,value:n}=this.next();while(!t&&e(n));t||(this.position=o)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof kt){if(e.isAtEnd)return this.position=ge._createAfter(n),this._next();o=n.data[e.offset]}else o=n.getChild(e.offset);if(o instanceof $n)return this.shallow?e.offset++:e=new ge(o,0),this.position=e,this._formatReturnValue("elementStart",o,t,e,1);if(o instanceof kt){if(this.singleCharacters)return e=new ge(o,0),this.position=e,this._next();{let r,l=o.data.length;return o==this._boundaryEndParent?(l=this.boundaries.end.offset,r=new bo(o,0,l),e=ge._createAfter(r)):(r=new bo(o,0,o.data.length),e.offset++),this.position=e,this._formatReturnValue("text",r,t,e,l)}}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const l=new bo(n,e.offset,r);return e.offset+=r,this.position=e,this._formatReturnValue("text",l,t,e,r)}return e=ge._createAfter(n),this.position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof kt){if(e.isAtStart)return this.position=ge._createBefore(n),this._previous();o=n.data[e.offset-1]}else o=n.getChild(e.offset-1);if(o instanceof $n)return this.shallow?(e.offset--,this.position=e,this._formatReturnValue("elementStart",o,t,e,1)):(e=new ge(o,o.childCount),this.position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,t,e));if(o instanceof kt){if(this.singleCharacters)return e=new ge(o,o.data.length),this.position=e,this._previous();{let r,l=o.data.length;if(o==this._boundaryStartParent){const c=this.boundaries.start.offset;r=new bo(o,c,o.data.length-c),l=r.data.length,e=ge._createBefore(r)}else r=new bo(o,0,o.data.length),e.offset--;return this.position=e,this._formatReturnValue("text",r,t,e,l)}}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const c=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=e.offset-c}e.offset-=r;const l=new bo(n,e.offset,r);return this.position=e,this._formatReturnValue("text",l,t,e,r)}return e=ge._createBefore(n),this.position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,o,r){return t instanceof bo&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=ge._createAfter(t.textNode):(o=ge._createAfter(t.textNode),this.position=o)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=ge._createBefore(t.textNode):(o=ge._createBefore(t.textNode),this.position=o))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:o,length:r}}}}class ge extends Di{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof _a);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ge._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Si(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let o=0;for(;t[o]==n[o]&&t[o];)o++;return o===0?null:t[o-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const o=xe(t,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return t[o]<n[o]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Si(e)}clone(){return new ge(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ge)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new z("view-createpositionat-offset-required",n)}return new ge(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ge(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new z("view-position-after-root",e,{root:e});return new ge(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ge(e.textNode,e.offsetInText);if(!e.parent)throw new z("view-position-before-root",e,{root:e});return new ge(e.parent,e.index)}}ge.prototype.is=function(i){return i==="position"||i==="view:position"};class Le extends Di{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Si({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(ba,{direction:"backward"}),t=this.end.getLastMatchingPosition(ba);return e.parent.is("$text")&&e.isAtStart&&(e=ge._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ge._createAfter(t.parent)),new Le(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(ba);if(e.isAfter(this.end)||e.isEqual(this.end))return new Le(e,e);let t=this.end.getLastMatchingPosition(ba,{direction:"backward"});const n=e.nodeAfter,o=t.nodeBefore;return n&&n.is("$text")&&(e=new ge(n,0)),o&&o.is("$text")&&(t=new ge(o,o.data.length)),new Le(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),o=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&o}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new Le(this.start,e.start)),this.containsPosition(e.end)&&t.push(new Le(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new Le(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Si(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new Le(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Si(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Si(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,o){return new this(new ge(e,t),new ge(n,o))}static _createFromPositionAndShift(e,t){const n=e,o=e.getShiftedBy(t);return t>0?new this(n,o):new this(o,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ge._createBefore(e),t)}}function ba(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}Le.prototype.is=function(i){return i==="range"||i==="view:range"};class vo extends Oe(Di){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const o of e._ranges)if(t.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=Se(this.getRanges());if(t!=Se(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of e.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,o]=e;if(typeof n=="object"&&(o=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(o);else if(t instanceof vo||t instanceof Ic)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Le)this._setRanges([t],o&&o.backward),this._setFakeOptions(o);else if(t instanceof ge)this._setRanges([new Le(t)]),this._setFakeOptions(o);else if(t instanceof Ii){const r=!!o&&!!o.backward;let l;if(n===void 0)throw new z("view-selection-setto-required-second-parameter",this);l=n=="in"?Le._createIn(t):n=="on"?Le._createOn(t):new Le(ge._createAt(t,n)),this._setRanges([l],r),this._setFakeOptions(o)}else{if(!De(t))throw new z("view-selection-setto-not-selectable",this);this._setRanges(t,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new z("view-selection-setfocus-no-ranges",this);const n=ge._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new Le(n,o),!0):this._addRange(new Le(o,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof Le))throw new z("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new z("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new Le(e.start,e.end))}}vo.prototype.is=function(i){return i==="selection"||i==="view:selection"};class Ic extends Oe(Di){constructor(...e){super(),this._selection=new vo,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}Ic.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class us extends W{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Mc=Symbol("bubbling contexts");function Sc(i){return class extends i{fire(e,...t){try{const n=e instanceof W?e:new W(this,e),o=Tc(this);if(!o.size)return;if(dr(n,"capturing",this),hs(o,"$capture",n,...t))return n.return;const r=n.startRange||this.selection.getFirstRange(),l=r?r.getContainedElement():null,c=!!l&&!!pg(o,l);let u=l||function(f){if(!f)return null;const _=f.start.parent,b=f.end.parent,C=_.getPath(),I=b.getPath();return C.length>I.length?_:b}(r);if(dr(n,"atTarget",u),!c){if(hs(o,"$text",n,...t))return n.return;dr(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(hs(o,"$root",n,...t))return n.return}else if(u.is("element")&&hs(o,u.name,n,...t))return n.return;if(hs(o,u,n,...t))return n.return;u=u.parent,dr(n,"bubbling",u)}return dr(n,"bubbling",this),hs(o,"$document",n,...t),n.return}catch(n){z.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const o=un(n.context||"$document"),r=Tc(this);for(const l of o){let c=r.get(l);c||(c=new(Oe()),r.set(l,c)),this.listenTo(c,e,t,n)}}_removeEventListener(e,t){const n=Tc(this);for(const o of n.values())this.stopListening(o,e,t)}}}{const i=Sc(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{Sc[e]=i.prototype[e]})}function dr(i,e,t){i instanceof us&&(i._eventPhase=e,i._currentTarget=t)}function hs(i,e,t,...n){const o=typeof e=="string"?i.get(e):pg(i,e);return!!o&&(o.fire(t,...n),t.stop.called)}function pg(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function Tc(i){return i[Mc]||(i[Mc]=new Map),i[Mc]}class wa extends Sc(Z()){constructor(e){super(),this.selection=new Ic,this.roots=new to({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.map(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Ti extends $n{constructor(...e){super(...e),this.getFillerOffset=my,this._priority=10,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new z("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function my(){if(Bc(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(Bc(i)>1)return null;i=i.parent}return!i||Bc(i)>1?null:this.childCount}function Bc(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}Ti.DEFAULT_PRIORITY=10,Ti.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Nc extends $n{constructor(e,t,n,o){super(e,t,n,o),this.getFillerOffset=ky}_insertChild(e,t){if(t&&(t instanceof Ii||Array.from(t).length>0))throw new z("view-emptyelement-cannot-add",[this,t]);return 0}}function ky(){return null}Nc.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class va extends $n{constructor(...e){super(...e),this.getFillerOffset=by}_insertChild(e,t){if(t&&(t instanceof Ii||Array.from(t).length>0))throw new z("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function _y(i){i.document.on("arrowKey",(e,t)=>function(n,o,r){if(o.keyCode==Je.arrowright){const l=o.domTarget.ownerDocument.defaultView.getSelection(),c=l.rangeCount==1&&l.getRangeAt(0).collapsed;if(c||o.shiftKey){const u=l.focusNode,f=l.focusOffset,_=r.domPositionToView(u,f);if(_===null)return;let b=!1;const C=_.getLastMatchingPosition(I=>(I.item.is("uiElement")&&(b=!0),!(!I.item.is("uiElement")&&!I.item.is("attributeElement"))));if(b){const I=r.viewPositionToDom(C);c?l.collapse(I.parent,I.offset):l.extend(I.parent,I.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function by(){return null}va.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Pc extends $n{constructor(...e){super(...e),this.getFillerOffset=wy}_insertChild(e,t){if(t&&(t instanceof Ii||Array.from(t).length>0))throw new z("view-rawelement-cannot-add",[this,t]);return 0}render(){}}function wy(){return null}Pc.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Bi extends Oe(Di){constructor(e,t){super(),this.document=e,this._children=[],t&&this._insertChild(0,t),this._customProperties=new Map}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const o=function(r,l){return typeof l=="string"?[new kt(r,l)]:(De(l)||(l=[l]),Array.from(l).map(c=>typeof c=="string"?new kt(r,c):c instanceof bo?new kt(r,c.data):c))}(this.document,t);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(e,0,r),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}Bi.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class gg{constructor(e){this.document=e,this._cloneGroups=new Map,this._slotFactory=null}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(...e){this.document.selection._setFocus(...e)}createDocumentFragment(e){return new Bi(this.document,e)}createText(e){return new kt(this.document,e)}createAttributeElement(e,t,n={}){const o=new Ti(this.document,e,t);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(e,t,n={},o={}){let r=null;Sn(n)?o=n:r=n;const l=new cr(this.document,e,t,r);return o.renderUnsafeAttributes&&l._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),l}createEditableElement(e,t,n={}){const o=new _a(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(e,t,n={}){const o=new Nc(this.document,e,t);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(e,t,n){const o=new va(this.document,e,t);return n&&(o.render=n),o}createRawElement(e,t,n,o={}){const r=new Pc(this.document,e,t);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){Sn(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ge?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new z("view-writer-break-non-container-element",this.document);if(!t.parent)throw new z("view-writer-break-root",this.document);if(e.isAtStart)return ge._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ge._createAfter(t),n);const o=new Le(e,ge._createAt(t,"end")),r=new ge(n,0);this.move(o,r)}return ge._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const l=n.parent,c=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ge(l,c))}const o=n.getChild(t-1),r=n.getChild(t);if(!o||!r)return e;if(o.is("$text")&&r.is("$text"))return mg(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const l=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new ge(o,l))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new z("view-writer-merge-containers-invalid-position",this.document);const o=t.getChild(t.childCount-1),r=o instanceof kt?ge._createAt(o,"end"):ge._createAt(t,"end");return this.move(Le._createIn(n),ge._createAt(t,"end")),this.remove(Le._createOn(n)),r}insert(e,t){kg(t=De(t)?[...t]:[t],this.document);const n=t.reduce((l,c)=>{const u=l[l.length-1],f=!c.is("uiElement");return u&&u.breakAttributes==f?u.nodes.push(c):l.push({breakAttributes:f,nodes:[c]}),l},[]);let o=null,r=e;for(const{nodes:l,breakAttributes:c}of n){const u=this._insertNodes(r,l,c);o||(o=u.start),r=u.end}return o?new Le(o,r):new Le(e)}remove(e){const t=e instanceof Le?e:Le._createOn(e);if(ur(t,this.document),t.isCollapsed)return new Bi(this.document);const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,l=o.offset-n.offset,c=r._removeChildren(n.offset,l);for(const f of c)this._removeFromClonedElementsGroup(f);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new Bi(this.document,c)}clear(e,t){ur(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let l;if(r.is("element")&&t.isSimilar(r))l=Le._createOn(r);else if(!o.nextPosition.isAfter(e.start)&&r.is("$textProxy")){const c=r.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));c&&(l=Le._createIn(c))}l&&(l.end.isAfter(e.end)&&(l.end=e.end),l.start.isBefore(e.start)&&(l.start=e.start),this.remove(l))}}move(e,t){let n;if(t.isAfter(e.end)){const o=(t=this._breakAttributes(t,!0)).parent,r=o.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=o.childCount-r}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Ti))throw new z("view-writer-wrap-invalid-attribute",this.document);if(ur(e,this.document),e.isCollapsed){let o=e.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(l=>!l.is("uiElement")))&&(o=o.getLastMatchingPosition(l=>l.item.is("uiElement"))),o=this._wrapPosition(o,t);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(e.start)&&this.setSelection(o),new Le(o)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Ti))throw new z("view-writer-unwrap-invalid-attribute",this.document);if(ur(e,this.document),e.isCollapsed)return e;const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,l=this._unwrapChildren(r,n.offset,o.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new Le(c,u)}rename(e,t){const n=new cr(this.document,e,t.getAttributes());return this.insert(ge._createAfter(t),n),this.move(Le._createIn(t),ge._createAt(n,0)),this.remove(Le._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ge._createAt(e,t)}createPositionAfter(e){return ge._createAfter(e)}createPositionBefore(e){return ge._createBefore(e)}createRange(...e){return new Le(...e)}createRangeOn(e){return Le._createOn(e)}createRangeIn(e){return Le._createIn(e)}createSelection(...e){return new vo(...e)}createSlot(e){if(!this._slotFactory)throw new z("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let o,r;if(o=n?Lc(e):e.parent.is("$text")?e.parent.parent:e.parent,!o)throw new z("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(e,!0):e.parent.is("$text")?Oc(e):e;const l=o._insertChild(r.offset,t);for(const _ of t)this._addToClonedElementsGroup(_);const c=r.getShiftedBy(l),u=this.mergeAttributes(r);u.isEqual(r)||c.offset--;const f=this.mergeAttributes(c);return new Le(u,f)}_wrapChildren(e,t,n,o){let r=t;const l=[];for(;r<n;){const u=e.getChild(r),f=u.is("$text"),_=u.is("attributeElement");if(_&&this._wrapAttributeElement(o,u))l.push(new ge(e,r));else if(f||!_||vy(o,u)){const b=o._clone();u._remove(),b._appendChild(u),e._insertChild(r,b),this._addToClonedElementsGroup(b),l.push(new ge(e,r))}else this._wrapChildren(u,0,u.childCount,o);r++}let c=0;for(const u of l)u.offset-=c,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return Le._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,o){let r=t;const l=[];for(;r<n;){const u=e.getChild(r);if(u.is("attributeElement"))if(u.isSimilar(o)){const f=u.getChildren(),_=u.childCount;u._remove(),e._insertChild(r,f),this._removeFromClonedElementsGroup(u),l.push(new ge(e,r),new ge(e,r+_)),r+=_,n+=_-1}else this._unwrapAttributeElement(o,u)?(l.push(new ge(e,r),new ge(e,r+1)),r++):(this._unwrapChildren(u,0,u.childCount,o),r++);else r++}let c=0;for(const u of l)u.offset-=c,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(c++,n--));return Le._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,l=this._wrapChildren(r,n.offset,o.offset,t),c=this.mergeAttributes(l.start);c.isEqual(l.start)||l.end.offset--;const u=this.mergeAttributes(l.end);return new Le(c,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return fg(e.clone());e.parent.is("$text")&&(e=Oc(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const o=new Le(e,e.getShiftedBy(1));this.wrap(o,t);const r=new ge(n.parent,n.index);n._remove();const l=r.nodeBefore,c=r.nodeAfter;return l instanceof kt&&c instanceof kt?mg(l,c):fg(r)}_wrapAttributeElement(e,t){if(!_g(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!_g(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,o=e.end;if(ur(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new Le(u,u)}const r=this._breakAttributes(o,t),l=r.parent.childCount,c=this._breakAttributes(n,t);return r.offset+=r.parent.childCount-l,new Le(c,r)}_breakAttributes(e,t=!1){const n=e.offset,o=e.parent;if(e.parent.is("emptyElement"))throw new z("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new z("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new z("view-writer-cannot-break-raw-element",this.document);if(!t&&o.is("$text")&&$c(o.parent)||$c(o))return e.clone();if(o.is("$text"))return this._breakAttributes(Oc(e),t);if(n==o.childCount){const r=new ge(o.parent,o.index+1);return this._breakAttributes(r,t)}if(n===0){const r=new ge(o.parent,o.index);return this._breakAttributes(r,t)}{const r=o.index+1,l=o._clone();o.parent._insertChild(r,l),this._addToClonedElementsGroup(l);const c=o.childCount-n,u=o._removeChildren(n,c);l._appendChild(u);const f=new ge(o.parent,r);return this._breakAttributes(f,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const o of e.getChildren())this._addToClonedElementsGroup(o);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const o of e.getChildren())this._removeFromClonedElementsGroup(o);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Lc(i){let e=i.parent;for(;!$c(e);){if(!e)return;e=e.parent}return e}function vy(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function fg(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new ge(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new ge(t,0):i}function Oc(i){if(i.offset==i.parent.data.length)return new ge(i.parent.parent,i.parent.index+1);if(i.offset===0)return new ge(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new kt(i.root.document,e)),new ge(i.parent.parent,i.parent.index+1)}function mg(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new ge(i,t)}const Cy=[kt,Ti,cr,Nc,Pc,va];function kg(i,e){for(const t of i){if(!Cy.some(n=>t instanceof n))throw new z("view-writer-insert-invalid-node-type",e);t.is("$text")||kg(t.getChildren(),e)}}function $c(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function ur(i,e){const t=Lc(i.start),n=Lc(i.end);if(!t||!n||t!==n)throw new z("view-writer-invalid-range-container",e)}function _g(i,e){return i.id===null&&e.id===null}const bg=i=>i.createTextNode(" "),wg=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},vg=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},Co=7,Ca="⁠".repeat(Co);function zn(i){return Ht(i)&&i.data.substr(0,Co)===Ca}function hr(i){return i.data.length==Co&&zn(i)}function Cg(i){return zn(i)?i.data.slice(Co):i.data}function Ay(i,e){if(e.keyCode==Je.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,o=t.getRangeAt(0).startOffset;zn(n)&&o<=Co&&t.collapse(n,0)}}}var Ag=h(9315),yy={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};Pe()(Ag.Z,yy),Ag.Z.locals;class xy extends Z(){constructor(e,t){super(),this.domDocuments=new Set,this.domConverter=e,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),E.isBlink&&!E.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()}),this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new z("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!E.isAndroid)return;let e=null;const t=!(E.isBlink&&!E.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ge._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),o=n.parent.ownerDocument;zn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=yg(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){if(!this.domConverter.mapViewToDom(e))return;const t=Array.from(this.domConverter.mapViewToDom(e).childNodes),n=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),o=this._diffNodeLists(t,n),r=this._findReplaceActions(o,t,n);if(r.indexOf("replace")!==-1){const l={equal:0,insert:0,delete:0};for(const c of r)if(c==="replace"){const u=l.equal+l.insert,f=l.equal+l.delete,_=e.getChild(u);!_||_.is("uiElement")||_.is("rawElement")||this._updateElementMappings(_,t[f]),kp(n[u]),l.equal++}else l[c]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ge._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&Ht(t.parent)&&zn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!zn(e))throw new z("view-renderer-filler-was-lost",this);hr(e)?e.remove():e.data=e.data.substr(Co),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(l){if(l.getAttribute("contenteditable")=="false")return!1;const c=l.findAncestor(u=>u.hasAttribute("contenteditable"));return!c||c.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const o=e.nodeBefore,r=e.nodeAfter;return!(o instanceof kt||r instanceof kt)&&(!E.isAndroid||!o&&!r)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let o=this.domConverter.viewToDom(e).data;const r=t.inlineFillerPosition;r&&r.parent==e.parent&&r.offset==e.index&&(o=Ca+o),Dg(n,o)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(r=>r.name),o=e.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(t,r,e.getAttribute(r),e);for(const r of n)e.hasAttribute(r)||this.domConverter.removeDomElementAttribute(t,r)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(E.isAndroid){let b=null;for(const C of Array.from(n.childNodes)){if(b&&Ht(b)&&Ht(C)){n.normalize();break}b=C}}const o=t.inlineFillerPosition,r=n.childNodes,l=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));o&&o.parent===e&&yg(n.ownerDocument,l,o.offset);const c=this._diffNodeLists(r,l),u=E.isAndroid?this._findReplaceActions(c,r,l,{replaceText:!0}):c;let f=0;const _=new Set;for(const b of u)b==="delete"?(_.add(r[f]),kp(r[f])):b!=="equal"&&b!=="replace"||f++;f=0;for(const b of u)b==="insert"?(gp(n,f,l[f]),f++):b==="replace"?(Dg(r[f],l[f].data),f++):b==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(l[f])),f++);for(const b of _)b.parentNode||this.domConverter.unbindDomElement(b)}_diffNodeLists(e,t){return e=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(e,this._fakeSelectionContainer),V(e,t,Ey.bind(null,this.domConverter))}_findReplaceActions(e,t,n,o={}){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let r=[],l=[],c=[];const u={equal:0,insert:0,delete:0};for(const f of e)f==="insert"?c.push(n[u.equal+u.insert]):f==="delete"?l.push(t[u.equal+u.delete]):(r=r.concat(V(l,c,o.replaceText?Eg:xg).map(_=>_==="equal"?"replace":_)),r.push("equal"),l=[],c=[]),u[f]++;return r.concat(V(l,c,o.replaceText?Eg:xg).map(f=>f==="equal"?"replace":f))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(E.isBlink&&!E.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&E.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(l){const c=l.createElement("div");return c.className="ck-fake-selection-container",Object.assign(c.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),c.textContent=" ",c}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const o=t.getSelection(),r=t.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.collapse(n.parent,n.offset),t.extend(o.parent,o.offset),E.isGecko&&function(r,l){const c=r.parent;if(c.nodeType!=Node.ELEMENT_NODE||r.offset!=c.childNodes.length-1)return;const u=c.childNodes[r.offset];u&&u.tagName=="BR"&&l.addRange(l.getRangeAt(0))}(o,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function yg(i,e,t){const n=e instanceof Array?e:e.childNodes,o=n[t];if(Ht(o))return o.data=Ca+o.data,o;{const r=i.createTextNode(Ca);return Array.isArray(e)?n.splice(t,0,r):gp(e,t,r),r}}function xg(i,e){return Zo(i)&&Zo(e)&&!Ht(i)&&!Ht(e)&&!rs(i)&&!rs(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function Eg(i,e){return Zo(i)&&Zo(e)&&Ht(i)&&Ht(e)}function Ey(i,e,t){return e===t||(Ht(e)&&Ht(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function Dg(i,e){const t=i.data;if(t==e)return;const n=N(t,e);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const Dy=vg(Ke.document),Iy=bg(Ke.document),My=wg(Ke.document),Aa="data-ck-unsafe-attribute-",Ig="data-ck-unsafe-element";class ya{constructor(e,t={}){this.document=e,this.renderingMode=t.renderingMode||"editing",this.blockFillerMode=t.blockFillerMode||(this.renderingMode==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Ke.document:Ke.document.implementation.createHTMLDocument(""),this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new wo,this._encounteredRawContentDomNodes=new WeakSet}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new vo(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const l=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),c=[];let u;for(;u=l.nextNode();)c.push(u);for(const f of c){for(const b of f.getAttributeNames())this.setDomElementAttribute(f,b,f.getAttribute(b));const _=f.tagName.toLowerCase();this._shouldRenameElement(_)&&(Tg(_),f.replaceWith(this._createReplacementDomElement(_,f)))}for(;e.firstChild;)e.firstChild.remove();e.append(o)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{if(this.mapViewToDom(e))return this.mapViewToDom(e);let n;if(e.is("documentFragment"))n=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(n,e);else{if(e.is("uiElement"))return n=e.name==="$comment"?this._domDocument.createComment(e.getCustomProperty("$rawContent")):e.render(this._domDocument,this),t.bind&&this.bindElements(n,e),n;this._shouldRenameElement(e.name)?(Tg(e.name),n=this._createReplacementDomElement(e.name)):n=e.hasAttribute("xmlns")?this._domDocument.createElementNS(e.getAttribute("xmlns"),e.name):this._domDocument.createElement(e.name),e.is("rawElement")&&e.render(n,this),t.bind&&this.bindElements(n,e);for(const o of e.getAttributeKeys())this.setDomElementAttribute(n,o,e.getAttribute(o),e)}if(t.withChildren!==!1)for(const o of this.viewChildrenToDom(e,t))n.appendChild(o);return n}}setDomElementAttribute(e,t,n,o){const r=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(t);r||be("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),e.hasAttribute(t)&&!r?e.removeAttribute(t):e.hasAttribute(Aa+t)&&r&&e.removeAttribute(Aa+t),e.setAttribute(r?t:Aa+t,n)}removeDomElementAttribute(e,t){t!=Ig&&(e.removeAttribute(t),e.removeAttribute(Aa+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let o=0;for(const r of e.getChildren()){n===o&&(yield this._getBlockFiller());const l=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!tn(r.getAttributes());l&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,t):(l&&be("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,t)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),o=this._domDocument.createRange();return o.setStart(t.parent,t.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let o=e.offset;return zn(n)&&(o+=Co),{parent:n,offset:o}}{let n,o,r;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;r=n.childNodes[0]}else{const l=e.nodeBefore;if(o=l.is("$text")?this.findCorrespondingDomText(l):this.mapViewToDom(l),!o)return null;n=o.parentNode,r=o.nextSibling}return Ht(r)&&zn(r)?{parent:r,offset:Co}:{parent:n,offset:o?da(o)+1:0}}}domToView(e,t={}){if(this.isBlockFiller(e))return null;const n=this.getHostViewElement(e);if(n)return n;if(rs(e)&&t.skipComments)return null;if(Ht(e)){if(hr(e))return null;{const o=this._processDataFromDomText(e);return o===""?null:new kt(this.document,o)}}{if(this.mapDomToView(e))return this.mapDomToView(e);let o;if(this.isDocumentFragment(e))o=new Bi(this.document),t.bind&&this.bindDocumentFragments(e,o);else{o=this._createViewElement(e,t),t.bind&&this.bindElements(e,o);const r=e.attributes;if(r)for(let l=r.length,c=0;c<l;c++)o._setAttribute(r[c].name,r[c].value);if(this._isViewElementWithRawContent(o,t)||rs(e)){const l=rs(e)?e.data:e.innerHTML;return o._setCustomProperty("$rawContent",l),this._encounteredRawContentDomNodes.add(e),o}}if(t.withChildren!==!1)for(const r of this.domChildrenToView(e,t))o._appendChild(r);return o}}*domChildrenToView(e,t){for(let n=0;n<e.childNodes.length;n++){const o=e.childNodes[n],r=this.domToView(o,t);r!==null&&(yield r)}}domSelectionToView(e){if(e.rangeCount===1){let o=e.getRangeAt(0).startContainer;Ht(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const t=this.isDomSelectionBackward(e),n=[];for(let o=0;o<e.rangeCount;o++){const r=e.getRangeAt(o),l=this.domRangeToView(r);l&&n.push(l)}return new vo(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new Le(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,da(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ge._createBefore(n);if(Ht(e)){if(hr(e))return this.domPositionToView(e.parentNode,da(e));const o=this.findCorrespondingViewText(e);let r=t;return o?(zn(e)&&(r-=Co,r=r<0?0:r),new ge(o,r)):null}if(t===0){const o=this.mapDomToView(e);if(o)return new ge(o,0)}else{const o=e.childNodes[t-1];if(Ht(o)&&hr(o))return this.domPositionToView(o.parentNode,da(o));const r=Ht(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new ge(r.parent,r.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(hr(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof kt?r:null}}else{const o=this.mapDomToView(e.parentNode);if(o){const r=o.getChild(0);return r instanceof kt?r:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:o}=Ke.window,r=[];Mg(t,l=>{const{scrollLeft:c,scrollTop:u}=l;r.push([c,u])}),t.focus(),Mg(t,l=>{const[c,u]=r.shift();l.scrollLeft=c,l.scrollTop=u}),Ke.window.scrollTo(n,o)}}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(Dy):!(e.tagName!=="BR"||!Sg(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(My)||function(t,n){return t.isEqualNode(Iy)&&Sg(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=cp(e);for(t.pop();t.length;){const n=t.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return bg(this._domDocument);case"markedNbsp":return wg(this._domDocument);case"br":return vg(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(Ht(e)&&zn(e)&&t<Co||this.isElement(e)&&zn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!o||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_processDataFromDomText(e){let t=e.data;if(function(f,_){return cp(f).some(C=>C.tagName&&_.includes(C.tagName.toLowerCase()))}(e,this.preElements))return Cg(e);t=t.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(e,!1),o=this._getTouchingInlineDomNode(e,!0),r=this._checkShouldLeftTrimDomText(e,n),l=this._checkShouldRightTrimDomText(e,o);r&&(t=t.replace(/^ /,"")),l&&(t=t.replace(/ $/,"")),t=Cg(new Text(t)),t=t.replace(/ \u00A0/g,"  ");const c=o&&this.isElement(o)&&o.tagName!="BR",u=o&&Ht(o)&&o.data.charAt(0)==" ";return(/( |\u00A0)\u00A0$/.test(t)||!o||c||u)&&(t=t.replace(/\u00A0$/," ")),(r||n&&this.isElement(n)&&n.tagName!="BR")&&(t=t.replace(/^\u00A0/," ")),t}_checkShouldLeftTrimDomText(e,t){return!t||(this.isElement(t)?t.tagName==="BR":!this._encounteredRawContentDomNodes.has(e.previousSibling)&&/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(e,t){return!t&&!zn(e)}_getTouchingInlineViewNode(e,t){const n=new Si({startPosition:t?ge._createAfter(e):ge._createBefore(e),direction:t?"forward":"backward"});for(const o of n){if(o.item.is("element")&&this.inlineObjectElements.includes(o.item.name))return o.item;if(o.item.is("containerElement")||o.item.is("element","br"))return null;if(o.item.is("$textProxy"))return o.item}return null}_getTouchingInlineDomNode(e,t){if(!e.parentNode)return null;const n=t?"firstChild":"lastChild",o=t?"nextSibling":"previousSibling";let r=!0,l=e;do if(!r&&l[n]?l=l[n]:l[o]?(l=l[o],r=!1):(l=l.parentNode,r=!0),!l||this._isBlockElement(l))return null;while(!Ht(l)&&l.tagName!="BR"&&!this._isInlineObjectElement(l));return l}_isBlockElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isInlineObjectElement(e){return this.isElement(e)&&this.inlineObjectElements.includes(e.tagName.toLowerCase())}_createViewElement(e,t){if(rs(e))return new va(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new $n(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(Ig,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const o of t.getAttributeNames())n.setAttribute(o,t.getAttribute(o))}return n}}function Mg(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function Sg(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function Tg(i){i==="script"&&be("domconverter-unsafe-script-element-detected"),i==="style"&&be("domconverter-unsafe-style-element-detected")}class Ao extends yi(){constructor(e){super(),this.view=e,this.document=e.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Bg=ag(function(i,e){os(e,ss(e),i)});class ps{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,Bg(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Xo extends Ao{constructor(e){super(e),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}fire(e,t,n){this.isEnabled&&this.document.fire(e,new ps(this.view,t,n))}}class Sy extends Xo{constructor(e){super(e),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return as(this)}};this.fire(e.type,e,t)}}const zc=function(){return Ge.Date.now()};var Ty=/\s/;const By=function(i){for(var e=i.length;e--&&Ty.test(i.charAt(e)););return e};var Ny=/^\s+/;const Py=function(i){return i&&i.slice(0,By(i)+1).replace(Ny,"")};var Ng=NaN,Ly=/^[-+]0x[0-9a-f]+$/i,Oy=/^0b[01]+$/i,$y=/^0o[0-7]+$/i,zy=parseInt;const Pg=function(i){if(typeof i=="number")return i;if(ma(i))return Ng;if(ke(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=ke(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=Py(i);var t=Oy.test(i);return t||$y.test(i)?zy(i.slice(2),t?2:8):Ly.test(i)?Ng:+i};var Ry="Expected a function",jy=Math.max,Fy=Math.min;const pr=function(i,e,t){var n,o,r,l,c,u,f=0,_=!1,b=!1,C=!0;if(typeof i!="function")throw new TypeError(Ry);function I(G){var te=n,fe=o;return n=o=void 0,f=G,l=i.apply(fe,te)}function M(G){var te=G-u;return u===void 0||te>=e||te<0||b&&G-f>=r}function B(){var G=zc();if(M(G))return $(G);c=setTimeout(B,function(te){var fe=e-(te-u);return b?Fy(fe,r-(te-f)):fe}(G))}function $(G){return c=void 0,C&&n?I(G):(n=o=void 0,l)}function F(){var G=zc(),te=M(G);if(n=arguments,o=this,u=G,te){if(c===void 0)return function(fe){return f=fe,c=setTimeout(B,e),_?I(fe):l}(u);if(b)return clearTimeout(c),c=setTimeout(B,e),I(u)}return c===void 0&&(c=setTimeout(B,e)),l}return e=Pg(e)||0,ke(t)&&(_=!!t.leading,r=(b="maxWait"in t)?jy(Pg(t.maxWait)||0,e):r,C="trailing"in t?!!t.trailing:C),F.cancel=function(){c!==void 0&&clearTimeout(c),f=0,n=u=o=c=void 0},F.flush=function(){return c===void 0?l:$(zc())},F};class Vy extends Ao{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=pr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new vo(t.getRanges(),{backward:t.isBackward,fake:!1});e!=Je.arrowleft&&e!=Je.arrowup||n.setTo(n.getFirstPosition()),e!=Je.arrowright&&e!=Je.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}var Uy="__lodash_hash_undefined__";const Hy=function(i){return this.__data__.set(i,Uy),this},qy=function(i){return this.__data__.has(i)};function xa(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new oa;++e<t;)this.add(i[e])}xa.prototype.add=xa.prototype.push=Hy,xa.prototype.has=qy;const Gy=xa,Wy=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},Ky=function(i,e){return i.has(e)};var Yy=1,Qy=2;const Lg=function(i,e,t,n,o,r){var l=t&Yy,c=i.length,u=e.length;if(c!=u&&!(l&&u>c))return!1;var f=r.get(i),_=r.get(e);if(f&&_)return f==e&&_==i;var b=-1,C=!0,I=t&Qy?new Gy:void 0;for(r.set(i,e),r.set(e,i);++b<c;){var M=i[b],B=e[b];if(n)var $=l?n(B,M,b,e,i,r):n(M,B,b,i,e,r);if($!==void 0){if($)continue;C=!1;break}if(I){if(!Wy(e,function(F,G){if(!Ky(I,G)&&(M===F||o(M,F,t,n,r)))return I.push(G)})){C=!1;break}}else if(M!==B&&!o(M,B,t,n,r)){C=!1;break}}return r.delete(i),r.delete(e),C},Zy=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,o){t[++e]=[o,n]}),t},Jy=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var Xy=1,e2=2,t2="[object Boolean]",n2="[object Date]",o2="[object Error]",i2="[object Map]",s2="[object Number]",r2="[object RegExp]",a2="[object Set]",l2="[object String]",c2="[object Symbol]",d2="[object ArrayBuffer]",u2="[object DataView]",Og=He?He.prototype:void 0,Rc=Og?Og.valueOf:void 0;const h2=function(i,e,t,n,o,r,l){switch(t){case u2:if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case d2:return!(i.byteLength!=e.byteLength||!r(new ra(i),new ra(e)));case t2:case n2:case s2:return er(+i,+e);case o2:return i.name==e.name&&i.message==e.message;case r2:case l2:return i==e+"";case i2:var c=Zy;case a2:var u=n&Xy;if(c||(c=Jy),i.size!=e.size&&!u)return!1;var f=l.get(i);if(f)return f==e;n|=e2,l.set(i,e);var _=Lg(c(i),c(e),n,o,r,l);return l.delete(i),_;case c2:if(Rc)return Rc.call(i)==Rc.call(e)}return!1};var p2=1,g2=Object.prototype.hasOwnProperty;const f2=function(i,e,t,n,o,r){var l=t&p2,c=ec(i),u=c.length;if(u!=ec(e).length&&!l)return!1;for(var f=u;f--;){var _=c[f];if(!(l?_ in e:g2.call(e,_)))return!1}var b=r.get(i),C=r.get(e);if(b&&C)return b==e&&C==i;var I=!0;r.set(i,e),r.set(e,i);for(var M=l;++f<u;){var B=i[_=c[f]],$=e[_];if(n)var F=l?n($,B,_,e,i,r):n(B,$,_,i,e,r);if(!(F===void 0?B===$||o(B,$,t,n,r):F)){I=!1;break}M||(M=_=="constructor")}if(I&&!M){var G=i.constructor,te=e.constructor;G==te||!("constructor"in i)||!("constructor"in e)||typeof G=="function"&&G instanceof G&&typeof te=="function"&&te instanceof te||(I=!1)}return r.delete(i),r.delete(e),I};var m2=1,$g="[object Arguments]",zg="[object Array]",Ea="[object Object]",Rg=Object.prototype.hasOwnProperty;const k2=function(i,e,t,n,o,r){var l=xn(i),c=xn(e),u=l?zg:rr(i),f=c?zg:rr(e),_=(u=u==$g?Ea:u)==Ea,b=(f=f==$g?Ea:f)==Ea,C=u==f;if(C&&ir(i)){if(!ir(e))return!1;l=!0,_=!1}if(C&&!_)return r||(r=new or),l||Ql(i)?Lg(i,e,t,n,o,r):h2(i,e,u,t,n,o,r);if(!(t&m2)){var I=_&&Rg.call(i,"__wrapped__"),M=b&&Rg.call(e,"__wrapped__");if(I||M){var B=I?i.value():i,$=M?e.value():e;return r||(r=new or),o(B,$,t,n,r)}}return!!C&&(r||(r=new or),f2(i,e,t,n,o,r))},jg=function i(e,t,n,o,r){return e===t||(e==null||t==null||!qn(e)&&!qn(t)?e!=e&&t!=t:k2(e,t,n,o,i,r))},_2=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?jg(i,e,void 0,t):!!n};class Fg extends Ao{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.push(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,o=new Set;for(const l of e){const c=t.mapDomToView(l.target);c&&(c.is("uiElement")||c.is("rawElement")||l.type!=="childList"||this._isBogusBrMutation(l)||o.add(c))}for(const l of e){const c=t.mapDomToView(l.target);if((!c||!c.is("uiElement")&&!c.is("rawElement"))&&l.type==="characterData"){const u=t.findCorrespondingViewText(l.target);u&&!o.has(u.parent)?n.add(u):!u&&zn(l.target)&&o.add(t.mapDomToView(l.target.parentNode))}}let r=!1;for(const l of n)r=!0,this.renderer.markToSync("text",l);for(const l of o){const c=t.mapViewToDom(l),u=Array.from(l.getChildren()),f=Array.from(t.domChildrenToView(c,{withChildren:!1}));_2(u,f,b2)||(r=!0,this.renderer.markToSync("children",l))}r&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function b2(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class jc extends Xo{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,o)=>{const r=t.selection.editableElement;r!==null&&r!==o.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class w2 extends Ao{constructor(e){super(e),this.mutationObserver=e.getObserver(Fg),this.focusObserver=e.getObserver(jc),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=pr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=pr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(o,r)=>{this.document.isComposing&&!E.isAndroid||(this._handleSelectionChange(r,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,!(this.selection.isEqual(o)&&this.domConverter.isDomSelectionCorrect(n)||++this._loopbackCounter>60))if(this.focusObserver.flush(),this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class v2 extends Xo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class Vg{constructor(e,t={}){this._files=t.cacheFiles?Ug(e):null,this._native=e}get files(){return this._files||(this._files=Ug(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Ug(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class C2 extends Xo{constructor(e){super(e),this.domEventType=["beforeinput"]}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,o=n.document;let r=null,l=null,c=[];if(e.dataTransfer&&(r=new Vg(e.dataTransfer)),e.data!==null?l=e.data:r&&(l=r.getData("text/plain")),o.selection.isFake)c=Array.from(o.selection.getRanges());else if(t.length)c=t.map(u=>n.domConverter.domRangeToView(u));else if(E.isAndroid){const u=e.target.ownerDocument.defaultView.getSelection();c=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(E.isAndroid&&e.inputType=="insertCompositionText"&&l&&l.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(c[0].end)]});else if(e.inputType=="insertText"&&l&&l.includes(`
`;else{let t=null;for(const n of i.getChildren()){const o=mm(n);t&&(t.is("containerElement")||n.is("containerElement"))&&(fm.includes(t.name)||fm.includes(n.name)?e+=`
`:e+=`
