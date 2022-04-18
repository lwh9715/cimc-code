<template>
	<view class="" style="height: 100%;" >
		<view class="position-fixed top-0 bottom-0 left-0 right-0 m-3 ">
			<view class="bg-white rounded-20  p-3" >
				<block class="" v-for="(item,index) in list"  :key="index">
					
					<view class="fontSizeMy pr-1" >
						<!-- 1 -->
						<view class="flex justify-between">
							<view class="" >
								<text style="color: #999;">交付单号：</text>
								<text style="font-weight: bold;">{{item.orderId}}</text>
							</view>
							
						</view>
						<!-- 2 -->
						<view class="flex justify-between">
							<view class="">
								<text style="color: #999;">交付状态：</text>
								<text style="font-weight: bold;">{{item.pickStatus}}</text>
							</view>
							<view class="">
								<text style="color: #999;">客户代码：</text>
								<text style="font-weight: bold;">{{item.code}}</text>
							</view>
							
						</view>
						<view class="flex justify-between">
							
							<view class="">
								<text style="color: #999;">交付票数：</text>
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
								<text style="color: #999;">创建时间：</text>
								<text style="font-weight: bold;">{{item.createdTime}}</text>
							</view>
							<view class="">
								<view class="flex justify-end align-end flex-1">
									<navigator hover-class="none" url="../pick-detail/pick-detail">
									<view class="" style="line-height: 58rpx; height: 58rpx; color:#5AB43F; text-align: center;padding: 0 10rpx;">
										<text>查看明细</text> >
									</view>
										</navigator>
								</view>
							</view>
							
						</view>
					
					
					</view>
					
					
					<view class="m-3" style="height: 2rpx; background-color: #eee;"></view>
					
				</block>
			</view>
			
			
			
			2
		</view>
		
		<!-- bg -->
		<view style="height: 100%;">
			<view class="bg-primary" style="height: 20%;"></view>
			<view class="bg-modal-black-2" style="height: 80%;"></view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
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
		methods: {
			
		}
	}
</script>

<style>

</style>
