import{A as r,a8 as i,a0 as l,B as s,D as a,aa as d,ao as c,K as o,a1 as _,a5 as u,H as n,L as f,N as m}from"./vendor.8011da67.js";import{_ as y,a as v}from"./index.8f11b981.js";const C=r({name:"MenuTypePicker",components:{Tooltip:i},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>({})},def:{type:String,default:""}},setup(){const{prefixCls:e}=v("setting-menu-type-picker");return{prefixCls:e}}}),k=e=>(f("data-v-119d0732"),e=e(),m(),e),h=["onClick"],$=k(()=>n("div",{class:"mix-sidebar"},null,-1)),T=[$];function g(e,x,B,I,L,S){const p=l("Tooltip");return s(),a("div",{class:o(e.prefixCls)},[(s(!0),a(d,null,c(e.menuTypeList||[],t=>(s(),_(p,{key:t.title,title:t.title,placement:"bottom"},{default:u(()=>[n("div",{onClick:b=>e.handler(t),class:o([`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}])},T,10,h)]),_:2},1032,["title"]))),128))],2)}var w=y(C,[["render",g],["__scopeId","data-v-119d0732"]]);export{w as default};
