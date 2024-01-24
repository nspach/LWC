console.log('Truthy and Falsy...!!!')


let myName;
console.log(myName);
console.log(typeof myName);

if(myName){
    console.log("print my Name",myName);
}else{
    console.log("Name is not defined correctly");
}

let mySalary = 0;
console.log("mySalary",mySalary);
console.log("typeof mySalary",typeof mySalary);

if(mySalary){
   console.log("Print my Salary",0)
}
else{
    console.log("Salary must be greater than 0");  
}
