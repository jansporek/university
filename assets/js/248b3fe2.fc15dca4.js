"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[2167],{1334:(e,t,n)=>{n.d(t,{ZP:()=>o,d$:()=>r});var s=n(5893),i=n(1151);const r=[];function c(e){const t={a:"a",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Environment"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Webhook URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu1?(0,s.jsx)(t.a,{href:e.eu1,children:e.eu1}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"EU2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.eu2?(0,s.jsx)(t.a,{href:e.eu2,children:e.eu2}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"US"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.us?(0,s.jsx)(t.a,{href:e.us,children:e.us}):"\u2014"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"JP"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:e.jp?(0,s.jsx)(t.a,{href:e.jp,children:e.jp}):"\u2014"})]})]})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},3643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var s=n(5893),i=n(1151),r=n(1334);const c={title:"NetSuite"},o=void 0,l={id:"extensions/netsuite/index",title:"NetSuite",description:"Installation",source:"@site/docs/extensions/netsuite/index.md",sourceDirName:"extensions/netsuite",slug:"/extensions/netsuite/",permalink:"/docs/extensions/netsuite/",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/netsuite/index.md",tags:[],version:"current",frontMatter:{title:"NetSuite"},sidebar:"extensionsSidebar",previous:{title:"Using API",permalink:"/docs/extensions/master-data-hub/using-api"},next:{title:"Integration configuration",permalink:"/docs/extensions/netsuite/integration-configuration"}},a={},d=[{value:"Installation",id:"installation",level:2},...r.d$,...r.d$,{value:"Basic usage",id:"basic-usage",level:2},{value:"Available configuration options",id:"available-configuration-options",level:2},{value:"Useful links",id:"useful-links",level:2},{value:"System context diagram",id:"system-context-diagram",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Describe how to create and configure the extension."})})}),"\n",(0,s.jsx)(t.p,{children:"Import endpoints:"}),"\n",(0,s.jsx)(r.ZP,{eu1:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/import",eu2:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/import",us:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/import"}),"\n",(0,s.jsx)(t.p,{children:"Export endpoints:"}),"\n",(0,s.jsx)(r.ZP,{eu1:"https://elis.rossum.ai/svc/netsuite-v3/api/v1/export",eu2:"https://shared-eu2.rossum.app/svc/netsuite-v3/api/v1/export",us:"https://us.app.rossum.ai/svc/netsuite-v3/api/v1/export"}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic usage"}),"\n",(0,s.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Describe how to quickly use the extension."})})}),"\n",(0,s.jsx)(t.h2,{id:"available-configuration-options",children:"Available configuration options"}),"\n",(0,s.jsx)(t.admonition,{title:"Work in progress",type:"warning",children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"Describe all relevant configuration options."})})}),"\n",(0,s.jsx)(t.h2,{id:"useful-links",children:"Useful links"}),"\n",(0,s.jsx)(t.p,{children:"NetSuite main navigation can sometimes be very confusing as it is very customizable. Use the following paths to quickly access NetSuite resources:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Accounts: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/accounting/account/accounts.nl",children:(0,s.jsx)(t.code,{children:"/app/accounting/account/accounts.nl"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Currencies: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/common/multicurrency/currencylist.nl",children:(0,s.jsx)(t.code,{children:"/app/common/multicurrency/currencylist.nl"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Items: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/common/item/itemlist.nl",children:(0,s.jsx)(t.code,{children:"/app/common/item/itemlist.nl"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Purchase Orders: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/accounting/transactions/purchordermanager.nl?type=proc",children:(0,s.jsx)(t.code,{children:"/app/accounting/transactions/purchordermanager.nl?type=proc"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Subsidiaries: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/common/otherlists/subsidiarylist.nl",children:(0,s.jsx)(t.code,{children:"/app/common/otherlists/subsidiarylist.nl"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Vendor Bills: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill",children:(0,s.jsx)(t.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendBill"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Vendor Credits: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred",children:(0,s.jsx)(t.code,{children:"/app/accounting/transactions/transactionlist.nl?Transaction_TYPE=VendCred"})})]}),"\n",(0,s.jsxs)(t.li,{children:["Vendors: ",(0,s.jsx)(t.a,{href:"https://system.netsuite.com/app/common/entity/vendorlist.nl",children:(0,s.jsx)(t.code,{children:"/app/common/entity/vendorlist.nl"})})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"system-context-diagram",children:"System context diagram"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"NetSuite system context diagram",src:n(6016).Z+"",width:"4264",height:"1764"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},6016:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rossum-netsuite-system-context-diagram-f4b8c75eb17ac944a71986791353f670.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(7294);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);