var u=Object.defineProperty,m=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;var i=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,r=(e,t)=>{for(var n in t||(t={}))_.call(t,n)&&i(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&i(e,n,t[n]);return e},s=(e,t)=>m(e,h(t));import{a as f,d as g}from"./index.8900b7f9.js";import{A as v,T as b}from"./TitleDescription.5a47fa57.js";import{C as A}from"./Card.f0350b06.js";import{C as y}from"./Tabs.5e76dea5.js";import{n as T}from"./vueComponentNormalizer.87056a83.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./ToolsSettings.a9d9524e.js";import"./context.04ada340.js";import"./JsonValues.08065e69.js";import"./MaxCounts.3eed5286.js";import"./RadioToggle.98e1e7ec.js";import"./RobotsMeta.2bc11dc9.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Row.13b6f3f1.js";import"./SettingsRow.eb71f07b.js";import"./GoogleSearchPreview.9074c63e.js";import"./HtmlTagsEditor.e47641de.js";import"./Editor.ff0e9ee9.js";import"./_commonjsHelpers.f40d732e.js";import"./index.652636d3.js";import"./client.94d919c5.js";import"./constants.7cd698f2.js";import"./UnfilteredHtml.333a73bf.js";import"./Index.476ddbfd.js";import"./Tooltip.3ec20ff5.js";import"./QuestionMark.83ebd18e.js";import"./Slide.f5d21606.js";import"./TruSeoScore.4bc8e535.js";import"./Information.f4b75b56.js";var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aioseo-search-appearance-archives"},e._l(e.getArchives,function(a,p){return n("core-card",{key:p,attrs:{slug:a.name+"Archives"},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"icon dashicons",class:""+(a.icon||"dashicons-admin-post")}),n("div",[e._v(" "+e._s(a.label)+" ")])]},proxy:!0},{key:"tabs",fn:function(){return[n("core-main-tabs",{attrs:{tabs:e.tabs,showSaveButton:!1,active:e.settings.internalTabs[a.name+"Archives"],internal:""},on:{changed:function(l){return e.processChangeTab(a.name,l)}}})]},proxy:!0}],null,!0)},[n("transition",{attrs:{name:"route-fade",mode:"out-in"}},[n(e.settings.internalTabs[a.name+"Archives"],{tag:"component",attrs:{object:a,separator:e.options.searchAppearance.global.separator,options:e.getOptions(a),type:"archives","show-bulk":!1,"no-meta-box":"","include-keywords":""}})],1)],1)}),1)},C=[];const D={components:{Advanced:v,CoreCard:A,CoreMainTabs:y,TitleDescription:b},data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:"Title & Description",access:"aioseo_search_appearance_settings",pro:!1},{slug:"advanced",name:"Advanced",access:"aioseo_search_appearance_settings",pro:!1}],archives:[{label:"Author Archives",name:"author",singular:"Author",icon:"dashicons-admin-users"},{label:"Date Archives",name:"date",singular:"Date",icon:"dashicons-calendar-alt"},{label:"Search Page",name:"search",singular:"Search Page",icon:"dashicons-search"}]}},computed:s(r({},f(["options","dynamicOptions","settings"])),{getArchives(){return this.archives.concat(this.$aioseo.postData.archives.map(e=>({label:`${e.label} Archives`,name:`${e.name}Archive`,icon:"dashicons-category",singular:e.singular,dynamic:!0})))}}),methods:s(r({},g(["changeTab"])),{processChangeTab(e,t){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${e}Archives`,value:t}),setTimeout(()=>{this.internalDebounce=!1},50))},getOptions(e){return e.dynamic?this.dynamicOptions.searchAppearance.archives[e.name.replace("Archive","")]:this.options.searchAppearance.archives[e.name]}})},c={};var S=T(D,x,C,!1,k,null,null,null);function k(e){for(let t in c)this[t]=c[t]}var oe=function(){return S.exports}();export{oe as default};
