function convert() {

  const input = document.getElementById("temp");
  const unit = document.getElementById("unit").value;
  const error = document.getElementById("error");

  const value = Number(input.value);

  if (input.value.trim() === "" || isNaN(value)) {
    error.textContent = "Please enter a valid numeric temperature.";
    return;
  }

  let c, f, k;

  if (unit === "c") {
    c = value;
    f = c * 9 / 5 + 32;
    k = c + 273.15;
  }

  if (unit === "f") {
    f = value;
    c = (f - 32) * 5 / 9;
    k = c + 273.15;
  }

  if (unit === "k") {
    k = value;
    c = k - 273.15;
    f = c * 9 / 5 + 32;
  }

  if (c < -273.15) {
    error.textContent = "Temperature cannot be below absolute zero.";
    return;
  }

  error.textContent = "";

  document.getElementById("celsius").textContent =
    c.toFixed(2) + " °C";

  document.getElementById("fahrenheit").textContent =
    f.toFixed(2) + " °F";

  document.getElementById("kelvin").textContent =
    k.toFixed(2) + " K";
    
  document.getElementById("temp").addEventListener("input", function () {
    const error = document.getElementById("error");

    if (this.value !== "" && isNaN(Number(this.value))) {
      error.textContent = "Please enter a valid numeric temperature.";
    } else {
      error.textContent = "";
    }
  });
}
