lowerEl = document.querySelector("#lowercaseText");

lowerEl.setAttribute("style", "color:red");

// .checked method to see if a checkbox is checked or not
// if (document.querySelector('#lowercase').checked) {
//     alert("The box is checked!");
// }
//checkboxes
var lowerCheck = document.querySelector("#lowercase").checked
var upperCheck = document.querySelector("#uppercase").checked
var numCheck = document.querySelector("#numbers").checked
var symbolCheck = document.querySelector("#symbols").checked
//password Output and a variable to store a generated password in
var passwordOut = document.querySelector("#passwordOutput")
var newPassword = " ";
// function to update output when a newPasssword is generated
function giveNewPass() {
    passwordOut.textContent = newPassword;
}
// string for my symbols
var symbolList = "!@#$%^&*(){}<>?"


// idea is to make a randomizer function for letters/numbers/symbols then apply them to seperate checkboxes on the form
// nums go from 48 - 57 key code. Use this with math.random and math.floor to get a keycode of 0-9
function randomNum() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

console.log(randomNum());

// now to do the same with upper and lowercase letters
// upper chars appear to be 65 - 90
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

console.log(randomUpper())
// lowercase is as easy as taking the randomUpper function and adding .toLowerCase() at the end
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toLowerCase()
}

console.log(randomLower())

// now that I have the random functions generated I have to attach them to a boolean that checks if a checkbox is checked or not