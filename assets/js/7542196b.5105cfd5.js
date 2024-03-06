"use strict";(self.webpackChunkcookbook=self.webpackChunkcookbook||[]).push([[1032],{6042:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=t(5893),o=t(1151);const s={sidebar_position:1,title:"Configuration examples"},i=void 0,r={id:"extensions/master-data-hub/configuration-examples",title:"Configuration examples",description:"The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:",source:"@site/docs/extensions/master-data-hub/configuration-examples.md",sourceDirName:"extensions/master-data-hub",slug:"/extensions/master-data-hub/configuration-examples",permalink:"/cookbook/docs/extensions/master-data-hub/configuration-examples",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/cookbook/tree/master/docs/extensions/master-data-hub/configuration-examples.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Configuration examples"},sidebar:"extensionsSidebar",previous:{title:"Master data hub",permalink:"/cookbook/docs/category/master-data-hub"},next:{title:"Business Rules Validation",permalink:"/cookbook/docs/category/business-rules-validation"}},c={},l=[{value:"Count all records in the collection",id:"count-all-records-in-the-collection",level:2},{value:"Exact match",id:"exact-match",level:2},{value:"Exact match (case-insensitive)",id:"exact-match-case-insensitive",level:2},{value:"Fuzzy match",id:"fuzzy-match",level:2},{value:"Remove duplicates (<code>$group</code>)",id:"remove-duplicates-group",level:2},{value:"Match on normalized values",id:"match-on-normalized-values",level:2},{value:"Match only if there is exactly one match",id:"match-only-if-there-is-exactly-one-match",level:2},{value:"Match score steps",id:"match-score-steps",level:2},{value:"Custom JS code",id:"custom-js-code",level:2}];function d(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"The following examples are showing commonly used configurations of the Rossum.ai Master Data Hub matching. All of these examples are typically nested in the following config:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "configurations": [\n    {\n      "name": "...",\n      "source": {\n        "dataset": "...",\n        // highlight-start\n        "queries": [\n          // paste the examples here\n        ],\n        // highlight-end\n      },\n      "default": { ... },\n      "mapping": { ... },\n      "result_actions": { ... }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"count-all-records-in-the-collection",children:"Count all records in the collection"}),"\n",(0,a.jsxs)(e.p,{children:["You can quickly get a total number of records in the whole collection by calling ",(0,a.jsx)(e.code,{children:"$count"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$count": "total"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"exact-match",children:"Exact match"}),"\n",(0,a.jsxs)(e.p,{children:["Even though exact match can be achieved using ",(0,a.jsx)(e.code,{children:"find"})," method instead of ",(0,a.jsx)(e.code,{children:"aggregate"})," (see ",(0,a.jsx)(e.a,{href:"#exact-match-case-insensitive",children:"below"}),"), it is still recommended to use ",(0,a.jsx)(e.code,{children:"aggregate"})," because it's often necessary to specify ",(0,a.jsx)(e.code,{children:"$project"})," stage:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$match": {\n        "email": "{email_from}"\n      }\n    },\n    {\n      "$project": {\n        "Supplier Name": 1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"exact-match-case-insensitive",children:"Exact match (case-insensitive)"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "find": {\n    "role_code": {\n      "$regex": "^{item_role | re}$",\n      "$options": "i"\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"fuzzy-match",children:"Fuzzy match"}),"\n",(0,a.jsxs)(e.p,{children:["It is necessary to restrict the fuzzy search results by using ",(0,a.jsx)(e.code,{children:"$match"})," on the results score (otherwise many irrelevant false positives would be returned)."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    {\n      "$search": {\n        "index": "default",\n        "text": {\n          "query": "{item_description}",\n          "path": "description"\n        }\n      }\n    },\n    {\n      "$limit": 10 // optional\n    },\n    {\n      "$addFields": {\n        "__score": {\n          "$meta": "searchScore"\n        }\n      }\n    },\n    {\n      "$match": {\n        "__score": {\n          "$gt": 0.1 // configure as needed based on the results\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsxs)(e.h2,{id:"remove-duplicates-group",children:["Remove duplicates (",(0,a.jsx)(e.code,{children:"$group"}),")"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // ...\n    {\n      "$group": {\n        "_id": "$vendorRegNo",\n        "__tmpRoot": {\n          "$first": "$$ROOT"\n        }\n      }\n    },\n    {\n      "$replaceRoot": {\n        "newRoot": "$__tmpRoot"\n      }\n    },\n    // ...\n    {\n      "$sort": {\n        "__score": -1 // it is important to sort the results correctly after using $group\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"match-on-normalized-values",children:"Match on normalized values"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // ...\n    {\n      "$addFields": {\n        "__tax_id_stringified": {\n          "$toString": "$Tax ID"\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$map": {\n            "input": {\n              "$range": [\n                0,\n                {\n                  "$strLenCP": "$__tax_id_stringified"\n                }\n              ]\n            },\n            "in": {\n              "$substrCP": ["$__tax_id_stringified", "$$this", 1]\n            }\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$filter": {\n            "input": "$__tax_id_normalized",\n            "cond": {\n              "$regexMatch": {\n                "input": "$$this",\n                "regex": "[0-9a-zA-Z]"\n              }\n            }\n          }\n        }\n      }\n    },\n    {\n      "$addFields": {\n        "__tax_id_normalized": {\n          "$reduce": {\n            "input": "$__tax_id_normalized",\n            "initialValue": "",\n            "in": {\n              "$concat": ["$$value", "$$this"]\n            }\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "__tax_id_normalized": "{sender_vat_id_normalized}"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"match-only-if-there-is-exactly-one-match",children:"Match only if there is exactly one match"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // ...\n    {\n      "$setWindowFields": {\n        "output": {\n          "__totalCount": {\n            "$count": {}\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "__totalCount": 1\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"match-score-steps",children:"Match score steps"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // ...\n    {\n      "$setWindowFields": {\n        "output": {\n          "__score_normalized_max": {\n            "$max": "$__score_normalized"\n          }\n        }\n      }\n    },\n    {\n      "$match": {\n        "$expr": {\n          "$cond": {\n            "if": {\n              "$or": [\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.95] },\n                    { "$gt": ["$__score_normalized", 0.95] }\n                  ]\n                },\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.9] },\n                    { "$lte": ["$__score_normalized_max", 0.95] },\n                    { "$gt": ["$__score_normalized", 0.9] },\n                    { "$lte": ["$__score_normalized", 0.95] }\n                  ]\n                },\n                {\n                  "$and": [\n                    { "$gt": ["$__score_normalized_max", 0.85] },\n                    { "$lte": ["$__score_normalized_max", 0.9] },\n                    { "$gt": ["$__score_normalized", 0.85] },\n                    { "$lte": ["$__score_normalized", 0.9] }\n                  ]\n                }\n              ]\n            },\n            "then": true,\n            "else": false\n          }\n        }\n      }\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"custom-js-code",children:"Custom JS code"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-json",children:'{\n  "aggregate": [\n    // ...\n    {\n      "$addFields": {\n        "__order_number_sanitized": {\n          "$function": {\n            "body": "function(x) { return x.replace(/[^0-9a-z]/ig, \'\').toLowerCase(); }",\n            "args": ["$Order Number"],\n            "lang": "js"\n          }\n        }\n      }\n    }\n    // ...\n  ]\n}\n'})})]})}function h(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>i});var a=t(7294);const o={},s=a.createContext(o);function i(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);