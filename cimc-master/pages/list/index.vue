<template>
	<view class="card-conent" style="background-image: url(../../static/background.png);">
		<view v-for="(item,index) in fclInfo" :key="index">
			<uni-card :title="item.route" extra="查看详情" @click="showDetail(item)">
				<uni-grid :column="4" :showBorder="false">
					<uni-grid-item>
						<text class="text">20GP</text>
						<text class="text">{{item.pg20}}</text>
					</uni-grid-item>
					<uni-grid-item>
						<text class="text">40GP</text>
						<text class="text">{{item.pg40}}</text>
					</uni-grid-item>
					<uni-grid-item>
						<text class="text">40HQ</text>
						<text class="text">{{item.hq40}}</text>
					</uni-grid-item>
					<uni-grid-item>
						<text class="text">45HQ</text>
						<text class="text">{{item.hq45}}</text>
					</uni-grid-item>
				</uni-grid>
			</uni-card>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				keyword: "",
				fclInfo: [{
					route: "GUANGZHOU-->DUBAI",
					freight: "2350/4100/4100/--",
					currency: "RMB",
					pg20: "2000",
					pg40: "4000",
					hq40: "8000",
					hq45: "18000"
				}, {
					route: "GUANGZHOU-->DUBAI",
					freight: "2350/4100/4100/--",
					currency: "RMB",
					pg20: "2000",
					pg40: "4000",
					hq40: "8000",
					hq45: "18000"
				}, {
					route: "GUANGZHOU-->DUBAI",
					freight: "2350/4100/4100/--",
					currency: "RMB",
					pg20: "2000",
					pg40: "4000",
					hq40: "8000",
					hq45: "18000"
				}, {
					route: "GUANGZHOU-->DUBAI",
					freight: "2350/4100/4100/--",
					currency: "RMB",
					pg20: "2000",
					pg40: "4000",
					hq40: "8000",
					hq45: "18000"
				}]
			}
		},
		created() {},
		methods: {
			showDetail(e) {
				console.log(e.route)
				uni.navigateTo({
					url: '/pages/detail/index?id=' + e.freight + '&route=' + e.route,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			}
		},

	}
</script>

<style>
	.card-conent {
		height: calc(100vh);
		overflow-y: auto;
	}

	.uni-card {
		margin-top: 30rpx !important;
		padding: 0 4px !important;
		/* border-radius: 15rpx !important; */
	}

	.uni-card__header-title-text {
		flex: none !important;
		font-size: 12px !important;
	}

	.uni-card__content--pd {
		padding: 8px !important;
	}


	.text {
		font-size: 24rpx;
		margin-top: 30rpx;
		text-align: center;
		font-weight: 500;
	}

	.grid-item-box {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 20rpx 0;
	}

	.grid-item-box-row {
		flex: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 20rpx 0;
	}
</style>
