// https://leetcode.com/problems/find-words-containing-character/description/

var findWordsContaining = function(words, x) {
    //  const arr = []
    // for(let i =0 ; i< words.length ;i++){
    //    if(words[i].includes(x)){
    //     arr.push(i)
    //    } 
    // }
    // return arr



    // (2)

//     const reg = new RegExp(x,'g');
//     return words.filter(word => word.match(reg))
};

console.log(findWordsContaining(["leet","code"],"e"));      
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"a"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"],"z"));