(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-pick-detail-pick-detail"],{"0fd8":function(t,e,i){"use strict";i.r(e);var n=i("fe98"),s=i("2c4f");for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);var l,c=i("f0c5"),o=Object(c["a"])(s["default"],n["b"],n["c"],!1,null,"54487752",null,!1,n["a"],l);e["default"]=o.exports},"2c4f":function(t,e,i){"use strict";i.r(e);var n=i("f9a9"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=s.a},f9a9:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{orderId:"",probType:"",show:!1,content:"\n\t\t\t\t\t\t\t\t空山新雨后<br>\n\t\t\t\t\t\t\t\t天气晚来秋\n\t\t\t\t\t\t\t",orederList:[{orderId:"2313",result:"正常",scanTime:"2020-02-05 17:19:09"},{orderId:"3453453",result:"不存在",scanTime:"2020-02-26 17:19:09"},{orderId:"1231",result:"重复",scanTime:"2020-02-16 17:19:09"}],list:[{orderId:"765765",code:"test",pickStatus:"完成",pickNum:"12",errNum:"2",alreadyCreateReport:"是",createdTime:"2020-02-06 17:19:09",isFinished:!1},{orderId:"765765",code:"test",pickStatus:"完成",pickNum:"12",errNum:"2",alreadyCreateReport:"是",createdTime:"2020-02-06 17:19:09",isFinished:!1}],showWH:!1,newPick:{client:"",address:"",time:"",warehouse:""},listshowWH:[{text:"广州仓库",color:"blue",fontSize:28},{text:"广州仓库2"},{text:"广州仓库3"}],itemList:["A","B","C"]}},methods:{showSheet:function(){var e=this;uni.showActionSheet({itemList:["A","B","C"],success:function(i){e.probType=e.itemList[i.tapIndex],t("log","选中了第"+(i.tapIndex+1)+"个按钮"," at pages/pick-detail/pick-detail.vue:225")},fail:function(e){t("log",e.errMsg," at pages/pick-detail/pick-detail.vue:228")}})},open:function(){this.show=!0},deleteOrder:function(t){},finish:function(t,e){this.list[t].isFinished=!!e},actionSheetCallbackshowWH:function(t){this.newPick.warehouse=this.listshowWH[t].text}}};e.default=i}).call(this,i("0de9")["log"])},fe98:function(t,e,i){"use strict";i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uIcon:i("c9cd").default,uActionSheet:i("a483").default,uInput:i("c81a").default},s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"flex flex-column ",staticStyle:{height:"100%"}},[i("v-uni-view",{staticClass:"bg-primary ",staticStyle:{height:"150rpx",width:"100%"}},[i("v-uni-view",{staticClass:"flex align-end justify-center align-center pl-3 "},[i("v-uni-view",{staticClass:"u-f align-center",staticStyle:{width:"50%",height:"100%"}},[i("v-uni-view",{staticClass:"u-f box-sizing p-1 justify-center align-center",staticStyle:{"background-color":"#fff","border-radius":"16rpx"}},[i("u-icon",{staticStyle:{"margin-right":"30rpx"},attrs:{name:"scan",color:"#6DBA52",size:"58"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openScan.apply(void 0,arguments)}}}),i("v-uni-input",{staticStyle:{flex:"1"},attrs:{type:"select",placeholder:"请输入或扫描单号","placeholder-style":"font-size:20rpx"},model:{value:t.orderId,callback:function(e){t.orderId=e},expression:"orderId"}})],1)],1),i("v-uni-view",{staticClass:"u-f  ",staticStyle:{width:"50%"}},[i("v-uni-view",{staticClass:"u-f  pl-1 justify-center align-center"},[i("u-action-sheet",{attrs:{list:t.listshowWH},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.actionSheetCallbackshowWH.apply(void 0,arguments)}},model:{value:t.showWH,callback:function(e){t.showWH=e},expression:"showWH"}}),i("u-input",{staticClass:"rounded-half ",staticStyle:{height:"100%","background-color":"#fff","text-align":"center"},attrs:{"input-align":"center",placeholderStyle:"color:#999;text-align: center;",placeholder:"检索状态",type:"select"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showWH=!0}},model:{value:t.newPick.warehouse,callback:function(e){t.$set(t.newPick,"warehouse",e)},expression:"newPick.warehouse"}}),i("u-icon",{staticStyle:{"margin-right":"30rpx",overflow:"auto"},attrs:{name:"../../static/img/querybtn.png",color:"#6DBA52",size:"68"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openScan.apply(void 0,arguments)}}})],1)],1)],1)],1),i("v-uni-view",{staticClass:"flex-1 ",staticStyle:{"background-color":"#eee"}},[i("v-uni-view",{staticClass:" bg-white m-2 px-3 rounded-half py-3"},[[i("v-uni-view",{staticClass:" flex justify-center font-lg font-weight-bold "},[t._v("YB26456456")]),i("v-uni-view",{staticClass:"fontSizeMy pr-1 rounded-lg"},[i("v-uni-view",{staticClass:"flex justify-between"},[i("v-uni-view",{},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("客户代码：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v("test")])],1),i("v-uni-view",{staticStyle:{width:"200rpx"}},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("重 量：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold",width:"100rpx"}},[t._v("21kg")])],1)],1),i("v-uni-view",{staticClass:"flex justify-between"},[i("v-uni-view",{},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("创建时间：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v("2020-02-06 17:19:09")])],1),i("v-uni-view",{staticStyle:{width:"200rpx"}},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("体 积：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold",width:"100rpx"}},[t._v("2*12")])],1)],1),i("v-uni-view",{staticClass:"flex justify-between"},[i("v-uni-view",{},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("总票数：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v("3")])],1),i("v-uni-view",{staticStyle:{width:"200rpx"}},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("异常票数：")]),i("v-uni-text",{staticClass:"text-red",staticStyle:{"font-weight":"bold",width:"100rpx"}},[t._v("2")])],1)],1)],1)]],2),i("v-uni-view",{staticClass:" bg-white m-2 px-3 rounded-half py-3"},[t._l(t.orederList,(function(e,n){return[i("v-uni-view",{key:n+"_0",staticClass:"fontSizeMy pr-1"},[i("v-uni-view",{staticClass:"flex justify-between"},[i("v-uni-view",{},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("单号：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.orderId))])],1),i("v-uni-view",{staticClass:"rounded-half bg-primary text-white px-3",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteOrder(n)}}},[i("v-uni-text",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[t._v("删 除")])],1)],1),i("v-uni-view",{staticClass:"flex justify-between"},[i("v-uni-view",{},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("扫描结果:")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.result))])],1),i("v-uni-view",{staticClass:"text-ellipsis "},[i("v-uni-text",{staticStyle:{color:"#999"}},[t._v("扫描时间：")]),i("v-uni-text",{staticStyle:{"font-weight":"bold"}},[t._v(t._s(e.scanTime))])],1)],1)],1),i("v-uni-view",{key:n+"_1",staticClass:"m-3",staticStyle:{height:"2rpx","background-color":"#eee"}})]}))],2)],1),t.show?i("v-uni-view",{staticClass:"position-fixed   w-100 bg-modal-black-5 flex justify-center align-center",staticStyle:{"z-index":"10",height:"100%"},on:{click:function(e){if(e.target!==e.currentTarget)return null;arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[i("v-uni-view",{staticClass:"bg-white    border rounded-20 p-3",staticStyle:{width:"70%","border-color":"#5AB43D"}},[i("u-input",{attrs:{type:"select",placeholder:"请选择问题类型"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showSheet.apply(void 0,arguments)}},model:{value:t.probType,callback:function(e){t.probType=e},expression:"probType"}}),i("v-uni-textarea",{staticStyle:{height:"160rpx"},attrs:{value:"",placeholder:"请输入原因"}}),i("v-uni-view",{staticClass:"flex w-100   bottom-0 justify-between"},[i("v-uni-view",{},[i("v-uni-view",{staticClass:"rounded-half border px-2",staticStyle:{"border-color":"#5AB43D"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show=!1}}},[t._v("确认删除")])],1),i("v-uni-view",{staticClass:"text-ellipsis"},[i("v-uni-view",{staticClass:"rounded-half border px-2",staticStyle:{"border-color":"#5AB43D"}},[t._v("放弃删除")])],1)],1)],1)],1):t._e()],1)},a=[]}}]);