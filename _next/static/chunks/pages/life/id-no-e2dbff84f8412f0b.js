(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8368],{49834:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/life/id-no",function(){return l(37141)}])},37141:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return S}});var a=l(52676),c=l(79020),i=l(88740),t=l(29380),r=l(77110),n=l(88394),d=l(50594),x=l(48316),m=l(75775),h=l(4189),j=l(81693),N=l(54175),o=l(7672),v=l.n(o),p=l(57639),u=l.n(p),g=l(75271),f=l(76779),y=l.n(f),Z=l(28782),b=l(63568);function w(e){let{placeholder:s="省市 / 城市 / 县区",...l}=e,c=(0,g.useMemo)(()=>(function(e){let s=[],l={};for(let s of e){let e={label:s.name,value:s.id};l[s.id]=e}for(let a of e)if("0"===a.superId)s.push(l[a.id]);else if(a.superId){let e=l[a.superId];e.children||(e.children=[]),e.children.push(l[a.id])}return s})(b.Kl),[]);return(0,a.jsx)(Z.Z,{className:"location-select-cascader",options:c,placeholder:s,...l})}var k=l(59136),P=l(98786);function S(){let[e,s]=(0,g.useState)(["430000","431300","431382"]),[l,o]=(0,g.useState)(v()("1993-09-26","YYYY-MM-DD")),[p,f]=(0,g.useState)(k.Q.Male),[Z,S]=(0,g.useState)(5),[C,z]=(0,g.useState)(),_=(0,g.useCallback)(()=>{if(!e||0===e.length||!e.at(-1)){i.ZP.error("请先选择出生地址");return}let s=[],a=e.at(-1);for(let e=0;e<Z;e++)s.push((0,P.R9)(a,l.toDate(),p));z(s)},[e,l,p,Z]),M=(0,g.useMemo)(()=>b.Kl.filter(e=>"0"===e.superId),[]),[E,I]=(0,g.useState)(),[F,R]=(0,g.useState)(),[Y,D]=(0,g.useState)(),Q=(0,g.useCallback)(()=>{if(R(void 0),D(void 0),(null==E?void 0:E.length)!==18){i.ZP.error("请输入18位二代身份证号码");return}let e=(0,P.uV)(E);e.isTrue?R(e):D("输入的二代身份证号码不正确")},[E]),T=(0,g.useCallback)(()=>{I("110101200006128958")},[]);return(0,a.jsxs)("div",{className:"relative flex min-h-[100vh] flex-1 flex-col bg-white",children:[(0,a.jsx)(t.Z,{className:"!m-6",items:[{title:(0,a.jsx)(u(),{href:"/",children:"小工具集合"})},{title:"身份证生成器"}]}),(0,a.jsxs)(y(),{className:"flex-1",split:"vertical",minSize:50,maxSize:75,children:[(0,a.jsxs)("div",{className:"overflow-y-auto",children:[(0,a.jsx)("div",{className:"flex justify-between border-b border-black/20 px-6 py-4",children:(0,a.jsx)("h2",{className:"text-lg font-medium leading-[32px]",children:"生成身份证"})}),(0,a.jsxs)("div",{className:"m-4 rounded border border-common-border",children:[(0,a.jsx)("div",{className:"bg-[#d3ccd6] px-4 py-3 text-sm text-[#6f4b3e]",children:"在线随机身份证号码生成器"}),(0,a.jsxs)("div",{className:"space-y-3 p-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"随机身份证号码生成"}),(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right",children:"出生地址"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(w,{className:"!w-80",value:e,onChange:e=>s(e)})})]}),(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right",children:"出生日期"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(n.Z,{className:"w-80",value:l,onChange:e=>o(e)})})]}),(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right",children:"性别"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsxs)(d.ZP.Group,{className:"text-sm",onChange:e=>f(e.target.value),value:p,children:[(0,a.jsx)(d.ZP,{value:k.Q.Male,children:"男"}),(0,a.jsx)(d.ZP,{value:k.Q.Female,children:"女"})]})})]}),(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right",children:"生成个数"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(x.Z,{className:"!w-80",value:Z,onChange:e=>S(e),min:1})})]}),(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(m.ZP,{size:"large",type:"primary",onClick:_,children:"开始生成"})})]})]}),!!(null==C?void 0:C.length)&&(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{dashed:!0,className:"!my-5"}),(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"生成结果："}),null==C?void 0:C.map(e=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right"}),(0,a.jsx)("div",{className:"flex-1",children:e})]})]},e))]}),(0,a.jsx)(r.Z,{dashed:!0,className:"!my-5"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"身份证生成器说明："}),(0,a.jsx)("div",{className:"mt-1 text-xs",children:"身份证号码生成器是按身份证验证规则生成虚拟身份证号，非真实身份证，仅供测试使用，请勿用于非法用途。"})]})]})]})]}),(0,a.jsxs)("div",{className:"overflow-y-auto",children:[(0,a.jsxs)("div",{className:"flex justify-between border-b border-black/20 px-6 py-4",children:[(0,a.jsx)("h2",{className:"text-lg font-medium leading-[32px]",children:"解析身份证"}),(0,a.jsx)("div",{className:"flex items-center space-x-5",children:(0,a.jsx)(m.ZP,{className:"!inline-flex items-center",icon:(0,a.jsx)(c.Z,{rev:void 0}),onClick:T,children:"案例"})})]}),(0,a.jsxs)("div",{className:"m-4 rounded border border-common-border",children:[(0,a.jsx)("div",{className:"bg-[#d3ccd6] px-4 py-3 text-sm text-[#6f4b3e]",children:"身份证号大全"}),(0,a.jsxs)("div",{className:"space-y-3 p-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"身份证号码查询"}),(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right",children:"身份证号码"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(h.Z,{maxLength:18,className:"!w-80",value:E,onChange:e=>I(e.target.value),placeholder:"请输入18位二代身份证号码",size:"large"})})]}),(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("label",{className:"w-32 text-right"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(m.ZP,{size:"large",type:"primary",onClick:Q,children:"查询"})})]})]}),!!(F||Y)&&(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{dashed:!0,className:"!my-5"}),(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"生成结果："}),Y?(0,a.jsx)(j.Z,{message:"Error",description:Y,type:"error",showIcon:!0,closable:!0,onClose:()=>D(void 0)}):(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsxs)("div",{className:"flex items-center gap-4",children:[(0,a.jsx)("div",{className:"w-52",children:E}),(0,a.jsx)("div",{className:"w-10",children:F.isMale?"男":F.isFemale?"女":"未知"}),(0,a.jsx)("div",{className:"w-32",children:F.birthday}),(0,a.jsxs)("div",{className:"flex-1",children:[F.province&&(0,a.jsx)(N.Z,{content:b.Su[F.province]?(0,a.jsxs)("div",{className:"text-lg",children:[F.province,"身份证开头前6位:"," ",(0,a.jsx)("span",{className:"text-red-500",children:b.Su[F.province]})]}):null,trigger:"click",placement:"topRight",children:(0,a.jsx)(m.ZP,{type:"link",size:"small",className:"!px-1",children:F.province})}),F.city&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.ZP,{type:"link",size:"small",className:"!p-0",children:"\xb7"}),(0,a.jsx)(N.Z,{content:b.Su[F.city]?(0,a.jsxs)("div",{className:"text-lg",children:[F.province,"\xb7",F.city,"身份证开头前6位:"," ",(0,a.jsx)("span",{className:"text-red-500",children:b.Su[F.city]})]}):null,trigger:"click",placement:"topRight",children:(0,a.jsx)(m.ZP,{type:"link",size:"small",className:"!px-1",children:F.city})})]}),F.county&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.ZP,{type:"link",size:"small",className:"!p-0",children:"\xb7"}),(0,a.jsx)(N.Z,{content:b.Su[F.county]?(0,a.jsxs)("div",{className:"text-lg",children:[F.province,"\xb7",F.city,"\xb7",F.county,"身份证开头前6位:"," ",(0,a.jsx)("span",{className:"text-red-500",children:b.Su[F.county]})]}):null,trigger:"click",placement:"topRight",children:(0,a.jsx)(m.ZP,{type:"link",size:"small",className:"!px-1",children:F.county})})]})]})]})]})]}),(0,a.jsx)(r.Z,{dashed:!0,className:"!my-5"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"身份证号码大全说明："}),(0,a.jsxs)("div",{className:"mt-1 text-xs",children:[(0,a.jsx)("p",{children:"本站提供的身份证号码和姓名由系统随机组合而成，并非现实生活中真实的身份证号码和真实姓名，可用于网站开发测试时期的初级身份证号码验证，男女满18岁成年人身份证游戏防沉迷注册等软件程序测试。"}),(0,a.jsx)("p",{children:"请勿用于任何其他用途。若因使用这些身份证号码而产生任何问题和纠纷，本网站不承担任何直接或间接的责任！"})]})]}),(0,a.jsx)(r.Z,{dashed:!0,className:"!my-5"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"身份证查询系统说明："}),(0,a.jsxs)("div",{className:"mt-1 text-xs",children:[(0,a.jsx)("p",{children:"输入不合法格式的身份证号码会提示身份证号码错误，本身份证号码查询系统也可作为身份证号码验证。"}),(0,a.jsx)("p",{children:"身份证号码和姓名格式科普：前1-6位为行政区划代码即归属地，第7-14位为出生年月日，第15-17位为顺序代码，在同一个地区出生同一个出生的人通过顺序号码区分，第17位奇数表示男性，偶数表示女性，第18位为校验码，用于校验身份证号码是否合法"})]})]}),(0,a.jsx)(r.Z,{dashed:!0,className:"!my-5"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"text-lg text-[#cd5e3c]",children:"其它地区身份证号码大全"}),(0,a.jsxs)("div",{className:"mt-1",children:[(0,a.jsxs)("div",{className:"grid grid-cols-3",children:[M.map(e=>{let{id:s,name:l}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsx)(N.Z,{content:(0,a.jsxs)("div",{className:"text-lg",children:[l,"身份证开头前6位:"," ",(0,a.jsx)("span",{className:"text-red-500",children:s})]}),trigger:"click",children:(0,a.jsx)(m.ZP,{type:"link",size:"small",children:l})})]},s)}),Array.from({length:3-M.length%3}).fill(1).map((e,s)=>(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{className:"!my-2"}),(0,a.jsx)(m.ZP,{className:"!opacity-0",type:"link",size:"small",children:"1"})]},s))]}),(0,a.jsx)(r.Z,{className:"!my-2"})]})]})]})]})]})]})]})}}},function(e){e.O(0,[3278,1815,3805,8247,6801,4272,5775,8740,3718,6779,427,4189,6601,594,3008,9316,8786,2888,9774,179],function(){return e(e.s=49834)}),_N_E=e.O()}]);