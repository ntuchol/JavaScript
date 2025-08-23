<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three Images Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .image-container {
            display: flex;
            gap: 20px; /* Space between images */
            margin-top: 20px;
        }
        .image-container img {
            max-width: 300px; /* Limit image size */
            height: auto;
            border: 1px solid #ddd;
            box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <h1>My Three Images</h1>
    <div id="imageGallery" class="image-container">
        <!-- Images will be added here by JavaScript -->
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const imageSources = [
                'image1.jpg', // Replace with your image paths
                'image2.png',
                'image3.gif'
            ];

            const imageGallery = document.getElementById('imageGallery');

            imageSources.forEach(src => {
                const imgElement = document.createElement('img');
                imgElement.src = src;
                imgElement.alt = 'A descriptive alt text for the image'; // Important for accessibility
                imageGallery.appendChild(imgElement);
            });
        });
    </script>
</body>
</html>