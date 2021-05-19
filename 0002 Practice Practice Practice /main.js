/*
let obj1 = {
  name : 'Aditya',
  place : 'pune',
  std : 'BE'
}
console.log(obj1);
//--------------------------------------------
function createObj(name,place,std) {
  let newObj = {};
  newObj.name = name;
  newObj.place = place;
  newObj.std = std;
  return newObj;
}
let obj2 = createObj('Suraj','Ambegaon','BE-Civil');
//--------------------------------------------
function autoCO(name,place,std){
  this.name = name;
  this.place = place;
  this.std = std;
}
let obj3 = new autoCO('Balu Vaste','Pimpari-CC','BE-IT');
let obj4 = new autoCO('Ganesh','Mumbai','FE');


let college1 = {
  name : 'SCOE',
  place : 'Ambegav',
  type : 'engg college ',
  info : function (intake, rating){
    console.log(`${this.name} is placed in ${this.place} it is an ${this.type}. Its Intake Is ${intake} and its rating is ${rating}`);
  }
}

//console.log(college1);
//college1.info(1200,5);

let college2 = {
  name : 'SKNCOE',
  place : 'Vadagaon',
  type : 'engg college '
}
college1.info.call(college2,800,4.5);

function someNew() {
  this.name= 'Akshay';
  this.age= 19;
  this.education= 'BE-2nd';
}

//let adi = new someNew();
//console.log(adi);

function iDontKnow(arg) {
 someNew.call(this);  //✅
//  someNew.call();   //❌
//   someNew();.      //❌
  this.Aditya ='aditya';
}
console.log(new iDontKnow);
*/


//SuperType constructor function
function SuperType() {
  this.name = "Virat"
}

//SuperType prototype
SuperType.prototype.getSuperName = function() {
  return this.name
}

// Added By Aadi
// let aadi1 = new SuperType();

//SubType prototype function
function SubType() {
  this.age = 26
}

//Inherit the properties from SuperType
SubType.prototype = new SuperType();

//Add new property to SubType prototype
SubType.prototype.getSubAge = function() {
  return this.age;
}

//Create a SubType object
var subTypeObj = new SubType();
console.log(subTypeObj.name); //Output: Virat
console.log(subTypeObj.age); //Output: 26
console.log(subTypeObj.getSuperName()); //Output: Virat
console.log(subTypeObj.getSubAge()); //Output: 26



function Topper() {
   this.name1 = 'Aditya';
}
Topper.prototype.t1 = function (){
  return this.name1;
}

//let topperBoy = new Topper();

function Mad() {
  this.name2 = 'Rohan';
}
Mad.prototype = new Topper();
Mad.prototype.m2 = function () {
  return this.name2;
}

let pract = new Mad();
console.log(pract.name2);
console.log(pract.name1);
console.log(pract.m2());
console.log(pract.t1());
