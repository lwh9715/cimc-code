<template>
	<view class="Logincontent">
		<view class="header">
			<image src="../../static/login.png" mode=""></image>
		</view>
		<view class="input_group">
			<view class="list">
				账号：
				<view class="icon iconfontL icon-avatar" />
				<input type="text" v-model="formData.account" placeholder="请输入账号" />
			</view>
			<view class="divider" />
			<view class="list">
				密码：
				<view class="icon iconfontL icon-phone" />
				<input type="password" v-model="formData.password" placeholder="请输入密码" />
			</view>
			<view class="divider" />
		</view>

		<view class="btn">
			<button type="default" @click="onLogin()">立即登录</button>
			<button type="default" style="background-color: #555555;" @click="onRegister()">注册</button>
		</view>

		<view class="time-class">{{ countdown }}</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				countdown: "",
				formData: {
					account: "",
					nickname: "运价系统",
					password: "",
					avatar: "https://relax-dev.oss-cn-shanghai.aliyuncs.com/relax/202203/20220324173831555.png"
				}
			}
		},
		methods: {
			onLogin: async function() {
				if (this.formData.account == "" || this.formData.password.trim().length <= 0) {
					uni.showToast({
						icon: 'none',
						title: '账号错误/密码为空'
					})
					return false
				}
				let res = await this.$Tools.Axios({
					url: this.$api.login,
					data: this.formData,
					method: 'POST'
				});
				if (res.result) {
					// 缓存信息
					try {
						uni.setStorageSync('accessToken', `${res.data}`); // token
						let user = await this.$Tools.Axios({
							url: this.$api.user_info,
							method: 'POST'
						});
						uni.setStorageSync('userInfo', user.data) // user信息
						uni.switchTab({
							url: '/pages/home/index',
							success: function(e) {
								var page = getCurrentPages().pop();
								if (page == undefined || page == null) return;
								page.onShow();
							},
							fail: (res) => {
								console.log(res) //打印错误信息
							}
						});
					} catch (e) {
						// error
					}
				} else {
					uni.showToast({
						icon: 'none',
						title: `${res.message}`
					})
				}
			},
			onRegister: async function() {
				if (this.formData.account == "" || this.formData.password.trim().length <= 0) {
					uni.showToast({
						icon: 'none',
						title: '账号/密码必填'
					})
					return false
				}
				let res = await this.$Tools.Axios({
					url: this.$api.user_register,
					data: this.formData,
					method: 'POST'
				});
				if (res.result) {
					this.formData = {}
					uni.showToast({
						icon: 'succee',
						title: `注册账号成功`
					})
				} else {
					uni.showToast({
						icon: 'error',
						title: `${res.message}`
					})
				}
			},
			initCountdown() {
				const end = Date.parse(new Date('2023-01-01 00:00:00'))
				const now = Date.parse(new Date())
				const msec = end - now
				let day = parseInt(msec / 1000 / 60 / 60 / 24)
				let hr = parseInt((msec / 1000 / 60 / 60) % 24)
				let min = parseInt((msec / 1000 / 60) % 60)
				let sec = parseInt((msec / 1000) % 60)

				this.countdown =
					'2022年余' + day + '天' + hr + '时' + min + '分' + sec + '秒'

				setTimeout(() => {
					if (msec < 0) return
					this.initCountdown()
				}, 1000)
			}
		},
		created() {
			this.initCountdown()
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/style/login/login.scss'
</style>
