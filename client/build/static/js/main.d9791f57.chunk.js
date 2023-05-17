(this["webpackJsonpzonagrill-ordering-form"]=this["webpackJsonpzonagrill-ordering-form"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(23),r=n.n(c),i=n(4),o=n(9),l=n(2),j=n.p+"static/media/logo.d90fb617.png",b=(n(29),n(0)),d=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"logo",src:j,alt:"Zona Grill logo"}),Object(b.jsx)("h2",{className:"eventName",children:e.name})]})},u=n(5),h=n.n(u),m=n(10),O=n(14),p=n(15),x=new(function(){function e(){Object(O.a)(this,e),this.submitted=!1}return Object(p.a)(e,[{key:"submit",value:function(e){this.submitted=!0,e()}},{key:"doneSubmit",value:function(e){this.submitted=!1,e()}},{key:"IsSubmitted",value:function(){return this.submitted}}]),e}()),f=(n(21),Object(l.g)((function(e){var t=Object(s.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(s.useState)(),u=Object(i.a)(d,2),O=u[0],p=u[1],f=Object(s.useState)(),v=Object(i.a)(f,2),N=v[0],g=v[1],y=Object(s.useState)(),k=Object(i.a)(y,2),C=k[0],S=k[1],P=Object(s.useState)(),w=Object(i.a)(P,2),A=w[0],G=w[1],z=Object(s.useState)(),T=Object(i.a)(z,2),q=T[0],B=T[1],I=function(){var t=Object(m.a)(h.a.mark((function t(n){var s,c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),s={id:1,phoneNumber:a,fname:l,lname:O,appetizer:N,entree:C,drink:A,comments:q},void 0!==a&&void 0!==l&&void 0!==O&&void 0!==N&&void 0!==C&&void 0!==A){t.next=6;break}alert("Please fill out all the required fields"),t.next=21;break;case 6:return t.prev=6,t.next=9,fetch("/api/order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phoneNumber:s.phoneNumber,fname:s.fname,lname:s.lname,appetizer:s.appetizer,entree:s.entree,drink:s.drink,comments:s.comments,ready:"pending"})});case 9:return c=t.sent,t.next=12,c.json();case 12:r=t.sent,console.log(r),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(6),console.log(t.t0);case 19:e.setOrder(s),x.submit((function(){e.history.push("/confirmation")}));case 21:case"end":return t.stop()}}),t,null,[[6,16]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"form",children:[Object(b.jsx)("h2",{className:"subtitle",children:"Introduction"}),Object(b.jsxs)("p",{className:"disclaimer",children:["Zona Grill Venezuelan Food is happy to serve you at this event! In order to expedite our service we ask that you submit your order in advance using the form below.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Orders will only be accepted until ",Object(b.jsx)("span",{className:"deadline",children:"May 21, 2023 @ 6pm."})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{className:"subtitle",children:"1. Personal Information"}),Object(b.jsx)("label",{className:"",children:"You must enter valid information to proceed"}),Object(b.jsxs)("div",{className:"section",children:[Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("label",{className:"label",children:["Phone Number",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("input",{className:"input",type:"text",onChange:function(e){return c(e.target.value)}})]}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("label",{className:"label",children:["First Name",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("input",{className:"input",type:"text",onChange:function(e){return j(e.target.value)}})]}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("label",{className:"label",children:["Last Name",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("input",{className:"input",type:"text",onChange:function(e){return p(e.target.value)}})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{className:"subtitle",children:"2. Order"}),Object(b.jsxs)("div",{className:"section",children:[Object(b.jsx)("label",{className:"label",children:"Check out our menu for ingredients and images:"}),Object(b.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://zonagrill.us/menu",className:"btn",id:"btnMenu",children:"Zona Grill Menu"}),Object(b.jsx)("br",{}),Object(b.jsx)("label",{className:"",children:"Note: not all items on menu are available for selection"}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("label",{className:"label",children:["Choose an appetizer",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("select",{className:"input",onChange:function(e){return g(e.target.value)},children:["","None","Hot Dog","Teque\xf1os"].map((function(e){return Object(b.jsx)("option",{children:e},e)}))})]}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("label",{className:"label",children:["Choose an entree",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("select",{className:"input",onChange:function(e){return S(e.target.value)},children:["","None","Cachapa: Guayan\xe9s Cheese","Mixed Cachapa: Guayan\xe9s Cheese & Shredded Beef","Mixed Cachapa: Guayan\xe9s Cheese & Shredded Chicken","Caraque\xf1a: Beef Patty","Caraque\xf1a: Grilled Chicken","Caraque\xf1a: Grilled Pork","Arepa: Reina Pepia","Arepa: Shredded Beef","Arepa: Shredded Chicken","Arepa: Grilled Pork","Arepa: Shredded White Cheese","Arepa: Shredded Gouda Cheese","Arepa: Soft Guayan\xe9s Cheese","Arepa: Pelua","Arepa: Pelua Vieja","Arepa: Catira","Arepa: Catira Vieja","Arepa: Sifrina","Pepito: Steak","Pepito: Grilled Chicken","Pepito: Mixed"].map((function(e){return Object(b.jsx)("option",{children:e},e)}))})]}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsxs)("label",{className:"label",children:["Choose a drink",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("select",{className:"input",onChange:function(e){return G(e.target.value)},children:["","None","Water bottle","Coke","Zero","Sprite","Passion Fruit Juice","Papel\xf3n con Lim\xf3n (Brown Sugar Lemonade)","Strawberry Frescolita"].map((function(e){return Object(b.jsx)("option",{children:e},e)}))})]})]}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{className:"subtitle",children:"3. Comments "}),Object(b.jsxs)("div",{className:"question",children:[Object(b.jsx)("label",{className:"label",children:"Use this space to make any modifications to your order, or leave a note to the chef."}),Object(b.jsx)("input",{className:"inputBox",type:"text",onChange:function(e){return B(e.target.value)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("br",{}),Object(b.jsx)("h2",{className:"subtitle",children:"Warning!"}),Object(b.jsxs)("p",{className:"deadline",children:["Please revise your order before submitting to avoid mistakes. Only submit one form per person.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsx)("button",{className:"submit",onClick:I,children:"SUBMIT"})]})})}))),v=(n(40),function(e){var t=e.setOrder;return Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:"/admin/login",children:Object(b.jsx)("button",{className:"btn",children:"ADMIN LOGIN"})}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(d,{name:"Goodyear Belts Corporate Event"}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(f,{setOrder:t})]})}),N=(n(41),function(e){var t=e.order;return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{name:"Thermofisher Corporate Event"}),t&&Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"thankYou",children:["Thank you for ordering, ",t.fname,"!"]}),Object(b.jsx)("h3",{className:"screenshot",children:"Take a screenshot of your order for your records:"}),Object(b.jsxs)("div",{className:"receipt",children:[Object(b.jsx)("h1",{className:"title",children:"RECEIPT"}),Object(b.jsxs)("h2",{className:"items",children:["Name: ",t.lname,", ",t.fname]}),Object(b.jsxs)("h2",{className:"items",children:["Entree: ",t.entree]}),Object(b.jsxs)("h2",{className:"items",children:["Appetizer: ",t.appetizer]}),Object(b.jsxs)("h2",{className:"items",children:["Drink: ",t.drink]}),Object(b.jsxs)("h2",{className:"items",children:["Comments: ",t.comments]}),Object(b.jsx)("br",{})]})]},t.id),Object(b.jsx)(o.b,{to:"/order",children:"Back to Order"})]})}),g=new(function(){function e(){Object(O.a)(this,e),this.authenticated=!1}return Object(p.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),y=Object(l.g)((function(e){var t=Object(s.useState)(),n=Object(i.a)(t,2),a=n[0],c=n[1],r=Object(s.useState)(),l=Object(i.a)(r,2),j=l[0],d=l[1],u=Object(s.useState)(),O=Object(i.a)(u,2),p=O[0],x=O[1],f=function(){var t=Object(m.a)(h.a.mark((function t(n){var s,c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,password:j})});case 4:return s=t.sent,t.next=7,s.json();case 7:"Logged in!"===(c=t.sent).message?(x("Signing in..."),g.login((function(){e.history.push("/admin/".concat(519924812089420,"/orders"))}))):x(c.message),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),x(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Admin Login"}),Object(b.jsxs)("form",{className:"admin",children:[Object(b.jsxs)("label",{className:"label",children:["Username",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("input",{className:"inputLogin",type:"text",onChange:function(e){return c(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{className:"label",children:["Password",Object(b.jsx)("span",{className:"star",children:" *"})]}),Object(b.jsx)("input",{className:"inputLogin",type:"text",onChange:function(e){return d(e.target.value)}}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"signin",onClick:f,children:"Sign in"}),Object(b.jsx)("h3",{children:p})]}),Object(b.jsx)("h5",{children:"This page is for admins only. If you are not an admin, please return to order"}),Object(b.jsx)(o.b,{to:"/order",children:"Back to Order"})]})})),k=(n(22),Object(l.g)((function(e){var t=Object(s.useState)([]),n=Object(i.a)(t,2),a=n[0],c=n[1];Object(s.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/admin/ready");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.orders),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[a]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"button",onClick:function(){g.logout((function(){e.history.push("/admin/login")}))},children:"Logout"}),Object(b.jsx)("button",{className:"buttonB",onClick:function(){e.history.push("/admin/519924812089420/orders")},children:"Pending Orders"}),Object(b.jsx)("h1",{className:"header",children:"Ready Orders"}),a?a.map((function(e){return Object(b.jsxs)("div",{className:"order",children:[Object(b.jsx)("br",{}),Object(b.jsxs)("p",{children:["Name: ",e.lname,", ",e.fname]}),Object(b.jsxs)("p",{children:["Entree: ",e.entree]}),Object(b.jsxs)("p",{children:["Appetizer: ",e.appetizer]}),Object(b.jsxs)("p",{children:["Drink: ",e.drink]}),Object(b.jsxs)("p",{children:["Comments: ",e.comments]})]},e._id)})):Object(b.jsx)("h3",{children:"No ready orders at this time"})]})}))),C=Object(l.g)((function(e){var t=Object(s.useState)([]),n=Object(i.a)(t,2),a=n[0],c=n[1];Object(s.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/admin/pending");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,c(n.orders),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[a]);var r=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/api/admin/pending/".concat(t),{method:"POST",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:s=e.sent,console.log(s.message),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"button",onClick:function(){g.logout((function(){e.history.push("/admin/login")}))},children:"Logout"}),Object(b.jsx)("button",{className:"buttonB",onClick:function(){e.history.push("/admin/519924812089420/ready")},children:"Ready Orders"}),Object(b.jsx)("h1",{className:"header",children:"Pending Orders"}),Object(b.jsx)("br",{}),a?a.map((function(e){return Object(b.jsxs)("div",{className:"order",children:[Object(b.jsxs)("p",{children:["Name: ",e.lname,", ",e.fname]}),Object(b.jsxs)("p",{children:["Entree: ",e.entree]}),Object(b.jsxs)("p",{children:["Appetizer: ",e.appetizer]}),Object(b.jsxs)("p",{children:["Drink: ",e.drink]}),Object(b.jsxs)("p",{children:["Comments: ",e.comments]}),Object(b.jsx)("button",{className:"buttonG",onClick:function(){return r(e._id)},children:"Ready"})]},e._id)})):Object(b.jsx)("h3",{children:"No pending orders at this time"})]})})),S=n(11),P=n(16),w=function(e){var t=e.component,n=Object(P.a)(e,["component"]);return Object(b.jsx)(l.b,Object(S.a)(Object(S.a)({},n),{},{render:function(e){return g.isAuthenticated()?Object(b.jsx)(t,Object(S.a)({},e)):Object(b.jsx)(l.a,{to:"/admin/login"})}}))},A=function(e){var t=e.component,n=Object(P.a)(e,["component"]);return Object(b.jsx)(l.b,Object(S.a)(Object(S.a)({},n),{},{render:function(e){return x.IsSubmitted()?Object(b.jsx)(t,Object(S.a)({},e)):Object(b.jsx)(l.a,{to:"/api/order"})}}))};var G=function(){var e=Object(s.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(b.jsx)("div",{children:Object(b.jsx)(o.a,{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{exact:!0,path:"/order",children:Object(b.jsx)(v,{setOrder:a})}),Object(b.jsx)(A,{exact:!0,path:"/confirmation",component:function(){return Object(b.jsx)(N,{order:n})}}),Object(b.jsx)(l.b,{exact:!0,path:"/admin/login",children:Object(b.jsx)(y,{})}),Object(b.jsx)(w,{exact:!0,path:"/admin/519924812089420/orders",component:C}),Object(b.jsx)(w,{exact:!0,path:"/admin/519924812089420/ready",component:k}),Object(b.jsx)(l.a,{to:"/order"})]})})})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(G,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.d9791f57.chunk.js.map