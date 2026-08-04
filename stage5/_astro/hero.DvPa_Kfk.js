import{j as e}from"./jsx-runtime.D_zvdyIk.js";import{r as i}from"./index.BIIuLtGZ.js";import{C as pe,a as ue,b as he,c as me,d as fe,e as be,f as xe,g as ge}from"./index.DH1Z5GEJ.js";import{d as ve,c as we,P as _,b as C}from"./index.NfHv2fSQ.js";import{P as Y}from"./index.8Fs9o3Lo.js";import{u as A}from"./index.C2ovpW4z.js";import{u as j}from"./index.BYgb-DOb.js";import{u as ye}from"./index.gm_U_fpi.js";import{c as je}from"./index.BdQq_4o_.js";import{c as X}from"./utils.CDN07tui.js";import{T as Ce,a as Se,b as Te}from"./tabs.CXZOdFym.js";import{u as Ae,a as D,b as z}from"./use-spring.CqY1A-XM.js";import{m as ke}from"./proxy.De8B0uqP.js";import{B as K}from"./button.NxUmuIcs.js";import"./iconBase.r92-bMmI.js";import"./check.mYDd3Fjn.js";import"./createLucideIcon.BvtyDlwS.js";import"./preload-helper.zsT1jeNn.js";import"./index.CNQQzEnM.js";import"./index.B04Pf2oS.js";import"./index.CG0cxJ3o.js";import"./index.D3WsJFcM.js";import"./index.EoS_Dwas.js";function Re(t,s){return i.useReducer((r,a)=>s[r][a]??r,t)}var M="ScrollArea",[J,gt]=we(M),[_e,x]=J(M),Z=i.forwardRef((t,s)=>{const{__scopeScrollArea:r,type:a="hover",dir:n,scrollHideDelay:o=600,...c}=t,[l,d]=i.useState(null),[h,p]=i.useState(null),[m,u]=i.useState(null),[f,v]=i.useState(null),[k,B]=i.useState(null),[y,E]=i.useState(0),[W,P]=i.useState(0),[N,R]=i.useState(!1),[q,O]=i.useState(!1),b=A(s,S=>d(S)),g=ve(n);return e.jsx(_e,{scope:r,type:a,dir:g,scrollHideDelay:o,scrollArea:l,viewport:h,onViewportChange:p,content:m,onContentChange:u,scrollbarX:f,onScrollbarXChange:v,scrollbarXEnabled:N,onScrollbarXEnabledChange:R,scrollbarY:k,onScrollbarYChange:B,scrollbarYEnabled:q,onScrollbarYEnabledChange:O,onCornerWidthChange:E,onCornerHeightChange:P,children:e.jsx(_.div,{dir:g,...c,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":y+"px","--radix-scroll-area-corner-height":W+"px",...t.style}})})});Z.displayName=M;var Q="ScrollAreaViewport",ee=i.forwardRef((t,s)=>{const{__scopeScrollArea:r,children:a,nonce:n,...o}=t,c=x(Q,r),l=i.useRef(null),d=A(s,l,c.onViewportChange);return e.jsxs(e.Fragment,{children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:n}),e.jsx(_.div,{"data-radix-scroll-area-viewport":"",...o,ref:d,style:{overflowX:c.scrollbarXEnabled?"scroll":"hidden",overflowY:c.scrollbarYEnabled?"scroll":"hidden",...t.style},children:e.jsx("div",{ref:c.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});ee.displayName=Q;var w="ScrollAreaScrollbar",te=i.forwardRef((t,s)=>{const{forceMount:r,...a}=t,n=x(w,t.__scopeScrollArea),{onScrollbarXEnabledChange:o,onScrollbarYEnabledChange:c}=n,l=t.orientation==="horizontal";return i.useEffect(()=>(l?o(!0):c(!0),()=>{l?o(!1):c(!1)}),[l,o,c]),n.type==="hover"?e.jsx(Ee,{...a,ref:s,forceMount:r}):n.type==="scroll"?e.jsx(Pe,{...a,ref:s,forceMount:r}):n.type==="auto"?e.jsx(oe,{...a,ref:s,forceMount:r}):n.type==="always"?e.jsx(V,{...a,ref:s}):null});te.displayName=w;var Ee=i.forwardRef((t,s)=>{const{forceMount:r,...a}=t,n=x(w,t.__scopeScrollArea),[o,c]=i.useState(!1);return i.useEffect(()=>{const l=n.scrollArea;let d=0;if(l){const h=()=>{window.clearTimeout(d),c(!0)},p=()=>{d=window.setTimeout(()=>c(!1),n.scrollHideDelay)};return l.addEventListener("pointerenter",h),l.addEventListener("pointerleave",p),()=>{window.clearTimeout(d),l.removeEventListener("pointerenter",h),l.removeEventListener("pointerleave",p)}}},[n.scrollArea,n.scrollHideDelay]),e.jsx(Y,{present:r||o,children:e.jsx(oe,{"data-state":o?"visible":"hidden",...a,ref:s})})}),Pe=i.forwardRef((t,s)=>{const{forceMount:r,...a}=t,n=x(w,t.__scopeScrollArea),o=t.orientation==="horizontal",c=U(()=>d("SCROLL_END"),100),[l,d]=Re("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return i.useEffect(()=>{if(l==="idle"){const h=window.setTimeout(()=>d("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(h)}},[l,n.scrollHideDelay,d]),i.useEffect(()=>{const h=n.viewport,p=o?"scrollLeft":"scrollTop";if(h){let m=h[p];const u=()=>{const f=h[p];m!==f&&(d("SCROLL"),c()),m=f};return h.addEventListener("scroll",u),()=>h.removeEventListener("scroll",u)}},[n.viewport,o,d,c]),e.jsx(Y,{present:r||l!=="hidden",children:e.jsx(V,{"data-state":l==="hidden"?"hidden":"visible",...a,ref:s,onPointerEnter:C(t.onPointerEnter,()=>d("POINTER_ENTER")),onPointerLeave:C(t.onPointerLeave,()=>d("POINTER_LEAVE"))})})}),oe=i.forwardRef((t,s)=>{const r=x(w,t.__scopeScrollArea),{forceMount:a,...n}=t,[o,c]=i.useState(!1),l=t.orientation==="horizontal",d=U(()=>{if(r.viewport){const h=r.viewport.offsetWidth<r.viewport.scrollWidth,p=r.viewport.offsetHeight<r.viewport.scrollHeight;c(l?h:p)}},10);return T(r.viewport,d),T(r.content,d),e.jsx(Y,{present:a||o,children:e.jsx(V,{"data-state":o?"visible":"hidden",...n,ref:s})})}),V=i.forwardRef((t,s)=>{const{orientation:r="vertical",...a}=t,n=x(w,t.__scopeScrollArea),o=i.useRef(null),c=i.useRef(0),[l,d]=i.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),h=ie(l.viewport,l.content),p={...a,sizes:l,onSizesChange:d,hasThumb:h>0&&h<1,onThumbChange:u=>o.current=u,onThumbPointerUp:()=>c.current=0,onThumbPointerDown:u=>c.current=u};function m(u,f){return He(u,c.current,l,f)}return r==="horizontal"?e.jsx(Ne,{...p,ref:s,onThumbPositionChange:()=>{if(n.viewport&&o.current){const u=n.viewport.scrollLeft,f=G(u,l,n.dir);o.current.style.transform=`translate3d(${f}px, 0, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollLeft=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollLeft=m(u,n.dir))}}):r==="vertical"?e.jsx(qe,{...p,ref:s,onThumbPositionChange:()=>{if(n.viewport&&o.current){const u=n.viewport.scrollTop,f=G(u,l);o.current.style.transform=`translate3d(0, ${f}px, 0)`}},onWheelScroll:u=>{n.viewport&&(n.viewport.scrollTop=u)},onDragScroll:u=>{n.viewport&&(n.viewport.scrollTop=m(u))}}):null}),Ne=i.forwardRef((t,s)=>{const{sizes:r,onSizesChange:a,...n}=t,o=x(w,t.__scopeScrollArea),[c,l]=i.useState(),d=i.useRef(null),h=A(s,d,o.onScrollbarXChange);return i.useEffect(()=>{d.current&&l(getComputedStyle(d.current))},[d]),e.jsx(se,{"data-orientation":"horizontal",...n,ref:h,sizes:r,style:{bottom:0,left:o.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:o.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":L(r)+"px",...t.style},onThumbPointerDown:p=>t.onThumbPointerDown(p.x),onDragScroll:p=>t.onDragScroll(p.x),onWheelScroll:(p,m)=>{if(o.viewport){const u=o.viewport.scrollLeft+p.deltaX;t.onWheelScroll(u),le(u,m)&&p.preventDefault()}},onResize:()=>{d.current&&o.viewport&&c&&a({content:o.viewport.scrollWidth,viewport:o.viewport.offsetWidth,scrollbar:{size:d.current.clientWidth,paddingStart:H(c.paddingLeft),paddingEnd:H(c.paddingRight)}})}})}),qe=i.forwardRef((t,s)=>{const{sizes:r,onSizesChange:a,...n}=t,o=x(w,t.__scopeScrollArea),[c,l]=i.useState(),d=i.useRef(null),h=A(s,d,o.onScrollbarYChange);return i.useEffect(()=>{d.current&&l(getComputedStyle(d.current))},[d]),e.jsx(se,{"data-orientation":"vertical",...n,ref:h,sizes:r,style:{top:0,right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":L(r)+"px",...t.style},onThumbPointerDown:p=>t.onThumbPointerDown(p.y),onDragScroll:p=>t.onDragScroll(p.y),onWheelScroll:(p,m)=>{if(o.viewport){const u=o.viewport.scrollTop+p.deltaY;t.onWheelScroll(u),le(u,m)&&p.preventDefault()}},onResize:()=>{d.current&&o.viewport&&c&&a({content:o.viewport.scrollHeight,viewport:o.viewport.offsetHeight,scrollbar:{size:d.current.clientHeight,paddingStart:H(c.paddingTop),paddingEnd:H(c.paddingBottom)}})}})}),[Oe,re]=J(w),se=i.forwardRef((t,s)=>{const{__scopeScrollArea:r,sizes:a,hasThumb:n,onThumbChange:o,onThumbPointerUp:c,onThumbPointerDown:l,onThumbPositionChange:d,onDragScroll:h,onWheelScroll:p,onResize:m,...u}=t,f=x(w,r),[v,k]=i.useState(null),B=A(s,b=>k(b)),y=i.useRef(null),E=i.useRef(""),W=f.viewport,P=a.content-a.viewport,N=j(p),R=j(d),q=U(m,10);function O(b){if(y.current){const g=b.clientX-y.current.left,S=b.clientY-y.current.top;h({x:g,y:S})}}return i.useEffect(()=>{const b=g=>{const S=g.target;v?.contains(S)&&N(g,P)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[W,v,P,N]),i.useEffect(R,[a,R]),T(v,q),T(f.content,q),e.jsx(Oe,{scope:r,scrollbar:v,hasThumb:n,onThumbChange:j(o),onThumbPointerUp:j(c),onThumbPositionChange:R,onThumbPointerDown:j(l),children:e.jsx(_.div,{...u,ref:B,style:{position:"absolute",...u.style},onPointerDown:C(t.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),y.current=v.getBoundingClientRect(),E.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",f.viewport&&(f.viewport.style.scrollBehavior="auto"),O(b))}),onPointerMove:C(t.onPointerMove,O),onPointerUp:C(t.onPointerUp,b=>{const g=b.target;g.hasPointerCapture(b.pointerId)&&g.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=E.current,f.viewport&&(f.viewport.style.scrollBehavior=""),y.current=null})})})}),I="ScrollAreaThumb",ne=i.forwardRef((t,s)=>{const{forceMount:r,...a}=t,n=re(I,t.__scopeScrollArea);return e.jsx(Y,{present:r||n.hasThumb,children:e.jsx(De,{ref:s,...a})})}),De=i.forwardRef((t,s)=>{const{__scopeScrollArea:r,style:a,...n}=t,o=x(I,r),c=re(I,r),{onThumbPositionChange:l}=c,d=A(s,m=>c.onThumbChange(m)),h=i.useRef(void 0),p=U(()=>{h.current&&(h.current(),h.current=void 0)},100);return i.useEffect(()=>{const m=o.viewport;if(m){const u=()=>{if(p(),!h.current){const f=Ye(m,l);h.current=f,l()}};return l(),m.addEventListener("scroll",u),()=>m.removeEventListener("scroll",u)}},[o.viewport,p,l]),e.jsx(_.div,{"data-state":c.hasThumb?"visible":"hidden",...n,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:C(t.onPointerDownCapture,m=>{const f=m.target.getBoundingClientRect(),v=m.clientX-f.left,k=m.clientY-f.top;c.onThumbPointerDown({x:v,y:k})}),onPointerUp:C(t.onPointerUp,c.onThumbPointerUp)})});ne.displayName=I;var $="ScrollAreaCorner",ae=i.forwardRef((t,s)=>{const r=x($,t.__scopeScrollArea),a=!!(r.scrollbarX&&r.scrollbarY);return r.type!=="scroll"&&a?e.jsx(Ie,{...t,ref:s}):null});ae.displayName=$;var Ie=i.forwardRef((t,s)=>{const{__scopeScrollArea:r,...a}=t,n=x($,r),[o,c]=i.useState(0),[l,d]=i.useState(0),h=!!(o&&l);return T(n.scrollbarX,()=>{const p=n.scrollbarX?.offsetHeight||0;n.onCornerHeightChange(p),d(p)}),T(n.scrollbarY,()=>{const p=n.scrollbarY?.offsetWidth||0;n.onCornerWidthChange(p),c(p)}),h?e.jsx(_.div,{...a,ref:s,style:{width:o,height:l,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...t.style}}):null});function H(t){return t?parseInt(t,10):0}function ie(t,s){const r=t/s;return isNaN(r)?0:r}function L(t){const s=ie(t.viewport,t.content),r=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,a=(t.scrollbar.size-r)*s;return Math.max(a,18)}function He(t,s,r,a="ltr"){const n=L(r),o=n/2,c=s||o,l=n-c,d=r.scrollbar.paddingStart+c,h=r.scrollbar.size-r.scrollbar.paddingEnd-l,p=r.content-r.viewport,m=a==="ltr"?[0,p]:[p*-1,0];return ce([d,h],m)(t)}function G(t,s,r="ltr"){const a=L(s),n=s.scrollbar.paddingStart+s.scrollbar.paddingEnd,o=s.scrollbar.size-n,c=s.content-s.viewport,l=o-a,d=r==="ltr"?[0,c]:[c*-1,0],h=je(t,d);return ce([0,c],[0,l])(h)}function ce(t,s){return r=>{if(t[0]===t[1]||s[0]===s[1])return s[0];const a=(s[1]-s[0])/(t[1]-t[0]);return s[0]+a*(r-t[0])}}function le(t,s){return t>0&&t<s}var Ye=(t,s=()=>{})=>{let r={left:t.scrollLeft,top:t.scrollTop},a=0;return(function n(){const o={left:t.scrollLeft,top:t.scrollTop},c=r.left!==o.left,l=r.top!==o.top;(c||l)&&s(),r=o,a=window.requestAnimationFrame(n)})(),()=>window.cancelAnimationFrame(a)};function U(t,s){const r=j(t),a=i.useRef(0);return i.useEffect(()=>()=>window.clearTimeout(a.current),[]),i.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(r,s)},[r,s])}function T(t,s){const r=j(s);ye(()=>{let a=0;if(t){const n=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(r)});return n.observe(t),()=>{window.cancelAnimationFrame(a),n.unobserve(t)}}},[t,r])}var Le=Z,Ue=ee,Be=ae;function We({className:t,children:s,...r}){return e.jsxs(Le,{"data-slot":"scroll-area",className:X("relative",t),...r,children:[e.jsx(Ue,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:s}),e.jsx(de,{}),e.jsx(Be,{})]})}function de({className:t,orientation:s="vertical",...r}){return e.jsx(te,{"data-slot":"scroll-area-scrollbar",orientation:s,className:X("flex touch-none p-px transition-colors select-none",s==="vertical"&&"h-full w-2.5 border-l border-l-transparent",s==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",t),...r,children:e.jsx(ne,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}const ze=()=>{const[t,s]=i.useState("create-addresses"),[r,a]=i.useState("javascript"),n=F.find(o=>o.id===t);return e.jsx("section",{className:"py-8 lg:py-32",children:e.jsx("div",{className:"container rounded-lg bg-white/10 p-2 lg:p-8 lg:pt-8 pt-4 shadow-lg backdrop-blur-sm",children:e.jsxs("div",{className:"grid lg:gap-8 lg:grid-cols-3",children:[e.jsxs("div",{className:"mb-4 space-y-3 lg:hidden",children:[e.jsx("select",{className:"bg-background w-full rounded-md border px-3 py-2 text-sm",value:t,onChange:o=>s(o.target.value),children:F.map(o=>e.jsx("option",{value:o.id,children:o.title},o.id))}),e.jsx("select",{className:"bg-background w-full rounded-md border px-3 py-2 text-sm",value:r,onChange:o=>a(o.target.value),children:n?.code.map(o=>e.jsx("option",{value:o.language,children:o.language},o.language))})]}),e.jsx("div",{className:"hidden lg:col-span-1 lg:block",children:e.jsx("div",{className:"space-y-2",children:F.map(o=>e.jsx("div",{className:`cursor-pointer rounded-lg p-4 transition-all ${t===o.id?"bg-muted":"hover:bg-muted"}`,onClick:()=>s(o.id),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"rounded-lg p-2",children:e.jsx("span",{className:`${o.icon} text-primary size-4 size-6`})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("h3",{className:"truncate font-medium",children:o.title}),e.jsx("p",{className:"text-muted-foreground line-clamp-2 text-sm",children:o.description})]})]})},o.id))})}),e.jsx("div",{className:"min-w-0 lg:col-span-2",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(Ce,{value:r,onValueChange:a,children:e.jsx("div",{className:"hidden overflow-x-auto lg:block",children:e.jsx(Se,{className:"grid w-full min-w-max grid-cols-4 bg-black/30 p-1",children:n?.code.map(o=>e.jsxs(Te,{value:o.language,className:"flex items-center gap-2 whitespace-nowrap capitalize",children:[e.jsx("span",{className:`${o.icon} size-4`}),e.jsx("span",{className:"hidden text-white lg:inline",children:o.language})]},o.language))})})}),e.jsx("div",{className:"w-full overflow-hidden",children:e.jsxs(pe,{data:n?.code||[],value:r,className:"w-full",children:[e.jsxs(ue,{children:[e.jsx(he,{children:o=>e.jsx(me,{value:o.language,className:"truncate",children:o.filename},o.language)}),e.jsx(fe,{onCopy:()=>console.log("Copied code to clipboard"),onError:()=>console.error("Failed to copy code to clipboard")})]}),e.jsxs(We,{className:"w-full",children:[e.jsx(be,{children:o=>e.jsx(xe,{value:o.language,className:"max-h-96 w-full overflow-x-auto",children:e.jsx(ge,{language:o.language,children:o.code})},o.language)}),e.jsx(de,{orientation:"horizontal"})]})]})})]})})]})})})},F=[{id:"create-addresses",title:"Create Secure Wallet Addresses",description:"Create password-protected wallets for Ethereum, BSC, Polygon & Tron via the Chaingateway Wallet API.",icon:"icon-[mdi--wallet]",code:[{language:"javascript",filename:"create-address.js",icon:"icon-[devicon--javascript]",code:`// Chaingateway - Create a password-protected EVM address
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
// Route::get('/tron/transactions/{txid}/decoded', [DecodedTronTransactionController::class, 'show']);`}]}],Fe=()=>{const t=[{title:"Tron",src:"icon-[token-branded--trx]",href:"#vscod3",icon:"icon-[token-branded--trx]"},{title:"Arbitrum",src:"icon-[token-branded--arbitrum-one]",href:"https://arbitrum.io/",icon:"icon-[token-branded--arbitrum-one]"},{title:"Polygon",src:"icon-[token-branded--matic]",href:"https://polygon.technology/",icon:"icon-[token-branded--matic]"},{title:"Binance Smart Chain",src:"icon-[token-branded--bnb]",href:"https://www.binance.org/en/smartChain",icon:"icon-[token-branded--bnb]"},{title:"Ethereum",src:"icon-[token-branded--eth]",href:"https://ethereum.org/",icon:"icon-[token-branded--eth]"},{title:"Bitcoin",src:"icon-[token-branded--btc]",href:"https://bitcoin.org/en/",icon:"icon-[token-branded--btc]"}];return e.jsx("section",{className:"w-full overflow-hidden lg:py-10 py-6",children:e.jsx("div",{className:"container flex w-full flex-col items-center justify-start px-4",children:e.jsxs("div",{className:"bg-muted container w-fit rounded-4xl",children:[e.jsx(Xe,{integrations:t,className:"hidden md:flex"}),e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-4 py-4 md:hidden",children:t.map(s=>e.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center transition-transform hover:scale-105",children:e.jsx("span",{className:`${s.icon} sm:h-12 sm:w-12 h-8 w-8`})},s.title))})]})})})},Xe=({integrations:t,className:s})=>{const r=Ae(1/0);return e.jsx("div",{className:X("flex items-end gap-2 px-6 py-6",s),onMouseMove:a=>r.set(a.pageX),onMouseLeave:()=>r.set(1/0),children:t.map(a=>e.jsx(Me,{integration:a,mouseX:r},a.title))})},Me=({integration:t,mouseX:s})=>{const r=i.useRef(null),a=D(s,l=>{const d=r.current?.getBoundingClientRect()??{x:0,width:0};return l-d.x-d.width/2}),n=z(D(a,[-100,0,100],[64,85,64]),{mass:.1,stiffness:150,damping:12}),o=z(D(a,[-100,0,100],[64,94,64]),{mass:.1,stiffness:150,damping:12}),c=z(D(a,[-150,0,150],[0,-12,0]),{mass:.1,stiffness:150,damping:12});return e.jsx("div",{ref:r,className:"relative flex h-16 w-16 flex-col items-center justify-end",children:e.jsx(ke.div,{style:{width:n,height:o,y:c,transformOrigin:"bottom center"},className:"absolute bottom-0 flex items-center justify-center rounded-xl",children:e.jsx("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"h-full w-full",children:e.jsx("span",{className:`${t.icon} h-16 w-16`})})})})};function vt(){return e.jsx("section",{className:"section-padding relative",children:e.jsxs("div",{className:"relative lg:container",children:[e.jsxs("div",{className:"flex flex-col justify-between gap-10 lg:flex-row lg:items-center",children:[e.jsxs("div",{className:"flex max-w-3xl flex-1 flex-col items-start gap-5",children:[e.jsxs("div",{className:"flex items-center rounded-full border p-1 text-xs",children:[e.jsx("span",{className:"bg-muted rounded-full px-3 py-1",children:"New"}),e.jsx("span",{className:"px-3",children:"Arbitrum integration now live"})]}),e.jsxs("h1",{className:"text-5xl leading-none tracking-tight text-balance md:text-6xl lg:text-7xl",children:["The"," ",e.jsx("span",{className:"text-gradient",children:"Unified Blockchain API  "})," ","for Crypto Payments & Webhooks"]}),e.jsx("p",{className:"text-muted-foreground leading-snug md:text-lg lg:text-xl",children:"One REST API to send tokens, detect deposits, and trigger webhooks for on-chain events — built for production teams."}),e.jsx(Fe,{})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex gap-4.5",children:[e.jsx(K,{className:"flex-1 md:min-w-45",asChild:!0,"data-rybbit-event":"register_click","data-rybbit-prop-source":"hero_cta",children:e.jsx("a",{href:"https://app.chaingateway.io/register",children:"Start 7-day free trial"})}),e.jsx(K,{className:"flex-1 md:min-w-45",variant:"outline",asChild:!0,"data-rybbit-event":"hero_read_docs_click",children:e.jsx("a",{href:"/stage5/developers/",children:"Read the docs"})})]}),e.jsx("div",{className:"text-center text-sm",children:"No card required • Go live in hours"})]})]}),e.jsx(ze,{}),e.jsx(Ve,{className:"absolute top-0 right-0 -z-10 origin-right scale-30 md:scale-50 lg:scale-100"})]})})}function Ve({...t}){return e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:1342,height:1199,fill:"none",...t,children:[e.jsx("path",{fill:"#D9D9D9",d:"M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"}),e.jsx("path",{fill:"url(#a)",d:"M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"}),e.jsx("path",{stroke:"url(#b)",strokeWidth:.631,d:"M914.912 1197.77 747.793 808.811l115.698-221.478 334.239 73.826 109.08 196.135-391.898 340.476Z"}),e.jsx("path",{fill:"url(#c)",d:"m875.715 420.318 203.405-357.96c50.52-10.487-50.57 96.246 0 186.332 80.45 143.304 298.36 312.903 256.86 419.243-67.58 173.19-306.7 49.523-396.529 0-71.863-39.618-72.434-181.585-63.736-247.615Z"}),e.jsx("path",{fill:"url(#d)",d:"m46.623 746.37 908.336-619.388 130.381-66.714-46.89 196.709-156.685 413.622c-27.829 50.066-111.545 120.16-223.775 0-98.592-105.557-466.882-3.975-611.367 75.771L.814 777.607c10.115-9.59 25.82-20.205 45.809-31.237Z"}),e.jsx("g",{filter:"url(#e)",children:e.jsx("path",{fill:"url(#f)",d:"m883.093 595.649 164.727-565.43 4.66 326.52-169.387 238.91Z"})}),e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"a",x1:1027.3,x2:1027.73,y1:587.333,y2:1198.11,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{offset:0,stopColor:"#9D83E7"}),e.jsx("stop",{offset:.516,stopColor:"#D445E7"})]}),e.jsxs("linearGradient",{id:"b",x1:1027.3,x2:1027.3,y1:587.333,y2:1197.77,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#10CBF4"}),e.jsx("stop",{offset:1,stopColor:"#10CBF4",stopOpacity:0})]}),e.jsxs("linearGradient",{id:"c",x1:871.897,x2:1188.44,y1:575.509,y2:575.628,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#9259ED"}),e.jsx("stop",{offset:.514,stopColor:"#CF54EE"}),e.jsx("stop",{offset:1,stopColor:"#FB8684"})]}),e.jsxs("linearGradient",{id:"d",x1:676.669,x2:677.051,y1:60.268,y2:757.516,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#B956EE"}),e.jsx("stop",{offset:1,stopColor:"#9672FF"})]}),e.jsxs("linearGradient",{id:"f",x1:1020.81,x2:814.267,y1:202.771,y2:477.618,gradientUnits:"userSpaceOnUse",children:[e.jsx("stop",{stopColor:"#FB07FF"}),e.jsx("stop",{offset:.505,stopColor:"#FF6847"}),e.jsx("stop",{offset:1,stopColor:"#FF474A"})]}),e.jsxs("filter",{id:"e",width:228.968,height:625.009,x:853.303,y:.429,colorInterpolationFilters:"sRGB",filterUnits:"userSpaceOnUse",children:[e.jsx("feFlood",{floodOpacity:0,result:"BackgroundImageFix"}),e.jsx("feBlend",{in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}),e.jsx("feGaussianBlur",{result:"effect1_foregroundBlur_401_39842",stdDeviation:14.895})]})]})]})}export{vt as default};
