var m=Object.defineProperty;var s=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var u=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,b=(r,e)=>{for(var t in e||(e={}))_.call(e,t)&&u(r,t,e[t]);if(s)for(var t of s(e))p.call(e,t)&&u(r,t,e[t]);return r};var l=(r,e,t)=>new Promise((i,f)=>{var c=a=>{try{o(t.next(a))}catch(n){f(n)}},d=a=>{try{o(t.throw(a))}catch(n){f(n)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(c,d);o((t=t.apply(r,e)).next())});import{F as y}from"./index.f4b7fc3b.js";import{$ as S,u as j}from"./vendor.97df4062.js";function T(r,e){function t(){S(()=>l(this,null,function*(){if(!r)return;(yield y(()=>import("./sortable.esm.6bfbf233.js"),[])).default.create(j(r),b({animation:500,delay:400,delayOnTouchOnly:!0},e))}))}return{initSortable:t}}export{T as u};