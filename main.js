var linewidth = "4";
var color = "black";
var radius = 40;
var mouseEvent="empty";
var x;
var y;
var mousedown = false;
var canvas = document.getElementById("touchCanvas");
var ctx = document.getElementById("touchCanvas").getContext("2d");
canvas.addEventListener("mousedown", Mousedown_event);
function Mousedown_event(e) {
    color = document.getElementById("color").value;
    linewidth = document.getElementById("widthofline").value;
    radius = document.getElementById("radius").value; 
    mouseEvent = "mousedown";
    mousedown = true;
    console.log(mouseEvent);
    console.log(mousedown);
}
canvas.addEventListener("mouseup", Mouseup_event);
function Mouseup_event(e) {
    mouseEvent = "mouseup";
    mousedown = false;
    console.log(mouseEvent);
    console.log(mousedown);
}
canvas.addEventListener("mouseleave", Mouseleave_event);
function Mouseleave_event(e) {
    mouseEvent = "mouseleave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", Mousemove_event);
function Mousemove_event(e) {
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
    mouseEvent = "mousemove";
    console.log(mouseEvent);
    if (mousedown == true) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseenter", Mousenter_event);
function Mousenter_event() {
    mouseEvent = "mouseenter";
    console.log(mouseEvent);
}
canvas.addEventListener("touchmove", Touchstart_event);
function Touchstart_event(e) {
    x = e.touches[0].clientX - canvas.offsetLeft;
    y = e.touches[0].clientY - canvas.offsetTop;
    mouseEvent = "touchmove";
    console.log(mouseEvent);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = linewidth;
        ctx.arc(x,y,radius,0,2*Math.PI);
        ctx.stroke();
}
canvas.addEventListener("touchstart", Touchstart_NOTTOUCHMOVEOKKKKKK);
function Touchstart_NOTTOUCHMOVEOKKKKKK(e) {
    color = document.getElementById("color").value;
    linewidth = document.getElementById("widthofline").value;
    radius = document.getElementById("radius").value;
}
function CLEARCANVAS() {
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}