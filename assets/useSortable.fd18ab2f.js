var m=Object.defineProperty;var u=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var f=(r,t,e)=>t in r?m(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,l=(r,t)=>{for(var e in t||(t={}))_.call(t,e)&&f(r,e,t[e]);if(u)for(var e of u(t))p.call(t,e)&&f(r,e,t[e]);return r};var c=(r,t,e)=>new Promise((i,s)=>{var b=a=>{try{o(e.next(a))}catch(n){s(n)}},d=a=>{try{o(e.throw(a))}catch(n){s(n)}},o=a=>a.done?i(a.value):Promise.resolve(a.value).then(b,d);o((e=e.apply(r,t)).next())});import{F as y}from"./index.7ec2ee38.js";import{$ as S,u as j}from"./vendor.01772a07.js";function T(r,t){function e(){S(()=>c(this,null,function*(){if(!r)return;(yield y(()=>import("./sortable.esm.6bfbf233.js"),[])).default.create(j(r),l({animation:500,delay:400,delayOnTouchOnly:!0},t))}))}return{initSortable:e}}export{T as u};
