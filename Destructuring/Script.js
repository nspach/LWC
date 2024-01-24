console.log("Destructuring");
 let myFavFruits = ["Apple","Cherry","Banana","Guava"];
//  let myFavFruits1 = myFavFruits[0];
//  let myFavFruits2 = myFavFruits[1];
//  let myFavFruits3 = myFavFruits[2];
 
let [myFavFruits1,,,myFavFruits2]=myFavFruits;
console.log("myFavFruits1",myFavFruits1);
console.log("myFavFruits2",myFavFruits2);

let [favFruits1,favFruits2,...rest]= myFavFruits;
console.log(favFruits1);
console.log(favFruits2);
console.log(rest);

 let myDetails = {
    fname : "Nikhil",
    lname : "Pachbhai",
    day : "1950"
 };

 let {fname:firstName,lname:lastName,day} = myDetails;
 console.log("fname",firstName);
 console.log("lname",lastName);
 console.log("day",day);
