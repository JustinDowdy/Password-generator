// Assignment code here
function popUpBox() {
  //alert("Please enter your password length: ");
  var userPasswordLength = prompt("Please enter your password length:", "");

  //This if checks for too short or too long of password.
  if (userPasswordLength <= 8 || userPasswordLength >= 112) {
    alert("Please enter number between 8 and 112.");
  } 
  
  //If password is correct length, then check for password options.
  //NOTE TO ME: Do all this stuff if the password length is right.
  if (userPasswordLength >= 8 && userPasswordLength <= 112){
    if (confirm("Do you want special characters?")) {
      var specialChar = true;
    } else {
      specialChar = false;
    }
  
    if (confirm("Do you want numeric characters?")) {
      var numericChar = true;
    } else {
      numericChar = false;
    }
  
    if (confirm("Do you want upper case characters?")) {
      var upperCaseChar = true;
    } else {
      upperCaseChar = false;
    }
  
    if (confirm("Do you want lowercase characters?")) {
      var lowerCaseChar = true;
    } else {
      lowerCaseChar = false;
    }

    writePassword(userPasswordLength, specialChar, lowerCaseChar, upperCaseChar, numericChar);
  } 
}

// Write password to the #password input
function writePassword(userPasswordLength, specialChar, lowerBool, upperCaseChar, numericChar) {
  var number = Number(userPasswordLength);

  var password = generatePassword(number, specialChar, lowerBool, upperCaseChar, numericChar);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


function generatePassword(passwordLength, specialBool, lowerBool, upperCaseChar, numericChar) {
  if (numericChar == true) {
    var numberChars = "0123456789";
  } else {
    var numberChars = "";
  }

  if (upperCaseChar == true) {
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else {
    var upperChars = "";
  }

  if (lowerBool == true) {
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  } else {
    var lowerChars = "";
  }
 
  if (specialBool == true) {
    var specialChars = "!@#$%^&*";
  } else {
    var specialChars = "";
  }
  
  var allChars = numberChars + upperChars + lowerChars + specialChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

//alert(generatePassword(12));


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Add event listener to generate button
generateBtn.addEventListener("click", popUpBox);


