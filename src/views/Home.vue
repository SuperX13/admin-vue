<template>
    <el-container>
        <el-header>
            <strong>后台管理系统</strong>
            <div class="header-avatar">
                <el-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    用户<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>个人中心</el-dropdown-item>
                            <el-dropdown-item>退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <SideMenu></SideMenu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import SideMenu from "./SideMenu";
    export default {
        name: "Home",
        components: {
            SideMenu
        }
    }
</script>

<style scoped>
    .header-avatar{
        float: right;
        width: 120px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .el-dropdown-link {
        cursor: pointer;
    }
    .el-container {
        padding: 0;
        margin: 0;
        height: 100vh;
    }

    .el-header{
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: left;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }


</style>