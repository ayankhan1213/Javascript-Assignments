// ==================================== CHAPTER 1 : =======================================
// Question 1 :
// alert("First Name")
// alert("Last Name")
// alert("Email")
// alert("Phone Number")
// alert("Password")

// Question 2 : 
// alert("You're learning Javascript!")

// Question 3 : 
// alert("JAWAN PAKISTAN")

// ========================================== CHAPTER 2 : ============================
// Question 1 : 
// var userName = "Ayan Khan"

// Question 2 : 
// var userName;
// userName = "Ayan Khan"


// Question 3 : 
// var teamName = "Hacker Boys"
// alert(teamName)


// Question 4 : 
// var bestMan = "Charlie"
// bestMan = "Ayan Khan"

// =========================================== CHAPTER 3 : ======================================

// Question 1,2,3 : 
// var caseQty;
// caseQty = 14;

// var num = Number("9");
// num += 4;
// console.log(num);

// Question 4 :
// var num;
// num = 2 + 2;
// console.log(num);


// Question 5 :
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// console.log(orderTotal);


// Question 6 :
// var num = 22;
// num += 3
// console.log(num);


// =========================================VARIABLE NAMES: LEGAL & ILLEGAL===============================
// Question 1 :
// var a = 10 , b = "Karachi" , c = "true"


// Question 2 :
// LEGAL VARIABLE
// var _name = "Ayan"
// var $userName = "Khan"
// var password11 = "harryBrook"
// var firstName = "Password"
// var last_Name = "Khan" 

// ILLEGAL VARIABLES 
// var user-name = "ABC"
// var @lastName = "abcd"
// var 123password = 124;
// var  user name = "xyz"
// var var = "efg"    ======================= Var is Reserved Keyword====================

// Question 3 :
// document.writeln("<h2>Rules for naming JS variables </h2> \n" + "Variables names can only contain numbers $ and _ For Example: $my_FirstVariable <br> " + "Variable must begin with a letter , $ or _ . For Example: $name, _name or name <br>" + "Variables names are case sensitive <br>" + "Variables names should not Js Keywords")


// ========================================== MATH EXPRESSIONS ========================================
// // Question 1 :
// var a = +prompt("Enter a Number");
// var b = +prompt("Enter the Second Number");
// var c = a + b;
// document.writeln("Sum of " + a + " and " + b + " is " + c )

// Question 2 :
// var a = +prompt("Enter the First Number")
// var b = +prompt("Enter the Second Number")
// var c = a - b;
// document.writeln("Subtract of " + a + " and " + b + " is " + c )


// var a = +prompt("Enter the First Number")
// var b = +prompt("Enter the Second Number")
// var c = a * b;
// document.writeln("Multiply of " + a + " and " + b + " is " + c )

// var a = +prompt("Enter the First Number")
// var b = +prompt("Enter the Second Number")
// var c = a / b;
// document.writeln("Division of " + a + " and " + b + " is " + c )

// var a = +prompt("Enter the First Number")
// var b = +prompt("Enter the Second Number")
// var c = a % b;
// document.writeln("Modulus of " + a + " and " + b + " is " + c )


// Question 3 :
// var a;
// document.writeln(" Value after variable declaration is " + a)

// a = 22;
// document.writeln(" <br> Initial value : " + a)

// a++;
// document.writeln(" <br> Value after increment is " + a)

// a+= 7;
// document.writeln("<br> Value after addition is : " + a)

// a--;
// document.writeln("<br> Value after decrement is : " + a )

// a = a % 3
// document.writeln(" <br> The remainder is :" + a)

// Question 4 :
// var oneTicket = 600;
// var tickets = 5;
// var totalPrice = oneTicket * tickets
// document.writeln("Total cost to buy " + tickets + " tickets to a movie is " + totalPrice )

// Question 5 :
// var table = +prompt("Enter the Table of any Number")
// for(let i = 1; i<11; i++){
//     document.writeln(`${table} x ${i} = ${table*i} <br>`)
// }

// ====================================Temperature Converter===============================

// var celsius = 25;
// var fahrenheit = (celsius * 9 / 5) + 32;
// document.writeln(celsius + "°C is " + fahrenheit + "°F ")


// var fahrenheit = 70;
// var celsius = (fahrenheit - 32) *5/9;
// document.writeln(fahrenheit + "°F is " + celsius + "°C")

// Question 7 : 
// var item1 = 650;
// var q1 = 3;

// var item2 = 100;
// var q2 = 7;
 
// var charges = 100;

// var totalCost = item1*q1 + item2 * q2 + 100;

// document.writeln("<h2><b>Shopping Cart</b></h2>" + "Price of Item 1 is " + item1 + "<br> Quantity of Item 1 is " + q1 + "<br> Price of Item 2 is " + item2 + "<br> Quantity of Item 2 is " + q2 + "<br> Shipping Charges is " + charges 
//    + " <br>  Total cost of your order is " + totalCost
//    )

