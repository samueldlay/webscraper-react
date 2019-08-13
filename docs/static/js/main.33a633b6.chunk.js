(window.webpackJsonpwebscraper=window.webpackJsonpwebscraper||[]).push([[0],{24:function(e,t,n){e.exports=n(37)},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(4),i=n(3),c=n(1),l=n.n(c),s=n(16),u=n.n(s),o=n(2);var d=n(8);function m(){var e=Object(a.a)(["\n  display: inline-block;\n  width: 2em;\n  user-select: none;\n  opacity: 0.3;\n"]);return m=function(){return e},e}function f(){var e=Object(a.a)(["\n  text-align: left;\n  margin: 1em 0;\n  padding: 0.5em;\n\n  & .token-line {\n    line-height: 1.3em;\n    height: 1.3em;\n  }\n"]);return f=function(){return e},e}function p(){var e=Object(a.a)(["\n  font-family: sans-serif;\n  text-align: center;\n"]);return p=function(){return e},e}d.a.div(p());var b=d.a.pre(f()),v=d.a.span(m()),g=n(14),h=n(20),y=n.n(h),E='\nexport default function parseHTML(html) {\n  const document2 = document.createElement("div");\n  document2.innerHTML = html;\n  ["script", "style"].forEach(tag =>\n    document2.querySelectorAll(tag).forEach(el => el.remove())\n  );\n\n  const [facultyListEl, supportListEl] = [\n    ...document2.querySelectorAll("div")\n  ].filter(\n    div =>\n      div.getAttribute("id") &&\n      div.getAttribute("id").includes("itemsContainer")\n  ); //returning an array of two elements\n\n  const facThumbnailSize = [...facultyListEl.querySelectorAll("div")]\n    .filter(\n      div =>\n        div.getAttribute("data-displayer-uri") &&\n        div.getAttribute("data-displayer-uri").includes(".jpg")\n    )\n    .map(\n      imgDiv =>\n        "https://static.wixstatic.com/media/" +\n        imgDiv.dataset.displayerUri +\n        "/v1/fill/w_128,h_146,al_c,q_80,usm_0.66_1.00_0.01/965962_67f65640c28f41fabb25d6788d3c00d3~mv2.webp"\n    );\n\n  const facExpandedSize = [...facultyListEl.querySelectorAll("div")]\n    .filter(\n      div =>\n        div.getAttribute("data-displayer-uri") &&\n        div.getAttribute("data-displayer-uri").includes(".jpg")\n    )\n    .map(\n      imgDiv =>\n        "https://static.wixstatic.com/media/" +\n        imgDiv.dataset.displayerUri +\n        "/v1/fill/w_565,h_706,al_c,q_90,usm_0.66_1.00_0.01/965962_ca782da17d504399b0601d1f9513f516~mv2.webp"\n    );\n\n  const supThumbnailSize = [...supportListEl.querySelectorAll("div")]\n    .filter(\n      div =>\n        div.getAttribute("data-displayer-uri") &&\n        div.getAttribute("data-displayer-uri").includes("")\n    )\n    .map(\n      imgDiv =>\n        "https://static.wixstatic.com/media/" +\n        imgDiv.dataset.displayerUri +\n        "/v1/fill/w_128,h_146,al_c,q_80,usm_0.66_1.00_0.01/965962_67f65640c28f41fabb25d6788d3c00d3~mv2.webp"\n    );\n\n  const supExpandedSize = [...supportListEl.querySelectorAll("div")]\n    .filter(\n      div =>\n        div.getAttribute("data-displayer-uri") &&\n        div.getAttribute("data-displayer-uri").includes("")\n    )\n    .map(\n      imgDiv =>\n        "https://static.wixstatic.com/media/" +\n        imgDiv.dataset.displayerUri +\n        "/v1/fill/w_565,h_706,al_c,q_90,usm_0.66_1.00_0.01/965962_ca782da17d504399b0601d1f9513f516~mv2.webp"\n    );\n\n  const faculty = [...facultyListEl.childNodes]\n    .filter(node => node.matches("div"))\n    .map((div, i) => {\n      const name = div.querySelector("h6").textContent.trim();\n\n      return {\n        name,\n        imgThumbnail: facThumbnailSize[i],\n        imgExpanded: facExpandedSize[i],\n        type: "faculty"\n      };\n    });\n\n  const support = [...supportListEl.childNodes]\n    .filter(node => node.matches("div"))\n    .map((div, i) => {\n      const name = div.querySelector("h6").textContent.trim();\n      return {\n        name,\n        imgThumbnail: supThumbnailSize[i],\n        imgExpanded: supExpandedSize[i],\n        type: "support"\n      };\n    });\n\n  const staff = [...faculty, ...support];\n  return staff;\n}\n\n'.trim(),_=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)(function(){e.html?a(e.html):e.json?a(e.json):a(E)},[e.json,e.html]),l.a.createElement(g.a,Object.assign({},g.b,{theme:y.a,code:r,language:"jsx"}),function(e){var t=e.className,n=e.style,r=e.tokens,a=e.getLineProps,i=e.getTokenProps;return l.a.createElement(b,{className:t,style:n},r.map(function(e,t){return l.a.createElement("div",a({line:e,key:t}),l.a.createElement(v,null,t+1),e.map(function(e,t){return l.a.createElement("span",i({token:e,key:t}))}))}))})},O=n(13),j=n.n(O),w=n(21);n(36);var x=n(9);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function q(){var e=Object(a.a)(["\n        --size: 4rem;\n        height: var(--size);\n        width: var(--size);\n        animation: 1s linear 0s infinite ",";\n      "]);return q=function(){return e},e}function N(){var e=Object(a.a)(["\n        from { transform: rotate(0deg); }\n        to { transform: rotate(360deg); }\n      "]);return N=function(){return e},e}function L(e){return e.isLoading?l.a.createElement("div",{className:"JSONContent"},l.a.createElement("h2",null,"Creating JSON data..."),l.a.createElement(k,null)):e.error?l.a.createElement("div",{className:"JSONContent"},l.a.createElement("h2",null,e.error.message)):l.a.createElement("div",{className:"JSONContent"},l.a.createElement("h3",{style:{color:"rgb(221, 28, 141)"}},"Hover over images for JSON data"),function(e){var t=document.createElement("div");t.innerHTML=e,["script","style"].forEach(function(e){return t.querySelectorAll(e).forEach(function(e){return e.remove()})});var n=Object(o.a)(t.querySelectorAll("div")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").includes("itemsContainer")}),r=Object(i.a)(n,2),a=r[0],c=r[1],l=Object(o.a)(a.querySelectorAll("div")).filter(function(e){return e.getAttribute("data-displayer-uri")&&e.getAttribute("data-displayer-uri").includes(".jpg")}).map(function(e){return"https://static.wixstatic.com/media/"+e.dataset.displayerUri+"/v1/fill/w_128,h_146,al_c,q_80,usm_0.66_1.00_0.01/965962_67f65640c28f41fabb25d6788d3c00d3~mv2.webp"}),s=Object(o.a)(a.querySelectorAll("div")).filter(function(e){return e.getAttribute("data-displayer-uri")&&e.getAttribute("data-displayer-uri").includes(".jpg")}).map(function(e){return"https://static.wixstatic.com/media/"+e.dataset.displayerUri+"/v1/fill/w_565,h_706,al_c,q_90,usm_0.66_1.00_0.01/965962_ca782da17d504399b0601d1f9513f516~mv2.webp"}),u=Object(o.a)(c.querySelectorAll("div")).filter(function(e){return e.getAttribute("data-displayer-uri")&&e.getAttribute("data-displayer-uri").includes("")}).map(function(e){return"https://static.wixstatic.com/media/"+e.dataset.displayerUri+"/v1/fill/w_128,h_146,al_c,q_80,usm_0.66_1.00_0.01/965962_67f65640c28f41fabb25d6788d3c00d3~mv2.webp"}),d=Object(o.a)(c.querySelectorAll("div")).filter(function(e){return e.getAttribute("data-displayer-uri")&&e.getAttribute("data-displayer-uri").includes("")}).map(function(e){return"https://static.wixstatic.com/media/"+e.dataset.displayerUri+"/v1/fill/w_565,h_706,al_c,q_90,usm_0.66_1.00_0.01/965962_ca782da17d504399b0601d1f9513f516~mv2.webp"}),m=Object(o.a)(a.childNodes).filter(function(e){return e.matches("div")}).map(function(e,t){return{name:e.querySelector("h6").textContent.trim(),imgThumbnail:l[t],imgExpanded:s[t],type:"faculty"}}),f=Object(o.a)(c.childNodes).filter(function(e){return e.matches("div")}).map(function(e,t){return{name:e.querySelector("h6").textContent.trim(),imgThumbnail:u[t],imgExpanded:d[t],type:"support"}});return[].concat(Object(o.a)(m),Object(o.a)(f))}(e.data).map(function(e){return l.a.createElement("div",{key:e.name},l.a.createElement("div",{className:"tooltip"},l.a.createElement("img",{style:{borderRadius:"5px"},src:e.imgThumbnail,alt:e.name}),l.a.createElement("p",null,e.name,": ",e.type),l.a.createElement("div",{className:"tooltiptext"},l.a.createElement(_,{json:JSON.stringify(e,null,2)}))))}))}function k(e){var t={get frames(){return Object(x.c)(N())},get spinner(){return Object(x.a)(q(),this.frames)}};return Object(c.createElement)("div",null,Object(x.b)("img",{css:t.spinner,src:"https://loading.io/s/asset/preview/279517.png"}))}function T(e){return e.isLoading?l.a.createElement("div",{className:"otherContent loading"},l.a.createElement("h2",null,"Scraping HTML..."),l.a.createElement(k,null)):e.error?l.a.createElement("div",{className:"otherContent"},l.a.createElement("h2",null,e.error.message)):l.a.createElement("div",{className:"otherContent"},l.a.createElement("h3",{style:{color:"rgb(221, 28, 141)"}},"HTML Data:"),l.a.createElement(_,{html:e.data}))}function C(){return l.a.createElement("div",{className:"otherContent"},l.a.createElement("h3",{style:{color:"rgb(221, 28, 141)"}},"Webscraper Function:"),l.a.createElement(_,null))}u.a.render(l.a.createElement(function(){var e=function(e,t,n){var r=Object(c.useState)(null),a=Object(i.a)(r,2),l=a[0],s=a[1],u=Object(c.useState)(null),d=Object(i.a)(u,2),m=d[0],f=d[1],p=Object(c.useState)(!0),b=Object(i.a)(p,2),v=b[0],g=b[1],h=function(e,t,n){var r=JSON.stringify;return e instanceof Request&&(e=r(function e(t){if(!Array.isArray(t))return t;var n={},r=!0,a=!1,c=void 0;try{for(var l,s=t[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var u=l.value,o=Object(i.a)(u,2),d=o[0],m=o[1];n[d]=e(m)}}catch(f){a=!0,c=f}finally{try{r||null==s.return||s.return()}finally{if(a)throw c}}return n}(function(e){if(!e instanceof Request)throw Object.assign(new Error,{name:"TypeError",message:"Argument must be a Request object"});function t(e){var t=[];for(var n in e)(["boolean","number","string"].includes(typeof e[n])||null===e[n])&&t.push([n,e[n]]);return t.sort()}return e=e.clone(),[].concat(Object(o.a)(t(e)),[["headers",Object(o.a)(e.headers).sort()],["signal",t(e.signal)]]).sort()}(e)))),r(e)+r(t)+r(n)}(e,t,n);return Object(c.useEffect)(function(){g(!0),s(null),f(null),Object(w.a)(j.a.mark(function r(){var a;return j.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e){r.next=3;break}throw Object.assign(new Error,{name:"FetchError",message:"No URL provided"});case 3:return r.next=5,fetch(e,t);case 5:if(!(a=r.sent).ok){r.next=22;break}if(!["arrayBuffer","blob","formData","json","text"].includes(n)){r.next=15;break}return r.t0=s,r.next=11,a[n]();case 11:r.t1=r.sent,(0,r.t0)(r.t1),r.next=20;break;case 15:return r.t2=s,r.next=18,a.text();case 18:r.t3=r.sent,(0,r.t2)(r.t3);case 20:r.next=23;break;case 22:throw Object.assign(new Error,{name:"FetchError",message:"Response not OK",response:a});case 23:r.next=28;break;case 25:r.prev=25,r.t4=r.catch(0),f(r.t4);case 28:return r.prev=28,g(!1),r.finish(28);case 31:case"end":return r.stop()}},r,null,[[0,25,28,31]])}))()},[h]),{data:l,error:m,isLoading:v}}(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.url,n=void 0===t?"":t,r=e.init;null!==r&&void 0!==r&&"object"===typeof r||(r={});var a={};return r.headers&&(a=r.headers),new Request("https://cors-proxy.samueldlay.now.sh",A({},r,{},{headers:A({},a,{},{"x-proxied-url":n})}))}({url:"https://www.pacehighschool.net/faculty-and-staff"})),t=e.data,n=e.error,r=e.isLoading;return l.a.createElement("div",{className:"App",style:{display:"flex"}},l.a.createElement("div",null,l.a.createElement(T,{data:t,error:n,isLoading:r}),l.a.createElement(C,null)),l.a.createElement("div",null,l.a.createElement(L,{data:t,error:n,isLoading:r})))},null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.33a633b6.chunk.js.map