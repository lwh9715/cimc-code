<template>
	<view class="card-conent">
		<uni-card style="text-align: center;">
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
			<uni-grid :column="4" :square="false">
				<uni-grid-item>
					<text class="text">20GP</text>
					<view style="border-bottom: 1px solid #e5e5e5;" />
					<text class="text-content">{{formData.cost20}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">40GP</text>
					<view style="border-bottom: 1px solid #e5e5e5;" />
					<text class="text-content">{{formData.cost40gp}}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">40HQ</text>
					<view style="border-bottom: 1px solid #e5e5e5;" />
					<text class="text-content">{{formData.cost40hq }}</text>
				</uni-grid-item>
				<uni-grid-item>
					<text class="text">45HQ</text>
					<view style="border-bottom: 1px solid #e5e5e5;" />
					<text class="text-content">{{formData.cost45hq == null ? '--' : formData.cost45hq}}</text>
				</uni-grid-item>
			</uni-grid>

			<view style="padding: 10px 10px;">
				<view class="flex justify-between">
					<view class="" style="text-align: left;">
						<text style="margin-right: 10px;">船公司:</text>
						<b>{{formData.shipping}}</b>
					</view>
				</view>
				<view class="flex justify-between">
					<view class="" style="text-align: left;">
						<text style="margin-right: 10px;">航程:</text>
						<b>{{formData.tt}}</b>
					</view>
				</view>
				<view class="flex justify-between">
					<view class="" style="text-align: left;">
						<text style="margin-right: 10px;">截关:</text>
						<b>{{formData.schedule}}</b>
					</view>
				</view>
				<view class="flex justify-between">
					<view class="" style="text-align: left;">
						<text style="margin-right: 10px;">航线:</text>
						<b> {{formData.line}}</b>
					</view>
				</view>
				<view class="flex justify-between">
					<view class="" style="text-align: left;">
						<text style="margin-right: 10px;">航线代码:</text>
						<b>{{formData.shipline}}</b>
					</view>
				</view>
				<view class="flex justify-between">
					<view class="" style="text-align: left;">
						<text style="margin-right: 10px;">有效时间:</text>
						<b v-if="formData.typestart">({{ startType(formData.typestart) }})</b>
						<b>{{timeFormat(formData.datefm)}}~{{timeFormat(formData.dateto)}}</b>
					</view>
				</view>
				<view class="flex justify-between">
					<view class="" style="text-align: left;">
						<text style="margin-right: 10px;">备注:</text>
						<b style="text-align: left;"> {{formData.remark_in}}</b>
					</view>
				</view>
			</view>
			<view style="text-align: left;">
				<view style="border-bottom: 1px solid #e5e5e5;" />
				<uni-collapse>
					<uni-collapse-item title="附加费" style="color: #0868d8;font-weight: 800;"
						:open="feelist.length > 0 ? true : false" title-border="none">
						<uni-table stripe emptyText="暂无附加费数据">
							<!-- 表头行 -->
							<uni-tr v-if="feelist.length > 0">
								<uni-th align="center" width="80" style="color: #333333;">费用名</uni-th>
								<uni-th align="center" width="35" style="color: #333333;">币制</uni-th>
								<uni-th align="center" width="35" style="color: #333333;">单位</uni-th>
								<uni-th align="center" width="35" style="color: #333333;">20'GP</uni-th>
								<uni-th align="center" width="35" style="color: #333333;">40'GP</uni-th>
								<uni-th align="center" width="35" style="color: #333333;">40'HQ</uni-th>
								<uni-th align="center" width="50" style="color: #333333;">票/箱量</uni-th>
							</uni-tr>
							<!-- 表格数据行 -->
							<uni-tr v-for="(item,index) in feelist">
								<uni-td align="center">{{item.feeitemname}}</uni-td>
								<uni-td align="center">{{item.currency}}</uni-td>
								<uni-td align="center">{{item.unit}}</uni-td>
								<uni-td align="center">{{item.amt20}}</uni-td>
								<uni-td align="center">{{item.amt40gp}}</uni-td>
								<uni-td align="center">{{item.amt40hq}}</uni-td>
								<uni-td align="center">{{item.amt}}</uni-td>
							</uni-tr>
						</uni-table>
					</uni-collapse-item>
				</uni-collapse>
				<button type="primary" @click="submitBook" style="margin-top: 50rpx;margin-bottom: 50rpx;">在线订舱</button>
			</view>
		</uni-card>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				keyword: "",
				formData: {},
				feelist: []
			}
		},
		created() {
			if (this.formData.uuid) {
				this.$H.post('/price?method=getfeeadd&id=' + this.formData.uuid, this.form, {
					token: false
				}).then(res => {
					this.feelist = res;
				}).catch(res => {
					console.log(res)
					uni.showToast({
						title: 'search失败：' + res.message,
						icon: 'none'
					});
				})
			}
		},
		methods: {
			submitBook: function() {
				uni.navigateTo({
					url: '/pages/price/booking?detail=' + encodeURIComponent(JSON.stringify(this.formData)),
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
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
				var crtTime = new Date(val);
				var year = crtTime.getFullYear(); //得到年份
				var month = crtTime.getMonth(); //得到月份
				var date = crtTime.getDate(); //得到日期
				return year + '/' + month + '/' + date;
			},
		},
		onLoad: function(option) {
			this.formData = JSON.parse(decodeURIComponent(option.detail));
			console.log(this.formData)
		}
	}
</script>

<style>
	.card-conent {
		height: calc(100vh);
		background-image: url(../../static/img/bluebg.png);
		background-repeat: no-repeat;
		background-size: contain;
		overflow-y: auto;
	}

	>>>.uni-card {
		margin-top: 35px !important;
		padding: 5px 0px !important;
		border-radius: 15px !important;
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
</style>
