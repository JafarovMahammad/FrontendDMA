
// 1.
// let mates = ["Ali", "Tural", "Ayşe"];
// mates.push("Murad");
// mates.shift();
// console.log(mates);

// 2.
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let [bir, iki, ...qalanrəqəmlər] = numbers;
// console.log("ilk iki reqem:", [bir, iki]);
// console.log("Yeni massiv:", qalanrəqəmlər);

// 3.
// let numbers = [1, 5, 3, 7, 9, 2, 8, 4, 6, 10];

// let maxNumber = Math.max(...numbers);

// console.log("Max deyer:", maxNumber);

// 4.

// let originalArray = [1, 2, 3, 4, 5];

// console.log("esas massiv:", originalArray);

// let newArray = originalArray.map(num => num * 2);
// console.log("yeni massiv:", newArray);
// console.log("esas massiv (deyisilmeyib):", originalArray);

// 5.
// let employees = [
//     [ 'Jaylee Macy', 'marketing' ],
//     [ 'John Smith', 'management' ],
//     [ 'Blossom Hartley', 'design' ],
//     [ 'Austin Carpenter', 'marketing' ],
//     [ 'Joan Knowles', 'development' ],
//     [ 'Sally Nunez', 'management' ],
//     [ 'Laurel Ward', 'development' ],
//     [ 'Lark Simon', 'marketing' ],
//     [ 'Jane Stone', 'management' ],
//     [ 'Courtney Olson', 'development' ]
//   ];

//   let development = employees.filter(employee => employee[1] === 'development');

//   console.log("Development department employees:", development);

// 6.
// let queue = [];
// function updateQueue(customer) {

//     if (customer !== "") {
//         queue.push(customer);
//         console.log(customer + " növbəyə əlavə edildi.");
//     }
//     else if (queue.length > 0) {
//         let nextCustomer = queue.shift();
//         console.log(nextCustomer + " növbədən götürüldü.");
//     }
// }
// function requestInput() {
//     let input = prompt("Müştərinin adını və soyadını daxil edin ('=' - növbəni göstər, boş qoyun - növbədən götür):");
//     return input;
// }
// while (true) {
//     let userInput = requestInput();
//     if (userInput === "=") {
//         console.log("Növbə: " + queue.join(", "));
//         break;
//     }
//     updateQueue(userInput);
// }

// 7.
// function sortArray(array) {
//     array.sort(function(a, b) {
//         return a - b;
//     });

//     return array;
// }

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];
// let sortedArray = sortArray(array);
// console.log("Sıralanmış massiv:", sortedArray);

// let user = {
//     name: "Mahammad",
//     surname: "Cafarli",
//     gender: "Kisi",
//     birthday: "11.07.1996"
// }

// user.age = 23;
// delete user.birthday;
// console.log(user);


// 8.

// function NegativeNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             console.log(numbers[i]);
//         }
//     }
// }

// let numbers = [1, -3, 5, -7, 9, -2, 4, -6];
// NegativeNumbers(numbers);

// 9.

// function positiveNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 0) {
//             console.log(numbers[i]);
//         }

//     }
// }
// let numbers = [1, 2, -4, -5, 6, 8, 9, -10];
// positiveNumbers(numbers);

// 11.

// function kebabToUpper(str) {
//     return str.replace(/-/g, '_').toUpperCase();
// }
// console.log(kebabToUpper('first-user, MAP,FILTER,FIND')); 

// 12.

// function transformArray(numbers) {
//     let newArray = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] < 0) {
//             newArray.push(-numbers[i]);
//         }
//         else {
//             newArray.push(numbers[i] * 2);
//         }
//     }
//     return newArray;
// }
// let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
// let transformedArray = transformArray(numbers);
// console.log(transformedArray);

// 13.
//  function getFirstThreeChars(strings) {
//     let resultArray = [];
//     for (let i = 0; i < strings.length; i++) {
//         let firstThreeChars = strings[i].substring(0, 3);
//         resultArray.push(firstThreeChars);
//     }
//     return resultArray;
// }
// let strings = ["Aylin", "Behruz", "Rasim", "Eldar", "Orxan"];
// let firstThreeChars = getFirstThreeChars(strings);
// console.log(firstThreeChars);

// 14.
// let adlar = [
//     "Aylin",
//     "Behruz",
//     "Rasim",
//     "Eldar",
//     "Orxan",
//     "Aydan",
//     "Asif"
// ];

// function filteredList(adlar) {
//     let newArray = [];
//     for (let i = 0; i < adlar.length; i++) {
//         if (adlar[i][0].toUpperCase() === "A") {
//             newArray.push(adlar[i]);
//         }
//     }
//     return newArray;
// }

// let result = filteredList(adlar)
// console.log(result);

// 15.

// function addTax(prices) {
//     let pricesWithTax = [];

//     for (let i = 0; i < prices.length; i++) {
//         let taxIncluded = prices[i] * 1.20; 
//         pricesWithTax.push(taxIncluded);
//     }

//     return pricesWithTax;
// }

// let pricesWithoutTax = [100, 50, 75, 120];
// let pricesWithTax = addTax(pricesWithoutTax);
// console.log("ƏDV ilə qiymətlər:");
// console.log(pricesWithTax);


// 16.
// function countEvensAndOdds(numbers) {
//     let evenCount = 0;
//     let oddCount = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenCount++;
//         } else {
//             oddCount++;
//         }
//     }
//     return "Massivdə " + evenCount + " cüt və " + oddCount + " tək ədəd var";
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = countEvensAndOdds(numbers);
// console.log(result);
