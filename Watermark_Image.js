const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const image = new Image();
image.src = 'path/to/your/image.jpg'; // Replace with your image path

image.onload = function() {
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);

    // Watermark text properties
    context.font = '30px Arial';
    context.fillStyle = 'rgba(255, 255, 255, 0.5)'; // White, 50% opacity
    context.textAlign = 'right';
    context.textBaseline = 'bottom';

    // Draw watermark text
    context.fillText('My Watermark', canvas.width - 10, canvas.height - 10);

    // To get the watermarked image data URL:
    // const dataURL = canvas.toDataURL('image/png');
    // console.log(dataURL);
};