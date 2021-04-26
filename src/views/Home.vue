<template>
    <el-container>
        <el-header>
            <strong>后台管理系统</strong>
            <div class="header-avatar">
                <el-avatar size="medium" :src="userInfo.photo"></el-avatar>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click.native="userCenter">
                                <el-icon class="el-icon-user"></el-icon>
                                个人中心
                            </el-dropdown-item>
                            <el-dropdown-item @click.native="logout">
                                <el-icon class="el-icon-setting"></el-icon>
                                退出
                            </el-dropdown-item>
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
        },
        data(){
            return{
                userInfo:{
                    id:'',
                    username:'',
                    photo:''
                }
            }
        },
        created() {
            this.getUserInfo()
        },
        methods:{
            getUserInfo(){
                this.$axios.get('/userInfo').then(res=>{
                    this.userInfo=res.data.data
                })
            },
            userCenter(){
                this.$router.push('/userCenter')
            },
            logout(){
                this.$axios.post('/logout').then(res=>{
                    localStorage.clear()
                    sessionStorage.clear()
                    this.$store.commit('resetState')
                })
            }
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
    a{
        text-decoration: none;
        color: black;
    }


</style>