<template>
	<view style="height: 100%;" class="">
		<view style="height: 100%;" class="mx-3">
			<view class=" pt-2">
				
				
				<view class="flex justify-center align-center">
					<text class="font-md" style="width: 120rpx;">批次号</text>
					<u-input @click="show = true" class="rounded border" 
					  style="border-color: #6DBA52;padding: 0 20rpx;" 
					   type="select" placeholder="请选择批次"  />
				</view>
				
				<u-select @change="change(e)" v-model="show" :list="listIds"></u-select>
				<view class="flex justify-center align-center mt-3">
					<text class=" font-md" style="width: 120rpx;">SKU</text>
					<u-input type="text" class="rounded border"
					 placeholder="扫描SKU条码" v-model="codeNum"
					  style="padding: 0 20rpx;border-color: #6DBA52;" />
				</view>
			</view>
			
			
			<view class="flex justify-between my-3">
				<view class="rounded-20 bg-primary text-white px-2 font-md">已扫Sku</view>
				<view class="rounded-20 bg-primary text-white px-2 font-md">总重： <text class="">{{totalW}}KG</text></view>
			</view>
			
			
			<view class="rounded border p-1 position-relative " style="border-color: #6DBA52;height: 650rpx;">
				
				<view class="" style="height: 550rpx;overflow: auto;">
					<view class="mb-2" v-for="(item,index) in list" :kye="index">
						<view class="text-ellipsis">
							<text class="flex px-1 rounded border font-lg " >
								{{item.name}}
							</text>
						</view>
						<view class="flex justify-end mt-1">
							<text class="px-1  rounded border font-md mr-1">
								{{item.totalWeight}}kg
							</text>
							<u-number-box v-model="item.num"  @change="valChange(item.num,index)"></u-number-box>
						</view>
						<u-gap  height="10" bg-color="#eee" margin-top=10></u-gap>
					</view>
					<view class=" flex justify-center text-gray font-md" style="height: 80rpx;">
						<text>----- 没有更多了 -----</text>
					</view>
					
					
				<!-- 	<view class="flex justify-between my-2" >
						<view class="w-50 flex-1 font-md px-1 text-ellipsis ">
							<text class="px-1 flex rounded border font-lg" >
								sdasdsadassad
							</text>
							
						</view>
						<view class="flex pl-2" style="width: 40%;">
							<text class="px-1 rounded border font-lg mr-1">
								2kg
							</text>
							<u-number-box v-model="value" :input-width="50" @change="valChange"></u-number-box>
						</view>
						
					</view> -->
				</view>
				
				<u-modal title="提示" v-model="showModal" :content="content"></u-modal>
						
				
				
				<!-- 提交 -->
				<view class="rounded border bg-primary font-lg text-white text-center w-50 position-absolute "
				style="height: 80rpx; line-height: 80rpx; border-color: #6DBA52;bottom: 20rpx;left: 50%;transform: translateX(-50%);">提 交</view>
			</view>
			
			
			<!-- 占位 -->
			<view 
				style="height: 110rpx;">
				
			</view>
		</view>
		
	
		<!-- 底部 -->
		<view class="position-fixed bottom-0 left-0 right-0 bg-primary text-white text-center font-lg"
			style="height: 110rpx;line-height: 110rpx;">
			批次打包完成
		</view>
	</view>
</template>

<script>
	let main;
	let page;
	let receiver
	export default {
		data() {
			return {
				codeNum:'',
				content:'3232',
				showModal:false,
				show:false,
				listIds:['3232131121','546546634'],
				value: 1,
				tempList:['za279'],
				list:[
					{name:'耳机',
					weight:12,
					totalWeight:12,
					num:1
					},
					{name:'耳机',
					weight:12,
					totalWeight:12,
					num:1
					},
					{name:'耳机',
					weight:12,
					totalWeight:12,
					num:1
					},
					{name:'耳机3',
					weight:12,
					totalWeight:12,
					num:1
					},
					{name:'耳机5',
					weight:1.3,
					totalWeight:12,
					num:1
					}
				]
			}
		},
		computed: {
			totalW() {
				let w = 0
				this.list.forEach((item,index)=> {
					console.log(index)
					w += parseInt(item.totalWeight)
				})
			
				console.log(w)
				return w
			}
		},
		onShow() {
			
			page = this;
			
			
			
			 main = plus.android.runtimeMainActivity(); //获取activity  
			var context = plus.android.importClass('android.content.Context'); //上下文  
			 receiver = plus.android.implements('io.dcloud.feature.internal.reflect.BroadcastReceiver', {
				onReceive: doReceive
			});
			var IntentFilter = plus.android.importClass('android.content.IntentFilter');
			var Intent = plus.android.importClass('android.content.Intent');
			var filter = new IntentFilter();
			
			
			filter.addAction("com.android.receive_scan_action"); //监听扫描
			
			
			main.registerReceiver(receiver, filter); //注册监听  
			
			function doReceive(context, intent) {
			
			
				//通过intent实例引入intent类，方便以后的‘.’操作  
				plus.android.importClass(intent);
			
				//条码内容
				var barcode = intent.getStringExtra("data");   
				// var barcodeBytes = intent.getByteArrayExtra("barcode");
				// var barcode = byteToString(barcodeBytes);
			
				//条码长度
				// var barcodeLength = intent.getIntExtra("length", 0);
				// var myArray = new ArrayBuffer(0);
				//条码类型
				// var barcodeTypeBytes = intent.getByteExtra("barcodeType", (0 | 0));
				// var barcodeType = byteToString(barcodeTypeBytes);
			
				// uni.showModal({
				// 	content: '条码:' + barcode + '\r\n长度:' + barcodeLength + '\r\n类型:' + barcodeType,
				// 	showCancel: false
				// });
				
				
				// console.log(page.tempList.findIndex(barcode));  
				page.codeNum = barcode
				// console.log(barcode);  
				page.hey(barcode)
				
			}
					
		},
		onHide() {
			main.unregisterReceiver(receiver);//取消监听  
		},
		watch: {
			codeNum(newValue, oldValue) {
				console.log(newValue);
				console.log(oldValue);
				// console.log(this.tempList.findIndex(newValue))
			}
		},
		methods: {
			hey(e){
				console.log(e)
				console.log(this.tempList.findIndex(e))
			},
			change(e){
				console.log(e)
			},
			valChange(e,index) {
				// console.log(this.list[index].num )
				let nw = e * this.list[index].weight
				
				this.list[index].totalWeight = parseInt(nw)
							// console.log(typeof nw)
						}
		}
	}
</script>

<style scoped>
page {
	height: 100%;
}
</style>
