import{A as d,bL as r,j as l,a0 as c,B as p,D as m,H as u,J as h,w as f,a4 as C,K as g}from"./vendor.97df4062.js";/* empty css                */import{_,a as j,b}from"./index.7c06c632.js";import{b as v}from"./index.a9d3e685.js";import"./index.670d0805.js";import"./index.bfaad363.js";import"./useWindowSizeFn.09e2791d.js";import"./useContentViewHeight.022551a4.js";/* empty css               */import"./useSortable.31e98602.js";import"./lock.107e3414.js";/* empty css               */const w=d({name:"SwitchItem",components:{Switch:r},props:{event:{type:Number},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=j("setting-switch-item"),{t:n}=b(),s=l(()=>e.def?{checked:e.def}:{});function a(i){e.event&&v(e.event,i)}return{prefixCls:t,t:n,handleChange:a,getBindValue:s}}});function S(e,t,n,s,a,i){const o=c("Switch");return p(),m("div",{class:g(e.prefixCls)},[u("span",null,h(e.title),1),f(o,C(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}var E=_(w,[["render",S],["__scopeId","data-v-440e72fd"]]);export{E as default};
