<template>
	<view class="card-conent">
		<uni-indexed-list :options="portlist" :show-select="false" @click="bindClick" />
	</view>
</template>


<script>
	export default {
		data() {
			return {
				index: '',
				portlist: [{
					"letter": "A",
					"data": [
						"阿克苏机场",
						"阿拉山口机场",
						"阿勒泰机场",
						"阿里昆莎机场",
						"安庆天柱山机场",
						"澳门国际机场"
					]
				}, {
					"letter": "B",
					"data": [
						"保山机场",
						"包头机场",
						"北海福成机场",
						"北京南苑机场",
						"北京首都国际机场"
					]
				}],
			}
		},
		created() {},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				console.log(prevPage)
				prevPage.$vm.index = this.index
				prevPage.$vm.value = e.item.name
				uni.navigateBack({
					delta: 1,

				});
			},
			onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
				this.index = option
				console.log("option", option); //打印出上个页面传递的参数。
			}
		},

	}
</script>

<style>
	.card-conent {
		height: calc(100vh - 50px);
		/* background-image: url(../../static/background.png); */
		overflow-y: auto;
	}

	.uni-card {
		margin-top: 100rpx !important;
		padding: 5px 10px !important;
		/* border-radius: 15rpx !important; */
	}

	.scroll-Y {
		text-align: center;
		height: calc(100vh - 60vh);
		width: 100%;
	}

	.popup-view {
		text-align: center;
		margin: 30rpx;
	}

	.uni-date__icon-logo {}
</style>
