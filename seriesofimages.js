<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Buttons</title>
    <style>
        /* Optional: Add some styling for the image buttons */
        .image-button {
            display: inline-block;
            margin: 10px;
            border: 2px solid #ccc;
            border-radius: 5px;
            overflow: hidden; /* Ensures image doesn't overflow rounded corners */
        }
        .image-button img {
            display: block; /* Removes extra space below image */
            width: 150px; /* Adjust as needed */
            height: auto;
            cursor: pointer;
        }
        .image-button:hover {
            border-color: #007bff;
        }
    </style>
</head>
<body>

    <div id="imageButtonsContainer"></div>

    <script>
        const imageButtonsData = [
            { src: 'image1.jpg', alt: 'Image 1', link: 'page1.html' },
            { src: 'image2.jpg', alt: 'Image 2', link: 'page2.html' },
            { src: 'image3.jpg', alt: 'Image 3', link: 'page3.html' }
            // Add more image data as needed
        ];

        const container = document.getElementById('imageButtonsContainer');

        imageButtonsData.forEach(data => {
            const anchor = document.createElement('a');
            anchor.href = data.link;
            anchor.classList.add('image-button'); // Add a class for styling

            const image = document.createElement('img');
            image.src = data.src;
            image.alt = data.alt;

            anchor.appendChild(image);
            container.appendChild(anchor);
        });
    </script>

</body>
</html>