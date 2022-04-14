<template>
	<view class="card-conent">
		<view class="">
			<uni-search-bar confirm-type="search" radius="15" @confirm="search" :focus="true" v-model="keyword"
				@cancel="cancal" :adjust-position="false">
			</uni-search-bar>
			<uni-section title="历史港口" type="line" />
			<view class="view-body">
				<view class="example-body-item" @click="selectMode('深圳', 0)"><text
						class="example-body-item-text">深圳</text>
				</view>
				<view class="example-body-item" @click="selectMode('东京', 1)">
					<text class="example-body-item-text">东京</text>
				</view>
				<view class="example-body-item" @click="selectMode('柏林', 2)"><text
						class="example-body-item-text">柏林</text>
				</view>
			</view>
		</view>
		<view class="">
			<view class="">
				<uni-section title="选择港口" type="line" />
			</view>
			<uni-indexed-list :options="portlist" :show-select="false" @click="bindClick" />
		</view>
		<uni-popup ref="popup" type="top" mask-background-color="rgba(0,0,0,-0.6)" backgroundColor="#FFFFFF">
			<view class="" style="height: calc(100vh - 94rpx);overflow-y: auto;">
				<uni-list v-for="(item,index) in portlist" index="index">
					<uni-list-item :title="item.name" @click="searchport(item.name)" clickable />
				</uni-list>
			</view>
		</uni-popup>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				index: '',
				keyword: '',
				portlist: []
			}
		},
		created() {},
		methods: {
			// blur(e) {
			// 	console.log('点击blur，返回数据' + JSON.stringify(e))
			// },
			search: async function(val) {
				this.$refs.popup.open('top')
				if (this.index.id == 0) {
					let res = await this.$Tools.Axios({
						url: this.$api.scp_pol,
						method: 'GET'
					});
					if (res) {
						this.portlist = res
					} else {
						return
					}
				} else {
					let res = await this.$Tools.Axios({
						url: this.$api.scp_pod,
						method: 'GET'
					});
					if (res) {
						this.portlist = res
					} else {
						return
					}
				}

			},
			cancal() {
				this.$refs.popup.close()
			},
			/**
			 * 查询港口地址
			 */
			searchport(e) {
				this.$refs.popup.close()
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				console.log(prevPage)
				prevPage.$vm.index = this.index
				prevPage.$vm.value = e
				uni.navigateBack({
					delta: 1,
				});
			},
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
			selectMode(val) {
				console.log("val", val);
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				console.log(prevPage)
				prevPage.$vm.index = this.index
				prevPage.$vm.value = val
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

<style scoped>
	.card-conent {
		height: calc(100vh - 50px);
		/* background-image: url(../../static/background.png); */
		overflow-y: auto;
	}

	.search-result {
		padding-top: 10px;
		padding-bottom: 20px;
		text-align: center;
	}

	.search-result-text {
		text-align: center;
		font-size: 14px;
		color: #666;
	}

	>>>.uni-indexed-list {
		top: calc(100vh - 67.5vh) !important;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 20rpx;
	}

	>>>.uni-popup {
		top: 47px !important;
	}

	.view-body {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		padding: 20rpx;
	}

	.example-body-item {
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 15rpx;
		padding: 15rpx;
		height: 60rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		padding: 0 15rpx;
		/* #endif */
		flex: 1;
		border-color: #e5e5e5;
		border-style: solid;
		border-width: 1px;
		border-radius: 5px;
	}

	.example-body-item-text {
		font-size: 28rpx;
		color: #333;
	}
</style>
