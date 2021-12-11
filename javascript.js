var canvas1 = document.getElementById("logo_canvas");
var ctx = canvas1.getContext("2d");

ctx.beginPath();
ctx.moveTo(52, 32);
ctx.arc(52, 32, 30, 0, Math.PI * 0.5, true);
ctx.closePath();
ctx.fillStyle = "red";
ctx.fill();
ctx.strokeStyle = "black";
ctx.lineWidth = 10;
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "orange";
ctx.rect(60, 40, 140, 50);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.setLineDash([5]);
ctx.rect(55, 35, 130, 40);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.font = "20px Gothic";
ctx.lineWidth = 1;
ctx.fillStyle = "blue";
ctx.fillText("COVID 19", 70, 60);
ctx.strokeStyle = "black";
ctx.strokeText("COVID 19", 70, 60);

var canvas2 = document.getElementById("title_canvas");
var ctx2 = canvas2.getContext("2d");

ctx2.font = "normal bold 50px Gothic";
ctx2.shadowOffsetX = 6;
ctx2.shadowOffsetY = 6;
ctx2.shadowBlur = 3;
ctx2.shadowColor = "gray";
ctx2.fillStyle = "black";
ctx2.textAlign = "center";
ctx2.fillText("코로나19 정보 모음", 500, 70);
