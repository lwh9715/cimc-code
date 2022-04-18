<template>
	<view class="flex flex-column " style="height: 100%;">
		<view class="bg-primary " style="height: 150rpx;width: 100%; ">

			<!-- 1 -->
			<view class="flex align-end justify-center align-center pl-3 " >
				<view class="u-f align-center" style="width: 50%; height: 100%;">
					<view class="u-f box-sizing p-1 justify-center align-center" style="background-color: #fff;
				border-radius: 16rpx;">
						<u-icon @click="openScan" name="scan" style="margin-right: 30rpx;" color="#6DBA52" size="58"></u-icon>
						<input type="select" class="" style="flex: 1;" placeholder="请输入或扫描单号"
						 placeholder-style="font-size:20rpx"
						 v-model="orderId" />
					</view>
				</view>
				
				<view class="u-f  " style="width: 50%;">
					<view class="u-f  pl-1 justify-center align-center" style="">
						<u-action-sheet :list="listshowWH" v-model="showWH" @click="actionSheetCallbackshowWH"></u-action-sheet>

						<u-input  input-align="center" class="rounded-half " style=" height: 100%;background-color: #fff;text-align: center;" @click="showWH = true" v-model="newPick.warehouse"
						 placeholderStyle="color:#999;text-align: center;" placeholder="检索状态" type="select" />
					
						<u-icon  @click="openScan" name="../../static/img/querybtn.png" 
						style="margin-right: 30rpx; overflow: auto;" color="#6DBA52" size="68"></u-icon> 
				

					</view>
					
				</view>
			</view>

			<!-- 1end -->

		</view>

		<view style="background-color: #eee;" class="flex-1 ">
			<view class=" bg-white m-2 px-3 rounded-half py-3" style="">
				<block class="">

					<view class=" flex justify-center font-lg font-weight-bold ">YB26456456</view>

					<view class="fontSizeMy pr-1 rounded-lg">
						<!-- 1 -->
						<view class="flex justify-between">
							<view class="">
								<text style="color: #999;">客户代码：</text>
								<text style="font-weight: bold;">test</text>
							</view>
							<view class="" style="width: 200rpx">
								<text style="color: #999;">重 量：</text>
								<text style="font-weight: bold;width: 100rpx;">21kg</text>
							</view>
						</view>
						<!-- 2 -->
						<view class="flex justify-between">
							<view class="">
								<text style="color: #999;">创建时间：</text>
								<text style="font-weight: bold;">2020-02-06 17:19:09</text>
							</view>
							<view class="" style="width: 200rpx">
								<text style="color: #999;">体 积：</text>
								<text style="font-weight: bold;width: 100rpx;">2*12</text>
							</view>

						</view>
						<!-- 3 -->
						<view class="flex justify-between">
							<view class="">
								<text style="color: #999;">总票数：</text>
								<text style="font-weight: bold;">3</text>
							</view>
							<view class="" style="width: 200rpx">
								<text style="color: #999;">异常票数：</text>
								<text style="font-weight: bold;width: 100rpx;" class="text-red">2</text>
							</view>
						</view>

					</view>

				</block>
			</view>

			<!-- c2 -->
			<view class=" bg-white m-2 px-3 rounded-half py-3" style="">
				<block class="" v-for="(item,index) in orederList" :key="index">

					<view class="fontSizeMy pr-1">
						<!-- 1 -->
						<view class="flex justify-between">
							<view class="">
								<text style="color: #999;">单号：</text>
								<text style="font-weight: bold;">{{item.orderId}}</text>
							</view>
							<view @click="deleteOrder(index)" class="rounded-half bg-primary text-white px-3">
							
									
								<text @click="open">删 除</text>
							</view>
						</view>
						<!-- 2 -->
						<view class="flex justify-between">
							<view  style="">
								<text style="color: #999;">扫描结果:</text>
								<text style="font-weight: bold;">{{item.result}}</text>
							</view>
							<view class="text-ellipsis ">
								<text style="color: #999;">扫描时间：</text>
								<text style="font-weight: bold;">{{item.scanTime}}</text>
							</view>
						</view>

					</view>


					<view class="m-3" style="height: 2rpx; background-color: #eee;"></view>

				</block>
			</view>
			<!-- c2end -->
		</view>

				<view  @click.self="show = false" class="position-fixed   w-100 bg-modal-black-5 flex justify-center align-center" style="z-index: 10;height: 100%;"  v-if="show ">
					<view class="bg-white    border rounded-20 p-3" style="width: 70%; border-color: #5AB43D;">
												
											
						<u-input @click="showSheet" v-model="probType" type="select"  placeholder="请选择问题类型" />
									
															
						<textarea value="" style="height: 160rpx; " placeholder="请输入原因" />
						
						<!-- botton --> 
						<view class="flex w-100   bottom-0 justify-between">
							<view  style="">
								<view @click="show = false" class="rounded-half border px-2" style="border-color: #5AB43D;"> 确认删除</view>
							</view>
							<view class="text-ellipsis">
										<view class="rounded-half border px-2" style="border-color: #5AB43D;"> 放弃删除</view>
							</view>
						</view>
					</view>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderId:'',
				probType:'',
				show: false,
								content: `
									空山新雨后<br>
									天气晚来秋
								`
							,
				orederList: [
					{
					orderId: '2313',
					result: '正常',
					scanTime: '2020-02-05 17:19:09'
				},
				{
					orderId: '3453453',
					result: '不存在',
					scanTime: '2020-02-26 17:19:09'
				},
				{
					orderId: '1231',
					result: '重复',
					scanTime: '2020-02-16 17:19:09'
				},
				
				],
				list: [{
						orderId: '765765',
						code: 'test',
						pickStatus: '完成',
						pickNum: '12',
						errNum: '2',
						alreadyCreateReport: '是',
						createdTime: '2020-02-06 17:19:09',
						isFinished: false

					},
					{
						orderId: '765765',
						code: 'test',
						pickStatus: '完成',
						pickNum: '12',
						errNum: '2',
						alreadyCreateReport: '是',
						createdTime: '2020-02-06 17:19:09',
						isFinished: false

					}
				],
				showWH: false,
				newPick: {
					client: '',
					address: '',
					time: '',
					warehouse: ''
				},
				listshowWH: [{
					text: '广州仓库',
					color: 'blue',
					fontSize: 28
				}, {
					text: '广州仓库2'
				}, {
					text: '广州仓库3'
				}],
				itemList: ['A', 'B', 'C'],
				
			}
		},
		methods: {
			showSheet(){												
				uni.showActionSheet({
					itemList: ['A', 'B', 'C'],
					success:  res => {
						this.probType = this.itemList[res.tapIndex]
						console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
					},
					fail: res => {
						console.log(res.errMsg);
					}
				});
			},
			open() {
							this.show = true;
													
													},
			deleteOrder(index){
				// uni.showModal({
				// 	content: '2',
				// 	success: function (res) {
				// 		if (res.confirm) {
				// 			console.log(index)
				// 		} else if (res.cancel) {
							
				// 		}
				// 	}
				// });
				
			},
			finish(index, type) {
				if (type) {
					this.list[index].isFinished = true
					return
				}

				this.list[index].isFinished = false
			},
			actionSheetCallbackshowWH(index) {
				this.newPick.warehouse = this.listshowWH[index].text

			}
		}
	}
</script>

<style scoped>
	

</style>
