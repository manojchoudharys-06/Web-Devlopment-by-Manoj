console.log("hii");
console.log("i am manoj");


// function outter() { // let & let 
//     let a = 5;
//     function inner() {
//         console.log(a);
//         let a = 7;
//     }
//     inner()
// }
// outter()

function outter() { // var & var 
    var a = 5;
    function inner() {
        console.log(a);
        var a = 7;
    }
    inner()
}
outter()

function outter() { // const & var 
    const a = 5;
    function inner() {
        console.log(a);
        var a = 7;
    }
    inner()
}
outter()

function outter() { // const & const
    const a = 5;
    function inner() {
        console.log(a);
        const a = 7;
    }
    inner()
}
outter()

function outter() { 
    const a = 5;
    function inner() {
        console.log(a);
        const a = 7;
    }
    inner()
}
outter()







