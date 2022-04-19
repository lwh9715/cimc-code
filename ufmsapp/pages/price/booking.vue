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
			<view style="padding: 10px 10px;">
				<uni-forms :modelValue="formData">
					<uni-forms-item label="发货人" labelWidth="80">
						<input v-model="formData.pol" type="text" placeholder="请输入发货人" />
					</uni-forms-item>
					<uni-forms-item label="付款地点" labelWidth="80">
						<input v-model="formData.pol" type="text" placeholder="请输入付款地点" />
					</uni-forms-item>
					<uni-forms-item label="运费条款" labelWidth="80">
						<input v-model="formData.pol" type="text" placeholder="请输入付款地点" />
					</uni-forms-item>
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
		height: calc(100vh - 100px);
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
