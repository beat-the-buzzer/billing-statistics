import{_ as b,F as f,Q as x,aK as T,a as L,Y as l}from"./index.f4b7fc3b.js";import{A as k,c4 as F,j,u as o,a0 as n,B as s,D as w,w as B,a1 as m,ac as c,K as y,aa as v}from"./vendor.97df4062.js";import{c as S,u as C}from"./index.4083bc86.js";import D from"./SessionTimeoutLogin.db2f25fd.js";import"./index.2093be9f.js";import"./useWindowSizeFn.09e2791d.js";import"./useContentViewHeight.880b1742.js";/* empty css               */import"./useSortable.2f3c42a4.js";import"./lock.aeb401af.js";import"./Login.ffd6109f.js";import"./LoginForm.2ba2ad15.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import"./LoginFormTitle.e7b6ebe5.js";import"./ForgetPasswordForm.8a964920.js";import"./index.9324ad00.js";import"./RegisterForm.2b46d3eb.js";import"./index.b7bbad27.js";import"./MobileForm.95953b28.js";import"./QrCodeForm.7ad84802.js";import"./download.cabfcc65.js";const P=k({name:"LayoutFeatures",components:{BackTop:F,LayoutLockPage:S(()=>f(()=>import("./index.c530147c.js"),["assets/index.c530147c.js","assets/vendor.97df4062.js","assets/vendor.ced4861a.css","assets/LockPage.3e7d522a.js","assets/LockPage.592307e9.css","assets/index.f4b7fc3b.js","assets/index.18f7e05d.css","assets/lock.aeb401af.js","assets/header.d801b988.js"])),SettingDrawer:S(()=>f(()=>import("./index.ba85e4c5.js").then(function(e){return e.i}),["assets/index.ba85e4c5.js","assets/index.5c7227e9.css","assets/index.35b5cf30.css","assets/index.f4b7fc3b.js","assets/index.18f7e05d.css","assets/vendor.97df4062.js","assets/vendor.ced4861a.css","assets/index.4083bc86.js","assets/index.dd8b6a9c.css","assets/index.65674215.css","assets/index.2093be9f.js","assets/index.55076fdd.css","assets/useWindowSizeFn.09e2791d.js","assets/useContentViewHeight.880b1742.js","assets/useSortable.2f3c42a4.js","assets/lock.aeb401af.js"])),SessionTimeoutLogin:D},setup(){const{getUseOpenBackTop:e,getShowSettingButton:u,getSettingButtonPosition:p,getFullContent:d}=x(),g=T(),{prefixCls:_}=L("setting-drawer-fearure"),{getShowHeader:i}=C(),r=j(()=>g.getSessionTimeout),a=j(()=>{if(!o(u))return!1;const t=o(p);return t===l.AUTO?!o(i)||o(d):t===l.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a,prefixCls:_,getIsSessionTimeout:r}}});function E(e,u,p,d,g,_){const i=n("LayoutLockPage"),r=n("BackTop"),a=n("SettingDrawer"),t=n("SessionTimeoutLogin");return s(),w(v,null,[B(i),e.getUseOpenBackTop?(s(),m(r,{key:0,target:e.getTarget},null,8,["target"])):c("",!0),e.getIsFixedSettingDrawer?(s(),m(a,{key:1,class:y(e.prefixCls)},null,8,["class"])):c("",!0),e.getIsSessionTimeout?(s(),m(t,{key:2})):c("",!0)],64)}var ne=b(P,[["render",E]]);export{ne as default};