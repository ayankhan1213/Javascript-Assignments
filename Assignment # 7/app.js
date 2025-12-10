// Chapter 1 – Alerts
// alert("Welcome to Javascript")
// let a = prompt("Username")
// alert(a)
// let b = prompt("Favourite Color")
// alert(b)

// Chapter 2 – Variables for Strings
// let fName = prompt("Enter your First Name")
// let lName = prompt("Enter your Last Name")
// alert(fName.concat(" " + lName))

// let myCity = "Karachi"
// document.writeln(`I Live in ${myCity}`)

// let hobby = "Cricket"
// alert(`My Hobby is ${hobby}`)

// Chapter 3 – Variables for Numbers
// let num1 = 50;
// let num2 = 100;
// alert(num1+num2)

// let marks = 50;
// if(marks<50){
//     alert("Fail")
// }else{
//     alert("Pass")
// }

// let age = 18;
// if(age>=18){
//     alert("Your age is 18+")
// }else{
//     alert("Your age is Under 18")
// }

// Math Expressions: familiar operators
// let num1 = 18;
// let num2 = 15;
// alert(num1 + num2)
// alert(num1 - num2)

// let num1 = 20;
// let num2 = 10;
// alert(num1*num2)
// alert(num1/num2)
// alert(num1%num2)

// let a = 11;
// alert(a)
// alert(`After Increment the value of a is ${++a}`)

// Chapter 7 – Math Expressions: eliminating ambiguity
// let num1 = +prompt("Enter the First Value")
// let symbol = prompt("Enter the Operator Like + - / %")
// let num2 = +prompt("Enter the Second Value")
// if(symbol==="+"){
//     alert(num1+num2)
// }else if(symbol==="-"){
//     alert(num1-num2)
// }else if(symbol==="/"){
//     alert(num1/num2)
// }else if(symbol==="%"){
//     alert(num1%num2)
// }

// Chapter 8 – Concatenating text strings
// let fName = "Ayan"
// let lName = "Khan"
// let fullName = fName + " " +  lName
// let city = "Karachi"
// alert(`Welcome to ${fullName} in ${city}!!`)

// Chapter 9 – Prompts
// let favColor = prompt("Enter your Favourite Colour")
// alert(`Your Favourite Color is ${favColor}`)

// let age = +prompt("Enter your Age ")
// alert(`Your Age is ${age}`)

// let fruit = prompt("Enter your Favourite Fruit ")
// alert(`Your Favourite Fruit is ${fruit}`)

// Chapter 10 – if statements
// let num = +prompt("Enter the Number")
// if (num > 10) {
//     alert("Number is greater than 10")
// }else if(num<10){
//     alert("Number is Less than 10")
// }else if(num===10){
//     alert("Number is equal to 10")
// }

// let marks = 52;
// if(marks<50){
//     alert("Fail")
// }else{
//     alert("Pass")
// }

// let age = 15;
// if(age>=18){
//     alert('Minor')
// }else{
//     alert("Kid")
// }

// Chapter 11 – Comparison operators
// let num1 = 50;
// let num2 = 40;
// alert(num1>num2)

// let num1 = 50;
// let num2 = 50;
// if(num1==num2){
//     alert(`${num1} and ${num2} is Equal`)
// }else{
//     alert(`${num1} and ${num2} is not Equal`)
// }

// let num1 = 50;
// let num2 = 40;
// alert(num1<=num2)

// let marks = +prompt("Enter your Marks");
// if(marks>=90 && marks<100){
//     alert("A+")
// }else if(marks>=70 && marks<90){
//     alert("A")
// }else if(marks>=60 && marks<70){
//     alert("B")
// }else if(marks>=36 && marks<60){
//     alert("C")
// }else{
//     alert("Fail")
// }

// let age = +prompt("Enter your Age");
// if (age >= 18) {
//     alert("Adult");
// } else if (age <= 12) {
//     alert("Kid");
// } else {
//     alert("Teen");
// }

// let temp = +prompt("Enter the Tempurature")
// if(temp>=0 && temp<=12){
//     alert("Tempurature is Very Cold")
// }else if(temp>12 && temp<=25){
//     alert("Tempurature is Normal")
// }else if(temp>25 && temp<36){
//     alert("Tempurature is Hot")
// }else {
//     alert("Tempurature is very Hot")
// }

