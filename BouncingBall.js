const canvas = document.getElementById('bouncingBallCanvas');
const ctx = canvas.getContext('2d');

// Set canvas dimensions to fill the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 20,
    dx: 5, // horizontal speed
    dy: 5, // vertical speed
    color: 'blue'
};

// Function to draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

// Function to update ball position and handle bouncing
function update() {
    // Clear the canvas for the next frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update ball position
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce off horizontal walls
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }

    // Bounce off vertical walls
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }

    // Draw the ball in its new position
    drawBall();

    // Request the next animation frame
    requestAnimationFrame(update);
}

// Start the animation
update();