//console.log("its working!")

//number one add
function add(x, y) {
    return x + y
}

const addingThing = add(3,4)//global scope...should work

console.log('The answer to number one is :' + ' ' + addingThing)


//number two multiply
let mathArray =[]
function multiply(a, b){
   
    //for(let counter = 2; 0 <= mathArray.length; counter += 5)
    return a + b 
    
}
const multiplyThing = multiply(2,5)
mathArray.push(multiplyThing)

console.log(mathArray)
console.log("it is not working!!")

/*Write a function named "multiply" which takes two arguments (as input variables) and returns their product.

You may not use built-in math operators or functions (such as the * multiplication operator). Instead, you will use a FOR loop which calls your add function from the first kata.

For example, calling multiply(6, 4) should return a result of 24, which could be expressed by adding 6 to itself 4 times:*/