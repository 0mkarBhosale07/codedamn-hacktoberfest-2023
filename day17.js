const stringInput = document.querySelector("#string-input");
const submitButton = document.querySelector("#submit-input");
const errorElement = document.querySelector("#error");
const validOutputElement = document.querySelector("#valid-output");

const decimalElement = document.querySelector("#decimal-number");
const hexadecimalElement = document.querySelector("#hexadecimal-number");

let stringInputValue = "";

function generateNumber(str) {
  let decimal;
  let hexadecimal;

  if (str.startsWith("0x")) {

	
    decimal = 0;
    hexadecimal = parseInt(str.substring(2), 16);
  } else {
    decimal = parseInt(str);
    hexadecimal = parseInt(`0x${str}`);
  }

  return { decimalValue: decimal, hexadecimalValue: hexadecimal };
}

  
  

  submitButton.addEventListener("click", () => {
	stringInputValue = stringInput.value;
	errorElement.style.display = "none";
	validOutputElement.style.display = "none";
  
	stringInput.value = "";
  
	const { decimalValue, hexadecimalValue } = generateNumber(stringInputValue);
  
	if (isNaN(decimalValue) || isNaN(hexadecimalValue)) {
	  console.log({ decimalValue, hexadecimalValue });
	  errorElement.style.display = "block";
	} else {
	  decimalElement.textContent = decimalValue;
	  hexadecimalElement.textContent = hexadecimalValue;
  
	  validOutputElement.style.display = "flex";
	}
  });
  
