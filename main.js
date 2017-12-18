 var myChart = echarts.init(document.getElementById('main'));

option = {
    title : {
        text: '2017年快递业务量前15位城市情况',
        subtext: '单位/万件'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'矩形图',
            type:'treemap',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data:[
                {
                    name: '广州',
                    value: '354940.7'
                },
                {
                    name: '上海',
                    value: '279773.8'
                },
                {
                    name: '深圳',
                    value: '234596.4'
                },
                {
                    name: '金华',
                    value: '224906.8'
                },
                {
                    name: '杭州',
                    value: '206469.3'
                },
                {
                    name: '北京',
                    value: '204429.5'
                },
                {
                    name: '东莞',
                    value: '110583.4'
                },
                 {
                    name: '苏州',
                    value: '92439.1'
                },
                {
                    name: '成都',
                    value: '74170.5'
                },
                {
                    name: '泉州',
                    value: '66599'
                },
                {
                    name: '温州',
                    value: '64517.1'
                },
                {
                    name: '武汉',
                    value: '64438.4'
                },
                {
                    name: '南京',
                    value: '57011.7'
                },
                {
                    name: '宁波',
                    value: '56929.8'
                },
                {
                    name: '揭阳',
                    value: '52678.2'
                },


            ]
        }
    ]
};
  myChart.setOption(option);
