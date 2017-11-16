<template>
    <div id="app">
        <div class="header">
            <div class="title">邮书后台管理系统</div>
        </div>
        <div class="navmenu">
            <NavMenu></NavMenu>
        </div>
        <div class="container">
            <router-view/>
        </div>
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
        .header {
            width: 100%;
            height: 88px;
            background: #41403f;
            position: fixed;
            top: 0;
            left: 0;
            .title {
                font-size: 30px;
                line-height: 88px;
                color: #fff;
                padding-left: 20px;
            }
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
        .container {
            position: absolute;
            width: auto;
            top: 88px;
            bottom: 0px;
            left: 182px;
            right: 0px;
            overflow: hidden;
            overflow-y: auto;
            padding: 16px;
            border: 1px solid #d2dae9;
            background: #e7ebf3;
        }
    }

</style>
