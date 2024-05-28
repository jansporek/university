"use strict";(self.webpackChunkuniversity=self.webpackChunkuniversity||[]).push([[971],{8185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var s=t(5893),i=t(1151);const a={sidebar_position:2,title:"Business Rules Validation: Expression Engine",sidebar_label:"Expression Engine"},l="Expression Engine",o={id:"extensions/business-rules-validation/expression-engine",title:"Business Rules Validation: Expression Engine",description:"Rossum Expression Engine is responsible for validating expressions, producing either a true or false result. Its syntax closely resembles that of Python and allows for utilizing data from annotated documents. The engine assesses conditions and expressions using document data. Currently, it is employed for the Business Rules Validation extension, but there are plans to extend its usage to other extensions in the future. Engine operates at both the header field and line item levels, offering the flexibility to combine them within a single expression.",source:"@site/docs/extensions/business-rules-validation/expression-engine.md",sourceDirName:"extensions/business-rules-validation",slug:"/extensions/business-rules-validation/expression-engine",permalink:"/docs/extensions/business-rules-validation/expression-engine",draft:!1,unlisted:!1,editUrl:"https://github.com/rossumai-community/university/tree/master/docs/extensions/business-rules-validation/expression-engine.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Business Rules Validation: Expression Engine",sidebar_label:"Expression Engine"},sidebar:"extensionsSidebar",previous:{title:"Configuration examples",permalink:"/docs/extensions/business-rules-validation/configuration-examples"},next:{title:"Copy & Paste Values",permalink:"/docs/extensions/copy-paste-values/"}},r={},u=[{value:"Allowed operators",id:"allowed-operators",level:2},{value:"Data types",id:"data-types",level:2},{value:"Empty values",id:"empty-values",level:2},{value:"Aggregation function and empty values",id:"aggregation-function-and-empty-values",level:2},{value:"Allowed functions",id:"allowed-functions",level:2},{value:"Aggregation functions",id:"aggregation-functions",level:3},{value:"Filter function",id:"filter-function",level:3},{value:"Default value functions",id:"default-value-functions",level:3},{value:"Date functions",id:"date-functions",level:3},{value:"List function",id:"list-function",level:3},{value:"String functions",id:"string-functions",level:3},{value:"Table scope",id:"table-scope",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"expression-engine",children:"Expression Engine"}),"\n",(0,s.jsx)(n.p,{children:"Rossum Expression Engine is responsible for validating expressions, producing either a true or false result. Its syntax closely resembles that of Python and allows for utilizing data from annotated documents. The engine assesses conditions and expressions using document data. Currently, it is employed for the Business Rules Validation extension, but there are plans to extend its usage to other extensions in the future. Engine operates at both the header field and line item levels, offering the flexibility to combine them within a single expression."}),"\n",(0,s.jsx)(n.p,{children:"Examples:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'{issue_date} > "2023-01-01"\n\n{item_price} * {item_amount} == {item_total}\n\nsum( {item_total} ) == {total_price}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"allowed-operators",children:"Allowed operators"}),"\n",(0,s.jsx)(n.p,{children:"Engine supports basic mathematical and logical operators:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+, -, /, //, *, %, and, or, xor, ==, !=, <, >, <=, >=\n"})}),"\n",(0,s.jsx)(n.h2,{id:"data-types",children:"Data types"}),"\n",(0,s.jsx)(n.p,{children:"The Expression Engine supports four data types: integer (int), floating-point number (float), string, and date. When performing automatic casting, the engine first attempts to cast the value as a float, followed by an integer, then a date, and finally as a string."}),"\n",(0,s.jsxs)(n.p,{children:["It is important to note that when dealing with dates, the format ",(0,s.jsx)(n.code,{children:"YYYY-MM-DD"})," must be followed, including the quotation marks. Without the quotation marks, a value like 2023-12-24 would be evaluated as a mathematical subtraction resulting in the number 1987."]}),"\n",(0,s.jsx)(n.p,{children:"If you need to ensure a specific data type is used, you can manually cast the value using the following conversions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"- int(<value>) - for whole numbers\n\n- float(<value>) - for numbers with decimal digits\n\n- date(<value>) - for dates\n\n- str(<value>) - for text (this also serves as a catch-all type)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"empty-values",children:"Empty values"}),"\n",(0,s.jsx)(n.p,{children:"There are two functions to check whether a document data point has a value or is empty:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"- has_value({data_point}) returns True if the data point is not empty (!='')\n\n- is_empty({empty_point}) returns True if the data point is empty (=='')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Important Note: Please be aware that using ",(0,s.jsx)(n.code,{children:"==''"})," and ",(0,s.jsx)(n.code,{children:"!=''"})," for comparison will not work."]}),"\n",(0,s.jsxs)(n.p,{children:["The expression engine automatically avoids error messages during the annotation process by skipping all lines in a table that have empty values. Whenever there's an empty value in the rule, it is skipped, including ",(0,s.jsx)(n.code,{children:"==''"}),"."]}),"\n",(0,s.jsx)(n.p,{children:'For headers, the skip procedure works accordingly - because there\'s only "one" line to skip, the whole rule is skipped.'}),"\n",(0,s.jsx)(n.h2,{id:"aggregation-function-and-empty-values",children:"Aggregation function and empty values"}),"\n",(0,s.jsx)(n.p,{children:'Table column with following values [1,2,"",2]'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'sum({item_amount]})=5\nsum({item_amount, default=0})=5\nunique_len({item_amount]})=2\nlen({item_amount]})=3\nlen(filter(({item_amount]}),""))=3\nlen({item_amount, default=0})=4\n'})}),"\n",(0,s.jsx)(n.p,{children:'Table column with empty values ["","",""]'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'sum({item_amount]})=None\nunique_len({item_amount]})=None\nlen({item_amount]})=None\nlen(filter(({item_amount]}),""))=None\nlen({item_amount, default=0})=3\n'})}),"\n",(0,s.jsx)(n.p,{children:"Not annotated table (defined in schema)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'sum({item_amount]})=None\nsum({item_amount, default=0})=None\nunique_len({item_amount]})=None\nlen({item_amount]})=None\nlen(filter(({item_amount]}),""))=None\nlen({item_amount, default=0})=None\n'})}),"\n",(0,s.jsx)(n.h2,{id:"allowed-functions",children:"Allowed functions"}),"\n",(0,s.jsx)(n.h3,{id:"aggregation-functions",children:"Aggregation functions"}),"\n",(0,s.jsx)(n.p,{children:"To compare header fields and line items or implement business rules based on line items, the following aggregation functions are at your disposal:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'- all(<expression>) - all lines in the table must satisfy the business rule in order to pass\n\n- any(<expression>) - at least one line in the table must fulfill the business rule in order to pass\n\n- sum(<column>) - summary of a table column (applicable to float and int, as well as string values that can be cast to float or int)\n\n- min(<column>) - minimum value in a table column\n\n- max(<column>) - maximum value in a table column\n\n- len(<column>) - number of rows in the table (i.e., the length of the row list)\n\n- unique_len(<column>) - number of unique values in a table column\n\n- first_value(<column>) - first value of a table column, often used in conjunction with a filter to exclude empty values first_value(filter(<column>,["",None]))\n'})}),"\n",(0,s.jsx)(n.h3,{id:"filter-function",children:"Filter function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"- filter(<value or column>,[<remove_value>]) - a filter function that removes all values in the second parameter.\nExample: filter({item_price},[0,None])\n"})}),"\n",(0,s.jsx)(n.h3,{id:"default-value-functions",children:"Default value functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'- {<value or column>, default=<default_value>} - basic default value function. Value extracted from the document cannot be used as a default value using this syntax.\nExample: {vendor, default="Rossum"}\n\n- {<value or column>, default=value(\u2018<other_data_point>\u2019)} - with this setup you can use a data point as a default value.\nExample: value({item_delivery_date}, default={delivery_date}).\n'})}),"\n",(0,s.jsx)(n.h3,{id:"date-functions",children:"Date functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"- today() - today\u2019s date, determined using Coordinated Universal Time (UTC), which is the standard time used in all Rossum solutions\n\n- timedelta(<shift>) - adds a time delta in years, months and days.\nExample: today() + timedelta(days=2) > {due_date}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"list-function",children:"List function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'- list_contains(<value>,<search>) - returns \u201ctrue\u201d if the search element is found in the document value which is a table column.\nExample: list_contains({item_description},"car")\n\nThe function supports a list of values to be checked list_contains(<value>,[<search>]), example {item_description}, ["car", "bus"]).\n`contains` cannot be used for substring, please use regexp.\n`in` is not supported.\n'})}),"\n",(0,s.jsx)(n.h3,{id:"string-functions",children:"String functions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:'- substring(<search>, <value>, ) - returns \u201ctrue\u201d if the \u201csearch\u201d substring is found in \u201cvalue\u201d. This function is case sensitive.\n\n- regexp(<regexp>, <value>,) - returns \u201ctrue\u201d if the regular expression has a non-empty match to the document value.\nExample: regexp("[Cc]ar$", {item_description})\n\nOptional parameter - ignore_case: regexp("rossum", {sender_name}, ignore_case=True)\nPlease note that `re.search` is the underline function call and both parameters are cast to string.\n\n- similarity(<value>,<search>) - returns the Levenshtein distance between the document value and the selected string.\nExample: similarity({item_description},"Car") > 2\nPlease find more information about Levenshtein distance here - https://en.wikipedia.org/wiki/Levenshtein_distance\n'})}),"\n",(0,s.jsx)(n.h3,{id:"table-scope",children:"Table scope"}),"\n",(0,s.jsx)(n.p,{children:"There is a limitation in the implementation where one rule can only work with one table. This limitation ensures that error messages can be shown on the correct lines of the table."}),"\n",(0,s.jsx)(n.p,{children:"To perform tasks like checking the number of lines in the tables, you can use aggregation functions. However, the expression engine does not permit using data points in one rule. Instead, you need to define variables to work with the data points."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Variables: {\u201clen_first_table\u201d : \u201c}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(7294);const i={},a=s.createContext(i);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);