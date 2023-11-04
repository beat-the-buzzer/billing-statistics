var me=Object.defineProperty,he=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var ee=(e,o,a)=>o in e?me(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,M=(e,o)=>{for(var a in o||(o={}))be.call(o,a)&&ee(e,a,o[a]);if(x)for(var a of x(o))ve.call(o,a)&&ee(e,a,o[a]);return e},V=(e,o)=>he(e,ye(o));var A=(e,o,a)=>new Promise((i,l)=>{var c=d=>{try{n(a.next(d))}catch(u){l(u)}},t=d=>{try{n(a.throw(d))}catch(u){l(u)}},n=d=>d.done?i(d.value):Promise.resolve(d.value).then(c,t);n((a=a.apply(e,o)).next())});import{b as te,r as Ce,ad as Me,aF as He,x as Se,y as Fe,S as ke,_,a as ne,aE as $e,j as oe,aw as Be,ag as Oe,av as le,w as Pe}from"./index.8f11b981.js";import{al as I,u as s,A as w,W as Te,w as H,bu as we,v as Re,r as g,b$ as De,j as S,S as ae,_ as Ne,ai as se,$ as B,a0 as y,bk as We,B as v,a1 as O,a5 as m,F as _e,H as Ee,a6 as P,X as je,a8 as Le,bf as Ve,bg as Ae,bU as Ie,D as q,aa as ze,ac as X,K as qe,ad as U,J as Y,a4 as E,am as Xe,o as J,ah as K,aC as re,ao as ie,aB as ce,aR as ue,P as de,t as z,b8 as Ue,af as Ye}from"./vendor.8011da67.js";import{u as Je}from"./useWindowSizeFn.d87b294c.js";const{t:fe}=te(),Ke={visible:{type:Boolean},scrollTop:{type:Boolean,default:!0},height:{type:Number},minHeight:{type:Number},draggable:{type:Boolean,default:!0},centered:{type:Boolean},cancelText:{type:String,default:fe("common.cancelText")},okText:{type:String,default:fe("common.okText")},closeFunc:Function},G=Object.assign({},Ke,{defaultFullscreen:{type:Boolean},canFullscreen:{type:Boolean,default:!0},wrapperFooterOffset:{type:Number,default:0},helpMessage:[String,Array],useWrapper:{type:Boolean,default:!0},loading:{type:Boolean},loadingTip:{type:String},showCancelBtn:{type:Boolean,default:!0},showOkBtn:{type:Boolean,default:!0},wrapperProps:Object,afterClose:Function,bodyStyle:Object,closable:{type:Boolean,default:!0},closeIcon:Object,confirmLoading:{type:Boolean},destroyOnClose:{type:Boolean},footer:Object,getContainer:Function,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},maskStyle:Object,okType:{type:String,default:"primary"},okButtonProps:Object,cancelButtonProps:Object,title:{type:String},visible:{type:Boolean},width:[String,Number],wrapClassName:{type:String},zIndex:{type:Number}});function Ge(e){const o=(l,c)=>getComputedStyle(l)[c],a=l=>{if(!l)return;l.setAttribute("data-drag",s(e.draggable));const c=l.querySelector(".ant-modal-header"),t=l.querySelector(".ant-modal");!c||!t||!s(e.draggable)||(c.style.cursor="move",c.onmousedown=n=>{if(!n)return;const d=n.clientX,u=n.clientY,f=document.body.clientWidth,p=document.documentElement.clientHeight,h=t.offsetWidth,C=t.offsetHeight,F=t.offsetLeft,k=f-t.offsetLeft-h,$=t.offsetTop,j=p-t.offsetTop-C,T=o(t,"left"),D=o(t,"top");let N=+T,W=+D;T.includes("%")?(N=+document.body.clientWidth*(+T.replace(/%/g,"")/100),W=+document.body.clientHeight*(+D.replace(/%/g,"")/100)):(N=+T.replace(/px/g,""),W=+D.replace(/px/g,"")),document.onmousemove=function(L){let r=L.clientX-d,b=L.clientY-u;-r>F?r=-F:r>k&&(r=k),-b>$?b=-$:b>j&&(b=j),t.style.cssText+=`;left:${r+N}px;top:${b+W}px;`},document.onmouseup=()=>{document.onmousemove=null,document.onmouseup=null}})},i=()=>{const l=document.querySelectorAll(".ant-modal-wrap");for(const c of Array.from(l)){if(!c)continue;const t=o(c,"display"),n=c.getAttribute("data-drag");t!=="none"&&(n===null||s(e.destroyOnClose))&&a(c)}};I(()=>{!s(e.visible)||!s(e.draggable)||Ce(()=>{i()},30)})}function Qe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!we(e)}var Ze=w({name:"Modal",inheritAttrs:!1,props:G,emits:["cancel"],setup(e,{slots:o}){const{visible:a,draggable:i,destroyOnClose:l}=Te(e),c=Me();return Ge({visible:a,destroyOnClose:l,draggable:i}),()=>{let t;const n=M(M({},s(c)),e);return H(Re,n,Qe(t=He(o))?t:{default:()=>[t]})}}});const pe=Symbol();function xe(e){return Se(e,pe)}function Ht(){return Fe(pe)}const et={loading:{type:Boolean},useWrapper:{type:Boolean,default:!0},modalHeaderHeight:{type:Number,default:57},modalFooterHeight:{type:Number,default:74},minHeight:{type:Number,default:200},height:{type:Number},footerOffset:{type:Number,default:0},visible:{type:Boolean},fullScreen:{type:Boolean},loadingTip:{type:String}},tt=w({name:"ModalWrapper",components:{ScrollContainer:ke},inheritAttrs:!1,props:et,emits:["height-change","ext-height"],setup(e,{emit:o}){const a=g(null),i=g(null),l=g(0),c=g(0);let t=0;Je(u.bind(null,!1)),De(i,()=>{u()},{attributes:!0,subtree:!0}),xe({redoModalHeight:u});const n=S(()=>({minHeight:`${e.minHeight}px`,[e.fullScreen?"height":"maxHeight"]:`${s(l)}px`}));I(()=>{e.useWrapper&&u()}),ae(()=>e.fullScreen,f=>{u(),f?c.value=l.value:l.value=c.value}),Ne(()=>{const{modalHeaderHeight:f,modalFooterHeight:p}=e;o("ext-height",f+p)}),se(()=>{});function d(){return A(this,null,function*(){B(()=>{var p;const f=s(a);!f||(p=f==null?void 0:f.scrollTo)==null||p.call(f,0)})})}function u(){return A(this,null,function*(){if(!e.visible)return;const f=s(a);if(!f)return;const p=f.$el.parentElement;if(!!p){p.style.padding="0",yield B();try{const h=p.parentElement&&p.parentElement.parentElement;if(!h)return;const C=getComputedStyle(h).top,F=Number.parseInt(C);let k=window.innerHeight-F*2+(e.footerOffset||0)-e.modalFooterHeight-e.modalHeaderHeight;F<40&&(k-=26),yield B();const $=s(i);if(!$)return;yield B(),t=$.scrollHeight,e.fullScreen?l.value=window.innerHeight-e.modalFooterHeight-e.modalHeaderHeight-28:l.value=e.height?e.height:t>k?k:t,o("height-change",s(l))}catch(h){console.log(h)}}})}return{wrapperRef:a,spinRef:i,spinStyle:n,scrollTop:d,setModalHeight:u}}}),nt=["loading-tip"];function ot(e,o,a,i,l,c){const t=y("ScrollContainer"),n=We("loading");return v(),O(t,{ref:"wrapperRef"},{default:m(()=>[_e(Ee("div",{ref:"spinRef",style:je(e.spinStyle),"loading-tip":e.loadingTip},[P(e.$slots,"default")],12,nt),[[n,e.loading]])]),_:3},512)}var lt=_(tt,[["render",ot]]);const at=w({name:"ModalClose",components:{Tooltip:Le,FullscreenExitOutlined:Ve,FullscreenOutlined:Ae,CloseOutlined:Ie},props:{canFullscreen:{type:Boolean,default:!0},fullScreen:{type:Boolean}},emits:["cancel","fullscreen"],setup(e,{emit:o}){const{prefixCls:a}=ne("basic-modal-close"),{t:i}=te(),l=S(()=>[a,`${a}--custom`,{[`${a}--can-full`]:e.canFullscreen}]);function c(n){o("cancel",n)}function t(n){n==null||n.stopPropagation(),n==null||n.preventDefault(),o("fullscreen")}return{t:i,getClass:l,prefixCls:a,handleCancel:c,handleFullScreen:t}}});function st(e,o,a,i,l,c){const t=y("FullscreenExitOutlined"),n=y("Tooltip"),d=y("FullscreenOutlined"),u=y("CloseOutlined");return v(),q("div",{class:qe(e.getClass)},[e.canFullscreen?(v(),q(ze,{key:0},[e.fullScreen?(v(),O(n,{key:0,title:e.t("component.modal.restore"),placement:"bottom"},{default:m(()=>[H(t,{role:"full",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"])):(v(),O(n,{key:1,title:e.t("component.modal.maximize"),placement:"bottom"},{default:m(()=>[H(d,{role:"close",onClick:e.handleFullScreen},null,8,["onClick"])]),_:1},8,["title"]))],64)):X("",!0),H(n,{title:e.t("component.modal.close"),placement:"bottom"},{default:m(()=>[H(u,{onClick:e.handleCancel},null,8,["onClick"])]),_:1},8,["title"])],2)}var rt=_(at,[["render",st]]);const it=w({name:"BasicModalFooter",props:G,emits:["ok","cancel"],setup(e,{emit:o}){function a(l){o("ok",l)}function i(l){o("cancel",l)}return{handleOk:a,handleCancel:i}}});function ct(e,o,a,i,l,c){const t=y("a-button");return v(),q("div",null,[P(e.$slots,"insertFooter"),e.showCancelBtn?(v(),O(t,E({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:m(()=>[U(Y(e.cancelText),1)]),_:1},16,["onClick"])):X("",!0),P(e.$slots,"centerFooter"),e.showOkBtn?(v(),O(t,E({key:1,type:e.okType,onClick:e.handleOk,loading:e.confirmLoading},e.okButtonProps),{default:m(()=>[U(Y(e.okText),1)]),_:1},16,["type","onClick","loading"])):X("",!0),P(e.$slots,"appendFooter")])}var ut=_(it,[["render",ct]]);const dt=w({name:"BasicModalHeader",components:{BasicTitle:$e},props:{helpMessage:{type:[String,Array]},title:{type:String}},emits:["dblclick"]});function ft(e,o,a,i,l,c){const t=y("BasicTitle");return v(),O(t,{helpMessage:e.helpMessage},{default:m(()=>[U(Y(e.title),1)]),_:1},8,["helpMessage"])}var pt=_(dt,[["render",ft]]);function gt(e){const o=g(!1),a=S(()=>{const l=s(e.wrapClassName)||"";return s(o)?`fullscreen-modal ${l} `:s(l)});function i(l){l&&l.stopPropagation(),o.value=!s(o)}return{getWrapClassName:a,handleFullScreen:i,fullScreenRef:o}}const mt=w({name:"BasicModal",components:{Modal:Ze,ModalWrapper:lt,ModalClose:rt,ModalFooter:ut,ModalHeader:pt},inheritAttrs:!1,props:G,emits:["visible-change","height-change","cancel","ok","register","update:visible"],setup(e,{emit:o,attrs:a}){const i=g(!1),l=g(null),c=g(null),{prefixCls:t}=ne("basic-modal"),n=g(0),d={setModalProps:T,emitVisible:void 0,redoModalHeight:()=>{B(()=>{s(c)&&s(c).setModalHeight()})}},u=K();u&&o("register",d,u.uid);const f=S(()=>M(M({},e),s(l))),{handleFullScreen:p,getWrapClassName:h,fullScreenRef:C}=gt({modalWrapperRef:c,extHeightRef:n,wrapClassName:Xe(f.value,"wrapClassName")}),F=S(()=>{const r=V(M({},s(f)),{visible:s(i),okButtonProps:void 0,cancelButtonProps:void 0,title:void 0});return V(M({},r),{wrapClassName:s(h)})}),k=S(()=>{const r=V(M(M({},a),s(f)),{visible:s(i),wrapClassName:s(h)});return s(C)?J(r,["height","title"]):J(r,"title")}),$=S(()=>{if(!s(C))return s(F).height});I(()=>{i.value=!!e.visible,C.value=!!e.defaultFullscreen}),ae(()=>s(i),r=>{var b;o("visible-change",r),o("update:visible",r),u&&((b=d.emitVisible)==null||b.call(d,r,u.uid)),B(()=>{e.scrollTop&&r&&s(c)&&s(c).scrollTop()})},{immediate:!1});function j(r){return A(this,null,function*(){var b,Z;if(r==null||r.stopPropagation(),!((Z=(b=r.target)==null?void 0:b.classList)==null?void 0:Z.contains(t+"-close--custom"))){if(e.closeFunc&&oe(e.closeFunc)){const ge=yield e.closeFunc();i.value=!ge;return}i.value=!1,o("cancel",r)}})}function T(r){l.value=Be(s(l)||{},r),Reflect.has(r,"visible")&&(i.value=!!r.visible),Reflect.has(r,"defaultFullscreen")&&(C.value=!!r.defaultFullscreen)}function D(r){o("ok",r)}function N(r){o("height-change",r)}function W(r){n.value=r}function L(r){!e.canFullscreen||(r.stopPropagation(),p(r))}return{handleCancel:j,getBindValue:k,getProps:F,handleFullScreen:p,fullScreenRef:C,getMergeProps:f,handleOk:D,visibleRef:i,omit:J,modalWrapperRef:c,handleExtHeight:W,handleHeightChange:N,handleTitleDbClick:L,getWrapperHeight:$}}});function ht(e,o,a,i,l,c){const t=y("ModalClose"),n=y("ModalHeader"),d=y("ModalFooter"),u=y("ModalWrapper"),f=y("Modal");return v(),O(f,E(e.getBindValue,{onCancel:e.handleCancel}),re({default:m(()=>[H(u,E({useWrapper:e.getProps.useWrapper,footerOffset:e.wrapperFooterOffset,fullScreen:e.fullScreenRef,ref:"modalWrapperRef",loading:e.getProps.loading,"loading-tip":e.getProps.loadingTip,minHeight:e.getProps.minHeight,height:e.getWrapperHeight,visible:e.visibleRef,modalFooterHeight:e.footer!==void 0&&!e.footer?0:void 0},e.omit(e.getProps.wrapperProps,"visible","height","modalFooterHeight"),{onExtHeight:e.handleExtHeight,onHeightChange:e.handleHeightChange}),{default:m(()=>[P(e.$slots,"default")]),_:3},16,["useWrapper","footerOffset","fullScreen","loading","loading-tip","minHeight","height","visible","modalFooterHeight","onExtHeight","onHeightChange"])]),_:2},[e.$slots.closeIcon?void 0:{name:"closeIcon",fn:m(()=>[H(t,{canFullscreen:e.getProps.canFullscreen,fullScreen:e.fullScreenRef,onCancel:e.handleCancel,onFullscreen:e.handleFullScreen},null,8,["canFullscreen","fullScreen","onCancel","onFullscreen"])])},e.$slots.title?void 0:{name:"title",fn:m(()=>[H(n,{helpMessage:e.getProps.helpMessage,title:e.getMergeProps.title,onDblclick:e.handleTitleDbClick},null,8,["helpMessage","title","onDblclick"])])},e.$slots.footer?void 0:{name:"footer",fn:m(()=>[H(d,E(e.getBindValue,{onOk:e.handleOk,onCancel:e.handleCancel}),re({_:2},[ie(Object.keys(e.$slots),p=>({name:p,fn:m(h=>[P(e.$slots,p,ce(ue(h||{})))])}))]),1040,["onOk","onCancel"])])},ie(Object.keys(e.omit(e.$slots,"default")),p=>({name:p,fn:m(h=>[P(e.$slots,p,ce(ue(h||{})))])}))]),1040,["onCancel"])}var yt=_(mt,[["render",ht]]);const R=de({}),Q=de({});function St(){const e=g(null),o=g(!1),a=g("");function i(t,n){if(!K())throw new Error("useModal() can only be used inside setup() or functional components!");a.value=n,se(()=>{e.value=null,o.value=!1,R[s(a)]=null}),!(s(o)&&Oe()&&t===s(e))&&(e.value=t,o.value=!0,t.emitVisible=(d,u)=>{Q[u]=d})}const l=()=>{const t=s(e);return t||le("useModal instance is undefined!"),t},c={setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},getVisible:S(()=>Q[~~s(a)]),redoModalHeight:()=>{var t,n;(n=(t=l())==null?void 0:t.redoModalHeight)==null||n.call(t)},openModal:(t=!0,n,d=!0)=>{var p;if((p=l())==null||p.setModalProps({visible:t}),!n)return;const u=s(a);if(d){R[u]=null,R[u]=z(n);return}Ue(z(R[u]),z(n))||(R[u]=z(n))},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})}};return[i,c]}const Ft=e=>{const o=g(null),a=K(),i=g(""),l=()=>{const t=s(o);return t||le("useModalInner instance is undefined!"),t},c=(t,n)=>{Ye(()=>{o.value=null}),i.value=n,o.value=t,a==null||a.emit("register",t,n)};return I(()=>{const t=R[s(i)];!t||!e||!oe(e)||B(()=>{e(t)})}),[c,{changeLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({loading:t})},getVisible:S(()=>Q[~~s(i)]),changeOkLoading:(t=!0)=>{var n;(n=l())==null||n.setModalProps({confirmLoading:t})},closeModal:()=>{var t;(t=l())==null||t.setModalProps({visible:!1})},setModalProps:t=>{var n;(n=l())==null||n.setModalProps(t)},redoModalHeight:()=>{var n;const t=(n=l())==null?void 0:n.redoModalHeight;t&&t()}}]},kt=Pe(yt);export{kt as B,Ft as a,St as b,Ht as u};
