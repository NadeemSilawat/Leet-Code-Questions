// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

var finalValueAfterOperations = function (operations) {
    
    // (1)

    // var X = 0;
    // for(let i = 0; i< operations.length ;i++ ){
    //     if(operations[i] === "X--"||operations[i] === "--X"){
    //         X-- 
    //     }else if(operations[i] === 'X++'|| operations[i] === '++X'){
    //         X++
    //     }
    // }
    // return X

   
    //  (2) short code 

    // var X = 0;
    // for (let i = 0; i < operations.length; i++) {
    //     if (operations[i] === "X--" || operations[i] === "--X") {
    //         X--
    //     } else {
    //         X++
    //     }
    // }
    // return X

    // (3) 

    // let X=0;
    // for(i=0; i<operations.length; i++){
    //     if(operations[i].includes("++")){
    //         X+=1;
    //     }else{
    //         X-=1;
    //     }
    // }
    // return X;

    // (4)
    
    let val = 0;
    for (let op of operations) {
        if (op == "--X" || op == "X--") val--;
        if (op == "++X" || op == "X++") val++;
    }
    return val;

};
