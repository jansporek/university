"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[5513],{5888:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var i=t(5893),c=t(1151);const s={sidebar_position:2,title:"Configuration examples"},o=void 0,r={id:"extensions/structured-formats-import/configuration-examples",title:"Configuration examples",description:"Generic XML import",source:"@site/docs/extensions/structured-formats-import/configuration-examples.md",sourceDirName:"extensions/structured-formats-import",slug:"/extensions/structured-formats-import/configuration-examples",permalink:"/docs/extensions/structured-formats-import/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai/university/tree/master/docs/extensions/structured-formats-import/configuration-examples.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Structured formats import",permalink:"/docs/extensions/structured-formats-import/"},next:{title:"Workday",permalink:"/docs/extensions/workday/"}},a={},l=[{value:"Generic XML import",id:"generic-xml-import",level:2},{value:"Generic JSON import",id:"generic-json-import",level:2},{value:"XML: Document splitting",id:"xml-document-splitting",level:2},{value:"XML: PEPPOL BIS Billing 3.0",id:"xml-peppol-bis-billing-30",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"generic-xml-import",children:"Generic XML import"}),"\n",(0,i.jsx)(n.admonition,{title:"todo",type:"warning",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"How to + examples"})})}),"\n",(0,i.jsx)(n.h2,{id:"generic-json-import",children:"Generic JSON import"}),"\n",(0,i.jsx)(n.admonition,{title:"todo",type:"warning",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"How to + examples"})})}),"\n",(0,i.jsx)(n.h2,{id:"xml-document-splitting",children:"XML: Document splitting"}),"\n",(0,i.jsxs)(n.p,{children:["XML documents can be split into multiple documents using the ",(0,i.jsx)(n.code,{children:"split_selectors"})," configuration:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "trigger_condition": {\n        "file_type": "xml"\n      },\n      // highlight-start\n      "split_selectors": ["/RecordLabel/Productions/Production"],\n      // highlight-end\n      "fields": [\n        {\n          "schema_id": "document_id",\n          "selectors": ["./Metadata/ID"]\n        }\n        // \u2026\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The field selectors are then relative to the newly split document."}),"\n",(0,i.jsx)(n.h2,{id:"xml-peppol-bis-billing-30",children:"XML: PEPPOL BIS Billing 3.0"}),"\n",(0,i.jsxs)(n.p,{children:["Basic configuration (works with the default Rossum.ai schema for invoices) and the following PEPPOL BIS Billing 3.0 example: ",(0,i.jsx)(n.a,{href:"https://github.com/OpenPEPPOL/peppol-bis-invoice-3/blob/0f63848fc46fe4ab87d1860a18bfe381c41e01ff/rules/examples/base-example.xml",children:"https://github.com/OpenPEPPOL/peppol-bis-invoice-3/blob/0f63848fc46fe4ab87d1860a18bfe381c41e01ff/rules/examples/base-example.xml"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "trigger_condition": {\n        "file_type": "xml"\n      },\n      "fields": [\n        {\n          "schema_id": "document_id",\n          "selectors": ["cbc:ID"]\n        },\n        {\n          "schema_id": "order_id",\n          "selectors": ["cbc:BuyerReference"]\n        },\n        {\n          "schema_id": "date_issue",\n          "selectors": ["cbc:IssueDate"]\n        },\n        {\n          "schema_id": "date_due",\n          "selectors": ["cbc:DueDate"]\n        },\n        {\n          "schema_id": "currency",\n          "selectors": ["cbc:DocumentCurrencyCode"]\n        },\n        {\n          "schema_id": "amount_due",\n          "selectors": ["cac:LegalMonetaryTotal/cbc:TaxInclusiveAmount"]\n        },\n        {\n          "schema_id": "amount_total_base",\n          "selectors": ["cac:LegalMonetaryTotal/cbc:TaxExclusiveAmount"]\n        },\n        {\n          "schema_id": "amount_total_tax",\n          "selectors": ["cac:TaxTotal/cbc:TaxAmount"]\n        },\n        {\n          "schema_id": "sender_name",\n          "selectors": ["cac:AccountingSupplierParty/cac:Party/cac:PartyName/cbc:Name"]\n        },\n        {\n          "schema_id": "sender_address",\n          "selectors": ["cac:AccountingSupplierParty/cac:Party/cac:PostalAddress/cbc:StreetName"]\n        },\n        {\n          "schema_id": "recipient_name",\n          "selectors": ["cac:AccountingCustomerParty/cac:Party/cac:PartyName/cbc:Name"]\n        },\n        {\n          "schema_id": "recipient_address",\n          "selectors": ["cac:AccountingCustomerParty/cac:Party/cac:PostalAddress/cbc:StreetName"]\n        },\n        {\n          "schema_id": "terms",\n          "selectors": ["cac:PaymentTerms/cbc:Note"]\n        },\n        {\n          "fields": [\n            {\n              "schema_id": "item_quantity",\n              "selectors": ["cbc:InvoicedQuantity"]\n            },\n            {\n              "schema_id": "item_code",\n              "selectors": ["cac:Item/cac:StandardItemIdentification/cbc:ID"]\n            },\n            {\n              "schema_id": "item_description",\n              "selectors": ["cac:Item/cbc:Description", "cac:Item/cbc:Name"]\n            },\n            {\n              "schema_id": "item_amount",\n              "selectors": ["cac:Price/cbc:PriceAmount"]\n            }\n          ],\n          "schema_id": "line_items",\n          "selectors": ["cac:InvoiceLine"]\n        }\n      ]\n    }\n  ]\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var i=t(7294);const c={},s=i.createContext(c);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);