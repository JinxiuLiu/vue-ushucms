<template>
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="提现一级审核" name="first">
            <el-input placeholder="请输入用户名进行查找" suffix-icon="el-icon-search" v-model="inputSearch">
            </el-input>
            <template>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column align="center" label="用户名">
                        <template slot-scope="scope">
                            <span>{{ scope.row.username }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="状态">
                        <template slot-scope="scope">
                            <span>{{ scope.row.status }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="提现金额(¥)">
                        <template slot-scope="scope">
                            <span>{{ scope.row.money }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="提现时间">
                        <template slot-scope="scope">
                            <span>{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary" @click="handleAffirm(scope.$index, scope.row)">确认</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </template>
            <div class="pagination">
                <el-pagination
                    layout="prev, pager, next"
                    :page-size="6"
                    :total="60">
                </el-pagination>
            </div>
        </el-tab-pane>
        <el-tab-pane label="提现二级审核" name="second">
            提现二级审核
        </el-tab-pane>
        <el-tab-pane label="已通过的提现" name="third">
            已通过的提现
        </el-tab-pane>
        <el-tab-pane label="未通过的提现" name="fourth">
            未通过的提现
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    export default {
        name: 'WithdrawalAudit',
        data() {
            return {
                activeName: 'first',
                inputSearch: '',
                tableData: [{
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }, {
                    username: '王小虎',
                    status: '审核中',
                    money: '200',
                    date: '2016-05-02',
                }]
            }
        },
        methods: {
            handleAffirm(tab, event) {
                console.log(tab, event);
            }
        }
    }

</script>

<style lang='less' >
    .el-tabs__nav-scroll {
        margin-left: 20px;
    }
    .el-tabs__nav-wrap {
        background: #f7f8f8;
        &::after {
            content: none;
        }
    }
    .el-tabs {
        background: #fff;
    }
    .el-tabs__content {
        margin-left: 20px;
        .el-input {
            width: 300px;
            height: 36px;
            .el-input__inner {
                height: 36px;
                line-height: 36px;
            }
            .el-input__icon {
                font-size: 18px;
                line-height: 36px;
            }
        }
        .el-table {
            margin-top: 18px;
            border-top: 1px solid #e6ebf5;
        }
        .pagination {
            display: flex;
            justify-content: center;
            padding: 20px 0;
        }
    }

</style>
