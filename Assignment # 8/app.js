// Q1
// let val = +prompt("Enter the Number")
// console.log(`Number : ${val}`);
// console.log(`Round Off Value : ${Math.round(val)}`);
// console.log(`Floor Off Value : ${Math.floor(val)}`);
// console.log(`Ceil Off Value : ${Math.ceil(val)}`);

// Q2
// let val = +prompt("Enter the Negative Floating Number")
// console.log(`Number : ${val}`);
// console.log(`Round Off Value : ${Math.round(val)}`);
// console.log(`Floor Off Value : ${Math.floor(val)}`);
// console.log(`Ceil Off Value : ${Math.ceil(val)}`);


// Q3
// let val = +prompt("Enter the Number")
// alert(Math.abs(val))

// Q4
// let ranValue = Math.floor(Math.random()*10)+1
// console.log(`Random Dice Value ${ranValue}`);


// Q5
// let Toss = Math.floor(Math.random()*2)
// if(Toss===0){
//     alert("Rnadom Coin Value : Heads")
// }else{
//     alert("Rnadom Coin Value : Tails" )
// }

// Q6
// let val = Math.floor(Math.random()*100)+1

// Q7
// let weight = prompt("Enter your Weight")
// alert(`The weight of user is ${parseFloat(weight)} Kilograms`)

// Q8
// let user = +prompt("Guess the Number from 1 to 10")
// let val = Math.floor(Math.random()*10)+1
// if(user === val){
//     alert(`Congratulation you Gueesed the Number`)
// }else{
//     alert(`Try Again`)
// }

// Date Methods
// Q1
// let date = new Date()
// console.log(date);

// Q2
// let arr = ["January", "Feburary", "March", "April", "May", "June", "July", "August" , "September", "October", "November", "December"]
// let currMonth = new Date().getMonth()
// console.log(`Current Month : ${arr[currMonth]}`);

// Q3
// let date = new Date().toString()
// let curr = date.slice(0,3)
// console.log(`Today is ${curr}`);

// Q4
// let date = new Date().getDay()
// if(date === 6 || date === 0){
//     alert(`It's Fun Day`)
// }else{
//     alert(`It's Working Day`)
// }

// Q5
// let date = new Date().getDate()
// if(date<=15){
//     alert(`First Fifteen Days of the Month`)
// }else{
//     alert(`Last Days of the Month`)
// }

// Q6
// let date = new Date()
// let milliSecond = date.getTime()

// let minutes = Math.floor(milliSecond /(1000*60))
// console.log(`Minutes since Jan 1, 1970: ${minutes}`);

// Q7
// let date = new Date().getHours()
// if(date>=12){
//     alert(`It's PM`)
// }else{
//     alert(`Its AM`)
// }

// Q8
// let date = new Date("Dec 31 2020")

// Q9
// let date = new Date("June 18 , 2015")
// let today = new Date()
// let diff = today - date
// let passed = Math.floor(diff / (1000 * 60 * 60 * 24))
// alert(`${passed} Days Have Passed since 1st Ramadan ,2015`)

// Q10
// let refDate = new Date("Sat Dec 05 2015 22:50:16")
// let nowDate = new Date()
// let current = nowDate - refDate;
// let diffSeconds = Math.floor(current / 1000);
// alert(`${diffSeconds} seconds has passed since beginning of 2015`)

// Q11
// let date = new Date()
// console.log(date);
// console.log("1 Hour Ago " + new Date(date.getTime() - (1 * 60 * 60 * 1000)));

// Q12
// let date = new Date()
// console.log(date);
// let hunYearBack = new Date(date.getFullYear() - 100, date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
// console.log(`100 Years back, it was ${hunYearBack}`);

// Q13
// let age = +prompt("Enter the Age")
// let date = new Date()
// let curr = date.getFullYear()-age
// alert(`Your age is ${age} \n Your Birth Year is ${curr}`)


// Q14
// let cName = prompt("Customer Name");
// let cMonth = prompt("Current Month");
// let units = +prompt("Enter the Units");
// let charges = 16;
// let surCharge = 350;

// let netAmount = (units * charges).toFixed(2);
// let grossAmount = (Number(netAmount) + surCharge).toFixed(2);

// console.log(`Customer Name : ${cName}
// Month : ${cMonth}    
// Number of Units: ${units}
// Charges per Unit: ${charges.toFixed(2)}
// Net Amount Payable (within Due Date): ${netAmount}
// Late Payment Surcharge: ${surCharge.toFixed(2)}
// Gross Amount Payable (after Due Date): ${grossAmount}`);

