(this.webpackJsonpresumebot=this.webpackJsonpresumebot||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(68),a(141)),s=a(59),l=a(58),u=a.n(l),p=a(24),b=a(51),d=a.n(b),h=a(25),g=a(138),j=a(140),m=a(135),x=a(142),f=a(143),O=a(6),y=Object(m.a)((function(e){return{root:{height:"100%",backgroundColor:e.palette.background.default}}}));var k=function(e){var t=e.onValidateKey,a=y(),n=r.a.useState(""),c=Object(p.a)(n,2),o=c[0],i=c[1];return Object(O.jsx)(g.a,{square:!0,className:a.root,children:Object(O.jsxs)(j.a,{container:!0,spacing:2,justify:"center",alignItems:"center",children:[Object(O.jsx)(j.a,{item:!0,xs:5,children:Object(O.jsx)(x.a,{fullWidth:!0,value:o,onChange:function(e){i(e.target.value)},label:"A valid OpenAI api key is needed",helperText:"Please enter the OpenAI api key here",placeholder:"OpenAI api key"})}),Object(O.jsx)(j.a,{item:!0,children:Object(O.jsx)(f.a,{onClick:function(){t(o)},color:"primary",variant:"contained",children:"Submit"})})]})})},w=a(35),v=a.n(w),I=a(57),C="The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?";function T(){return(T=Object(I.a)(v.a.mark((function e(t){var a,n,r,c,o,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.history,n=t.message,r=t.openaiWithKey,o=C+(c=a+"\nHuman: "+n+"\nAI:"),e.prev=3,e.next=6,r.complete({engine:"cushman-alpha",prompt:o,maxTokens:150,temperature:.9,topP:1,presencePenalty:.6,frequencyPenalty:0,bestOf:1,n:1,stream:!1,stop:["\n","AI:","Human:"]});case 6:return i=e.sent,e.abrupt("return",c+i.data.choices[0].text);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return","error");case 13:case"end":return e.stop()}}),e,null,[[3,10]])})))).apply(this,arguments)}a(50);var A=Object(m.a)((function(e){return{root:{height:"100%",backgroundColor:e.palette.background.default},"@global":{html:{backgroundColor:e.palette.background.default},".rcw-header":{backgroundColor:e.palette.primary.main,color:e.palette.getContrastText(e.palette.primary.main)},".rcw-messages-container":{backgroundColor:e.palette.background.paper,color:e.palette.getContrastText(e.palette.background.paper)},".rcw-response .rcw-message-text":{backgroundColor:e.palette.primary.main,color:e.palette.getContrastText(e.palette.primary.main)},".rcw-new-message":{backgroundColor:e.palette.background.paper,color:e.palette.getContrastText(e.palette.background.paper)},".rcw-sender":{backgroundColor:e.palette.background.paper},".rcw-send":{backgroundColor:e.palette.background.paper},".rcw-conversation-container .rcw-close-button":{display:"none"},"::-webkit-scrollbar":{width:"12px"},"::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px ".concat(e.palette.primary.main),"-webkit-box-shadow":"inset 0 0 6px ".concat(e.palette.primary.main),borderRadius:"10px"},"::-webkit-scrollbar-thumb":{borderRadius:"10px",boxShadow:"inset 0 0 6px ".concat(e.palette.primary.dark),"-webkit-box-shadow":"inset 0 0 6px ".concat(e.palette.primary.dark)}}}}));var S=function(){var e=A(),t=r.a.useState(null),a=Object(p.a)(t,2),n=a[0],c=a[1],o=r.a.useState(!1),i=Object(p.a)(o,2),s=i[0],l=i[1],u=r.a.useState(""),b=Object(p.a)(u,2),m=b[0],x=b[1];return r.a.useEffect((function(){s||(Object(h.toggleWidget)(),l(!0))})),null===n?Object(O.jsx)(k,{onValidateKey:function(e){c(new d.a(e))}}):Object(O.jsx)(g.a,{square:!0,className:e.root,children:Object(O.jsxs)(j.a,{container:!0,spacing:2,justify:"center",children:[Object(O.jsx)(j.a,{container:!0,direction:"column",children:Object(O.jsx)(j.a,{item:!0,xs:12,children:Object(O.jsx)(h.Widget,{handleNewUserMessage:function(e){Object(h.toggleInputDisabled)(),function(e){return T.apply(this,arguments)}({history:m,message:e,openaiWithKey:n}).then((function(e){"error"!==m?(x(e),Object(h.toggleInputDisabled)(),Object(h.addResponseMessage)(function(e){var t=e.lastIndexOf("AI:");return e.substring(t)}(e))):c(null)}))},title:"Bruno Pommier's resume",subtitle:"Ask me anything"})})}),Object(O.jsxs)(j.a,{container:!0,item:!0,spacing:2,justify:"center",alignItems:"center",children:[Object(O.jsx)(j.a,{item:!0,children:Object(O.jsx)("a",{href:"https://github.com/Nauss",children:Object(O.jsx)("img",{src:"GitHub-Mark-Light-32px.png",alt:"GitHub"})})}),Object(O.jsx)(j.a,{item:!0,children:Object(O.jsx)("a",{href:"https://twitter.com/TheNauss",children:Object(O.jsx)("img",{src:"2021 Twitter logo - white.png",alt:"Twitter",style:{width:"32px"}})})})]})]})})},H=(a(104),Object(s.a)({palette:{primary:{main:"#0f6b7d"},secondary:{main:u.a[900]},type:"dark"}}));var P=function(){return Object(O.jsx)(i.a,{theme:H,children:Object(O.jsx)(S,{})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,144)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),N()},50:function(e,t,a){},68:function(e,t,a){}},[[105,1,2]]]);
//# sourceMappingURL=main.b690b1ab.chunk.js.map