console.log("Logical Operator");
let myNumber1 = 10;
let myNumber2 = 20;
console.log("typeof myNumber1 + typeof myNumber2",typeof myNumber1 + typeof myNumber2);
console.log("Result",myNumber1 + myNumber2);

let myNumber3 = "10";
let myNumber4 = "20";
console.log("typeof myNumber3 + typeof myNumber4",typeof myNumber3 + typeof myNumber4);
console.log("Result",myNumber3 + myNumber4);

let myNumber5 =10;
let myNumber6 = "20A";
console.log("typeof myNumber5 + typeof myNumber6",typeof myNumber5 + typeof myNumber6);

if(isNaN(myNumber6)){
    console.log("myNumber6 is not a Number thus conversion is not possible ");  
}
else{
    console.log("Result",myNumber5+myNumber6);
}

let myNumber7 = "10";
let myNumber8 = 20;
console.log("typeof myNumber7 + typeof myNumber8",typeof myNumber7 + typeof myNumber8);
console.log("Result",Number(myNumber7) + myNumber8);

let myNumber9 = 30
let myNumber10 = 40;
console.log("Result",myNumber9 - myNumber10);

let myNumber11 = 30;
let myNumber12 = 40;
console.log("Result",myNumber11 * myNumber12);

let myNumber13 = 30;
let myNumber14 = 40;
console.log("Result",myNumber13 / myNumber14);

let myNumber15  = 10;
let myNumber16 = 20;
console.log(myNumber15 > myNumber16 );
console.log(myNumber15 < myNumber16 )

let myNumber17  = 10;
let myNumber18 = 20;
console.log(myNumber15 != myNumber16 );
console.log(myNumber15 == myNumber16 )
console.log(myNumber15 >= myNumber16 )
console.log(myNumber15 <= myNumber16 )
console.log(myNumber15 && myNumber16 )

let age=21;
let output = age < 18 ? "Too Young" : "Old Enough";
console.log("Result -- > ",output);

// == operator is only check the value
let number1 = 3;
let number2 = 3;
console.log(typeof number1,typeof number2);
console.log(number1 + number2);
console.log(number1 == number2 );

// === operator check the value and type

let number3 = 3;
let number4 = "3";
console.log(typeof number3,typeof number4);
console.log(number3 === number4);

