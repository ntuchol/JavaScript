<form>
      <input type="radio" id="option1" name="myRadioGroup" value="Value A">
      <label for="option1">Option A</label><br>
      <input type="radio" id="option2" name="myRadioGroup" value="Value B">
      <label for="option2">Option B</label><br>
      <input type="radio" id="option3" name="myRadioGroup" value="Value C">
      <label for="option3">Option C</label><br>

      <button type="button" onclick="printSelectedRadio()">Print Selected</button>
    </form>
    
    function printSelectedRadio() {
      const radioButtons = document.querySelectorAll('input[name="myRadioGroup"]');
      let selectedValue = "";

      for (const radio of radioButtons) {
        if (radio.checked) {
          selectedValue = radio.value;
          break; // Exit loop once the checked radio is found
        }
      }

      if (selectedValue) {
        console.log("Selected radio button value:", selectedValue);
        // You can also display this value on the page, e.g., in a div
        // document.getElementById("outputDiv").textContent = "Selected: " + selectedValue;
      } else {
        console.log("No radio button selected.");
      }
    }