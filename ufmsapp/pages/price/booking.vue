<template>
	<view class="card-conent">
		<view class="view-content" v-watermark="watermarkConfig">
			<view class="flex justify-between" style="margin-top: 10px;">
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
			<view style="margin-bottom: 10px;" />
			<view style="border-bottom: 1px solid #e5e5e5;" />
			<view style="padding: 10px 10px;">
				<uni-forms :value="formData">
					<uni-forms-item name="cnorname" label="发货人" labelWidth="80">
						<input type="text" v-model="formData.cnorname" placeholder="请输入发货人" size="mini" />
					</uni-forms-item>
					<uni-forms-item name="payplace" label="付款地点" labelWidth="80">
						<input type="text" v-model="formData.payplace" placeholder="请输入付款地点" />
					</uni-forms-item>
					<uni-forms-item name="carryitem" label="运费条款" labelWidth="80">
						<input type="text" v-model="freightname" placeholder="请输入运费条款" @click="openFreightClause()" />
					</uni-forms-item>
					<uni-forms-item name="marksno" label="船公司" labelWidth="80">
						<input type="text" v-model="formData.shipping" disabled="true" />
					</uni-forms-item>
					<uni-forms-item name="marksno" label="唛头" labelWidth="80">
						<input type="text" v-model="formData.marksno" placeholder="请输入唛头" />
					</uni-forms-item>
					<uni-forms-item name="goodsdesc" label="品名" labelWidth="80">
						<input type="text" v-model="formData.goodsdesc" placeholder="请输入品名" />
					</uni-forms-item>
					<uni-forms-item name="goodsdesc" label="截关日期" labelWidth="80">
						<uni-datetime-picker type="date" :value="formData.cls" :border="false" />
					</uni-forms-item>
					<uni-forms-item name="blcontacts" label="联系人" labelWidth="80">
						<input type="text" v-model="formData.blcontacts" placeholder="请输入委托订舱联系人" />
					</uni-forms-item>
					<uni-forms-item name="phone" label="电话" labelWidth="80">
						<input type="number" v-model="formData.phone" placeholder="请输入委托订舱电话" />
					</uni-forms-item>
					<uni-forms-item name="email" label="E-MAIL" labelWidth="80">
						<input type="text" v-model="formData.email" placeholder="请输入委托订舱E-MAIL" />
					</uni-forms-item>
					<view style="border-bottom: 1px solid #e5e5e5;margin-bottom: 30rpx;" />
					<uni-table stripe emptyText="暂无更多数据">
						<!-- 表头行 -->
						<uni-tr>
							<uni-th width="120" align="center">箱型</uni-th>
							<uni-th width="60" align="center">箱量</uni-th>
							<uni-th width="60" align="center">KGS</uni-th>
							<uni-th width="60" align="center">件数</uni-th>
						</uni-tr>
						<!-- 表格数据行 -->
						<uni-tr>
							<uni-td align="center">20GP<br>单价：{{ pricedata.bargecurrency }} {{ pricedata.cost20 }}
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.gp20" @change="changeGp20" />
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.gp20grswgt" @change="changeGp20grswgt" />
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.gp20pieces" @change="changeGp20pieces" />
							</uni-td>
						</uni-tr>
						<uni-tr>
							<uni-td align="center">40GP<br>单价：{{ pricedata.bargecurrency }} {{ pricedata.cost40gp }}
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.gp40" @change="changeGp40" />
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.gp40grswgt" @change="changeGp40grswgt" />
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.gp40pieces" @change="changeGp40pieces" />
							</uni-td>
						</uni-tr>
						<uni-tr>
							<uni-td align="center">40HQ<br>单价：{{ pricedata.bargecurrency }} {{ pricedata.cost40hq }}
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.hq40" @change="changeHq40" />
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.hq40grswgt" @change="changeHq40grswgt" />
							</uni-td>
							<uni-td align="center">
								<uni-number-box v-model="formData.hq40pieces" @change="changeHq40pieces" />
							</uni-td>
						</uni-tr>
					</uni-table>
					<view style="margin-bottom: 20rpx;" />
				</uni-forms>
			</view>
		</view>
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


		<uni-popup ref="freightClausePopup" type="bottom" mask-background-color="rgba(0,0,0,-0.6)">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="popup-view" v-for="(item,index) in freightitem" @click="bindFreightClauseChange(item)">
					<view>{{ item.name }}</view>
				</view>
			</scroll-view>
		</uni-popup>



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
				pg20pa: "",
				pg40pa: "",
				hq40pa: "",
				freightname: "",
				cnyprice: 0,
				cnytotal: 0,
				usdtotal: 0,
				amt20: 0,
				amt40gp: 0,
				amt40hq: 0,
				amt20USD: 0,
				amt40gpUSD: 0,
				amt40hqUSD: 0,
				amt20CNY: 0,
				amt40gpCNY: 0,
				amt40hqCNY: 0,
				freightitem: [{
					"value": "PP",
					"name": "FREIGHT PREPAID"
				}, {
					"value": "CC",
					"name": "FREIGHT COLLECT"
				}, {
					"value": "PD",
					"name": "FREIGHT PAYABLE AT DESTINATION"
				}, {
					"value": "HK",
					"name": "FREIGHT PAYABLE AT HONGKONG"
				}],
				pricedata: {},
				feeaddlist: [],
				formData: {
					atd: "", //开船日期
					bargecls: "",
					bargeetd: "",
					billemail: "",
					billname: "",
					billtel: "",
					blcontacts: "", //联系人
					bltype: "H",
					carryitem: "CY-CY",
					cbm: "",
					cls: "", //截关日期
					cneename: "",
					cnorname: "", //发货人
					contractno: "",
					currency: "CNY",
					destination: "",
					email: "", //E-MAIL
					etd: "",
					feeArray: [],
					feeitemid: "22452177",
					financeemail: "",
					financename: "",
					financetel: "",
					freightitem: "PP",
					goodsdesc: "", //品名
					goodsreadydate: "",
					gp20: "0", //箱量
					gp20grswgt: "0", //KGS
					gp20pieces: "0", //件数
					gp40: "0", //箱量
					gp40grswgt: "0", //KGS
					gp40pieces: "0", //件数
					grswgt: "", //毛重/KGS
					hq40: "0", //箱量
					hq40grswgt: "", //KGS	
					hq40pieces: "0", //件数
					id: "",
					isread: "on",
					isubmit: true,
					linecode: "JTP", //航线代码
					marksno: "", //唛头
					notifyname: "",
					packer: "", //包装
					payplace: "", //付款地点
					pdd: "DUBAI",
					phone: "", //电话
					piece: "0",
					poa: "",
					pod: "",
					pol: "",
					ppcc: "PP",
					pretrans: "",
					priceid: "",
					putertype: "O",
					refno: "",
					remarks: "",
					routecode: "", //航线
					schedule: "",
					shipping: "", //船公司
					vesselvoyage: ""
				}
			}
		},
		created() {
			let user = uni.getStorageSync("dd_user")
			if (user != "") {
				// 水印
				this.watermarkConfig.text = user.data.data.name + user.data.data.mobile.substring(7, 11)
				//附加费
				if (this.pricedata.uuid) {
					this.$H.post('/price?method=getfeeadd&id=' + this.pricedata.uuid, this.form, {
						token: false
					}).then(res => {
						if (res) {
							for (var i = 0; i < res.length; i++) {
								let temp = {}
								temp.amt = res[i].amt;
								temp.currency = res[i].currency;
								temp.feeitemid = res[i].feeitemid;
								temp.piece = res[i].unit == "票" ? 1 : res[i].unit == "箱型" ? null : 0;
								temp.price = res[i].amt;
								temp.unit = res[i].unit;
								temp.amt20 = res[i].amt20;
								temp.amt40gp = res[i].amt40gp;
								temp.amt40hq = res[i].amt40hq;
								this.feeaddlist.push(temp);
							}
							console.log(this.feeaddlist);
							this.formData.feeArray = this.feeaddlist;
						}
						this.initCnyPrice()
					}).catch(res => {
						uni.showToast({
							title: 'search失败：' + res.message,
							icon: 'none'
						});
					})
				}
			} else {
				uni.reLaunch({
					url: '/pages/price/error'
				});
			}
		},
		watch: {
			cnyprice(newValue, oldValue) {
				this.computeFeeitems()
			}
		},
		methods: {
			openFreightClause: async function(e) {
				this.$refs.freightClausePopup.open('bottom')
			},
			bindFreightClauseChange: function(e) {
				this.freightname = e.name
				this.formData.freightitem = e.value
				this.$refs.freightClausePopup.close()
			},
			submitForm() {
				if (this.formData.cnorname == "" || this.formData.phone == "") {
					uni.showToast({
						title: '缺少必填信息',
						icon: 'none'
					});
					return;
				}
				uni.request({
					url: 'http://47.112.190.46/so/booking?method=createBooking',
					data: this.formData,
					method: 'POST',
					header: {
						'content-type': 'application/json'
					},
					success: res => {

						uni.showToast({
							title: '订舱成功:' + res.data.info,
							icon: 'none'
						});

						setTimeout(function() {
							uni.navigateBack({
								delta: 1,
							});
						}, 2500);

					},
					fail: res => {
						uni.showToast({
							title: '失败：' + res.message,
							icon: 'none'
						});
					}
				})
			},
			changefeeArray(index, value) {
				for (var i = 0; i < this.formData.feeArray.length; i++) {
					if (this.formData.feeArray[i].unit != '票' && this.formData.feeArray[i].unit != "20'GP" &&
						this.formData.feeArray[i].unit != "40'GP" && this.formData.feeArray[i].unit != "40'HQ") {

						if (this.formData.feeArray[i].feeitemid == '22452177') {
							if (index == "pg20") {
								this.pg20pa = this.formData.feeArray[i].amt20 * this.formData.gp20;
							} else if (index == "pg40") {
								this.pg40pa = this.formData.feeArray[i].amt40gp * this.formData.gp40;
							} else if (index == "hq40") {
								this.hq40pa = this.formData.feeArray[i].amt40hq * this.formData.hq40;
							}
							this.formData.feeArray[i].amt = this.pg20pa + this.pg40pa + this.hq40pa;
							this.formData.feeArray[i].price = this.pg20pa + this.pg40pa + this.hq40pa;

						} else if (this.formData.feeArray[i].feeitemid != '22452177') {

							if (this.formData.feeArray[i].feeitemid == '9790502274') {
								this.formData.feeArray[i].piece = this.formData.gp20 + this.formData.gp40 + this.formData
									.hq40;
								this.formData.feeArray[i].amt = this.formData.feeArray[i].price * this.formData.feeArray[i]
									.piece;
							} else {
								this.formData.feeArray[i].piece = this.formData.gp20 + this.formData.gp40 + this.formData
									.hq40;
								this.formData.feeArray[i].amt = this.formData.feeArray[i].price * this.formData.feeArray[i]
									.piece;
							}
						}
					}
				}
				console.log(this.formData.feeArray);
			},
			changeGp20(value) {
				//数量
				this.formData.gp20 = value
				var temp = 0;
				var tmep2 = 0;
				var sum = 0;

				for (var i = 0; i < this.feeaddlist.length; i++) {
					if (this.formData.feeArray[i].unit == "20'GP") {
						sum++;
					}

					if (this.feeaddlist[i].unit != '票') {
						if (this.feeaddlist[i].feeitemid == '22452177') {
							temp += this.feeaddlist[i].amt20 * value;
						}
						if (this.feeaddlist[i].feeitemid != '22452177') {
							if (this.feeaddlist[i].feeitemid == '9790502274') {
								tmep2 += this.feeaddlist[i].price * value;
							} else if (this.formData.feeArray[i].unit != "20'GP" &&
								this.formData.feeArray[i].unit != "40'GP" && this.formData.feeArray[i].unit != "40'HQ") {
								temp += this.feeaddlist[i].price * value;
							}
						}
					}
				}

				if (sum == 0) {
					var fee = {
						amt: this.pricedata.cost20 * value,
						currency: this.pricedata.bargecurrency,
						feeitemid: '2236256200',
						piece: value,
						price: this.pricedata.cost20,
						unit: "20'GP"
					};
					this.formData.feeArray.push(fee)
					this.changefeeArray("pg20", value)
				} else if (sum == 1) {
					for (var i = 0; i < this.formData.feeArray.length; i++) {
						if (this.formData.feeArray[i].unit == "20'GP") {
							this.formData.feeArray[i].piece = value;
							this.formData.feeArray[i].amt = this.pricedata.cost20 * value;
						}
					}
					this.changefeeArray("pg20", value)
				} else {
					return;
				}

				this.amt20CNY = temp
				this.amt20USD = tmep2
				this.computeFeeitems()
			},
			changeGp40(value) {
				//数量
				this.formData.gp40 = value
				var temp = 0;
				var tmep2 = 0;
				var sum = 0;

				for (var i = 0; i < this.feeaddlist.length; i++) {
					if (this.formData.feeArray[i].unit == "40'GP") {
						sum++;
					}

					if (this.feeaddlist[i].unit != '票') {
						if (this.feeaddlist[i].feeitemid == '22452177') {
							temp += this.feeaddlist[i].amt40gp * value;
						}
						if (this.feeaddlist[i].feeitemid != '22452177') {
							if (this.feeaddlist[i].feeitemid == '9790502274') {
								tmep2 += this.feeaddlist[i].price * value;
							} else if (this.formData.feeArray[i].unit != "20'GP" &&
								this.formData.feeArray[i].unit != "40'GP" && this.formData.feeArray[i].unit != "40'HQ") {
								temp += this.feeaddlist[i].price * value;
							}
						}
					}
				}

				if (sum == 0) {
					var fee = {
						amt: this.pricedata.cost40gp * value,
						currency: this.pricedata.bargecurrency,
						feeitemid: '2236256200',
						piece: value,
						price: this.pricedata.cost40gp,
						unit: "40'GP"
					};
					this.formData.feeArray.push(fee)
					this.changefeeArray("pg40", value)
				} else if (sum == 1) {
					for (var i = 0; i < this.formData.feeArray.length; i++) {
						if (this.formData.feeArray[i].unit == "40'GP") {
							this.formData.feeArray[i].piece = value;
							this.formData.feeArray[i].amt = this.pricedata.cost40gp * value;
						}
					}
					this.changefeeArray("pg40", value)
				} else {
					return;
				}
				this.amt40gpCNY = temp
				this.amt40gpUSD = tmep2
				this.computeFeeitems()
			},
			changeHq40(value) {
				this.formData.hq40 = value

				var temp = 0;
				var tmep2 = 0;
				var sum = 0;

				for (var i = 0; i < this.feeaddlist.length; i++) {
					if (this.formData.feeArray[i].unit == "40'HQ") {
						sum++;
					}

					if (this.feeaddlist[i].unit != '票') {
						if (this.feeaddlist[i].feeitemid == '22452177') {
							temp += this.feeaddlist[i].amt40hq * value;
						}
						if (this.feeaddlist[i].feeitemid != '22452177') {
							if (this.feeaddlist[i].feeitemid == '9790502274') {
								tmep2 += this.feeaddlist[i].price * value;
							} else if (this.formData.feeArray[i].unit != "20'GP" &&
								this.formData.feeArray[i].unit != "40'GP" && this.formData.feeArray[i].unit != "40'HQ") {
								temp += this.feeaddlist[i].price * value;
							}
						}
					}
				}

				if (sum == 0) {
					var fee = {
						amt: this.pricedata.cost40hq * value,
						currency: this.pricedata.bargecurrency,
						feeitemid: '2236256200',
						piece: value,
						price: this.pricedata.cost40hq,
						unit: "40'HQ"
					};
					this.formData.feeArray.push(fee)
					this.changefeeArray("hq40", value)
				} else if (sum == 1) {
					for (var i = 0; i < this.formData.feeArray.length; i++) {
						if (this.formData.feeArray[i].unit == "40'HQ") {
							this.formData.feeArray[i].piece = value;
							this.formData.feeArray[i].amt = this.pricedata.cost40hq * value;
						}
					}
					this.changefeeArray("hq40", value)
				} else {
					return;
				}

				this.amt40hqCNY = temp
				this.amt40hqUSD = tmep2
				this.computeFeeitems()
			},
			changeGp20grswgt(value) {
				this.formData.gp20grswgt = value;
				this.formData.grswgt = this.formData.gp20grswgt + this.formData.gp40grswgt + this.formData.hq40grswgt;
			},
			changeGp40grswgt(value) {
				this.formData.gp40grswgt = value;
				this.formData.grswgt = this.formData.gp20grswgt + this.formData.gp40grswgt + this.formData.hq40grswgt;
			},
			changeHq40grswgt(value) {
				this.formData.hq40grswgt = value;
				this.formData.grswgt = this.formData.gp20grswgt + this.formData.gp40grswgt + this.formData.hq40grswgt;
			},
			changeGp20pieces(value) {
				this.formData.gp20pieces = value;
			},
			changeGp40pieces(value) {
				this.formData.gp40pieces = value;
			},
			changeHq40pieces(value) {
				this.formData.hq40pieces = value;
			},
			computeFeeitems() {
				var gp20 = this.pricedata.cost20;
				var gp40 = this.pricedata.cost40gp;
				var hq40 = this.pricedata.cost40hq;
				var gp20value = this.formData.gp20;
				var gp40value = this.formData.gp40;
				var hq40value = this.formData.hq40;

				// 计算折合价格
				this.usdtotal = this.amt20USD + this.amt40gpUSD + this.amt40hqUSD +
					(gp20 * gp20value) + (gp40 * gp40value) + (hq40 * hq40value);

				this.cnytotal = this.amt20CNY + this.amt40gpCNY + this.amt40hqCNY + this.cnyprice;

			},
			initCnyPrice() {
				let temp = 0;
				let amount = 0;
				for (var i = 0; i < this.feeaddlist.length; i++) {
					if (this.feeaddlist[i].unit == '票') {
						temp += this.feeaddlist[i].amt;
					}
				}
				this.cnyprice = temp
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
			console.log(option.detail);
			this.pricedata = JSON.parse(decodeURIComponent(option.detail));
			this.formData.priceid = this.pricedata.id;
			this.formData.pol = this.pricedata.pol;
			this.formData.pod = this.pricedata.pod;
			this.formData.shipping = this.pricedata.shipping;
			this.formData.linecode = this.pricedata.linecode;
			this.formData.routecode = this.pricedata.line;
			this.formData.schedule = this.pricedata.schedule;

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

	.view-content {
		height: calc(100vh - 121px);
		margin: 35px 14px;
		background-color: #FFFFFF;
		box-shadow: rgb(0 0 0 / 15%) 0px 0px 3px 1px;
		border-radius: 15px;
		overflow-y: auto;
	}


	>>>.uni-forms-item__inner {
		align-items: baseline;
		padding-bottom: 10rpx;
	}

	>>>.uni-collapse-cell--open {
		background-color: #ffffff;
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
		padding: 3px 0px;
		font-size: 12px;
		line-height: 14px;
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

	.popup-view {
		padding: 5px;
	}

	>>>.uni-scroll-view-content {
		border-top-right-radius: 20px;
		border-top-left-radius: 20px;
	}

	.scroll-Y {
		text-align: center;
		height: auto;
		width: 100%;
	}

	>>>.uni-scroll-view-content {
		background-color: #FFFFFF;
	}

	>>>.uni-numbox {
		width: 70px;
	}
</style>
