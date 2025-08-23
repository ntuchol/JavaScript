document.addEventListener('DOMContentLoaded', function() {
        const myButton = document.getElementById('myButton');
        const myInput = document.getElementById('myInput');
        const outputParagraph = document.getElementById('output');

        myButton.addEventListener('click', function() {
            const inputValue = myInput.value;
            outputParagraph.textContent = 'You entered: ' + inputValue;
            myInput.value = ''; // Clear the input field after submission
        });
    });