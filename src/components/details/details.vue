<template>
	<div class="details">
		<div class="details-title">寒冬水冷 农机企业先别死！中央中央财政今年投入15亿的救命钱，你要把握好！</div>
		<div class="details-info">
			<div class="info-name">
				<img src="http://static.ydcss.com/uploads/ydui/2.jpg" alt="">
				<span>农机牛</span>
			</div>
			<div class="info-tiem">2017-12-04 11:28:19</div>
		</div>
		<div class="details-text">
			<p>作为世界上最大的农机企业--美国迪尔公司的历史可追溯到1837年，它是由美国人约翰·迪尔(JohnDeere)先生创立。</p>
			<p>1837年，约翰·迪尔在美国伊利诺伊州大迪图尔市的铁匠铺打造出一种磨光钢犁，使得拓荒者能够在西部大草原的粘土中耕出匀整的垄。</p>
			<img src="http://static.ydcss.com/uploads/ydui/2.jpg" alt="">
			<p>常州东风农机是我国农机行业最早的一批民族企业。1960年，东风农机(常拖厂)响应党中央“农业的根本出路在于机械化”的号召，率先研制出了第一台丰收35型轮式拖拉机，开创了常州人自制轮式拖拉机的历史。1966年，与科研院所联合设计、制造的12马力手扶拖拉机问世，并给“新生儿”选择了具有民族特点、寓意深刻的“东风”作为商标。</p>
		</div>
		<div class="details-fabulous">
			<div class="fabulous">
				<div class="fabulous-icon">
					<yd-icon name="zan2" custom color="#eb2525" size="20px"></yd-icon>
				</div>
				<div class="fabulous-num">4人点赞</div>
			</div>
		</div>
		<div class="details-comment">
			<div class="comment-title">最新评论</div>
			<div class="comment-list">
				<div class="list-item">
					<div class="comment-portrait">
						<img src="http://static.ydcss.com/uploads/ydui/2.jpg" alt="">
					</div>
					<div class="comment-info">
						<div class="comment-name">和谐</div>
						<div class="comment-text">常州东风农机是我国农机行业最早的一批民族企业。常州东风农机是我国农机行业最早的一批民族企业。</div>
						<div class="comment-bottom">
							<div class="comment-tiem">12-08 21:46</div>
							<div class="comment-btn">
								<yd-icon name="comment21" custom color="#999" size="14px"></yd-icon>
								<span>评论</span>
							</div>
						</div>
					</div>
				</div>
				<div class="list-item">
					<div class="comment-portrait">
						<img src="http://static.ydcss.com/uploads/ydui/2.jpg" alt="">
					</div>
					<div class="comment-info">
						<div class="comment-name">和谐</div>
						<div class="comment-text">常州东风农机是我国农机行业最早的一批民族企业。常州东风农机是我国农机行业最早的一批民族企业。</div>
						<div class="comment-bottom">
							<div class="comment-tiem">12-08 21:46</div>
							<div class="comment-btn">
								<yd-icon name="comment21" custom color="#999" size="14px"></yd-icon>
								<span>评论</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="details-footer">
			<input type="text" placeholder="老司机，说俩句...">
			<div class="badge">
				<yd-icon name="comment21" custom color="#666" size="24px"></yd-icon>
				<div>18</div>
			</div>
			<yd-icon name="zhuanfa" custom color="#666" size="24px"></yd-icon>
		</div>
	</div>
</template>

<script type="text/babel">
	
</script>

<style scoped lang="less" rel="stylesheet/less">
	@import '~common/less/mixin';
    @import '~common/less/variable';

	.details {
		background-color: #fff;
		padding: 0.3rem .3rem 0;
		.details-title {
			width: 100%;
			line-height: 30px;
			font-size: @font-size-20;
			.no-more-wrap(2)
		}
		.details-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: .8rem;
			.info-name {
				display: flex;
				align-items: center;
				font-size: @font-size-14;
				color: @color-text-666;
				img {
					width: .5rem;
					height: .5rem;
					border-radius: .25rem;
					margin-right: .1rem;
				}
			}
			.info-tiem {
				font-size: @font-size-12;
				color: @color-text-999;
			}
		}
		.details-text {
			line-height: 30px;
			font-size: @font-size-16;
			color: @color-text-333;
			p {
				padding-top: .3rem;
				&:first-child {
					padding-top: 0;
				}
			}
			img {
				width: 100%;
				margin-top: .3rem;
			}
		}
		.details-fabulous {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 2rem;
			.fabulous-icon {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 1.98rem;
				height: .68rem;
				border: 1px solid @color-border;
				border-radius: 4px;
			}
			.fabulous-num {
				padding-top: .2rem;
				text-align: center;
				color: @color-text-999;
				font-size: @font-size-12;
			}
		}
		.details-comment {
			padding-top: .3rem;
			.comment-title {
				line-height: 28px;
				color: @color-text-333;
				font-size: @font-size-16;
				position: relative;
				&:before {
					content: "";
				    width: .4rem;
				    height: 2px;
				    position: absolute;
				    left: 0;
				    bottom: 0;
				    background-color: @color-theme;
				}
			}
			.list-item {
				display: flex;
				padding-top: .4rem;
				img {
					width: .8rem;
					height: .8rem;
					border-radius: .4rem;
				}
				.comment-info {
					line-height: 28px;
					padding-left: .2rem;
					border-bottom: 1px solid @color-border;
				}
				.comment-name {
					color: @color-text-666;
					font-size: @font-size-14;
				}
				.comment-text {
					color: @color-text-333;
					font-size: @font-size-16;
				}
				.comment-bottom {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					height: .8rem;
					padding-bottom: .18rem;
					color: @color-text-999;
				}
				.comment-btn {
					display: flex;
					align-items: center;
					span {
						padding-left: .1rem;
					}
				}
			}
		}
		.details-footer {
			width: 100%;
			height: .99rem;
			padding: 0 .3rem;
			border-top: 1px solid @color-border;
			background-color: @color-background;
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 999;
			display: flex;
			justify-content: space-between;
			align-items: center;
			input {
				width: 5.18rem;
				height: .68rem;
				border: 1px solid @color-border;
				border-radius: 4px;
				background-color: #fff;
				font-size: @font-size-14;
				color: @color-text-999;
				text-indent: .3rem;
			}
			.badge {
				position: relative;
				div {
					padding: 2px 4px 1px;
					border-radius: 6px;
					vertical-align: bottom;
					color: #fff;
					font-size: 9px;
					background-color: @color-theme;
					position: absolute;
					right: -4px;
					top: -4px;
				}
			}
		}
	}
</style>