console.log("I am Manoj");


// let product1 = [15299, 4.5, 75, 10, "iphone"]
// product1[0] // error
// console.log(product1[0]);
// console.log(typeof product1);

// let product2 = {
//     price: 15299,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     // name: "iphone",
//     221: "iphone",
//     "productName": "iphone",
//     'first-name': "manoj"
// }
// product2"first-name" // error
// product2["first-name"]
// console.log(product2["first-name"]);
// console.log(product2["productName"]);
// console.log(product2);

// let product2 = {
//     price: 15299,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productName: "Iphone 20 pro max",
//     printProductName: function () {   // this is method (function)
//         // console.log("Iphone 18 pro max");
//         // console.log(product2.productName); // ye use nahi karna hai
//         console.log(this.productName); // ye use karna hai 

//     },
//     printDiscount() {   
//         // console.log("10%"); // ye use nahi karna hai
//         console.log(this.discount); // ye use karna hai
//     }
// }
// product2.printProductName()
// product2.printDiscount()

// let Math2= {
//     abs() { },
//     ceil() { },
//     floor() { }
// }
// Math2.abs()

// let product2 = {
//     price: 15299,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productName: "Iphone 20 pro max",
//     printProductName: function () {   // this is method (function)
//         // console.log("Iphone 18 pro max");
//         // console.log(product2.productName); // ye use nahi karna hai
//         console.log(this.productName); // ye use karna hai 
//     },
//     printDiscount() {   
// console.log("10%"); // ye use nahi karna hai
//         console.log(this.discount); // ye use karna hai
//     }
// }
// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// let product1 = [15299, 4.5, 75, 10, "iphone"]
// for (value of product1) {
//     console.log(value);
// }
// for (let i = 0; i < product1.length; i++) {
//     console.log(product1[i]);
// }
// product1.forEach(function (value , index) {
//     console.log(value , index);
// })

// callback function
// function b(fun) {  // first syntek (jyada use)
//     console.log("b");
//     console.log(fun);
//     fun()
// }
// b(function a() {
//     console.log("a");
// })

// function b(fun) {  // first syntek (kam use)
//     console.log("b");
//     console.log(fun);
//     fun()
// }
// let a = function () {
//     console.log("a");
// }
// b(a)

// let productName = "something"
// let product2 = {
//     price: 15299,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productName: "Iphone 20 pro max",
//     printProductName: function () {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }
// for (value in product2) {
//     console.log(value);
// }
// for (value in product2) {
//     console.log(product2[value]);
// }

// // destructuring
// let product1 = [15299, 4.5, 75, 10, "iphone"]
// const [a, b, c, d, e, f, g] = [15299, 4.5, 75, 10, "iphone"]
// console.log(c);
// console.log(g);

// let product2 = {
//     price: 15299,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 10,
//     productName: "Iphone 25 pro max",
//     printProductName: function () {
//         console.log(this.productName);
//     },
//     printDiscount() {
//         console.log(this.discount);
//     }
// }
// let { price, printDiscount, avgRating } = product2 // or acche se react me padege
// console.log(price,printDiscount(), avgRating);

// for([key, value] of Object.entries(product2)){
//     console.log(key, value);
// }

// let product1 = [15299, 4.5, 75, 10, "iphone"]
// const [n, p] = ["iphone", 15299, 4.5, 75, 10]

// let arr = [53, 15, 626, 7, 43, 57, 23, 54, 752, 43]
// console.log(arr);
// console.log(...arr);
// console.log(Math.min(...arr));

// let a =[1,2]
// let b=[3,4]
// let c=[...a,...b] // array merging by spread operator
//  console.log(c);
//  console.log(...c);

// let product1 = [15299, 4.5, 75, 10, "iphone"]
// const [n, p, ...hello] = ["iphone", 15299, 4.5, 75, 10]
// console.log(hello);

// function add(...numbers) {
//     console.log(numbers);
// }
// console.log(add(4, 5, 2546, 2));

// function add(...numbers) {
//     let total = 0;
//     for (value of numbers) {
//         total += value
//     }
//     return total;
// }

let product2 = {
    price: 15299,
    avgRating: 4.5,
    totalRevies: 75,
    discount: 10,
    productName: "Iphone 25 pro max",
    variants: ["pro", "base", "pro max"] ,
    manufcaturerDetail:{
        city:"Narsinghpur",
        state: "MP",
        country:"India"
    }
    // printProductName: function () {
    //     console.log(this.productName);
    // },
    // printDiscount() {
    //     console.log(this.discount);
    // }
}
let { manufcaturerDetail, ...userkeLiyeDetail} = product2
console.log(userkeLiyeDetail);