/* ----------P R O T O T Y P E S---------------*/
// In the javascript everything is an object.So We are taking a function whichbis an OBJECT...Take_a_look

function samFun(arg) {
  console.log('This Is Simple Function');
}
/*
1.Remember That every fuction create a two object (1) is that content of the function and (2) is named as a 'prototype '.
2.As from above example the 'samFun' is the main object and 'samFun.prototype' is another object.These are the two objects.
3.The 'samFun.prototype' is the method/property of 'samFun' object/function.
*/
console.log(samFun.prototype);
// samFun{constructor.....};

let constrObj = new samFun();
console.log(constrObj);
// The The function is created using the constructor.

console.log(constrObj.__proto__);
// samFun{constructor.....};

/*
🔔 Take carefully :- 'samFun.prototype' is the object of 'samFun' function. And now using 'constructor ' i created a Constructor function that always return a object.In this case that object is 'constrObj'.For that object __proto__ method.
* Since,the 'samFun.prototype'==='constrObj.__proto__'
* //true
*/
samFun.prototype.prop='This Is Created Using Function Prototype';
console.log(samFun.prototype.prop);

//----------------------------------------

function sorry(arg) {
  this.name = 'Jasprit Bhumrah';
  this.age = 27;
  this.work = ['fast bowler','good fielder'];
}
let smartF = function () {
  console.log('wow');
}
let smartO = { greet : 'Welcome'} ;

let newObj =new sorry('wow'); 
sorry.prototype.nation = 'India';

let anotherNew = new sorry();
// Read The Article Carefully.....
// https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b
// Also Watch Videos of javabrains 9n object and prototype in depth

