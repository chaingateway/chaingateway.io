import{j as t}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.BIIuLtGZ.js";import{C as ye,a as Ce,b as je,c as Se,d as Te,e as Ae,f as ke,g as Re}from"./index.qJL8tWwX.js";import{d as _e,c as Ee,P as E,b as j}from"./index.NfHv2fSQ.js";import{P as L}from"./index.8Fs9o3Lo.js";import{u as k}from"./index.C2ovpW4z.js";import{u as C}from"./index.BYgb-DOb.js";import{u as Pe}from"./index.gm_U_fpi.js";import{c as Ne}from"./index.BdQq_4o_.js";import{c as X}from"./utils.CDN07tui.js";import{T as qe,a as Oe,b as De}from"./tabs.CXZOdFym.js";import{c as Ie,f as re,d as se,J as He,u as I,M as ne,e as Ye,b as Le,g as Ue,h as z,m as Be}from"./proxy.CsUehZFW.js";import{B as Z}from"./button.NxUmuIcs.js";import"./iconBase.r92-bMmI.js";import"./check.mYDd3Fjn.js";import"./createLucideIcon.BvtyDlwS.js";import"./preload-helper.zdLyEv6w.js";import"./index.CNQQzEnM.js";import"./index.B04Pf2oS.js";import"./index.CG0cxJ3o.js";import"./index.D3WsJFcM.js";import"./index.EoS_Dwas.js";function Fe(e,r){return c.useReducer((o,a)=>r[o][a]??o,e)}var $="ScrollArea",[ae,It]=Ee($),[We,g]=ae($),ie=c.forwardRef((e,r)=>{const{__scopeScrollArea:o,type:a="hover",dir:n,scrollHideDelay:s=600,...i}=e,[l,d]=c.useState(null),[h,p]=c.useState(null),[m,u]=c.useState(null),[f,v]=c.useState(null),[R,F]=c.useState(null),[y,P]=c.useState(0),[W,N]=c.useState(0),[q,_]=c.useState(!1),[O,D]=c.useState(!1),b=k(r,S=>d(S)),x=_e(n);return t.jsx(We,{scope:o,type:a,dir:x,scrollHideDelay:s,scrollArea:l,viewport:h,onViewportChange:p,content:m,onContentChange:u,scrollbarX:f,onScrollbarXChange:v,scrollbarXEnabled:q,onScrollbarXEnabledChange:_,scrollbarY:R,onScrollbarYChange:F,scrollbarYEnabled:O,onScrollbarYEnabledChange:D,onCornerWidthChange:P,onCornerHeightChange:N,children:t.jsx(E.div,{dir:x,...i,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":y+"px","--radix-scroll-area-corner-height":W+"px",...e.style}})})});ie.displayName=$;var ce="ScrollAreaViewport",le=c.forwardRef((e,r)=>{const{__scopeScrollArea:o,children:a,nonce:n,...s}=e,i=g(ce,o),l=c.useRef(null),d=k(r,l,i.onViewportChange);return t.jsxs(t.Fragment,{children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),t.jsx(E.div,{"data-radix-scroll-area-viewport":"",...s,ref:d,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...e.style},children:t.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});le.displayName=ce;var w="ScrollAreaScrollbar",de=c.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=g(w,e.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:i}=n,l=e.orientation==="horizontal";return c.useEffect(()=>(l?s(!0):i(!0),()=>{l?s(!1):i(!1)}),[l,s,i]),n.type==="hover"?t.jsx(ze,{...a,ref:r,forceMount:o}):n.type==="scroll"?t.jsx(Ve,{...a,ref:r,forceMount:o}):n.type==="auto"?t.jsx(pe,{...a,ref:r,forceMount:o}):n.type==="always"?t.jsx(K,{...a,ref:r}):null});de.displayName=w;var ze=c.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=g(w,e.__scopeScrollArea),[s,i]=c.useState(!1);return c.useEffect(()=>{const l=n.scrollArea;let d=0;if(l){const h=()=>{window.clearTimeout(d),i(!0)},p=()=>{d=window.setTimeout(()=>i(!1),n.scrollHideDelay)};return l.addEventListener("pointerenter",h),l.addEventListener("pointerleave",p),()=>{window.clearTimeout(d),l.removeEventListener("pointerenter",h),l.removeEventListener("pointerleave",p)}}},[n.scrollArea,n.scrollHideDelay]),t.jsx(L,{present:o||s,children:t.jsx(pe,{"data-state":s?"visible":"hidden",...a,ref:r})})}),Ve=c.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=g(w,e.__scopeScrollArea),s=e.orientation==="horizontal",i=B(()=>d("SCROLL_END"),100),[l,d]=Fe("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return c.useEffect(()=>{if(l==="idle"){const h=window.setTimeout(()=>d("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(h)}},[l,n.scrollHideDelay,d]),c.useEffect(()=>{const h=n.viewport,p=s?"scrollLeft":"scrollTop";if(h){let m=h[p];const u=()=>{const f=h[p];m!==f&&(d("SCROLL"),i()),m=f};return h.addEventListener("scroll",u),()=>h.removeEventListener("scroll",u)}},[n.viewport,s,d,i]),t.jsx(L,{present:o||l!=="hidden",children:t.jsx(K,{"data-state":l==="hidden"?"hidden":"visible",...a,ref:r,onPointerEnter:j(e.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:j(e.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),pe=c.forwardRef((e,r)=>{const o=g(w,e.__scopeScrollArea),{forceMount:a,...n}=e,[s,i]=c.useState(!1),l=e.orientation==="horizontal",d=B(()=>{if(o.viewport){const h=o.viewport.offsetWidth<o.viewport.scrollWidth,p=o.viewport.offsetHeight<o.viewport.scrollHeight;i(l?h:p)}},10);return A(o.viewport,d),A(o.content,d),t.jsx(L,{present:a||s,children:t.jsx(K,{"data-state":s?"visible":"hidden",...n,ref:r})})}),K=c.forwardRef((e,r)=>{const{orientation:o="vertical",...a}=e,n=g(w,e.__scopeScrollArea),s=c.useRef(null),i=c.useRef(0),[l,d]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=be(l.viewport,l.content),p={...a,sizes:l,onSizesChange:d,hasThumb:h>0&&h<1,onThumbChange:u=>s.current=u,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:u=>i.current=u};function m(u,f){return Je(u,i.current,l,f)}return o==="horizontal"?t.jsx(Me,{...p,ref:r,onThumbPositionChange:()=>{if(n.viewport&&s.current){const u=n.viewport.scrollLeft,f=Q(u,l,n.dir);s.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollLeft=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollLeft=m(u,n.dir))}}):o==="vertical"?t.jsx(Xe,{...p,ref:r,onThumbPositionChange:()=>{if(n.viewport&&s.current){const u=n.viewport.scrollTop,f=Q(u,l);s.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollTop=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollTop=m(u))}}):null}),Me=c.forwardRef((e,r)=>{const{sizes:o,onSizesChange:a,...n}=e,s=g(w,e.__scopeScrollArea),[i,l]=c.useState(),d=c.useRef(null),h=k(r,d,s.onScrollbarXChange);return c.useEffect(()=>{d.current&&l(getComputedStyle(d.current))},[d]),t.jsx(he,{"data-orientation":"horizontal",...n,ref:h,sizes:o,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":U(o)+"px",...e.style},onThumbPointerDown:p=>e.onThumbPointerDown(p.x),onDragScroll:p=>e.onDragScroll(p.x),onWheelScroll:(p,m)=>{if(s.viewport){const u=s.viewport.scrollLeft+p.deltaX;e.onWheelScroll(u),xe(u,m)&&p.preventDefault()}},onResize:()=>{d.current&&s.viewport&&i&&a({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:Y(i.paddingLeft),paddingEnd:Y(i.paddingRight)}})}})}),Xe=c.forwardRef((e,r)=>{const{sizes:o,onSizesChange:a,...n}=e,s=g(w,e.__scopeScrollArea),[i,l]=c.useState(),d=c.useRef(null),h=k(r,d,s.onScrollbarYChange);return c.useEffect(()=>{d.current&&l(getComputedStyle(d.current))},[d]),t.jsx(he,{"data-orientation":"vertical",...n,ref:h,sizes:o,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":U(o)+"px",...e.style},onThumbPointerDown:p=>e.onThumbPointerDown(p.y),onDragScroll:p=>e.onDragScroll(p.y),onWheelScroll:(p,m)=>{if(s.viewport){const u=s.viewport.scrollTop+p.deltaY;e.onWheelScroll(u),xe(u,m)&&p.preventDefault()}},onResize:()=>{d.current&&s.viewport&&i&&a({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:Y(i.paddingTop),paddingEnd:Y(i.paddingBottom)}})}})}),[$e,ue]=ae(w),he=c.forwardRef((e,r)=>{const{__scopeScrollArea:o,sizes:a,hasThumb:n,onThumbChange:s,onThumbPointerUp:i,onThumbPointerDown:l,onThumbPositionChange:d,onDragScroll:h,onWheelScroll:p,onResize:m,...u}=e,f=g(w,o),[v,R]=c.useState(null),F=k(r,b=>R(b)),y=c.useRef(null),P=c.useRef(""),W=f.viewport,N=a.content-a.viewport,q=C(p),_=C(d),O=B(m,10);function D(b){if(y.current){const x=b.clientX-y.current.left,S=b.clientY-y.current.top;h({x,y:S})}}return c.useEffect(()=>{const b=x=>{const S=x.target;v?.contains(S)&&q(x,N)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[W,v,N,q]),c.useEffect(_,[a,_]),A(v,O),A(f.content,O),t.jsx($e,{scope:o,scrollbar:v,hasThumb:n,onThumbChange:C(s),onThumbPointerUp:C(i),onThumbPositionChange:_,onThumbPointerDown:C(l),children:t.jsx(E.div,{...u,ref:F,style:{position:"absolute",...u.style},onPointerDown:j(e.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),y.current=v.getBoundingClientRect(),P.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),D(b))}),onPointerMove:j(e.onPointerMove,D),onPointerUp:j(e.onPointerUp,b=>{const x=b.target;x.hasPointerCapture(b.pointerId)&&x.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=P.current,f.viewport&&(f.viewport.style.scrollBehavior=""),y.current=null})})})}),H="ScrollAreaThumb",me=c.forwardRef((e,r)=>{const{forceMount:o,...a}=e,n=ue(H,e.__scopeScrollArea);return t.jsx(L,{present:o||n.hasThumb,children:t.jsx(Ke,{ref:r,...a})})}),Ke=c.forwardRef((e,r)=>{const{__scopeScrollArea:o,style:a,...n}=e,s=g(H,o),i=ue(H,o),{onThumbPositionChange:l}=i,d=k(r,m=>i.onThumbChange(m)),h=c.useRef(void 0),p=B(()=>{h.current&&(h.current(),h.current=void 0)},100);return c.useEffect(()=>{const m=s.viewport;if(m){const u=()=>{if(p(),!h.current){const f=Ze(m,l);h.current=f,l()}};return l(),m.addEventListener("scroll",u),()=>m.removeEventListener("scroll",u)}},[s.viewport,p,l]),t.jsx(E.div,{"data-state":i.hasThumb?"visible":"hidden",...n,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:j(e.onPointerDownCapture,m=>{const f=m.target.getBoundingClientRect(),v=m.clientX-f.left,R=m.clientY-f.top;i.onThumbPointerDown({x:v,y:R})}),onPointerUp:j(e.onPointerUp,i.onThumbPointerUp)})});me.displayName=H;var G="ScrollAreaCorner",fe=c.forwardRef((e,r)=>{const o=g(G,e.__scopeScrollArea),a=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&a?t.jsx(Ge,{...e,ref:r}):null});fe.displayName=G;var Ge=c.forwardRef((e,r)=>{const{__scopeScrollArea:o,...a}=e,n=g(G,o),[s,i]=c.useState(0),[l,d]=c.useState(0),h=!!(s&&l);return A(n.scrollbarX,()=>{const p=n.scrollbarX?.offsetHeight||0;n.onCornerHeightChange(p),d(p)}),A(n.scrollbarY,()=>{const p=n.scrollbarY?.offsetWidth||0;n.onCornerWidthChange(p),i(p)}),h?t.jsx(E.div,{...a,ref:r,style:{width:s,height:l,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Y(e){return e?parseInt(e,10):0}function be(e,r){const o=e/r;return isNaN(o)?0:o}function U(e){const r=be(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-o)*r;return Math.max(a,18)}function Je(e,r,o,a="ltr"){const n=U(o),s=n/2,i=r||s,l=n-i,d=o.scrollbar.paddingStart+i,h=o.scrollbar.size-o.scrollbar.paddingEnd-l,p=o.content-o.viewport,m=a==="ltr"?[0,p]:[p*-1,0];return ge([d,h],m)(e)}function Q(e,r,o="ltr"){const a=U(r),n=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,s=r.scrollbar.size-n,i=r.content-r.viewport,l=s-a,d=o==="ltr"?[0,i]:[i*-1,0],h=Ne(e,d);return ge([0,i],[0,l])(h)}function ge(e,r){return o=>{if(e[0]===e[1]||r[0]===r[1])return r[0];const a=(r[1]-r[0])/(e[1]-e[0]);return r[0]+a*(o-e[0])}}function xe(e,r){return e>0&&e<r}var Ze=(e,r=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},a=0;return(function n(){const s={left:e.scrollLeft,top:e.scrollTop},i=o.left!==s.left,l=o.top!==s.top;(i||l)&&r(),o=s,a=window.requestAnimationFrame(n)})(),()=>window.cancelAnimationFrame(a)};function B(e,r){const o=C(e),a=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(a.current),[]),c.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(o,r)},[o,r])}function A(e,r){const o=C(r);Pe(()=>{let a=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(a),n.unobserve(e)}}},[e,o])}var Qe=ie,et=le,tt=fe;function ot({className:e,children:r,...o}){return t.jsxs(Qe,{"data-slot":"scroll-area",className:X("relative",e),...o,children:[t.jsx(et,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:r}),t.jsx(ve,{}),t.jsx(tt,{})]})}function ve({className:e,orientation:r="vertical",...o}){return t.jsx(de,{"data-slot":"scroll-area-scrollbar",orientation:r,className:X("flex touch-none p-px transition-colors select-none",r==="vertical"&&"h-full w-2.5 border-l border-l-transparent",r==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",e),...o,children:t.jsx(me,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}function rt(...e){const r=!Array.isArray(e[0]),o=r?0:-1,a=e[0+o],n=e[1+o],s=e[2+o],i=e[3+o],l=Ie(n,s,i);return r?l(a):l}function st(e,r,o={}){const a=e.get();let n=null,s=a,i;const l=typeof a=="string"?a.replace(/[\d.-]/g,""):void 0,d=()=>{n&&(n.stop(),n=null)},h=()=>{d();const p=te(e.get()),m=te(s);p!==m&&(n=new He({keyframes:[p,m],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...o,onUpdate:i}))};if(e.attach((p,m)=>{s=p,i=u=>m(ee(u,l)),re.postRender(()=>{h(),e.events.animationStart?.notify(),n?.then(()=>{e.events.animationComplete?.notify()})})},d),se(r)){const p=r.on("change",u=>e.set(ee(u,l))),m=e.on("destroy",p);return()=>{p(),m()}}return d}function ee(e,r){return r?e+r:e}function te(e){return typeof e=="number"?e:parseFloat(e)}function J(e){const r=I(()=>Ye(e)),{isStatic:o}=c.useContext(ne);if(o){const[,a]=c.useState(e);c.useEffect(()=>r.on("change",a),[])}return r}function we(e,r){const o=J(r()),a=()=>o.set(r());return a(),Le(()=>{const n=()=>re.preRender(a,!1,!0),s=e.map(i=>i.on("change",n));return()=>{s.forEach(i=>i()),Ue(a)}}),o}function nt(e){z.current=[],e();const r=we(z.current,e);return z.current=void 0,r}function T(e,r,o,a){if(typeof e=="function")return nt(e);if(o!==void 0&&!Array.isArray(o)&&typeof r!="function")return at(e,r,o,a);const i=typeof r=="function"?r:rt(r,o,a);return Array.isArray(e)?oe(e,i):oe([e],([l])=>i(l))}function oe(e,r){const o=I(()=>[]);return we(e,()=>{o.length=0;const a=e.length;for(let n=0;n<a;n++)o[n]=e[n].get();return r(o)})}function at(e,r,o,a){const n=I(()=>Object.keys(o)),s=I(()=>({}));for(const i of n)s[i]=T(e,r,o[i],a);return s}function it(e,r={}){const{isStatic:o}=c.useContext(ne),a=()=>se(e)?e.get():e;if(o)return T(a);const n=J(a());return c.useInsertionEffect(()=>st(n,e,r),[n,JSON.stringify(r)]),n}function V(e,r={}){return it(e,{type:"spring",...r})}const ct=()=>{const[e,r]=c.useState("create-addresses"),[o,a]=c.useState("javascript"),n=M.find(s=>s.id===e);return t.jsx("section",{className:"py-8 lg:py-32",children:t.jsx("div",{className:"container rounded-lg bg-white/10 p-2 lg:p-8 lg:pt-8 pt-4 shadow-lg backdrop-blur-sm",children:t.jsxs("div",{className:"grid lg:gap-8 lg:grid-cols-3",children:[t.jsxs("div",{className:"mb-4 space-y-3 lg:hidden",children:[t.jsx("select",{className:"bg-background w-full rounded-md border px-3 py-2 text-sm",value:e,onChange:s=>r(s.target.value),children:M.map(s=>t.jsx("option",{value:s.id,children:s.title},s.id))}),t.jsx("select",{className:"bg-background w-full rounded-md border px-3 py-2 text-sm",value:o,onChange:s=>a(s.target.value),children:n?.code.map(s=>t.jsx("option",{value:s.language,children:s.language},s.language))})]}),t.jsx("div",{className:"hidden lg:col-span-1 lg:block",children:t.jsx("div",{className:"space-y-2",children:M.map(s=>t.jsx("div",{className:`cursor-pointer rounded-lg p-4 transition-all ${e===s.id?"bg-muted":"hover:bg-muted"}`,onClick:()=>r(s.id),children:t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"rounded-lg p-2",children:t.jsx("span",{className:`${s.icon} text-primary size-4 size-6`})}),t.jsxs("div",{className:"min-w-0 flex-1",children:[t.jsx("h3",{className:"truncate font-medium",children:s.title}),t.jsx("p",{className:"text-muted-foreground line-clamp-2 text-sm",children:s.description})]})]})},s.id))})}),t.jsx("div",{className:"min-w-0 lg:col-span-2",children:t.jsxs("div",{className:"space-y-6",children:[t.jsx(qe,{value:o,onValueChange:a,children:t.jsx("div",{className:"hidden overflow-x-auto lg:block",children:t.jsx(Oe,{className:"grid w-full min-w-max grid-cols-4 bg-black/30 p-1",children:n?.code.map(s=>t.jsxs(De,{value:s.language,className:"flex items-center gap-2 whitespace-nowrap capitalize",children:[t.jsx("span",{className:`${s.icon} size-4`}),t.jsx("span",{className:"hidden text-white lg:inline",children:s.language})]},s.language))})})}),t.jsx("div",{className:"w-full overflow-hidden",children:t.jsxs(ye,{data:n?.code||[],value:o,className:"w-full",children:[t.jsxs(Ce,{children:[t.jsx(je,{children:s=>t.jsx(Se,{value:s.language,className:"truncate",children:s.filename},s.language)}),t.jsx(Te,{onCopy:()=>console.log("Copied code to clipboard"),onError:()=>console.error("Failed to copy code to clipboard")})]}),t.jsxs(ot,{className:"w-full",children:[t.jsx(Ae,{children:s=>t.jsx(ke,{value:s.language,className:"max-h-96 w-full overflow-x-auto",children:t.jsx(Re,{language:s.language,children:s.code})},s.language)}),t.jsx(ve,{orientation:"horizontal"})]})]})})]})})]})})})},M=[{id:"create-addresses",title:"Create Secure Wallet Addresses",description:"Create password-protected wallets for Ethereum, BSC, Polygon & Tron via the Chaingateway Wallet API.",icon:"icon-[mdi--wallet]",code:[{language:"javascript",filename:"create-address.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Create a password-protected EVM address
// Docs: /developers/tutorials/create-addresses.html

const axios = require('axios');

async function createSecureAddress() {
  const url = 'https://api.chaingateway.io/v2/ethereum/addresses';
  const payload = {
    // Optional: omit password to get privatekey in response (single-use only)
    password: 'your_secure_password',
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });

  console.log('Created address:', response.data);

  // Example response:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Address created",
  //   "data": {
  //     "address": "0xYourNewAddress",
  //     "keystore": "{...}" // only for EVM when password given
  //   }
  // }
}

// For BSC/Polygon just replace /ethereum with /bsc or /polygon
// For Tron replace /ethereum with /tron
createSecureAddress().catch(console.error);`},{language:"python",filename:"create_address.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Create a password-protected EVM address
# Docs: /developers/tutorials/create-addresses.html

import requests

url = "https://api.chaingateway.io/v2/ethereum/addresses"
payload = {
    # Optional: omit password to receive privatekey (for single-use wallets only)
    "password": "your_secure_password"
}
headers = {
    "Accept": "application/json",
    "content-type": "application/json",
    "Authorization": "YOUR_API_TOKEN",
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print("Created address:", data)

# Example response:
# {
#   "status": 201,
#   "ok": true,
#   "message": "Address created",
#   "data": {
#       "address": "0xYourNewAddress",
#       "keystore": "{...}"
#   }
# }`},{language:"ruby",filename:"create_address.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Create a password-protected EVM address
# Docs: /developers/tutorials/create-addresses.html

require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.chaingateway.io/v2/ethereum/addresses')

req = Net::HTTP::Post.new(uri)
req['Accept'] = 'application/json'
req['content-type'] = 'application/json'
req['Authorization'] = 'YOUR_API_TOKEN'
req.body = { password: 'your_secure_password' }.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

data = JSON.parse(res.body)
puts "Created address: #{data}"

# Example response:
# {
#   "status" => 201,
#   "ok" => true,
#   "message" => "Address created",
#   "data" => { "address" => "0xYourNewAddress" }
# }`},{language:"laravel",filename:"CreateAddressController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Create a password-protected EVM address in Laravel
// Docs: /developers/tutorials/create-addresses.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class CreateAddressController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/ethereum/addresses', [
            'password' => 'your_secure_password',
        ]);

        // Example JSON response:
        // {
        //   "status": 201,
        //   "ok": true,
        //   "message": "Address created",
        //   "data": {
        //     "address": "0xYourNewAddress",
        //     "keystore": "{...}"
        //   }
        // }

        return response()->json($response->json());
    }
}`}]},{id:"native-transactions",title:"Create Native Token Transactions",description:"Send ETH, BNB, MATIC, TRX or BTC using a single API call with your Chaingateway wallet.",icon:"icon-[mdi--transfer]",code:[{language:"javascript",filename:"native-tx.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Create a native token transaction (EVM example)
// Docs: /developers/tutorials/create-transactions.html

const axios = require('axios');

async function sendEth() {
  const url = 'https://api.chaingateway.io/v2/ethereum/transactions';
  const payload = {
    from: '0xYourSenderAddress',
    to: '0xRecipientAddress',
    amount: '0.1',
    password: 'YourPassword', // password of the keystore
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });
  console.log('Transaction created:', response.data);

  // Example response:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Succesfully created transaction",
  //   "data": {
  //     "txid": "0x7334...b71f27"
  //   }
  // }
}

// For BSC/Polygon/BTC replace /ethereum with /bsc, /polygon or /bitcoin
sendEth().catch(console.error);`},{language:"python",filename:"native_tx.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Create a native token transaction (EVM example)
# Docs: /developers/tutorials/create-transactions.html

import requests

url = "https://api.chaingateway.io/v2/ethereum/transactions"
payload = {
    "from": "0xYourSenderAddress",
    "to": "0xRecipientAddress",
    "amount": "0.1",
    "password": "YourPassword",
}
headers = {
    "Accept": "application/json",
    "content-type": "application/json",
    "Authorization": "YOUR_API_TOKEN",
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print("Transaction created:", data)

# Example:
# {
#   "status": 201,
#   "ok": true,
#   "message": "Succesfully created transaction",
#   "data": { "txid": "0x7334...b71f27" }
# }`},{language:"ruby",filename:"native_tx.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Create a native token transaction (EVM example)
# Docs: /developers/tutorials/create-transactions.html

require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.chaingateway.io/v2/ethereum/transactions')

req = Net::HTTP::Post.new(uri)
req['Accept'] = 'application/json'
req['content-type'] = 'application/json'
req['Authorization'] = 'YOUR_API_TOKEN'
req.body = {
  from: '0xYourSenderAddress',
  to: '0xRecipientAddress',
  amount: '0.1',
  password: 'YourPassword'
}.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

data = JSON.parse(res.body)
puts "Transaction created: #{data}"

# => {
#   "status" => 201,
#   "ok" => true,
#   "message" => "Succesfully created transaction",
#   "data" => { "txid" => "0x7334...b71f27" }
# }`},{language:"laravel",filename:"NativeTransactionController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Create a native token transaction (EVM example in Laravel)
// Docs: /developers/tutorials/create-transactions.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class NativeTransactionController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/ethereum/transactions', [
            'from' => '0xYourSenderAddress',
            'to' => '0xRecipientAddress',
            'amount' => '0.1',
            'password' => 'YourPassword',
        ]);

        // For Tron native TRX use:
        // https://api.chaingateway.io/v2/tron/transactions
        // and provide "privateKey" instead of "password".

        return response()->json($response->json());
    }
}`}]},{id:"token-transactions",title:"Create ERC20 / BEP20 / TRC20 Token Transfers",description:"Send ERC20, BEP20 and TRC20 tokens with a single API call for any supported network.",icon:"icon-[mdi--cash-fast]",code:[{language:"javascript",filename:"token-tx.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Create ERC20/BEP20/TRC20 token transfer
// Docs: /developers/tutorials/create-token-transactions.html

const axios = require('axios');

async function sendErc20() {
  const url = 'https://api.chaingateway.io/v2/ethereum/transactions/erc20';
  const payload = {
    from: '0xYourSenderAddress',
    to: '0xRecipientAddress',
    amount: '100',
    contractaddress: '0xTokenContractAddress',
    password: 'YourPassword',
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });
  console.log('Token transaction created:', response.data);

  // Example:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Succesfully created transaction",
  //   "data": { "txid": "0x7334...b71f27" }
  // }
}

// For BEP20: /v2/bsc/transactions/bep20
// For TRC20: /v2/tron/transactions/trc20
sendErc20().catch(console.error);`},{language:"python",filename:"token_tx.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Create ERC20/BEP20/TRC20 token transfer
# Docs: /developers/tutorials/create-token-transactions.html

import requests

url = "https://api.chaingateway.io/v2/ethereum/transactions/erc20"
payload = {
    "from": "0xYourSenderAddress",
    "to": "0xRecipientAddress",
    "amount": "100",
    "contractaddress": "0xTokenContractAddress",
    "password": "YourPassword",
}
headers = {
    "Accept": "application/json",
    "content-type": "application/json",
    "Authorization": "YOUR_API_TOKEN",
}

response = requests.post(url, json=payload, headers=headers)
data = response.json()
print("Token transaction created:", data)`},{language:"ruby",filename:"token_tx.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Create ERC20/BEP20/TRC20 token transfer
# Docs: /developers/tutorials/create-token-transactions.html

require 'net/http'
require 'json'
require 'uri'

uri = URI('https://api.chaingateway.io/v2/ethereum/transactions/erc20')

req = Net::HTTP::Post.new(uri)
req['Accept'] = 'application/json'
req['content-type'] = 'application/json'
req['Authorization'] = 'YOUR_API_TOKEN'
req.body = {
  from: '0xYourSenderAddress',
  to: '0xRecipientAddress',
  amount: '100',
  contractaddress: '0xTokenContractAddress',
  password: 'YourPassword'
}.to_json

res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
  http.request(req)
end

data = JSON.parse(res.body)
puts "Token transaction created: #{data}"`},{language:"laravel",filename:"TokenTransactionController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Create ERC20/BEP20/TRC20 token transfer in Laravel
// Docs: /developers/tutorials/create-token-transactions.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class TokenTransactionController extends Controller
{
    public function __invoke(Request $request)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/ethereum/transactions/erc20', [
            'from' => '0xYourSenderAddress',
            'to' => '0xRecipientAddress',
            'amount' => '100',
            'contractaddress' => '0xTokenContractAddress',
            'password' => 'YourPassword',
        ]);

        // For BEP20 use /v2/bsc/transactions/bep20
        // For TRC20 use /v2/tron/transactions/trc20

        return response()->json($response->json());
    }
}`}]},{id:"webhooks",title:"Create & Receive Webhooks",description:"Subscribe to on-chain events and receive real-time payment notifications via Webhooks.",icon:"icon-[mdi--webhook]",code:[{language:"javascript",filename:"webhook.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Webhook receiver + subscription (JavaScript)
// Docs: /developers/tutorials/create-webhooks.html

// 1) Simple Express webhook receiver
const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('Received webhook:', req.body);
  res.status(200).send('Webhook received');
});

app.listen(3000, () => {
  console.log('Webhook receiver listening at http://localhost:3000/webhook');
});

// 2) Subscribe a webhook in Chaingateway
async function subscribeWebhook() {
  const url = 'https://api.chaingateway.io/v2/webhooks';
  const payload = {
    url: 'https://yourdomain.com/webhook',
    from: 'TXSenderAddress',         // optional
    to: 'TXReceiverAddress',         // optional
    contractaddress: '0xTokenContractAddress', // optional
    token_id: '12345',               // required if from/to missing
    type: 'TRC20',                   // TRX, TRC10, TRC20, TRC721
  };

  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.post(url, payload, { headers });
  console.log('Webhook created:', response.data);

  // Example:
  // {
  //   "status": 201,
  //   "ok": true,
  //   "message": "Webhook created",
  //   "data": { "id": "webhook_id" }
  // }
}

subscribeWebhook().catch(console.error);`},{language:"python",filename:"webhook.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Webhook receiver + subscription (Python)
# Docs: /developers/tutorials/create-webhooks.html

from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

# 1) Webhook receiver endpoint
@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    print('Received webhook:', data)
    return jsonify({'status': 'Webhook received'}), 200

# 2) Subscribe webhook at Chaingateway
def subscribe_webhook():
    url = "https://api.chaingateway.io/v2/webhooks"
    payload = {
        "url": "https://yourdomain.com/webhook",
        "from": "TXSenderAddress",
        "to": "TXReceiverAddress",
        "contractaddress": "0xTokenContractAddress",
        "token_id": "12345",
        "type": "TRC20",
    }
    headers = {
        "Accept": "application/json",
        "content-type": "application/json",
        "Authorization": "YOUR_API_TOKEN",
    }
    response = requests.post(url, json=payload, headers=headers)
    print("Webhook created:", response.json())

if __name__ == "__main__":
    # Run receiver (for local testing)
    # app.run(port=3000)
    subscribe_webhook()`},{language:"ruby",filename:"webhook.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Webhook subscription (Ruby example)
# Docs: /developers/tutorials/create-webhooks.html

require 'sinatra'
require 'net/http'
require 'json'
require 'uri'

# 1) Webhook receiver
post '/webhook' do
  payload = JSON.parse(request.body.read)
  STDERR.puts "Received webhook: #{payload.inspect}"
  content_type :json
  { status: 'Webhook received' }.to_json
end

# 2) Subscribe webhook
def subscribe_webhook
  uri = URI('https://api.chaingateway.io/v2/webhooks')

  req = Net::HTTP::Post.new(uri)
  req['Accept'] = 'application/json'
  req['content-type'] = 'application/json'
  req['Authorization'] = 'YOUR_API_TOKEN'
  req.body = {
    url: 'https://yourdomain.com/webhook',
    from: 'TXSenderAddress',
    to: 'TXReceiverAddress',
    contractaddress: '0xTokenContractAddress',
    token_id: '12345',
    type: 'TRC20'
  }.to_json

  res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(req)
  end

  puts "Webhook created: #{res.body}"
end

# subscribe_webhook`},{language:"laravel",filename:"WebhookController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Webhook receiver + subscription (Laravel)
// Docs: /developers/tutorials/create-webhooks.html

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class WebhookController extends Controller
{
    // 1) Webhook receiver
    public function handle(Request $request)
    {
        // Log payload or dispatch job
        Log::info('Chaingateway webhook received', $request->all());

        return response()->json(['status' => 'Webhook received'], 200);
    }

    // 2) Create webhook subscription
    public function subscribe()
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'content-type' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->post('https://api.chaingateway.io/v2/webhooks', [
            'url' => 'https://yourdomain.com/webhook',
            'from' => 'TXSenderAddress',
            'to' => 'TXReceiverAddress',
            'contractaddress' => '0xTokenContractAddress',
            'token_id' => '12345',
            'type' => 'TRC20',
        ]);

        return response()->json($response->json());
    }
}

