// // start 1.
// const firstPrompt = prompt("Type something");

// const secondPrompt = prompt("Type something");

// if(firstPrompt && secondPrompt === !"") {
//     alert("Обидва поля заповнені")
// } else {
//     alert("Не всі поля заповнені")
// }
// // end 1.

// // start 2.
// const numberPromptString = prompt("Напишіть число");

// const numberPrompt = Number(numberPromptString);

// if(numberPrompt > 10) {
//     alert("Сума більша за 10")
// } else {
//     alert("Сума менша або дорівнює 10")
// }
// // end 2.

// // start 3.
// const string = prompt("Type something");

// const stringPrompt = string.includes("JavaScript");

// if(stringPrompt === true) {
//     alert("Текст містить слово JavaScript")
// } else {
//     alert("Текст не містить слово JavaScript")
// }
// // end 3.

// // start 4.
// const numberString = prompt("Напишіть число");

// const numberPrompt1 = Number(numberString);

// if(numberPrompt1 > 10 && numberPrompt1 < 20) {
//     alert("Число входить в діапазон від 10 до 20")
// } else {
//     alert("Число не входить в діапазон від 10 до 20")
// }
// end 4.

// start 5.
const formName = prompt("Name");

const formEmail = prompt("Email");

const formPassword = prompt("Password");

if(formEmail.includes("@", ".") && formName.indexOf(2) && formPassword.indexOf(5) === true) {
    alert("Confirmed")
} else {
    alert("Error")
}
// end 5.