<template>
	<view>
		<view class="status_bar">

		</view>
		<!-- 这里是状态栏 -->


		<view class="wrap" style="margin: 130rpx 50rpx;">
			<u-grid :col="2" :border="false" style="font-weight: bold;">
				<u-grid-item>
					<navigator hover-class="none" url="../new-order/new-order">
						<u-icon name="../../static/img/new.png" :size="130"></u-icon>
						<view class="grid-text">新建提货</view>
					</navigator>
				</u-grid-item>
				<u-grid-item>
					<navigator hover-class="none" url="../pickup-order/pickup-order">
						<u-icon name="../../static/img/submit.png" :size="130"></u-icon>
						<view class="grid-text">提货总单</view>
					</navigator>

				</u-grid-item>
				<u-grid-item>
					<navigator hover-class="none" url="../submitList/submitList">
						<u-icon name="../../static/img/jiaofuzongdan.png" :size="130"></u-icon>
						<view class="grid-text">交付总单</view>
					</navigator>
				</u-grid-item>
				<u-grid-item>
					<navigator hover-class="none" url="../unsubmitList/unsubmitList">
						<u-icon name="../../static/img/weijiaofu.png" :size="130"></u-icon>
						<view class="grid-text">未交付明细</view>
					</navigator>
				</u-grid-item>
				<u-grid-item>
					<u-icon name="../../static/img/manage.png" :size="130"></u-icon>
					<view class="grid-text">差异管理</view>
				</u-grid-item>
				<u-grid-item @click="notAvail">
					<u-icon name="../../static/img/ship.png" :size="130"></u-icon>
					<view class="grid-text">海外收货管理</view>
				</u-grid-item>
				<u-grid-item>
					<navigator hover-class="none" url="../fbx/fbx">
						<u-icon name="../../static/img/weijiaofu.png" :size="130"></u-icon>
						<view class="grid-text">FBX拆包</view>
					</navigator> 
				</u-grid-item>
			</u-grid>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			notAvail() {
				uni.showToast({
					title: "该功能暂未开通",
					icon: 'none'
				})
			},
			openLogin() {

				uni.navigateTo({
					url: '../login/login',
				});

			},
		}
	}
</script>

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	.wrap {
		padding: 24rpx;
	}

	.u-row {
		margin: 40rpx 0;
	}

	.demo-layout {
		height: 80rpx;
		border-radius: 8rpx;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}
</style>
