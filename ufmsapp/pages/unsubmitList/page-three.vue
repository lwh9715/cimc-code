<template>
	<view>
		<view class="pagenation flex justify-center">
			<text @click="startEnd(1)" v-if="zpage > 3">首页</text>

			<block v-for="(i,index) in arr" :key="index">
				<text @click="page(i,index+1)" :class="{'activeColor' : index+1 === current}">{{i}}</text>
			</block>

			<text @click="startEnd(2)" v-if="zpage > 3">尾页</text>
			<view class=" flex justify-center">
				
				
				<picker v-if="zpage > 3" class="" mode="selector"  :range="selector" @change="changePage">
					<view class="flex  justify-center" style="text-align: center;
				border: 1rpx solid #6DBA52;
				padding: 0 5rpx;
				margin: 0 10rpx;
				width: 140rpx;
				background-color: #eee;
				border-radius: 16rpx;">
						<text  class="" style="margin-right: 10rpx;">{{curentPage}}/{{zpage}}</text>
						<text class="">跳页</text>
					</view>
				</picker>
			
			</view>
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
				show: false,
				selector: [],
				curentPage: 1,
				arr: [],
				current: 1,
				same: 0,
				zpage: 0,
				
			}
		},
		created() {

			var size = 3
			this.zpage = this.total / size
			this.zpage = Math.ceil(this.zpage)
			console.log(Math.ceil(this.zpage))
			if (this.zpage >= 3) {
				this.arr = [1, 2, 3]
			} else {
				for (var i = 1; i < this.zpage + 1; i++) {
					this.arr.push(i)
				}
			}
			
			for (var i = 0; i < this.zpage; i++) {
				this.selector.push(i+1)
			}

		},
		
		methods: {
			changePage(e){
			
				this.$emit('getPage',e.detail.value+1)
				let cpage = e.detail.value+1
				this.curentPage = cpage
				if(cpage == 1){
					this.arr = [1,2,3]
					this.current = 1
					return
				}
				if(cpage == 2){
				
					this.arr = [1,2,3]
					this.current = 2
					return
				}
				if(cpage == this.zpage){
					this.arr = [cpage-2,cpage-1,cpage]
					this.current = 3
					return
				}
				if(cpage == (this.zpage - 1)){
					console.log(cpage)
					this.arr = [cpage-1,cpage,cpage+1]
					this.current = 2
					return
				}
				
				this.current = 2
				this.arr = [ cpage - 1, cpage, cpage + 1]
			},
			page(e, index) {
				this.curentPage = e
				// 防抖
				if (e === this.same) {
					return
				}
				this.$emit('getPage',e)
				this.same = e
				console.log(e)
				// 小于3条的情况
				if (this.zpage < 3) {
					this.current = index
					return
				}

				// 负责前3 index
				if (index < 2) {
					if ((e - 1) < 1) {
						console.log((e - 1) == 1)
						this.current = e

						this.arr = [1, 2, 3]
						return
					}
					this.arr = [ e - 1, e, e + 1]
					return
				}
				this.current = index



				// 负责最后行
				if (e + 2 > this.zpage) {
					// 点击的页面等于最后页的话
					this.current = (e + 1) == this.zpage ? 2 : 3

					this.arr = [ this.zpage - 2, this.zpage - 1, this.zpage]

					return
				}
				// 负责后3 index
				if (index > 1) {

					this.arr = [ e - 1, e, e + 1]
					this.current = 2
				}




			},
			startEnd(type) {
				switch (type) {
					case 1:
						// 首页
							this.$emit('getPage',1)
						this.current = 1
						if (this.zpage >= 3) {
							this.arr = [1, 2, 3]
						} else {
							for (var i = 1; i < this.zpage + 1; i++) {
								this.arr.push(i)
							}
						}
						break;
					case 2:
						// 尾页
							this.$emit('getPage',this.zpage)
						
						this.current = this.arr.length

						if (this.zpage >= 3) {
							this.arr = [ this.zpage - 2, this.zpage - 1, this.zpage]
						} else {
							for (var i = this.zpage; i < 0; i--) {
								this.arr.push(i)
							}
						}
						break;

				}
			},

		}
	}
</script>

<style scoped>
	.activeColor {
		color: #fff;
		background-color: #6DBA52 !important;
	}
	 .btn {
		 text-align: center;
		 border: 1rpx solid #6DBA52;
		 padding: 0 5rpx;
		 margin: 0 10rpx;
		 width: 80rpx;
		 background-color: #eee;
		 border-radius: 16rpx;
	 }
	.pagenation>text {
		text-align: center;
		border: 1rpx solid #6DBA52;
		padding: 0 5rpx;
		margin: 0 10rpx;
		width: 80rpx;
		background-color: #eee;
		border-radius: 16rpx;

	}
</style>
