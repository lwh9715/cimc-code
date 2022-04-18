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
						<input style="margin-top: 16rpx;" :value="formData.pol" type="text" placeholder="请输入起运港"
							@click="openStartPage(0)" />
					</uni-forms-item>
					<uni-forms-item name="pod" label="目的港">
						<input style="margin-top: 16rpx;" :value="formData.pod" type="text" placeholder="请输入起运港"
							@click="openStartPage(1)" />
					</uni-forms-item>
					<view @click="openCarrierList">
						<uni-forms-item name="carrier" label="船公司">
							<view style="margin-top: 18rpx; margin-left: 10rpx;">
								{{ formData.carrier }}
							</view>
						</uni-forms-item>
					</view>
					<uni-forms-item name="freight" label="运价类型">
						<view style="margin-top: 14rpx;">
							<uni-data-checkbox style="font-size: xx-small;" multiple v-model="formData.freightType"
								:localdata="freightlist" />
						</view>
					</uni-forms-item>
				</uni-forms>
				<button type="primary" @click="submitForm" style="margin-top: 20rpx;margin-bottom: 50rpx;">立即查询</button>
			</view>
		</view>

		<uni-popup ref="carrierPopup" type="bottom" mask-background-color="rgba(0,0,0,-0.6)" backgroundColor="#FFFFFF">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="popup-view" v-for="(item,index) in carrierlist" @click="bindCarrierChange(item.name)">
					<view class="sentence-text">{{ item.name }}</view>
				</view>
			</scroll-view>
		</uni-popup>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				keyword: "",
				carrierlist: [],
				freightlist: [{
					"value": 0,
					"text": "FAK"
				}, {
					"value": 1,
					"text": "NAC"
				}, {
					"value": 2,
					"text": "SPOT"
				}],
				formData: {
					pol: '',
					pod: '',
					carrier: '',
					date: Date.now(),
					freightType: [0, 1, 2]
				}
			}
		},
		methods: {
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
					url: '/pages/price/searchBase?id=' + val,
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
				if (this.formData.pol != '' && this.formData.pod != '') {
					uni.navigateTo({
						url: '/pages/price/queryfcl?detail=' + encodeURIComponent(JSON.stringify(this.formData)),
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

	}
</script>

<style>
	.card-conent {
		height: calc(100vh);
		background-image: url(../../static/img/bg.png);
		background-color: rgb(119 184 240);
		background-repeat: no-repeat;/* 图片按比例显示，其余部分为其他颜色 */
		background-size: contain;/*图片等比例缩放*/
		overflow-y: auto;
	}

	.view-content {
		margin: 88px 14px;
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

	.scroll-Y {
		text-align: center;
		height: calc(100vh - 55vh);
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
		position: absolute !important;
		height: auto !important;
		background-color: #FFFFFF !important;
	}
</style>
