(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"assets/images/khabib.png","firstName":"Khabib","lastName":"Nurmagomedov","status":"Active"},{"id":2,"image":"/assets/images/conor.png","firstName":"Conor","lastName":"McGregor","status":"Active"},{"id":3,"image":"/assets/images/rashad.png","firstName":"Rashad","lastName":"Evans","status":"Retired"},{"id":4,"image":"/assets/images/cody.png","firstName":"Cody","lastName":"Garbrandt","status":"Active"},{"id":5,"image":"/assets/images/forrest.png","firstName":"Forrest","lastName":"Griffin","status":"Retired"},{"id":6,"image":"/assets/images/mark.png","firstName":"Mark","lastName":"Coleman","status":"Retired"},{"id":7,"image":"/assets/images/valentina.png","firstName":"Valentina","lastName":"Shevchenko","status":"Active"}]')},,,,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(8),i=a.n(s),c=(a(17),a(18),a(6)),l=a(5);a(19),a(20);var o=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"UFC Roster Directory"),r.a.createElement("input",{type:"text",placeholder:"Search",onChange:function(t){return e.updateSearch(t)},value:e.fighters}))},m=a(24);function u(e){var t,a;return r.a.createElement("div",null,r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Fighter"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Status"))),r.a.createElement("tbody",null,(t=e,r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("img",{alt:t.firstName,src:t.image})),r.a.createElement("td",null,t.firstName),r.a.createElement("td",null,t.lastName),r.a.createElement("td",null,t.status))))))}var f=a(1);function d(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],s=t[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),d=m[0],g=m[1],h=Object(n.useState)([]),E=Object(l.a)(h,2),p=E[0],N=E[1];Object(n.useEffect)((function(){s(f)}),[]);return Object(n.useEffect)((function(){N(a.filter((function(e){return e.firstName.toLowerCase().includes(d.toLowerCase())})))}),[d,a]),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){f.sort((function(e,t){return e.firstName.localeCompare(t.firstName)})),s(Object(c.a)(f))}},"ASC"),r.a.createElement("button",{onClick:function(){f.sort((function(e,t){return t.firstName.localeCompare(e.firstName)})),s(Object(c.a)(f))}},"DSC"),r.a.createElement(o,{search:f,updateSearch:function(e){var t=e.target.value;console.log(t),g(t)}}),p.map((function(e,t){return r.a.createElement(u,Object.assign({key:t},e,{fighters:f}))})))}function g(){return r.a.createElement("div",null,r.a.createElement(d,null))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(21);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.fe1826cf.chunk.js.map