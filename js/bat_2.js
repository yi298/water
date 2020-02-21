//当前视口宽度
let nowClientWidth = document.documentElement.clientWidth;

//  换算方法
function nowSize(val, initWidth = 1920) {
  return val * (nowClientWidth / initWidth);
}


// 日历
layui.use('laydate', function () {
  var laydate = layui.laydate;

  //单日期
  laydate.render({
    elem: '#data1' //指定元素
    , theme: '#036093'
    ,value:'2020-02-21'
    , isInitValue: true //是否允许填充初始值，默认为 true
    , showBottom: false //不显示底部
  });

  // 双日期
  laydate.render({
    elem: '#data2'
    , type: 'date'
    , range: '~'
    , theme: '#036093' //主题
    // , value: '2018-08-18-2018-08-30' //必须遵循format参数设定的格式
    // 初始打开回调
    , ready: function (date) {
      console.log('初始date', date); //得到初始的日期时间对象：{year: 2018, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
    }
    // 日期切换后回调
    , change: function (value, date, endDate) {
      console.log('切换后value', value); //得到日期生成的值，如：2017-08-18
      console.log('切换后对象date', date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
      console.log('切换后得结果对象endDate', endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
    }
    // 选择完毕后的回调
    , done: function (value, date, endDate) {
      console.log('选择完毕后value', value); //得到日期生成的值，如：2017-08-18
      console.log('选择完毕后date', date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
      console.log('选择完毕后endDate', endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
    }
  });
});


// 图表
echartsBox()

function echartsBox() {
  // bat_2 饼状图
  bat2_pie1 = echarts.init(document.getElementById("bat2_pie1"));
  bat2_pie1.setOption({
    color: ["#fe0100", "#00ff36", "#3399ff"],
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
      textStyle: {
        fontSize: nowSize(14)
        // fontSize: fontSize(0.12),
      }
    },
    legend: {
      orient: "horizontal",
      top: "15%",
      right: "10%",
      data: ["可放电量", "可充电量"],
      textStyle: {
        color: "#fff",
        // fontSize: fontSize(0.16),
        fontSize: nowSize(14)
      },
      itemWidth: nowSize(10),
      itemHeight: nowSize(10),
      itemGap: nowSize(12)
    },
    series: [{
      name: "电量",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      label: {
        textStyle: {
          color: "#fff",
          fontSize: nowSize(14)
        },
        lineStyle: {
          width: nowSize(1)
        }
      },
      labelLine: {
        white: nowSize(1),
        length: nowSize(12),
        length2: nowSize(12)
      },
      // startAngle: -20,  // 起始角度
      data: [{
        value: 30,
        name: "可放电量"
      },
      {
        value: 70,
        name: "可充电量"
      }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: nowSize(10),
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)"
        }
      }
    }]
  });
  bat2_pie1.resize();

  // bat_2 柱状图
  bat2_line = echarts.init(document.getElementById("bat2_line"));
  bat2_line.setOption({
    color: ["#03ff31", "#ff0301", "#616067"],
    legend: {
      top: "5%",
      right: "10%",
      textStyle: {
        color: "#768ea3",
        fontSize: nowSize(14)
      },
      itemWidth: nowSize(10),
      itemHeight: nowSize(10),
      itemGap: nowSize(12)
    },
    tooltip: {},
    grid: {
      top: "20%",
      left: "10%",
      right: "10%",
      bottom: "10%",
      containLabel: true
    },
    dataset: {
      source: [
        ["星期", "充电", "放电"],
        ["周一", 70, 40],
        ["周二", 80, 85],
        ["周三", 100, 110],
        ["周四", 140, 100],
        ["周五", 100, 95],
        ["周六", 70, 40],
        ["周日", 80, 85]
      ]
    },
    xAxis: [{
      type: "category",
      axisLine: {
        lineStyle: {
          type: "solid",
          color: "#768ea3", //轴线的颜色
          width: nowSize(1) //坐标线的宽度
        },
        textStyle: {
          fontSize: nowSize(20)
        }
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#a1d8f1",
          fontSize: nowSize(14)
        }
      }
    }],

    yAxis: [{
      name: "( kWh )",
      type: "value",
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#45647f",
          width: nowSize(1),
          type: "solid"
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#a1d8f1",
          fontSize: nowSize(14)
        }
      }
    }],
    series: [{
      type: "bar",
      barWidth: nowSize(15)
    },
    {
      type: "bar",
      barWidth: nowSize(15)
    }
    ]
  });
  bat2_line.resize();

  // bat_2 折线图
  bat2_line2 = echarts.init(document.getElementById("bat2_line2"));
  bat2_line2.setOption({
    color: ["#235b7f", "#30776a", "#616067"],
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985"
        }
      },
      textStyle: {
        fontSize: nowSize(14)
      }
    },
    grid: {
      top: "15%",
      left: "10%",
      right: "5%",
      bottom: "0",
      containLabel: true
    },
    dataset: {
      source: [
        ["日期", "功率"],
        ["7/17\n00:00", -10],
        ["7/24\n14:00", 120],
        ["7/31\n16:00", 60],
        ["8/7\n18:00", 90],
        ["8/14\n20:00", 120],
        ["8/21\n22:00", 70],
        ["8/29\n00:00", 80],
        ["9/5\n14:00", 60],
        ["10/12\n16:00", 240],
        ["10/19\n18:00", 300]
      ]
    },

    xAxis: [{
      type: "category",
      boundaryGap: true, // 间隔
      axisLine: {
        lineStyle: {
          type: "solid",
          color: "#5864a1", //轴线的颜色
          width: nowSize(1) //坐标线的宽度
        },
        onZero: false
      },
      axisLabel: {
        show: true,
        textStyle: {
          fontSize: nowSize(14)
        },
        interval: 0,
        rotate: 40
      },
      axisTick: {
        alignWithLabel: true
      }
    }],

    yAxis: [{
      name: "( KW )",
      nameTextStyle: {
        fontSize: nowSize(14),
        align: 'center',
        verticalAlign: 'bottom'

      },
      type: "value",
      min: -120,
      max: 300,
      // splitNumber: 8,
      axisLine: {
        lineStyle: {
          type: "solid",
          color: "#5864a1", //轴线的颜色
          width: nowSize(1) //坐标线的宽度
        }
      },
      axisLabel: {
        textStyle: {
          fontSize: nowSize(14)
        }
      },
      splitLine: {
        // 分隔线
        show: false,
        lineStyle: {
          color: ["#5864a1"],
          width: nowSize(1)
        }
      },
      scale: true
    }],
    series: [{
      symbol: null,
      // smooth: true,
      name: "订单数量",
      type: "line",
      stack: "总量",
      symbol: "circle", //圆点样式'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
      symbolSize: nowSize(6), //圆点大小
      hoverAnimation: {
        symbol: "rect",
        symbolSize: nowSize(2)
      },
      itemStyle: {
        normal: {
          color: "#fcfdfa",
          areaStyle: {
            type: "default",
            //渐变色实现
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                offset: 0,
                color: "#9d83d8"
              },
              {
                offset: 1,
                color: "rgba(108,80,243,0)"
              }
              ],
              false
            ),
            shadowColor: "rgba(108,80,243, 0.9)",
            shadowBlur: nowSize(20)
          },
          lineStyle: {
            //线的颜色
            color: "#d499fe",
            width: nowSize(1)
          },
          label: {
            //以及在折线图每个日期点顶端显示数字
            show: false,
            position: "top",
            textStyle: {
              color: "white",
              fontSize: nowSize(14)
            }
          }
        }
      },
    }]
  });
  bat2_line2.resize();
}

