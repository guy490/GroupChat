(this.webpackJsonpgroupchat=this.webpackJsonpgroupchat||[]).push([[0],{44:function(e,t,n){e.exports=n(89)},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},83:function(e,t){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),s=n(1),l=n(4),u=n(37),o=n(5),m=n(8),d={isSignedIn:null},g=Object(l.c)({messageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messages:[]},t=arguments.length>1?arguments[1]:void 0;return"RECIEVE_MESSAGE"===t.type?Object(m.a)({},e,{messages:[].concat(Object(o.a)(e.messages),[t.payload])}):e},profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(m.a)({},e,{isSignedIn:!0},t.payload);case"SIGN_AS_GUEST":return Object(m.a)({},e,{isSignedIn:!1},t.payload);default:return e}},userListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{usersList:[]},t=arguments.length>1?arguments[1]:void 0;return"UPDATE_USERS_LIST"===t.type?Object(m.a)({},e,{usersList:Object(o.a)(t.payload)}):e}}),f=(n(53),n(54),n(55),n(38)),p=n.n(f)()("wss://chatsocket490.herokuapp.com"),h=Object(s.b)((function(e){var t=e.userListReducer;return{userList:Object(o.a)(t.usersList)}}),{updateUsersList:function(e){return{type:"UPDATE_USERS_LIST",payload:e}}})((function(e){var t=e.userList,n=e.updateUsersList;Object(a.useEffect)((function(){p.on("userListHasChanged",(function(e){n(e)}))}),[n]);return i.a.createElement("div",{className:"ui side-bar segment"},i.a.createElement("button",{className:"header"},"Users in chat:"),t.map((function(e){var t=function(e){var t=p.id===e.socketID;return"".concat(t?"youspan":""," logged-usr")}(e);return i.a.createElement("button",{key:e.id,className:t},e.username)})))})),E=(n(86),n(87),function(e){var t=e.date.getDate()+"/"+(e.date.getMonth()+1)+"/"+e.date.getFullYear()+" @ "+e.date.getHours()+":"+e.date.getMinutes()+":"+e.date.getSeconds();return i.a.createElement("div",{className:"comment"},i.a.createElement("div",{className:"content"},""===e.image?null:i.a.createElement("div",{className:"avatar"},i.a.createElement("img",{src:e.image,alt:""})),i.a.createElement("a",{className:"author",href:"www.walla.com"},e.name),i.a.createElement("div",{className:"metadata"},i.a.createElement("div",null,t)),i.a.createElement("div",{className:"text"},i.a.createElement("p",null,e.text))))}),v=Object(s.b)((function(e){return{messages:Object(o.a)(e.messageReducer.messages)}}),{recieveMessage:function(e){return{type:"RECIEVE_MESSAGE",payload:e}}})((function(e){var t=e.recieveMessage,n=e.messages;Object(a.useEffect)((function(){p.on("viewMessage",(function(e){return t(e)}))}),[t]),Object(a.useEffect)((function(){r()}),[n]);var r=function(){var e=document.querySelector(".comments");null!==e&&(e.scrollTop=e.scrollHeight)};return i.a.createElement("div",{className:"ui comments segment container"},n.map((function(e,t){return"string"===typeof e?i.a.createElement(E,{key:t,name:"",date:new Date,text:e}):i.a.createElement(E,{key:t,name:e.senderName,date:new Date(e.date),text:e.text,image:e.image})})))})),b=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null);return i.a.createElement("div",{className:"ui top-view"},i.a.createElement("div",{ref:e,className:"side-bar-view"},i.a.createElement(h,null)),i.a.createElement("div",{className:"chat-view"},i.a.createElement("div",{ref:t,className:"open-side-bar",onClick:function(){return function(e,t){var n=t.current.querySelector(".left"),a=t.current.querySelector(".right");e.current.style.width?(e.current.style.width=null,e.current.style.visibility=null):(e.current.style.visibility="visible",e.current.style.width="20%"),n.classList.toggle("hidden"),a.classList.toggle("hidden")}(e,t)}},i.a.createElement("i",{className:"angle double right icon"}),i.a.createElement("i",{className:"angle double left icon hidden"}),i.a.createElement("i",{className:"clipboard list icon"})),i.a.createElement(v,null)))},N=(n(88),Object(s.b)((function(e){return{userProfile:e.profileReducer}}))((function(e){var t=e.userProfile;return i.a.createElement("div",{className:"ui container fluid focus input"},i.a.createElement("input",{type:"text",placeholder:"Chat",className:"input-sizing",onKeyPress:function(e){if("Enter"===e.key){var n={senderName:t.username,date:new Date,text:e.target.value,image:t.imgURL};e.target.value="",function(e){p.emit("subscribeMessage",e)}(n)}}}))}))),y=n(39),S=n(40),O=n(42),w=n(41),I=n(43),j=function(e){var t="";return e.split("").forEach((function(e,n){n%4===0&&(t+=e)})),{socketID:p.id,id:e,username:"Guest ".concat(t),imgURL:"https://previews.123rf.com/images/lineartestpilot/lineartestpilot1908/lineartestpilot190834340/128650855-cartoon-question-mark-with-speech-bubble-in-smooth-gradient-style.jpg"}},k=function(e){return{socketID:p.id,id:e.getId(),username:e.getName(),imgURL:e.getImageUrl()}},_=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(O.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(i)))).onAuthChange=function(e){var t;e?(t=k(n.auth.currentUser.get().getBasicProfile()),n.props.signIn(t)):(t=j(p.id),n.props.signAsGuest(t)),p.emit("userconnected",n.props.userProfile)},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(I.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"548027089353-j03e14pvp4o81noalqup4e212iscpqlb.apps.googleusercontent.com",scope:"email profile"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.userProfile.isSignedIn?i.a.createElement("span",null,"There is some problem with the API"):this.props.userProfile.isSignedIn?i.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign Out"):i.a.createElement("div",null,i.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}),"Sign in with Google"))}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderAuthButton())}}]),t}(i.a.Component),L=Object(s.b)((function(e){return{userProfile:e.profileReducer}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signAsGuest:function(e){return{type:"SIGN_AS_GUEST",payload:e}}})(_),R=function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement("div",{className:"ui chat"},i.a.createElement("div",{className:"ui placeholder segment"},i.a.createElement("div",{className:"head-view"},i.a.createElement(b,null)),i.a.createElement("div",{className:"ui divider"}),i.a.createElement("div",{className:"buttom-view"},i.a.createElement("div",{className:"text-area"},i.a.createElement(N,null)),i.a.createElement("div",{className:"google-auth-area"},i.a.createElement(L,null))))))},A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,C=Object(l.e)(g,A(Object(l.a)(u.a)));c.a.render(i.a.createElement(s.a,{store:C},i.a.createElement(R,null)),document.querySelector("#root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.cd13ca25.chunk.js.map