"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[890],{501:function(n,e,t){t.d(e,{$:function(){return d}});var r,o,i=t(168),a=t(444),c=a.ZP.section(r||(r=(0,i.Z)(["\n  box-sizing: border-box;\n\n  width: 560px;\n  border: 3px solid #111827;\n  border-radius: 8px;\n\n  padding: 32px;\n  margin: 40px auto;\n"]))),l=a.ZP.h2(o||(o=(0,i.Z)(["\n  font-size: 32px;\n  text-align: center;\n  color: #111827;\n\n  margin: 0px 0px 32px 0px;\n"]))),s=t(329),d=function(n){var e=n.title,t=n.children;return(0,s.jsxs)(c,{children:[e&&(0,s.jsx)(l,{children:e}),t]})}},890:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,o,i,a,c,l,s,d,u,f=t(501),p=t(885),x=t(791),h=t(434),b=t(700),m=function(n){return n.contacts.contacts},g=function(n){return n.contacts.isLoading},Z=function(n){return n.contacts.error},v=function(n){return n.filters.filter},j=t(168),y=t(444),w=y.ZP.form(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),k=y.ZP.label(o||(o=(0,j.Z)(["\n  font-weight: 600;\n"]))),z=y.ZP.input(i||(i=(0,j.Z)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  height: 48px;\n  padding: 8px;\n\n  background-color: #ffffff;\n  border: 3px solid #111827;\n  border-radius: 4px;\n\n  outline: 0px;\n  color: #111827;\n\n  :hover,\n  :focus {\n    border: 3px solid #6366f1;\n  }\n"]))),C=y.ZP.button(a||(a=(0,j.Z)(["\n  box-sizing: border-box;\n  display: block;\n\n  width: 100%;\n  height: 48px;\n  padding: 8px;\n\n  background-color: #111827;\n  border: 3px solid #111827;\n  border-radius: 4px;\n  outline: 0px;\n\n  font-size: 18px;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n\n  :hover,\n  :focus {\n    background-color: #6366f1;\n  }\n"]))),P=t(329),N=function(){var n=(0,h.I0)(),e=(0,x.useState)(""),t=(0,p.Z)(e,2),r=t[0],o=t[1],i=(0,x.useState)(""),a=(0,p.Z)(i,2),c=a[0],l=a[1],s=(0,h.v9)(m),d=function(e,t){n((0,b.uK)({name:e,number:t}))},u=function(){o(""),l("")};return(0,P.jsx)(f.$,{title:"Add Contact",children:(0,P.jsxs)(w,{autoComplete:"off",onSubmit:function(n){if(n.preventDefault(),s.find((function(n){return n.name.toLowerCase()===r.toLowerCase()})))return alert("".concat(r," is already in contacts."));d(r,c),u()},children:[(0,P.jsx)(k,{htmlFor:"inputName",children:"Name"}),(0,P.jsx)(z,{type:"text",name:"name",value:r,id:"inputName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:function(n){return o(n.target.value)}}),(0,P.jsx)(k,{htmlFor:"inputNumber",children:"Number"}),(0,P.jsx)(z,{type:"tel",name:"number",value:c,id:"inputNumber",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:function(n){return l(n.target.value)}}),(0,P.jsx)(C,{type:"submit",children:"Add contact"})]})})},F=t(714),A=y.ZP.label(c||(c=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  font-weight: 600;\n"]))),L=y.ZP.input(l||(l=(0,j.Z)(["\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  height: 48px;\n  padding: 8px;\n\n  background-color: #ffffff;\n  border: 3px solid #111827;\n  border-radius: 4px;\n  outline: 0px;\n\n  color: #111827;\n  :hover,\n  :focus {\n    border: 3px solid #6366f1;\n  }\n"]))),S=function(){var n=(0,h.I0)(),e=(0,h.v9)(v);return(0,P.jsxs)(A,{htmlFor:"filterName",children:["Find contacts by name",(0,P.jsx)(L,{type:"text",id:"filterName",value:e,onChange:function(e){n((0,F.zp)(e.currentTarget.value))}})]})},$=y.ZP.ul(s||(s=(0,j.Z)(["\n  padding: 0;\n  margin: 0;\n  list-style: none;\n\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  margin-top: 32px;\n"]))),_=y.ZP.li(d||(d=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  font-weight: 600;\n  color: #111827;\n"]))),I=y.ZP.button(u||(u=(0,j.Z)(["\n  box-sizing: border-box;\n  display: block;\n\n  padding: 8px 32px;\n  background-color: #111827;\n  border: 3px solid #111827;\n  border-radius: 4px;\n  outline: 0px;\n\n  font-size: 16px;\n  font-weight: 600;\n  color: #ffffff;\n  text-transform: uppercase;\n\n  :hover,\n  :focus {\n    background-color: #6366f1;\n  }\n"]))),q=function(){var n=(0,h.I0)();(0,x.useEffect)((function(){n((0,b.yF)())}),[n]);var e=(0,h.v9)(m);console.log(e);var t=(0,h.v9)(v).toLocaleLowerCase(),r=e.filter((function(n){return n.name.toLocaleLowerCase().includes(t)})),o=(0,h.v9)(g),i=(0,h.v9)(Z);return(0,P.jsxs)(P.Fragment,{children:[i&&(0,P.jsx)("p",{style:{fontSize:16,fontWeight:600,color:"red"},children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),o&&!i&&(0,P.jsx)("p",{style:{fontSize:16,fontWeight:600,color:"#6366f1",marginTop:16},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),e.length>0&&(0,P.jsx)($,{children:r.map((function(e){var t=e.id,r=e.name,o=e.number;return(0,P.jsxs)(_,{children:[(0,P.jsxs)("span",{children:[r," :"]}),(0,P.jsxs)("span",{children:[o," "]}),(0,P.jsx)(I,{type:"button",onClick:function(){return n((0,b.GK)(t))},children:"Delete"})]},t)}))})]})};function D(){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(N,{}),(0,P.jsxs)(f.$,{children:[(0,P.jsx)(S,{}),(0,P.jsx)(q,{})]})]})}}}]);
//# sourceMappingURL=890.98ebd24a.chunk.js.map