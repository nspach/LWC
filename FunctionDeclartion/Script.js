let calc1result =calc1(10,5);
console.log("calc1result",calc1result);

// function Declartion --> calling funcation before deck=lartion : legacy
function calc1(number1,number2){
    let sum =  number1 + number2;
    return sum;
} //hoisting

//Function Expression --> recommended

let calc2 = function(number1,number2){
if(number2){
  let sum = number1+ number2;
  return sum;
    }
    else{
        return number1;
    }
};

let calc2result = calc2(20);
console.log("calc2result",calc2result);



///Arrow Funcation : ES6

let calc3 = (number1,number2)=>{
    if(number2){
        let sum = number1 + number2;
        return sum;
    } else {
        return number1;
    }
};

let calc4result =calc1(10,5);
console.log("calc4result",calc4result);

let greet = function(username){
    return `${username},Welcome to Learn JS`;
};

let greetArrowFunction = (username)=> `${username} , Welcome to Learn JS`;
console.log(greet("Nikhil"));
console.log(greetArrowFunction("Nik"));

//callback funcation

function welcomeMe(name, callMe){
    console.log(`Hello ${name}`);
    callMe();
}

function greetMeToo(){
    console.log('Welcome to Tech Jouret With World');

}

function goodBye(){
    console.log('See you in future Sessions of Bootcamp');
}

welcomeMe("Nikhil",greetMeToo);
welcomeMe("Nikh",greetMeToo)
