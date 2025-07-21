<!DOCTYPE html>
<html>
<head>
<title>Large Millisecond Clock</title>
<style>
  #clock {
    font-size: 8em; /*  Large font size */
    font-family: monospace; /*  Ensures consistent spacing */
    color: #333; /*  Dark gray color */
    text-align: center;
    padding-top: 50px;
  }
</style>
</head>
<body>

<div id="clock"></div>

<script>
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();

  // Add leading zeros
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  milliseconds = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

  document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

// Update the clock every 10 milliseconds for a smoother millisecond display
setInterval(updateClock, 10);
</script>

</body>
</html>