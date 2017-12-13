<template>
    <div class="listview">
        <div class="list-item one-img">
            <div class="list-left">
                <div class="title">现有一台久保田1190急售，需要用钱便宜卖5万，16年5月的车。</div>
                <div class="bottom-left">
                    <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="">
                    <div class="name">安雅熙 12-06</div>
                </div>
            </div>
            <div class="list-right">
               <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="">
            </div>
        </div>
        <div class="list-item">
            <div class="list-title">
                <span class="top">置顶</span>
                <span class="title">现有一台久保田1190急售，需要用钱便宜卖5万，16年5月的车。</span>
            </div>
            <div class="list-img">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="车">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="车">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="车">
            </div>
            <div class="list-bottom">
                <div class="bottom-left">
                    <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="">
                    <div class="name">安雅熙 12-06</div>
                </div>
                <div class="bottom-right">
                    <div class="leave">
                        <yd-icon name="comment21" color="#999" size="14px" custom></yd-icon>
                        <span>12</span>
                    </div>
                    <div class="browse">
                        <yd-icon name="liulan" color="#999" size="14px" custom></yd-icon>
                        <span>152</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-item">
            <div class="list-title">
                <span class="title">现有一台久保田1190急售，需要用钱便宜卖5万，16年5月的车。</span>
            </div>
            <div class="list-info info-img">
                而如果行内含有图片和文字，在浏览器渲染出来后，读者可以发现文字和图片在垂直方向并不是沿中线居中，而是沿基线对齐。这是因为，元素默认的垂直对齐方式为基线对齐
            </div>
            <div class="list-img">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="车">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="车">
                <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="车">
            </div>
            <div class="list-bottom">
                <div class="bottom-left">
                    <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="">
                    <div class="name">安雅熙 12-06</div>
                </div>
                <div class="bottom-right">
                    <div class="leave">
                        <yd-icon name="comment21" color="#999" size="14px" custom></yd-icon>
                        <span>12</span>
                    </div>
                    <div class="browse">
                        <yd-icon name="liulan" color="#999" size="14px" custom></yd-icon>
                        <span>152</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-item">
            <div class="list-title">
                <span class="title">现有一台久保田1190急售，需要用钱便宜卖5万，16年5月的车。</span>
            </div>
            <div class="list-info">
                而如果行内含有图片和文字，在浏览器渲染出来后，读者可以发现文字和图片在垂直方向并不是沿中线居中，而是沿基线对齐。这是因为，元素默认的垂直对齐方式为基线对齐
            </div>
            <div class="list-bottom">
                <div class="bottom-left">
                    <img src="http://static.ydcss.com/uploads/ydui/3.jpg" alt="">
                    <div class="name">安雅熙 12-06</div>
                </div>
                <div class="bottom-right">
                    <div class="leave">
                        <yd-icon name="comment21" color="#999" size="14px" custom></yd-icon>
                        <span>12</span>
                    </div>
                    <div class="browse">
                        <yd-icon name="liulan" color="#999" size="14px" custom></yd-icon>
                        <span>152</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

</script>

<style scoped lang="less" rel="stylesheet/less">
    @import '~common/less/mixin';
    @import '~common/less/variable';

	.list-item {
        padding: 0 .3rem;
        background-color: #fff;
        margin-bottom: .21rem;
        border-bottom: 1px solid @color-border;
        .list-title {
            width: 100%;
            height: .84rem;
            line-height: .84rem;
            font-size: @font-size-16;
            color: @color-text-333;
            .no-wrap();
            .top {
                width: .58rem;
                display: inline-block;
                height: .36rem;
                line-height: .36rem;
                border: 1px solid #3ebeee;
                border-radius: 2px;
                text-align: center;
                font-size: @font-size-10;
                color: #3ebeee;
                vertical-align: middle;
            }
            .title {
                vertical-align: middle;
            }
        }
        .list-info {
            color: @color-text-666;
            line-height: 20px;
            font-size: @font-size-14;
            .no-more-wrap(3);
        }
        .info-img {
            margin-bottom: .2rem;
        }
        .list-img {
            width: 100%;
            height: 1.49rem;
            display: flex;
            justify-content: space-between;
            img {
                width: 2.2rem;
                border-radius: 6px;
            }
        }
        .list-bottom {
            width: 100%;
            height: .90rem;
            display: flex;
            justify-content: space-between;
            .bottom-right {
                display: flex;
                align-items: center;
                color: @color-text-999;
                font-size: @font-size-12;
                .leave {
                    display: flex;
                    align-items: center;
                    padding-right: .2rem;
                }
                .browse {
                    display: flex;
                    align-items: center;
                }
                span {
                    padding-left: .1rem;
                }
            }
        }
        .bottom-left {
            display: flex;
            align-items: center;
            img {
                width: .4rem;
                height: .4rem;
                border-radius: .2rem;
                margin-right: .12rem;
            }
            .name {
                font-size: @font-size-12;
                color: @color-text-999;
            }
        }
    }
    .one-img {
        display: flex;
        justify-content: space-between;
        .list-left {
            .title {
                margin: .3rem 0;
                font-size: @font-size-16;
                color:@color-text-333;
                .no-more-wrap(2);
            }
            .bottom-left {
                padding-bottom: .3rem;
            }
        }
        .list-right {
            display: flex;
            align-items: center;
            img {
                width: 2.2rem;
                height: 1.5rem;
                margin-left: .1rem;
                border-radius: 6px;
            }
        }
    }
</style>