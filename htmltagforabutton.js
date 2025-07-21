<button type="button" id="myButton">Click Me</button>

<script>
  // Get a reference to the button element
  const button = document.getElementById('myButton');

  // Add an event listener to handle the click event
  button.addEventListener('click', function() {
    alert('Button clicked!');
  });
</script>