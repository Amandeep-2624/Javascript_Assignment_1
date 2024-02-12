'use strict';

// function that returns sum of two numbers
function Add(val1,val2){
  return val1+val2;
} 

//function returning difference of 2 numbers 
function Substract(val1,val2){
    return val1-val2;
}

//function returning product of 2 numbers
function Multiply(val1,val2){
    return val1*val2;
}

//function returning division of 2 numbers
function Divide(val1,val2){
    return val1/val2;
}


//function to calculate the result of operations based on operator.
function calculateResult(){
    const num1=parseFloat(document.getElementById('num1').value);
    const num2=parseFloat(document.getElementById('num2').value);
    const operator=document.getElementById("operator").value
    let res;
    try{
    if(isNaN(num1) || isNaN(num2)){
        throw new Error('Invalid input');  // handling invalid input that is if input is not a number
    }
    else{
        if(operator=='+'){
            res=Add(num1,num2);
        }
        else if(operator=='-'){
            res=Substract(num1,num2);
        }
        else if(operator=='*'){
            res=Multiply(num1,num2);
        }
        else if(operator=='/'){
            if(num2===0){
                throw new Error('Error: Can not divide by Zero');  // handling the error division by 0.
            }
            else{
            res=Divide(num1,num2);
            }
        }
        else{
            throw new Error('Invalid operator selected');  // if no operator is selected then error invalid operator is shown.
        }

        // if result is beyond max safe integer then display result too large.
        if(res>Number.MAX_SAFE_INTEGER || res<-Number.MAX_SAFE_INTEGER){
            throw new Error('Error: Result too large to display');
        }                          
    }
    document.getElementById("Result").innerHTML=`Result : ${res}`;
   }

    //catching the errors if any found in try block.
    catch(error){
    document.getElementById("Result").innerHTML=error.message;
    }   
}