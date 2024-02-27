


var sortSentence = function (s) {
    let words = s.split(' ');
    let array = []
    for (let word of words) {
        let str = word.split('')
        str.pop()
        array.push([word.slice(-1), str.join('')])
        
    }

    return array.sort().map(item=>item.pop()).join(' ')
};

const input = "is2 sentence4 This1 a3"

const output = sortSentence(input);

console.log(output);
