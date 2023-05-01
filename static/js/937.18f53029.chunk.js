"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{3677:function(n,r,e){e.d(r,{j7:function(){return i},ff:function(){return s},Rn:function(){return p},CM:function(){return m}});var t=e(1413),o=e(8641),a=e(3329),i=function(n){var r=n.props,e=r.register,i=r.errors;return(0,a.jsx)(o.Z,(0,t.Z)((0,t.Z)({label:"Email",variant:"outlined"},e("email",{required:!0,pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i})),{},{error:Boolean(i.email),helperText:i.email&&"Enter a valid email address",placeholder:"email@example.com"}))},s=function(n){var r=n.props,e=r.register,i=r.errors;return(0,a.jsx)(o.Z,(0,t.Z)((0,t.Z)({label:"Name",variant:"outlined"},e("name",{required:!0})),{},{error:Boolean(i.name),helperText:i.name&&"Name is required",placeholder:"Bill Black"}))},p=function(n){var r=n.props,e=r.register,i=r.errors;return(0,a.jsx)(o.Z,(0,t.Z)((0,t.Z)({label:"Number",variant:"outlined"},e("number",{required:!0})),{},{error:Boolean(i.number),helperText:i.number&&"Number is required",placeholder:"0678833883"}))},d=e(9439),u=e(9569),c=e(3710),l=e(3466),x=e(3400),b=e(2791),m=function(n){var r=n.props,e=r.register,i=r.errors,s=(0,b.useState)(!1),p=(0,d.Z)(s,2),m=p[0],f=p[1];return(0,a.jsx)(o.Z,(0,t.Z)((0,t.Z)({label:"Password",variant:"outlined",type:m?"text":"password"},e("password",{required:!0})),{},{error:Boolean(i.password),helperText:i.password&&"Password is required",placeholder:"********",InputProps:{endAdornment:(0,a.jsx)(l.Z,{position:"end",children:(0,a.jsx)(x.Z,{"aria-label":"toggle password visibility",onClick:function(){f((function(n){return!n}))},edge:"end",children:m?(0,a.jsx)(u.Z,{}):(0,a.jsx)(c.Z,{})})})}}))}},937:function(n,r,e){e.r(r),e.d(r,{default:function(){return B}});var t,o,a,i=e(9434),s=e(5218),p=e(6052),d=e(6916),u=e(6895),c=function(n){return n.contacts.items},l=function(n){return n.contacts.isLoading},x=function(n){return n.contacts.error},b=(0,d.P1)([u.AD,c],(function(n,r){return r.filter((function(r){return r.name.toLowerCase().includes(n.toLowerCase())}))})),m=e(168),f=e(7691),h=f.ZP.form(t||(t=(0,m.Z)(["\n  width: 200px;\n  padding: 7px;\n  margin-bottom: 25px;\n  font-size: 18px;\n  border: 1px solid black;\n  border-radius: 8px;\n  box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);\n  /* & p {\n    font-weight: 500;\n    margin-bottom: 5px;\n  } */\n  /* & input {\n    margin-bottom: 15px;\n    border-radius: 8px;\n    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);\n  } */\n  /* & button {\n    padding: 5px 10px;\n    border-radius: 8px;\n    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);\n    cursor: pointer;\n    &:hover {\n      background-color: rgb(101, 101, 101, 0.5);\n    }\n  } */\n"]))),g=e(9195),v=e(6151),j=e(3677),w=e(3329),Z=function(){var n=(0,i.I0)(),r=(0,i.v9)(c),e=(0,g.cI)(),t=e.register,o=e.handleSubmit,a=e.formState.errors;return(0,w.jsxs)(h,{onSubmit:o((function(e){var t=e.name,o=e.number;if(r.find((function(n){return n.name===t})))s.ZP.error("".concat(t," already in contact"));else{s.ZP.success("contact is added");var a={name:t,number:o};n((0,p.uK)(a))}})),children:[(0,w.jsx)(j.ff,{props:{register:t,errors:a}}),(0,w.jsx)(j.Rn,{props:{register:t,errors:a}}),(0,w.jsx)(v.Z,{type:"submit",variant:"contained",children:"add contact"})]})},k=e(2791),y=f.ZP.li(o||(o=(0,m.Z)(["\n  display: flex;\n  position: relative;\n  align-items: baseline;\n  margin-bottom: 5px;\n  padding: 2px;\n  font-size: 16px;\n  transition: opacity 0.5s ease-out, transform 0.5s ease-out;\n  &:hover {\n    border: 1px solid black;\n    border-radius: 5px;\n    padding: 1px;\n    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);\n  }\n  & .date {\n    position: absolute;\n    width: 250px;\n    top: 50%;\n    left: -30%;\n    transform: translate(-50%, -50%);\n    border: 1px solid black;\n    border-radius: 5px;\n    /* background-color: white; */\n  }\n  &.delete {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  & p {\n    margin: 0px 10px 5px;\n  }\n  & .name {\n    width: 200px;\n    font-size: 18px;\n    font-weight: 500;\n  }\n  & .circle {\n    background-color: black;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.5);\n  }\n  & button {\n    padding: 5px 10px;\n    border-radius: 8px;\n    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);\n    cursor: pointer;\n    &:hover {\n      background-color: rgb(101, 101, 101, 0.5);\n    }\n  }\n"]))),C=function(n){var r=n.contact,e=(0,k.useRef)(),t=(0,i.I0)(),o=r.id,a=r.name,s=r.number;return(0,w.jsxs)(y,{ref:e,children:[(0,w.jsx)("span",{className:"circle"}),(0,w.jsxs)("p",{className:"name",children:[a,":"]}),(0,w.jsxs)("p",{children:[" ",s]}),(0,w.jsx)("button",{onClick:function(){!function(n){e.current.className+=" delete",console.log("knopka"),t((0,p.GK)(n))}(o)},children:"Delete"})]})},P=e(5243),N=function(){return(0,w.jsx)(P.CJ,{height:"60",width:"60",color:"rgb(115, 216, 103)",ariaLabel:"triangle-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})},q=function(){var n=(0,i.v9)(x),r=(0,i.v9)(l),e=(0,i.v9)(b),t=(0,i.I0)();return(0,k.useEffect)((function(){t((0,p.yF)())}),[t]),(0,k.useEffect)((function(){null===n||s.Am.error("Sorry, but ".concat(n," "))}),[n]),(0,w.jsxs)(w.Fragment,{children:[0!==e.length?(0,w.jsx)("ul",{children:e.map((function(n){var r=n.id,e=n.name,t=n.number;return(0,w.jsx)(C,{contact:{id:r,name:e,number:t}},r)}))}):(0,w.jsx)("p",{children:"Please add contact"}),r&&(0,w.jsx)(N,{})]})},z=f.ZP.div(a||(a=(0,m.Z)(["\n  width: 300px;\n  padding: 7px;\n  margin-bottom: 25px;\n  font-size: 18px;\n  border: 1px solid black;\n  border-radius: 8px;\n  box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);\n  & h3 {\n    font-weight: 500;\n    margin-bottom: 5px;\n  }\n  & input {\n    margin-bottom: 15px;\n    border-radius: 8px;\n    box-shadow: 5px 5px 10px rgb(101, 101, 101, 0.5);\n  }\n"]))),A=function(){var n=(0,i.I0)();return(0,w.jsxs)(z,{children:[(0,w.jsx)("h3",{children:"Find contacts by name"}),(0,w.jsx)("input",{onChange:function(r){var e=r.target.value;n((0,u.Tv)(e))},type:"text",name:"filter"})]})},B=function(){return(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:"Phonebook"}),(0,w.jsx)(Z,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(A,{}),(0,w.jsx)(q,{})]})}}}]);
//# sourceMappingURL=937.18f53029.chunk.js.map