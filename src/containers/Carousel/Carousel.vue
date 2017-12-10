<template>
    <div class="carousel">
        <div class="title"><span class="text">轮播图设置</span></div>
        <div class="info">
            <el-row>
                <el-col :span="12">
                    <template>
                        <el-table :data="tableData" :show-header="false" style="width: 100%">
                            <el-table-column class-name="hoverWhite" align="left">
                                <template slot-scope="scope">
                                    <span>{{ scope.row.bannerName }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column class-name="hoverWhite" align="right">
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
                        <div class="img-upload">
                            <el-upload class="avatar-uploader" action="http://rkkscs.xatime.com/file_upload" :show-file-list="false" :on-success="handleImgSuccess" :before-upload="beforeImgUpload">
                                <img v-if="imgUrlInput" :src="imgUrlInput" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                        <div class="img-title">
                            <p>图片标题</p>
                            <el-input v-model="imgTitleInput" placeholder="请输入内容"></el-input>
                        </div>
                        <div class="img-title">
                            <p>链接地址</p>
                            <el-input placeholder="请输入内容" v-model="linkInput">
                                <el-button slot="append" icon="el-icon-picture-outline"></el-button>
                            </el-input>
                        </div>
                        <div class="save">
                            <el-button type="primary" @click="saveImgFun">　　保存　　</el-button>
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
            imgTitleInput: '',
            imgUrlInput: '',
            linkInput: '',
            imgId: '',
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

        },
        handleImgSuccess(res) {
        	this.imgTitleInput = res.data[0].fileName
            this.imgUrlInput = res.data[0].url
            this.imgId = res.data[0].id
        },
        beforeImgUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
        saveImgFun() {
            let self = this;
            if (self.imgTitleInput == '') {
                this.$message.error('请输入图片标题！');
                return false;
            }
            if (self.imgUrlInput == '') {
                this.$message.error('请输入图片地址！');
                return false;
            }
            var headers = new Headers();
			headers.append("Content-Type", "application/x-www-form-urlencoded");
            fetch('http://rkkscs.xatime.com/banner/save', {
                    method: 'POST',
                    headers: headers,
                    credentials: 'include',
                    body: { //请求参数
                    	image: {
                    		id: self.imgId
                    	},
                        title: self.imgTitleInput,
                        url: self.imgUrlInput,
                        seq: 1 // 排序，可选
                    }
                })
                .then(function(response) {
                    return response.json()
                }).then(function(json) {
                    console.log(json)
                }).catch(function(ex) {
                    console.log(ex);
                })
        }
    },
    created: function() {
        fetch('http://rkkscs.xatime.com/banner/list')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                console.log(json)
            }).catch(function(ex) {
                console.log(ex.stack);
            })
    }
}

</script>
<style lang='less' scoped>
<<<<<<< HEAD
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
	    }
	}
=======
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
            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 100%;
                height: 250px;
                line-height: 250px;
                text-align: center;
            }
            .avatar {
                width: 100%;
                height: 250px;
                display: block;
            }
            .save {
                margin-top: 10px;
            }
        }
    }
}
>>>>>>> 66b6bd98f9d6063e1a7206951f51e4fd0ee66364

</style>
