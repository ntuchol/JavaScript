 <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bouncing Ball</title>
        <style>
            canvas {
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <canvas id="bouncingBallCanvas" width="600" height="400"></canvas>
        <script src="script.js"></script>
    </body>
    </html>
  
      const canvas = document.getElementById('bouncingBallCanvas');
    const ctx = canvas.getContext('2d');

    let x = 50; // Initial x position
    let y = 50; // Initial y position
    let dx = 5; // x velocity
    let dy = 5; // y velocity
    const radius = 20; // Ball radius

    function drawBall() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.closePath();
    }

    function update() {
        // Update position
        x += dx;
        y += dy;

        // Bounce off walls
        if (x + radius > canvas.width || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > canvas.height || y - radius < 0) {
            dy = -dy;
        }

        drawBall(); // Redraw ball at new position
        requestAnimationFrame(update); // Loop animation
    }

    update(); // Start the animation