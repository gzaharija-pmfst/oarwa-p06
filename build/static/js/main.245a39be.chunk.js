(this.webpackJsonpvj04=this.webpackJsonpvj04||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(14),u=t.n(r),c=t(4),i=t(3),l=function(e){var n=e.poruka,t=e.promjenaVaznosti,a=e.brisiPoruku,r=n.vazno?"Ozna\u010di kao neva\u017eno":"Ozna\u010di kao va\u017eno";return o.a.createElement("li",{className:"poruka"},n.sadrzaj,o.a.createElement("button",{onClick:t},r),o.a.createElement("button",{onClick:a},"-"))},f=function(){return o.a.createElement("div",{style:{color:"red",fontSize:15,marginTop:20,border:"1px solid black",width:"100%"}},"Alati i okviri za razvoj web aplikacija - PMFST")},s=t(2),p=t.n(s),m=function(){return p.a.get("/api/poruke").then((function(e){return e.data}))},d=function(e){return p.a.post("/api/poruke",e)},v=function(e,n){return p.a.put("".concat("/api/poruke","/").concat(e),n)},k=function(e){return p.a.delete("".concat("/api/poruke","/").concat(e))},b=function(e){var n=Object(a.useState)([]),t=Object(i.a)(n,2),r=t[0],u=t[1],s=Object(a.useState)("...unesi poruku"),p=Object(i.a)(s,2),b=p[0],j=p[1],E=Object(a.useState)(!0),g=Object(i.a)(E,2),h=g[0],z=g[1];Object(a.useEffect)((function(){console.log("Effect hook"),m().then((function(e){console.log("Podaci u\u010ditani"),u(e)}))}),[]),console.log("Renderirano je",r.length,"objekata");var O=h?r:r.filter((function(e){return!0===e.vazno}));return o.a.createElement("div",null,o.a.createElement("h1",null,"Poruke"),o.a.createElement("div",null,o.a.createElement("button",{onClick:function(){return z(!h)}},"Prika\u017ei ",h?"samo va\u017ene":"sve")),o.a.createElement("ul",null,O.map((function(e){return o.a.createElement(l,{key:e.id,poruka:e,brisiPoruku:function(){return n=e.id,void k(n).then((function(e){console.log(e),u(r.filter((function(e){return e.id!==n})))}));var n},promjenaVaznosti:function(){return function(e){var n=r.find((function(n){return n.id===e})),t=Object(c.a)(Object(c.a)({},n),{},{vazno:!n.vazno});v(e,t).then((function(n){console.log(n),u(r.map((function(t){return t.id!==e?t:n.data})))}))}(e.id)}})}))),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log("Klik",e.target);var n={sadrzaj:b,datum:(new Date).toISOString(),vazno:Math.random()>.5};d(n).then((function(e){console.log(e),u(r.concat(e.data)),j("")}))}},o.a.createElement("input",{value:b,onChange:function(e){console.log(e.target.value),j(e.target.value)}}),o.a.createElement("button",{type:"submit"},"Spremi")),o.a.createElement(f,null))};t(37);u.a.render(o.a.createElement(b,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.245a39be.chunk.js.map