// Array of specail characters to be included in password
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

function getRandom(Array) {
  var index = Math.floor(Math.random() * Array.length);
  var randomElement = Array[index];
  return randomElement;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");
var correctPwLength = false;
var pwLength;
function passwordOptions() {
  while (!correctPwLength) {
    pwLength = parseInt(
      prompt("How many charactors would you like in password?")
    );

    if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
      alert("password must be between 8 and 128 in length");
    } else {
      correctPwLength = true;
    }
  }

  var upperCase = confirm("Do you want to use uppercase text?");

  var lowerCase = confirm("Do you want to use lowecase text?");

  var numbers = confirm("Do you want to use numbers text?");

  var symbol = confirm("Do you want to use symbols text?");

  var optionsObj = {
    length: pwLength,
    upper: upperCase,
    lower: lowerCase,
    number: numbers,
    sym: symbol,
  };
  return optionsObj;
}

function generatePassword() {
  var options = passwordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  while (guaranteedCharacters.length < options.length) {
    if (options.number) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
      guaranteedCharacters.push(getRandom(numericCharacters));
      if (guaranteedCharacters.length == options.length) break;
    }
    if (options.upper) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
      guaranteedCharacters.push(getRandom(upperCasedCharacters));
      if (guaranteedCharacters.length == options.length) break;
    }
    if (options.lower) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
      guaranteedCharacters.push(getRandom(lowerCasedCharacters));
      if (guaranteedCharacters.length == options.length) break;
    }
    if (options.sym) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
      guaranteedCharacters.push(getRandom(specialCharacters));
      if (guaranteedCharacters.length == options.length) break;
    }
  }

  return guaranteedCharacters.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
