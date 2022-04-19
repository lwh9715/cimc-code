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
			<view style="border-bottom: 1px solid #e5e5e5;" />
			<view style="padding: 10px 10px;">
				<uni-forms :modelValue="formData">
					<uni-forms-item name="pol" label="发货人" labelWidth="80">
						<input type="text" placeholder="请输入发货人" />
					</uni-forms-item>
					<uni-forms-item name="pol" label="付款地点" labelWidth="80">
						<input type="text" placeholder="请输入付款地点" />
					</uni-forms-item>
					<uni-forms-item name="pol" label="运费条款" labelWidth="80">
						<input type="text" placeholder="请输入付款地点" />
					</uni-forms-item>
					<uni-forms-item name="pol" label="联系人" labelWidth="80">
						<input type="text" placeholder="请输入委托订舱联系人" />
					</uni-forms-item>
					<uni-forms-item name="pol" label="电话" labelWidth="80">
						<input type="text" placeholder="请输入委托订舱电话" />
					</uni-forms-item>
					<uni-forms-item name="pol" label="E-MAIL" labelWidth="80">
						<input type="text" placeholder="请输入委托订舱E-MAIL" />
					</uni-forms-item>

					<view class="flex justify-between">
						<text class="text-algin">20GP</text>
						<text>
							<uni-number-box v-model="amt20" @blur="blur" @focus="focus" @change="changeValue" />
						</text>
					</view>
					<view style="margin-bottom: 30rpx;" />
					<view class="flex justify-between">
						<text class="text-algin">40GP</text>
						<text>
							<uni-number-box v-model="amt40gp" @blur="blur" @focus="focus" @change="changeValue" />
						</text>
					</view>
					<view style="margin-bottom: 30rpx;" />
					<view class="flex justify-between">
						<text class="text-algin">40HQ</text>
						<text>
							<uni-number-box v-model="amt40hq" @blur="blur" @focus="focus" @change="changeValue" />
						</text>
					</view>
				</uni-forms>
			</view>
			<button type="primary" @click="submitForm" style="margin-top: 50rpx;margin-bottom: 50rpx;">订舱</button>
		</uni-card>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				keyword: "",
				amt20: 0,
				amt40gp: 0,
				amt40hq: 0,
				formData: {}
			}
		},
		created() {

		},
		methods: {
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
	}

	>>>.uni-card {
		overflow-y: auto;
		height: calc(100vh - 80px);
		margin-top: 35px;
		padding: 10px 0px;
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
		font-size: medium;
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
