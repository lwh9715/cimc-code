(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mind-mind"],{"1b31":function(t,e,i){"use strict";(function(t){var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n(i("ade3")),s={data:function(){return{pwd:(0,o.default)({userpwd:"123",newciphertext:"123",newsecretkey:"123",username:"plan",action:"updatePwd",timeStamp:"3",apiKey:"test-api-key",source:"android",appVersion:"v1.1.0"},"timeStamp",(new Date).getTime()),showPop:!1,userInfo:{},list:[{icon:"setting",name:"应用设置"},{icon:"lock",name:"修改密码"},{icon:"android-circle-fill",name:"版本更新"},{icon:"info-circle",name:"退出"},{icon:"server-man",name:"帮助"}],dataList:[{id:"1",name:"A"},{id:"2",name:"B"},{id:"3",name:"C"}]}},onLoad:function(){},created:function(){this.userInfo=JSON.parse(this.$U.getStorage("user")),this.pwd.token=this.userInfo.token,t("log",this.userInfo," at pages/mind/mind.vue:142"),this.userInfo.username||(this.userInfo.username="未登录")},methods:{changePwd:function(){var e=this;this.pwd.userpwd&&this.pwd.newciphertext&&this.pwd.newsecretkey?this.pwd.newciphertext===this.pwd.newsecretkey?(t("log",this.pwd," at pages/mind/mind.vue:172"),this.userInfo=JSON.parse(this.$U.getStorage("user")),this.pwd.token=this.userInfo.token,this.pwd.timeStamp=(new Date).getTime(),this.$H.post("/user",this.pwd,{token:!1}).then((function(t){uni.showToast({title:t.message,icon:"none"}),"0000"===t.code&&setTimeout((function(t){uni.navigateTo({url:"../login/login"}),e.pwd.userpwd="",e.pwd.newciphertext="",e.pwd.newsecretkey=""}),1500)})).catch((function(t){uni.showToast({title:"错误"+t.statusCode,icon:"none"})}))):uni.showToast({title:"新密码和确认密码不一致",icon:"none"}):uni.showToast({title:"原密码或新密码不能为空",icon:"none"})},notAvail:function(e){switch(t("log",e," at pages/mind/mind.vue:211"),e){case 0:uni.showToast({title:"该功能暂未开通",icon:"none"});break;case 1:this.showPop=!0;break;case 2:this.$U.update();break;case 3:uni.navigateTo({url:"../login/login"}),uni.showToast({title:"退出成功",icon:"none"}),this.$U.removeStorage("user");break;case 4:uni.showToast({title:"该功能暂未开通",icon:"none"});break;default:uni.showToast({title:"该功能暂未开通",icon:"none"});break}},changeLang:function(){uni.showToast({title:"切"})}}};e.default=s}).call(this,i("0de9")["log"])},"1e55":function(t,e,i){"use strict";i.r(e);var n=i("b627"),o=i("bd16");for(var s in o)"default"!==s&&function(t){i.d(e,t,(function(){return o[t]}))}(s);var a,r=i("f0c5"),c=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"8511a7b0",null,!1,n["a"],a);e["default"]=c.exports},b627:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var n={uIcon:i("c9cd").default,uPopup:i("67dc").default},o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticStyle:{height:"350rpx","background-color":"#6DBA52",padding:"50rpx","box-sizing":"border-box"}},[n("v-uni-view",{staticClass:"u-f u-f-ac",staticStyle:{width:"70%"}},[n("v-uni-image",{staticStyle:{"background-color":"#fff",margin:"30rpx","border-radius":"50%",height:"160rpx",width:"160rpx"},attrs:{src:i("feb1")}}),n("v-uni-view",{staticStyle:{"margin-left":"40rpx","font-weight":"bold",color:"#fff"}},[n("v-uni-view",{},[n("v-uni-text",{staticStyle:{"font-size":"55rpx"}},[t._v(t._s(t.userInfo.username?t.userInfo.username:"未登录"))])],1),n("v-uni-view",{},[n("v-uni-text",{staticStyle:{"font-size":"33rpx"}})],1)],1)],1)],1),n("v-uni-view",{},[t._l(t.list,(function(e,i){return[n("v-uni-view",{key:i+"_0",staticClass:"u-f u-f-jsb",staticStyle:{margin:"15rpx 50rpx","border-bottom":"1px solid #eee","padding-bottom":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.notAvail(i)}}},[n("v-uni-view",{staticClass:"u-f"},[n("u-icon",{staticStyle:{color:"#6DBA52","margin-right":"30rpx"},attrs:{name:e.icon,size:"48"}}),n("v-uni-view",{staticStyle:{height:"48rpx"}},[n("v-uni-text",{staticStyle:{"font-weight":"bold","font-size":"30rpx"}},[t._v(t._s(e.name))])],1)],1),n("u-icon",{staticStyle:{color:"#999","font-size":"300"},attrs:{name:"arrow-right",size:"38"}})],1)]})),n("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{margin:"15rpx 50rpx","border-bottom":"1px solid #eee","padding-bottom":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeLang.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"u-f"},[n("u-icon",{staticStyle:{color:"#6DBA52","margin-right":"30rpx"},attrs:{name:"order",size:"48"}}),n("v-uni-view",{staticStyle:{height:"48rpx"}},[n("v-uni-text",{staticStyle:{"font-weight":"bold","font-size":"30rpx"}},[t._v("切换语言")])],1)],1),n("u-icon",{staticStyle:{color:"#999","font-size":"300"},attrs:{name:"arrow-right",size:"38"}})],1)],2),n("u-popup",{attrs:{mode:"bottom","border-radius":"20"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[n("v-uni-view",{staticClass:"px-3"},[n("v-uni-view",{staticClass:"flex justify-between align-center"},[n("v-uni-text",{staticClass:"font-weight-bold"},[t._v("修改密码")]),n("v-uni-text",{staticClass:"iconfont icon-reeor  ",staticStyle:{"font-size":"56rpx",color:"#6DBA52"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showPop=!1}}})],1),n("v-uni-view",{staticClass:"flex justify-center align-center"},[n("v-uni-text",{staticClass:"iconfont icon-unlock mr-2 ",staticStyle:{"font-size":"56rpx",color:"#6DBA52"}}),n("v-uni-input",{staticClass:"border-bottom",staticStyle:{"border-color":"#6DBA52"},attrs:{type:"text",placeholder:"请输入原密码",value:""},model:{value:t.pwd.userpwd,callback:function(e){t.$set(t.pwd,"userpwd",e)},expression:"pwd.userpwd"}})],1),n("v-uni-view",{staticClass:"flex justify-center align-center"},[n("v-uni-text",{staticClass:"iconfont icon-password1  mr-2 ",staticStyle:{"font-size":"56rpx",color:"#6DBA52"}}),n("v-uni-input",{staticClass:"border-bottom",staticStyle:{"border-color":"#6DBA52"},attrs:{type:"text",placeholder:"请输入新密码",value:""},model:{value:t.pwd.newciphertext,callback:function(e){t.$set(t.pwd,"newciphertext",e)},expression:"pwd.newciphertext"}})],1),n("v-uni-view",{staticClass:"flex justify-center align-center"},[n("v-uni-text",{staticClass:"iconfont icon-password1  mr-2 ",staticStyle:{"font-size":"56rpx",color:"#6DBA52"}}),n("v-uni-input",{staticClass:"border-bottom",staticStyle:{"border-color":"#6DBA52"},attrs:{type:"text",placeholder:"请再次输入新密码",value:""},model:{value:t.pwd.newsecretkey,callback:function(e){t.$set(t.pwd,"newsecretkey",e)},expression:"pwd.newsecretkey"}})],1),n("v-uni-view",{staticClass:"bg-primary rounded-20 flex justify-center text-white font-lg mb-5 mt-3 ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changePwd.apply(void 0,arguments)}}},[t._v("确 定")])],1)],1)],1)},s=[]},bd16:function(t,e,i){"use strict";i.r(e);var n=i("1b31"),o=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=o.a},feb1:function(t,e,i){t.exports=i.p+"static/img/ship.b015187a.png"}}]);