(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8082],{21812:function(e,l,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video/video-player",function(){return s(39092)}])},39092:function(e,l,s){"use strict";s.r(l),s.d(l,{default:function(){return N}});var r,a,i=s(52676),n=s(35233),t=s(4189),c=s(88740),u=s(29380),d=s(75775),o=s(57639),f=s.n(o),x=s(75271),m=s(82187),p=s.n(m),v=s(15500);(r=a||(a={})).VideoJs="VideoJs",r.OddPlayerJs="OddPlayerJs";var h=(0,x.forwardRef)((e,l)=>{let{className:s,source:r,type:a="VideoJs"}=e,n=(0,x.useRef)(),t=(0,x.useRef)(null),c=(0,x.useCallback)(()=>(n.current||"VideoJs"!==a||(n.current=(0,v.Z)("videoPlayer",{autoplay:!1,muted:!0,preload:"auto",controls:!0})),n.current),[a]),u=(0,x.useCallback)(()=>{let e=c();"VideoJs"===a?null==e||e.play():null==e||e.play(r)},[c,a,r]),d=(0,x.useCallback)(()=>{let e=c();"VideoJs"===a?null==e||e.pause():null==e||e.pause(r)},[c,a,r]);return(0,x.useImperativeHandle)(l,()=>({getVideoPlayer:c,play:u,pause:d}),[c,d,u]),(0,x.useEffect)(()=>(n.current=c(),()=>{n.current.dispose(),n.current=void 0}),[]),(0,x.useEffect)(()=>{n.current&&n.current.reset(),n.current&&r&&n.current.src({withCredentials:!1,type:"application/x-mpegurl",src:r})},[r]),(0,i.jsx)("div",{className:p()("relative",{[s]:s}),children:"VideoJs"===a?(0,i.jsx)("video",{id:"videoPlayer",className:"video-js vjs-default-skin h-full w-full object-fill",controls:!0}):(0,i.jsx)("div",{ref:t,id:"videoPlayer",className:"h-full w-full object-fill"})})});let j=t.Z.TextArea;function N(){let[e,l]=(0,x.useState)(),s=(0,x.useRef)(),r=(0,x.useCallback)(()=>{if(!e){c.ZP.error("请输入视频数据源");return}s.current.play()},[e]);return(0,i.jsxs)("div",{className:"bg-white pb-6",children:[(0,i.jsx)(u.Z,{className:"!m-6",items:[{title:(0,i.jsx)(f(),{href:"/",children:"小工具集合"})},{title:"VideoPlayer"}]}),(0,i.jsxs)("div",{className:"flex flex-col space-y-6 px-6",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{className:"text-base font-normal",children:"视频数据源: "}),(0,i.jsx)("div",{className:"mt-2",children:(0,i.jsx)(j,{className:"w-full",autoSize:{minRows:3,maxRows:20},value:e,onChange:e=>l(e.target.value),placeholder:"请输入视频数据源，支持m3u8、flv、rtmp、RTS等格式的视频"})})]}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"flex justify-between pb-4",children:[(0,i.jsx)("label",{className:"text-base font-normal",children:"案例展示: "}),(0,i.jsx)("div",{className:"flex items-center space-x-5",children:(0,i.jsx)(d.ZP,{className:"!inline-flex items-center",icon:(0,i.jsx)(n.Z,{rev:void 0}),onClick:r,children:"立即播放"})})]}),(0,i.jsx)("div",{children:(0,i.jsx)(h,{className:"h-[800px]",ref:s,source:e})})]})]})]})}},62938:function(){}},function(e){e.O(0,[867,3278,1815,3805,8247,6801,4272,5775,8740,3718,4189,1620,4439,2888,9774,179],function(){return e(e.s=21812)}),_N_E=e.O()}]);