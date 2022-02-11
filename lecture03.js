/**
 * @title: Array Push and Poll Methods
 */

const Stack = require('./lecture02')

const stack = new Stack();
const text = 'Hello';

for (let i = 0; i < text.length; i++) {
    
    stack.push(text[i])
    
}
console.log(stack.printStack());

let reverseText = ""
while(!stack.isEmpty()){
    // console.log(`[POPED]-`);
    // console.log(stack);
    reverseText+=stack.pop();
}

// console.log(reverseText);

// Javascript Array Stack Methods

const text1 = "HELLO";
const jsStack = [];

for(let i =0; i<text.length; i++){
    jsStack.push(text1[i])
};
console.log(jsStack);
let result1 = "";
while(jsStack.length){
    result1+=jsStack.pop();
}
console.log(result1);