// routes/web.php
// Route::post('/webhook', [WebhookController::class, 'handle']);
// Route::post('/webhook/subscribe', [WebhookController::class, 'subscribe']);`}]},{id:"decoded-transactions",title:"Fetch Decoded Tron Transactions",description:"Fetch and decode Tron transactions to human-readable data (method, parameters, amounts).",icon:"icon-[mdi--hexadecimal]",code:[{language:"javascript",filename:"decoded-tron-tx.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Fetch a decoded Tron transaction
// Endpoint (Tron): GET /api/v2/tron/transactions/{txid}/decoded
// Great for debugging TRC20 transfers and Paymaster flows.

const axios = require('axios');

async function fetchDecodedTx(txid) {
  const url = \`https://api.chaingateway.io/v2/tron/transactions/\${txid}/decoded\`;

  const headers = {
    Accept: 'application/json',
    Authorization: 'YOUR_API_TOKEN',
  };

  const response = await axios.get(url, { headers });
  console.log('Decoded transaction:', response.data);

  // Example response (structure simplified):
  // {
  //   "status": 200,
  //   "ok": true,
  //   "message": "Successfully decoded transaction",
  //   "data": {
  //     "txid": "YOUR_TXID",
  //     "method": "transfer",
  //     "type": "TRC20",
  //     "from": "TSenderAddress",
  //     "to": "TReceiverAddress",
  //     "amount": "100.000000",
  //     "contractaddress": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
  //     "raw": { ... } // full raw Tron transaction
  //   }
  // }
}

fetchDecodedTx('YOUR_TRON_TXID').catch(console.error);`},{language:"python",filename:"decoded_tron_tx.py",icon:"icon-[devicon--python]",code:`# Chaingateway - Fetch a decoded Tron transaction
# Endpoint: GET /api/v2/tron/transactions/{txid}/decoded

import requests

def fetch_decoded_tx(txid: str):
    url = f"https://api.chaingateway.io/v2/tron/transactions/{txid}/decoded"
    headers = {
        "Accept": "application/json",
        "Authorization": "YOUR_API_TOKEN",
    }
    response = requests.get(url, headers=headers)
    data = response.json()
    print("Decoded transaction:", data)

    # data["data"] will contain decoded fields such as:
    # method, type, from, to, amount, contractaddress, etc.

fetch_decoded_tx("YOUR_TRON_TXID")`},{language:"ruby",filename:"decoded_tron_tx.rb",icon:"icon-[devicon--ruby]",code:`# Chaingateway - Fetch a decoded Tron transaction
# Endpoint: GET /api/v2/tron/transactions/{txid}/decoded

require 'net/http'
require 'json'
require 'uri'

def fetch_decoded_tx(txid)
  uri = URI("https://api.chaingateway.io/v2/tron/transactions/#{txid}/decoded")

  req = Net::HTTP::Get.new(uri)
  req['Accept'] = 'application/json'
  req['Authorization'] = 'YOUR_API_TOKEN'

  res = Net::HTTP.start(uri.hostname, uri.port, use_ssl: true) do |http|
    http.request(req)
  end

  data = JSON.parse(res.body)
  puts "Decoded transaction: #{data}"
end

fetch_decoded_tx('YOUR_TRON_TXID')`},{language:"laravel",filename:"DecodedTronTransactionController.php",icon:"icon-[devicon--laravel]",code:`<?php
// Chaingateway - Fetch a decoded Tron transaction in Laravel
// Endpoint: GET /api/v2/tron/transactions/{txid}/decoded

namespace App\\Http\\Controllers;

use Illuminate\\Http\\Request;
use Illuminate\\Support\\Facades\\Http;

class DecodedTronTransactionController extends Controller
{
    public function show(string $txid)
    {
        $response = Http::withHeaders([
            'Accept' => 'application/json',
            'Authorization' => 'YOUR_API_TOKEN',
        ])->get("https://api.chaingateway.io/v2/tron/transactions/{$txid}/decoded");

        return response()->json($response->json());
    }
}

// routes/web.php
// Route::get('/tron/transactions/{txid}/decoded', [DecodedTronTransactionController::class, 'show']);`}]}],lt=()=>{const e=[{title:"Tron",src:"icon-[token-branded--trx]",href:"#vscod3",icon:"icon-[token-branded--trx]"},{title:"Arbitrum",src:"icon-[token-branded--arbitrum-one]",href:"https://arbitrum.io/",icon:"icon-[token-branded--arbitrum-one]"},{title:"Polygon",src:"icon-[token-branded--matic]",href:"https://polygon.technology/",icon:"icon-[token-branded--matic]"},{title:"Binance Smart Chain",src:"icon-[token-branded--bnb]",href:"https://www.binance.org/en/smartChain",icon:"icon-[token-branded--bnb]"},{title:"Ethereum",src:"icon-[token-branded--eth]",href:"https://ethereum.org/",icon:"icon-[token-branded--eth]"},{title:"Bitcoin",src:"icon-[token-branded--btc]",href:"https://bitcoin.org/en/",icon:"icon-[token-branded--btc]"}];return t.jsx("section",{className:"w-full overflow-hidden lg:py-10 py-6",children:t.jsx("div",{className:"container flex w-full flex-col items-center justify-start px-4",children:t.jsxs("div",{className:"bg-muted container w-fit rounded-4xl",children:[t.jsx(dt,{integrations:e,className:"hidden md:flex"}),t.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 py-4 md:hidden",children:e.map(r=>t.jsx("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center transition-transform hover:scale-105",children:t.jsx("span",{className:`${r.icon} sm:h-12 sm:w-12 h-8 w-8`})},r.title))})]})})})},dt=({integrations:e,className:r})=>{const o=J(1/0);return t.jsx("div",{className:X("flex items-end gap-2 px-6 py-6",r),onMouseMove:a=>o.set(a.pageX),onMouseLeave:()=>o.set(1/0),children:e.map(a=>t.jsx(pt,{integration:a,mouseX:o},a.title))})},pt=({integration:e,mouseX:r})=>{const o=c.useRef(null),a=T(r,l=>{const d=o.current?.getBoundingClientRect()??{x:0,width:0};return l-d.x-d.width/2}),n=V(T(a,[-100,0,100],[64,85,64]),{mass:.1,stiffness:150,damping:12}),s=V(T(a,[-100,0,100],[64,94,64]),{mass:.1,stiffness:150,damping:12}),i=V(T(a,[-150,0,150],[0,-12,0]),{mass:.1,stiffness:150,damping:12});return t.jsx("div",{ref:o,className:"relative flex h-16 w-16 flex-col items-center justify-end",children:t.jsx(Be.div,{style:{width:n,height:s,y:i,transformOrigin:"bottom center"},className:"absolute bottom-0 flex items-center justify-center rounded-xl",children:t.jsx("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"h-full w-full",children:t.jsx("span",{className:`${e.icon} h-16 w-16`})})})})};function Ht(){return t.jsx("section",{className:"section-padding relative",children:t.jsxs("div",{className:"relative lg:container",children:[t.jsxs("div",{className:"flex flex-col justify-between gap-10 lg:flex-row lg:items-center",children:[t.jsxs("div",{className:"flex max-w-3xl flex-1 flex-col items-start gap-5",children:[t.jsxs("div",{className:"flex items-center rounded-full border p-1 text-xs",children:[t.jsx("span",{className:"bg-muted rounded-full px-3 py-1",children:"7 chains"}),t.jsx("span",{className:"px-3",children:"Bitcoin, Ethereum, TRON, Solana, BNB Chain, Polygon & Arbitrum"})]}),t.jsxs("h1",{className:"text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl",children:["The"," ",t.jsx("span",{className:"text-gradient",children:"Unified Blockchain API  "})," ","for Crypto Payments & Webhooks"]}),t.jsx("p",{className:"text-muted-foreground leading-snug md:text-lg lg:text-xl",children:"One REST API to send tokens, detect deposits, and trigger webhooks for on-chain events — built for production teams."}),t.jsx(lt,{})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{className:"flex gap-4.5",children:[t.jsx(Z,{className:"flex-1 md:min-w-45",asChild:!0,"data-rybbit-event":"register_click","data-rybbit-prop-source":"hero_cta",children:t.jsx("a",{href:"https://app.chaingateway.io/register",children:"Start 7-day free trial"})}),t.jsx(Z,{className:"flex-1 md:min-w-45",variant:"outline",asChild:!0,"data-rybbit-event":"hero_read_docs_click",children:t.jsx("a",{href:"/stage/conversion-plan/developers/",children:"Read the docs"})})]}),t.jsx("div",{className:"text-center text-sm",children:"No card required • Go live in hours"})]})]}),t.jsx(ct,{}),t.jsxs("p",{className:"landing-prose prose dark:prose-invert mx-auto max-w-3xl border-l-2 border-primary/40 pl-4 text-sm text-muted-foreground",children:["Every plan starts with a 7-day free trial — no credit card, no KYC."," ",t.jsx("a",{href:"https://app.chaingateway.io/register",className:"underline underline-offset-4 hover:text-foreground",children:"Create your API key"})," ","and run the example above against your own account."]}),t.jsx(ut,{className:"absolute top-0 right-0 -z-10 origin-right scale-30 md:scale-50 lg:scale-100"})]})})}function ut({...e}){return t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:1342,height:1199,fill:"none",...e,children:[t.jsx("path",{fill:"#D9D9D9",d:"M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"}),t.jsx("path",{fill:"url(#a)",d:"M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"}),t.jsx("path",{stroke:"url(#b)",strokeWidth:.631,d:"M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"}),t.jsx("path",{fill:"url(#c)",d:"m875.715 420.318 203.405-357.96c50.52-10.487-50.57 96.246 0 186.332 80.45 143.304 298.36 312.903 256.86 419.243-67.58 173.19-306.7 49.523-396.529 0-71.863-39.618-72.434-181.585-63.736-247.615Z"}),t.jsx("path",{fill:"url(#d)",d:"m46.623 746.37 908.336-619.388 130.381-66.714-46.89 196.709-156.685 413.622c-27.829 50.066-111.545 120.16-223.775 0-98.592-105.557-466.882-3.975-611.367 75.771L.814 777.607c10.115-9.59 25.82-20.205 45.809-31.237Z"}),t.jsx("g",{filter:"url(#e)",children:t.jsx("path",{fill:"url(#f)",d:"m883.093 595.649 164.727-565.43 4.66 326.52-169.387 238.91Z"})}),t.jsxs("defs",{children:[t.jsxs("linearGradient",{id:"a",x1:1027.3,x2:1027.73,y1:587.333,y2:1198.11,gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{offset:0,stopColor:"#9D83E7"}),t.jsx("stop",{offset:.516,stopColor:"#D445E7"})]}),t.jsxs("linearGradient",{id:"b",x1:1027.3,x2:1027.3,y1:587.333,y2:1197.77,gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#10CBF4"}),t.jsx("stop",{offset:1,stopColor:"#10CBF4",stopOpacity:0})]}),t.jsxs("linearGradient",{id:"c",x1:871.897,x2:1188.44,y1:575.509,y2:575.628,gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#9259ED"}),t.jsx("stop",{offset:.514,stopColor:"#CF54EE"}),t.jsx("stop",{offset:1,stopColor:"#FB8684"})]}),t.jsxs("linearGradient",{id:"d",x1:676.669,x2:677.051,y1:60.268,y2:757.516,gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#B956EE"}),t.jsx("stop",{offset:1,stopColor:"#9672FF"})]}),t.jsxs("linearGradient",{id:"f",x1:1020.81,x2:814.267,y1:202.771,y2:477.618,gradientUnits:"userSpaceOnUse",children:[t.jsx("stop",{stopColor:"#FB07FF"}),t.jsx("stop",{offset:.505,stopColor:"#FF6847"}),t.jsx("stop",{offset:1,stopColor:"#FF474A"})]}),t.jsxs("filter",{id:"e",width:228.968,height:625.009,x:853.303,y:.429,colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[t.jsx("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),t.jsx("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),t.jsx("feGaussianBlur",{result:"effect1_foregroundBlur_401_39842",stdDeviation:14.895})]})]})]})}export{Ht as default};
