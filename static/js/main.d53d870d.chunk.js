(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{44:function(e,t,n){e.exports=n(86)},53:function(e,t,n){},54:function(e,t,n){},82:function(e,t){},85:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(9),r=n.n(c),u=n(3),s=n(4),l=n(37),o=n(10),m=n(11),d={isSignedIn:null,userId:null},g=Object(s.c)({messageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messages:[]},t=arguments.length>1?arguments[1]:void 0;return"RECIEVE_MESSAGE"===t.type||"USER_CONNECTED"===t.type?Object(m.a)({},e,{messages:[].concat(Object(o.a)(e.messages),[t.payload])}):e},authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(m.a)({},e,{isSignedIn:!0,userDetails:t.payload});case"SIGN_OUT":return Object(m.a)({},e,{isSignedIn:!1,userDetails:null});default:return e}}}),h=(n(53),n(54),n(38)),p=n.n(h)()("http://192.168.1.6:8000"),E=function(e){var t=e.date.getDate()+"/"+(e.date.getMonth()+1)+"/"+e.date.getFullYear()+" @ "+e.date.getHours()+":"+e.date.getMinutes()+":"+e.date.getSeconds();return i.a.createElement("div",{className:"comment"},i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:"",alt:""})),i.a.createElement("div",{className:"content"},i.a.createElement("a",{className:"author",href:"www.walla.com"},e.name),i.a.createElement("div",{className:"metadata"},i.a.createElement("div",null,t)),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,e.text))))},f=Object(u.b)((function(e){return{messages:Object(o.a)(e.messageReducer.messages)}}),{recieveMessage:function(e){return{type:"RECIEVE_MESSAGE",payload:e}},userConnected:function(e){return{type:"USER_CONNECTED",payload:e}}})((function(e){var t=e.recieveMessage,n=e.messages,c=e.userConnected;Object(a.useEffect)((function(){p.on("viewMessage",(function(e){return t(e)})),p.on("userChangedConnectionStatus",(function(e){return c(e)}))}),[t,c]);return i.a.createElement("div",{className:"ui fluid comments segment container"},n.map((function(e,t){return"string"===typeof e?i.a.createElement(E,{key:t,name:"",date:new Date,text:e}):i.a.createElement(E,{key:t,name:e.senderName,date:new Date(e.date),text:e.text})})))})),v=(n(85),Object(u.b)((function(e){return{auth:e.authReducer}}))((function(e){var t=e.auth;return i.a.createElement("div",{className:"ui container fluid focus input"},i.a.createElement("input",{type:"text",placeholder:"Chat",className:"input-sizing",onKeyPress:function(e){if("Enter"===e.key){var n={senderName:t.userDetails.getName(),date:new Date,text:e.target.value};e.target.value="",function(e){p.emit("subscribeMessage",e)}(n)}}}))}))),b=n(39),N=n(40),O=n(42),S=n(41),I=n(43),y=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(O.a)(this,(e=Object(S.a)(t)).call.apply(e,[this].concat(i)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getBasicProfile()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(I.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"548027089353-j03e14pvp4o81noalqup4e212iscpqlb.apps.googleusercontent.com",scope:"email profile"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?i.a.createElement("span",null,"There is some problem with the API"):this.props.isSignedIn?i.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign Out"):i.a.createElement("div",null,i.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign in with Google"))}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderAuthButton())}}]),t}(i.a.Component),w=Object(u.b)((function(e){return{isSignedIn:e.authReducer.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(y),C=function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"ui container chat"},i.a.createElement("div",{className:"ui placeholder segment"},i.a.createElement(f,null),i.a.createElement("div",{className:"ui divider"}),i.a.createElement(v,null),i.a.createElement(w,null))))},j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,_=Object(s.e)(g,j(Object(s.a)(l.a)));r.a.render(i.a.createElement(u.a,{store:_},i.a.createElement(C,null)),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d53d870d.chunk.js.map