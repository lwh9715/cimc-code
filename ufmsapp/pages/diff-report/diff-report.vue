<template>		
		<view style="background: #eee;height: 100%;">
				<view class="">
					<view style="background: #6DBA52;
								height: 240rpx" class="">
			
					</view>
					
					<view class="card">
					<view class="">
						<view class="flex justify-center font-lg">orderId4567855</view>
						
						<view class="flex justify-between">
							<view class="">
								<text class="font-md mr-1">客户名称 </text> Othre-in
							</view>
							<view class="">
								<text class="font-md mr-1">重量 </text> 80Kg
							</view>
						</view>
						
						<view class="flex justify-between">
							<view class="">
								<text class="font-md mr-1">总票数 </text> 22
							</view>
							<view class="">
								<text class="font-md mr-1">体积 </text> 80cmb
							</view>
						</view>
						
						<view class="">
							<text class="font-md mr-1">创建时间 </text> 2020-60-56 19:20:12
						</view>
						
					
						<view class="">
							<text class="font-md mr-1">送货仓库 </text> 总票数总票数总票数总票数总票数总票数总票数总票数总票数总票数总票数总票数总票数
						</view>
						
					</view>
					
					<!-- button -->
					<view class=" flex  justify-between py-2" style="width: 70%; margin: 0 auto;">
						<view class="bg-primary rounded-half px-2 text-white" >
							<text>正常状态</text> <text class="ml-1" >(222)</text>
						</view>
					<view class="bg-primary rounded-half px-2 text-white">
							<text>异常状态</text> <text class=" text-red ml-1">(222)</text>
						</view>
					</view>									
					</view> 
			
				
				</view>
				
			<view class="m-3">
				
				              
				                    <picker class="rounded" @change="bindPickerChange" :value="index" :range="array">
				                        <view class="uni-input">{{array[index]}}</view>
				                    </picker>
				        
						
			</view>
				
				<!-- 底部 -->
				<view class=" position-fixed bottom-0 w-100">
						<view class="bg-primary rounded px-2 text-white w-50 text-center mx0-auto font-md" style="height: 80rpx;line-height: 80rpx;">
							<text>生成差异报告</text> 
						</view>
				</view>
		</view>
		</view>
	
		
		
		
		
		
	
</template>

<script>
	import mainLayout from '../../components/my-components/main-layout.vue'
	export default {
		components:{ 
			mainLayout
		},
		data() {
			return {
				 array: ['中国', '美国', '巴西', '日本'],
				            index: 0,
			}
		},
		methods: {
			 bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
		}
	}
</script>

<style scoped lang="scss">
	page {
		height: 100%;
	}
	.card {
		height: 30%;
		background: #fff;
		margin: 0 20rpx;
		position: relative;
		border-radius: 30rpx;
		top: -140rpx;
		padding: 20rpx;
	}
</style>
