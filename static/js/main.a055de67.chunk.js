(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{51:function(n,e,t){"use strict";t.r(e);var o,r=t(11),i=t(0),a=t.n(i),c=t(18),d=t.n(c),b=t(19),l=t(10),s=t(9),p=t(1),u=t(4),j=t(3),g=t(23),f=t(36),h=Object(f.recoilPersist)().persistAtom,O=Object(b.b)({key:"toDo",default:{"To Do":[],Doing:[],Done:[]},effects_UNSTABLE:[h]}),x=t(29),m=t(6),v=l.c.div(o||(o=Object(r.a)(["\n  border-radius: 5px;\n  margin-bottom: 5px;\n  padding: 10px;\n  background-color: ",";\n  box-shadow: ",";\n"])),(function(n){return n.isDragging?"#e4f2ff":n.theme.cardColor}),(function(n){return n.isDragging?"0px 2px 5px rgba(0, 0, 0, 0.05)":"none"}));function D(n){var e=n.toDoId,t=n.toDoText,o=n.index;return Object(m.jsx)(g.b,{draggableId:e+"",index:o,children:function(n,e){return Object(m.jsx)(v,Object(p.a)(Object(p.a)(Object(p.a)({isDragging:e.isDragging,ref:n.innerRef},n.dragHandleProps),n.draggableProps),{},{children:t}))}})}var y,w,k,I,q=a.a.memo(D),S=l.c.div(y||(y=Object(r.a)(["\n  width: 300px;\n  padding-top: 10px;\n  background-color: ",";\n  border-radius: 5px;\n  min-height: 300px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n"])),(function(n){return n.theme.boardColor})),T=l.c.h2(w||(w=Object(r.a)(["\n  text-align: center;\n  font-weight: 600;\n  margin-bottom: 10px;\n  font-size: 18px;\n"]))),C=l.c.div(k||(k=Object(r.a)(["\n  background-color: ",";\n  flex-grow: 1;\n  transition: background-color 0.3s ease-in-out;\n  padding: 20px;\n"])),(function(n){return n.isDraggingOver?"#dfe6e9":n.isDraggingFromThis?"#b2bec3":"transparent"})),F=l.c.form(I||(I=Object(r.a)(["\n  width: 100%;\n  input {\n    width: 100%;\n  }\n"])));var P,A,E,z=function(n){var e=n.toDos,t=n.boardId,o=Object(b.d)(O),r=Object(x.a)(),i=r.register,a=r.setValue,c=r.handleSubmit;return Object(m.jsxs)(S,{children:[Object(m.jsx)(T,{children:t}),Object(m.jsx)(F,{onSubmit:c((function(n){var e=n.toDo,r={id:Date.now(),text:e};o((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(s.a)({},t,[r].concat(Object(u.a)(n[t]))))})),a("toDo","")})),children:Object(m.jsx)("input",Object(p.a)(Object(p.a)({},i("toDo",{required:!0})),{},{type:"text",placeholder:"Add task on ".concat(t)}))}),Object(m.jsx)(g.c,{droppableId:t,children:function(n,t){return Object(m.jsxs)(C,Object(p.a)(Object(p.a)({isDraggingOver:t.isDraggingOver,isDraggingFromThis:Boolean(t.draggingFromThisWith),ref:n.innerRef},n.droppableProps),{},{children:[e.map((function(n,e){return Object(m.jsx)(q,{index:e,toDoId:n.id,toDoText:n.text},n.id)})),n.placeholder]}))}})]})},B=l.c.div(P||(P=Object(r.a)(["\n  display: flex;\n  width: 100vw;\n  margin: 0 auto;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n"]))),H=l.c.div(A||(A=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  width: 100%;\n  gap: 10px;\n"]))),L=l.c.form(E||(E=Object(r.a)(["\n  width: 500px;\n  margin-bottom: 30px;\n  input {\n    width: 100%;\n  }\n"])));var M,J=function(){var n=Object(b.c)(O),e=Object(j.a)(n,2),t=e[0],o=e[1],r=Object(x.a)(),i=r.register,a=r.setValue,c=r.handleSubmit;return Object(m.jsx)(g.a,{onDragEnd:function(n){var e=n.destination,t=n.source;e&&((null===e||void 0===e?void 0:e.droppableId)===t.droppableId&&o((function(n){var o=Object(u.a)(n[t.droppableId]),r=o[t.index];return o.splice(t.index,1),o.splice(null===e||void 0===e?void 0:e.index,0,r),Object(p.a)(Object(p.a)({},n),{},Object(s.a)({},t.droppableId,o))})),e.droppableId!==t.droppableId&&o((function(n){var o,r=Object(u.a)(n[t.droppableId]),i=r[t.index],a=Object(u.a)(n[e.droppableId]);return r.splice(t.index,1),a.splice(null===e||void 0===e?void 0:e.index,0,i),Object(p.a)(Object(p.a)({},n),{},(o={},Object(s.a)(o,t.droppableId,r),Object(s.a)(o,e.droppableId,a),o))})))},children:Object(m.jsxs)(B,{children:[Object(m.jsx)(L,{onSubmit:c((function(n){var e=n.boardname;o((function(n){return Object(p.a)(Object(p.a)({},n),{},Object(s.a)({},e,[]))})),a("boardname","")})),children:Object(m.jsx)("input",Object(p.a)(Object(p.a)({},i("boardname",{required:!0})),{},{type:"text",placeholder:"Add new board"}))}),Object(m.jsx)(H,{children:Object.keys(t).map((function(n){return Object(m.jsx)(z,{boardId:n,toDos:t[n]},n)}))})]})})},R=Object(l.b)(M||(M=Object(r.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color:",";\n  color:black;\n  line-height: 1.2;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.bgColor}));d.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(b.a,{children:Object(m.jsxs)(l.a,{theme:{bgColor:"#3F8CF2",boardColor:"#DADFE9",cardColor:"white"},children:[Object(m.jsx)(R,{}),Object(m.jsx)(J,{})]})})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a055de67.chunk.js.map