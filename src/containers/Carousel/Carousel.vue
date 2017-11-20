<template>
    <div class="carousel">
        <div class="title"><span class="text">轮播图设置</span></div>
        <div class="info">
            <el-row>
                <el-col :span="12">
                    <template>
                        <el-table :data="tableData" :show-header="false" style="width: 100%">
                            <el-table-column align="left">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.bannerName }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column align="right">
                                <template slot-scope="scope">
                                    <div class="ushu-column">
                                    	<el-switch v-model="scope.row.cheacked" active-color="#409EFF" inactive-color="#ff4444"></el-switch>
                                    	<el-button type="text" @click="handleAffirm(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </template>
                    <div class="add-btn">
                    	<el-button type="primary">　　添加　　</el-button>
                    </div>
                </el-col>
                <el-col :span="12">
                	<div class="add-img">
                		<img src="" alt="">
                		<div class="img-title">
                			<p class="title">图片标题</p>
                			<el-input v-model="imgTitle" placeholder="请输入内容"></el-input>
                		</div>
                	</div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
	export default {
	    name: 'Carousel',
	    data() {
	        return {
	        	cheacked: true,
	        	imgTitle: '',
	            tableData: [{
	                bannerName: '王小虎',
	                cheacked: true,
	            }, {
	                bannerName: '王小虎',
	                cheacked: true,
	            }, {
	                bannerName: '王小虎',
	                cheacked: true,
	            }, ]
	        }
	    },
	    methods: {
	    	handleAffirm() {

	    	}
	    }
	}

</script>

<style lang='less' scoped>
	.carousel {
	    background: #fff;
	    width: 100%;
	    min-height: 100%;
	    .title {
	        width: 100%;
	        height: 40px;
	        line-height: 40px;
	        background: #f7f8f8;
	        font-size: 14px;
	        .text {
	            padding-left: 20px;
	        }
	    }
	    .info {
	        font-size: 14px;
	        padding: 0 20px;
	        .el-table--enable-row-hover .el-table__body tr:hover>td {
	            background-color: #fff;
	        }
	        .el-button--text {
	        	width: 40px;
	        	font-size: 20px;
	        	color: #666;
	        	padding: 0;
	        }
	        .ushu-column {
	        	display: flex;
	        	justify-content: flex-end;
	        }
	        .add-btn {
	        	display: flex;
	        	justify-content: flex-end;
	        	margin-top: 26px;
	        	.el-button--primary {
				    background-color: #41403f;
				    border-color: #41403f;
	        	}
	        }
	        .add-img {
	        	margin-top: 20px;
	        	margin-left: 20px;
	        	background-color: #f9f9f9;
	        	img {
	        		display: block;
	        		width: 100%;
	        		height: 250px;
	        		border: 1px solid #c8c8c8;
	        	}
	        }
	    }
	}

</style>
