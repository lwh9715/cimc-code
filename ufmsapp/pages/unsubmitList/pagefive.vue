<template>
	<view >
	<view class="pagenation flex justify-center">
		<text @click="startEnd(1)" v-if="zpage > 5">首页</text>
	
		<block  v-for="(i,index) in arr" :key="index">
			<text @click="page(i,index+1)" :class="{'activeColor' : index+1 === current}" >{{i}}</text>
		</block>
		
		<text @click="startEnd(2)"  v-if="zpage > 5">尾页</text>
	</view>
	</view>
</template>

<script>
	export default {
		props:{
			total:Number
		},
		data() {
			return {
				
				arr:[],
				current:1,
				same:0,
				zpage:0,
				
			}
		},
		created() {
			
			var size = 3
			this.zpage = this.total / size 
			this.zpage = Math.ceil(this.zpage)
			console.log(Math.ceil(this.zpage))
			if(this.zpage >= 5){
				this.arr =  [1,2,3,4,5]
			}else {
				for (var i = 1; i < this.zpage+1; i++) {
					this.arr.push(i)
				}									
			}
			
		},
		methods: {
			page(e,index){
				
				if(e === this.same){
					return
				}
				this.same = e
					this.$emit('getPage',e)
				// 小于五条的情况
				if(this.zpage < 5){
						this.current = index
						return
				}
				
				// 负责前3 index
				if(index < 3){
					if((e - 2) < 1){
						console.log((e - 1) == 1)
						this.current = e
						
							this.arr = [1,2,3,4,5]
						return
					}
						this.arr = [e-2, e-1 ,e ,e+1 ,e+2]
					return
				}
				this.current = index
				
			
				
				 // 最后执行
				if(e + 2 > this.zpage){
			
				this.current = (e + 1) == this.zpage ? 4 : 5
				
					this.arr = [this.zpage-4, this.zpage-3 ,this.zpage-2 ,this.zpage-1 ,this.zpage]
					
					return
				}
				// 负责后3 index
				if(index  > 2){
					
					this.arr = [e-2, e-1 ,e ,e+1 ,e+2]
					this.current = 3
				}
				
					
				
				
			},
			startEnd(type){
				switch (type){
					case 1:  
					// 首页
					this.$emit('getPage',1)
					this.current = 1
						if(this.zpage >= 5){
							this.arr =  [1,2,3,4,5]
						}else {
							for (var i = 1; i < this.zpage+1; i++) {
								this.arr.push(i)
							}									
						}
						break;
					case 2:
					// 尾页
						this.$emit('getPage',this.zpage)
						this.current = this.arr.length
						
						if(this.zpage >= 5){
							this.arr = [this.zpage-4, this.zpage-3 ,this.zpage-2 ,this.zpage-1 ,this.zpage]
						}else {
							for (var i = this.zpage; i < 0; i--) {
								this.arr.push(i)
							}									
						}
						break;
					
				}
			},
			// next(type){
			// 	let c = this.current
			// 	let index = this.arr[c]
			// 	let flag = this.current + 3 > this.tpage
			// 	if(flag){
			// 		if(c  > this.tpage - 1){
			// 			return
			// 		}
			// 		this.current ++
			// 		return
			// 	}
				
			// 	if(type == '+' && c <= 20){
					
			// 		this.current++
					
			// 		if(index >= 3){
						
			// 			return this.current = 3
			// 		}
			// 	}
			// 	if(type == '-' && c > 1){
			// 		this.current--
			// 	}
			// }
		}
	}
</script>

<style scoped>
	.activeColor {
		color: #fff;
		background-color: #6DBA52!important;
	}
.pagenation>text{
	text-align: center;
	border: 1rpx solid #6DBA52;
	padding: 0 5rpx;
	margin:  0 10rpx;
	width: 80rpx;
	background-color: #eee;
	border-radius: 16rpx;
	
}
</style>
