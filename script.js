// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Variables to querySelector eleents from HTML file. # selects elements by their 'id' attribute.
let pLength = document.querySelector("#p-length");
let pUpperCase = document.querySelector("#p-uppercase");
let pLowerCase = document.querySelector("#p-lowercase");
let pNumbers = document.querySelector("#p-numbers");
let pSymbols = document.querySelector("#p-symbols");
let pGenerate = document.querySelector("#generate");

// Length input (number of length as user selects on the slider) is updated on the span element (id=sliderNum
document.querySelector("#p-length").addEventListener("input", function(){
document.querySelector("#sliderNum").innerHTML = this.value;
});


// Function for getting a random element from an array
function getRandom(arr) {
  var randomEl = Math.floor(Math.random() * arr.length);
  return arr[randomEl];
}

function generatePassword() {
  // Variables to check the value of length range and state of the password setting options, if it's checked.
  let length = pLength.value;
  let uppercase = pUpperCase.checked;
  let lowercase = pLowerCase.checked;
  let numbers = pNumbers.checked;
  let symbols = pSymbols.checked;

  // Empty array to store the character sets used to generate password.
  let initialPassword = [];

  // Checks the condition of the password setting using 'if' statements, concatenating the empty array with the characters 'if'
  // password setting option (characters) is selected.
  if (uppercase) initialPassword = initialPassword.concat(upperCasedCharacters);
  if (lowercase) initialPassword = initialPassword.concat(lowerCasedCharacters);
  if (numbers) initialPassword = initialPassword.concat(numericCharacters);
  if (symbols) initialPassword = initialPassword.concat(specialCharacters);

  //Empty string to store final password.
  let generatedPassword = "";

  // For loop to iterate over the final password's number length (length of password).
  // The loop calls getRandom() function with initialPassword passed as the argument.
  // getRandom() randomly selects characters from initialPassword array
  // which is added to the generatedPassword to return the final password characters.
  for (let i = 0; i < length; i++) {
    generatedPassword += getRandom(initialPassword);
  }
  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
