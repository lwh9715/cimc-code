<template>
	<view class="card-conent">
		<uni-card title="FCL报价查询" style="text-align: center;">
			<uni-forms :modelValue="formData">
				<uni-forms-item label="起运港">
					<input style="margin-top: 13rpx;" v-model="formData.start" type="text" placeholder="请输入起运港"
						@click="openStartPage(0)" />
				</uni-forms-item>
				<uni-forms-item label="目的港">
					<input style="margin-top: 13rpx;" v-model="formData.purpose" type="text" placeholder="请输入起运港"
						@click="openStartPage(1)" />
				</uni-forms-item>
				<uni-forms-item label="出航时间">
					<view>
						<uni-datetime-picker type="date" returnType="date" v-model="formData.date" :border="false"
							@change="bindDateChange" />
					</view>
				</uni-forms-item>
				<view @click="openCompanyList">
					<uni-forms-item label="船公司">
						<view style="margin-top: 16rpx; margin-left: 10rpx;">
							{{ formData.company }}
						</view>
					</uni-forms-item>
				</view>
				<view @click="openRoutesList">
					<uni-forms-item label="航线">
						<view style="margin-top: 16rpx; margin-left: 10rpx;">
							{{ formData.routes }}
						</view>
					</uni-forms-item>
				</view>
			</uni-forms>
			<button type="primary" @click="submitForm" style="margin-top: 50rpx;margin-bottom: 50rpx;">立即查询</button>
		</uni-card>
		<uni-popup ref="companyPopup" type="bottom" mask-background-color="rgba(0,0,0,-0.6)" backgroundColor="#FFFFFF">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="popup-view" v-for="(item,index) in companylist" @click="bindCompanyChange(item)">
					<view class="sentence-text">{{ item }}</view>
				</view>
			</scroll-view>
		</uni-popup>

		<uni-popup ref="routesPopup" type="bottom" mask-background-color="rgba(0,0,0,-0.6)" backgroundColor="#FFFFFF">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="popup-view" v-for="(item,index) in routeslist" @click="bindRoutesChange(item)">
					<view class="sentence-text">{{ item }}</view>
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
				startlist: ["阿克苏机场", "阿拉山口机场", "阿勒泰机场", "阿里昆莎机场", "安庆天柱山机场", "澳门国际机场"],
				purposelist: ["保山机场", "包头机场", "北海福成机场", "北京南苑机场", "北京首都国际机场"],
				companylist: ['中国', '美国', '巴西', '日本', '中国', '美国', '巴西', '日本'],
				routeslist: ['CNN', 'USD', 'ABX', 'CSS'],
				formData: {
					date: '2022-04-12',
					start: '',
					purpose: '',
					company: '',
					routes: ''
				}
			}
		},
		created() {},
		methods: {
			bindDateChange: function(e) {
				this.formData.date = e
			},
			openCompanyList: function(e) {
				this.$refs.companyPopup.open('bottom')
			},
			bindCompanyChange: function(e) {
				this.formData.company = e
				this.$refs.companyPopup.close()
			},
			openRoutesList: function(e) {
				this.$refs.routesPopup.open('bottom')
			},
			bindRoutesChange: function(e) {
				this.formData.routes = e
				this.$refs.routesPopup.close()
			},
			openStartPage: function(val) {
				uni.navigateTo({
					url: '/pages/system/searchBase?id=' + val,
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			/**
			 * 起运港和目的港信息反转
			 */
			loopSubmit: async function() {
				let temp = this.formData.start
				this.formData.start = this.formData.purpose
				this.formData.purpose = temp
			},
			/**
			 * 查询运价
			 * @param {Object} keyword
			 */
			submitForm: async function(keyword) {
				uni.navigateTo({
					url: '/pages/list/index',
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			onShow() {
				let pages = getCurrentPages();
				let currPage = pages[pages.length - 1]; // 当前页的实例
				if (currPage.$vm.index.id == 0) {
					this.formData.start = currPage.$vm.value
				} else {
					this.formData.purpose = currPage.$vm.value
				}
			},
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
		height: calc(100vh - 55vh);
		width: 100%;
	}

	.popup-view {
		text-align: center;
		margin: 30rpx;
	}

	.uni-date__icon-logo {}
</style>
