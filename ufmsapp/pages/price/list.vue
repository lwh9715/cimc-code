<template>
	<view class="flex flex-column " style="height: 100%;">
		<view class="bg-secondary flex-1">
			<block class="" v-for="(item,index) in pricelist" :key="index" v-if="pricelist.length > 0 && isread">
				<view class=" bg-white m-1 px-2 rounded-half py-2 font-sm" v-watermark="watermarkConfig">
					<view class="flex justify-center font-md" style="justify-content: space-between;">
						<b class="text-green">{{item.pol}}</b>
						<text>
							<u-icon name="../../static/icon/right_arrow.png" :size="55" />
						</text>
						<b class="text-green">{{item.pod}}</b>
						<text style="">
							<button type="primary" size="mini" @click="submitBook(item)">订舱</button>
						</text>
					</view>
					<view style="border-bottom: 1px solid #e5e5e5;margin-bottom: 10rpx;" />
					<view class="fontSizeMy pr-1 rounded-s" @click="checkDetail(item)">
						<view class="flex justify-between">
							<view class="" style="width: 40%;">
								<text class="text-gray font-sm">运价类型：</text>
								<text class="font-weight-bold text-red font-sm">
									<b class="text-red">
										{{item.pricetype == ('' || null) ? '--' : item.pricetype }}
										<text v-if="item.ispush">
											<u-icon name="../../static/icon/flag.png" :size="25" />
											{{ item.ispush == true ? '[主推]' : '' }}
										</text>
									</b>
								</text>
							</view>
							<view class="" style="width: 60%;">
								<text class="text-gray font-sm">运价：</text>
								<text class="font-weight-bold text-red font-sm">
									<b class="text-green">
										{{ item.bargecurrency }}
									</b>
									&nbsp;&nbsp;{{item.cost20}}/{{item.cost40gp}}/{{item.cost40hq}}/{{item.cost45hq}}
								</text>
							</view>
						</view>
						<view class="flex justify-between">
							<view class="">
								<text class="text-gray font-sm">有效期：</text>
								<text v-if="item.typestart != ''">
									({{ startType(item.typestart) }})
								</text>
								<text class="font-weight-bold text-primary font-sm">
									{{ timeFormat(item.datefm) }} ~ {{ timeFormat(item.dateto) }}
								</text>
							</view>
						</view>
						<view class="flex justify-between">
							<view class="" style="width: 40%;">
								<text class="text-gray font-sm">FreeTime：</text>
								<text class="text-red">
									<b>
										{{ item.freetime == ('' || null) ? '--' : item.freetime }}
									</b>
								</text>
							</view>
							<view class="" style="width: 30%;">
								<text class="text-gray font-sm">截关：</text>
								<text class="font-weight-bold text-red" v-if="item.schedule">
									<b>{{ item.schedule == ('' || null) ? '--' : item.schedule}}</b>
								</text>
							</view>
							<view class="" style="width: 30%;">
								<text class="text-gray font-sm">航程：</text>
								<text class="font-weight-bold text-red" v-if="item.tt">
									<b>{{ item.tt }}天</b>
								</text>
							</view>
						</view>
						<view class="flex justify-between">
							<view class="" style="width: 40%;">
								<text class="text-gray font-sm">船公司：</text>
								<text><b>{{item.shipping}}</b></text>
							</view>
							<view class="" style="width: 30%;">
								<text class="text-gray font-sm">船期：</text>
								<text class="text-red">
									<b>{{ item.cls }}</b>
								</text>
							</view>
							<view class=""
								style="width: 30%;text-overflow: ellipsis;display:block;white-space: nowrap;overflow: hidden;">
								<text class="text-gray font-sm">船名：
									<text style="color: #000000;">
										<b>{{item.vessel}}</b>
									</text>
								</text>

							</view>
						</view>
						<view class="flex justify-between">
							<view class=""
								style="text-overflow: ellipsis;display:block;white-space: nowrap;overflow: hidden;width: 650rpx;">
								<text class="text-gray font-sm">备注：
									<text>{{item.remark_in}}</text>
								</text>
							</view>
						</view>
					</view>
				</view>
			</block>
			<block v-if="pricelist.length <= 0 && isread">
				<view class=" bg-white m-1 px-2 rounded-half py-2 font-sm">
					<view class="flex justify-center" style="justify-content: space-between;">
						没有查询到运价<br>
						我们会尽快更新运价!!!
						<text style="display: flex;align-items: center;">
							<button type="primary" size="mini" @click="backToNext()">询盘</button>
						</text>
					</view>
				</view>
			</block>
		</view>

	</view>
