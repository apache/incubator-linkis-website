"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[1185],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var c=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},o=Object.keys(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(c=0;c<o.length;c++)r=o[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=c.createContext({}),s=function(e){var t=c.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return c.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},h=c.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=s(r),d=n,f=h["".concat(u,".").concat(d)]||h[d]||p[d]||o;return r?c.createElement(f,a(a({ref:t},l),{},{components:r})):c.createElement(f,a({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<o;s++)a[s]=r[s];return c.createElement.apply(null,a)}return c.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3600:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var c=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],i={},u="Orchestrator-Execution\u67b6\u6784\u8bbe\u8ba1",s={unversionedId:"architecture/orchestrator/orchestrator_execution_architecture_doc",id:"architecture/orchestrator/orchestrator_execution_architecture_doc",isDocsHomePage:!1,title:"Orchestrator-Execution\u67b6\u6784\u8bbe\u8ba1",description:"\u4e00. Execution\u6982\u5ff5",source:"@site/docs/architecture/orchestrator/orchestrator_execution_architecture_doc.md",sourceDirName:"architecture/orchestrator",slug:"/architecture/orchestrator/orchestrator_execution_architecture_doc",permalink:"/docs/next/architecture/orchestrator/orchestrator_execution_architecture_doc",editUrl:"https://github.com/apache/incubator-linkis-website/edit/docusaurus/docs/architecture/orchestrator/orchestrator_execution_architecture_doc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"orchestrator_ecmp_architecture",permalink:"/docs/next/architecture/orchestrator/orchestrator_ecmp_architecture"},next:{title:"Orchestrator-Operation\u67b6\u6784\u8bbe\u8ba1",permalink:"/docs/next/architecture/orchestrator/orchestrator_operation_architecture_doc"}},l=[{value:"\u4e00. Execution\u6982\u5ff5",id:"\u4e00-execution\u6982\u5ff5",children:[]},{value:"\u4e8c. Execution\u67b6\u6784",id:"\u4e8c-execution\u67b6\u6784",children:[]},{value:"\u4e09. Execution\u6574\u4f53\u6d41\u7a0b",id:"\u4e09-execution\u6574\u4f53\u6d41\u7a0b",children:[]}],p={toc:l};function h(e){var t=e.components,i=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,c.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"orchestrator-execution\u67b6\u6784\u8bbe\u8ba1"},"Orchestrator-Execution\u67b6\u6784\u8bbe\u8ba1"),(0,o.kt)("h2",{id:"\u4e00-execution\u6982\u5ff5"},"\u4e00. Execution\u6982\u5ff5"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Orchestrator-Execution\u6a21\u5757\u662fOrchestrator\u7684\u6267\u884c\u6a21\u5757\uff0c\u7528\u4e8e\u8c03\u5ea6\u6267\u884c\u7f16\u6392\u540e\u7684PhysicalTree\uff0c\u5728\u6267\u884c\u7684\u65f6\u5019\u4f1a\u4eceJobEndExecTask\u5f00\u59cb\u8fdb\u884c\u4f9d\u8d56\u6267\u884c\u3002Execution\u7684\u8c03\u7528\u6709Orchestration\u7684\u6267\u884c\u548c\u5f02\u6b65\u6267\u884c\u53d1\u8d77\uff0c\u7136\u540eExecution\u8d1f\u8d23\u8c03\u5ea6\u6267\u884cRootExecTask\uff08PhysicalTree\u7684\u6839\u8282\u70b9\uff09\u6574\u5408\u6811\u7684ExecTask\u8fd0\u884c\uff0c\u5e76\u5c01\u88c5\u6240\u6709execTask\u7684\u6267\u884c\u54cd\u5e94\u8fdb\u884c\u8fd4\u56de\u3002\u6267\u884c\u91c7\u7528\u751f\u4ea7\u8005\u6d88\u8d39\u8005\u5f02\u6b65\u6267\u884c\u6a21\u5f0f\u8fdb\u884c\u8fd0\u884c\u3002"),(0,o.kt)("h2",{id:"\u4e8c-execution\u67b6\u6784"},"\u4e8c. Execution\u67b6\u6784"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Execution\u5728\u63a5\u53d7\u5230RootExecTask\u6267\u884c\u540e\uff0c\u4f1a\u5c06RootExecTask\u7ed9\u5230TaskManager\u8fdb\u884c\u8c03\u5ea6\u6267\u884c\uff08\u751f\u4ea7\uff09\uff0c\u7136\u540eTaskComsumer\u4f1a\u4eceTaskManager\u83b7\u53d6\u73b0\u5728\u53ef\u4ee5\u4f9d\u8d56\u6267\u884c\u7684\u4efb\u52a1\u8fdb\u884c\u6d88\u8d39\u6267\u884c\uff0c\u62ff\u5230\u53ef\u4ee5\u8fd0\u884c\u7684ExecTask\u540e\u4f1a\u63d0\u4ea4\u7ed9TaskScheduler\u8fdb\u884c\u63d0\u4ea4\u6267\u884c\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"execution",src:r(9235).Z})),(0,o.kt)("p",null,"\u4e0d\u7ba1\u662f\u5f02\u6b65\u6267\u884c\u548c\u540c\u6b65\u6267\u884c\uff0c\u90fd\u662f\u901a\u8fc7\u4e0a\u9762\u7684\u6d41\u7a0b\u8fdb\u884c\u8c03\u5ea6\u5f02\u6b65\u6267\u884c\uff0c\u540c\u6b65\u6267\u884c\u4f1a\u8c03\u7528ExecTask\u7684waitForCompleted\u65b9\u6cd5\uff0c\u5b8c\u6210\u540c\u6b65\u54cd\u5e94\u83b7\u53d6\u3002\u6574\u4e2a\u6267\u884c\u8fc7\u7a0b\u4e2dExecTask\u7684\u72b6\u6001\u3001\u7ed3\u679c\u96c6\u3001\u65e5\u5fd7\u7b49\u4fe1\u606f\u901a\u8fc7ListenerBus\u8fdb\u884c\u6295\u9012\u548c\u901a\u77e5\u3002"),(0,o.kt)("h2",{id:"\u4e09-execution\u6574\u4f53\u6d41\u7a0b"},"\u4e09. Execution\u6574\u4f53\u6d41\u7a0b"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0","Execution\u7684\u6574\u4f53\u6267\u884c\u6d41\u7a0b\u5982\u4e0b\u6240\u793a\uff0c\u4e0b\u56fe\u5df2\u4ea4\u4e92\u5f0f\u6267\u884c\uff08ComputationExecution\uff09\u6d41\u7a0b\u4e3a\u4f8b\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"execution01",src:r(4821).Z})))}h.isMDXComponent=!0},9235:function(e,t,r){t.Z=r.p+"assets/images/execution-b25cadd75a3e4ade929d922ff9661a74.png"},4821:function(e,t,r){t.Z=r.p+"assets/images/execution01-a6bc9d4528a018c2a5e87b8a1c6241e2.png"}}]);