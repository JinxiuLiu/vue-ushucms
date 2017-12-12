<template>
	<div class="release">
		<div class="release-top">
			<div class="select-circle">
				<span>请选择圈子</span>
				<yd-icon name="xia" custom color="#666" size="20px"></yd-icon>
				<div class="circle-list">
					<div class="circle-item">农机狗</div>
					<div class="circle-item">东方红</div>
					<div class="circle-item">久保田</div>
					<div class="circle-item">约翰迪尔</div>
				</div>
			</div>
			<div class="release-info">
				<input type="text" placeholder="点击添加标题">
				<textarea name="" id="" placeholder="说点什么吧..."></textarea>
			</div>
		</div>
		<div class="release-bottom">
			<div class="upload">
				<div class="upload-btn">
					<yd-icon name="xiangji" custom size="24px" color="#cecece"></yd-icon>
				</div>
				<span>上传照片</span>
			</div>
			<yd-button type="primary" size="small" bgcolor="#eb2525" color="#FFF">&nbsp;发布&nbsp;</yd-button>
		</div>
	</div>
</template>

<script type="text/babel"></script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~common/less/mixin';
    @import '~common/less/variable';

	.release {
		.release-top {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
		}
		.select-circle {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: .88rem;
			padding: 0 .3rem;
			background-color: #fff;
			position: relative;
			span {
				color: @color-text-333;
				font-size: @font-size-16;
			}
			.circle-list {
				display: none;
				width: 100%;
				line-height: .87rem;
				font-size: @font-size-14;
				color: @color-text-666;
				background-color: #fff;
				position: absolute;
				top: 0.88rem;
				left: 0;
				.circle-item {
					padding: 0 .3rem;
					border-top: 1px solid @color-border;
				}
			}
		}
		.release-info {
			height: 90%;
			margin-top: .2rem;
    		background-color: #fff;
			font-size: @font-size-16;
			input {
				width: 100%;
				height: 1rem;
				background-color: #fff;
				text-indent: .3rem;
				border: none;
				border-bottom: 1px solid @color-border;
			}
			textarea {
				width: 100%;
				height: 80%;
				line-height: 26px;
				padding: .5rem .3rem;
				border: none;
			}
		}
		.release-bottom {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			padding: .4rem .3rem;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			z-index: 999;
			.upload {
				display: flex;
				align-items: center;
				span {
					font-size: @font-size-16;
					padding-left: .2rem;
				}
			}
			.upload-btn {
				display: flex;
				justify-content: center;
				align-items: center;
				width: .92rem;
				height: .92rem;
				border: 1px dashed #cecece;
			}
		}
	}
</style>