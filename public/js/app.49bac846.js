(function(e){function t(t){for(var n,i,u=t[0],s=t[1],l=t[2],p=0,m=[];p<u.length;p++)i=u[p],a[i]&&m.push(a[i][0]),a[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,u=1;u<o.length;u++){var s=o[u];0!==a[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},a={app:0},r=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"1fcc":function(e,t,o){"use strict";var n=o("2d47"),a=o.n(n);a.a},"2d47":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),a=o("2f62"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],u={name:"app"},s=u,l=(o("5c0b"),o("2877")),c=Object(l["a"])(s,r,i,!1,null,null,null),p=c.exports,m=o("8c4f"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("メイン画面だ！")]),o("main-navbar"),o("main-table"),o("main-navbar-bottom")],1)},h=[],v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Navbar")]),o("button",{on:{click:e.logout}},[e._v("ログアウト")])])},f=[],b=o("0e44"),g={loggedIn:!1,userId:"",token:""};n["a"].use(a["a"]);var _={LOGIN:function(e,t){e.loggedIn=!0,e.userId=t.user_id,e.token=t.token},LOGOUT:function(e){Object.assign(e,JSON.parse(localStorage.getItem("initialState")))}},w=new a["a"].Store({state:g,mutations:_,actions:{},getters:{},plugins:[Object(b["a"])({key:"wakulib"})]}),k={name:"Navbar",methods:{logout:function(){var e=this;this.$axios.post("/api/logout").then(function(t){w.commit("LOGOUT"),e.$router.push({path:"/login"})}).catch(function(e){})}}},y=k,x=Object(l["a"])(y,v,f,!1,null,"32e3b28f",null),O=x.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("navbar_bottom")])])}],j={name:"navbar-bottom"},P=j,E=Object(l["a"])(P,N,$,!1,null,"43e960d9",null),I=E.exports,S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Table")]),o("table",[e._m(0),o("tbody",e._l(e.books,function(t){return o("tr",{key:t.id},[o("th",[e._v(e._s(t.title))]),o("th",[e._v(e._s(t.author))]),o("th",[e._v(e._s(t.volume))]),o("th",[e._v(e._s(t.chapter))])])}),0)]),o("button",{on:{click:e.openNewBook}},[e._v("本追加")]),o("modal",{attrs:{name:"new-book",width:"80%",height:"80%",delay:100,transition:"nice-modal-fade"}},[o("new-book",{on:{close:e.closeNewBook}})],1)],1)},A=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",[e._v("名前")]),o("th",[e._v("著者")]),o("th",[e._v("巻数")]),o("th",[e._v("話数")])])])}],B=(o("ac6a"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("a",{on:{click:function(t){return e.$emit("close")}}},[e._v("閉じる")]),o("form",{on:{submit:function(t){return t.preventDefault(),e.makeBook(t)}}},[o("label",{attrs:{for:"title"}},[e._v("題名")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",id:"title",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),o("label",{attrs:{for:"phonetic"}},[e._v("読みがな")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.phonetic,expression:"phonetic"}],attrs:{type:"text",id:"phonetic"},domProps:{value:e.phonetic},on:{input:function(t){t.target.composing||(e.phonetic=t.target.value)}}}),o("label",{attrs:{for:"author"}},[e._v("作者")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.author,expression:"author"}],attrs:{type:"text",id:"author"},domProps:{value:e.author},on:{input:function(t){t.target.composing||(e.author=t.target.value)}}}),o("label",{attrs:{for:"volume"}},[e._v("巻数")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],attrs:{type:"number",id:"volume"},domProps:{value:e.volume},on:{input:function(t){t.target.composing||(e.volume=t.target.value)}}}),o("label",{attrs:{for:"chapter"}},[e._v("話数")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.chapter,expression:"chapter"}],attrs:{type:"number",id:"chapter"},domProps:{value:e.chapter},on:{input:function(t){t.target.composing||(e.chapter=t.target.value)}}}),o("label",{attrs:{for:"completed"}},[e._v("完結")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.completed,expression:"completed"}],attrs:{type:"checkbox",id:"completed"},domProps:{checked:Array.isArray(e.completed)?e._i(e.completed,null)>-1:e.completed},on:{change:function(t){var o=e.completed,n=t.target,a=!!n.checked;if(Array.isArray(o)){var r=null,i=e._i(o,r);n.checked?i<0&&(e.completed=o.concat([r])):i>-1&&(e.completed=o.slice(0,i).concat(o.slice(i+1)))}else e.completed=a}}}),o("button",{attrs:{type:"submit"}},[e._v("作成")])])])}),T=[],q={name:"NewBook",data:function(){return{title:"",phonetic:"",author:"",volume:1,chapter:1,completed:!1}},methods:{makeBook:function(){this.$axios.post("/api/books",{user_id:w.state.userId,title:this.title,phonetic:this.phonetic,author:this.author,volume:this.volume,chapter:this.chapter,completed:this.completed}).then(function(e){console.log("New book successfully created")}).catch(function(e){}),this.$emit("close")}}},L=q,G=Object(l["a"])(L,B,T,!1,null,"4b724bb1",null),J=G.exports,M={name:"Table",components:{"new-book":J},data:function(){return{books:[]}},methods:{init:function(){var e=this;this.$axios.get("/api/books/all/"+w.state.userId).then(function(t){t.data.forEach(function(t){e.books.push({id:t.id,title:t.title,phonetic:t.phonetic,author:t.author,volume:t.volume,chapter:t.chapter,completed:t.completed})})}).catch(function(e){})},openNewBook:function(){this.$modal.show("new-book")},closeNewBook:function(){this.$modal.hide("new-book")}},mounted:function(){this.init()}},z=M,D=(o("1fcc"),Object(l["a"])(z,S,A,!1,null,"455aebb2",null)),U=D.exports,C={name:"Table",components:{"main-navbar":O,"main-table":U,"main-navbar-bottom":I}},F=C,H=Object(l["a"])(F,d,h,!1,null,"4693ef96",null),K=H.exports,Q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("p",{directives:[{name:"show",rawName:"v-show",value:e.isError,expression:"isError"}]},[e._v("認証に失敗しました。")]),o("form",{on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[o("h1",[e._v("ログイン")]),e._v("\n    メールアドレス: "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v("\n    パスワード: "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),o("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("ログイン")])])])},R=[],V={name:"Login",data:function(){return{isError:!1,email:"",password:""}},methods:{login:function(){var e=this;this.$axios.post("/api/login",{email:this.email,password:this.password}).then(function(t){var o=t.data.user_id,n=t.data.access_token;e.$axios.defaults.headers.common["Authorization"]="Bearer "+n,w.commit("LOGIN",{user_id:o,token:n}),console.log(w.state.userId),console.log(w.state.token),e.$router.push({path:"/"})}).catch(function(t){e.isError=!0})}}},W=V,X=Object(l["a"])(W,Q,R,!1,null,"50bc52ba",null),Y=X.exports;n["a"].use(m["a"]);var Z=new m["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:K,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Y,meta:{requiresNoAuth:!0}}]});Z.beforeEach(function(e,t,o){e.matched.some(function(e){return e.meta.requiresAuth})&&(w.state.loggedIn?o():o({path:"/login",query:{redirect:e.fullPath}})),e.matched.some(function(e){return e.meta.requiresNoAuth})&&(w.state.loggedIn?o({path:"/",query:{redirect:e.fullPath}}):o())});var ee=Z,te=o("bc3a"),oe=o.n(te),ne=o("1881"),ae=o.n(ne);window.state=w.state,n["a"].prototype.$axios=oe.a,n["a"].use(a["a"]),n["a"].use(ae.a),n["a"].config.productionTip=!1,new n["a"]({router:ee,render:function(e){return e(p)},created:function(){localStorage.setItem("initialState",JSON.stringify(g)),w.state.loggedIn&&(oe.a.defaults.headers.common["Authorization"]="Bearer "+w.state.token)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("5e27"),a=o.n(n);a.a},"5e27":function(e,t,o){}});
//# sourceMappingURL=app.49bac846.js.map