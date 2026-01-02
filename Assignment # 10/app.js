// Q1
// function power(a,b){
//     return a**b
// }

// let res = power(2,4)
// console.log(res);

// Q2
// let leapYear = +prompt("Enter to check Leap Year " , "e.g 2016")
// if((leapYear % 4 === 0 && leapYear % 100 !== 0 ) || leapYear % 400 === 0){
//     alert(`${leapYear} is a Leap Year`)
// }else{
//     alert(`${leapYear} is not a Leap Year`)
// }

// Q3
// function sides(a,b,c) {
//     return (a + b + c) / 2
// }
// function area(a,b,c){
//     let S = sides(a,b,c);
//     let are = Math.sqrt(S *(S-a) * (S-b) * (S-c))
//     return are
// }

// let a = 12 , b = 13 , c = 14;
// let res = area(a,b,c);
// console.log(`Area of Triangle is ${res}`);


// let count = 0
// function plus(){
//     let getCounter = document.querySelector("#counter")
//     getCounter.innerHTML = ++count
// }

// function minus(){
//     let getCounter = document.querySelector("#counter")
//     getCounter.innerHTML = --count
// }


// function hover(){
//     let getImg = document.querySelector("#img")
//     getImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZExXZfuy_mIpsM-T69cjwfWlNiY8MJK_shQ&s"
// }

// function mouseOut(){
//     let getImg = document.querySelector("#img")
//     getImg.src = "https://img.freepik.com/free-photo/green-trees-near-body-water-daytime_395237-20.jpg?semt=ais_hybrid&w=740&q=80"
// }

// function deleteVowels(sen){
//     let vowels = "aeiouAEIOU"
//     let res = ""
//     for(let i = 0; i<sen.length; i++){
//         if(!vowels.includes(sen[i])){
//             res += sen[i]
//         }        
//     }
//     console.log(res);

// }
// deleteVowels("Please read this application and give me gratuity")

// function calc(word){
//     let find = "l"    
//     for(let i = 0; i<word.length; i++){
//         if(word[i] === find){
//            return i          
//         }
//     }
//         return -1
// }
// let ans = calc("Hello")
// console.log(ans);


// function check(sen) {
//     let count = 0;
//     let pairs = []

//     for (let i = 0; i < sen.length - 1; i++) {
//         switch (sen[i].toLowerCase()) {
//             case "a":
//             case "e":
//             case "i":
//             case "o":
//             case "u":
//                 switch (sen[i + 1].toLowerCase()) {
//                     case "a":
//                     case "e":
//                     case "i":
//                     case "o":
//                     case "u":
//                         count++;
//                         pairs.push(sen[i] + sen[i + 1]);
//                         break;
//                 }
//                 break;
//         }
//     }
//     console.log("Total Vowels: " + count);
//     return pairs;
// }

// let ans = check("Please read this application and give me gratuity");
// console.log(ans);
// console.log(count);


// let distance = +prompt("Enter distance between two cities in km:");

// function toMeters(km) {
//     return km * 1000;
// }
// function toCentimeters(km) {
//     return km * 100000;
// }
// function toFeet(km) {
//     return km * 3280.84;
// }
// function toInches(km) {
//     return km * 39370.1;
// }

// console.log("Distance in meters: " + toMeters(distance));
// console.log("Distance in centimeters: " + toCentimeters(distance));
// console.log("Distance in feet: " + toFeet(distance));
// console.log("Distance in inches: " + toInches(distance));


// let hoursWorked = parseInt(prompt("Enter total hours worked by employee"));
// let overtimeHours = 0;
// let overtimeRate = 12; 

// if(hoursWorked > 40){
//     overtimeHours = hoursWorked - 40;
// }

// let overtimePay = overtimeHours * overtimeRate;

// console.log(`Total Hours: ${hoursWorked}`);
// console.log(`Overtime Hours: ${overtimeHours}`);
// console.log(`Overtime Pay: ${overtimePay}`);

// let curr = +prompt("Enter the amount to withdraw")
// if (curr % 10 !== 0) {
//     console.log(`Withdraw Multiple ho 10`);
// } else {
//     let hund = Math.floor(curr / 100)
//     let remain = curr % 100

//     let fif = Math.floor(remain / 50)
//     remain = curr % 50

//     let ten = Math.floor(remain / 10)
//     remain = curr % 10

//     console.log(`100 notes: ${hund}`);
//     console.log(`50 notes: ${fif}`);
//     console.log(`10 notes: ${ten}`);
// }


// function func(){
//     alert("Hello!")
// }

// function myFunc(){
//     alert(`Thanks for Purchasing Mobile For Us.`)
// }


let students = ["Harry", "Brake", "Oscar", "Pops", "Snake"];
let classes = [4, 9, 12, 5, 2];

let table = document.getElementById("studentTable");

function showStudents() {
    table.innerHTML = `
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Class</th>
            <th>Action</th>
        </tr>
    `;

    for (let i = 0; i < students.length; i++) {
        let row = table.insertRow();
        row.insertCell(0).innerText = i + 1;
        row.insertCell(1).innerText = students[i];
        row.insertCell(2).innerText = classes[i];

        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.onclick = function() {
            students.splice(i, 1);
            classes.splice(i, 1);
            showStudents();
        };
        row.insertCell(3).appendChild(btn);
    }
}

showStudents();