// let num = +prompt("Enter the Number")
// if(num>0 && num%2==0){
//     alert("Number is Positive and Even")
// }

// let marks = 99;
// if(marks>=50 && marks<=100){
//     alert("Valid Marks")
// }else{
//     alert("Not Valid")
// }

// let num = +prompt("Enter the Number")
// if(num%5==0 && num%3==0){
//     alert("Number is divisible by 5 and 3")
// }else {
//     alert("Number is Not divisible by 5 and 3");
// }

// Chapter 14 – if statements nested
// let age = 20;
// let id = true
// if(age>=18 && id===true){
//     alert("Allowed")
// }else{
//     alert("Not Allowed")
// }

// let num = +prompt("Enter the Number")
// if(num>0){
//     alert(`${num} is Positive`)
// }else{
//     alert("Negative")
// }

// let marks = 75;
// let extraCredit = true;
// if (marks >= 50) {
//     alert(extraCredit ? "Passed with extra credit!" : "Passed!");
// } else {
//     alert("Failed!");
// }

// ARRAYS
// let fruit = ["mango","apple","orange","banana","strawberry"]
// console.log(fruit);

// let fruit = ["mango","apple","orange","banana","strawberry"]
// alert(fruit[0])
// alert(fruit[4])

// let fruit = ["red","purple","white","sky","green"]
// alert(fruit)

// let fruit = ["mango","apple","orange","banana","strawberry"]
// fruit.push("papaya")
// fruit.pop()
// fruit.unshift("papaya")
// fruit.shift()

// let fruit = ["mango","apple","orange","banana","strawberry"]
// fruit[1] = "PineApple"
// fruit.splice(2,1)
// let res = fruit.slice(1,4)

// For Loop
// let num = [1,2,3,4,6,7,-4,56,6,8]
// for(let i = 0 ; i<num.length ; i++){
//     if(num[i]<0){
//         break;        
//     }
//     console.log(num[i]);
    
// }

// for(let i = 1; i<11 ; i = i+2){
//     console.log(i);
// }


// let arr = [1,2,3,4,5,6,7,8,9,10]
// let fg = false;
// for(let i = 0 ; i<arr.length;i++){
//     if(arr[i]%2===0){
//         fg = true
//         console.log(arr[i]);
        
//     }
    
// }

// let arr = [10,20,30,40,50,60,70,80]
// for(let i = 0; i<arr.length;i++){
//     if(arr[i]>50){
//         break;        
//     }
//     console.log(arr[i]);
    
// }
// for (let i = 1; i <= 3; i++) { 
//     for (let j = 1; j <= 10; j++) { 
//         document.writeln(i + " x " + j + " = " + (i * j) + "<br>");
//     }
// }
// let arr = [[1,2,3] , [4,5,6]]
// for(let i = 0; i<arr.length; i++){
//    for(let j = 0; j < arr[i].length; j++){ 
//         alert(arr[i][j]);                   
//     }
// }

// let arr = [1,2,3]
// let arr2 = [3,4,5]
// for(let i = 0; i<arr.length; i++){
//     for(let j = 0; j<arr2.length; j++){
//         alert(arr[i] + arr2[j])
//     }
// }

// String Chapter
// let i = "Javascript"
// alert(i.length)
// alert(i.slice(0,3))
// alert(i.slice(7,10))

// let sen = "The Brown Fox Jumps Over the Lazy Dog"
// let word = "Jumps"
// let position = sen.indexOf(word)
// console.log("The word Jumps Position is " + position);


// let word = "Javascript"
// console.log(word.length-1);

// let word = "Programmer"
// let partcut = word.substring(0,7)
// console.log(partcut);


// let str = "Huzaifa"
// console.log(str.at(2));
// console.log(str.at(-1));
// console.log(str.at(3));

// let sen = "the Brown Fox Jumps Over the Lazy Dog."
// // console.log(sen.replace("Brown" , "Red"))
// console.log(sen.replace("the" , "Here"));
// console.log(sen.replaceAll("the" , "Here"));

