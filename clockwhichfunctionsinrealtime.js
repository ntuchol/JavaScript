    <div id="clock"></div>
      let time = new Date();
      let hour = time.getHours();
      let min = time.getMinutes();
      let sec = time.getSeconds();
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      sec = sec < 10 ? "0" + sec : sec;
        // Add logic for 12-hour format and AM/PM if desired
      document.getElementById("clock").innerHTML = hour + ":" + min + ":" + sec;
      setInterval(updateClock, 1000); // Assuming updateClock is the function containing the above logic
    updateClock(); // Call the function once to display the clock immediately
