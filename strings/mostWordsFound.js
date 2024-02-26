


const mostWordsFound = (sentences) => {
    let result = [];
    sentences.forEach((sentence) => {
        result.push(sentence.split(' ').length)
    })
    return Math.max(...result);

};


const input = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];

const output = mostWordsFound(input);

console.log(output);
