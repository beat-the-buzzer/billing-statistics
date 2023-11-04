import{_ as L,F as D,p as M,a as I,f as x,b as S,o as $}from"./index.8afe6495.js";import{A as U,aA as A,az as v,j as N,a0 as n,B as t,D as O,w as s,a5 as m,a1 as f,ac as _,H as a,K as r,J as V,aa as B}from"./vendor.8011da67.js";import{D as E}from"./siteSetting.c485f07c.js";import{c as b,u as P}from"./index.ba14b58e.js";import{b as R}from"./index.2ae28db1.js";import{h as z}from"./header.d801b988.js";import"./index.0022eb1d.js";import"./useWindowSizeFn.d87b294c.js";import"./useContentViewHeight.dc40b068.js";/* empty css               */import"./useSortable.e79a08b5.js";import"./lock.329017ad.js";const F=U({name:"UserDropdown",components:{Dropdown:A,Menu:v,MenuItem:b(()=>D(()=>import("./DropMenuItem.539f3907.js"),["assets/DropMenuItem.539f3907.js","assets/vendor.8011da67.js","assets/vendor.ced4861a.css","assets/index.8afe6495.js","assets/index.18f7e05d.css"])),MenuDivider:v.Divider,LockAction:b(()=>D(()=>import("./LockModal.bb929b39.js"),["assets/LockModal.bb929b39.js","assets/LockModal.0068f88c.css","assets/index.236716d4.css","assets/index.ccc15a38.css","assets/index.35b5cf30.css","assets/index.7959f7e6.css","assets/index.c4896195.css","assets/index.553174f4.css","assets/index.317f90e2.css","assets/index.8afe6495.js","assets/index.18f7e05d.css","assets/vendor.8011da67.js","assets/vendor.ced4861a.css","assets/index.2ae28db1.js","assets/index.2439e102.css","assets/useWindowSizeFn.d87b294c.js","assets/useForm.68ff2a5e.js","assets/useForm.f0aa9a7e.css","assets/index.1d88b476.js","assets/index.7b8b5e30.css","assets/download.2cf95162.js","assets/index.3553a656.js","assets/index.cb030764.css","assets/lock.329017ad.js","assets/header.d801b988.js"]))},props:{theme:M.oneOf(["dark","light"])},setup(){const{prefixCls:e}=I("header-user-dropdown"),{t:g}=S(),{getShowDoc:k,getUseLockPage:h}=P(),i=x(),C=N(()=>{const{realName:u="",avatar:y,desc:j}=i.getUserInfo||{};return{realName:u,avatar:y||z,desc:j}}),[o,{openModal:c}]=R();function l(){c(!0)}function d(){i.confirmLoginOut()}function p(){$(E)}function w(u){switch(u.key){case"logout":d();break;case"doc":p();break;case"lock":l();break}}return{prefixCls:e,t:g,getUserInfo:C,handleMenuClick:w,getShowDoc:k,register:o,getUseLockPage:h}}}),H=["src"];function T(e,g,k,h,i,C){const o=n("MenuItem"),c=n("MenuDivider"),l=n("Menu"),d=n("Dropdown"),p=n("LockAction");return t(),O(B,null,[s(d,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m(()=>[s(l,{onClick:e.handleMenuClick},{default:m(()=>[e.getShowDoc?(t(),f(o,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):_("",!0),e.getShowDoc?(t(),f(c,{key:1})):_("",!0),e.getUseLockPage?(t(),f(o,{key:"lock",text:e.t("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):_("",!0),s(o,{key:"logout",text:e.t("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1},8,["onClick"])]),default:m(()=>[a("span",{class:r([[e.prefixCls,`${e.prefixCls}--${e.theme}`],"flex"])},[a("img",{class:r(`${e.prefixCls}__header`),src:e.getUserInfo.avatar},null,10,H),a("span",{class:r(`${e.prefixCls}__info hidden md:block`)},[a("span",{class:r([`${e.prefixCls}__name  `,"truncate"])},V(e.getUserInfo.realName),3)],2)],2)]),_:1},8,["overlayClassName"]),s(p,{onRegister:e.register},null,8,["onRegister"])],64)}var te=L(F,[["render",T]]);export{te as default};