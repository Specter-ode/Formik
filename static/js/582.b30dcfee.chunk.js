"use strict";(self.webpackChunkphonebook_mobx_formik=self.webpackChunkphonebook_mobx_formik||[]).push([[582],{9473:function(e,s,a){a.d(s,{Z:function(){return l}});var r="Section_title__SLHvV",n="Section_section__Z2PLw",i=a(184);var l=function(e){var s=e.title,a=e.children;return(0,i.jsxs)("section",{className:n,children:[(0,i.jsx)("h2",{className:r,children:s}),a]})}},5582:function(e,s,a){a.r(s),a.d(s,{default:function(){return j}});var r="RegisterPage_container__l-2BF",n=a(4346),i=a(1413),l="RegisterForm_form__Tv43W",t="RegisterForm_block__9f3Q-",m="RegisterForm_label__4pTXF",c="RegisterForm_input__FsgBz",o="RegisterForm_btn__bgTuW",d="RegisterForm_error__yDHjz",u=a(9473),h=a(5705),_=a(8448),b=a(184),x=function(e){var s=e.onSubmitClick;return(0,b.jsx)(h.J9,{initialValues:{name:"",email:"",password:""},validationSchema:_.Ry().shape({name:_.Z_().matches(/^[a-zA-Z]+$/,"Must be only charaters").min(2,"Must be 2 characters or more").required("Required"),email:_.Z_().email("Invalid address").required("Required"),password:_.Z_().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,"Must numbers, english small and large letters").min(8,"Email must be 8 characters or more").required("Required")}),onSubmit:function(e,a){var r=a.resetForm;s((0,i.Z)({},e)),r()},children:function(e){var s=e.values,a=e.handleChange,r=e.handleSubmit,n=e.errors,i=s.name,_=s.email,x=s.password,j=!i||!_||!x||n.email||n.password;return(0,b.jsx)(u.Z,{title:"Register form",children:(0,b.jsxs)(h.l0,{className:l,onSubmit:r,children:[(0,b.jsxs)("div",{className:t,children:[(0,b.jsx)(h.gN,{name:"name",type:"name",value:s.name,className:c,onChange:a}),(0,b.jsx)("label",{htmlFor:"name",className:m,children:"Name"}),(0,b.jsx)(h.Bc,{name:"name",className:d,children:function(e){return(0,b.jsx)("div",{className:d,children:e})}})]}),(0,b.jsxs)("div",{className:t,children:[(0,b.jsx)(h.gN,{name:"email",type:"email",value:s.email,className:c,onChange:a}),(0,b.jsx)("label",{htmlFor:"email",className:m,children:"Email"}),(0,b.jsx)(h.Bc,{name:"email",className:d,children:function(e){return(0,b.jsx)("div",{className:d,children:e})}})]}),(0,b.jsxs)("div",{className:t,children:[(0,b.jsx)(h.gN,{name:"password",type:"password",value:s.password,className:c,onChange:a}),(0,b.jsx)("label",{htmlFor:"password",className:m,children:"Password"}),(0,b.jsx)(h.Bc,{name:"password",className:d,children:function(e){return(0,b.jsx)("div",{className:d,children:e})}})]}),(0,b.jsx)("button",{type:"submit",className:o,disabled:j,children:"Submit"})]})})}})},j=(0,a(32).Pi)((function(){return(0,b.jsx)("main",{children:(0,b.jsxs)("div",{className:r,children:[(0,b.jsx)("h3",{children:"You are on the right way. To access to the phonebook you need to register"}),(0,b.jsx)(x,{onSubmitClick:n.M.register})]})})}))}}]);
//# sourceMappingURL=582.b30dcfee.chunk.js.map