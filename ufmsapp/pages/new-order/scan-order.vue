<template>
	<view style="background: #eee;height: 100%;">

		<view style="background: #6DBA52;
						height: 240rpx" class="">

			<view class="card">
				<view class="" style=" font-size: 40rpx;font-weight: bold;">
					<text>单号： <text style="color: #E2564E;"> 22233333</text></text>
				</view>
				<view class="" style="font-size: 35rpx;">
					<text>客户名称： 222222222222222223</text>
				</view>
				<!-- 输入框 -->
			</view>
		</view>

		<view class="" style="margin: 0 20rpx;margin-top: 150rpx;">
			<!-- 搜索框 -->
			<view class="u-f">
				<view class="u-f u-f-ac u-f-jsb"
					style="border: 1px solid #6DBA52;padding: 10rpx 20rpx;flex: 1;border-radius: 16rpx;">
					<u-icon @click="openScan" name="scan" style="margin-right: 30rpx;" color="#6DBA52" size="78">
					</u-icon>
					<input type="text" style="flex: 1;height: 100%;" placeholder="请输入或扫描单号" v-model="orderId" />
				</view>
				<u-icon @click="test('1')" style="margin-left: 30rpx;" name="photo" color="#6DBA52" size="78"></u-icon>
				<u-icon @click="test('2')" style="margin-left: 30rpx;" name="arrow-left" color="#6DBA52" size="78">
				</u-icon>
				<u-icon @click="test('3')" style="margin-left: 30rpx;" name="arrow-upward" color="#6DBA52" size="78">
				</u-icon>
			</view>

			<view class="m-30" style="color: red; font-weight: bold;font-size: 32rpx;height: 56rpx;">
				<text>提示信息： 123456789</text>
			</view>

			<view class="card2" style="">

				<view style="color: #999; font-size: 34rpx;margin: 30rpx 40rpx;">最新扫描单号</view>
				<view v-for="(item,index) in records" class="u-f u-f-jsb"
					style="margin-left: 80rpx; padding-right: 30rpx;">
					<text>{{item.id}}</text>
					<text style="color: red;">{{item.status}}</text>
					<text>{{item.time}}</text>
				</view>
			</view>




		</view>

		<view class="u-f u-f-jsb bottom">
			<view>已提货<view>(99)</view>
			</view>
			<view>正常<view>(99)</view>
			</view>
			<view>异常<view style="color: red;">(1)</view>
			</view>
		</view>


	</view>
</template>

<script>
	var receiver
	var main
	var page

	export default {
		data() {
			return {
				stop: false,
				orderId: '33',
				records: [{
					id: '2131221',
					status: '重复',
					time: '17:11'
				}, {
					id: '2131323223232221',
					status: '不存在',
					time: '17:11'
				}, {
					id: '2131221',
					status: '异常',
					time: '17:11'
				}]
			}
		},
		onNavigationBarButtonTap() {
			uni.reLaunch({
				url: '../menu/menu'
			})
			uni.showToast({
				title: "Back12"
			})
		},
		onBackPress() {
			uni.reLaunch({
				url: '../menu/menu'
			})

			return true
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

				console.log(intent.getStringExtra("data"))
				page.orderId = intent.getStringExtra("data");
				// console.log(page);  
				//main.unregisterReceiver(receiver);//取消监听  
			}

		},
		onHide() {
			main.unregisterReceiver(receiver); //取消监听  
		},
		onLoad() {
			this.innerAudioContext = uni.createInnerAudioContext();
		},
		onReady() {

		},
		watch: {
			orderId(val) {
				console.log('from watch ' + val)
				if (val === '6926032345152') {
					this.test('1')
				}

			}
		},
		methods: {

			test(type) {


				this.innerAudioContext.autoplay = true;


				switch (type) {
					case '2':
						this.innerAudioContext.src = '../../static/voice/2.mp3';
						break;
					case '1':
						this.innerAudioContext.src = '../../static/voice/1.mp3';
						break;
					case '3':
						this.innerAudioContext.src = 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3';
						break;
				}



				// 	if(this.stop){
				// 		console.log(this.stop)
				// 		console.log(this.innerAudioContext)
				// 		this.innerAudioContext.pause()

				// 		this.stop = false
				// 	}else {
				// 		console.log(this.stop)
				this.innerAudioContext.play()
				// 	this.stop = true
				// }

			},
			openScan() {
				uni.scanCode({
					success: (res => {
						this.orderId = res.result
						console.log(this.orderId)
					})
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.bottom>view {
		font-size: 34rpx;
		flex: 1;
		border-radius: 8px 8px 0px 0px;
		background: #6DBA52;
	}

	.bottom {
		width: 100%;
		position: absolute;
		bottom: 0;
		color: #fff;
		text-align: center;
	}

	.card2 {
		background: #fff;

		height: 400rpx;
		border-radius: 30rpx;
	}

	.card {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 200rpx;
		background: #fff;
		margin: 0 20rpx;
		position: relative;
		border-radius: 30rpx;
		bottom: -100rpx;
		padding: 20rpx;
	}
</style>
