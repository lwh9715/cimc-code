<template>
	<view style="background: #eee;height: 100%;">
		<view class="">
			<view style="background: #6DBA52;
						height: 240rpx" class="">

			</view>
			<view class="card">
				<view class="" style="margin: 30rpx 60rpx;">

					</u-select>
					<u-input style="margin-bottom: 30rpx;" @click="showClient = true" v-model="newPick.client" border-color="#6DBA52"
					 placeholder="请点击选择用户" border type="select" />

					<u-input style="margin-bottom: 30rpx;" v-model="newPick.address" border-color="#6DBA52" placeholder="提货地址" border />

					</u-select>
					<u-input style="margin-bottom: 30rpx;" @click="showTime = true" v-model="newPick.time" border-color="#6DBA52"
					 placeholder="请点击选择提货时间" border type="select" />

					</u-select>
					<u-input style="margin-bottom: 30rpx;" @click="showWH = true"
					 v-model="newPick.warehouse" border-color="#6DBA52"
					 placeholder="请点击选择提货仓库" border type="select" />


				</view>
				<!-- 下拉选客户 -->
				<u-action-sheet :list="listClient" v-model="showClient" @click="actionSheetCallback"></u-action-sheet>
				<!-- 下拉选时间 -->
				<u-picker mode="time" start-year="2020" end-year="2022" v-model="showTime" :params="params" @confirm="confirmTime"></u-picker>
				<!-- 下拉选仓库 -->
				<u-action-sheet :list="listshowWH" v-model="showWH" @click="actionSheetCallbackshowWH"></u-action-sheet>
				<!-- <u-select v-model="showSelect" :list="list"></u-select> -->
				<!-- <view class="uni-title uni-common-pl">日期选择器</view> -->
			<!-- 	<view class="uni-list">
					<view class="uni-list-cell">
						<view class="uni-list-cell-left">
							当前选择
						</view>
						<view class="uni-list-cell-db">
							<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
								<view class="uni-input">{{date}}</view>
							</picker>
						</view>
					</view>
				</view> -->
				<!-- list end -->
			</view> 


		
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			// const currentDate = this.getDate({
			// 	format: true
			// }) 
			return {
				date: '',
				params: {
					year: true,
					month: true,
					day: true,
					hour: true,
					minute: true

				},
				showWH: false,
				showTime: false,
				showClient: false,
				newPick: {
					client: '',
					address: '',
					time: '',
					warehouse: ''
				},
				listClient: [{
					text: '亦邦',
					color: 'blue',
					fontSize: 28
				}, {
					text: '亦邦1'
				}, {
					text: '亦邦2'
				}],
				listshowWH: [{
					text: '广州仓库',
					color: 'blue',
					fontSize: 28
				}, {
					text: '广州仓库'
				}, {
					text: '广州仓库'
				}],
			}
		},
		computed: {
			startDate() {
				// return this.getDate('start');
			},
			endDate() {
				// return this.getDate('end');
			}
		},
		onNavigationBarButtonTap() {
			uni.showToast({
				title: "22"
			})
			uni.navigateTo({
				url: 'scan-order'
			})
		},
		methods: {
			show() {
				this.$refs.picker.show()
			},
			confirm(e) {
				console.log(e.detail)
			},
			bindDateChange: function(e) {
				console.log(e)
				this.date = e.target.value
			},
			confirmTime(e) {
				console.log(e)
				this.newPick.time = e.year + '-' + e.month + '-' + e.day + ' ' + e.hour + ':' + e.minute
			},
			showSelect() {
				this.showSelect = false
			},
			actionSheetCallback(index) {
				this.newPick.client = this.listClient[index].text
				this.newPick.address = '深圳市南山区XXX'
			},
			actionSheetCallbackshowWH(index) {
				this.newPick.warehouse = this.listshowWH[index].text

			}
		}
	}
</script>

<style scoped lang="scss">
	.card {
		height: 1000rpx;
		background: #fff;
		margin: 0 20rpx;
		position: relative;
		border-radius: 30rpx;
		top: -140rpx;
		padding: 20rpx;
	}
</style>
