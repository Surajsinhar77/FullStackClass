//  FUNCTION
// let a = [1,4,65,7,8,8,8];

// let b = "NaMe";

//console.log(b.toLowerCase());  // in buit fucntion



// function define 
function getName(){
    console.log("function 1 ")
}

function getNameAdd(){
    
    console.log("function 2");
}

function getNameMult(G){
    getName();
    console.log("I am function 3");
}

//getNameAdd(); // function call
//getNameMult(a);  // a is paremeter

// let a;
// 8 4
// console.log(typeof(a));


let userInput = 4;
do{
    console.log("press 1 for addition");
    console.log("press 2 for multiplication");
    console.log("press 3 for addition");
    console.log("press 5 for addition");
    console.log("press anything for exit");

    if(userInput === 1){
        addvalue(8, 3);
    }else if(userInput ===2){
        multValue(8,3)
    }else if(userInput === 3){
        subvalue(8, 3);
    }else if(userInput === 4){
        divvalue(8,3);
    }else{
        userInput = 0;
    }
}while(userInput);

// switch case