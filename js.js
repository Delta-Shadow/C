function drawSymbol() {
    let canvas = document.getElementById("symbol");
    let ctx = canvas.getContext("2d");

    let w = canvas.width;
    let h = canvas.height;

    ctx.fillStyle = "rgb(100, 100, 100)";
    ctx.strokeStyle = "rgb(100, 100, 100)";

    ctx.beginPath();

    ctx.moveTo(w/2, 0);
    ctx.lineTo(4*w/5, h);
    ctx.lineTo(w/5, h);

    ctx.closePath();

    ctx.stroke();
}

drawSymbol();
