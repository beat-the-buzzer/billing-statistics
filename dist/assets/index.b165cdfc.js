import{_ as M,F as D,p as I,a as b,f as x,b as S,o as $}from"./index.2e53714a.js";import{A as U,aA as A,az as v,j as N,a0 as n,B as t,D as O,w as s,a5 as m,a1 as f,ac as _,H as a,K as r,J as V,aa as B}from"./vendor.97df4062.js";import{D as E}from"./siteSetting.c485f07c.js";import{c as w,u as P}from"./index.dd291d29.js";import{b as R}from"./index.22b24ed2.js";import{h as z}from"./header.d801b988.js";import"./index.3d668dcc.js";import"./useWindowSizeFn.09e2791d.js";import"./useContentViewHeight.961a30cc.js";/* empty css               */import"./useSortable.ca7496f1.js";import"./lock.ac224b01.js";const F=U({name:"UserDropdown",components:{Dropdown:A,Menu:v,MenuItem:w(()=>D(()=>import("./DropMenuItem.53225d15.js"),["assets/DropMenuItem.53225d15.js","assets/vendor.97df4062.js","assets/vendor.ced4861a.css","assets/index.2e53714a.js","assets/index.18f7e05d.css"])),MenuDivider:v.Divider,LockAction:w(()=>D(()=>import("./LockModal.ae0dfda8.js"),["assets/LockModal.ae0dfda8.js","assets/LockModal.0068f88c.css","assets/index.236716d4.css","assets/index.ccc15a38.css","assets/index.35b5cf30.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.553174f4.css","assets/index.317f90e2.css","assets/index.2e53714a.js","assets/index.18f7e05d.css","assets/vendor.97df4062.js","assets/vendor.ced4861a.css","assets/index.22b24ed2.js","assets/index.2439e102.css","assets/useWindowSizeFn.09e2791d.js","assets/useForm.c85af77c.js","assets/useForm.f0aa9a7e.css","assets/index.f794fd39.js","assets/index.7b8b5e30.css","assets/download.5d757978.js","assets/index.74a264e9.js","assets/index.cb030764.css","assets/lock.ac224b01.js","assets/header.d801b988.js"]))},props:{theme:I.oneOf(["dark","light"])},setup(){const{prefixCls:e}=b("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=P(),i=x(),C=N(()=>{const{realName:u="",avatar:j,desc:L}=i.getUserInfo||{};return{realName:u,avatar:j||z,desc:L}}),[o,{openModal:c}]=R();function d(){c(!0)}function l(){i.confirmLoginOut()}function p(){$(E)}function y(u){switch(u.key){case"logout":l();break;case"doc":p();break;case"lock":d();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:y,getShowDoc:k,register:o,getUseLockPage:h}}}),H=["src"];function T(e,g,k,h,i,C){const o=n("MenuItem"),c=n("MenuDivider"),d=n("Menu"),l=n("Dropdown"),p=n("LockAction");return t(),O(B,null,[s(l,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[s(d,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),s(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:r([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:r(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:r(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:r([`${e.prefixCls}__name  `,"truncate"])},V(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),s(p,{onRegister:e.register},null,8,["onRegister"])],64)}var te=M(F,[["render",T]]);export{te as default};