<template>
	<view style="background: #eee;height: 100%;">

		<view style="background: #727bba;
						height: 240rpx" class="">

			<view class="card">
				<view class="" style=" font-size: 40rpx;font-weight: bold;">
					<text>入仓单号： <text style="color: #E2564E;"> {{wmsinnos}}</text></text>
				</view>
				<view class="" style="font-size: 35rpx;">
					<text>客户名称： {{customernamec}}</text>
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
					<input type="text" style="flex: 1;height: 100%;" placeholder="请输入或扫描单号" v-model="form.innos" />
					<button @click="openWms" style="width: 20%; background-color: #6DBA52; border-radius: 96rpx;"
						type="primary">搜索</button>
				</view>
			</view>

			<!-- <view class="m-30" style="color: red; font-weight: bold;font-size: 32rpx;height: 56rpx;">
				<text>提示信息：</text>
			</view>
 -->
			<view class="card2" style="">

				<view style="color: #999; font-size: 34rpx;margin: 30rpx 40rpx;">入库信息</view>
				<view v-for="(item,index) in records" class="u-f u-f-jsb"
					style="margin-left: 80rpx; padding-right: 30rpx;">
					<text style="width: 1%;display: none;">{{item.id}}</text>
					<text style="color: red;">{{item.goodsnamec}}</text>
					<text>{{item.piece}}</text>

					<text>{{item.gdscbm}}CBM</text>
					<text>{{item.gdswgt}}KGS</text>
				</view>
			</view>


			<view class="card2" style="">
				<view style="color: #999; font-size: 34rpx;margin: 30rpx 40rpx;">确认数据

					<u-icon @click="showItem('before')" style="margin-left: 30rpx;" name="arrow-left" color="#6DBA52"
						size="78"></u-icon>
					<u-icon @click="showItem('next')" style="margin-left: 30rpx;" name="arrow-right" color="#6DBA52"
						size="78"></u-icon>
				</view>

				<view class="u-f u-f-jsb" style="margin-left: 20rpx; padding-right: 20rpx;">
					<text style="color: red;display: none;">{{form.id}}</text>
					<text style="color: red;padding: 20rpx;">{{form.goodsnamec}}</text>
					<u-input type="text" class="rounded border" placeholder="件数" v-model="form.piece_in"
						style="padding: 0 20rpx;border-color: #6DBA52;margin: 5rpx;" />
					<u-input type="text" class="rounded border" placeholder="毛重" v-model="form.gdscbm_in"
						style="padding: 0 20rpx;border-color: #6DBA52;margin: 5rpx;" />
					<u-input type="text" class="rounded border" placeholder="体积" v-model="form.gdswgt_in"
						style="padding: 0 20rpx;border-color: #6DBA52;margin: 5rpx;" />
				</view>

				<view class="u-f u-f-jsb" style="margin-left: 20rpx; padding-right: 20rpx;">
					<button @click="submitWmsDtl"
						style="width: 40%;margin-top: 5%; background-color: #ff5500; border-radius: 96rpx;"
						type="primary">确认件毛体</button>
					<button @click="submitWms"
						style="width: 40%;margin-top: 5%; background-color: #6DBA52; border-radius: 96rpx;"
						type="primary">确认入库</button>
				</view>
			</view>
		</view>

		<!-- <view style="">
			 <web-view :webview-styles="webviewStyles" style="height: 50%;margin-top: 800rpx;" src="http://192.168.0.188:8989/so/app/wmsinfo.html"></web-view>
		</view> -->

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
				orderId: '',
				records: [{
					id: '',
					status: '',
					time: ''
				}],
				form: {
					id: 0,
					goodsnamec: '',
					innos: '',
					piece_in: 0,
					gdscbm_in: 0,
					gdswgt_in: 0
				},
				itemindex: 0,
				wmsinnos: '',
				customernamec: ''
			}
		},
		onNavigationBarButtonTap() {
			uni.reLaunch({
				url: '../index/index'
			})
		},
		onBackPress() {
			uni.reLaunch({
				url: '../index/index'
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
						this.form.innos = res.result
						console.log(this.orderId)
						this.clearData()
						this.openWms()
					})
				})

			},
			clearData() {
				this.records = [{}];
				this.itemindex = 0;
				this.wmsinnos = '';
				this.customernamec = '';
				this.showItem('next');
			},
			openWms() {
				if (!this.form.innos) {
					uni.showToast({
						title: "请输入或扫描单号",
						icon: 'none'
					})
					return
				}

				this.$H.post('/wmsinfo?method=getWmsinfo', this.form, {
					token: false
				}).then(res => {
					console.log(res)
					if (res.data) {
						this.records = res.data;
						this.itemindex = 0;
						this.wmsinnos = res.data[0].wmsinnos;
						this.customernamec = res.data[0].customernamec;
						this.showItem('next');
					}

				}).catch(res => {
					console.log(res)
					uni.showToast({
						title: '失败2：' + res.message,
						icon: 'none'
					});
				})
			},
			submitWms() {
				console.log('form:' + this.form);
				this.$H.post('/wmsinfo?method=submitWmsin', this.form, {
					token: false
				}).then(res => {
					console.log(res)
					if (res.data) {

					}
					if (res.success === true) {
						uni.showToast({
							title: '成功'
						});
						this.clearData()
						return
					}
					uni.showToast({
						title: '失败：' + res.message,
						icon: 'none'
					});
				}).catch(res => {
					console.log(res)
					uni.showToast({
						title: '失败：' + res.message,
						icon: 'none'
					});
				})
			},
			submitWmsDtl() {
				console.log('form:' + this.form);
				this.$H.post('/wmsinfo?method=updateWmsin', this.form, {
					token: false
				}).then(res => {
					console.log(res)
					if (res.data) {

					}
					if (res.success === true) {
						uni.showToast({
							title: '成功'
						});
						return
					}
					uni.showToast({
						title: '失败：' + res.message,
						icon: 'none'
					});
				}).catch(res => {
					console.log(res)
					uni.showToast({
						title: '失败：' + res.message,
						icon: 'none'
					});
				})
			},
			showItem(type) {
				for (let i = 0; i < this.records.length; i++) {
					console.log(this.records[i]);
					if (i == (this.itemindex)) {
						let item = this.records[i];
						/* uni.showToast({
							title: '登录失败2：'+item.goodsnamec,
							icon: 'none'
						}); */
						this.form.id = item.id;
						this.form.goodsnamec = item.goodsnamec;
						this.form.piece_in = item.piece_in;
						this.form.gdscbm_in = item.gdscbm_in;
						this.form.gdswgt_in = item.gdswgt_in;
					}
				}
				if (type == 'before') {
					if (this.itemindex > 0) {
						this.itemindex--;
					} else {
						this.itemindex = this.records.length - 1;
					}
				}
				if (type == 'next') {
					if (this.itemindex < this.records.length) {
						this.itemindex++;
					} else {
						this.itemindex = 0;
					}
				}
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
