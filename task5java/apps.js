
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




  




