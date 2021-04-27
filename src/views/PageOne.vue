<template>

    <div>
        <el-space wrap>
        <el-card class="box-card" style="width:50%"> <div id="chartOne" :style="{width:'800px',height:'600px'}"></div></el-card>
            <el-card class="box-card" style="width:50%">aaaaaaaa</el-card>
        </el-space>
    </div>
</template>

<script>
    export default {
        name: "PageOne",
        data(){
            return{
            }
        },
        mounted() {
            let chartOne=this.$echarts.init(document.getElementById('chartOne'));
            let option;
            option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar',
                    showBackground: true,
                    backgroundStyle: {
                        color: 'rgba(180, 180, 180, 0.2)'
                    }
                }]
            };
            chartOne.setOption(option);
        }
    }
</script>

<style scoped>

</style>