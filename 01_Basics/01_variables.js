//to sotre the data we need variables which acts like a container i.e memory space to store the data
//we have variables and constants that stores the data.
// variables can change their values but constant can't change(declare once)
const accountId= 143    //to declare a constant use keyword "const",here accountId is the name given to the memory
let accountEmail="pawankalyan@gmail.com"
var accountPassword ="12345"
accountCity="Hyd"//can also declare variable without using let or const but not prefered to use.
let accountState //we can also declare like thi without giving value and its is considered as "undefined".

//lets us change the values to see the differences// to run : node 01_Basics/01_variables.js
// accountId=1  //not allowed
accountEmail="powerstar@gmail.com"
accountPassword="67890"
accountCity="AP"
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])//prints all varibles in a tabular format
//variables can be defined in two ways: 1.let  2.var
//Note : prefered to not use "var" because of issue in block scope and functional scope.