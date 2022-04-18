<template>
	<view>
		<web-view :webview-styles="webviewStyles" src="http://120.77.239.151/so/"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
			isLogin: false
		},
		onLoad(e) {
			// this.$on('changeLogin',()=>{
			// 	this.isLogin = true
			// })
			// console.log(e) 
			// if(!this.isLogin){
			// 	this.isLogin = true
			// 	console.log(e) 
			// 	uni.navigateTo({
			// 		url: '../login/login',
			// 	});
			// }s

			console.log('fff', this.$U.getStorage('user'))
		},
		methods: {

		}
	}
</script>

<style>

</style>
