

// .checked method to see if a checkbox is checked or not
// if (document.querySelector('#lowercase').checked) {
//     alert("The box is checked!");
// }
//                                                      Elements
var lowerEl = document.querySelector("#lowercase")
var upperEl = document.querySelector("#uppercase")
var numEl = document.querySelector("#numbers")
var symbolEl = document.querySelector("#symbols")

var passwordLength = document.querySelector("#passLength")
var genButton = document.querySelector("#generatorButton")

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


// now to do the same with upper and lowercase letters
// upper chars appear to be 65 - 90
function randomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

// lowercase is as easy as taking the randomUpper function and adding .toLowerCase() at the end
function randomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65).toLowerCase()
}

function randomSymbol() {
    // symbol list 0-14 need to pick a random symbol from this list.
    return symbolList[Math.floor(Math.random() * 14)];
}
// now lets make a variable for length and the generator button

// now that I have the random functions generated I have to attach event listers to see what the user has input on the form.
// maybe I can just add something on the generator button that looks at each part of the form rather than updating it whenever a checkbox is clicked.
genButton.addEventListener("click", function () {
    //get values for elements above.
    // unary operator '+' will make it an int
    var length = +passwordLength.value;
    var lowerCheck = lowerEl.checked;
    var upperCheck = upperEl.checked;
    var symbolCheck = symbolEl.checked;
    var numCheck = numEl.checked;
})


//I need to make a function that creates a random password based on the input from the user.
randomArr = [randomNum(), randomLower(), randomUpper(), randomSymbol()]
// randomly selects one of the randomizers.
function randomRandomizer() {
    return randomArr[Math.floor(Math.random() * randomArr.length)]
}

// function passwordGenerator() {
//     for (i = 0; i < passwordLength; i++) {
//         if (lowerCheck === false) {
//             delete randomArr[1];
//         }
//         if (upperCheck === false) {
//             delete randomArr[2];
//         }
//         if (numCheck === false) {
//             delete randomArr[0];
//         }
//         if (symbolCheck === false) {
//             delete randomArr[3];
//         }
//         else {
//             newPassword += randomRandomizer();
//             giveNewPass();
//         }
//     }
// }


