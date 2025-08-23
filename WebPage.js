let currentDate = new Date();
currentDate.setMonth(currentDate.getMonth() + 12);
let futureDateString = currentDate.toLocaleDateString(); // Example: "8/16/2026"
let futureDateString = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }); // Example: "August 16, 2026"
 <p id="futureDate"></p>
     document.getElementById('futureDate').textContent = "Date 12 months from now: " + futureDateString;

<!DOCTYPE html>
<html>
<head>
<title>Date Calculation</title>
</head>
<body>

<h1>Future Date Calculator</h1>
<p id="futureDate"></p>

<script>
    // 1. Create a Date object for the current date
    let currentDate = new Date();

    // 2. Add 12 months to the current date
    currentDate.setMonth(currentDate.getMonth() + 12);

    // 3. Format the resulting date for display
    let futureDateString = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    // 4. Write the formatted date to a web page element
    document.getElementById('futureDate').textContent = "The date 12 months from now will be: " + futureDateString;
</script>

</body>
</html>