<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');

			// 监听网络
			let func = (res) => {
				console.log(res)
				if (res.networkType === 'none') {
					uni.showToast({
						title: '当前处于断网状态,请先连接',
						icon: 'none'
					});
				} else {
					// uni.showToast({
					// 	title: '已连接，当前网络环境为：'+res.networkType,
					// 	icon: 'none'
					// });
				}
			}
			uni.getNetworkType({
				success: func
			});
			uni.onNetworkStatusChange(func);
			// 检测更新
			// #ifdef APP-PLUS
			this.$U.update()
			// #endif


		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hid2e');
		}
	};
</script>

<style lang="scss">
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}

	@import "uview-ui/index.scss";

	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
	/*每个页面公共css */
	/* 官方ui库 */
	@import "/common/uni.css";
	/* 第三方动画库 */
	@import "/common/animate.css";
	/* 自定义图标库 */
	@import "/common/icon.css";
	/* UI基础库 */
	@import "/common/zcm-main.css";
	/* 公共样式 */
	@import "/common/common.css";
	@import url("/common/iconfont.css");
	@import "/common/free.css";
</style>
