<template>
	<view class="card-conent">
		<uni-card style="text-align: center;" v-watermark="watermarkConfig">
			<view class="flex justify-between">
				<view class="" style="width: 40%; text-align: right;">
					<uni-icons type="location-filled"></uni-icons>
					<text style="font-size:18px;font-weight: 700;">{{formData.pol}}</text>
				</view>
				<view class="" style="width: 20%;text-align: center;">
					<u-icon name="../../static/icon/right_arrow.png" :size="55" />
				</view>
				<view class="" style="width: 40%;text-align: left;">
					<uni-icons type="location-filled"></uni-icons>
					<text style="font-size:18px;font-weight: 700;">{{formData.pod}}</text>
				</view>
			</view>
			<view style="margin-bottom: 20rpx;" />
			<view style="border-bottom: 1px solid #e5e5e5;" />
			<view style="padding: 10px 10px;">
				<uni-forms :modelValue="formData">
					<uni-forms-item name="cnorname" label="发货人" labelWidth="80">
						<input type="text" placeholder="请输入发货人" size="mini" />
					</uni-forms-item>
					<uni-forms-item name="payplace" label="付款地点" labelWidth="80">
						<input type="text" placeholder="请输入付款地点" />
					</uni-forms-item>
					<uni-forms-item name="carryitem" label="运费条款" labelWidth="80">
						<input type="text" placeholder="请输入运费条款" />
					</uni-forms-item>
					<uni-forms-item name="marksno" label="唛头" labelWidth="80">
						<input type="text" placeholder="请输入唛头" />
					</uni-forms-item>
					<uni-forms-item name="goodsdesc" label="品名" labelWidth="80">
						<input type="text" placeholder="请输入品名" />
					</uni-forms-item>
					<uni-forms-item name="blcontacts" label="联系人" labelWidth="80">
						<input type="text" placeholder="请输入委托订舱联系人" />
					</uni-forms-item>
					<uni-forms-item name="phone" label="电话" labelWidth="80">
						<input type="text" placeholder="请输入委托订舱电话" />
					</uni-forms-item>
					<uni-forms-item name="email" label="E-MAIL" labelWidth="80">
						<input type="text" placeholder="请输入委托订舱E-MAIL" />
					</uni-forms-item>
					<view style="border-bottom: 1px solid #e5e5e5;margin-bottom: 30rpx;" />
					<view class="flex justify-between">
						<view class="">
							<text class="text-algin">20GP</text>
							<text class="text-algin">单价：{{ formData.bargecurrency }} {{ formData.cost20 }}</text>
						</view>
						<text>
							<uni-number-box v-model="amt20" @change="changeAmt20" />
						</text>
					</view>
					<view style="margin-bottom: 30rpx;" />
					<view class="flex justify-between">
						<view class="">
							<text class="text-algin">40GP</text>
							<text class="text-algin">单价：{{ formData.bargecurrency }} {{ formData.cost40gp }}</text>
						</view>
						<text>
							<uni-number-box v-model="amt40gp" @change="changeAmt40gp" />
						</text>
					</view>
					<view style="margin-bottom: 30rpx;" />
					<view class="flex justify-between">
						<view class="">
							<text class="text-algin">40HQ</text>
							<text class="text-algin">单价：{{ formData.bargecurrency }} {{ formData.cost40hq }}</text>
						</view>
						<text>
							<uni-number-box v-model="amt40hq" @change="changeAmt40hq" />
						</text>
					</view>
				</uni-forms>
			</view>
		</uni-card>
		<view class="goods-carts">
			<view class="footer" style="padding:20rpx 40rpx;align-items: center;">
				<text>
					CNY:{{cnytotal}} + USD:{{usdtotal}}
				</text>
				<text>
					<button style="display: flex;" type="primary" size="mini" @click="submitForm">订舱</button>
				</text>
			</view>
		</view>
	</view>
</template>


