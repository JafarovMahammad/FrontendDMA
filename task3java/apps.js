// 1.
// function userActive(username) {
//     console.log(`${username} is active now.`);
// }
// userActive("Ali");
// userActive("Bayram");
// userActive("Zaur");

// 2.
// function findLargest(a, b, c) {
//     return Math.max(a, b, c);
// }

// function displayLargest(a, b, c) {
//     let largest = findLargest(a, b, c);
//     console.log( a + b + c + largest);
// }

// displayLargest(10, 20, 30);
// displayLargest(5, 15, 10);
// displayLargest(50, 30, 25);

// 3.
// function sumInRubles(rubleAmount, dollarAmount, exchangeRate) {
//     let totalRubles = rubleAmount + (dollarAmount * exchangeRate);
//     return totalRubles;
// }
// let rubleAccount = 1200;
// let dollarAccount = 20;
// let exchangeRate = 75;
// let totalAmountRubles = sumInRubles(rubleAccount, dollarAccount, exchangeRate);
// console.log("Amount for all deposits:", totalAmountRubles, "rubles.");

// 4.
// function numberToText(number) {
//     const tək = ["", "bir", "iki", "üç", "dörd", "beş", "alti", "yeddi", "sekkiz", "doqquz"];
//     const cüt = ["on", "on bir", "on iki", "on üç", "on dörd", "on beş", "on alti", "on yeddi", "on sekkiz", "on doqquz"];
//     const onluq = ["", "", "iyirmi", "otuz", "qırx", "əlli", "altmış", "yetmiş", "səksən", "doxsan"];

//     if (number >= 1 && number <= 9) {
//         return tək[number];
//     } else if (number >= 10 && number <= 19) {
//         return cüt[number - 10];
//     } else if (number >= 20 && number <= 99) {
//         let ten = Math.floor(number / 10);
//         let unit = number % 10;
//         return onluq[ten] + (unit !== 0 ? " " + tək[unit] : "");
//     } else {
//         return "Number out of range";
//     }
// }

// let input = parseInt(prompt("1-dən 99a kimi rəqəm daxil edin:"));
// console.log(numberToText(input));

// 5.
// function min(a, b) {
//     return (a < b) ? a : b;
// }
// let result = min(10, 5);
// console.log("Ən kiçik rəqəm:", result);

// 6.
// function calc(a, b, operator) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             if (b !== 0) {
//                 return a / b;
//             } else {
//                 return "Error: Division by zero!";
//             }
//         default:
//             return "Error: Invalid operator!";
//     }
// }

// console.log(calc(10, 2, '/'));

// 7.
// function isLucky(ticketNumber) {
//     let firstHalf = Math.floor(ticketNumber / 1000); 
//     let secondHalf = ticketNumber % 1000;

//     let sumFirstHalf = sumDigits(firstHalf);
//     let sumSecondHalf = sumDigits(secondHalf);

//     return sumFirstHalf === sumSecondHalf;
// }

// function sumDigits(number) {
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }

// console.log(isLucky(212113));
// 8.
// function capitalizeWords(text) {
//     let words = text.split(" "); 
//     let capitalizedText = ""; 

//     for (let i = 0; i < words.length; i++) {
//         capitalizedText += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
//     }

//     return capitalizedText.trim();
// }

// console.log(capitalizeWords('sizi burada gormeye sadiq'));

// 9.
// function isEven(number) {
//     return number % 2 === 0;
// }

// console.log(isEven(6)); 
// console.log(isEven(9)); 

// 10.
// function isValidNumber(phoneNumber) {

//     if (phoneNumber.length !== 11) {
//         return false;
//     }
    
    
//     if (phoneNumber.slice(0, 2) === "+7") {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isValidNumber("+71234567890")); 
// console.log(isValidNumber("+99876543210")); 

// 11.
// function numCounter(text) {
//     let count = {};
//     for (let i = 0; i < text.length; i++) {
//         let char = text[i];
//         count[char] = (count[char] || 0) + 1;
//     }

//     return count;
// }

// console.log(numCounter("15263538479359486()-=\"';:!@#$%^&*()REGEX()"));







