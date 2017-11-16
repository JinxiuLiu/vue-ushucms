import Vue from 'vue'
import Router from 'vue-router'

const WithdrawalAudit = r => require.ensure([], () => r(require('@/containers/WithdrawalAudit/WithdrawalAudit')), 'group-WithdrawalAudit');
const Discount = r => require.ensure([], () => r(require('@/containers/Discount/Discount')), 'group-Discount');
const Carousel = r => require.ensure([], () => r(require('@/containers/Carousel/Carousel')), 'group-Carousel');
const Authentication = r => require.ensure([], () => r(require('@/containers/Authentication/Authentication')), 'group-Authentication');
const OrderInfo = r => require.ensure([], () => r(require('@/containers/OrderInfo/OrderInfo')), 'group-OrderInfo');

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index'
        }, {
            path:'/index',
            name:'Carousel',
            component: Carousel
        }, {
            path:'/WithdrawalAudit',
            name:'WithdrawalAudit',
            component: WithdrawalAudit
        }, {
            path:'/Discount',
            name:'Discount',
            component: Discount
        }, {
            path:'/Authentication',
            name:'Authentication',
            component: Authentication
        }, {
            path:'/OrderInfo',
            name:'OrderInfo',
            component: OrderInfo
        }]
})
