//   //当前视口宽度
//   let nowClientWidth = document.documentElement.clientWidth;

//   //  换算方法
//   function nowSize(val, initWidth = 1920) {
//     return val * (nowClientWidth / initWidth);
//   }

w1();

function w1() {
    var data = {
        time: 60, //运动速度
        mx: 0, //起点位置
        my: 6,
        ly: 6,
        canvas_w: nowSize(200),
        canvas_h: nowSize(10),
        color: "#27950e", //颜色
        vx: 5, //横向流动速度
        vy: 0,
        line_w: nowSize(10), //线高
        fx: "w",
        width: nowSize(10), //线长
        jiange: nowSize(10), //间隔
    };
    // console.log('canvas_w', data.canvas_w)
    var res = new Createline(data);
    res.begin("w1", data);
}

// w2();

// function w2() {
//     var data = {
//         time: 60, //运动速度
//         mx: 0, //起点位置
//         my: 6,
//         ly: 6,
//         canvas_w: 100,
//         canvas_h: 10,
//         color: "#27950e", //颜色
//         vx: 5, //横向流动速度
//         vy: 0,
//         line_w: 10, //线高
//         fx: "w",
//         width: 10, //线长
//         jiange: 10, //间隔
//     };
//     var res = new Createline(data);
//     res.begin("w2", data);
// }

// h1();

// function h1() {
//     var data = {
//         time: 60, //运动速度
//         mx: 0, //起点位置
//         my: 6,
//         ly: 6,
//         canvas_w: 100,
//         canvas_h: 10,
//         color: "#27950e", //颜色
//         vx: 5, //横向流动速度
//         vy: 0,
//         line_w: 10, //线高
//         fx: "w",
//         width: 10, //线长
//         jiange: 10, //间隔
//     };
//     var res = new Createline(data);
//     res.begin("h1", data);
// }
// h2()

// function h2() {
//     var data = {
//         time: 60, //运动速度
//         mx: 0, //起点位置
//         my: 6,
//         ly: 6,
//         canvas_w: 100,
//         canvas_h: 10,
//         color: "#27950e", //颜色
//         vx: 5, //横向流动速度
//         vy: 0,
//         line_w: 10, //线高
//         fx: "w",
//         width: 10, //线长
//         jiange: 10, //间隔
//     };
//     var res = new Createline(data);
//     res.begin("h2", data);
// }







// f2();
// function f2() {
//     var data = {
//         time: 60, //运动速度
//         mx: 0, //起点位置
//         my: 6,
//         ly: 6,
//         canvas_w: 580,
//         canvas_h: 10,
//         color: "#27950e", //颜色
//         vx: 5,
//         vy: 0,
//         line_w: 10,
//         fx: "w",
//         width: 10, //线长
//         jiange: 10, //间隔
//     };
//     var res = new Createline(data);
//     res.begin("bottom", data);
// }
// f3();
// function f3() {
//     var data = {
//         time: 60, //运动速度
//         mx: 0, //起点位置
//         my: 6,
//         ly: 6,
//         canvas_w: 280,
//         canvas_h: 10,
//         color: "#27950e", //颜色
//         vx: 5,
//         vy: 5,
//         line_w: 10,
//         fx: "w",
//         width: 10, //线长
//         jiange: 10, //间隔
//     };
//     var res = new Createline(data);
//     res.begin("left", data);
// }
// f4();
// function f4() {
//     var data = {
//         time: 60, //运动速度
//         mx: 0, //起点位置
//         my: 6,
//         ly: 6,
//         canvas_w: 280,
//         canvas_h: 10,
//         color: "#27950e", //颜色
//         vx: 4,
//         vy: 0,
//         line_w: 10,
//         fx: "w",
//         width: 10, //线长
//         jiange: 10, //间隔
//     };
//     var res = new Createline(data);
//     res.begin("right", data);
// }