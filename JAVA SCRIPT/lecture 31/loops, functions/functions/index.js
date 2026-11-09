console.log("Hii, Manoj");

// let alokMarks=46+56+23;
// let addiMarks=24+24+42;
// let aranMarks=54+23+65;
// let anuMarks=54+52+23;
// console.log("alokMarks", alokMarks);

// let productPrice=3000;
// let discountAmount=3000*10/100;
// let deliveryCharge=50;
// let totalAmount= productPrice- discountAmount +deliveryCharge;

// Functions 

// function totalMarks() {
//     console.log("hii");
// }totalMarks()

// function totalMarks(studentName, mathMarks, scienceMarks, sanskritMarks) {
//     console.log(`${studentName} total marks :`, mathMarks + scienceMarks + sanskritMarks);
// }
// totalMarks("Alok", 46, 56, 23)
// totalMarks("Addi", 24, 24, 42)
// totalMarks("Aran", 54, 23, 65)
// totalMarks("Anu", 54, 52, 23)

// function greetingMsg(userName, greetings) {
//     console.log(`${greetings}, ${userName}`);
//     // console.log(greetings + " " +userName);
// }
// greetingMsg("trisha", "Hii")
// greetingMsg("Yukti", "Hello")
// greetingMsg("Manisha", "Namaste")
// greetingMsg("Nehrika", "Kemcho")

// function greetingMsg(userName, greetings = "Hey") {
//     console.log(`${greetings}, ${userName}`);
//     // console.log(greetings + " " +userName);
// }
// greetingMsg("trisha", "Hii")
// greetingMsg("Yukti",)
// greetingMsg("Manisha", "hey kaise ho")
// greetingMsg("Nehrika",)

// function calculator(num1, num2, opertor) {
//     switch (opertor) {
//         case "+":
//             console.log(`${num1} ${opertor} ${num2}=`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${opertor} ${num2}=`, num1 - num2);
//     }
// } calculator(4, 5, "+")
// calculator(4, 5, "-")

// function totalMarks(mathMarks, scienceMarks, sanskritMarks){
// return mathMarks + scienceMarks + sanskritMarks;}
// function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
//     let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} pecentage:`, percentage);
// }
// // calPercentage ("Alok", 56,46, 23)
// let reponse1 = calPercentage("Alok", 46, 56, 23)
// let reponse2 = calPercentage("Addi", 24, 24, 42)
// let reponse3 = calPercentage("Aran", 54, 23, 65)
// let reponse4 = calPercentage("Anu", 54, 52, 23)
// console.log(reponse1);
// console.log(reponse2);
// console.log(reponse3);
// console.log(reponse4);

// after array class 
let students = [
    ["Alok", 46, 56, 23],
    ["Addi", 24, 24, 42],
    ["Aran", 54, 23, 65],
    ["Anu", 54, 52, 23]
]
for (let i = 0; i < students.length; i++) {
    calPercentage(students[i][0], students[i][1], students[i][2], students[i][3])
}

// fun1()
// function fun1(){
//     console.log("function declaration");
// }
// console.log(add(5, 7));
// let add = function (num1, num2) {
//     return num1 + num2
// }

// arrow function
// syntax 1
// let add = num1 => num1 + 4;
// syntax 2
// let add = (num1, num2) => num1 + num2;
// // syntax 3
// let add = (num1, num2) => {
//     // something
//     return num1 + num2
// }
// console.log(add(5));