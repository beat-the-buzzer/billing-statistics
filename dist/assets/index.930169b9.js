var m=(t,e,n)=>new Promise((s,r)=>{var l=a=>{try{u(n.next(a))}catch(c){r(c)}},o=a=>{try{u(n.throw(a))}catch(c){r(c)}},u=a=>a.done?s(a.value):Promise.resolve(a.value).then(l,o);u((n=n.apply(t,e)).next())});import{_ as C,b as I,j as h,a as z,w as S}from"./index.8f11b981.js";import{P as F,Q as A,al as g,j as w,b8 as j,$ as T,t as k,u as d,ah as N,r as f,af as P,A as y,aS as R,a0 as p,B as _,a1 as $,a5 as v,ad as D,J as O,a4 as b,aC as E,ao as V,a6 as q,aB as J,aR as L,w as Q}from"./vendor.8011da67.js";function U(t,e="value",n="change",s){const r=N(),l=r==null?void 0:r.emit,o=F({value:t[e]}),u=A(o),a=i=>{o.value=i};return g(()=>{o.value=t[e]}),[w({get(){return o.value},set(i){j(i,u.value)||(o.value=i,T(()=>{l==null||l(n,i,...k(d(s))||[])}))}}),a,u]}function x(t){const e=f(t),n=f(!1);let s;function r(){s&&window.clearInterval(s)}function l(){n.value=!1,r(),s=null}function o(){d(n)||!!s||(n.value=!0,s=setInterval(()=>{d(e)===1?(l(),e.value=t):e.value-=1},1e3))}function u(){e.value=t,l()}function a(){u(),o()}return P(()=>{u()}),{start:o,reset:u,restart:a,clear:r,stop:l,currentCount:e,isStart:n}}const G={value:{type:[Object,Number,String,Array]},count:{type:Number,default:60},beforeStartFunc:{type:Function,default:null}},H=y({name:"CountButton",components:{Button:R},props:G,setup(t){const e=f(!1),{currentCount:n,isStart:s,start:r,reset:l}=x(t.count),{t:o}=I(),u=w(()=>d(s)?o("component.countdown.sendText",[d(n)]):o("component.countdown.normalText"));g(()=>{t.value===void 0&&l()});function a(){return m(this,null,function*(){const{beforeStartFunc:c}=t;if(c&&h(c)){e.value=!0;try{(yield c())&&r()}finally{e.value=!1}}else r()})}return{handleStart:a,currentCount:n,loading:e,getButtonText:u,isStart:s}}});function K(t,e,n,s,r,l){const o=p("Button");return _(),$(o,b(t.$attrs,{disabled:t.isStart,onClick:t.handleStart,loading:t.loading}),{default:v(()=>[D(O(t.getButtonText),1)]),_:1},16,["disabled","onClick","loading"])}var B=C(H,[["render",K]]);const M={value:{type:String},size:{type:String,validator:t=>["default","large","small"].includes(t)},count:{type:Number,default:60},sendCodeApi:{type:Function,default:null}},W=y({name:"CountDownInput",components:{CountButton:B},inheritAttrs:!1,props:M,setup(t){const{prefixCls:e}=z("countdown-input"),[n]=U(t);return{prefixCls:e,state:n}}});function X(t,e,n,s,r,l){const o=p("CountButton"),u=p("a-input");return _(),$(u,b(t.$attrs,{class:t.prefixCls,size:t.size,value:t.state}),E({addonAfter:v(()=>[Q(o,{size:t.size,count:t.count,value:t.state,beforeStartFunc:t.sendCodeApi},null,8,["size","count","value","beforeStartFunc"])]),_:2},[V(Object.keys(t.$slots).filter(a=>a!=="addonAfter"),a=>({name:a,fn:v(c=>[q(t.$slots,a,J(L(c||{})))])}))]),1040,["class","size","value"])}var Y=C(W,[["render",X]]);const nt=S(Y);S(B);export{nt as C,U as u};