<script>
	import watermarkConfig from '../../common/free-lib/directives.js'

	export default {
		data() {
			return {
				userInfo: {},
				watermarkConfig: {
					text: '中集世倡0001',
					font: '12px 微软雅黑',
					textColor: '#dcdfe6',
					width: 200, //水印文字的水平间距
					height: 120, //水印文字的高度间距（低于文字高度会被替代）
					extRotate: -30 //-90到0， 负数值，不包含-90
				},
				keyword: "",
				cnytotal: 0,
				usdtotal: 0,
				amt20: 0,
				amt40gp: 0,
				amt40hq: 0,
				amt20security: 0,
				amt40gpsecurity: 0,
				amt40hqsecurity: 0,
				feepirce: 0,
				amt20fees: 0,
				amt40gpfees: 0,
				amt40hqfees: 0,
				feelist: [],
				carryitem: [
					'CFS-CFS',
					'CFS-CY',
					'CFS-DOOR',
					'CY-CFS',
					'CY-CY',
					'CY-DOOR',
					'CY-FO',
					'DOOR-CY',
					'DOOR-DOOR',
					'FCL-FCL'
				],
				freightitem: [
					'FREIGHT PREPAID',
					'FREIGHT COLLECT',
					'FREIGHT PAYABLE AT DESTINATION',
					'FREIGHT PAYABLE AT HONGKONG'
				],
				formData: {}
			}
		},
		created() {
			if (uni.getStorageSync("user_info")) {
				var temp = "";
				temp = uni.getStorageSync("user_info")
				this.watermarkConfig.text = temp.data.data.name + temp.data.data.mobile.substring(7, 11)
			}

			if (this.formData.uuid) {
				this.$H.post('/price?method=getfeeadd&id=' + this.formData.uuid, this.form, {
					token: false
				}).then(res => {
					this.feelist = res;
					this.initFeePrice()
				}).catch(res => {
					console.log(res)
					uni.showToast({
						title: 'search失败：' + res.message,
						icon: 'none'
					});
				})
			}
		},
		watch: {
			feepirce(newValue, oldValue) {
				this.computeFeeitems()
			}
		},
		methods: {
			submitForm() {
				uni.showToast({
					title: '暂不支持订舱',
					icon: 'none'
				});
			},
			changeAmt20(value) {
				this.amt20 = value
				var temp = 0;
				var security = 0;
				for (var i = 0; i < this.feelist.length; i++) {
					if (this.feelist[i].unit != '票') {
						if (this.feelist[i].feeitemname == '码头操作费') {
							temp += this.feelist[i].amt20 * value;
						}
						if (this.feelist[i].feeitemname != '码头操作费') {
							if (this.feelist[i].feeitemname == '港口安全费') {
								security += this.feelist[i].amt * value;
							} else {
								temp += this.feelist[i].amt * value;
							}
						}
					}
					this.amt20fees = temp
				}
				this.amt20security = security
				this.computeFeeitems()
			},
			changeAmt40gp(value) {
				this.amt40gp = value
				var temp = 0;
				var security = 0;
				for (var i = 0; i < this.feelist.length; i++) {
					if (this.feelist[i].unit != '票') {
						if (this.feelist[i].feeitemname == '码头操作费') {
							temp += this.feelist[i].amt40gp * value;
						}
						if (this.feelist[i].feeitemname != '码头操作费') {
							if (this.feelist[i].feeitemname == '港口安全费') {
								security += this.feelist[i].amt * value;
							} else {
								temp += this.feelist[i].amt * value;
							}
						}
					}
					this.amt40gpfees = temp
				}
				this.amt40gpsecurity = security
				this.computeFeeitems()
			},
			changeAmt40hq(value) {
				this.amt40hq = value
				var temp = 0;
				var security = 0;
				for (var i = 0; i < this.feelist.length; i++) {
					if (this.feelist[i].unit != '票') {
						if (this.feelist[i].feeitemname == '码头操作费') {
							temp += this.feelist[i].amt40hq * value;
						}
						if (this.feelist[i].feeitemname != '码头操作费') {
							if (this.feelist[i].feeitemname == '港口安全费') {
								security += this.feelist[i].amt * value;
							} else {
								temp += this.feelist[i].amt * value;
							}
						}
					}
					this.amt40hqfees = temp
				}
				this.amt40hqsecurity = security
				this.computeFeeitems()
			},
			computeFeeitems() {
				var gp20 = this.formData.cost20;
				var gp40 = this.formData.cost40gp;
				var hq40 = this.formData.cost40hq;
				var gp20value = this.amt20;
				var gp40value = this.amt40gp;
				var hq40value = this.amt40hq;


				// 计算折合价格
				this.usdtotal = this.amt20security + this.amt40gpsecurity + this.amt40hqsecurity +
					(gp20 * gp20value) + (gp40 * gp40value) + (hq40 * hq40value);
				this.cnytotal = this.amt20fees + this.amt40gpfees + this.amt40hqfees + this.feepirce;


				console.log("USD", this.usdtotal)
				console.log("CNY", this.cnytotal)
			},
			initFeePrice() {
				let temp = 0;
				let amount = 0;
				for (var i = 0; i < this.feelist.length; i++) {
					if (this.feelist[i].unit == '票') {
						temp += this.feelist[i].amt;
					}
				}
				console.log(temp)
				this.feepirce = temp
			},

			startType: function(val) {
				if (val == 'CLS') {
					return '大船截关'
				} else if (val == 'BETD') {
					return '大船截关'
				} else if (val == 'ETD') {
					return '大船'
				} else if (val == 'TDETD') {
					return '驳船'
				} else if (val == 'ONBOARD') {
					return '驳船'
				} else if (val == 'SOETD') {
					return 'SO ETD'
				} else if (val == 'GATE') {
					return 'GATE IN'
				} else {
					return ''
				}
			},
			timeFormat: function(val) {
				let time = val.split('-')
				return time[0] + '/' + time[1] + '/' + time[2];
			},
		},
		onLoad: function(option) {
			this.formData = JSON.parse(decodeURIComponent(option.detail));
			console.log('book', this.formData)
		}
	}
