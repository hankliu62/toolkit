(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8637],{61993:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(50959),o=r(82187),i=r.n(o);let a=e=>e?"function"==typeof e?e():e:null;var l=r(83938),s=r(35780),c=r(7505),d=r(2214),u=r(8584),f=r(91614),p=r(79578),g=r(53606),m=r(69723),h=r(73605),v=r(54882);let b=e=>{let{componentCls:t,popoverColor:r,titleMinWidth:n,fontWeightStrong:o,innerPadding:i,boxShadowSecondary:a,colorTextHeading:l,borderRadiusLG:s,zIndexPopup:c,titleMarginBottom:d,colorBgElevated:f,popoverBg:g,titleBorderBottom:m,innerContentPadding:h,titlePadding:v}=e;return[{[t]:Object.assign(Object.assign({},(0,u.Wf)(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:c,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":f,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},["".concat(t,"-content")]:{position:"relative"},["".concat(t,"-inner")]:{backgroundColor:g,backgroundClip:"padding-box",borderRadius:s,boxShadow:a,padding:i},["".concat(t,"-title")]:{minWidth:n,marginBottom:d,color:l,fontWeight:o,borderBottom:m,padding:v},["".concat(t,"-inner-content")]:{color:r,padding:h}})},(0,p.ZP)(e,"var(--antd-arrow-background-color)"),{["".concat(t,"-pure")]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",["".concat(t,"-content")]:{display:"inline-block"}}}]},y=e=>{let{componentCls:t}=e;return{[t]:g.i.map(r=>{let n=e["".concat(r,"6")];return{["&".concat(t,"-").concat(r)]:{"--antd-arrow-background-color":n,["".concat(t,"-inner")]:{backgroundColor:n},["".concat(t,"-arrow")]:{background:"transparent"}}}})}};var w=(0,m.I$)("Popover",e=>{let{colorBgElevated:t,colorText:r}=e,n=(0,h.TS)(e,{popoverBg:t,popoverColor:r});return[b(n),y(n),(0,f._y)(n,"zoom-big")]},e=>{let{lineWidth:t,controlHeight:r,fontHeight:n,padding:o,wireframe:i,zIndexPopupBase:a,borderRadiusLG:l,marginXS:s,lineType:c,colorSplit:d,paddingSM:u}=e,f=r-n;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:a+30},(0,v.w)(e)),(0,p.wZ)({contentRadius:l,limitVerticalRadius:!0})),{innerPadding:i?0:12,titleMarginBottom:i?0:s,titlePadding:i?"".concat(f/2,"px ").concat(o,"px ").concat(f/2-t,"px"):0,titleBorderBottom:i?"".concat(t,"px ").concat(c," ").concat(d):"none",innerContentPadding:i?"".concat(u,"px ").concat(o,"px"):0})},{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]}),x=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};let C=(e,t,r)=>t||r?n.createElement(n.Fragment,null,t&&n.createElement("div",{className:"".concat(e,"-title")},a(t)),n.createElement("div",{className:"".concat(e,"-inner-content")},a(r))):null,j=e=>{let{hashId:t,prefixCls:r,className:o,style:a,placement:l="top",title:s,content:c,children:u}=e;return n.createElement("div",{className:i()(t,r,"".concat(r,"-pure"),"".concat(r,"-placement-").concat(l),o),style:a},n.createElement("div",{className:"".concat(r,"-arrow")}),n.createElement(d.G,Object.assign({},e,{className:t,prefixCls:r}),u||C(r,s,c)))};var O=r(75924),S=r(35372),E=r(29953),_=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};let P=e=>{let{title:t,content:r,prefixCls:o}=e;return n.createElement(n.Fragment,null,t&&n.createElement("div",{className:"".concat(o,"-title")},a(t)),n.createElement("div",{className:"".concat(o,"-inner-content")},a(r)))},z=n.forwardRef((e,t)=>{var r;let{prefixCls:o,title:a,content:d,overlayClassName:u,placement:f="top",trigger:p="hover",children:g,mouseEnterDelay:m=.1,mouseLeaveDelay:h=.1,onOpenChange:v,overlayStyle:b={}}=e,y=_(e,["prefixCls","title","content","overlayClassName","placement","trigger","children","mouseEnterDelay","mouseLeaveDelay","onOpenChange","overlayStyle"]),{getPrefixCls:x}=n.useContext(s.E_),C=x("popover",o),[j,z,k]=w(C),I=x(),N=i()(u,z,k),[R,M]=(0,E.Z)(!1,{value:null!==(r=e.open)&&void 0!==r?r:e.visible}),D=(e,t)=>{M(e,!0),null==v||v(e,t)},W=e=>{e.keyCode===O.Z.ESC&&D(!1,e)};return j(n.createElement(c.Z,Object.assign({placement:f,trigger:p,mouseEnterDelay:m,mouseLeaveDelay:h,overlayStyle:b},y,{prefixCls:C,overlayClassName:N,ref:t,open:R,onOpenChange:e=>{D(e)},overlay:a||d?n.createElement(P,{prefixCls:C,title:a,content:d}):null,transitionName:(0,l.m)(I,"zoom-big",y.transitionName),"data-popover-inject":!0}),(0,S.Tm)(g,{onKeyDown:e=>{var t,r;n.isValidElement(g)&&(null===(r=null==g?void 0:(t=g.props).onKeyDown)||void 0===r||r.call(t,e)),W(e)}})))});z._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,className:r}=e,o=x(e,["prefixCls","className"]),{getPrefixCls:a}=n.useContext(s.E_),l=a("popover",t),[c,d,u]=w(l);return c(n.createElement(j,Object.assign({},o,{prefixCls:l,hashId:d,className:i()(r,u)})))};var k=z},21735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return y}});let n=r(42430),o=r(11778),i=r(11527),a=o._(r(50959)),l=n._(r(10422)),s=n._(r(67327)),c=r(66569),d=r(64960),u=r(25071);r(51764);let f=r(45314),p=n._(r(31358)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/toolkits/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e,t,r,n,o,i,a){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){let[t,r]=a.version.split(".",2),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let v=(0,a.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:s,decoding:c,className:d,style:u,fetchPriority:f,placeholder:p,loading:g,unoptimized:v,fill:b,onLoadRef:y,onLoadingCompleteRef:w,setBlurComplete:x,setShowAltText:C,sizesInput:j,onLoad:O,onError:S,...E}=e;return(0,i.jsx)("img",{...E,...h(f),loading:g,width:s,height:l,decoding:c,"data-nimg":b?"fill":"1",className:d,style:u,sizes:o,srcSet:n,src:r,ref:(0,a.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&m(e,p,y,w,x,v,j))},[r,p,y,w,x,S,v,j,t]),onLoad:e=>{m(e.currentTarget,p,y,w,x,v,j)},onError:e=>{C(!0),"empty"!==p&&x(!0),S&&S(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):(0,i.jsx)(s.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let y=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(f.RouterContext),n=(0,a.useContext)(u.ImageConfigContext),o=(0,a.useMemo)(()=>{let e=g||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:s}=e,m=(0,a.useRef)(l);(0,a.useEffect)(()=>{m.current=l},[l]);let h=(0,a.useRef)(s);(0,a.useEffect)(()=>{h.current=s},[s]);let[y,w]=(0,a.useState)(!1),[x,C]=(0,a.useState)(!1),{props:j,meta:O}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:x});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v,{...j,unoptimized:O.unoptimized,placeholder:O.placeholder,fill:O.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:C,sizesInput:e.sizes,ref:t}),O.priority?(0,i.jsx)(b,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},66569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(51764);let n=r(54179),o=r(64960);function i(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,s,c,{src:d,sizes:u,unoptimized:f=!1,priority:p=!1,loading:g,className:m,quality:h,width:v,height:b,fill:y=!1,style:w,overrideSrc:x,onLoad:C,onLoadingComplete:j,placeholder:O="empty",blurDataURL:S,fetchPriority:E,layout:_,objectFit:P,objectPosition:z,lazyBoundary:k,lazyRoot:I,...N}=e,{imgConf:R,showAltText:M,blurComplete:D,defaultLoader:W}=t,B=R||o.imageConfigDefault;if("allSizes"in B)l=B;else{let e=[...B.deviceSizes,...B.imageSizes].sort((e,t)=>e-t),t=B.deviceSizes.sort((e,t)=>e-t);l={...B,allSizes:e,deviceSizes:t}}if(void 0===W)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let A=N.loader||W;delete N.loader,delete N.srcSet;let F="__next_img_default"in A;if(F){if("custom"===l.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=A;A=t=>{let{config:r,...n}=t;return e(n)}}if(_){"fill"===_&&(y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!u&&(u=t)}let L="",G=a(v),T=a(b);if("object"==typeof(r=d)&&(i(r)||void 0!==r.src)){let e=i(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,L=e.src,!y){if(G||T){if(G&&!T){let t=G/e.width;T=Math.round(e.height*t)}else if(!G&&T){let t=T/e.height;G=Math.round(e.width*t)}}else G=e.width,T=e.height}}let Z=!p&&("lazy"===g||void 0===g);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,Z=!1),l.unoptimized&&(f=!0),F&&d.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(f=!0),p&&(E="high");let V=a(h),U=Object.assign(y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:z}:{},M?{}:{color:"transparent"},w),Y=D||"empty"===O?null:"blur"===O?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:G,heightInt:T,blurWidth:s,blurHeight:c,blurDataURL:S||"",objectFit:U.objectFit})+'")':'url("'+O+'")',q=Y?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:a,loader:l}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),d=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>l({config:t,src:r,quality:i,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:l({config:t,src:r,quality:i,width:s[d]})}}({config:l,src:d,unoptimized:f,width:G,quality:V,sizes:u,loader:A});return{props:{...N,loading:Z?"lazy":g,fetchPriority:E,width:G,height:T,decoding:"async",className:m,style:{...U,...q},sizes:J.sizes,srcSet:J.srcSet,src:x||J.src},meta:{unoptimized:f,priority:p,placeholder:O,fill:y}}}},54179:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:a}=e,l=n?40*n:t,s=o?40*o:r,c=l&&s?"viewBox='0 0 "+l+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},82771:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return s},getImageProps:function(){return l}});let n=r(42430),o=r(66569),i=r(21735),a=n._(r(31358));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/toolkits/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let s=i.Image},31358:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},19078:function(e,t,r){e.exports=r(82771)}}]);