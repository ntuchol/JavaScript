<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Links</title>
</head>
<body>
    <h1>My Dynamic Links</h1>
    <div id="linksContainer">
        <!-- Links will be added here by JavaScript -->
    </div>

    <script>
        const linksData = [
            { text: "Google", url: "https://www.google.com" },
            { text: "OpenAI", url: "https://openai.com" },
            { text: "MDN Web Docs", url: "https://developer.mozilla.org" }
        ];

        const linksContainer = document.getElementById("linksContainer");

        linksData.forEach(linkInfo => {
            const anchor = document.createElement("a");
            anchor.href = linkInfo.url;
            anchor.textContent = linkInfo.text;
            anchor.target = "_blank"; // Open link in a new tab

            const listItem = document.createElement("li"); // Optional: wrap in a list item for better styling/structure
            listItem.appendChild(anchor);
            linksContainer.appendChild(listItem);
        });
    </script>
</body>
</html>