(this.webpackJsonpgroupchat=this.webpackJsonpgroupchat||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),c=n.n(i),s=n(6),o=n(10),l=n(47),u=n.n(l),m=n(48),d=n(21),g=n(11),p=n(12),f=n(15),h={isSignedIn:null},v=Object(o.c)({messageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{messages:[]},t=arguments.length>1?arguments[1]:void 0;return"RECIEVE_MESSAGE"===t.type?Object(f.a)({},e,{messages:[].concat(Object(p.a)(e.messages),[t.payload])}):e},profileReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(f.a)({},e,{isSignedIn:!0},t.payload);case"SIGN_AS_GUEST":return Object(f.a)({},e,{isSignedIn:!1},t.payload);default:return e}},userListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{usersList:[]},t=arguments.length>1?arguments[1]:void 0;return"UPDATE_USERS_LIST"===t.type?Object(f.a)({},e,{usersList:Object(p.a)(t.payload)}):e}}),E=(n(67),n(68),n(55)),b=(n(69),n(70),n(49)),N=n.n(b)()("wss://chatsocket490.herokuapp.com"),y=n(50),S=n.n(y),O=Object(s.b)((function(e){var t=e.userListReducer;return{userList:Object(p.a)(t.usersList)}}),{updateUsersList:function(e){return{type:"UPDATE_USERS_LIST",payload:e}}})((function(e){var t=e.userList,n=e.updateUsersList;Object(a.useEffect)((function(){N.on("userListHasChanged",(function(e){n(e)}))}),[n]);var i=Object(a.useState)(!1),c=Object(E.a)(i,2),s=c[0],o=c[1],l=function(){o(!0)},u=function(){o(!1)};return r.a.createElement("div",{className:"ui side-bar segment"},r.a.createElement("button",{className:"header"},"Users in chat:"),t.map((function(e){var t=function(e){var t=N.id===e.socketID;return"".concat(t?"youspan":""," logged-usr")}(e);return r.a.createElement("button",{key:e.id,className:t,onClick:l},e.username)})),r.a.createElement(S.a,{initWidth:800,initHeight:400,onFocus:function(){return console.log("Modal is clicked")},className:"my-modal-custom-class",onRequestClose:u,isOpen:s},r.a.createElement(x,{privateChat:!0}),r.a.createElement("button",{onClick:u},"Close modal")))})),w=(n(104),n(105),function(e){var t=e.date.getDate()+"/"+(e.date.getMonth()+1)+"/"+e.date.getFullYear()+" @ "+e.date.getHours()+":"+e.date.getMinutes()+":"+e.date.getSeconds();return r.a.createElement("div",{className:"comment"},r.a.createElement("div",{className:"content"},""===e.image?null:r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("a",{className:"author",href:"www.walla.com"},e.name),r.a.createElement("div",{className:"metadata"},r.a.createElement("div",null,t)),r.a.createElement("div",{className:"text"},r.a.createElement("p",null,e.text))))}),C=Object(s.b)((function(e){return{messages:Object(p.a)(e.messageReducer.messages)}}),{recieveMessage:function(e){return{type:"RECIEVE_MESSAGE",payload:e}}})((function(e){var t=e.recieveMessage,n=e.messages,i=e.privateChat;Object(a.useEffect)((function(){i||N.on("viewMessage",(function(e){return t(e)}))}),[t,i]),Object(a.useEffect)((function(){c()}),[n]);var c=function(){var e=document.querySelector(".comments");null!==e&&(e.scrollTop=e.scrollHeight)};return r.a.createElement("div",{className:"ui comments segment container"},n.map((function(e,t){return"string"===typeof e?r.a.createElement(w,{key:t,name:"",date:new Date,text:e}):r.a.createElement(w,{key:t,name:e.senderName,date:new Date(e.date),text:e.text,image:e.image})})))})),I=function(e){var t=e.privateChat,n=Object(a.useRef)(null),i=Object(a.useRef)(null);return r.a.createElement("div",{className:"ui top-view"},t?null:r.a.createElement("div",{ref:n,className:"side-bar-view"},r.a.createElement(O,null)),r.a.createElement("div",{className:"chat-view"},r.a.createElement("div",{ref:i,className:"open-side-bar",onClick:function(){return function(e,t){var n=t.current.querySelector(".left"),a=t.current.querySelector(".right");e.current.style.width?(e.current.style.width=null,e.current.style.visibility=null):(e.current.style.visibility="visible",e.current.style.width="40%"),n.classList.toggle("hidden"),a.classList.toggle("hidden")}(n,i)}},r.a.createElement("i",{className:"angle double right icon"}),r.a.createElement("i",{className:"angle double left icon hidden"}),r.a.createElement("i",{className:"clipboard list icon"})),r.a.createElement(C,{private:t})))},j=(n(106),Object(s.b)((function(e){return{userProfile:e.profileReducer}}))((function(e){var t=e.userProfile,n=e.privateChat;return r.a.createElement("div",{className:"ui container fluid focus input"},r.a.createElement("input",{type:"text",placeholder:"Chat",className:"input-sizing",onKeyPress:function(e){if("Enter"===e.key){var a={senderName:t.username,date:new Date,text:e.target.value,image:t.imgURL};e.target.value="",function(e){n||N.emit("subscribeMessage",e)}(a)}}}))}))),k=n(51),_=n(52),L=n(56),R=n(53),A=n(57),P=function(e){var t="";return e.split("").forEach((function(e,n){n%4===0&&(t+=e)})),{socketID:N.id,id:e,username:"Guest ".concat(t),imgURL:"https://previews.123rf.com/images/lineartestpilot/lineartestpilot1908/lineartestpilot190834340/128650855-cartoon-question-mark-with-speech-bubble-in-smooth-gradient-style.jpg"}},U=function(e){return{socketID:N.id,id:e.getId(),username:e.getName(),imgURL:e.getImageUrl()}},G=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(L.a)(this,(e=Object(R.a)(t)).call.apply(e,[this].concat(r)))).onAuthChange=function(e){var t=null;e?(t=U(n.auth.currentUser.get().getBasicProfile()),n.props.signIn(t)):(t=P(n.props.userProfile.socketID),n.props.signAsGuest(t)),N.emit("profileCreated",n.props.userProfile)},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(A.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this;N.on("connect",(function(){var t=P(N.id);window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"548027089353-j03e14pvp4o81noalqup4e212iscpqlb.apps.googleusercontent.com",scope:"email profile"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.props.signAsGuest(t),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.userProfile.isSignedIn?r.a.createElement("span",null,"There is some problem with the API"):this.props.userProfile.isSignedIn?r.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign Out"):r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},r.a.createElement("i",{className:"google icon"}),"Sign in with Google"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderAuthButton())}}]),t}(r.a.Component),D=Object(s.b)((function(e){return{userProfile:e.profileReducer}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signAsGuest:function(e){return{type:"SIGN_AS_GUEST",payload:e}}})(G),x=function(e){var t=e.privateChat;return Object(a.useEffect)((function(){return function(){return N.emit("disconnect")}}),[]),r.a.createElement("div",{className:"ui container"},r.a.createElement("div",{className:"ui chat"},r.a.createElement("div",{className:"ui placeholder segment"},r.a.createElement("div",{className:"head-view"},r.a.createElement(I,{privateChat:t})),r.a.createElement("div",{className:"ui divider"}),r.a.createElement("div",{className:"buttom-view"},r.a.createElement("div",{className:"text-area"},r.a.createElement(j,{privateChat:t})),r.a.createElement(d.b,{to:{pathname:"/Camera",query:{handleTakePhoto:function(e){console.log("takePhoto")}}}},r.a.createElement("i",{className:"icon camera"})),t?null:r.a.createElement("div",{className:"google-auth-area"},r.a.createElement(D,null))))))},M=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,T=Object(o.e)(v,M(Object(o.a)(m.a)));c.a.render(r.a.createElement(s.a,{store:T},r.a.createElement(d.a,{basename:"".concat("/GroupChat","/")},r.a.createElement(g.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(x,Object.assign({},e,{privateChat:!1}))}}),r.a.createElement(g.a,{path:"/Camera",exact:!0,render:function(e){var t=e.location;return r.a.createElement(u.a,t.query)}}))),document.querySelector("#root"))},58:function(e,t,n){e.exports=n(108)},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},98:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.40af22a1.chunk.js.map