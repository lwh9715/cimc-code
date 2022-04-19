<template>
	<view style="height: 100%;">
		<main-layout>
			<view class="" style="overflow: auto;height: 1000rpx; ">
				<block class="" v-for="(item,index) in list"  :key="index"> 
					
					<view class="fontSizeMy pr-1" >
						<!-- 1 -->
						<view class="flex justify-between">
							<view class="" >
								<text style="color: #999;">提货单号：</text>
								<text style="font-weight: bold;">{{item.orderId}}</text>
							</view>
							<view class="">
								<text style="color: #999;">客户代码：</text>
								<text style="font-weight: bold;">{{item.code}}</text>
							</view>
						</view>
						<!-- 2 -->
						<view class="flex justify-between">
							<view class="">
								<text style="color: #999;">提货状态：</text>
								<text style="font-weight: bold;">{{item.pickStatus}}</text>
							</view>
							<view class="">
								<text style="color: #999;">提货票数：</text>
								<text style="font-weight: bold;">{{item.pickNum}}</text>
							</view>
							<view class="">
								<text style="color: #999;">异常票数：</text>
								<text style="font-weight: bold; color: red;">{{item.errNum}}</text>
							</view>
						</view>
						<!-- 3 -->
						<view class="flex justify-between">
							<view class="">
								<text style="color: #999;">已生成差异报告：</text>
								<text style="font-weight: bold;">{{item.alreadyCreateReport}}</text>
							</view>
							<view class="">
								<text style="color: #999;">创建手机：</text>
								<text style="font-weight: bold;">{{item.createdTime}}</text>
							</view>
						</view>
						<!-- 4 -->
						<view class="flex mt-1">
							<view class=" " style="height: 140rpx;width: 70%;">
								<view v-if="!item.isFinished" class="flex  justify-between mb-2">
									<view @click="finish(index,true,'是否确认完成（'+item.orderId+'）提货单')" class="" style="line-height: 58rpx; height: 58rpx; border-radius: 8rpx; border: 1rpx solid #5AB43F; text-align: center;padding: 0 10rpx;">
										<text>完成</text>
									</view>
									<navigator url="../new-order/new-order" hover-class="none">
										<view class="" style="line-height: 58rpx; height: 58rpx; border-radius: 8rpx; border: 1rpx solid #5AB43F; text-align: center;padding: 0 10rpx;">
											<text>总单编辑</text>
										</view>
									</navigator>
									<navigator url="../new-order/scan-order">
										<view class="" style="line-height: 58rpx; height: 58rpx; border-radius: 8rpx; border: 1rpx solid #5AB43F; text-align: center;padding: 0 10rpx;">
											<text>继续提货</text>
										</view>
									</navigator>
								</view>
								
								<view v-if="item.isFinished" class="flex  justify-between">
									<view @click="finish(index,false,'是否撤销（'+item.orderId+'）提货单')" class="" style="line-height: 58rpx; height: 58rpx; border-radius: 8rpx; border: 1rpx solid #5AB43F; text-align: center;padding: 0 10rpx;">
										<text>撤销完成</text>
									</view>	
								
									<view @click="finish(index,item.alreadyCreateReport === '是' ? '重新生成差异报告':'生成差异报告' ,'是否重新生成（'+item.orderId+'）差异报告')"  class="" style="line-height: 58rpx; height: 58rpx; border-radius: 8rpx; border: 1rpx solid #5AB43F; text-align: center;padding: 0 10rpx;">
										<text>{{item.alreadyCreateReport === '是' ? '重新生成差异报告':'生成差异报告'}}</text>
									</view>
									
								</view>
									
							</view>
							
							<view class="flex justify-end align-end flex-1">
								<navigator hover-class="none" url="../pick-detail/pick-detail">
								<view class="" style="line-height: 58rpx; height: 58rpx; color:#5AB43F; text-align: center;padding: 0 10rpx;">
									<text>查看明细</text> >
								</view>
									</navigator>
							</view>
						</view>
					</view>
					
					
					<view class="m-3" style="height: 2rpx; background-color: #eee;"></view>
					
				</block>
			</view>
			
		
		</main-layout>
	
		
	</view>
</template>

<script> 
	import mainLayout from '../../uview-ui/my-component/main-layout.vue'
	export default {
		components:{ 
			mainLayout
		},
		data() {
		
			return {
				list:[
					{
						orderId:'765765',
						code:'test',
						pickStatus:'完成',
						pickNum:'12',
						errNum:'2',
						alreadyCreateReport:'是',
						createdTime:'2020-02-06 17:19:09',
						isFinished:false
						
					},
					{
						orderId:'3424312424',
						code:'test',
						pickStatus:'完成',
						pickNum:'12',
						errNum:'2',
						alreadyCreateReport:'否',
						createdTime:'2020-01-06 17:19:09',
						isFinished:true
						
					},{
						orderId:'8656765546',
						code:'test',
						pickStatus:'完成',
						pickNum:'12',
						errNum:'2',
						alreadyCreateReport:'是',
						createdTime:'2020-06-06 17:19:09',
						isFinished:true
						
					},
					{
						orderId:'432564754634',
						code:'test',
						pickStatus:'完成',
						pickNum:'12',
						errNum:'2',
						alreadyCreateReport:'是',
						createdTime:'2020-04-06 17:19:09',
						isFinished:true
					}
				]
			}
		},
		computed: {
			
		},
		
		methods: {
		finish(index,type,msg){
			console.log(msg)
			console.log(type)
			 if (type == '重新生成差异报告'){
				uni.showModal({
					content: msg,
					success:  (res)=> {
						if (res.confirm) {
							this.list[index].isFinished = true
							return
						} else if (res.cancel) {
							
						}
					}
				});
			}
			 if (type == '生成差异报告'){
				console.log(2)
				uni.navigateTo({
					url: '../diff-report/diff-report',
				
				});
			}
			if(type){
			uni.showModal({
				content: msg,
				success:  (res)=> {
					if (res.confirm) {
						this.list[index].isFinished = true
						return
					} else if (res.cancel) {
						
					}
				}
			});
				
			}
			
			this.list[index].isFinished = false
		}
		}
	}
</script>

<style scoped lang="scss">
	@import '/common/free.css';
	.fontSizeMy text{
		font-size: 26rpx;
	}
</style>
