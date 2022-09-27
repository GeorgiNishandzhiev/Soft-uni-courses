function solve (firstSum, SecondSum, ThirdSum) {
let sum = firstSum + SecondSum + ThirdSum

sum % 1 === 0 ? sum += ' - Integer' : sum += ' - Float'
console.log(sum);
} solve (9, 100, 1.1)