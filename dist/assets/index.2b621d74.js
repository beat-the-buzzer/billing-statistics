import{_ as x,F as l,Q as T,aK as L,a as k,Y as j}from"./index.7c06c632.js";import{A as F,c4 as w,j as f,u as o,a0 as n,B as s,D as B,w as y,a1 as m,ac as d,K as v,aa as C}from"./vendor.97df4062.js";import{c as S,u as D}from"./index.670d0805.js";import P from"./SessionTimeoutLogin.8979d441.js";import"./index.bfaad363.js";import"./useWindowSizeFn.09e2791d.js";import"./useContentViewHeight.022551a4.js";/* empty css               */import"./useSortable.31e98602.js";import"./lock.107e3414.js";import"./Login.900fd3e7.js";import"./LoginForm.18304cba.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./LoginFormTitle.603d44ff.js";import"./ForgetPasswordForm.a495d45a.js";import"./index.572594ad.js";import"./RegisterForm.527c8030.js";import"./index.7503c36d.js";import"./MobileForm.9c415d0d.js";import"./QrCodeForm.68483d8e.js";import"./download.05450cfa.js";const E=F({name:"LayoutFeatures",components:{BackTop:w,LayoutLockPage:S(()=>l(()=>import("./index.7d994892.js"),["assets/index.7d994892.js","assets/vendor.97df4062.js","assets/vendor.ced4861a.css","assets/LockPage.829bd921.js","assets/LockPage.592307e9.css","assets/index.7c06c632.js","assets/index.18f7e05d.css","assets/lock.107e3414.js","assets/header.d801b988.js"])),SettingDrawer:S(()=>l(()=>import("./index.a9d3e685.js").then(function(e){return e.i}),["assets/index.a9d3e685.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.7c06c632.js","assets/index.18f7e05d.css","assets/vendor.97df4062.js","assets/vendor.ced4861a.css","assets/index.670d0805.js","assets/index.dd8b6a9c.css","assets/index.65674215.css","assets/index.bfaad363.js","assets/index.55076fdd.css","assets/useWindowSizeFn.09e2791d.js","assets/useContentViewHeight.022551a4.js","assets/useSortable.31e98602.js","assets/lock.107e3414.js"])),SessionTimeoutLogin:P},setup(){const{getUseOpenBackTop:e,getShowSettingButton:u,getSettingButtonPosition:p,getFullContent:c}=T(),g=L(),{prefixCls:_}=k("setting-drawer-fearure"),{getShowHeader:i}=D(),r=f(()=>g.getSessionTimeout),a=f(()=>{if(!o(u))return!1;const t=o(p);return t===j.AUTO?!o(i)||o(c):t===j.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a,prefixCls:_,getIsSessionTimeout:r}}});function I(e,u,p,c,g,_){const i=n("LayoutLockPage"),r=n("BackTop"),a=n("SettingDrawer"),t=n("SessionTimeoutLogin");return s(),B(C,null,[y(i),e.getUseOpenBackTop?(s(),m(r,{key:0,target:e.getTarget},null,8,["target"])):d("",!0),e.getIsFixedSettingDrawer?(s(),m(a,{key:1,class:v(e.prefixCls)},null,8,["class"])):d("",!0),e.getIsSessionTimeout?(s(),m(t,{key:2})):d("",!0)],64)}var ne=x(E,[["render",I]]);export{ne as default};
