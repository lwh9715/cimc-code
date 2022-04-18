<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="" style="margin: 100rpx;margin-top: 220rpx;">
			<view class="" style="border-bottom: 1rpx solid #eee;">
				<text>URL</text>
				<u-input v-model="form.url" />
			</view>


			<button @click="confirmConfig"
				style="margin-top: 80rpx; width: 60%; background-color: #6DBA52; border-radius: 66rpx;"
				type="primary">确认</button>


		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					url: 'http://120.77.239.151/so'
				},
				value: false,
				isLogin: false
			}
		},
		computed: {
			i18n() {
				return this.$t('login')
			}
		},
		// onBackPress(options) {
		// 	if (this.isLogin) {
		// 		return false
		// 	}
		// 	return true
		// },
		created() {
			let url = this.$U.getStorage('url')
			if (url) {
				this.form.url = url
			}
			console.log(url + '----------------')
		},
		methods: {
			confirmConfig() {
				console.log(this.form.url)
				if (!this.form.url) {
					uni.showToast({
						title: "不能为空",
						icon: 'none'
					})
					return
				}
				this.$U.setStorage('url', this.form.url);

				uni.navigateTo({
					url: "/pages/index/index"

				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.changeBtn {
		line-height: 60rpx;
		height: 60rpx;
		width: 140rpx;
		position: absolute;
		right: 5%;
		bottom: 37%;
		background-color: rgb(109, 186, 82);
	}
</style>
