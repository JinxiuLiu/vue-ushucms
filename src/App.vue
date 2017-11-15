<template>
    <div id="app">
        <div class="header"></div>
        <div class="navmenu">
            <NavMenu></NavMenu>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import NavMenu from './components/NavMenu';
    export default {
        name: 'app',
        components: {
            NavMenu
        },
    }
</script>

<style lang='less'>
    #app {
        width: 100%;
        height: 100%;
        background: #e7ebf3;
        .header {
            width: 100%;
            height: 88px;
            background: #41403f;
        }
        .navmenu {
            width: 182px;
            height: 100%;
            border-right: 1px solid #d2dae9;
            position: fixed;
            top: 88px;
            .el-row {
                height: 100%;
            }
            .el-col-24 {
                height: 100%;
            }
            .el-menu {
                height: 100%;
                border-right: none;
            }
            .el-submenu .el-menu-item {
                min-width: 182px;
            }
        }
    }
</style>