</script>

<style scoped>
	.card-conent {
		height: calc(100vh);
		background-image: url(../../static/img/bluebg.png);
		background-repeat: no-repeat;
		background-size: contain;
		overflow-y: auto;
	}

	>>>.uni-forms-item__inner {
		align-items: baseline;
		padding-bottom: 10rpx;
	}

	>>>.uni-card {
		overflow-y: auto;
		height: calc(100vh);
		margin-top: 35px;
		padding: 5px 0px;
		border-radius: 15px;
		box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 1px;
	}

	.uni-collapse-cell--open {
		background-color: #ffffff !important;
	}


	.text {
		font-size: 12px;
		text-align: center;
		font-weight: 500;
		color: #FFFFFF;
		background-color: #80b4ed;
	}

	.text-algin {
		display: flex;
		align-items: center;
		font-size: xx-small;
	}

	.text-content {
		font-size: 12px;
		margin-top: 18rpx;
		text-align: center;
		font-weight: 800;
		color: #ce3c3c;
	}

	>>>.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20px 0;
	}

	>>>.uni-collapse-cell__title {
		/* padding: 0px 0px !important; */
	}

	>>>.uni-table-th-content {
		font-size: 12px !important;
	}

	>>>.uni-grid-item--border-top {
		height: 65px !important;
	}

	>>>.uni-table-th {
		padding: 3px 0px !important;
		font-size: 12px !important;
	}

	>>>.uni-table-td {
		padding: 3px 0px !important;
		font-size: 12px !important;
		line-height: 12px !important;
	}

	>>>.uni-fab__circle--leftBottom {
		left: 0px;
		bottom: 0px;
		width: 100%;
	}

	>>>.uni-fab__circle {
		border-radius: 0px;
	}

	.footer {
		display: flex !important;
		flex-direction: row;
		justify-content: space-between;
		box-shadow: rgb(0 0 0 / 10%) 0px 0px 1px 1px;
		background-color: #ffffff;
	}

	.goods-carts {
		flex: 1;
		z-index: 900;
		background-color: #c8c7cc;
	}
</style>
