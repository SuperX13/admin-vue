<template>
    <div>
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="10">
                    <!-- 搜索添加 -->
                    <el-input placeholder="请输入搜索内容" clearable >
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary" >添加用户</el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" stripe border>
                <el-table-column type="index"></el-table-column>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
            <el-table-column prop="gender" label="性别"></el-table-column>
            <el-table-column prop="birthday" label="出生年月"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button @click="delStu(scope.row)"  type="danger" icon="el-icon-delete" size="mini">删除</el-button>
                    <el-button type="primary" icon="el-icon-edit" size="mini">修改</el-button>
                </template>
            </el-table-column>
        </el-table></el-card>

    </div>

</template>

<script>
    export default {
        name: "PageTwo",
        methods:{
            getUserList(){
                let _this=this
                axios.get("http://localhost:8181/student/list").then(function (response) {
                    _this.tableData=response.data
                })
            },
            delStu(row){
                let _this=this
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'}).then(() => {
                    axios.delete("http://localhost:8181/student/delete/"+row.id).then(function (response){
                        if (response.data){
                            _this.getUserList()
                            _this.$message({
                                type: 'success',
                                message: '删除成功!',
                            })
                        }
                        })
                    }).catch(() => {
                    _this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        data() {
            return {
                value: new Date(),
                tableData: [{
                    id: '',
                    name: '',
                    gender: '',
                    birthday: '',
                }]

            }
        },
        created() {
            this.getUserList();
        }
    }
</script>

<style scoped>

</style>