// Get the file input element
const fileInput = document.getElementById('familyPhotoUpload');
// Get the image element to display the photo
const imageDisplay = document.getElementById('displayedFamilyPhoto');

// Listen for changes in the file input (when a user selects a file)
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Get the first selected file

    if (file) {
        const reader = new FileReader(); // Create a FileReader object

        reader.onload = function(e) {
            // When the file is loaded, set the image source
            imageDisplay.src = e.target.result;
        };

        // Read the file as a data URL (base64 encoded image)
        reader.readAsDataURL(file);
    }
});