(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},8:function(e,t,n){e.exports=n(81)},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),c=n.n(r),u=(n(14),n(4)),m=n(3),o=(n(80),function(e){return e.toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})}),i=function(e){return 60*e*1e3},s=function(){var e=Object(a.useState)("10:00"),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(75),s=Object(u.a)(c,2),E=s[0],d=s[1],h=Object(a.useState)(15),b=Object(u.a)(h,2),p=b[0],g=b[1],v=Object(a.useState)(60),f=Object(u.a)(v,2),w=f[0],S=f[1],T=Object(a.useState)(6),j=Object(u.a)(T,2),C=j[0],O=j[1],k=function(e,t,n,a,l){var r=e.split(":"),c=Object(u.a)(r,2),m=c[0],s=c[1],E=parseInt(l,10),d=new Date,h=new Date;d.setHours(m),d.setMinutes(s);for(var b=[],p=1;p<=a;p++){h.setTime(d.getTime()+i(parseInt(t,10)));var g={name:"Round ".concat(p),start:o(d),end:o(h)};if(b.push(g),E>0&&Math.floor(a/2)===p){h.setTime(h.getTime()+i(E));var v={name:"Lunch Break",start:g.end,end:o(h)};b.push(v),d.setTime(h.getTime())}else d.setTime(h.getTime()+i(n))}return b}(n,E,p,C,w),y="```\nRound #      Start    End\n".concat(k.map(function(e){return"".concat(e.name," ").concat("Lunch Break"===e.name?"":"    "," ").concat(e.start,"    ").concat(e.end)}).join("\n"),"\n```");return l.a.createElement(m.Container,null,l.a.createElement("header",null,l.a.createElement(m.Title,null,"Tournament Time Schedule")),l.a.createElement("section",null,l.a.createElement(m.Field,null,l.a.createElement("label",{className:"label"},"Start time"),l.a.createElement(m.Control,null,l.a.createElement(m.Input,{type:"time",value:n,onChange:function(e){return r(e.target.value)}}))),l.a.createElement(m.Field,null,l.a.createElement("label",{className:"label"},"Round length (minutes)"),l.a.createElement(m.Control,null,l.a.createElement(m.Input,{type:"number",min:"1",value:E,onChange:function(e){return d(Math.max(1,e.target.value))},placeholder:"in minutes"}))),l.a.createElement(m.Field,null,l.a.createElement("label",{className:"label"},"Break between rounds (minutes)"),l.a.createElement(m.Control,null,l.a.createElement(m.Input,{type:"number",min:"0",value:p,onChange:function(e){return g(Math.max(0,e.target.value))},placeholder:"in minutes"}))),l.a.createElement(m.Field,null,l.a.createElement("label",{className:"label"},"Lunch break (minutes)"),l.a.createElement(m.Control,null,l.a.createElement(m.Input,{type:"number",min:"0",value:w,onChange:function(e){return S(Math.max(0,e.target.value))},placeholder:"in minutes"}))),l.a.createElement(m.Field,null,l.a.createElement("label",{className:"label"},"Number of rounds"),l.a.createElement(m.Control,null,l.a.createElement(m.Input,{type:"number",min:"1",value:C,onChange:function(e){return O(Math.max(1,e.target.value))}})))),l.a.createElement("section",null,l.a.createElement(m.SubTitle,null,"Schedule"),l.a.createElement("table",{className:"table",width:"400"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Round"),l.a.createElement("th",null,"Start"),l.a.createElement("th",null,"End"))),l.a.createElement("tbody",null,k.map(function(e){return l.a.createElement("tr",{key:e.name},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.start),l.a.createElement("td",null,e.end))}))),l.a.createElement("p",null,"Slack:"),l.a.createElement("pre",null,l.a.createElement("code",null,y))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[8,1,2]]]);
//# sourceMappingURL=main.0f77dec6.chunk.js.map