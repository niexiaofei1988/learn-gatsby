(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{206:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(309),o=n(292);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("img",{src:"https://images.unsplash.com/photo-1504276048855-f3d60e69632f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2785&q=80",alt:"404"}))}},228:function(e,t,n){"use strict";n.d(t,"b",function(){return p});var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(39),s=n.n(c);n.d(t,"a",function(){return s.a}),n.d(t,"c",function(){return c.navigate});n(250);var l=r.a.createContext({});function u(e){var t=e.staticQueryData,n=e.data,a=e.query,i=e.render,o=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var p=function(e){var t=e.data,n=e.query,a=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:n,render:a||i,staticQueryData:e})})};p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},250:function(e,t,n){var a;e.exports=(a=n(291))&&a.default||a},275:function(e,t,n){"use strict";n.d(t,"d",function(){return r}),n.d(t,"b",function(){return i}),n.d(t,"a",function(){return o}),n.d(t,"c",function(){return c});var a=n(263),r=a.a.div.withConfig({displayName:"wrapper__LayoutWrapper",componentId:"sc-4hyxvf-0"})(["height:100vh;"]),i=a.a.main.withConfig({displayName:"wrapper__ContentWrapper",componentId:"sc-4hyxvf-1"})(["margin:0 auto;height:calc(100% - 48px);"]),o=(a.a.a.withConfig({displayName:"wrapper__BlogButtonWrapper",componentId:"sc-4hyxvf-2"})(["padding:8px 12px;text-align:center;text-transform:uppercase;transition:0.5s;background-size:200% auto;color:white;box-shadow:0 0 20px #eee;border-radius:10px;bacgkround:",";background-image:",";&:hover{background-position:right center;}"],function(e){return e.bg||"transparent"},function(e){return e.bgImage}),a.a.nav.withConfig({displayName:"wrapper__BlogLeafWrapper",componentId:"sc-4hyxvf-3"})(["display:flex;flex-wrap:wrap;justify-content:space-between;padding:24px;a{transition:all 0.2s linear;&:hover{text-shadow:1px 1px currentColor;}}"])),c=a.a.div.withConfig({displayName:"wrapper__FlexWrapper",componentId:"sc-4hyxvf-4"})(["display:flex;"])},291:function(e,t,n){"use strict";n.r(t);n(40);var a=n(0),r=n.n(a),i=n(5),o=n.n(i),c=n(67),s=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},292:function(e,t,n){"use strict";var a=n(293),r=n(0),i=n.n(r),o=n(5),c=n.n(o),s=n(320),l=n.n(s),u=n(228);function p(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.b,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}p.defaultProps={lang:"zh",meta:[],keywords:[]},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=p;var d="1025518380"},293:function(e){e.exports={data:{site:{siteMetadata:{title:"个人博客",description:"学习使用 gatsby",author:"凝聚者"}}}}},294:function(e){e.exports={data:{site:{siteMetadata:{title:"个人博客"}}}}},295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={isScrollLink:!0,wrapper:{className:"header2 home-page-wrapper jrhtw9ph4a-editor_css"},page:{className:"home-page"},logo:{className:"header2-logo",children:"https://avatars3.githubusercontent.com/u/16014141?s=400&u=e432731469909d98b2e5ed969e7f80743c49c046&v=4"},LinkMenu:{className:"header2-menu",children:[{name:"home",to:"/",children:"首页",className:"menu-item"},{name:"blogs",to:"blogs",children:"博客",className:"menu-item"},{name:"about",to:"about",children:"关于我",className:"menu-item"}]},mobileMenu:{className:"header2-mobile-menu"},Menu:{children:[{name:"Banner3_0",to:"Banner3_0",children:"首页",className:"active menu-item"}]}}},309:function(e,t,n){"use strict";var a=n(294),r=n(0),i=n.n(r),o=n(228),c=(n(311),n(314)),s=n.n(c),l=(n(285),n(286)),u=n.n(l),p=(n(40),n(101),n(65),n(41),n(284),n(100)),d=n.n(p),m=n(8),f=n.n(m),h=n(233),g=n(295),b=n.n(g),y=(n(164),function(e){function t(t){var n;return(n=e.call(this,t)||this).phoneClick=function(){var e=!n.state.phoneOpen;n.setState({phoneOpen:e})},n.state={phoneOpen:!1},n}return f()(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.isMobile,a=d()(t,["isMobile"]),r=this.state.phoneOpen,c=b.a.LinkMenu,s=c.children,l=Object.keys(s).map(function(e,t){return i.a.createElement(o.a,Object.assign({key:""+t},s[e]),s[e].children)}),p=void 0===r?300:null;return i.a.createElement(h.b,Object.assign({component:"header",animation:{opacity:0,type:"from"}},b.a.wrapper,a),i.a.createElement("div",Object.assign({},b.a.page,{className:b.a.page.className+(r?" open":"")}),i.a.createElement(h.b,Object.assign({animation:{x:-30,type:"from",ease:"easeOutQuad"}},b.a.logo),i.a.createElement(u.a,{src:b.a.logo.children})),n&&i.a.createElement("div",Object.assign({},b.a.mobileMenu,{onClick:function(){e.phoneClick()}})),i.a.createElement(h.b,Object.assign({},c,{animation:n?{height:0,duration:300,onComplete:function(t){e.state.phoneOpen&&(t.target.style.height="auto")},ease:"easeInOutQuad"}:null,moment:p,reverse:!!r}),l)))},t}(i.a.Component)),v=(n(325),n(327)),w=n.n(v),E=n(263);function x(){var e=Object(r.useState)(0),t=e[0],n=e[1];function a(){var e=window.innerHeight,t=window.scrollY,a=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight);n(function(e,t){return e/t*100}(t,a-e))}return Object(r.useEffect)(function(){return window.addEventListener("scroll",a),function(){window.removeEventListener("scroll",a)}},[]),{percent:t}}var O=Object(E.a)(w.a).withConfig({displayName:"Progress__ProgressWrapper",componentId:"sc-1fl1jkt-0"})(["&.ant-progress{position:fixed;top:0;left:0;line-height:1;font-size:0;}.ant-progress-bg{height:5px !important;}"]);function k(){var e=x().percent;return e?i.a.createElement(O,{percent:e,showInfo:!1,strokeColor:{"0%":"#fff","100%":"#87d068"}}):null}var j=function(){return i.a.createElement(s.a,null,i.a.createElement(k,null),i.a.createElement(y,null))},N=n(275);t.a=function(e){var t=e.children,n=e.location;return i.a.createElement(o.b,{query:"2994927498",render:function(e){return i.a.createElement(N.d,null,i.a.createElement(j,{location:n,siteTitle:e.site.siteMetadata.title}),i.a.createElement(N.b,null,t))},data:a})}}}]);
//# sourceMappingURL=component---src-pages-404-js-81692cc19bb0bd5f34b6.js.map