import{d as h,h as x,j as p,$ as u,o as s,c as _,b as f,e as v,_ as k,O as n,X as b,k as a,a as m}from"./chunks/framework.a911dc49.js";import{l as g}from"./chunks/loadingTwo.7a00414d.js";const y=["id"],P=h({__name:"xmindComp",props:{xmUrl:{type:String},domId:{type:String,default:"xmind-container"}},setup(l){const i=l,d=x(!0);return p(async()=>{const{XMindEmbedViewer:c}=await u(()=>import("./chunks/index.223215d0.js"),[]),e=new c({el:`#${i.domId}`,region:"cn"}),r=()=>{d.value=!1,e.setFitMap(),e.removeEventListener("map-ready",r)};fetch(i.xmUrl).then(t=>t.arrayBuffer()).then(t=>e.load(t)).catch(t=>{console.error("加载xmind文件出错",t),r()}),e.setStyles({width:"100%"}),e.addEventListener("map-ready",r)}),(c,e)=>(s(),_("div",{id:i.domId},[d.value?(s(),f(g,{key:0})):v("",!0)],8,y))}});const o=k(P,[["__scopeId","data-v-39d393f6"]]),I=b('<h2 id="导航窗格" tabindex="-1">导航窗格 <a class="header-anchor" href="#导航窗格" aria-label="Permalink to &quot;导航窗格&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>业务场景，页面左上角实现当前页面窗格预览。实现思路主要是把当前页面重渲染在目标元素内，实现视觉上的效果。<br> 尝试过网上插件 dom-to-image、html2canvas等，但是由于目前场景复杂且是由vue框架实现，这些组件不是无法正常功能，就是响应太慢，达不到预期效果。<br> 最终考虑使用iframe元素实现这一效果，实际渲染响应速度很快，达到预期。</p></div><p><a href="/zm-docs/html/minimap.html" target="_blank" class="pe-3">Link to minimap.html</a><a href="/zm-docs/html/minimapcopy.html" target="_blank">Link to minimapCopy.html</a></p>',3),U=a("h2",{id:"乾坤微应用",tabindex:"-1"},[m("乾坤微应用 "),a("a",{class:"header-anchor",href:"#乾坤微应用","aria-label":'Permalink to "乾坤微应用"'},"​")],-1),T=a("h2",{id:"vite-相关插件",tabindex:"-1"},[m("vite 相关插件 "),a("a",{class:"header-anchor",href:"#vite-相关插件","aria-label":'Permalink to "vite 相关插件"'},"​")],-1),V=a("h2",{id:"axios",tabindex:"-1"},[m("axios "),a("a",{class:"header-anchor",href:"#axios","aria-label":'Permalink to "axios"'},"​")],-1),E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"other/xMind.md","filePath":"other/xMind.md","lastUpdated":1693463177000}'),C={name:"other/xMind.md"},w=Object.assign(C,{setup(l){return(i,d)=>(s(),_("div",null,[I,n(o,{xmUrl:"/zm-docs/xmind/iframeThinking.xmind"},null,8,["xmUrl"]),U,n(o,{xmUrl:"/zm-docs/xmind/qiankun.xmind",domId:"xmind-qiankun"},null,8,["xmUrl"]),T,n(o,{xmUrl:"/zm-docs/xmind/vitePlugins.xmind",domId:"xmind-vitePlugins"},null,8,["xmUrl"]),V,n(o,{xmUrl:"/zm-docs/xmind/axios.xmind",domId:"xmind-axios"},null,8,["xmUrl"])]))}});export{E as __pageData,w as default};
