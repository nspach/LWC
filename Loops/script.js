console.log("Loops")
let myFavCars = ["Audi","BMW","Maruti","Hyundai","TATA"];
let myDetails = {
    fname : "Nikhil",
    lname : "Pachbhai",
    age : 75,
};

// for Loop
 for(let i = 0;i < myFavCars.length ; i++){
    console.log(`${i + 1}. ${myFavCars[i]}`);
 }

 //while loop

 let currentIndex = 0;
 console.log(myFavCars.length);
 while(currentIndex < myFavCars.length){
    console.log(`${currentIndex + 1}. ${myFavCars[currentIndex]}`);
    currentIndex = currentIndex + 1;
 } 

 //do -while loop

 /** 
 * do{
 
}
 * While()
 * 
 * 
 */

 do{
    console.log("Do while loop");
 } while(1 === 2);

 //for of loop
 /**
  * for(Let curritem of myFavCars)
  */

  for(let curritem of myFavCars){
    console.log("curritem", curritem);
  }

  //Index and Item

  for (let [index,car] of myFavCars.entries()){
  console.log(`${index + 1}.${car}`);
  }
  /**
   * To Make object iterable,we have three method
   * 1) Object.keys
   * 2) Object.values
   * 3) Object.entries
   */

   for(let curritem of Object.keys(myDetails)){
    console.log("currItem",curritem);
   }

   for(let curritem of Object.values(myDetails)){
    console.log("currItem",curritem);
   }

   for(let curritem of Object.entries(myDetails)){
    console.log("currItem",curritem);
   }
   for(let [key , value] of Object.entries(myDetails)){
    console.log(key,value);
   }


   // for in loop
   /**
    * for(Let variablename in collection)
    */

   for(let curritem in myFavCars){
    console.log(curritem,myFavCars[curritem]);
   }
   
   console.log("myDetails,myDetails");
   for(let item in myDetails){
    console.log(item,myDetails[item]);
   }

   let openingHours = {
      fri : {open:"10 AM",close:"11 PM"},
      sat : {open:"09 AM",close:"10 PM"},
      sun : {open:"08 AM",close:"09 PM"},
   };

   for(let curritem in openingHours){
    console.log(curritem);
    console.log(openingHours[curritem]);
    let {open,close} =openingHours[curritem];
    console.log(open,close);
    console.log(`On ${curritem} office starts at ${open} and closed at ${close}`);
   }

   for(let [day,{open,close}] of Object.entries(openingHours)){
    console.log(day,open,close); 
   }

   









