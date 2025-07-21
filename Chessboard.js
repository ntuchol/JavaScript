function createChessboard(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.classList.add('square');

            // Determine square color
            if ((row + col) % 2 === 0) {
                square.classList.add('light'); // Apply light color class
            } else {
                square.classList.add('dark');  // Apply dark color class
            }

            container.appendChild(square);
        }
    }
}

// Example usage:
// In your HTML, have a div with id="chessboard-container"
// <div id="chessboard-container"></div>
// Then call:
// createChessboard('chessboard-container');