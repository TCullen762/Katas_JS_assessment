//console.log("its working!")

//number one add
function add(x, y) {
    return x + y
}

let  addThis = add(2,4)//global scope...should work

console.log('The answer to number one is :' + ' ' + addThis)



//use add function to add the input variables - how in the fuck?


function multiply(a,b){
    let korvo = a
    for(var i = 0; i < b - 1; i++){
      korvo += a
    }
    return korvo 

}



    /* need a vairiable that will stack and result in 24 
 function multiply(a,b){
  let korvo = a   
for( let i = 0; i <= korvo ; i ++) { 
 a += i
return korvo 

}
// only returning the value on a ....damn!
}
*/
let multiplyThisthing= multiply(add(2,5),5)   
console.log(multiplyThisthing)

console.log('The answer to number one is :' + ' ' + multiplyThisthing) //how is this working?

console.log('but how did it work?')





//how in the fuck is this working?
/*sthe following was taken from medium.com and used for refference and reverse engineering only//

function multiply(a, b){
    console.log('goddamnit!!')
    let answer = a
    for(var i = 0; i < b - 1; i++){
      answer += a
    }
    return answer 
    
  }

*/
