<template>
    <el-row class="tac">
        <el-col>
            <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#30b8fe">
                <el-menu-item index="1" @click="clickCarousel">
                    <i class="el-icon-picture"></i>
                    <span>轮播图片</span>
                </el-menu-item>
                <el-menu-item index="2" @click="clickDiscount">
                    <i class="el-icon-sold-out"></i>
                    <span slot="title">折扣设置</span>
                </el-menu-item>
                <el-menu-item index="3" @click="clickAuthentication">
                    <i class="el-icon-success"></i>
                    <span slot="title">身份认证</span>
                </el-menu-item>
                <el-menu-item index="4" @click="clickWithdrawalAudit">
                    <i class="el-icon-info"></i>
                    <span slot="title">提现审核</span>
                </el-menu-item>
                <el-menu-item index="5" @click="clickOrderInfo">
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
            clickWithdrawalAudit() {
                this.$router.push({name: 'WithdrawalAudit'})
            },
            clickDiscount() {
                this.$router.push({name: 'Discount'})
            },
            clickAuthentication() {
                this.$router.push({name: 'Authentication'})
            },
            clickCarousel() {
                this.$router.push({name: 'Carousel'})
            },
            clickOrderInfo() {
                this.$router.push({name: 'OrderInfo'})
            }
        }
    }

</script>
