<template>
	<view class="card-conent">
		<view class="" style="text-align: center;">
			<image style="width: 200px; height: 200px; background-color: #eeeeee;" :src="src"></image>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				src: '../../static/icon/404.png'
			}
		},
		created() {},
		methods: {}

	}
</script>

<style>
	.card-conent {
		height: calc(100vh);
		display: grid;
		align-items: center;
		background-repeat: no-repeat;
		background-size: contain;
		overflow-y: auto;
	}
</style>
