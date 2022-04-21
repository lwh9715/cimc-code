<template>
	<view class="card-conent">
		<view class="view-content">
			<view style="margin-bottom: 20rpx;padding: 1px;" />
			<view style="text-align: center;margin-bottom: 20rpx;">
				<text class="title-text">FCL报价查询</text>
			</view>
			<view style="border-bottom: 1px solid #e5e5e5;margin-bottom: 40rpx;" />
			<view style="padding: 0px 20px;">
				<uni-forms :value="formData">
					<uni-forms-item name="pol" label="起运港">
						<input v-model="formData.pol" type="text" placeholder="请输入起运港" @click="openStartPage(0)" />
					</uni-forms-item>
					<uni-forms-item name="pod" label="目的港">
						<input v-model="formData.pod" type="text" placeholder="请输入目的港" @click="openStartPage(1)" />
					</uni-forms-item>
					<uni-forms-item name="carrier" label="船公司">
						<input adjust-position="false" autocomplete="off" @focus="focus" auto-blur="false"
							v-model="formData.carrier" type="text" placeholder="请选择船公司" @click="openCarrierList()" />
					</uni-forms-item>
					<uni-forms-item name="freight" label="运价类型">
						<view>
							<uni-data-checkbox multiple v-model="formData.freightType" :localdata="freightlist" />
						</view>
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submitForm" style="margin-top: 20rpx;margin-bottom: 50rpx;">立即查询</button>
			</view>
		</view>


		<uni-popup ref="carrierPopup" type="bottom" mask-background-color="rgba(0,0,0,-0.6)">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="popup-view" v-for="(item,index) in carrierlist" @click="bindCarrierChange(item.name)">
					<view class="sentence-text">{{ item.name }}</view>
				</view>
			</scroll-view>
		</uni-popup>


	</view>
</template>


<script>
	import dd from 'dingtalk-jsapi';

	export default {
		data() {
			return {
				code: "",
				acode: "",
				keyword: "",
				carrierlist: [],
				form: {
					method: "login",
					type: "app",
					username: "ZSNB",
					action: "login",
					userpwd: "Ufms@smfU@Hxkj@jkxH@123.",
					source: "android",
					appVersion: "v1.1.0",
					sim: "1380013800",
					issysuser: true,
					timeStamp: 1650533661969
				},
				isHideKeyboard: true,
				freightlist: [{
					"value": 'FAK',
					"text": "FAK"
				}, {
					"value": 'NAC',
					"text": "NAC"
				}, {
					"value": 'SPOT',
					"text": "SPOT"
				}],
				formData: {
					pol: '',
					pod: '',
					carrier: '',
					date: Date.now(),
					freightType: ['FAK', 'NAC', 'SPOT']
				}
			}
		},
		methods: {
			/**
			 * 禁止软键盘弹出
			 */
			focus() {
				if (this.isHideKeyboard) uni.hideKeyboard()
			},
			bindDateChange: function(e) {
				this.formData.date = e
			},
			openCarrierList: async function(e) {
				this.$refs.carrierPopup.open('bottom')
				this.$H.post('/combobox?method=fscarrier', this.form, {
					token: false
				}).then(res => {
					this.carrierlist = res
				}).catch(res => {
					console.log(res)
					uni.showToast({
						title: '失败：' + res.message,
						icon: 'none'
					});
				})
			},

			bindCarrierChange: function(e) {
				this.formData.carrier = e
				this.$refs.carrierPopup.close()
			},
			openStartPage: function(val) {
				uni.navigateTo({
					url: '/pages/price/search?id=' + val,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			/**
			 * 起运港和目的港信息反转
			 */
			loopSubmit: async function() {
				let temp = this.formData.pol
				this.formData.pol = this.formData.pod
				this.formData.pod = temp
			},
			/**
			 * 查询运价
			 */
			submitForm() {
				// alert(uni.getStorageSync('code'))
				// uni.request({
				// 	url: 'http://120.77.239.151/login',
				// 	data: {
				// 		"authCode": uni.getStorageSync('code')
				// 	},
				// 	method: 'GET',
				// 	success: res => {
				// 		this.code = res.data.data.name + res.data.data.mobile.substring(7, 11)
				// 		uni.setStorageSync('user_info', this.code)
				// 	},
				// 	fail: res => {
				// 		uni.showToast({
				// 			title: '失败：' + res.message,
				// 			icon: 'none'
				// 		});
				// 	}
				// })
				if (this.formData.pol != '' && this.formData.pod != '') {
					uni.navigateTo({
						url: '/pages/price/list?detail=' + encodeURIComponent(JSON.stringify(this.formData)),
						fail: (res) => {
							console.log(res) //打印错误信息
						}
					});
				} else {
					uni.showToast({
						title: '请输入港口信息查询',
						icon: 'none'
					});
				}


			},
		},
		onShow() {
			let pages = getCurrentPages();
			let currPage = pages[pages.length - 1]; // 当前页的实例
			if (currPage.$vm.index) {
				if (currPage.$vm.index.id == 0) {
					this.formData.pol = currPage.$vm.value
				} else {
					this.formData.pod = currPage.$vm.value
				}
			}
		},
		created() {
			this.$U.setStorage('url', 'http://120.77.239.151/so');

			this.form.timeStamp = new Date().getTime()
			this.$H.post('/login?method=login&type=app', this.form, {
				token: false
			}).then(res => {
				uni.setStorage({
					key: 'user_login',
					data: res,
					success() {
						console.log('存储成功')
					}
				})
			}).catch(res => {
				console.log(res)
				uni.showToast({
					title: '登录失败：' + res.message,
					icon: 'none'
				});
			})


			// TODO 2022/04/21
			// let temp = {}
			// dd.ready(function() {
			// 	dd.runtime.permission.requestAuthCode({
			// 		corpId: "ding2bb9458351f19b9b35c2f4657eb6378f",
			// 		onSuccess: function(result) {
			// 			temp = result
			// 		},
			// 		onFail: function(err) {}
			// 	});
			// });
			// this.acode = temp.code;
			this.acode = 'cd3b5a13312b3a54ae13e567b8637df6';
			uni.setStorageSync('code', this.acode)
			// alert(uni.getStorageSync('code'))
		}

	}
</script>

<style scoped>
	.card-conent {
		height: calc(100vh);
		background-image: url(../../static/img/bg.png);
		background-color: rgb(89 142 194);
		background-repeat: no-repeat;
		/* 图片按比例显示，其余部分为其他颜色 */
		background-size: contain;
		/*图片等比例缩放*/
		overflow-y: auto;
	}

	.view-content {
		margin: 110px 14px;
		background-color: #FFFFFF;
		box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 1px;
		border-radius: 15px;
		height: calc(100vh - 33vh);
	}

	.title-text {
		font-size: x-large;
		font-weight: 800;
		flex: 1;
		color: #333;
	}

	.uni-input-placeholder {
		font-size: small !important;
	}

	>>>.uni-forms-item__inner {
		align-items: baseline;
	}

	>>>.uni-forms-item__inner {
		padding-bottom: 12px;
	}

	.scroll-Y {
		text-align: center;
		height: calc(100vh - 51vh);
		width: 100%;
	}

	.popup-view {
		text-align: center;
		margin: 30rpx;
	}

	>>>.checklist-group {
		flex-wrap: inherit !important;
	}

	.checklist-box .uni-label-pointer {
		margin-right: 10rpx !important;
	}

	>>>.uni-scroll-view-content {
		overflow-y: auto;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
		background-color: #FFFFFF;
	}
</style>
