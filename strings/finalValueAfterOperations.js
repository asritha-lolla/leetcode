const finalValueAfterOperations = (operations)=>{
    let x=0;
for(let operation of operations){
    if(operation==="++X"||operation==="X++"){
        x++;
    }
    if(operation==="--X"||operation==="X--"){
        x--;
    }
}
    return x;
};

console.log(finalValueAfterOperations(["X++","X++","X++"]));