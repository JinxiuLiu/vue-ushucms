<template>
    <yd-tab active-color="#eb2525">
        <yd-tab-panel label="精选热帖">
			<Listview></Listview>
        </yd-tab-panel>
        <yd-tab-panel label="最新热帖">
            <Listview></Listview>
        </yd-tab-panel>
        <yd-tab-panel label="最新帖子">
            <Listview></Listview>
        </yd-tab-panel>
    </yd-tab>
</template>

<script type="text/babel">
	import Listview from 'base/listview/listview'
	
    export default {
        components: {
            Listview
        },
        data() {
            return {
                
            }
        },
        created() {
            
        },
        mounted () {
            window.addEventListener('scroll', this._getScrollTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this._getScrollTop)
        },
        methods: {
            _getScrollTop() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop > 180) {
                    document.getElementsByClassName('yd-tab-nav')[0].className = 'yd-tab-nav isFlxed'
                } else {
                    document.getElementsByClassName('yd-tab-nav')[0].className = 'yd-tab-nav'
                }
            }
        },
    }
</script>

<style scoped lang="less" rel="stylesheet/less">

</style>