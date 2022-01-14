<template>
    <div :class="{ show: showLogin }" id="loginPie"></div>
</template>

<script setup lang="ts">
import { computed, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import * as echarts from "echarts";

const props = defineProps({
    showLogin: {
        type: Boolean,
        default: false,
    },
});
const angle = ref(0);
const option = computed(() => {
    return {
        series: [
            // 0
            {
                animation: false,
                type: "pie",
                radius: ["31%", "35%"],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: "#0C355E",
                    },
                },
                label: {
                    show: false,
                },
                data: _dashed(),
            },
            // 1
            {
                animation: false,
                type: "pie",
                radius: ["39%", "40%"],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        shadowBlur: 0,
                        shadowColor: "#000",
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                            {
                                offset: 0,
                                color: "#1130dd",
                            },
                            {
                                offset: 1,
                                color: "#0da6cd",
                            },
                        ]),
                    },
                },
                label: {
                    show: false,
                },
                data: [0],
            },
            // 2
            {
                animation: false,
                type: "pie",
                radius: ["44%", "48%"],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        color: "#0C355E",
                    },
                },
                label: {
                    show: false,
                },
                data: _dashed(),
            },
            // 3
            {
                animation: false,
                type: "gauge",
                radius: "60%",
                clockwise: false,
                startAngle: "90",
                endAngle: "-269.9999",
                splitNumber: 100,
                detail: {
                    offsetCenter: [0, -20],
                    formatter: " ",
                },
                pointer: {
                    show: false,
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [0, "#173c5e"],
                            [
                                36.7 / 100,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: "#22beff",
                                    },
                                    {
                                        offset: 0.3,
                                        color: "#22baf8",
                                    },
                                    {
                                        offset: 1,
                                        color: "#173c5e",
                                    },
                                ]),
                            ],
                            [1, "#173c5e"],
                        ],
                        width: 30,
                        shadowColor: "rgba(33, 174, 234, )",
                        shadowBlur: 0,
                    },
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    length: 30,
                    distance: -30,
                    lineStyle: {
                        shadowBlur: 10,
                        shadowColor: "rgba(0, 255, 255, )",
                        shadowOffsetY: "0",
                        color: "#020f18",
                        width: 3,
                    },
                },
                axisLabel: {
                    show: false,
                },
            },
            // 4
            {
                animation: false,
                type: "pie",
                radius: ["61%", "61.5%"],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        shadowBlur: 0,
                        shadowColor: "rgba(0, 118, 239,0.5)",
                        color: "#0076ef",
                    },
                },
                label: {
                    show: false,
                },
                data: [100],
            },
            // 5
            {
                animation: false,
                type: "pie",
                radius: ["68%", "69.5%"],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        shadowBlur: 0,
                        shadowColor: "rgba(0, 255, 255,1)",
                        color: "rgba(2, 33, 64,.6)",
                    },
                },
                label: {
                    show: false,
                },
                data: [100],
            },
            // 6
            {
                animation: false,
                type: "pie",
                radius: ["70%", "75.5%"],
                hoverAnimation: false,
                clockWise: false,
                itemStyle: {
                    normal: {
                        shadowBlur: 20,
                        shadowColor: "rgba(0, 118, 239,1)",
                        color: "#0076EF",
                    },
                },
                label: {
                    show: false,
                },
                data: [100],
            },
            // 7
            {
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params: any, api: any) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.85,
                            startAngle: ((0 + angle.value) * Math.PI) / 180,
                            endAngle: ((80 + angle.value) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#22beff",
                            fill: "transparent",
                            lineWidth: 10,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params: any, api: any) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.85,
                            startAngle: ((120 + angle.value) * Math.PI) / 180,
                            endAngle: ((170 + angle.value) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#8383FA",
                            fill: "transparent",
                            lineWidth: 10,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params: any, api: any) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.85,
                            startAngle: ((220 + angle.value) * Math.PI) / 180,
                            endAngle: ((310 + angle.value) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#409EFF",
                            fill: "transparent",
                            lineWidth: 10,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            // 8
            {
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params: any, api: any) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.95,
                            startAngle: ((90 - angle.value) * Math.PI) / 180,
                            endAngle: ((180 - angle.value) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "rgb(0, 129, 255)",
                            fill: "transparent",
                            lineWidth: 10,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
            {
                type: "custom",
                coordinateSystem: "none",
                renderItem: function (params: any, api: any) {
                    return {
                        type: "arc",
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.95,
                            startAngle: ((240 - angle.value) * Math.PI) / 180,
                            endAngle: ((340 - angle.value) * Math.PI) / 180,
                        },
                        style: {
                            stroke: "#22baf8",
                            fill: "transparent",
                            lineWidth: 10,
                        },
                        silent: true,
                    };
                },
                data: [0],
            },
        ],
    };
});

function _dashed() {
    let dataArr = [];
    for (var i = 0; i < 30; i++) {
        if (i % 2 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 10,
                itemStyle: {
                    normal: {
                        color: "rgb(0,118,239,0.5)",
                    },
                },
            });
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 30,
                itemStyle: {
                    normal: {
                        color: "rgb(0,0,0,0)",
                        borderWidth: 1,
                        borderColor: "rgb(0,118,239,1)",
                    },
                },
            });
        }
    }
    return dataArr;
}

//获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
function getCirlPoint(x0: number, y0: number, r: number, angle: number) {
    let x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
    let y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
    return {
        x: x1,
        y: y1,
    };
}

onMounted(() => {
    let myChart = echarts.init(document.getElementById("loginPie") as HTMLElement);
    myChart.setOption(option.value);

    function doing() {
        let option: any = myChart.getOption();
        angle.value += 0.75;
        option.series[0].startAngle = option.series[0].startAngle - 0.5;
        option.series[2].startAngle = option.series[2].startAngle + 0.5;
        myChart.setOption(option);
    }

    function startTimer() {
        setInterval(doing, 1);
    }
    setTimeout(startTimer, 0);

    // 画布自适应大小
    (window as any).onresize = myChart.resize;
});
</script>

<style lang="scss" scoped>
#loginPie {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(-50%) translateY(-50%) scale(0);
    width: 100vh;
    height: 100vh;
    opacity: 0;
    transition: opacity 0.5s ease, transform 0.5s ease, top 0.5s ease, left 0.5s ease;

    &.show {
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%) scale(1);
        opacity: 1;
    }
}
</style>