// 管道特效
canvasBox()
function canvasBox() {
  canvas_w();
  function canvas_w() {
    var data = {
      time: nowSize(350), //运动速度
      mx: 0, //起点位置
      my: nowSize(6),
      ly: nowSize(6),
      canvas_w: nowSize(40),
      canvas_h: nowSize(6),
      color: "#27950e", //颜色
      vx: nowSize(5), //横向流动速度
      vy: 0,
      line_w: nowSize(100), //线高
      fx: "w",
      width: nowSize(20), //线长
      jiange: nowSize(25), //间隔
    };
    // console.log('canvas_w', data.canvas_w)
    var res = new Createline(data);
    res.begin("w1", data);
    res.begin("w2", data);
    res.begin("w3", data);
    res.begin("w4", data);
    res.begin("w5", data);
  }
  canvas_w2();

  function canvas_w2() {
    var data = {
      time: nowSize(300), //运动速度
      mx: 0, //起点位置
      my: nowSize(6),
      ly: nowSize(6),
      canvas_w: nowSize(164),
      canvas_h: nowSize(6),
      color: "#27950e", //颜色
      vx: nowSize(5), //横向流动速度
      vy: 0,
      line_w: nowSize(100), //线高
      fx: "w",
      width: nowSize(25), //线长
      jiange: nowSize(30), //间隔
    };
    // console.log('canvas_w', data.canvas_w)
    var res = new Createline(data);
    res.begin("w5", data);
    res.begin("w6", data);
    res.begin("w7", data);
    res.begin("w8", data);
    res.begin("w9", data);
    res.begin("w10", data);
    res.begin("w11", data);
  }

  canvas_h1();

  function canvas_h1() {
    var data = {
      time: nowSize(150), //运动速度
      mx: 0, //起点位置
      my: nowSize(6),
      ly: nowSize(6),
      canvas_w: nowSize(200),
      canvas_h: nowSize(10),
      color: "#27950e", //颜色
      vx: nowSize(5), //横向流动速度
      vy: 0,
      line_w: nowSize(100), //线高
      fx: "w",
      width: nowSize(50), //线长
      jiange: nowSize(30), //间隔
    };
    var res = new Createline(data);
    res.begin("h1", data);
  }
  canvas_h2();

  function canvas_h2() {
    var data = {
      time: nowSize(350), //运动速度
      mx: 0, //起点位置
      my: nowSize(6),
      ly: nowSize(6),
      canvas_w: nowSize(200),
      canvas_h: nowSize(10),
      color: "#27950e", //颜色
      vx: nowSize(5), //横向流动速度
      vy: 0,
      line_w: nowSize(100), //线高
      fx: "w",
      width: nowSize(60), //线长
      jiange: nowSize(40), //间隔
    };
    var res = new Createline(data);
    res.begin("h2", data);
    res.begin("h3", data);
    res.begin("h4", data);
    res.begin("h5", data);
    res.begin("h6", data);
    res.begin("h7", data);
    res.begin("h8", data);
    res.begin("h9", data);
    res.begin("h10", data);
    res.begin("h11", data);
    res.begin("h12", data);
    res.begin("h13", data);
    res.begin("h14", data);
    res.begin("h15", data);
  }
}
