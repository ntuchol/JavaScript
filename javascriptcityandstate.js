function initAutocomplete() {
  const input = document.getElementById("city-state-input");
  const autocomplete = new google.maps.places.Autocomplete(input, {
    types: ["(cities)"],
  });

  autocomplete.addListener("place_changed", () => {
    const place = autocomplete.getPlace();
    console.log("City:", place.address_components[0].long_name);
    console.log("State:", place.address_components[1].short_name);
  });
}

async function getCityState(zipCode) {
  const response = await fetch(`https://api.zippopotam.us/us/${zipCode}`);
  if (response.ok) {
    const data = await response.json();
    console.log("City:", data.places[0]["place name"]);
    console.log("State:", data.places[0]["state abbreviation"]);
  } else {
    console.error("Invalid ZIP Code");
  }
}

getCityState("35203"); // Example ZIP code


const cityStateData = [
  { city: "Birmingham", state: "AL" },
  { city: "Montgomery", state: "AL" },
  { city: "Mobile", state: "AL" },
];

function populateDropdown() {
  const dropdown = document.getElementById("city-dropdown");
  cityStateData.forEach(({ city, state }) => {
    const option = document.createElement("option");
    option.value = `${city}, ${state}`;
    option.textContent = `${city}, ${state}`;
    dropdown.appendChild(option);
  });
}

populateDropdown();

