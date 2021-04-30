<template>
    <div>
        <el-card class="box-card" shadow="always">
            <el-row :gutter="20">
                <el-col :span="10">
                    <!-- 搜索添加 -->
                    <el-input placeholder="请输入搜索内容" clearable >
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <el-button type="primary" @click="insertEditDialog('insertData')" >添加用户</el-button>
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
                    <el-button @click="showEditDialog(scope.row.id)"  type="primary" icon="el-icon-edit" size="mini">修改</el-button>
                </template>
            </el-table-column>
        </el-table></el-card>
        <el-dialog title="修改用户信息" :visible.sync="editDialogVisible" width="25%"@colse="editDialogClosed">
            <el-form :model="editForm" :rules="editFormRules"  ref="editForm" label-width="70px">
                <el-form-item label="ID" prop="id">
                    <el-input v-model="editForm.id" disabled></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="editForm.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-input v-model="editForm.gender"></el-input>
                </el-form-item>
                <el-form-item label="出生年月" prop="birthday">
                    <el-input v-model="editForm.birthday"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogClosed('editForm')">取 消</el-button>
        <el-button type="primary" @click="editUserInfo('editForm')">修 改</el-button>
      </span>
        </el-dialog>
        <el-dialog title="添加用户信息" :visible.sync="insetDialogVisible" width="25%" @colse="insertDialogClosed">
            <el-form :model="insertData"   ref="insertData" label-width="70px">
                <el-form-item label="ID" prop="id">
                    <el-input v-model="insertData.id"></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="insertData.name"></el-input>
                </el-form-item>
                <el-form-item label="性别" prop="gender">
                    <el-input v-model="insertData.gender"></el-input>
                </el-form-item>
                <el-form-item label="出生年月" prop="birthday">
                    <el-input v-model="insertData.birthday"></el-input>
                </el-form-item>
                <el-form-item label="tid" prop="tid">
                    <el-input v-model="insertData.tid"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
        <el-button @click="insertDialogClosed('insertData')">取 消</el-button>
        <el-button type="primary" @click="insertUserInfo('insertData')">添 加</el-button>
      </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "PageTwo",
        methods:{
             showEditDialog(id){
                let _this=this
                axios.get("http://localhost:8181/student/find/"+id).then(function (response) {
                    _this.editForm=response.data
                    _this.editDialogVisible = true;
                })
            },
            //打开添加框
            insertEditDialog(insertData){
                this.insetDialogVisible = true;
                this.$refs[insertData].resetFields();
            },
            //确认添加
            insertUserInfo(insertData){
                this.$refs[insertData].validate((valid) => {
                    if (valid){
                    let _this = this
                    axios.post("http://localhost:8181/student/insert", this.insertData).then(function (response) {
                        console.log(response)
                        if (response.data) {
                            _this.getUserList()
                            _this.$notify({
                                title: '成功',
                                message: '添加成功',
                                type: 'success'
                            })
                            _this.insertDialogClosed()
                        }

                    })
                    }
                })
            },
            // 关闭添加用户窗口
            insertDialogClosed(){
                this.insetDialogVisible = false;
            },
            // 关闭修改用户窗口
            editDialogClosed(editForm){
                this.editDialogVisible = false;
                this.$refs[editForm].resetFields();
            },
            // 确认修改
            editUserInfo(editForm){
                this.$refs[editForm].validate((valid) => {
                    if (valid) {
                    let _this = this
                    axios.put("http://localhost:8181/student/update", this.editForm).then(function (response) {
                        if (response.data) {
                            _this.getUserList()
                            _this.$notify({
                                title: '成功',
                                message: '修改成功',
                                type: 'success'
                            })
                            _this.editDialogClosed()
                        }
                    })
                }
                })
            },
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
                // 控制修改用户对话框显示/隐藏
                editDialogVisible:false,
                // 控制添加用户对话框显示/隐藏
                insetDialogVisible:false,
                value: new Date(),
                tableData: {
                    id: '',
                    name: '',
                    gender: '',
                    birthday: '',
                },
                insertData: {
                    id: '',
                    name: '',
                    gender: '',
                    birthday: '',
                    tid:"",
                },
                editForm:{
                    id: '',
                    name: '',
                    gender: '',
                    birthday: '',
                },
                // 修改用户表单验证规则
                editFormRules:{
                    name:[
                        { required: true, message: "请输入姓名", trigger: "blur" },
                        { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
                    ],
                    gender:[
                        { required: true, message: "请输入性别", trigger: "blur" },
                        { min: 1, max: 1, message: "请输入正确性别", trigger: "blur" }
                    ],
                    birthday:[
                        { required: true, message: "请输入出生", trigger: "blur" },
                        { min: 5, max: 15, message: "请输入正确格式", trigger: "blur" }
                    ],
                },
            }
        },
        created() {
            this.getUserList();
        }
    }
</script>

<style scoped>

</style>