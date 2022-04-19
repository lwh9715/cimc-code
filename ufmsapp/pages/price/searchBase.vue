<template>
	<view class="card-conent">
		<view style="height: 360rpx;">
			<uni-search-bar confirm-type="search" radius="15" @confirm="search" :focus="true" v-model="keyword"
				@cancel="cancal" :adjust-position="false">
			</uni-search-bar>
			<uni-section title="历史港口" type="line" />
			<view class="view-body">
				<view class="example-body-item" v-for="(item,index) in citylist">
					<view class="example-body-item-text" @click="selectMode(item.value,index)">{{item.name}}</view>
				</view>
			</view>
		</view>
		<view>
			<uni-indexed-list :options="list" :show-select="false" @click="bindClick" />
		</view>
		<!-- 弹窗 -->
		<uni-popup ref="popup" type="bottom" mask-background-color="rgba(0,0,0,-0.6)" backgroundColor="#FFFFFF">
			<view class="" style="height: calc(100vh - 108rpx);overflow-y: auto;">
				<uni-list v-for="(item,index) in portlist" index="index">
					<uni-list-item :title="item.namee +' / '+ item.namec" @click="searchport(item)" clickable />
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
				portlist: [],
				list: [{
					'letter': 'A',
					'data': []
				}],
				citylist: [{
					'value': 'SHENZHEN',
					'name': '深圳'
				}, {
					'value': 'DUBAI',
					'name': '迪拜'
				}]
			}
		},
		created() {
			if (uni.getStorageSync("search_key")) {
				this.citylist = uni.getStorageSync("search_key")
			}
		},

		methods: {
			search(val) {
				this.$refs.popup.open('bottom')
				if (this.index.id == 0) {
					uni.request({
						url: 'http://120.77.239.151/scp/service?src=flexbox&action=fclpol&q=' + val.value +
							'&p=1&s=20',
						method: 'GET',
						success: res => {
							this.portlist = res.data.results
						},
						fail: res => {
							uni.showToast({
								title: '失败：' + res.message,
								icon: 'none'
							});
						}
					})
				} else {
					uni.request({
						url: 'http://120.77.239.151/scp/service?src=flexbox&action=fclpod&q=' + val.value +
							'&p=1&s=20',
						method: 'GET',
						success: res => {
							this.portlist = res.data.results
						},
						fail: res => {
							uni.showToast({
								title: '失败：' + res.message,
								icon: 'none'
							});
						}
					})
				}
			},
			cancal() {
				this.$refs.popup.close()
			},
			/**
			 * 查询港口地址
			 */
			searchport(e) {

				let obj = {}
				obj['value'] = e.namee;
				obj['name'] = e.namec;


				let temp = 0;

				console.log(this.citylist[0].name)

				for (var i = 0; i < this.citylist.length; i++) {
					if (this.citylist[i].name == e.namec) {
						temp++;
					}
				}

				if (temp == 0 && this.citylist.length < 4) {
					this.citylist.push(obj)
					uni.setStorageSync('search_key', this.citylist);
				}

				this.$refs.popup.close()
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				prevPage.$vm.index = this.index
				prevPage.$vm.value = e.namee
				uni.navigateBack({
					delta: 1,
				});
			},
			bindClick(e) {
				var str = e.item.name.split('/');
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				prevPage.$vm.index = this.index
				prevPage.$vm.value = str[0].trim()
				uni.navigateBack({
					delta: 1,

				});
			},
			selectMode(val) {
				console.log(val)
				let pages = getCurrentPages()
				let nowPage = pages[pages.length - 1]; //当前页页面实例
				let prevPage = pages[pages.length - 2]; //上一页页面实例
				prevPage.$vm.index = this.index
				prevPage.$vm.value = val
				uni.navigateBack({
					delta: 1,

				});
			},
			onLoad: function(option) {
				uni.request({
					url: 'http://120.77.239.151/scp/service?src=flexbox&action=fclpod&q=' +
						'&p=1&s=100',
					method: 'GET',
					success: res => {
						var list_map = new Array();
						var data = res.data.results
						for (var i = 0; i < data.length; i++) {
							list_map.push({
								letter: data[i].namee.substr(0, 1),
								data: []
							});
						}
						//res去重复后的集合
						var res = [];
						var temp = {};
						for (var i = 0; i < list_map.length; i++) {
							if (!temp[list_map[i].letter]) {
								res.push(list_map[i]);
								temp[list_map[i].letter] = 1;
							}
						}
						for (var i = 0; i < res.length; i++) {
							for (var j = 0; j < data.length; j++) {
								if (res[i].letter == data[j].namee.substr(0, 1)) {
									res[i].data.push(data[j].namee + ' / ' + data[j].namec)
								}
							}
						}
						this.list = res
					},
					fail: res => {
						uni.showToast({
							title: '失败：' + res.message,
							icon: 'none'
						});
					}
				})
				this.index = option
			}
		},

	}
</script>

<style scoped>
	.card-conent {
		height: calc(100vh);
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
		top: calc(100vh - 73vh) !important;
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
		margin: 10rpx;
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

	>>>.uni-transition {
		background-color: rgb(255 255 255);
		margin-top: 55px;
	}
</style>
