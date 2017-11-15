<template>
    <el-row class="tac">
        <el-col>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#30b8fe">
                <el-menu-item index="1">
                    <i class="el-icon-picture"></i>
                    <span>轮播图片</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-sold-out"></i>
                    <span slot="title">折扣设置</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-success"></i>
                    <span slot="title">身份认证</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-info"></i>
                    <span slot="title">提现审核</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <i class="el-icon-document"></i>
                    <span slot="title">订单信息</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        name: 'NavMenu',
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }

</script>
