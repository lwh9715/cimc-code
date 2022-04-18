<template>
	<view class="flex flex-column " style="height: 100%;">
		<!-- 		<view class="bg-primary ">
			<view class="uni-list">
				<view class="uni-list-cell">
					<view class="uni-list-cell-db">
						<picker mode="multiSelector" @columnchange="bindMultiPickerColumnChange" :value="fclIndex"
							:range="fclArray">
							<view class="uni-input font-10">{{fclArray[0][fclIndex[0]]}} -> {{fclArray[1][fclIndex[1]]}}
							</view>
						</picker>
					</view>
					<view>
						<u-icon @click="search" name="../../static/img/querybtn.png" style="overflow: auto;"
							color="#6DBA52" size="68"></u-icon>
					</view>
				</view>
			</view>
		</view> -->

		<view class="bg-secondary flex-1">
			<block class="" v-for="(item,index) in pricelist" :key="index">
				<view class=" bg-white m-1 px-2 rounded-half py-2 font-sm">
					<view class="flex justify-center font-md" style="justify-content: space-between;">
						<b class="text-green">{{item.pol}}</b>
						<text>
							<u-icon name="../../static/icon/right_arrow.png" :size="55" />
						</text>
						<b class="text-green">{{item.pod}}</b>
						<text style="">
							<button type="primary" size="mini">订舱</button>
						</text>
					</view>
					<view style="border-bottom: 1px solid #e5e5e5;margin-bottom: 10rpx;" />
					<view class="fontSizeMy pr-1 rounded-s">
						<view class="flex justify-between">
							<view class="" style="width: 35%;">
								<text class="text-gray font-sm">运价类型：</text>
								<text class="font-weight-bold text-red font-sm">
									<b class="text-red">
										{{item.pricetype == ('' || null) ? '--' : item.pricetype }}
									</b>
								</text>
							</view>
							<view class="" style="width: 65%;">
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
							<view class="" style="width: 35%;">
								<text class="text-gray font-sm">FreeTime：</text>
								<text class="text-red">
									<b>
										{{ item.freetime == ('' || null) ? '--' : item.freetime }}
									</b>
								</text>
							</view>
							<view class="" style="width: 30%;">
								<text class="text-gray font-sm">截关：</text>
								<text class="font-weight-bold text-red" v-if="item.cls">
									<b>{{ item.cls }}</b>
								</text>
							</view>
							<view class="" style="width: 35%;">
								<text class="text-gray font-sm">航程：</text>
								<text class="font-weight-bold text-red" v-if="item.tt">
									<b>{{ item.tt }}天</b>
								</text>
							</view>
						</view>
						<view class="flex justify-between">
							<view class="" style="width: 35%;">
								<text class="text-gray font-sm">船公司：</text>
								<text><b>{{item.shipping}}</b></text>
							</view>
							<view class="" style="width: 30%;">
								<text class="text-gray font-sm">船期：</text>
								<text class="text-red">
									<b>{{ item.schedule == ('' || null) ? '--' : item.schedule}}</b>
								</text>
							</view>
							<view class=""
								style="width: 35%;text-overflow: ellipsis;display:block;white-space: nowrap;overflow: hidden;">
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
					<!-- <view style="height: 1rpx; background-color: #eee;"></view> -->
					<!-- <uni-collapse class="bg-light" v-model="activeNames" @change="change(item.uuid,index)">
						<uni-collapse-item name='abc' ref="add" title="更多信息" :show-animation="true"
							thumb="https://img-cdn-qiniu.dcloud.net.cn/new-page/hx.png">
							<view class="bg-white m-1 px-1 py-1">

								<view class="fontSizeMy pr-1">
									<view class="flex justify-between">
										<table class="font-smaller" style='width:100%;text-align: center;'>
											<tr>
												<th>费用名</th>
												<th>PPCC</th>
												<th>币制</th>
												<th>单位</th>
												<th>箱型费用</th>
												<th>票/箱量</th>
											</tr>
											<block class="" v-for="(item,index) in feelist" :key="index">
												<tr>
													<td>{{item.feeitemname}}</td>
													<td>{{item.ppcc}}</td>
													<td>{{item.currency}}</td>
													<td>{{item.unit}}</td>
													<td>{{item.amt20}}</td>
													<td>{{item.feeitemname}}</td>
												</tr>
											</block>
										</table>
									</view>
									<view class="flex justify-between">
										<view class="">
											<text style="color: #999;">备注：</text>
											<text class="font-smaller text-red">小柜货重限重18吨,超过需要加OWS:USD150</text>
										</view>

									</view>
									<view class="flex justify-between">

										<view class="rounded-half bg-primary text-white px-3">
											<text @click="openWms">订舱</text>
										</view>
									</view>
								</view>
							</view>
						</uni-collapse-item>
					</uni-collapse> -->
				</view>
			</block>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				fclArray: [
					['起运港'],
					['目的港'],
					['']
				],
				fclIndex: [0, 0, 0],
				pricelist: [],
				feelist: {},
			}
		},
		methods: {
			timeFormat: function(val) {
				var crtTime = new Date(val);
				var year = crtTime.getFullYear(); //得到年份
				var month = crtTime.getMonth(); //得到月份
				var date = crtTime.getDate(); //得到日期
				return year + '/' + month + '/' + date;

			},
			startType: function(val) {
				if (val == 'CLS') {
					return '大船截关'
				} else if (val == 'BETD') {
					return '大船截关'
				} else if (val == 'ETD') {
					return '大船'
				} else if (val == 'TDETD') {
					return '驳船'
				} else if (val == 'ONBOARD') {
					return '驳船'
				} else if (val == 'SOETD') {
					return 'SO ETD'
				} else if (val == 'GATE') {
					return 'GATE IN'
				} else {
					return ''
				}
			},
			bindMultiPickerColumnChange: function(e) {
				this.fclIndex[e.detail.column] = e.detail.value
				this.$forceUpdate()
			},
			change: function(id, index) {
				this.$H.post('/price?method=getfeeadd&id=' + id, this.form, {
					token: false
				}).then(res => {
					this.feelist = res;
					console.log(res);
				}).catch(res => {
					console.log(res)
					uni.showToast({
						title: 'search失败：' + res.message,
						icon: 'none'
					});
				})
			},
			search() {},
			onLoad: function(option) {
				if (option.detail) {
					let data = JSON.parse(decodeURIComponent(option.detail));
					this.$H.post('/price?method=fcllist&pol=' + data.pol + '&pod=' + data.pod +
						'&crrier=' + data.carrier, this
						.form, {
							token: false
						}).then(res => {
						if (res.data.length > 0) {
							this.pricelist = res.data.splice(0, 25);
						} else {
							uni.showToast({
								title: '该港口暂无数据',
								icon: 'none'
							})
						}
					});
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
