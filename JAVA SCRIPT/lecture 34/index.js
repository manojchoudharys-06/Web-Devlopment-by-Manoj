console.log("HELLO");
console.log("I AM MANOJ");


// let student = {
//     name: "Manoj",
//     rollNo: 308,
//     subject: ["math", "english", "hindi"]
// }
// let { subject, ...variable } = student
// console.log(variable);

// how to rename key 
// let student = {
//     name: "Manoj",
//     rollNo: 308,
//     subject: ["math", "english", "hindi"]
// }
// let { subject :Yash, ...variable } = student
// console.log(Yash);

// let student = {
//     name: "Manoj",
//     rollNo: 308,
//     subject: ["math", "english", "hindi"],
//     totalMarks: 600
// }
// let { subject: Yash, totalMarks = 500, ...variable } = student
// console.log(Yash);
// console.log(totalMarks);

// let obj1 = {
//     name: "Manoj",
//     phone: 9111461607,
//     phone: 7825763245
// }
// let obj2 = {
//     address: "india",
//     adharCard: 5223452345543,
//     name: "Yash"
// }
// let obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

// // array and object update
// const arr = [1, 2, 3, 4]
// arr[1] = "updated"
// console.log(arr);

// let obj = {
//     name: "Trisha",
//     rollNo: 15,
//     address:null
// }
// obj["name"] = "Yash"
// obj.name = "Anjli"
// delete obj.rollNo // property deleted
// console.log(obj?.address);
// console.log(obj.address?.street);
// console.log(obj);

// splice --> add, delete, replace 
// let arr = [1, 2, 3, 4, 5, 6]
// arr.splice(2,2) // delete
// arr.splice(1,3) // delete
// arr.splice(3, 0, 2) // add
// arr.splice(3, 0, ["add"]) // add
// arr.splice(3,1, 7) // replace
// arr.splice(3,2, ["replace"]) // replace
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6]
// let trimArr = arr.splice(0, 3) // trim
// let trimArr = arr.splice(1, 3) // trim
// console.log(trimArr);

// let arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.indexOf(43624));

//  let arr2 = [1, 2, 3, 4, 5, 6]
// let res = arr2.find((value) => {
//     if (value === 3) { return value }
// })
// console.log(res);
// let resIndex = arr2.findIndex((value) => {
//     return value === "3";
// })
// console.log(resIndex);

// flat 
// let arr3 = [1, 2, 3, 4, 5, [6, 7, 8, [9, 10,11]]]
// console.log(arr3.flat(Infinity));

// // mutability
// let arr4 = [4, 5, 6, 62, 213, 13]
// let arrCopy = arr4;
// let arrCopy2 = [...arr4]; // spread operator
// arrCopy2.pop()
// console.log("arr4", arr4);
// console.log("arr4Copy", arrCopy2);





