function exportCanvas() {
    const link = document.createElement('a');
    link.download = 'design.png';
    link.href = canvas.toDataURL();
    link.click();
}
// Example: exportCanvas();function drawPolygon(points) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach(p => ctx.lineTo(p.x, p.y));
    ctx.closePath();
    ctx.stroke();
}
// Example usage: drawPolygon([{x: 100, y: 100}, {x: 200, y: 100}, {x: 150, y: 200}]);
function snap(x, y) {
    if (!snapping) return { x, y };
    return { x: Math.round(x / gridSize) * gridSize, y: Math.round(y / gridSize) * gridSize };
}
// Use snap() on mouse coordinates before drawing.
document.getElementById('applyInput').addEventListener('click', () => {
    const rel = document.getElementById('relativeInput').value;
    const ang = document.getElementById('angleInput').value;
    // Parse and apply, e.g., offset next drawing point
    console.log('Relative:', rel, 'Angle:', ang);
});
