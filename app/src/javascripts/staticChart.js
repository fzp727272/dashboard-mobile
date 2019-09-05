var $ = require('jquery');

module.exports = {
  init: function(ele, xAxisData, data1, data2, data3) {
  

    var itemStyle = {
      normal: {
        barBorderRadius: [3, 3, 0, 0],
        lineStyle: {
          width:1// 0.1的线条是非常细的了
        }
      },
      emphasis: {
        barBorderWidth: 0,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)',
      },
    };

    var option = {
// title:{
//   text:title,
//   textStyle:{color:'#fff',fontSize:18}
// },
      backgroundColor: 'rgba(255,255,255,0)',
      legend: {
        data: ['收货', '发货', '库存'],
        top: 0,
        left: -5,
        textStyle: {
        //   color: 'rgba(255,255,255,.4)',
        },
        borderRadius: 20,
        itemWidth: 10,
        itemHeight: 10,
        // left: 10
      },
      // brush: {
      //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      //     xAxisIndex: 0
      // },
      //   toolbox: {
      //       feature: {
      //           // mark : {show: true},
      //           // dataView : {show: true, readOnly: false},
      //           // magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
      //           restore: { show: true },
      //           saveAsImage: { show: true }
      //       },
      //       right:40,
      //       // y: 'bottom'
      //   },
      tooltip: {
        axisPointer: {
          type: 'shadow',
          // lineStyle:{
          //    width:1,
          //    color:'#575565'
          // }
          shadowStyle: {
            shadowColor: '#000',
            color: 'rgba(8,6,17,.3)',
            // z:"-100",
            // opacity:".1"
            // shadowBlur:20,
          },
        },
        trigger: 'axis',
        showDelay: 0,
        hideDelay: 50,
        transitionDuration: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        //   borderColor : 'rgba(47,69,84,1)',
        borderRadius: 8,
        borderWidth: 2,
        padding: 4,
      },
      xAxis: {
        data: xAxisData,
        // name: 'X Axis',
        silent: false,
        splitLine: {
          show: false,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
            width: 10,
          },
        },
        // splitLine: {

        // },

        splitArea: { show: false },
      },
      yAxis: {
        // inverse: true,
        splitArea: { show: false },
        splitLine: {
          show: true,
          //  改变轴线颜色
          lineStyle: {
            width: 0.3,
            // 使用深浅的间隔色
            color: ['rgba(255,255,255,.3)'],
          },
        },
      },
      grid: {
        left: 0,
        right: 12,
        top: 40,
        bottom: 20,
        containLabel: true,
      },
      // visualMap: {
      //     type: 'continuous',
      //     dimension: 1,
      //     text: ['High', 'Low'],
      //     inverse: true,
      //     itemHeight: 200,
      //     calculable: true,
      //     min: -2,
      //     max: 6,
      //     top: 60,
      //     left: 10,
      //     inRange: {
      //         colorLightness: [0.4, 0.8]
      //     },
      //     outOfRange: {
      //         color: '#bbb'
      //     },
      //     // controller: {
      //     //     inRange: {
      //     //         color: '#2f4554'
      //     //     }
      //     // }
      // },

      series: [
        {
          name: '收货',
          type: 'bar',
          barWidth: 8,
          barGap: 0,
          itemStyle: itemStyle,
          data: data1,
        },
        {
          name: '发货',
          type: 'bar',
          barWidth: 8,
          barGap: 0,
          itemStyle: itemStyle,
          data: data2,
        },
        {
          name: '库存',
          type: 'line',
          barWidth: 12,
          symbolSize:2,
          itemStyle: itemStyle,
          data: data3,
        },
      ],
    };
    var chart = echarts.init(ele.get(0), 'steven.fu');
    chart.setOption(option);
    // myChart.on('brushSelected', renderBrushed);

    // function renderBrushed(params) {
    //     var brushed = [];
    //     var brushComponent = params.batch[0];

    //     for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
    //         var rawIndices = brushComponent.selected[sIdx].dataIndex;
    //         brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    //     }

    //     myChart.setOption({
    //         title: {
    //             backgroundColor: '#333',
    //             text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
    //             bottom: 0,
    //             right: 0,
    //             width: 100,
    //             textStyle: {
    //                 fontSize: 12,
    //                 color: '#fff'
    //             }
    //         }
    //     });
    // }
  },

};
