function drawPolygon(points) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.closePath();
    ctx.stroke();
}
// Example usage: drawPolygon([{x: 100, y: 100}, {x: 200, y: 100}, {x: 150, y: 200}]);