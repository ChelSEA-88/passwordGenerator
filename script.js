// Assignment Code

//possible password values
var upperCase = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var lowerCase = ['abcdefghijklmnopqrstuvwxyz'];
var numbers = ['123456789']
var symbols = ['~!@#$%^&*()_+{}[];=-`']
var passRes = upperCase.concat(lowerCase, numbers, symbols)

function generatePassword() {
  //set password length  
  do {
    passLength = prompt("How long do you want your password to be? (It must be betweenn 8 and 128 characters.");
    passLength = parseInt(passLength);
  
  } while (passLength < 8 || passLength > 128 || isNaN(passLength)); 

//question booleans
const confirmUpperCase = confirm("Do you want upper case letters in your password?");
const confirmLowerCase = confirm("Do you want lower case letters in yor password?");
const confirmNumbers = confirm("Do you want numbers in your password?");
const confirmSymbols = confirm("Do you want symbols in your passord?");

//must use at least one character option warning
if ((confirmUpperCase || confirmLowerCase || confirmNumbers || confirmSymbols) == false) {
  return "You must choose at least one character option.";
}
//store possible results
passRes = "";

if (confirmUpperCase) {
  passRes = passRes.concat(upperCase);
}

if (confirmLowerCase) {
  passRes = passRes.concat(lowerCase);
}

if (confirmNumbers) {
  passRes = passRes.concat(numbers);
}

if (confirmSymbols) {
  passRes = passRes.concat(symbols);
}
//create a loop to generate random  result
accum = "";
for(var i = 0; i <= passLength; i++) {
    newPassword = Math.floor(Math.random() * Math.floor(passRes.length -1));
    accum = accum.concat(passRes.charAt(newPassword));
  }
  return accum
}

var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);