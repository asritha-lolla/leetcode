

const findWordsContaining = (words, x) => {
    let arr=[];
    words.map((word, index) => {
        word.includes(x) && arr.push(index);
    });
    return arr;
};

let words = ["leet","code"], x = "e"

words[words.length-1]

const output=findWordsContaining(words,x);

console.log(output);

