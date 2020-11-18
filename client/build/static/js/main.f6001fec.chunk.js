(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c(1),l=c.n(r),a=c(19),n=c.n(a),i=(c(26),c(27),c(5)),o=c(4),j=c.n(o),d=c(3),b=function(e){var t=Object(r.useState)(),c=Object(i.a)(t,2),l=c[0],a=c[1],n=Object(r.useState)(!1),o=Object(i.a)(n,2),b=o[0];o[1];Object(r.useEffect)((function(){j.a.get("http://localhost:8000/api/pets").then((function(e){return a(e.data.pets)}))}),[b]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)(d.a,{to:"/pets/new",className:"nav_bar",children:Object(s.jsx)("h4",{children:"Add New"})})}),Object(s.jsx)("h3",{className:"",children:"These pets are looking for a good home"}),Object(s.jsxs)("table",{className:"table",children:[Object(s.jsx)("thead",{className:"thead-dark",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Type"}),Object(s.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(s.jsx)("tbody",{children:l?l.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:e.name}),Object(s.jsx)("th",{scope:"row",children:e.type}),Object(s.jsxs)("td",{children:[Object(s.jsx)("a",{href:"/pets/".concat(e._id),children:"Details"})," \xa0\xa0",Object(s.jsx)("a",{href:"/pets/".concat(e._id,"/edit"),children:"Edit"})]})]},t)})):""})]})]})},h=function(e){var t=Object(r.useState)({}),c=Object(i.a)(t,2),l=c[0],a=c[1];Object(r.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){return a(e.data.pet)}))}));return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(d.a,{to:"/",className:"nav_bar",children:Object(s.jsx)("h4",{children:"back to home"})}),Object(s.jsxs)("button",{type:"submit",className:"btn btn-danger mb-3",onClick:function(){return e=l._id,void j.a.delete("http://localhost:8000/api/pets/delete/".concat(e)).then((function(e){return Object(d.c)("/")})).catch((function(e){return console.log(e)}));var e},children:["Adopt ",l.name]}),Object(s.jsxs)("h3",{className:"sub_header",children:["Details about: ",l.name]}),Object(s.jsxs)("div",{className:"border border-dark ",children:[Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("h4",{children:"Pet Type:"})}),Object(s.jsx)("div",{class:"col-5",children:Object(s.jsx)("p",{children:l.type})}),Object(s.jsx)("div",{class:"col"})]}),Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("h4",{children:"Description:"})}),Object(s.jsx)("div",{class:"col-5",children:Object(s.jsx)("p",{children:l.description})}),Object(s.jsx)("div",{class:"col"})]}),Object(s.jsxs)("div",{class:"row",children:[Object(s.jsx)("div",{class:"col",children:Object(s.jsx)("h4",{children:"Skills:"})}),Object(s.jsx)("div",{class:"col-5",children:Object(s.jsxs)("ul",{class:"list-group",children:[Object(s.jsx)("li",{class:"list-group-item",children:l.skill_1}),Object(s.jsx)("li",{class:"list-group-item",children:l.skill_2}),Object(s.jsx)("li",{class:"list-group-item",children:l.skill_3})]})}),Object(s.jsx)("div",{class:"col"})]})]})]})},O=c(6),m=c(8),x=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"row mt-4",children:[Object(s.jsx)("div",{className:"col-sm 2"}),Object(s.jsx)("div",{className:"col-sm 8",children:Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col form-group",children:[Object(s.jsx)("label",{children:"Pet Name:"}),Object(s.jsx)("input",{type:"text",name:"name",className:"form-control",onChange:e.onChangeHandler,value:e.form.name}),e.error.name?Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:e.error.name.message}):""]}),Object(s.jsxs)("div",{className:"col form-group",children:[Object(s.jsx)("label",{children:"Skill 1:"}),Object(s.jsx)("input",{type:"text",name:"skill_1",className:"form-control",onChange:e.onChangeHandler,value:e.form.skill_1}),e.error.skill_1?Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:e.error.skill_1.message}):""]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col form-group",children:[Object(s.jsx)("label",{children:"Pet Type:"}),Object(s.jsx)("input",{type:"text",name:"type",className:"form-control",onChange:e.onChangeHandler,value:e.form.type}),e.error.type?Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:e.error.type.message}):""]}),Object(s.jsxs)("div",{className:"col form-group",children:[Object(s.jsx)("label",{children:"Skill 2:"}),Object(s.jsx)("input",{type:"text",name:"skill_2",className:"form-control",onChange:e.onChangeHandler,value:e.form.skill_2}),e.error.skill_2?Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:e.error.skill_2.message}):""]})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col form-group",children:[Object(s.jsx)("label",{children:"Pet Description:"}),Object(s.jsx)("input",{type:"text",name:"description",className:"form-control",onChange:e.onChangeHandler,value:e.form.description}),e.error.description?Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:e.error.description.message}):""]}),Object(s.jsxs)("div",{className:"col form-group",children:[Object(s.jsx)("label",{children:"Skill 3:"}),Object(s.jsx)("input",{type:"text",name:"skill_3",className:"form-control",onChange:e.onChangeHandler,value:e.form.skill_3}),e.error.skill_3?Object(s.jsx)("div",{className:"alert alert-danger",role:"alert",children:e.error.skill_3.message}):""]})]})]})}),Object(s.jsx)("div",{className:"col-sm 2"})]})})},p=function(e){var t=Object(r.useState)({}),c=Object(i.a)(t,2),l=c[0],a=c[1],n=Object(r.useState)({name:"",type:"",description:"",skill_1:"",skill_2:"",skill_3:""}),o=Object(i.a)(n,2),b=o[0],h=o[1];Object(r.useEffect)((function(){j.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){return h(e.data.pet)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)(d.a,{to:"/",className:"nav_bar",children:Object(s.jsx)("h4",{children:"Back to home"})}),Object(s.jsxs)("h3",{children:["Edit: ",b.name]}),Object(s.jsx)("div",{className:"border border-dark"}),Object(s.jsx)(x,{form:b,onChangeHandler:function(e){e.preventDefault(),h(Object(m.a)(Object(m.a)({},b),{},Object(O.a)({},e.target.name,e.target.value)))},error:l}),Object(s.jsx)("button",{type:"submit",className:"btn btn-info mb-3",onClick:function(t){t.preventDefault(),j.a.put("http://localhost:8000/api/pets/update/".concat(e._id),b).then((function(e){e.data.error?a(e.data.error.errors):Object(d.c)("/")}))},children:"Edit Pet"})]})},u=function(e){var t=Object(r.useState)({}),c=Object(i.a)(t,2),l=c[0],a=c[1],n=Object(r.useState)({name:"",type:"",description:"",skill_1:"",skill_2:"",skill_3:""}),o=Object(i.a)(n,2),b=o[0],h=o[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(d.a,{to:"/",className:"nav_bar",children:Object(s.jsx)("h4",{children:"Back to Home"})}),Object(s.jsx)("h3",{children:"Know a pet needing a home?"}),Object(s.jsxs)("div",{className:"border border-dark ",children:[Object(s.jsx)(x,{form:b,onChangeHandler:function(e){e.preventDefault(),h(Object(m.a)(Object(m.a)({},b),{},Object(O.a)({},e.target.name,e.target.value)))},error:l}),Object(s.jsx)("button",{type:"submit",className:"btn btn-info mb-3",onClick:function(e){e.preventDefault(),j.a.post("http://localhost:8000/api/pets/new",b).then((function(e){e.data.error?a(e.data.error.errors):(console.log("It was submitted"),Object(d.c)("/"))})).catch((function(e){return console.log("Something went wrong")}))},children:"Add Pet"})]})]})},v=(c(51),c.p+"static/media/doggie.d866430b.png");var f=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{className:"Header",children:Object(s.jsxs)("h1",{children:[Object(s.jsx)("img",{src:v,className:"rounded float-right",alt:"Dog Image"}),"\xa0\xa0\xa0Pet Shelter "]})}),Object(s.jsxs)(d.b,{children:[Object(s.jsx)(b,{path:"/"}),Object(s.jsx)(u,{path:"/pets/new"}),Object(s.jsx)(h,{path:"/pets/:_id"}),Object(s.jsx)(p,{path:"/pets/:_id/edit"})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,r=t.getFCP,l=t.getLCP,a=t.getTTFB;c(e),s(e),r(e),l(e),a(e)}))};n.a.render(Object(s.jsx)(l.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),g()}},[[52,1,2]]]);
//# sourceMappingURL=main.f6001fec.chunk.js.map