console.log("HII");
console.log("I AM MANOJ");


// let originalPrices = [463, 654, 2346]
// let discountedPrices = []
// for (value of originalPrices) {
// let discount = value * 10 / 100
// discountedPrices.push(value - discount) //10% discount
//     discountedPrices.push(value * 0.9) //10% discount
// }
// console.log(originalPrices);
// console.log(discountedPrices);

// originalPrices.forEach((value) => {
//     discountedPrices.push(value * 0.9)
// })
// const discountedPrices2 = originalPrices.map((value) => value * 0.9)
// console.log(discountedPrices2);

// let students = [
//     {
//         name: "ayushi",
//         marks: 32
//     },
//     {
//         name: "anjli",
//         marks: 78
//     },
//     {
//         name: "anaya",
//         marks: 43
//     },
//     {
//         name: "abhika",
//         marks: 56
//     },
//     {
//         name: "anvika",
//         marks: 28
//     },
// ]
// let studentNames=[]
// students.forEach((value) =>{
// studentNames.push (value.name)
// })

// const studentNames = students.map((student) => student.name)
// const studentMarks = students.map((student) => student.marks)
// console.log(studentNames, studentMarks);

// let boostedMarks = students.map((student) => {
//     return { ...student, marks: student.marks + 10 }
// })
// let boostedMarks = students.map(student => ({ ...student, marks: student.marks + 10 }))
// console.log(boostedMarks);

// let failedStudents = []
// students.forEach((student) => {
//     if (student.marks < 33) {
//         failedStudents.push(student)
//     }
// })
// console.log(failedStudents);

// const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)
// filter ek use krke agar hmko marks hi dikhane h name nahi to sir
// const failedStudentsName=failedStudents.map((student)=>student.name)
// console.log(failedStudents);

// let marks = [56, 24, 62, 73, 78]
// let totalMarks = 0
// marks.forEach((mark) => totalMarks = totalMarks + mark)
// console.log(totalMarks);

// let marks = [56, 24, 62, 73, 78]
// const totalMarks = marks.reduce((accumulator, currentValue) => {
//     accumulator = accumulator + currentValue
//     return accumulator;
// }, 0)
// console.log(totalMarks);

// const attendence = ["present", "absent", "present", "absent"]
// { present: 3, absent: 2 }

// const attendence = ["present", "absent", "present", "absent"]
// let obj = {}
// attendence.forEach((value) => {
//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }
// })
// console.log(obj);

const attendence = ["present", "absent", "present", "absent"]
const obj = attendence.reduce((acc, value)=>{
    // if (acc[value]) {
    //     acc[valu
    // e] = acc[value] + 1
    // } else {
    //     acc[value] = 1
    // }
    acc[value]=(acc[value]||0)+1;
    return acc
},{})
console.log(obj);
