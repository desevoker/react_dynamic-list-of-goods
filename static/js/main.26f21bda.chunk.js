(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,o,n){"use strict";n.r(o);var e,c=n(4),s=n.n(c),r=n(3),d=n(1),i=n.n(d);n(9);!function(t){t[t.None=0]="None",t[t.AllGoods=1]="AllGoods",t[t.OnlyFirst5Goods=2]="OnlyFirst5Goods",t[t.OnlyRedGoods=3]="OnlyRedGoods"}(e||(e={}));function a(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=n(0),u=i.a.memo((function(t){var o=t.goods;return Object(l.jsx)("ul",{children:o.map((function(t){return Object(l.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})})),b=i.a.memo((function(){var t=Object(d.useState)([]),o=Object(r.a)(t,2),n=o[0],c=o[1],s=Object(d.useState)(e.None),i=Object(r.a)(s,2),b=i[0],f=i[1];return Object(d.useEffect)((function(){switch(b){case e.AllGoods:a().then(c);break;case e.OnlyFirst5Goods:a().then((function(t){return t.sort((function(t,o){return t.name.localeCompare(o.name)})).slice(0,5)})).then(c);break;case e.OnlyRedGoods:a().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(c);break;default:c([])}}),[b]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return f(e.AllGoods)},children:"Load all goods"}),Object(l.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return f(e.OnlyFirst5Goods)},children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return f(e.OnlyRedGoods)},children:"Load red goods"}),Object(l.jsx)(u,{goods:n})]})}));s.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))},9:function(t,o,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.26f21bda.chunk.js.map