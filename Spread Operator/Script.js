console.log("Spread Operator...!!!");

let numberOne = [1,2,3];
let numberTwo = [4,5,6];

//Concatenation of Array 

let combineArray = [...numberOne,...numberTwo];
console.log("numberOne",numberOne);
console.log("numberTwo",numberTwo);
console.log("combineArray",combineArray);

//Expand the String 
let myName = "My Name is Nikhil";
console.log(myName);
console.log(...myName);

//Add elements in Array 
numberOne = [...numberOne,11,12,13,...numberTwo,21,22,23];
console.log("numberOne",numberOne);

//Adding the object 

let myObj1 = {fname : "Nikhil",skills:["JS","LWC","Apex"]};
let myObj2 = {lname : "Pachbhai",country : "India"};
let finalObject = {...myObj1,...myObj2};
console.log("finalObject",finalObject);

//Copy an Array an Object

let myFavFruits = ["Apple","Grapes","Banana"];
let myFavFruitsCopy =[...myFavFruits] ; // Shallow Copy
console.log("myFavFruits",myFavFruits);
console.log("myFavFruitsCopy",myFavFruitsCopy);
myFavFruitsCopy.push("Cherry");
console.log("myFavFruitsCopy",myFavFruitsCopy); //Deep copy in JavaScript


let myDetails = {fname : "Nikhil",lname:"Pachbhai"};
let myDetailsCopy = {...myDetails};
myDetailsCopy.age = 75;
console.log("myDetails",myDetails);
console.log("myDetailsCopy",myDetailsCopy);




