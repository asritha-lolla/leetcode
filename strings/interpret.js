/* Input: command = "G()(al)"
Output: "Goal" */



const interpret = (command) => {
    let result = command.replaceAll('()', 'o');
    return result.replaceAll('(al)', 'al');
}


const input = "G()()()()(al)";

const output = interpret(input);

console.log(output);
