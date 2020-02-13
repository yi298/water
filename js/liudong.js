f1();

function f1() {
    var data = {
        time: 60, //运动速度
        mx: 0, //起点位置
        my: 6,
        ly: 6,
        canvas_w: 164,
        canvas_h: 6,
        color: "#27950e", //颜色
        vx: 5, //横向流动速度
        vy: 0,
        line_w: 6, //线高
        fx: "w",
        width: 10, //线长
        jiange: 10, //间隔
    };
    var res = new Createline(data);
    res.begin("top", data);
}
f2();

function f2() {
    var data = {
        time: 60, //运动速度
        mx: 0, //起点位置
        my: 6,
        ly: 6,
        canvas_w: 1000,
        canvas_h: 10,
        color: "#27950e", //颜色
        vx: 5,
        vy: 0,
        line_w: 10,
        fx: "w",
        width: 10, //线长
        jiange: 10, //间隔
    };
    var res = new Createline(data);
    res.begin("bottom", data);
}
f3();

function f3() {
    var data = {
        time: 60, //运动速度
        mx: 0, //起点位置
        my: 6,
        ly: 6,
        canvas_w: 6,
        canvas_h: 90,
        color: "#27950e", //颜色
        vx: 5,
        vy: 5,
        line_w: 10,
        fx: "w",
        width: 10, //线长
        jiange: 10, //间隔
    };
    var res = new Createline(data);
    res.begin("left", data);
}
f4();

function f4() {
    var data = {
        time: 60, //运动速度
        mx: 0, //起点位置
        my: 6,
        ly: 6,
        canvas_w: 280,
        canvas_h: 10,
        color: "#27950e", //颜色
        vx: 4,
        vy: 0,
        line_w: 10,
        fx: "w",
        width: 10, //线长
        jiange: 10, //间隔
    };
    var res = new Createline(data);
    res.begin("right", data);
}