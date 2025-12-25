// Q1
// function currTime(){
//     let date = new Date()
//     return date
// }
// let res = currTime()
// console.log(res);

// Q2
// function greetUser(fName,lName){
//     console.log(`Welcome ${fName} ${lName} How are You!`);

// }

// greetUser("Ayan" , "Khan")
// greetUser("Usman" , "Khan")


// Q3
// function calc(n1 , oper , num2){
//    if(oper === "+"){
//     console.log(n1 +num2);
//    }
//    else if(oper === "-"){
//     console.log(n1-num2);
//    }
//     else if(oper === "*"){
//     console.log(n1*num2);
//    }
//     else if(oper === "/"){
//     console.log(n1/num2);
//    }
//     else if(oper === "%"){
//     console.log(n1%num2);
//    }   
//    else{
//     console.log(`Invalid!`);
//    }
// }

// calc(10,"*",2)

// Q4
// function sqr(a){
//     return a*a
// }
// let res = sqr(13)
// console.log(res);


// Q5
// function counting(start,end){
//     for(let i = start ; i<=end; i++ ){
//         console.log(i);  
//     }
// }
// counting(2,14)

// Q6
// function area(wid,hei){
//     return wid*hei
// }

// let res = area(20,40)
// console.log(res);


// Q7
// function palin(wor){
//    let spl = wor.split("").reverse().join("")
//    if(spl === wor){
//         return `${wor} is a Palindrome Word`
//    }else{
//     return `${wor} is not a Palindrome Word!`
//    }
// }
// let ans = palin("civic")
// console.log(ans);


// Q8
// function long(str){
//     let spl = str.split(" ")
//     let assume = str[0]
//     for(let i = 0; i<spl.length; i++){
//         if(spl[i].length > assume.length){
//             assume = spl[i]
//         }      
//     }
//     return assume
// }
// let ans = long("the quick browns Development dog")
// console.log(ans);


// Q9
// function capit(sen) {
//     let brea = sen.split(" ")
//     let res = ""
//     for (let i = 0; i < brea.length; i++){
//         res += brea[i][0].toUpperCase() + brea[i].slice(1) + " "
//     }
//     return res
// }
// let ans = capit("the quick browns Development dog")
// console.log(ans);

// Q10
// function factorial(num){
//     let f = 1;
//     for(let i = 1; i<=num; i++){
//         f *= i
//     }
//     return f
// }

// Q11
// function calc(base,perp){
//     var sqr = (base*base) + (perp * perp)
//     var hyp = Math.sqrt(sqr)
//     return hyp
// }

// var a = calc(8,6)
// console.log(a);

// let ans = factorial(2)
// console.log(ans);

// Q13
// function coun(sen, cou) {
//     let c = 0;
//     for (let i = 0; i < sen.length; i++) {
//         if (sen[i] === cou) {
//             c++
//         }
//     }
//     return c
// }
// let ans = coun(`Hey Hey Hey`, "e")
// console.log(ans);


// Q14
// function calcCircumference(rad){
//     let res = `Circumference of Circle is ${2 * 3.142 * rad}`
//     return res
// }
// function calcArea(ra){
//     let res = `Area of Circle is ${3.142 * ra*ra}`
//     return res
// }

// let ans1 = calcCircumference(24)
// let ans2 = calcArea(2)
// console.log(ans1);
// console.log(ans2);






