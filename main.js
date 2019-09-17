console.log("main.js is linked");

const toCelsius = fahrenheit => {
  let offset = fahrenheit - 32;
  let converted = offset * (5 / 9);
  document.getElementById("converted").innerHTML =
    Math.round(converted * 100) / 100;
};

const toFahrenheit = celsius => {
  let offset = celsius * (9 / 5);
  let converted = offset + 32;
  document.getElementById("converted").innerHTML =
    Math.round(converted * 100) / 100;
};



const convert = temp => {
  let fChecked = document.getElementById("fahrenheit-radio").checked;
  let cChecked = document.getElementById("celsius-radio").checked;
  if (fChecked) {
    toFahrenheit(temp);
  } else if (cChecked) {
    toCelsius(temp);
  } else {
    alert("Please select which format to convert to");
  }
};

document.getElementById("convert-button").addEventListener("click", () => {
  convert(document.getElementById("temp-to-convert").value);
});

document.getElementById("temp-to-convert").addEventListener("keyup", e => {
  if (e.keyCode == 13) {
    convert(document.getElementById("temp-to-convert").value);
  }
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("temp-to-convert").value = "";
});

