(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{11:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(5),o=c.n(s),a=(c(11),c(2)),i=c.p+"static/media/bg-desktop-light.3508d620.jpg",l=c(0),u=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=document.querySelector(":root");e.style=c?"--main-color: white ; \n               --bk-color: hsl(0, 0%, 98%) ;\n               --bk-image: url(".concat(i,");\n               --main-Fcolor: hsl(235, 19%, 35%);\n               --seconadry-Fcolor: hsl(236, 9%, 61%);\n               --border-color: hsl(233, 11%, 84%) ;\n               --hover-color: black ;\n               --selection-color: blue ;\n               "):""}),[c]),Object(l.jsxs)("header",{className:"mb-2 py-3 custom-container col-md-6 col-sm-8 col-11 d-flex justify-content-between",children:[Object(l.jsx)("h2",{className:" text-white fw-bold col-xl-10 col-11 px-3 ",children:"TODO"}),Object(l.jsxs)("div",{className:"theme-icon col ms-xl-3 ",children:[c&&Object(l.jsx)("i",{className:"bi bi-moon-fill btn fs-5",onClick:function(){r(!1)}}),!c&&Object(l.jsx)("i",{className:"bi bi-brightness-high-fill btn fs-5",onClick:function(){r(!0)}})]})]})},d=function(e){var t=e.RefreshList,c=Object(n.useState)(""),r=Object(a.a)(c,2),s=r[0],o=r[1];return Object(l.jsxs)("div",{className:"custom-container col-md-6 col-sm-8 col-11 ",children:[Object(l.jsx)("div",{className:"check-box text-center"}),Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault();var c={content:s};fetch("https://my-json-server.typicode.com/hatem0656/Todo-App-Server/tasks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)}).then((function(){t(),o("")}))},children:Object(l.jsx)("input",{className:"form-control task ms-2",type:"text",placeholder:"Create a new todo..",value:s,"aria-label":"new todo field",onChange:function(e){return o(e.target.value)}})})]})},f=function(e){var t=e.content,c=e.id,r=e.RefreshList,s=e.handleChecked,o=Object(n.useState)(!1),i=Object(a.a)(o,2),u=i[0],d=i[1],f=Object(n.useRef)(!0),b=Object(n.useRef)(),j=Object(n.useRef)();return Object(n.useEffect)((function(){f.current?f.current=!1:(b.current.classList.toggle("checked"),j.current.classList.toggle("checked"),s())}),[u]),Object(l.jsxs)("div",{draggable:"true",ref:j,className:"list task w-100 ms-sm-3 ms-2",id:c,children:[Object(l.jsx)("div",{ref:b,className:"check-box text-center ",onClick:function(){return d(!u)},children:u&&Object(l.jsx)("i",{className:"bi bi-check text-white "})}),Object(l.jsx)("span",{children:t}),Object(l.jsx)("i",{className:"bi bi-x-lg delete",onClick:function(){fetch("https://my-json-server.typicode.com/hatem0656/Todo-App-Server/tasks/"+c,{method:"DELETE"}).then((function(){return r()}))}})]},c)},b=c(4),j=c.n(b),m=c(6),h=function(e){var t=e.RefreshList,c=e.taskNo,r=Object(n.useRef)({}),s=Object(n.useRef)({}),o=function(){r.current=document.querySelectorAll(".list.checked"),s.current=document.querySelectorAll(".list:not(.checked)")};Object(n.useEffect)((function(){o()}));var a=function(e){document.querySelector(".selected").classList.remove("selected"),e.target.classList.add("selected")},i=function(){var e=Object(m.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(),c=0;case 2:if(!(c<r.current.length)){e.next=8;break}return e.next=5,fetch("https://my-json-server.typicode.com/hatem0656/Todo-App-Server/tasks/"+r.current[c].id,{method:"DELETE"});case 5:c++,e.next=2;break;case 8:t();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{nodrag:"true",className:"filters d-flex align-items-center text-center pt-1 px-4 w-100 ms-sm-3 ms-2",children:[Object(l.jsxs)("span",{children:[c," items left"]}),Object(l.jsx)("button",{nodrag:"true",className:"all ms-auto btn selected",onClick:function(e){a(e),o(),document.querySelectorAll(".list").forEach((function(e){return e.style.display="block"}))},children:"All"}),Object(l.jsx)("button",{nodrag:"true",className:"active btn ",onClick:function(e){a(e),o(),r.current.forEach((function(e){return e.style.display="none"})),s.current.forEach((function(e){return e.style.display="block"}))},children:"Active"}),Object(l.jsx)("button",{nodrag:"true",className:"completed me-auto btn",onClick:function(e){a(e),o(),s.current.forEach((function(e){return e.style.display="none"})),r.current.forEach((function(e){return e.style.display="block"}))},children:"Completed"}),Object(l.jsx)("button",{nodrag:"true",className:"clear px-0 btn",onClick:i,children:"Clear Completed"})]})},O=function(e){var t=e.tasks,c=e.RefreshList,r=Object(n.useState)(document.querySelectorAll(".list:not(.checked)").length),s=Object(a.a)(r,2),o=s[0],i=s[1],u=function(){i(document.querySelectorAll(".list:not(.checked)").length)};Object(n.useEffect)(u,[c]);var d=Object(n.useRef)();return Object(l.jsxs)("section",{className:"custom-container my-4 col-md-6 col-sm-8 col-11 d-flex flex-column justify-content-sm-center align-items-sm-center",onDragStart:function(e){return t=e,d.current=t.target,void(t.target.style.opacity="0.5");var t},onDragEnd:function(e){e.target.style.opacity=""},onDragOver:function(e){var t;e.target.hasAttribute("nodrag")||((t=e).preventDefault(),t.target!==d.current&&(t.target.style.borderTop="1px solid darkturquoise"))},onDragLeave:function(e){e.target.style.border=""},onDrop:function(e){e.target.hasAttribute("nodrag")||function(e){e.preventDefault(),e.target.style.border="";var t=e.target,c=d.current.getBoundingClientRect(),n=t.getBoundingClientRect();c.y<n.y?t.insertAdjacentElement("afterend",d.current):t.insertAdjacentElement("beforebegin",d.current)}(e)},children:[t.map((function(e){return Object(l.jsx)(f,{content:e.content,id:e.id,RefreshList:c,handleChecked:u},e.id)})),Object(l.jsx)(h,{RefreshList:c,taskNo:o}),Object(l.jsx)("h3",{className:"hint text-center my-5",children:"Drag and drop to re-order list"})]})},p=function(e,t){var c=Object(n.useState)(!1),r=Object(a.a)(c,2),s=r[0],o=r[1],i=Object(n.useState)(null),l=Object(a.a)(i,2),u=l[0],d=l[1],f=Object(n.useState)(null),b=Object(a.a)(f,2),j=b[0],m=b[1];return Object(n.useEffect)((function(){setTimeout((function(){o(!0),fetch(e).then((function(e){if(!e.ok)throw Error("could not fetch the data from the resource");return e.json()})).then((function(e){d(e),o(!1),m(null)})).catch((function(e){o(!1),m(e.message)}))}),10)}),[e,t]),{loading:s,data:u,error:j}},x=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],r=t[1],s=p("https://my-json-server.typicode.com/hatem0656/Todo-App-Server/tasks",c),o=s.loading,i=s.data,f=s.error,b=function(){return r(!c)};return Object(l.jsxs)("div",{className:"container-lg d-flex flex-column align-items-sm-center",children:[Object(l.jsx)(u,{}),Object(l.jsxs)("section",{className:"home d-flex flex-column justify-content-sm-center align-items-sm-center w-100",children:[Object(l.jsx)(d,{RefreshList:b}),f&&Object(l.jsxs)("div",{className:"text-white mt-5",children:[" ",f.message]}),o&&Object(l.jsx)("div",{children:" Loading.."}),i&&Object(l.jsx)(O,{tasks:i,RefreshList:b})]})]})};var g=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(x,{})})};c(14);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.98174580.chunk.js.map