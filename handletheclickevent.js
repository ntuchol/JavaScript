// Get the element you want to add the click listener to
const myElement = document.getElementById('myButton'); 

// Define the function to be executed on click
function handleClick() {
  console.log('Button clicked!');
  // Add more logic here to perform actions
}

// Attach the event listener
myElement.addEventListener('click', handleClick); 

<button onclick="alert('Button clicked from HTML attribute!');">Click Me</button>

<button onclick="myFunction()">Call a Function</button>
<script>
  function myFunction() {
    console.log('Function called from HTML attribute!');
  }
</script>

const myButton = document.getElementById('myButton');

myButton.onclick = function() {
  console.log('Button clicked using DOM property!');
};

