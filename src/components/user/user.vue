<template>
	<div class="user">
		<div class="user-info">
			<div class="edit">
				<yd-icon name="xiugaiziliao" custom color="#fff" size="20px"></yd-icon>
			</div>
			<div class="portrait">
				<img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="">
			</div>
			<div class="text">
				<div class="name">Miss.Lin</div>
				<div class="grade">等级:10级  专业达人</div>
			</div>
			<div class="experience-integral">
				<div class="experience">
					<p>239</p>
					<p class="name">经验</p>
				</div>
				<div class="integral">
					<p>23999</p>
					<p class="name">积分</p>
				</div>
			</div>
		</div>
		<div class="user-grids">
			<div class="grids-item">
				<div class="fatie" style="background-color: #eb5036">
					<yd-icon name="fatie" custom size=".5rem" color="#fff"></yd-icon>
				</div>
				<span>发帖</span>
			</div>
			<div class="grids-item">
				<div class="huifu" style="background-color: #ffaa4f">
					<yd-icon name="huifu" custom size=".5rem" color="#fff"></yd-icon>
				</div>
				<span>回复</span>
			</div>
			<div class="grids-item">
				<div class="shoucang" style="background-color: #3ebeee">
					<yd-icon name="shoucang3-copy-copy" custom size=".5rem" color="#fff"></yd-icon>
				</div>
				<span>收藏</span>
			</div>
			<div class="grids-item">
				<div class="guanzhu" style="background-color: #edd448">
					<yd-icon name="guanzhu" custom size=".5rem" color="#fff"></yd-icon>
				</div>
				<span>关注</span>
			</div>
			<div class="grids-item">
				<div class="fensi" style="background-color: #ff5252">
					<yd-icon name="fensi" custom size=".5rem" color="#fff"></yd-icon>
				</div>
				<span>粉丝</span>
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
	
</script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~common/less/mixin';
    @import '~common/less/variable';

	.user {
		width: 100%;
		height: 100%;
		background-color: #fff;
		position: fixed;
		top: 0;
		left: 0;
		.user-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 3.47rem;
			padding-bottom: .5rem;
			background: url(image/user-bg.png) no-repeat;
			background-size: 100% 100%;
			position: relative;
			.edit {
				position: absolute;
				right: .3rem;
				top: .3rem;
			}
			.portrait {
				padding: .3rem 0 .15rem;
				img {
					width: 1.5rem;
					height: 1.5rem;
					border-radius: .75rem;
					border: .05rem solid #fc7474;
				}
			}
			.text {
				line-height: 24px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				color: #fff;
				.name {
					font-size: @font-size-16;
				}
				.grade {
					font-size: @font-size-12;
				}
			}
			.experience-integral {
				display: flex;
				justify-content: space-around;
				align-items: center;
				width: 6.9rem;
				height: 1.4rem;
				line-height: 24px;
				text-align: center;
				font-size: @font-size-16;
				color: @color-text-333;
				background-color: #fff;
				box-shadow: 0 0 15px @color-border;
				position: absolute;
				bottom: -1rem;
				.experience {
					&:before {
						content: "";
					    width: 1px;
					    height: 1rem;
					    position: absolute;
					    left: 50%;
					    bottom: 50%;
					    margin-bottom: -.5rem;
					    background-color: @color-border;
					}
				}
				.name {
					font-size: @font-size-14;
					color: @color-text-666;
				}
			}
		}
		.user-grids {
			display: flex;
			flex-wrap: wrap;
			flex-grow: 3;
			width: 100%;
			padding-top: 1.4rem;
			.grids-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 33.33%;
				height: 1.8rem;
				div {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 1rem;
					height: 1rem;
					border-radius: .5rem;
				}
				span {
					padding-top: .12rem;
					color: @color-text-666;
					font-size: @font-size-12;
				}
			}

		}
	}
</style>