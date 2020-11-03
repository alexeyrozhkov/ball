let coords = {
    x: 0,
    y: 300
}
const sign = { 
    y: -1,
    x: 1
}



setInterval(function ballMove() {
    coords.x += 1 * sign.x;
    coords.y += 1 * sign.y;
    if(coords.y <= 0) {
        sign.y = 1;
    }
    if(coords.y >= document.documentElement.clientHeight - ball.offsetHeight){
        sign.y = -1;
    }
    if(coords.x >= document.documentElement.clientWidth - ball.offsetWidth) {
        sign.x = -1;
    }
    if(coords.x <= 0) {
        sign.x = 1;
    }
    ball.style.left = coords.x + "px";
    ball.style.top = coords.y + "px";

},5);

