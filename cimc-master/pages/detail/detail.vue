<template>
	<view class="card-conent" style="background-image: url(../../static/background.png);">
		<uni-card style="text-align: center;">
			<uni-forms :modelValue="formData">
				<uni-forms-item label="船公司" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.shipping}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="路线" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.line}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="有效时间起" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.datefm}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="有效时间止" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.dateto}}
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
						{{formData.cost20}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="40GP" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.cost40gp}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="40HQ" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.cost40hq}}
					</view>
				</uni-forms-item>
				<uni-forms-item label="45HQ" label-width="80">
					<view style="margin-top: 10px;">
						{{formData.cost45hq}}
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
								{{formData.inputer}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="发布时间" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.releasedate}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="录入时间" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.inputtime}}
							</view>
						</uni-forms-item>
						<uni-forms-item label="外部备注" label-width="80">
							<view style="margin-top: 10px;">
								{{formData.remark_in}}
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
				formData: {}
			}
		},
		created() {},
		methods: {},
		onLoad: function(option) {
			this.formData = JSON.parse(decodeURIComponent(option.detail));
		}
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
