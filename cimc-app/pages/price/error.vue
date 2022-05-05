<template>
	<view class="error-content">
	</view>
</template>


<script>
	export default {
		data() {
			return {}
		},
		created() {},
		methods: {}

	}
</script>

<style>
	.error-content {
		height: calc(100vh);
		background-image: url('../../static/img/404.png');
		background-repeat: no-repeat;
		/* 图片按比例显示，其余部分为其他颜色 */
		background-size: contain;
	}
</style>
