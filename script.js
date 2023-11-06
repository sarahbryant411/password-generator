// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var password = "";
  var allowedChars = []

  var length = prompt("What is the length of your password between 8 and 128 chars long", 8);
  var lowercase = confirm("Would you like to use lowecase letters in your password?");
  if (lowercase) allowedChars = allowedChars.concat(lowerCasedCharacters);
  console.log(allowedChars)
  var uppercase = confirm("Would you like to use any uppercase letters in your password?");
  if (uppercase) allowedChars = allowedChars.concat(upperCasedCharacters);
  console.log(allowedChars)
  var numerics = confirm("Would you like to use numeric characters in your password?");
  if (numerics) allowedChars = allowedChars.concat(numericCharacters);
  console.log(allowedChars)
  var special = confirm("Would you like to use any special characters in your password?");
  if (special) allowedChars = allowedChars.concat(specialCharacters);
  console.log(allowedChars)
  for (let index = 0; index < length; index++) {
    var random = Math.floor(Math.random() * allowedChars.length)
    var char = allowedChars[random]
    password += char
  }
  // ask the user the questions
  // generate characters for password and assign them to var password

  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
