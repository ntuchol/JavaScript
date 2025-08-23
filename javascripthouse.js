    // Example of drawing a simple house with HTML Canvas
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // House body
    ctx.fillStyle = 'brown';
    ctx.fillRect(100, 150, 200, 150);

    // Roof
    ctx.fillStyle = 'darkred';
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(200, 50);
    ctx.lineTo(300, 150);
    ctx.closePath();
    ctx.fill();

    // Window
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(140, 190, 40, 40);