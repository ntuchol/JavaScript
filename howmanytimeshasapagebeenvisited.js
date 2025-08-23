<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Visit Counter</title>
</head>
<body>
    <h1>Welcome!</h1>
    <p>You have visited this page <span id="visitCount"></span> time(s).</p>

    <script>
        // Get the current visit count from localStorage
        let visitCount = localStorage.getItem('pageVisitCount');

        // If no count exists, initialize it to 0
        if (visitCount === null) {
            visitCount = 0;
        } else {
            // Convert the stored string to a number
            visitCount = parseInt(visitCount);
        }

        // Increment the visit count
        visitCount++;

        // Store the updated count in localStorage
        localStorage.setItem('pageVisitCount', visitCount);

        // Display the count on the page
        document.getElementById('visitCount').textContent = visitCount;
    </script>
</body>
</html>