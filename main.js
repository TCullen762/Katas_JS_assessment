//console.log("its working!")

//number one add
function add(x, y) {
    return x + y
}

let  addThis = add(2,4)//global scope...should work

console.log('The answer to number one is :' + ' ' + addThis)



//use add function to add the input variables
// creat array push add function into the array loop array need to make array length equal to one of  the multiply values


 /*function multiply(a,b
 
  let korvoArray=[]
  korvoArray.push.add(x,y)
  for(let index =0; index <= korvoArray.length; i ++){
  index+= 1}
  
  console.log(korvoArray)

}*/

  
function multiply(a,b){
    let korvo = 0
    for(let index= 0; index < b ; index++){
    korvo = add(a,korvo)
    }
    return korvo
}

let multiplyThisThing= multiply(2,5)   
console.log(multiplyThisThing)

console.log('The answer to number two is :' + ' ' + multiplyThisThing) 


function power (x,n){
  let morty = x
  for(let index = 0; index< n; index++){
    morty =multiply(x,morty)
  }
  return morty
}

let morePower = power(2,20)
console.log('The answer to number three is :' + ''+  morePower)
 

  function factorial(z){
  let jerry = z 
  for( let index = 1 ; index < z ; index++){
    jerry = multiply(jerry,index)
    
  }
  return jerry
}

let noFacts = factorial(5)


console.log(noFacts)

/*function fibonacci (x) {
  let beth = 0 
  for( let index = 0; index < x ; index ++){
  Beth = ...
  }
  return beth
}*/

