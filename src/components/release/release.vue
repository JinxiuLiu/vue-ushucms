<template>
	<div class="release">
		<div class="select-circle">
			<span>请选择圈子</span>
			<yd-icon name="xia" custom color="#666" size="20px"></yd-icon>
		</div>
		<div class="release-info">
			<input type="text">
		</div>
	</div>
</template>

<script type="text/babel"></script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~common/less/mixin';
    @import '~common/less/variable';

	.release {
		.select-circle {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: .88rem;
			padding: 0 .3rem;
			background-color: #fff;
			span {
				color: @color-text-333;
				font-size: @font-size-16;
			}
		}
	}
</style>