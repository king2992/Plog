<template>
    <v-app>
        <div style="height:80%;">
            <v-chart :options="polar"/>
        </div>
    </v-app>
</template>

<style>
    /**
 * The default size is 600px×400px, for responsive charts
 * you may need to set percentage values as follows (also
 * don't forget to provide a size for the container).
 */
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>

<script>
    import ECharts from 'vue-echarts'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/polar'

    export default {
        components: {
            'v-chart': ECharts
        },
        data() {
            let data = []

            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }

            return {
                polar: {
                    title: {
                        text: '방문통계'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['방문 수', '조회 수', '팔로우 증가수']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: [
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thu',
                            'Fri',
                            'Sat',
                            'Sun'
                        ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '방문 수',
                            type: 'line',
                            stack: '总量',
                            data: [
                                120,
                                132,
                                101,
                                134,
                                90,
                                230,
                                210
                            ]
                        }, {
                            name: '조회 수',
                            type: 'line',
                            stack: '总量',
                            data: [
                                220,
                                182,
                                191,
                                234,
                                290,
                                330,
                                310
                            ]
                        }, {
                            name: '팔로우 증가수',
                            type: 'line',
                            stack: '总量',
                            data: [
                                150,
                                232,
                                201,
                                154,
                                190,
                                330,
                                410
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>