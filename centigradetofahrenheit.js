function convertCelsiusToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

// Example usage:
const tempInCelsius = 25;
const tempInFahrenheit = convertCelsiusToFahrenheit(tempInCelsius);
console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`); // Output: 25°C is equal to 77°F
