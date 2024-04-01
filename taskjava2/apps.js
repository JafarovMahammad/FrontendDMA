// 1.// let number = parseInt(prompt("Ikirəqəmli ədədi daxil edin:"));

// while (number < 100) {
//   number += 7;
// }
// console.log("Üçrəqəmli ədəd:", number);

// 2.// let N = parseInt(prompt("Mesajı çıxarmaq üçün sayını daxil edin:"));

// for (let i = 0; i < N; i++) {
//     console.log("I know how to use cycles");
// }

// 3.// for (let i = 100; i < 1000; i++) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
// }

// 4.
// let sum = 0;
// for (let i = 10; i <= 99; i++) {
//     if (i % 2 !== 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// 5.
// let number = parseInt(prompt("Ədədi daxil edin:"));
// let sum = 0;

// for (let i = 100; i <= 999; i++) {
//     if (number % i === 0) {
//         sum += i; 
//     }
// }
// console.log( number, "is", sum);

// 6.
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimes(upTo) {
//     for (let i = 2; i <= upTo; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// let upTo = parseInt(prompt("Enter a number to find all primes up to:"));
// console.log(`Prime numbers up to ${upTo}:`);
// printPrimes(upTo);

// 7.
// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimesDescending(from) {
//     for (let i = from; i >= 2; i--) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// let n = parseInt(prompt("Enter a number:"));
// console.log(`Prime numbers from ${n} to 0 in descending order:`);
// printPrimesDescending(n);

// 8.
// let product = 1;

// for (let i = 1; i <= 10; i++) {
//     product *= i;
// }

// console.log("The product of all numbers up to 10 is:", product);

// 9.

// let userInput = prompt ("Metn daxil edin")
// let reversedText = "";

// for (let i = userInput.length - 1; i >= 0; i--) {    
    
//     reversedText += userInput[i]
// }

// console.log(reversedText);

// 10.

// let text = "."; 
// let index = text.indexOf(".");

// console.log(index);


// let text = prompt("metni daxil edin");

// function containsNumbers(text) {
//     return /\d/.test(text);
// }

// if (containsNumbers(text)) {
//     console.log("metnde reqemler var");
// } else {
//     console.log("metnde reqemler yoxdur");
// }
