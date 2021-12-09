"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[3390],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var a=n.createContext({}),u=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,i=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),f=c,v=m["".concat(a,".").concat(f)]||m[f]||l[f]||i;return r?n.createElement(v,s(s({ref:t},p),{},{components:r})):n.createElement(v,s({ref:t},p))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:c,s[1]=o;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3480:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(7462),c=r(3366),i=(r(7294),r(3905)),s=["components"],o={title:"CS Persistence Architecture",sidebar_position:3},a=void 0,u={unversionedId:"architecture/public_enhancement_services/context_service/context_service_persistence",id:"architecture/public_enhancement_services/context_service/context_service_persistence",isDocsHomePage:!1,title:"CS Persistence Architecture",description:"CSPersistence Architecture",source:"@site/docs/architecture/public_enhancement_services/context_service/context_service_persistence.md",sourceDirName:"architecture/public_enhancement_services/context_service",slug:"/architecture/public_enhancement_services/context_service/context_service_persistence",permalink:"/docs/next/architecture/public_enhancement_services/context_service/context_service_persistence",editUrl:"https://github.com/apache/incubator-linkis-website/edit/docusaurus/docs/architecture/public_enhancement_services/context_service/context_service_persistence.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"CS Persistence Architecture",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"CS Listener Architecture",permalink:"/docs/next/architecture/public_enhancement_services/context_service/context_service_listener"},next:{title:"CS Search Architecture",permalink:"/docs/next/architecture/public_enhancement_services/context_service/context_service_search"}},p=[{value:"<strong>CSPersistence Architecture</strong>",id:"cspersistence-architecture",children:[{value:"Persistence UML diagram",id:"persistence-uml-diagram",children:[]}]}],l={toc:p};function m(e){var t=e.components,o=(0,c.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"cspersistence-architecture"},(0,i.kt)("strong",{parentName:"h2"},"CSPersistence Architecture")),(0,i.kt)("h3",{id:"persistence-uml-diagram"},"Persistence UML diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(2376).Z})),(0,i.kt)("p",null,"The Persistence module mainly defines ContextService persistence related operations. The entities mainly include CSID, ContextKeyValue, CSResource, and CSTable."))}m.isMDXComponent=!0},2376:function(e,t,r){t.Z=r.p+"assets/images/linkis-contextservice-persistence-01-25aca98ebb1c3b97a98e0f4a3ab40e6f.png"}}]);