<template>
	<div class="discount">
		<div class="title"><span class="text">折扣</span></div>
		<div class="info">
			<div class="info-input">
				<span class="input-tip">折扣：</span>
				<template>
					<el-input-number v-model="input" @change="handleChange" :min="1.0" :max="10.0" :controls="false" label=""></el-input-number>
				</template>
				<span class="input-tip">折</span>
				<span class="tip">*此折扣适用于所有图书</span>
			</div>
			<div class="btn">
				<el-button type="primary" size="medium">　　保存　　</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        name: 'Discount',
        data() {
            return {
                input: '9.9'
            }
        },
        methods: {
            
        }
    }
</script>

<style lang='less' scoped>
	.discount {
		background: #fff;
		width: 100%;
		min-height: 100%;
		.title {
			width: 100%;
			height: 40px;
			line-height: 40px;
			background: #f7f8f8;
			font-size: 14px;
			.text {
				padding-left: 20px;
			}
		}
		.info {
			font-size: 14px;
			padding: 30px 20px;
			.el-input-number {
				width: 120px;
			}
			.tip {
				padding-left: 20px;
				color: #999;
			}
			.btn {
				margin-top: 20px;
			}
		}
	}

</style>