// Question 8 :
// var marksObtained = 804;
// var totalMarks = 980;
// var percentage = marksObtained * 100 / totalMarks;
// document.writeln("<h1>MARKSHEET</h1>" + "Total Marks : " + totalMarks + "<br> Marks Obtained : " + marksObtained + "<br> Percentage : " + percentage + "%")

// Question 9 :
// var oneDollar = 104.80;
// var saudiRiyal = 28;
// var totalCurrency = oneDollar*10 + saudiRiyal*25;
// document.writeln("Total Currency in PKR : " + totalCurrency)

// Question 10 : 
// var num = ((10 + 5) * 10) / 2 ;

// Question 11 :
// var currYear = 2025;
// var birYear = 2007;
// var currAge = currYear - birYear ;
// document.writeln("<h1>Age Calculator</h1>" + " Current Year : " + currYear + "<br> Birth Year : " + birYear + "<br> Your age is " + currAge )


// Question 12 :
// var radius = 20;
// var circumFerence = 2*3.142*20;
// var areaCircle = 3.142*20*20;
// document.writeln("Radius of Circle is :" + radius + "<br> The Circumference is : " + circumFerence + "<br>The area is " + areaCircle )

// Question 13 :
// var fvrSnack = "Chocolate"
// var currAge = 18;
// var maxAge = 25;
// var perDayAmount = 3;
// var remAge = 7*365;
// var totalNeed = Math.ceil(remAge * perDayAmount);
// document.writeln("<h1>LIFETIME SUPPLY CALCULATOR</h1>" + "<br> Favourite Snack : " + fvrSnack + "<br> Current Age: " + currAge + "<br> Estimated Maximum age: " + maxAge + "<br> Amount of Snack per day:" + perDayAmount+
//     "<br>You will need " + totalNeed + "Chocolate chip last you until the ripe old age of 25"
// )

// ====================================== MATH EXPRESSION ==========================================
// var a = 10;
// document.writeln("The value of a is " + a + "<br>")
// document.writeln("................................. <br>")


// document.writeln("<br> The value of ++a is " + ++a)
// document.writeln("<br> Now value of a is " + a + "<br>")


// document.writeln("<br> The value of a++ is " + a++)
// document.writeln("<br> Now value of a is " + a + "<br>")

// document.writeln("<br> The value of --a is " + --a)
// document.writeln("<br> Now value of a is " + a + "<br>")

// document.writeln("<br> The value of a-- is " + a--)
// document.writeln("<br> Now value of a is " + a + "<br>")


// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);
// document.writeln("a is " + a + "<br> b is " + b + "<br> Result is " + result)

// var greet = prompt("What is your Name")
// alert("Hi, " + greet + " Welcome to our Website!")

// var a = +prompt("Enter the Number")
// for(i = 1;i<11;i++){
//     document.writeln(`${a} x ${i} = ${a*i} <br> `)
// }


// var sub1 = prompt("Enter your Subject 1")
// var sub2 = prompt("Enter your Subject 2")
// var sub3 = prompt("Enter your Subject 3")
// var subMarks = 100;
// var sub1Marks = +prompt("Subject 1 Obtained Marks")
// var sub2Marks = +prompt("Subject 2 Obtained Marks")
// var sub3Marks = +prompt("Subject 3 Obtained Marks")
// var percentage1 = sub1Marks*100/subMarks
// var percentage2 = sub2Marks*100/subMarks
// var percentage3 = sub3Marks*100/subMarks
// var totalMarks = subMarks + subMarks + subMarks;
// var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
// var tPercentage = obtainedMarks * 100 /totalMarks;

// document.writeln(`
//     <table>
    

//     <tr>
//     <th><h2>Subject</h2></th>
//     <th><h2>Total Marks</h2></th>
//     <th><h2>Obtained Marks</h2></th>
//     <th><h2>Percentage</h2></th>
//     </tr>


//      <tr>
//     <th>${sub1}</th>
//     <th>${subMarks}</th>
//     <th>${sub1Marks} </th>
//     <th>${percentage1}%</th>
//     </tr>

//   <tr>
//     <th>${sub2}</th>
//     <th>${subMarks}</th>
//     <th>${sub2Marks} </th>
//     <th>${percentage2}%</th>
//     </tr>

//       <tr>
//     <th>${sub3}</th>
//     <th>${subMarks}</th>
//     <th>${sub3Marks} </th>
//     <th>${percentage3}%</th>
//     </tr>

//      <tr>
//     <th></th>
//     <th>${totalMarks}</th>
//     <th>${obtainedMarks} </th>
//     <th>${tPercentage}%</th>
//     </tr>
//     </table>
//     `)

    // ======================================= COMPLETE =========================================