"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7672],{69939:function(t,e,o){o.d(e,{Z:function(){return c}});var n=o(94844);let r={left:{points:["cr","cl"]},right:{points:["cl","cr"]},top:{points:["bc","tc"]},bottom:{points:["tc","bc"]},topLeft:{points:["bl","tl"]},leftTop:{points:["tr","tl"]},topRight:{points:["br","tr"]},rightTop:{points:["tl","tr"]},bottomRight:{points:["tr","br"]},rightBottom:{points:["bl","br"]},bottomLeft:{points:["tl","bl"]},leftBottom:{points:["br","bl"]}},a={topLeft:{points:["bl","tc"]},leftTop:{points:["tr","cl"]},topRight:{points:["br","tc"]},rightTop:{points:["tl","cr"]},bottomRight:{points:["tr","bc"]},rightBottom:{points:["bl","cr"]},bottomLeft:{points:["tl","bc"]},leftBottom:{points:["br","cl"]}},i=new Set(["topLeft","topRight","bottomLeft","bottomRight","leftTop","leftBottom","rightTop","rightBottom"]);function c(t){let{arrowWidth:e,autoAdjustOverflow:o,arrowPointAtCenter:c,offset:s,borderRadius:l,visibleFirst:f}=t,p=e/2,m={};return Object.keys(r).forEach(t=>{let u=Object.assign(Object.assign({},c&&a[t]||r[t]),{offset:[0,0],dynamicInset:!0});switch(m[t]=u,i.has(t)&&(u.autoArrow=!1),t){case"top":case"topLeft":case"topRight":u.offset[1]=-p-s;break;case"bottom":case"bottomLeft":case"bottomRight":u.offset[1]=p+s;break;case"left":case"leftTop":case"leftBottom":u.offset[0]=-p-s;break;case"right":case"rightTop":case"rightBottom":u.offset[0]=p+s}let g=(0,n.wZ)({contentRadius:l,limitVerticalRadius:!0});if(c)switch(t){case"topLeft":case"bottomLeft":u.offset[0]=-g.arrowOffsetHorizontal-p;break;case"topRight":case"bottomRight":u.offset[0]=g.arrowOffsetHorizontal+p;break;case"leftTop":case"rightTop":u.offset[1]=-g.arrowOffsetHorizontal-p;break;case"leftBottom":case"rightBottom":u.offset[1]=g.arrowOffsetHorizontal+p}u.overflow=function(t,e,o,n){if(!1===n)return{adjustX:!1,adjustY:!1};let r={};switch(t){case"top":case"bottom":r.shiftX=2*e.arrowOffsetHorizontal+o,r.shiftY=!0,r.adjustY=!0;break;case"left":case"right":r.shiftY=2*e.arrowOffsetVertical+o,r.shiftX=!0,r.adjustX=!0}let a=Object.assign(Object.assign({},r),n&&"object"==typeof n?n:{});return a.shiftX||(a.adjustX=!0),a.shiftY||(a.adjustY=!0),a}(t,g,e,o),f&&(u.htmlRegion="visibleFirst")}),m}},54945:function(t,e,o){o.d(e,{M2:function(){return r},Tm:function(){return i},wm:function(){return a}});var n=o(75271);function r(t){return t&&n.isValidElement(t)&&t.type===n.Fragment}let a=(t,e,o)=>n.isValidElement(t)?n.cloneElement(t,"function"==typeof o?o(t.props||{}):o):e;function i(t,e){return a(t,t,e)}},40045:function(t,e,o){o.d(e,{_y:function(){return b}});var n=o(52576),r=o(74820);let a=new n.E4("antZoomIn",{"0%":{transform:"scale(0.2)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),i=new n.E4("antZoomOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.2)",opacity:0}}),c=new n.E4("antZoomBigIn",{"0%":{transform:"scale(0.8)",opacity:0},"100%":{transform:"scale(1)",opacity:1}}),s=new n.E4("antZoomBigOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0.8)",opacity:0}}),l=new n.E4("antZoomUpIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 0%"}}),f=new n.E4("antZoomUpOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 0%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 0%",opacity:0}}),p=new n.E4("antZoomLeftIn",{"0%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"0% 50%"}}),m=new n.E4("antZoomLeftOut",{"0%":{transform:"scale(1)",transformOrigin:"0% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"0% 50%",opacity:0}}),u=new n.E4("antZoomRightIn",{"0%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"100% 50%"}}),g={zoom:{inKeyframes:a,outKeyframes:i},"zoom-big":{inKeyframes:c,outKeyframes:s},"zoom-big-fast":{inKeyframes:c,outKeyframes:s},"zoom-left":{inKeyframes:p,outKeyframes:m},"zoom-right":{inKeyframes:u,outKeyframes:new n.E4("antZoomRightOut",{"0%":{transform:"scale(1)",transformOrigin:"100% 50%"},"100%":{transform:"scale(0.8)",transformOrigin:"100% 50%",opacity:0}})},"zoom-up":{inKeyframes:l,outKeyframes:f},"zoom-down":{inKeyframes:new n.E4("antZoomDownIn",{"0%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0},"100%":{transform:"scale(1)",transformOrigin:"50% 100%"}}),outKeyframes:new n.E4("antZoomDownOut",{"0%":{transform:"scale(1)",transformOrigin:"50% 100%"},"100%":{transform:"scale(0.8)",transformOrigin:"50% 100%",opacity:0}})}},b=(t,e)=>{let{antCls:o}=t,n="".concat(o,"-").concat(e),{inKeyframes:a,outKeyframes:i}=g[e];return[(0,r.R)(n,a,i,"zoom-big-fast"===e?t.motionDurationFast:t.motionDurationMid),{["\n        ".concat(n,"-enter,\n        ").concat(n,"-appear\n      ")]:{transform:"scale(0)",opacity:0,animationTimingFunction:t.motionEaseOutCirc,"&-prepare":{transform:"none"}},["".concat(n,"-leave")]:{animationTimingFunction:t.motionEaseInOutCirc}}]}},94844:function(t,e,o){o.d(e,{ZP:function(){return i},qN:function(){return r},wZ:function(){return a}});var n=o(67230);let r=8;function a(t){let{contentRadius:e,limitVerticalRadius:o}=t,n=e>12?e+2:12;return{arrowOffsetHorizontal:n,arrowOffsetVertical:o?r:n}}function i(t,e,o){var r,a,i,c,s,l,f,p;let{componentCls:m,boxShadowPopoverArrow:u,arrowOffsetVertical:g,arrowOffsetHorizontal:b}=t,{arrowDistance:d=0,arrowPlacement:h={left:!0,right:!0,top:!0,bottom:!0}}=o||{};return{[m]:Object.assign(Object.assign(Object.assign(Object.assign({["".concat(m,"-arrow")]:[Object.assign(Object.assign({position:"absolute",zIndex:1,display:"block"},(0,n.W)(t,e,u)),{"&:before":{background:e}})]},(r=!!h.top,a={[["&-placement-top > ".concat(m,"-arrow"),"&-placement-topLeft > ".concat(m,"-arrow"),"&-placement-topRight > ".concat(m,"-arrow")].join(",")]:{bottom:d,transform:"translateY(100%) rotate(180deg)"},["&-placement-top > ".concat(m,"-arrow")]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(100%) rotate(180deg)"},["&-placement-topLeft > ".concat(m,"-arrow")]:{left:{_skip_check_:!0,value:b}},["&-placement-topRight > ".concat(m,"-arrow")]:{right:{_skip_check_:!0,value:b}}},r?a:{})),(i=!!h.bottom,c={[["&-placement-bottom > ".concat(m,"-arrow"),"&-placement-bottomLeft > ".concat(m,"-arrow"),"&-placement-bottomRight > ".concat(m,"-arrow")].join(",")]:{top:d,transform:"translateY(-100%)"},["&-placement-bottom > ".concat(m,"-arrow")]:{left:{_skip_check_:!0,value:"50%"},transform:"translateX(-50%) translateY(-100%)"},["&-placement-bottomLeft > ".concat(m,"-arrow")]:{left:{_skip_check_:!0,value:b}},["&-placement-bottomRight > ".concat(m,"-arrow")]:{right:{_skip_check_:!0,value:b}}},i?c:{})),(s=!!h.left,l={[["&-placement-left > ".concat(m,"-arrow"),"&-placement-leftTop > ".concat(m,"-arrow"),"&-placement-leftBottom > ".concat(m,"-arrow")].join(",")]:{right:{_skip_check_:!0,value:d},transform:"translateX(100%) rotate(90deg)"},["&-placement-left > ".concat(m,"-arrow")]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(100%) rotate(90deg)"},["&-placement-leftTop > ".concat(m,"-arrow")]:{top:g},["&-placement-leftBottom > ".concat(m,"-arrow")]:{bottom:g}},s?l:{})),(f=!!h.right,p={[["&-placement-right > ".concat(m,"-arrow"),"&-placement-rightTop > ".concat(m,"-arrow"),"&-placement-rightBottom > ".concat(m,"-arrow")].join(",")]:{left:{_skip_check_:!0,value:d},transform:"translateX(-100%) rotate(-90deg)"},["&-placement-right > ".concat(m,"-arrow")]:{top:{_skip_check_:!0,value:"50%"},transform:"translateY(-50%) translateX(-100%) rotate(-90deg)"},["&-placement-rightTop > ".concat(m,"-arrow")]:{top:g},["&-placement-rightBottom > ".concat(m,"-arrow")]:{bottom:g}},f?p:{}))}}},67230:function(t,e,o){o.d(e,{W:function(){return a},w:function(){return r}});var n=o(52576);function r(t){let{sizePopupArrow:e,borderRadiusXS:o,borderRadiusOuter:n}=t,r=e/2,a=1*n/Math.sqrt(2),i=r-n*(1-1/Math.sqrt(2)),c=r-1/Math.sqrt(2)*o,s=n*(Math.sqrt(2)-1)+1/Math.sqrt(2)*o,l=2*r-c,f=2*r-a,p=2*r-0,m=r*Math.sqrt(2)+n*(Math.sqrt(2)-2),u=n*(Math.sqrt(2)-1),g="polygon(".concat(u,"px 100%, 50% ").concat(u,"px, ").concat(2*r-u,"px 100%, ").concat(u,"px 100%)");return{arrowShadowWidth:m,arrowPath:"path('M ".concat(0," ").concat(r," A ").concat(n," ").concat(n," 0 0 0 ").concat(a," ").concat(i," L ").concat(c," ").concat(s," A ").concat(o," ").concat(o," 0 0 1 ").concat(l," ").concat(s," L ").concat(f," ").concat(i," A ").concat(n," ").concat(n," 0 0 0 ").concat(p," ").concat(r," Z')"),arrowPolygon:g}}let a=(t,e,o)=>{let{sizePopupArrow:r,arrowPolygon:a,arrowPath:i,arrowShadowWidth:c,borderRadiusXS:s,calc:l}=t;return{pointerEvents:"none",width:r,height:r,overflow:"hidden","&::before":{position:"absolute",bottom:0,insetInlineStart:0,width:r,height:l(r).div(2).equal(),background:e,clipPath:{_multi_value_:!0,value:[a,i]},content:'""'},"&::after":{content:'""',position:"absolute",width:c,height:c,bottom:0,insetInline:0,margin:"auto",borderRadius:{_skip_check_:!0,value:"0 0 ".concat((0,n.bf)(s)," 0")},transform:"translateY(50%) rotate(-135deg)",boxShadow:o,zIndex:0,background:"transparent"}}}},77925:function(t,e,o){o.d(e,{i:function(){return n}});let n=["blue","purple","cyan","green","magenta","pink","red","orange","yellow","volcano","geekblue","lime","gold"]},91137:function(t,e,o){o.d(e,{Z:function(){return P}});var n=o(75271),r=o(82187),a=o.n(r),i=o(55862),c=o(7989),s=o(92702),l=o(28497),f=o(69939),p=o(54945),m=o(66212),u=o(28680),g=o(27449),b=o(76993),d=o(3641),h=o(52576),v=o(39850),w=o(40045),y=o(94844),O=o(67230),_=o(77925),k=o(84955),E=o(23919);let C=t=>{var e;let{componentCls:o,tooltipMaxWidth:n,tooltipColor:r,tooltipBg:a,tooltipBorderRadius:i,zIndexPopup:c,controlHeight:s,boxShadowSecondary:l,paddingSM:f,paddingXS:p}=t;return[{[o]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(t)),{position:"absolute",zIndex:c,display:"block",width:"max-content",maxWidth:n,visibility:"visible",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","&-hidden":{display:"none"},"--antd-arrow-background-color":a,["".concat(o,"-inner")]:{minWidth:"1em",minHeight:s,padding:"".concat((0,h.bf)(t.calc(f).div(2).equal())," ").concat((0,h.bf)(p)),color:r,textAlign:"start",textDecoration:"none",wordWrap:"break-word",backgroundColor:a,borderRadius:i,boxShadow:l,boxSizing:"border-box"},"&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":{["".concat(o,"-inner")]:{borderRadius:t.min(i,y.qN)}},["".concat(o,"-content")]:{position:"relative"}}),(e=(t,e)=>{let{darkColor:n}=e;return{["&".concat(o,"-").concat(t)]:{["".concat(o,"-inner")]:{backgroundColor:n},["".concat(o,"-arrow")]:{"--antd-arrow-background-color":n}}}},_.i.reduce((o,n)=>{let r=t["".concat(n,"1")],a=t["".concat(n,"3")],i=t["".concat(n,"6")],c=t["".concat(n,"7")];return Object.assign(Object.assign({},o),e(n,{lightColor:r,lightBorderColor:a,darkColor:i,textColor:c}))},{}))),{"&-rtl":{direction:"rtl"}})},(0,y.ZP)(t,"var(--antd-arrow-background-color)"),{["".concat(o,"-pure")]:{position:"relative",maxWidth:"none",margin:t.sizePopupArrow}}]},j=t=>Object.assign(Object.assign({zIndexPopup:t.zIndexPopupBase+70},(0,y.wZ)({contentRadius:t.borderRadius,limitVerticalRadius:!0})),(0,O.w)((0,k.TS)(t,{borderRadiusOuter:Math.min(t.borderRadiusOuter,4)})));function R(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return(0,E.I$)("Tooltip",t=>{let{borderRadius:e,colorTextLightSolid:o,colorBgSpotlight:n}=t;return[C((0,k.TS)(t,{tooltipMaxWidth:250,tooltipColor:o,tooltipBorderRadius:e,tooltipBg:n})),(0,w._y)(t,"zoom-big-fast")]},j,{resetStyle:!1,injectStyle:e})(t)}var Z=o(6399);let x=_.i.map(t=>"".concat(t,"-inverse"));function T(t,e){let o=function(t){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return e?[].concat((0,Z.Z)(x),(0,Z.Z)(_.i)).includes(t):_.i.includes(t)}(e),n=a()({["".concat(t,"-").concat(e)]:e&&o}),r={},i={};return e&&!o&&(r.background=e,i["--antd-arrow-background-color"]=e),{className:n,overlayStyle:r,arrowStyle:i}}var N=function(t,e){var o={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&0>e.indexOf(n)&&(o[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,n=Object.getOwnPropertySymbols(t);r<n.length;r++)0>e.indexOf(n[r])&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(o[n[r]]=t[n[r]]);return o};let I=n.forwardRef((t,e)=>{var o,r;let{prefixCls:h,openClassName:v,getTooltipContainer:w,overlayClassName:y,color:O,overlayInnerStyle:_,children:k,afterOpenChange:E,afterVisibleChange:C,destroyTooltipOnHide:j,arrow:Z=!0,title:x,overlay:I,builtinPlacements:P,arrowPointAtCenter:S=!1,autoAdjustOverflow:L=!0}=t,z=!!Z,[,B]=(0,d.ZP)(),{getPopupContainer:V,getPrefixCls:A,direction:D}=n.useContext(g.E_),M=(0,m.ln)("Tooltip"),Y=n.useRef(null),X=()=>{var t;null===(t=Y.current)||void 0===t||t.forceAlign()};n.useImperativeHandle(e,()=>{var t;return{forceAlign:X,forcePopupAlign:()=>{M.deprecated(!1,"forcePopupAlign","forceAlign"),X()},nativeElement:null===(t=Y.current)||void 0===t?void 0:t.nativeElement}});let[K,q]=(0,c.Z)(!1,{value:null!==(o=t.open)&&void 0!==o?o:t.visible,defaultValue:null!==(r=t.defaultOpen)&&void 0!==r?r:t.defaultVisible}),H=!x&&!I&&0!==x,W=n.useMemo(()=>{var t,e;let o=S;return"object"==typeof Z&&(o=null!==(e=null!==(t=Z.pointAtCenter)&&void 0!==t?t:Z.arrowPointAtCenter)&&void 0!==e?e:S),P||(0,f.Z)({arrowPointAtCenter:o,autoAdjustOverflow:L,arrowWidth:z?B.sizePopupArrow:0,borderRadius:B.borderRadius,offset:B.marginXXS,visibleFirst:!0})},[S,Z,P,B]),F=n.useMemo(()=>0===x?x:I||x||"",[I,x]),U=n.createElement(b.BR,null,"function"==typeof F?F():F),{getPopupContainer:G,placement:$="top",mouseEnterDelay:J=.1,mouseLeaveDelay:Q=.1,overlayStyle:tt,rootClassName:te}=t,to=N(t,["getPopupContainer","placement","mouseEnterDelay","mouseLeaveDelay","overlayStyle","rootClassName"]),tn=A("tooltip",h),tr=A(),ta=t["data-popover-inject"],ti=K;"open"in t||"visible"in t||!H||(ti=!1);let tc=n.isValidElement(k)&&!(0,p.M2)(k)?k:n.createElement("span",null,k),ts=tc.props,tl=ts.className&&"string"!=typeof ts.className?ts.className:a()(ts.className,v||"".concat(tn,"-open")),[tf,tp,tm]=R(tn,!ta),tu=T(tn,O),tg=tu.arrowStyle,tb=Object.assign(Object.assign({},_),tu.overlayStyle),td=a()(y,{["".concat(tn,"-rtl")]:"rtl"===D},tu.className,te,tp,tm),[th,tv]=(0,s.Cn)("Tooltip",to.zIndex),tw=n.createElement(i.Z,Object.assign({},to,{zIndex:th,showArrow:z,placement:$,mouseEnterDelay:J,mouseLeaveDelay:Q,prefixCls:tn,overlayClassName:td,overlayStyle:Object.assign(Object.assign({},tg),tt),getTooltipContainer:G||w||V,ref:Y,builtinPlacements:W,overlay:U,visible:ti,onVisibleChange:e=>{var o,n;q(!H&&e),H||(null===(o=t.onOpenChange)||void 0===o||o.call(t,e),null===(n=t.onVisibleChange)||void 0===n||n.call(t,e))},afterVisibleChange:null!=E?E:C,overlayInnerStyle:tb,arrowContent:n.createElement("span",{className:"".concat(tn,"-arrow-content")}),motion:{motionName:(0,l.m)(tr,"zoom-big-fast",t.transitionName),motionDeadline:1e3},destroyTooltipOnHide:!!j}),ti?(0,p.Tm)(tc,{className:tl}):tc);return tf(n.createElement(u.Z.Provider,{value:tv},tw))});I._InternalPanelDoNotUseOrYouWillBeFired=t=>{let{prefixCls:e,className:o,placement:r="top",title:c,color:s,overlayInnerStyle:l}=t,{getPrefixCls:f}=n.useContext(g.E_),p=f("tooltip",e),[m,u,b]=R(p),d=T(p,s),h=d.arrowStyle,v=Object.assign(Object.assign({},l),d.overlayStyle),w=a()(u,b,p,"".concat(p,"-pure"),"".concat(p,"-placement-").concat(r),o,d.className);return m(n.createElement("div",{className:w,style:h},n.createElement("div",{className:"".concat(p,"-arrow")}),n.createElement(i.G,Object.assign({},t,{className:u,prefixCls:p,overlayInnerStyle:v}),c)))};var P=I},88393:function(t,e,o){o.d(e,{s:function(){return d},v:function(){return v}});var n,r,a=o(12003),i=o(41047),c=o(63509),s=o(28484),l=o(30967),f=(0,s.Z)({},n||(n=o.t(l,2))),p=f.version,m=f.render,u=f.unmountComponentAtNode;try{Number((p||"").split(".")[0])>=18&&(r=f.createRoot)}catch(t){}function g(t){var e=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;e&&"object"===(0,c.Z)(e)&&(e.usingClientEntryPoint=t)}var b="__rc_react_root__";function d(t,e){if(r){var o;g(!0),o=e[b]||r(e),g(!1),o.render(t),e[b]=o;return}m(t,e)}function h(){return(h=(0,i.Z)((0,a.Z)().mark(function t(e){return(0,a.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then(function(){var t;null===(t=e[b])||void 0===t||t.unmount(),delete e[b]}));case 1:case"end":return t.stop()}},t)}))).apply(this,arguments)}function v(t){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)((0,a.Z)().mark(function t(e){return(0,a.Z)().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(void 0!==r)){t.next=2;break}return t.abrupt("return",function(t){return h.apply(this,arguments)}(e));case 2:u(e);case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}},55862:function(t,e,o){o.d(e,{G:function(){return i},Z:function(){return d}});var n=o(82187),r=o.n(n),a=o(75271);function i(t){var e=t.children,o=t.prefixCls,n=t.id,i=t.overlayInnerStyle,c=t.className,s=t.style;return a.createElement("div",{className:r()("".concat(o,"-content"),c),style:s},a.createElement("div",{className:"".concat(o,"-inner"),id:n,role:"tooltip",style:i},"function"==typeof e?e():e))}var c=o(80284),s=o(28484),l=o(59566),f=o(55812),p={shiftX:64,adjustY:1},m={adjustX:1,shiftY:!0},u=[0,0],g={left:{points:["cr","cl"],overflow:m,offset:[-4,0],targetOffset:u},right:{points:["cl","cr"],overflow:m,offset:[4,0],targetOffset:u},top:{points:["bc","tc"],overflow:p,offset:[0,-4],targetOffset:u},bottom:{points:["tc","bc"],overflow:p,offset:[0,4],targetOffset:u},topLeft:{points:["bl","tl"],overflow:p,offset:[0,-4],targetOffset:u},leftTop:{points:["tr","tl"],overflow:m,offset:[-4,0],targetOffset:u},topRight:{points:["br","tr"],overflow:p,offset:[0,-4],targetOffset:u},rightTop:{points:["tl","tr"],overflow:m,offset:[4,0],targetOffset:u},bottomRight:{points:["tr","br"],overflow:p,offset:[0,4],targetOffset:u},rightBottom:{points:["bl","br"],overflow:m,offset:[4,0],targetOffset:u},bottomLeft:{points:["tl","bl"],overflow:p,offset:[0,4],targetOffset:u},leftBottom:{points:["br","bl"],overflow:m,offset:[-4,0],targetOffset:u}},b=["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle","arrowContent","overlay","id","showArrow"],d=(0,a.forwardRef)(function(t,e){var o=t.overlayClassName,n=t.trigger,r=t.mouseEnterDelay,p=t.mouseLeaveDelay,m=t.overlayStyle,u=t.prefixCls,d=void 0===u?"rc-tooltip":u,h=t.children,v=t.onVisibleChange,w=t.afterVisibleChange,y=t.transitionName,O=t.animation,_=t.motion,k=t.placement,E=t.align,C=t.destroyTooltipOnHide,j=t.defaultVisible,R=t.getTooltipContainer,Z=t.overlayInnerStyle,x=(t.arrowContent,t.overlay),T=t.id,N=t.showArrow,I=(0,l.Z)(t,b),P=(0,a.useRef)(null);(0,a.useImperativeHandle)(e,function(){return P.current});var S=(0,s.Z)({},I);return"visible"in t&&(S.popupVisible=t.visible),a.createElement(f.Z,(0,c.Z)({popupClassName:o,prefixCls:d,popup:function(){return a.createElement(i,{key:"content",prefixCls:d,id:T,overlayInnerStyle:Z},x)},action:void 0===n?["hover"]:n,builtinPlacements:g,popupPlacement:void 0===k?"right":k,ref:P,popupAlign:void 0===E?{}:E,getPopupContainer:R,onPopupVisibleChange:v,afterPopupVisibleChange:w,popupTransitionName:y,popupAnimation:O,popupMotion:_,defaultPopupVisible:j,autoDestroy:void 0!==C&&C,mouseLeaveDelay:void 0===p?.1:p,popupStyle:m,mouseEnterDelay:void 0===r?0:r,arrow:void 0===N||N},S),h)})}}]);