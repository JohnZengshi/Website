function toTop() {
    let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
    let step = distance / 50; //每步的距离
    (function jump() {
        if (distance > 0) {
            distance -= step;
            // document.documentElement.scrollTop = distance;
            // document.body.scrollTop = distance;
            window.scrollTo(0, distance);
            setTimeout(jump, 10)
        }
    })();
}
export {
    toTop
}