<template>

    <div>
        <el-space wrap>
        <el-card class="box-card" style="width:50%" shadow="always"> <div id="chartOne" :style="{width:'800px',height:'600px'}"></div></el-card>
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
            let _this=this
            axios.get("http://localhost:8181/supermarket/barVo").then(function (response) {
                let chartOne=_this.$echarts.init(document.getElementById('chartOne'));
                let option;
                option = {
                    xAxis: {
                        type: 'category',
                        data: response.data.names
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: response.data.values,
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: 'rgba(180, 180, 180, 0.2)'
                        }
                    }]
                };
                chartOne.setOption(option);
            })


        }
    }
</script>

<style scoped>

</style>