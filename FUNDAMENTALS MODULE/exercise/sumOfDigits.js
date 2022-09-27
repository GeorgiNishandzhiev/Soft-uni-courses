function solve (num) {
let numAsstring = num.toString()
let sumOfDigits = 0
let numberOfDigits = numAsstring.length
for (let index = 0; index < numberOfDigits; index++ ) {
    let currentDigit = Number (numAsstring[index])
    sumOfDigits += currentDigit
}
console.log(sumOfDigits);
} solve (245678)