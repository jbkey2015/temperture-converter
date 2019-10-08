const toCelsius = fahrenheit => {
  let offset = fahrenheit - 32;
  let conversion = offset * (5 / 9);
  document.getElementById("converted").innerHTML =
    Math.round(conversion * 100) / 100;
    if (conversion >= 32) {
      document.getElementById('converted').style.color = 'red';
  } else if (conversion <= 0) {
      document.getElementById('converted').style.color = 'blue';
  } else if (conversation > 0 && newTemp < 32) {
      document.getElementById('converted').style.color = 'green';
  }
};

const toFahrenheit = celsius => {
  let offset = celsius * (9 / 5);
  let conversion = offset + 32;
  document.getElementById("converted").innerHTML =
    Math.round(conversion * 100) / 100;
    if (conversion <= 90) {
      document.getElementById('converted').style.color = 'blue';
  } else if (conversion >= 32) {
      document.getElementById('converted').style.color = 'red';
  } else if(conversion > 32 && conversion < 90) {
      document.getElementById('converted').style.color = 'green';
  }
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

