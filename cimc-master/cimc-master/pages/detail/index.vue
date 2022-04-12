<template>
	<view class="card-conent" style="background-image: url(../../static/background.png);">
		<uni-card style="text-align: center;">
			<uni-forms :modelValue="formData">
				<uni-forms-item label="船公司" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.company}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="路线" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.route}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="有效时间起" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.startdate}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="有效时间止" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.enddate}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="航线" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.freight}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="航线代码" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.freightcode}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="20GP" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.pg20}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="40GP" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.pg40}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="40HQ" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.hq40}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="45HQ" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.hq45}}
					</view>
				</uni-forms-item>
			</uni-forms>
			<uni-collapse>
				<uni-collapse-item title="更多信息">
					<uni-forms>
						<uni-forms-item label="名称" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.name}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="币制" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.currency}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="运价类型" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.type}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="运价管理人" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.manager}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="发布时间" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.releasedate}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="录入时间" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.entryDate}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="外部备注" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.note}}
							</view>
						</uni-forms-item>
					</uni-forms>
				</uni-collapse-item>
			</uni-collapse>
		</uni-card>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				keyword: "",
				formData: {
					company: 'YML GSZ',
					route: 'GUANGZHOU-->DUBAI',
					freight: '中东',
					freightcode: 'CGX',
					startdate: '2022-4-12',
					enddate: '2022-04-18',
					type: '',
					currency: 'RMB',
					name: 'YML 广州/南沙/佛山/云浮',
					manager: '李滢',
					note: 'BK USD222/444 (4月)和 WRS USD47/94',
					releasedate: "22/04/08",
					entryDate: '22/04/08 15:49',
					pg20: "2000",
					pg40: "4000",
					hq40: "8000",
					hq45: "18000"
				}
			}
		},
		created() {},
		methods: {},
		// onLoad: function(option) { //option为object类型，会序列化上个页面传递的参数
		// 	this.formData.route = option.id
		// 	this.formData.freight = option.freight
		// 	console.log(option); //打印出上个页面传递的参数。
		// }
	}
</script>

<style>
	.card-conent {
		height: calc(100vh);
		overflow-y: auto;
	}

	.uni-card {
		margin-top: 30rpx !important;
		padding: 0 4px !important;
		/* border-radius: 15rpx !important; */
	}

	.uni-collapse-cell--open {
		background-color: #ffffff !important;
	}
</style>
