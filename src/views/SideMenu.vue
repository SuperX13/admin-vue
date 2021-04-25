<template>
    <el-menu
            class="el-menu-vertical"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" router>
        <el-submenu index="1">
            <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/pageOne">页面一</el-menu-item>
                <el-menu-item index="/pageTwo">页面二</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
            <template #title>
                <i class="el-icon-location"></i>
                <span>导航二</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="/pageThree">页面三</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
            <template #title>
                <i class="el-icon-location"></i>
                <span>导航三</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        name: "SideMenu"
    }
</script>

<style scoped>
    .el-menu-vertical{
        height: 100%;
    }
</style>