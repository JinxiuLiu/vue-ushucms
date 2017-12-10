<template>
    <div class="tabbar">
        <router-link tag="div" class="tabbar-item" to="/index">
            <svg class="iconfont moren" aria-hidden="true">
                <use xlink:href="#icon-zhuyemoren"></use>
            </svg>
            <svg class="iconfont select" aria-hidden="true">
                <use xlink:href="#icon-zhuyexuanzhong"></use>
            </svg>
            <span class="tabbar-link">首页</span>
        </router-link>
        <router-link tag="div" class="tabbar-item" to="/circle">
            <svg class="iconfont moren" aria-hidden="true">
                <use xlink:href="#icon-quanzimoren"></use>
            </svg>
            <svg class="iconfont select" aria-hidden="true">
                <use xlink:href="#icon-quanzixuanzhong"></use>
            </svg>
            <span class="tabbar-link">圈子</span>
        </router-link>
        <router-link tag="div" class="tabbar-item" to="/release">
            <svg class="iconfont fabu" aria-hidden="true">
                <use xlink:href="#icon-fabu"></use>
            </svg>
        </router-link>
        <router-link tag="div" class="tabbar-item" to="/chat">
            <svg class="iconfont moren" aria-hidden="true">
                <use xlink:href="#icon-jiaoliumoren"></use>
            </svg>
            <svg class="iconfont select" aria-hidden="true">
                <use xlink:href="#icon-jiaoliuxuanzhong"></use>
            </svg>
            <span class="tabbar-link">聊天</span>
        </router-link>
        <router-link tag="div" class="tabbar-item" to="/user">
            <svg class="iconfont moren" aria-hidden="true">
                <use xlink:href="#icon-wodemoren"></use>
            </svg>
            <svg class="iconfont select" aria-hidden="true">
                <use xlink:href="#icon-wodexuanzhong"></use>
            </svg>
            <span class="tabbar-link">我的</span>
        </router-link>
    </div>
</template>

<script type="text/babel">
    export default { }
</script>

<style scoped lang="less" rel="stylesheet/less">
    @import '~common/less/variable';

    .iconfont {
        width: .44rem;
        height: .44rem;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

    .tabbar {
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: #fff;
        position: fixed;
        bottom: 0;
        box-shadow: 0 -1px 5px @color-border;
        .tabbar-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 20%;
            height: 100%;
            padding: .08rem 0;
            .fabu {
                width: .76rem;
                height: .76rem;
            }
            .tabbar-link {
                color: @color-text-333;
            }
            .select {
                display: none;
            }
            &.router-link-active {
                .tabbar-link {
                    color: @color-theme;
                }
                .moren {
                    display: none;
                }
                .select {
                    display: block;
                }
            }
        }
    }

</style>