</template>

<script>
	import watermarkConfig from '../../common/free-lib/directives.js'
	export default {
		data() {
			return {
				isread: false,
				userInfo: {},
				datatemp: {},
				watermarkConfig: {
					text: '中集世倡0001',
					font: '12px 微软雅黑',
					textColor: '#dcdfe6',
					width: 220, //水印文字的水平间距
					height: 90, //水印文字的高度间距（低于文字高度会被替代）
					extRotate: -30 //-90到0， 负数值，不包含-90
				},
				pricelist: [],
				feelist: {},
			}
		},
		created() {
			let user = uni.getStorageSync("dd_user")
			if (user != "") {
				this.watermarkConfig.text = user.data.data.name + user.data.data.mobile.substring(7, 11)
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				uni.request({
					url: 'http://47.112.190.46/so/price?method=fcllist&pol=' + this.datatemp.pol + '&pod=' + this
						.datatemp.pod + '&crrier=' + this.datatemp.carrier + '&pricetype=' + 'FAK,NAC',
					method: 'GET',
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						this.isread = true
						setTimeout(function() {
							uni.hideLoading();
						}, 300);
						this.pricelist = res.data.data.splice(0, 20);

					},
					fail: res => {
						uni.showToast({
							title: '失败：' + res.message,
							icon: 'none'
						});
					}
				})
			} else {
				uni.reLaunch({
					url: '/pages/price/error'
				});
			}
		},
		methods: {
			backToNext: function() {
				uni.navigateBack({
					delta: 1
				})
			},
			submitBook: function(item) {
				uni.navigateTo({
					url: '/pages/price/booking?detail=' + encodeURIComponent(JSON.stringify(item)),
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			timeFormat: function(val) {
				let time = val.split('-')
				return time[0] + '/' + time[1] + '/' + time[2];
			},
			startType: function(val) {
				if (val == 'CLS') {
					return '大船截关'
				} else if (val == 'BETD') {
					return '大船截关'
				} else if (val == 'ETD') {
					return '大船 ETD'
				} else if (val == 'TDETD') {
					return '驳船 TDETD'
				} else if (val == 'ONBOARD') {
					return '驳船 ONBOARD'
				} else if (val == 'SOETD') {
					return 'SO ETD'
				} else if (val == 'GATE') {
					return 'GATE IN'
				} else {
					return ''
				}
			},
			checkDetail(val) {
				uni.navigateTo({
					url: '/pages/price/detail?detail=' + encodeURIComponent(JSON.stringify(val)),
					fail: (res) => {
						console.log(res) //打印错误信息
					}
				});
			},
			onLoad: function(option) {
				if (option.detail) {
					this.datatemp = JSON.parse(decodeURIComponent(option.detail));
					// uni.request({
					// 	url: 'http://8.129.68.2:8989/scp/edi/api?method=commonInterface&methodFlag=getFreightRate',
					// 	data: this.datatemp,
					// 	method: 'GET',
					// 	success: res => {
					// 	},
					// 	fail: res => {
					// 		uni.showToast({
					// 			title: '失败：' + res.message,
					// 			icon: 'none'
					// 		});
					// 	}
					// })
				} else {
					uni.showToast({
						title: '请输入起运港-目的港口查询',
						icon: 'none'
					});
					uni.navigateTo({
						url: '/pages/price/index',
						fail: (res) => {
							console.log(res) //打印错误信息
						}
					});
				}
			},
		},
	}
</script>
