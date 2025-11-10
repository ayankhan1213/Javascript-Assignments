// Q1:
// var cityName = prompt("Enter your City Name:", "Your city is:");
// if(cityName==="Karachi"){
//     alert("Welcome to city of Lights!")
// }else{
//     alert("Welcome to the " + cityName)
// }

// Q2:
// var gender = prompt("Enter your Gender");
// if(gender==="male"){
//     alert("Good Morning Sir.")
// }else if(gender==="female"){
//     alert("Good Morning Ma’am.")
// }

// Q3
// var signal = prompt("Enter traffic signal color (red, yellow, or green)").toLowerCase()
// if(signal==="green"){
//     alert("Move Now")
// }else if(signal==="yellow"){
//     alert("Ready to Move")
// }else if(signal==="red"){
//     alert("Must Stop")
// }else{
//     alert("Something wen't Wrong!")
// }

// Q4
// var remFuel = +prompt("Enter your Remaining Fuel in Liter")
// if(remFuel<0.25){
//     alert("Please refill the fuel in your car")
// }else{
//     alert("Everything is Okay!")
// }

// Q5
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true"); // False
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
// alert("condition 2 is true");
// }

// if (++c < 14){
// alert("condition 3 is true");
// }

// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }

// if("car" < "cat"){
// alert("car is smaller than cat");
// }


// var sub1 = prompt("Subject 1")
// var sub2 = prompt("Subject 2")
// var sub3 = prompt("Subject 3")
// var sub1obt = +prompt("Enter your First Subject Obtained Marks")
// var sub2obt = +prompt("Enter your Second Subject Obtained Marks")
// var sub3obt = +prompt("Enter your Third Subject Obtained Marks")
// var obtainedMarks = sub1obt + sub2obt + sub3obt;
// var totalMarks = 300;
// var percentage = (obtainedMarks/totalMarks)*100;
// if(percentage<60){
//     document.writeln(`<h2> MARKSHEET </h2> Total Marks : ${totalMarks} <br> 
//         Marks obtained : ${obtainedMarks} <br> Percentage : ${percentage}% <br>
//         Grade : Fail <br> Remarks : Sorry
//         `)
// }else if(percentage>=60 && percentage<=70){
//     document.writeln(`<h2> MARKSHEET </h2> Total Marks : ${totalMarks} <br> 
//         Marks obtained : ${obtainedMarks} <br> Percentage : ${percentage}% <br>
//         Grade : B <br> Remarks : You need to improve
//         `)
// }else if(percentage>70 && percentage<=80){
//     document.writeln(`<h2> MARKSHEET </h2> Total Marks : ${totalMarks} <br> 
//         Marks obtained : ${obtainedMarks} <br> Percentage : ${percentage}% <br>
//         Grade : A <br> Remarks : Good
//         `)
// }else if(percentage>80 && percentage<=100){
//     document.writeln(`<h2> MARKSHEET </h2> Total Marks : ${totalMarks} <br> 
//         Marks obtained : ${obtainedMarks} <br> Percentage : ${percentage}% <br>
//         Grade : A-one <br> Remarks : Excellent
//         `)
// }

// Secret Game 
// var secretNum = 5;
// var guessNum = +prompt("Guess the Number from 1 to 10")
// if(guessNum==secretNum){
//     alert("Bingo! Correct answer")
// }else if(guessNum + 1 == secretNum || guessNum - 1 == secretNum){
//     alert("You are so Close!")
// }else{
//     alert("Try again")
// }
// Q8
// var num = +prompt("Enter the Number")
// if(num%3==0){
//     alert(`${num} is divisible by 3`)
// }else{
//     alert(`${num} is not divisible by 3`)
// }   

// Q9
// var num = +prompt("Enter the Number")
// if(num%2==0){
//     alert(`${num} is Even`)
// }else{
//     alert(`${num} is Odd`)
// } 

// Q10
// var temp = +prompt("Enter the Temperature")
// if(temp>=40){
//     alert("It is too hot outside.")
// }else if(temp>=30 && temp<40){
//     alert("The Weather today is Normal")
// }else if(temp>=20 && temp<30){
//     alert("Today's Weather is cool.")
// }else if(temp>=10 && temp<20){
//     alert("OMG! Today's weather is so Cool")
// }else{
//     alert("Very Cold!")
// }

var num1 = +prompt("Enter your First Number")
var operator = prompt("Enter your Operator")
var num2 = +prompt("Enter your Second Number")
if(operator === "+"){
    alert(num1 + num2)
}else if(operator === "-"){
    alert(num1 - num2)
}else if(operator === "*"){
    alert(num1 * num2)
}else if(operator === "%"){
    alert(num1 % num2)
}else if(operator === "/"){
    alert(num1 / num2)
}else{
    alert("Error!")
}