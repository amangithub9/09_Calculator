const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["%", "*", "/", "-", "+"];

let output = "";

const calculate = (btnValue) => {
  if (btnValue === "=") {
    if (output !== "") {
      output = eval(output.replace("%", "/100"));
      display.value = output;
    }
  } else if (btnValue === "AC") {
    output = "";
    display.value = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
    display.value = output;
  } else {
    if (
      specialChar.includes(btnValue) &&
      specialChar.includes(output[output.length - 1])
    ) {
      // Replace the last operator with the new one
      output = output.slice(0, -1) + btnValue;
    } else {
      output = output + btnValue;
    }
    display.value = output;
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
