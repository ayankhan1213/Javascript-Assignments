// Q1
// let fName = prompt("Enter the First Name")
// let lName = prompt("Enter the Last Name")
// let fullName = ""
// console.log(`Hello ${fName + "" +  lName}`);


// Q2
// let user = prompt("Enter you Mobile Model")
// console.log(`My favourite phone is ${user} \n Length of String is ${user.length}`);

// Q3
// let word = "Pakistani"
// console.log(word.indexOf("n"));  // 7

// Q4
// let word = "Hello World"
// console.log(word.lastIndexOf("l")); // 9

// Q5
// let word = "Pakistani"
// console.log(word.slice(3,4));

// Q6
// let fName = prompt("Enter the First Name")
// let lName = prompt("Enter the Last Name")
// let fullName = fName.concat(" " ,lName)
// console.log(fullName);

// Q7
// let word = "Hyderabad"
// console.log(word);
// word = word.replace("Hyder" , "Islam")
// console.log(word);

// Q8
// let sentence = "Ali and Sami are best friends. They play cricket and football together."
// console.log(sentence.replaceAll("and" , "&"));

// Q9
// let num = "472"
// console.log(typeof num);
// num = 472
// console.log(typeof num); // After Update String Into Number

// Q10
// let user = prompt("Enter Anything")
// console.log(user.toUpperCase());

// Q11
// var word = prompt("Enter anthing")
// var a = word.slice(0,1).toUpperCase()
// var b = word.slice(1).toLowerCase()
// var c = a + b;
// alert(c)

// Q12
// let num = 25.26;
// console.log(num);
// num = "25.26"
// let res = num.replace("." , "")
// console.log(res);  /// 2526


// Q13
// let user = prompt("Enter your UserName")
// let mf = false;
// for(let i = 0; i<user.length; i++){
//     let a = user.charCodeAt(i);
//     if(a===33||a===44||a===64||a===46){
//         alert(`Enter a Valid Password`)
//         mf = true;
//         break;
//     }
// }
// if(!mf){
//     alert(user)
// }
// Q14
// let user = prompt("Welcome to ABC Bakery" , "What do you want to order Sir?").toLowerCase()
// let arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var mf = false
// for (var i = 0; i < arr.length; i++) {
//     if(arr[i] === user){
//         mf = true;
//         break;
//     }
// }
// if(mf){
//     alert(`${arr[i]} is available at Index ${i} in our Bakery.`)
// }else{
//     alert(`${user} is not available in our Bakery.`)
// }


// Q15
// let username = prompt("Enter Username")

// let first = username.charCodeAt(0)
// console.log(first);

// if (first >= 48 && first <= 57) {
//     console.log("Username cannot begin with a number");
// }

// for (let i = 0; i < username.length; i++) {

//     let char = username.charCodeAt(i)

//     if ((char >= 33 && char <= 47) ||
//         (char >= 58 && char <= 64) ||
//         (char >= 91 && char <= 96) ||
//         (char >= 123 && char <= 126)) {
//         console.log(`Enter a Valid Password`);

//     }

// }
// if (username.length >= 6) {
//     console.log(username);

// } else {
//     console.log("Error: Username must be at least 6 characters");

// }


// Q16
// let word = "University of Karachi";
// console.log(word.split("").join("\n"));

// Q17
// let word = prompt("Enter your Name")
// console.log(word.at(-1));

// Q18
// let sentence = "The quick brown fox jumps over the lazy dog";
// let word = "the"
// sentence = sentence.toLowerCase()
// let split = sentence.split(" ");
// let count = 0;

// for(let i = 0; i<split.length;i++){
//     if(split[i]===word){
//         count++;
//     }
// }
// console.log(`${sentence} \n Occurences of Word the is ${count}` )
