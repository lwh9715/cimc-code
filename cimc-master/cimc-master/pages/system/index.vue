<template>
	<view class="card-conent" style="background-image: url(../../static/background.png);">
		<uni-card title="FCL报价查询" style="text-align: center;">
			<uni-forms :modelValue="formData">
				<uni-forms-item label="起运港">
					<uni-combox :border="false" emptyTips="匹配不到起运港" :candidates="startlist" placeholder="请输入起运港"
						v-model="formData.start">
					</uni-combox>
				</uni-forms-item>
				<uni-forms-item label="目的港">
					<uni-combox :border="false" emptyTips="匹配不到目的港" :candidates="purposelist" placeholder="请输入目的港"
						v-model="formData.purpose">
					</uni-combox>
				</uni-forms-item>
				<uni-forms-item label="出航时间">
					<view style="margin-top: 10px;">
						<picker mode="date" :value="formData.date" @change="bindDateChange">
							<view class="uni-input">{{ formData.date }}</view>
						</picker>
					</view>
				</uni-forms-item>
				<view @click="openCompanyList">
					<uni-forms-item label="船公司" style="margin-top: 10px;">
						<view style="margin-top: 20rpx;">
							{{ formData.company }}
						</view>
					</uni-forms-item>
				</view>
				<view @click="openRoutesList">
					<uni-forms-item label="航线" style="margin-top: 10px;">
						<view style="margin-top: 20rpx;">
							{{ formData.routes }}
						</view>
					</uni-forms-item>
				</view>
			</uni-forms>
			<button type="primary" @click="submitForm" style="margin-top: 50rpx;">立即查询</button>
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
				startlist: ['北京', '南京', '东京', '武汉', '天津', '上海', '海口'],
				purposelist: ['中国', '美国', '巴西', '日本', '中国', '美国', '巴西', '日本'],
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
				this.formData.date = e.detail.value
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
				// if (formData == '' || formData == null) {
				// 	this.formData = []
				// 	return false
				// }
				// let res = await this.$Tools.Axios({
				// 	url: this.$api.music_search,
				// 	data: {
				// 		key: this.keyword
				// 	},
				// 	method: 'GET'
				// });
				// if (res.result) {
				// 	this.formData = res.data;
				// } else {
				// 	this.formData = []
				// 	uni.showToast({
				// 		icon: 'none',
				// 		title: '请先登录，在进行操作！'
				// 	})
				// 	setTimeout(() => {
				// 		uni.navigateTo({
				// 			url: '/pages/login/login',
				// 			fail: (res) => {
				// 				console.log(res) //打印错误信息
				// 			}
				// 		});
				// 	}, 1000)
				// }
			},
		},

	}
</script>

<style>
	.card-conent {
		height: calc(100vh - 50px);
		overflow-y: auto;
	}

	.uni-card {
		margin-top: 100rpx !important;
		padding: 5px 10px !important;
		/* border-radius: 15rpx !important; */
	}

	.scroll-Y {
		text-align: center;
		height: calc(100vh - 70vh);
		width: 100%;
	}

	.popup-view {
		text-align: center;
		margin: 30rpx;
	}
</style>
