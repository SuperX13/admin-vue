<template>
    <div>
        <el-card class="box-card" style="width:40%"><el-table
                :data="tableData"
                stripe
                border
                style="width: 100%">
            <el-table-column
                    prop="id"
                    label="ID"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="gender"
                    label="性别"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="birthday"
                    label="出生年月"
                    width="120">
            </el-table-column>
            <el-table-column
                    label="操作"
                    width="100">
                <template #default="scope">
                    <el-button type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table></el-card>

    </div>

</template>

<script>
    export default {
        name: "PageTwo",
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
            let _this=this
            axios.get("http://localhost:8181/student/list").then(function (response) {
                _this.tableData=response.data
            })
        }
    }
</script>

<style scoped>

</style>