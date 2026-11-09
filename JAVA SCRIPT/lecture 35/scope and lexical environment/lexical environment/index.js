// lexical scoping 
// function outter() {
//     let username ="manoj"
//     function inner() {
//         console.log(username);
//     }
//     return inner 
// }
// const inner = outter ()
// let username ="yash"
// inner()

// lexical environment

// chan
function fun1() {
    let username = "manoj"

    function fun2() {

        function fun3() {

            function fun4() {
                console.log(username);
            }
            fun4()

        }

        fun3()
    }

    fun2()
}

fun1()