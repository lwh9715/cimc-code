<template>
	<view>
		<view>
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration"
				class='swiper'>
				<swiper-item v-for="(item,index) in imgUrls" :key="index">
					<image :src="item.img" class="slide-image" width="355" height="150" mode="aspectFit" />
				</swiper-item>
			</swiper>
		</view>

		<!-- 登录 -->
		<view class="header">
			<view>
				<image :src="userInfo.avatar" class="img-item" @click="toLogin()"></image>
			</view>
			<view>
				<text class="title">{{ userInfo.nickname }}</text>
				<text class="description">创 · 造 · 新价值</text>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		/**
		 * 页面的初始数据
		 */
		data() {
			return {
				imgUrls: [{
					name: "海运",
					img: 'http://8.129.68.2:8989/so/res/static/img/banner/6.jpg',

				}, {
					name: "空运",
					img: 'http://8.129.68.2:8989/so/res/static/img/banner/banner1.jpg'
				}, {
					name: "铁路",
					img: 'http://8.129.68.2:8989/so/res/static/img/banner/banner2.jpg'
				}],
				indicatorDots: false,
				autoplay: true,
				interval: 5000,
				duration: 500,
				userInfo: {
					avatar: "../../static/cmic.png",
					nickname: "中集世倡"
				}
			};

		},
		methods: {
			// toLogin() {
			// 	uni.navigateTo({
			// 		url: '/pages/login/login',
			// 		success: function(e) {
			// 			uni.removeStorageSync("userInfo")
			// 			uni.removeStorageSync("accessToken")
			// 		},
			// 		fail: (res) => {
			// 			console.log(res) //打印错误信息
			// 		}
			// 	});
			// }
		},
		onShow() {
			// if (uni.getStorageSync("userInfo") != '') {
			// 	this.userInfo = uni.getStorageSync("userInfo")
			// } else {
			// 	uni.navigateTo({
			// 		url: '/pages/login/login',
			// 		fail: (res) => {
			// 			console.log(res) //打印错误信息
			// 		}
			// 	});
			// }
		}
	}
</script>

<style>
	.swiper {
		height: 420rpx;
	}

	.swiper image {
		height: 100%;
		width: 100%;
	}

	.header {
		display: flex;
		padding: 40rpx 30rpx 20rpx;
	}

	.title {
		display: block;
		font-size: 50rpx;
	}

	.description {
		display: block;
		margin-top: 30rpx;
		color: #888;
		font-size: 28rpx;
	}

	.img-item {
		width: 120rpx;
		height: 120rpx;
		border-radius: 50%;
		margin-top: 12rpx;
		margin-right: 30rpx;
	}

	.board {
		overflow: hidden;
	}

	.board-item {
		display: flex;
		cursor: pointer;
		margin-top: 10rpx;
		padding: 30rpx;
		background-color: #FBF9FE;
	}

	.board-item text {
		flex: 1;
		width: 40rpx;
		height: 40rpx;
	}

	.board-item image {
		width: 40rpx;
		height: 40rpx;
	}
</style>
