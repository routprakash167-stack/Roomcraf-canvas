const canvas = document.getElementById("cadCanvas");
const ctx = canvas.getContext("2d");

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

let scale = 1;
let originX = 0;
let originY = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(originX, originY);
    ctx.scale(scale, scale);

    drawGrid();

    ctx.restore();
}

function drawGrid() {
    const gridSize = 50;

    const startX = -originX / scale;
    const startY = -originY / scale;

    const endX = startX + canvas.width / scale;
    const endY = startY + canvas.height / scale;

    ctx.beginPath();

    for (let x = Math.floor(startX / gridSize) * gridSize; x < endX; x += gridSize) {
        ctx.moveTo(x, startY);
        ctx.lineTo(x, endY);
    }

    for (let y = Math.floor(startY / gridSize) * gridSize; y < endY; y += gridSize) {
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
    }

    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 1 / scale;
    ctx.stroke();
}

draw();
