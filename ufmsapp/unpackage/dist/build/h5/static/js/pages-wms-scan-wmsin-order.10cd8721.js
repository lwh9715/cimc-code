(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wms-scan-wmsin-order"],{"3c25":function(t,n,e){"use strict";function i(t,n,e){this.$children.map((function(o){t===o.$options.name?o.$emit.apply(o,[n].concat(e)):i.apply(o,[t,n].concat(e))}))}e("99af"),e("d81d"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={methods:{dispatch:function(t,n,e){var i=this.$parent||this.$root,o=i.$options.name;while(i&&(!o||o!==t))i=i.$parent,i&&(o=i.$options.name);i&&i.$emit.apply(i,[n].concat(e))},broadcast:function(t,n,e){i.call(this,t,n,e)}}};n.default=o},6192:function(t,n,e){"use strict";var i=e("e5aa"),o=e.n(i);o.a},"66ae":function(t,n,e){"use strict";var i=e("f856"),o=e.n(i);o.a},"71f2":function(t,n,e){"use strict";var i=e("4ea4");e("a9e3"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(e("3c25")),r={name:"u-input",mixins:[o.default],props:{value:{type:String,default:""},type:{type:String,default:"text"},inputAlign:{type:String,default:"left"},placeholder:{type:String,default:"请输入内容"},disabled:{type:Boolean,default:!1},maxlength:{type:[Number,String],default:140},placeholderStyle:{type:String,default:"color: #c0c4cc;"},confirmType:{type:String,default:"done"},customStyle:{type:Object,default:function(){return{}}},fixed:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},passwordIcon:{type:Boolean,default:!0},border:{type:Boolean,default:!1},borderColor:{type:String,default:"#dcdfe6"},autoHeight:{type:Boolean,default:!0},selectOpen:{type:Boolean,default:!1},height:{type:[Number,String],default:""},clearable:{type:Boolean,default:!0}},data:function(){return{defaultValue:this.value,inputHeight:70,textareaHeight:100,validateState:!1,focused:!1,showPassword:!1,marginRight:0}},watch:{value:function(t,n){this.defaultValue=t,t!=n&&"select"==this.type&&this.handleInput({detail:{value:t}})},focused:function(t){this.clearable&&this.value&&this.getMarginRight()}},computed:{inputMaxlength:function(){return Number(this.maxlength)},getStyle:function(){var t={};return t.minHeight=this.height?this.height+"rpx":"textarea"==this.type?this.textareaHeight+"rpx":this.inputHeight+"rpx",t.marginRight=this.marginRight+"px",t=Object.assign(t,this.customStyle),t}},created:function(){this.$on("on-form-item-error",this.onFormItemError)},mounted:function(){this.getMarginRight()},methods:{getMarginRight:function(){var t=this;this.$nextTick((function(){t.$uGetRect(".u-input__right-icon").then((function(n){t.marginRight=n.width+uni.upx2px(20)}))}))},handleInput:function(t){var n=this;this.defaultValue=t.detail.value,this.$emit("input",t.detail.value),this.$nextTick((function(){n.dispatch("u-form-item","on-form-change",t.detail.value)}))},handleBlur:function(t){var n=this;this.focused=!1,this.$emit("blur",t.detail.value),this.$nextTick((function(){n.dispatch("u-form-item","on-form-blur",t.detail.value)}))},onFormItemError:function(t){this.validateState=t},onFocus:function(t){this.focused=!0,this.$emit("focus")},onConfirm:function(t){this.$emit("confirm",t.detail.value)},onClear:function(t){this.$emit("input","")},inputClick:function(){this.$emit("click")}}};n.default=r},7999:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-input[data-v-27cd8f38]{position:relative;flex:1}.u-input__input[data-v-27cd8f38]{font-size:%?28?%;color:#303133}.u-input__textarea[data-v-27cd8f38]{width:auto;font-size:%?28?%;color:#303133;padding:%?10?% 0;line-height:normal}.u-input--border[data-v-27cd8f38]{border-radius:%?6?%;border-radius:4px;border:1px solid #dcdfe6}.u-input--error[data-v-27cd8f38]{border-color:#fa3534!important}.u-input__right-icon[data-v-27cd8f38]{position:absolute;right:0;top:50%;z-index:3;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.u-input__right-icon__item[data-v-27cd8f38]{margin-left:%?10?%}.u-input__right-icon--select[data-v-27cd8f38]{transition:-webkit-transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.u-input__right-icon--select--reverse[data-v-27cd8f38]{-webkit-transform:rotate(-180deg);transform:rotate(-180deg)}',""]),t.exports=n},"800e4":function(t,n,e){"use strict";e.r(n);var i=e("b9cc"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},9307:function(t,n,e){"use strict";e.r(n);var i=e("93f5"),o=e("f287");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("6192");var a,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"27cd8f38",null,!1,i["a"],a);n["default"]=c.exports},"93f5":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uIcon:e("f3c3").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"u-input",class:{"u-input--border":t.border,"u-input--error":t.validateState},style:{padding:"0 "+(t.border?20:0)+"rpx",borderColor:t.borderColor,textAlign:t.inputAlign},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.inputClick.apply(void 0,arguments)}}},["textarea"==t.type?e("v-uni-textarea",{staticClass:"u-input__input u-input__textarea",style:[t.getStyle],attrs:{value:t.value,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled,maxlength:t.inputMaxlength,fixed:t.fixed,focus:t.focus,autoHeight:t.autoHeight},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.handleInput.apply(void 0,arguments)},blur:function(n){arguments[0]=n=t.$handleEvent(n),t.handleBlur.apply(void 0,arguments)},focus:function(n){arguments[0]=n=t.$handleEvent(n),t.onFocus.apply(void 0,arguments)},confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm.apply(void 0,arguments)}}}):e("v-uni-input",{staticClass:"u-input__input",style:[t.getStyle],attrs:{type:"password"==t.type?"text":t.type,value:t.defaultValue,password:"password"==t.type&&!t.showPassword,placeholder:t.placeholder,placeholderStyle:t.placeholderStyle,disabled:t.disabled||"select"===t.type,maxlength:t.inputMaxlength,focus:t.focus,confirmType:t.confirmType},on:{focus:function(n){arguments[0]=n=t.$handleEvent(n),t.onFocus.apply(void 0,arguments)},blur:function(n){arguments[0]=n=t.$handleEvent(n),t.handleBlur.apply(void 0,arguments)},input:function(n){arguments[0]=n=t.$handleEvent(n),t.handleInput.apply(void 0,arguments)},confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.onConfirm.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"u-input__right-icon u-flex"},[t.clearable&&t.value&&t.focused?e("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[e("u-icon",{attrs:{size:"32",name:"close-circle-fill",color:"#c0c4cc"},on:{touchstart:function(n){arguments[0]=n=t.$handleEvent(n),t.onClear.apply(void 0,arguments)}}})],1):t._e(),t.passwordIcon&&"password"==t.type?e("v-uni-view",{staticClass:"u-input__right-icon__clear u-input__right-icon__item"},[e("u-icon",{attrs:{size:"32",name:t.showPassword?"eye-fill":"eye",color:"#c0c4cc"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showPassword=!t.showPassword}}})],1):t._e(),"select"==t.type?e("v-uni-view",{staticClass:"u-input__right-icon--select u-input__right-icon__item",class:{"u-input__right-icon--select--reverse":t.selectOpen}},[e("u-icon",{attrs:{name:"arrow-down-fill",size:"26",color:"#c0c4cc"}})],1):t._e()],1)],1)},r=[]},b9cc:function(t,n,e){"use strict";var i,o,r;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{stop:!1,orderId:"",records:[{id:"",status:"",time:""}],form:{id:0,goodsnamec:"",innos:"",piece_in:0,gdscbm_in:0,gdswgt_in:0},itemindex:0,wmsinnos:"",customernamec:""}},onNavigationBarButtonTap:function(){uni.reLaunch({url:"../index/index"})},onBackPress:function(){return uni.reLaunch({url:"../index/index"}),!0},onShow:function(){r=this,o=plus.android.runtimeMainActivity();plus.android.importClass("android.content.Context");i=plus.android.implements("io.dcloud.feature.internal.reflect.BroadcastReceiver",{onReceive:e});var t=plus.android.importClass("android.content.IntentFilter"),n=(plus.android.importClass("android.content.Intent"),new t);function e(t,n){plus.android.importClass(n),console.log(n.getStringExtra("data")),r.orderId=n.getStringExtra("data")}n.addAction("com.android.receive_scan_action"),o.registerReceiver(i,n)},onHide:function(){o.unregisterReceiver(i)},onLoad:function(){this.innerAudioContext=uni.createInnerAudioContext()},onReady:function(){},watch:{orderId:function(t){console.log("from watch "+t),"6926032345152"===t&&this.test("1")}},methods:{test:function(t){switch(this.innerAudioContext.autoplay=!0,t){case"2":this.innerAudioContext.src="../../static/voice/2.mp3";break;case"1":this.innerAudioContext.src="../../static/voice/1.mp3";break;case"3":this.innerAudioContext.src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3";break}this.innerAudioContext.play()},openScan:function(){var t=this;uni.scanCode({success:function(n){t.form.innos=n.result,console.log(t.orderId),t.clearData(),t.openWms()}})},clearData:function(){this.records=[{}],this.itemindex=0,this.wmsinnos="",this.customernamec="",this.showItem("next")},openWms:function(){var t=this;this.form.innos?this.$H.post("/wmsinfo?method=getWmsinfo",this.form,{token:!1}).then((function(n){console.log(n),n.data&&(t.records=n.data,t.itemindex=0,t.wmsinnos=n.data[0].wmsinnos,t.customernamec=n.data[0].customernamec,t.showItem("next"))})).catch((function(t){console.log(t),uni.showToast({title:"失败2："+t.message,icon:"none"})})):uni.showToast({title:"请输入或扫描单号",icon:"none"})},submitWms:function(){var t=this;console.log("form:"+this.form),this.$H.post("/wmsinfo?method=submitWmsin",this.form,{token:!1}).then((function(n){if(console.log(n),n.data,!0===n.success)return uni.showToast({title:"成功"}),void t.clearData();uni.showToast({title:"失败："+n.message,icon:"none"})})).catch((function(t){console.log(t),uni.showToast({title:"失败："+t.message,icon:"none"})}))},submitWmsDtl:function(){console.log("form:"+this.form),this.$H.post("/wmsinfo?method=updateWmsin",this.form,{token:!1}).then((function(t){console.log(t),t.data,!0!==t.success?uni.showToast({title:"失败："+t.message,icon:"none"}):uni.showToast({title:"成功"})})).catch((function(t){console.log(t),uni.showToast({title:"失败："+t.message,icon:"none"})}))},showItem:function(t){for(var n=0;n<this.records.length;n++)if(console.log(this.records[n]),n==this.itemindex){var e=this.records[n];this.form.id=e.id,this.form.goodsnamec=e.goodsnamec,this.form.piece_in=e.piece_in,this.form.gdscbm_in=e.gdscbm_in,this.form.gdswgt_in=e.gdswgt_in}"before"==t&&(this.itemindex>0?this.itemindex--:this.itemindex=this.records.length-1),"next"==t&&(this.itemindex<this.records.length?this.itemindex++:this.itemindex=0)}}};n.default=a},c668:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={uIcon:e("f3c3").default,uInput:e("9307").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticStyle:{background:"#eee",height:"100%"}},[e("v-uni-view",{staticStyle:{background:"#727bba",height:"240rpx"}},[e("v-uni-view",{staticClass:"card"},[e("v-uni-view",{staticStyle:{"font-size":"40rpx","font-weight":"bold"}},[e("v-uni-text",[t._v("入仓单号："),e("v-uni-text",{staticStyle:{color:"#E2564E"}},[t._v(t._s(t.wmsinnos))])],1)],1),e("v-uni-view",{staticStyle:{"font-size":"35rpx"}},[e("v-uni-text",[t._v("客户名称： "+t._s(t.customernamec))])],1)],1)],1),e("v-uni-view",{staticStyle:{margin:"0 20rpx","margin-top":"150rpx"}},[e("v-uni-view",{staticClass:"u-f"},[e("v-uni-view",{staticClass:"u-f u-f-ac u-f-jsb",staticStyle:{border:"1px solid #6DBA52",padding:"10rpx 20rpx",flex:"1","border-radius":"16rpx"}},[e("u-icon",{staticStyle:{"margin-right":"30rpx"},attrs:{name:"scan",color:"#6DBA52",size:"78"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openScan.apply(void 0,arguments)}}}),e("v-uni-input",{staticStyle:{flex:"1",height:"100%"},attrs:{type:"text",placeholder:"请输入或扫描单号"},model:{value:t.form.innos,callback:function(n){t.$set(t.form,"innos",n)},expression:"form.innos"}}),e("v-uni-button",{staticStyle:{width:"20%","background-color":"#6DBA52","border-radius":"96rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.openWms.apply(void 0,arguments)}}},[t._v("搜索")])],1)],1),e("v-uni-view",{staticClass:"card2"},[e("v-uni-view",{staticStyle:{color:"#999","font-size":"34rpx",margin:"30rpx 40rpx"}},[t._v("入库信息")]),t._l(t.records,(function(n){return e("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{"margin-left":"80rpx","padding-right":"30rpx"}},[e("v-uni-text",{staticStyle:{width:"1%",display:"none"}},[t._v(t._s(n.id))]),e("v-uni-text",{staticStyle:{color:"red"}},[t._v(t._s(n.goodsnamec))]),e("v-uni-text",[t._v(t._s(n.piece))]),e("v-uni-text",[t._v(t._s(n.gdscbm)+"CBM")]),e("v-uni-text",[t._v(t._s(n.gdswgt)+"KGS")])],1)}))],2),e("v-uni-view",{staticClass:"card2"},[e("v-uni-view",{staticStyle:{color:"#999","font-size":"34rpx",margin:"30rpx 40rpx"}},[t._v("确认数据"),e("u-icon",{staticStyle:{"margin-left":"30rpx"},attrs:{name:"arrow-left",color:"#6DBA52",size:"78"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showItem("before")}}}),e("u-icon",{staticStyle:{"margin-left":"30rpx"},attrs:{name:"arrow-right",color:"#6DBA52",size:"78"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.showItem("next")}}})],1),e("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{"margin-left":"20rpx","padding-right":"20rpx"}},[e("v-uni-text",{staticStyle:{color:"red",display:"none"}},[t._v(t._s(t.form.id))]),e("v-uni-text",{staticStyle:{color:"red",padding:"20rpx"}},[t._v(t._s(t.form.goodsnamec))]),e("u-input",{staticClass:"rounded border",staticStyle:{padding:"0 20rpx","border-color":"#6DBA52",margin:"5rpx"},attrs:{type:"text",placeholder:"件数"},model:{value:t.form.piece_in,callback:function(n){t.$set(t.form,"piece_in",n)},expression:"form.piece_in"}}),e("u-input",{staticClass:"rounded border",staticStyle:{padding:"0 20rpx","border-color":"#6DBA52",margin:"5rpx"},attrs:{type:"text",placeholder:"毛重"},model:{value:t.form.gdscbm_in,callback:function(n){t.$set(t.form,"gdscbm_in",n)},expression:"form.gdscbm_in"}}),e("u-input",{staticClass:"rounded border",staticStyle:{padding:"0 20rpx","border-color":"#6DBA52",margin:"5rpx"},attrs:{type:"text",placeholder:"体积"},model:{value:t.form.gdswgt_in,callback:function(n){t.$set(t.form,"gdswgt_in",n)},expression:"form.gdswgt_in"}})],1),e("v-uni-view",{staticClass:"u-f u-f-jsb",staticStyle:{"margin-left":"20rpx","padding-right":"20rpx"}},[e("v-uni-button",{staticStyle:{width:"40%","margin-top":"5%","background-color":"#ff5500","border-radius":"96rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submitWmsDtl.apply(void 0,arguments)}}},[t._v("确认件毛体")]),e("v-uni-button",{staticStyle:{width:"40%","margin-top":"5%","background-color":"#6DBA52","border-radius":"96rpx"},attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.submitWms.apply(void 0,arguments)}}},[t._v("确认入库")])],1)],1)],1)],1)},r=[]},c813:function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bottom > uni-view[data-v-4b1856d8]{font-size:%?34?%;flex:1;border-radius:8px 8px 0 0;background:#6dba52}.bottom[data-v-4b1856d8]{width:100%;position:absolute;bottom:0;color:#fff;text-align:center}.card2[data-v-4b1856d8]{background:#fff;height:%?400?%;border-radius:%?30?%}.card[data-v-4b1856d8]{display:flex;flex-direction:column;justify-content:center;align-items:center;height:%?200?%;background:#fff;margin:0 %?20?%;position:relative;border-radius:%?30?%;bottom:%?-100?%;padding:%?20?%}',""]),t.exports=n},c938:function(t,n,e){"use strict";e.r(n);var i=e("c668"),o=e("800e4");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("66ae");var a,s=e("f0c5"),c=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"4b1856d8",null,!1,i["a"],a);n["default"]=c.exports},e5aa:function(t,n,e){var i=e("7999");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("5f199488",i,!0,{sourceMap:!1,shadowMode:!1})},f287:function(t,n,e){"use strict";e.r(n);var i=e("71f2"),o=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=o.a},f856:function(t,n,e){var i=e("c813");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("280ea3eb",i,!0,{sourceMap:!1,shadowMode:!1})}}]);