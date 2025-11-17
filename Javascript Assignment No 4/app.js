// Q1 : 
// var studentNames = ["Ayan","Khan","Huzaifa","Rizwan"];

// Q2 :
// var studentNames = new Array("Ayan","Khan","Huzaifa","Rizwan")

// Q3 :
// var stringArray = ["Jawan","Pakistan","WOW","Batch"]

// Q4 :
// var numArray = [1,2,3,4,5]

// Q5 :
// var boleanArr = [true,false]

// Q6 :
// var mixArr = ["Ayan" , 12 , true , null , false , "Pakistan" , undefined]

// Q7 : 
// var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", " M. Phil", "PhD"]
// document.writeln(` ${qualification[0]} <br> ${qualification[1]} <br> ${qualification[2]} <br> ${qualification[3]}
//     <br> ${qualification[4]} <br> ${qualification[5]} <br> ${qualification[6]} <br> ${qualification[7]}`)

// Q8 :
// var studentNames = ["Ayan" , "Huzaifa" , "Rizwan"]
// var studentMarks = [480 , 350 , 250]
// var percentage1 = (studentMarks[0] / 500) * 100;
// var percentage2 = (studentMarks[1] / 500) * 100;
// var percentage3 = (studentMarks[2] / 500) * 100;
// document.writeln(`
//     Score of ${studentNames[0]} is ${studentMarks[0]}. Percentage is ${percentage1}% <br> 
//     Score of ${studentNames[1]} is ${studentMarks[1]}. Percentage is ${percentage2}% <br>
//     Score of ${studentNames[2]} is ${studentMarks[2]}. Percentage is ${percentage3}% <br>
//     `)

// Q9 :
// var colorNames = ["Green" , "White" , "Red" , "Blue" , "Purple"]
// // var user1 = prompt("What color do you want to add the beginning of the Array?")
// // var user2 = prompt("What color do you want to add the End of the Array?")
// // var user3 = prompt("Add two More Colors at the beggining of the Array." , "First Colour is")
// // var user4 = prompt("","Second Colour is")
// // var user5 = +prompt("Which index you want to add the color")
// // var user6 = prompt("Your Color Name is :")
// var user7 = +prompt("what index number you want to delete the Colours")

// // colorNames.unshift(user1)
// // colorNames.push(user2)
// // colorNames.unshift(user3)
// // colorNames.unshift(user4)
// // colorNames.shift(colorNames[0])
// // colorNames.pop(user4)
// // colorNames.splice(user5,1,user6)
// colorNames.splice(user7,1)
// document.writeln(colorNames)

// Q10 :
// var scores = [20,40,60,80,10];
// scores.sort()
// console.log(scores);

// Q11 : 
// var cities = [" Islamabad " , " Karachi " , " Lahore " , " Peshawar " , " Sindh " , " Punjab "]
// var selectedCities = cities.slice(1,4)
// document.writeln(`
//      Cities List : ${cities}<br>
//      Selected Cities : <b>${selectedCities}</b>
//     `)

// var arr = ["This" , "is" , "my" , "Cat"]
// var result  = arr.join(" ")
// console.log(result);

// Q13 

// var arr = []
// arr.push("First")
// arr.push("In")
// arr.push("First")
// arr.push("Out")

// document.writeln(`
//     ${arr.shift()}
//     ${arr.shift()}
//     ${arr.shift()}
//     ${arr.shift()}
//     `)


// Q14 :

// var arr = []
// arr.push("KeyBoard")
// arr.push("Mouse")
// arr.push("Printer")
// arr.push("Moniter")

// document.writeln(`
//     ${arr.pop()}
//     ${arr.pop()}
//     ${arr.pop()}
//     ${arr.pop()}
    
//     `)

// Q15 :
// var mobile = ["Samsung", "Apple", "Sony", "Haier", "Motorola", "Nokia"]
// document.writeln(`
//     <h2 style="font-family: sans-serif;">Select your Device</h2>
//          <select name="" id="">
//         <option value="Samsung">${mobile[0]}</option>
//         <option value="Apple">${mobile[1]}</option>
//         <option value="Sony">${mobile[2]}</option>
//         <option value="Haier">${mobile[3]}</option>
//         <option value="Motorola">${mobile[4]}</option>
//         <option value="Nokia">${mobile[5]}</option>
//     </select>
//     `)