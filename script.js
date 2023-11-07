// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];


// A function to get the password
function generatePassword() {
  var password = "";
  var allowedChars = []

  // ask the user the questions
  // generate characters for password and assign them to var password

  var input = prompt("What is the length of your password?");
  var length = parseInt(input);
  console.log(length)
  if (length < 8 || length > 128) {
    alert("Choose a number between 8-128");
    return password;
  }
  var lowercase = confirm("Would you like to use lowercase letters in your password?");
  var uppercase = confirm("Would you like to use uppercase letters in your password?");
  var numerics = confirm("Would you like to use numeric characters in your password?");
  var special = confirm("Would you like to use any special characters in your password?");

  if (lowercase) allowedChars = allowedChars.concat(lowerCasedCharacters);
  if (uppercase) allowedChars = allowedChars.concat(upperCasedCharacters);
  if (numerics) allowedChars = allowedChars.concat(numericCharacters);
  if (special) allowedChars = allowedChars.concat(specialCharacters);

  if (!lowercase && !uppercase && !numerics && !special) {
    alert("Please choose at least one option");
    return password;


  }
  // Add an if statement here for an alert for all the vars and lump them together to simplify
  for (let index = 0; index < length; index++) {
    var random = Math.floor(Math.random() * allowedChars.length);
    var char = allowedChars[random];
    password += char;
  }
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(generatePassword) });

