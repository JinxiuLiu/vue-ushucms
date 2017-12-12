<template>
	<div class="release">
		<div class="release-top">
			<div class="select-circle">
				<div class="circle-select" @click="showCircle(isShowCircle)">
					<span>请选择圈子</span>
					<yd-icon name="xia" custom color="#666" size="20px"></yd-icon>
				</div>
				<div class="circle-list" v-show="isShowCircle">
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
			<yd-button @click.native="showTip = true" type="primary" size="small" bgcolor="#eb2525" color="#FFF">&nbsp;发布&nbsp;</yd-button>
		</div>
		<yd-popup v-model="showTip" position="center" width="6rem">
            <div class="release-succ">
            	<div class="title">发布成功</div>
            	<div class="icon">
            		<yd-icon name="fabuchenggong" custom size="2.12rem" color="#eb2525"></yd-icon>
            	</div>
            	<div class="text">恭喜您，帖子发布成功！</div>
            	<div class="btn">
            		<div class="view-post">看发布的帖子</div>
            		<div class="back-index">回圈子首页</div>
            	</div>
            </div>
        </yd-popup>
		<div @click="showCircle(isShowCircle)" v-if="isShowCircle" class="yd-mask"></div>
	</div>
</template>

<script type="text/babel">
	export default {
		data() {
			return {
				isShowCircle: false,
				showTip: false
			}
		},
		methods: {
			showCircle(isShowCircle) {
				let showCircle = !isShowCircle;
				this.isShowCircle = showCircle;
			}
		}
	}
</script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~common/less/mixin';
    @import '~common/less/variable';

	.release {
		.yd-mask {
			z-index: 1009;
		    background-color: rgb(0, 0, 0);
		    opacity: .4;
		    pointer-events: auto;
		}
		.release-top {
			width: 100%;
			height: 100%;
		}
		.select-circle {
			width: 100%;
			height: .88rem;
			padding: 0 .3rem;
			background-color: #fff;
			position: fixed;
			top: 0;
			z-index: 1010;
			.circle-select {
				height: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			span {
				color: @color-text-333;
				font-size: @font-size-16;
			}
			.circle-list {
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
			width: 100%;
			height: 90%;
    		background-color: #fff;
			font-size: @font-size-16;
			position: fixed;
			z-index: 999;
			top: 1.2rem;
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
			z-index: 1000;
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
		.release-succ {
			width: 100%;
			.title {
				padding: .3rem 0 .15rem;
				text-align: center;
				color: @color-text-333;
				font-size: @font-size-16;
			}
			.icon {
				display: flex;
				justify-content: center;
				width: 100%;
			}
			.text {
				text-align: center;
				color: @color-text-333;
				font-size: @font-size-14;
			}
			.btn {
				display: flex;
				justify-content: space-between;
				padding: .38rem .6rem .5rem;
			}
			.view-post {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 2.2rem;
				height: .78rem;
				color: #fff;
				font-size: @font-size-14;
				background-color: @color-theme;
				border: 1px solid @color-theme;
			}
			.back-index {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 2.2rem;
				height: .78rem;
				color: @color-theme;
				font-size: @font-size-14;
				border: 1px solid @color-theme;
			}
		}
	}
</style>