//ReferenceError: alert is not defined
//alert(3+3)//we are using node.js not browser,it only works on brower devtool i.e console
console.log(3+3)//code should be in a readable format i.e readability should be high .
console.log(3
    +
    3) //not encouraged

/*datatypes :
1. number : 2 to the power 53
2.bigint (used for large values)
3.string = " " (preffered) or ' '
4.boolean = true/false 
5.null =standalone values-empty value
6.undefined = variable declared but value not assigned
7.symbol =unique
8.object 
*/
let name="sravani"
let age=18
let isLoggedin=false
let serverResponse = null
let email=undefined
//typeof -used to know the datatype of the variable
console.log(typeof "sravani");
console.log(typeof age);
console.log(typeof null);//this gives "object"
console.log(typeof undefined);//this gives "undefined",it is a type itself