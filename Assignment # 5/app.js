// Q1 :
// var arr = [[]];

// Q2 :
// var arr = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]]
// console.log(arr[2]);

// Q3 :
// for(let i = 1 ; i<11 ; i++){
//     console.log(i);

// }

// Q4 :
// let tabNum = +prompt("Enter the Table what you want?")
// let length = +prompt("Enter the Length")
// document.writeln(` Multiplication table of ${tabNum} <br>
//         Length ${length} <br> <br>`)
// for (let i = 1; i <= length; i++) {
//     document.writeln(`
//     ${tabNum} x ${i} = ${tabNum * i} <br>
//     `)
// }


// Q5 :
// var fruArr =    ["Apple", "Banana", "Mango", "Orange","Strawberry"]
// for(let i = 0 ; i<fruArr.length;i++){
//     document.writeln(`
//         Element at index ${i} is ${fruArr[i]} <br>  
//         `)
// }

// Q6 :
// document.writeln("Counting :")
// for(let i = 1; i<16; i++){
//     document.writeln(`${i}`);
// }

// document.writeln("Reverse :")
// for(let i = 10; i>0; i--){
//     document.writeln(`${i}`);
// }

// document.writeln("Even :")
// for(let i = 0; i<21; i = i +2){
//     document.writeln(`${i}`);
// }

// document.writeln("Odd :")
// for(let i = 1; i<21; i = i +2){
//     document.writeln(`${i}`);
// }

// document.writeln("Series :")
// for(let i = 2; i<21; i = i + 2){
//     document.writeln(`${i}k`);
// }

// Q7 :
// var user = prompt("Welcome to our Bakery. What do you want to order?")
// var items = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
// var matchFound = false;
// for(let i = 0; i<items.length; i++){
//     if(user===items[i]){
//         document.writeln(`
//             ${items[i]} is available at index ${i} in our Bakery.
//             `)
//             matchFound = true;
//             break;
//     }
// }
// if(!matchFound){
//     document.writeln(`
//         We are sorry. ${user} is not available in our Bakery
//         `)
// }

// Q8 :
// var arr = [81,22,212,199,2,22,44]
// var largest = arr[4];
// document.writeln(`Array Items : ${arr} <br>`)
// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i] > largest){
//         largest = arr[i]
//     }
// }
// document.writeln(`The Largest Number is <b>${largest}</b>`)

// Q9 :
// var arr = [24, 53, 78, 91, 12,11]
// document.writeln("Arrays Items : " + arr + "<br>")
// var assume = arr[0]
// for(let i = 1; i<arr.length; i++){
//     if(arr[i] < assume){
//         assume = arr[i]
//     }
// }
// document.writeln(`The Samllest Number is <b>${assume}</b>`)

// Q10 :
// for(let i = 5 ; i<101 ; i = i + 5){
//     document.writeln(i);
    
// }