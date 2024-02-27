
// var result='';

var reverseWords = (s)=> {

let words=s.split(' ');
let newString=[]
for(let word of words){
newString.push(word.split('').reverse().join(''));
}
return newString.join(' ');
};


const input = "Let's take LeetCode contest";

const output = reverseWords(input);

console.log(output);

