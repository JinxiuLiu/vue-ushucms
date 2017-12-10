<template>
    <div id="app">
        <div class="content">
            <router-view/>
        </div>
        <Tabbar></Tabbar>
    </div>
</template>

<script type="text/babel">
    import Tabbar from 'components/tabbar/tabbar'
    
    export default {
        components: {
            Tabbar
        }
    }

</script>

<style lang="less" rel="stylesheet/less">
    @import '~common/less/index.less';
    
    .content {
        padding-bottom: .92rem;
    }
</style>
