console.log("hello here "+ 1);
let x=2;
console.log(x);
let y = 4 
{
  console.log(y);
  let z = 6 ;
  console.log(z);
} 

console.log(`items ${1+1} and ${x}`);
if (x != 3 ) { console.log("correct x = 2")} 
else{ console.log("wrong x = 3")} ;

let result = 23

result > 0 ? console.log('true') : console.log('false') ;
result > 0 ? x = 5*2 : console.log('false') ;

console.log(result);

result = 5 && 'hello';
console.log(result);

// functions :

function sum (x = 0 , y = 0){
  return x+y ;
}

console.log(sum (x,y));

function permutation (x,y){
  let z = x ;
  x = y ;
  y = z ;
}

permutation(x,y);
console.log(x , y);

// objects 

let obj = {
  price : `${x+y}`,
  name : `shoes`,
  'delivery-time' : `20 may`,
  ['achraf'+ x] : `achraf ${x}`,
  priceInCents (){
    return (this.price * 100); 
  }
}

console.log(obj.name , obj.price , obj['achraf'+ x] , obj.achraf10);

console.log(obj.priceInCents());

// JSON and local storage 
console.log(JSON.stringify(obj));
// console.log(JSON.parse(obj));

// document.body.innerHTML = `<h2>Hello</h2>` ; x

// i stopped in modules .

const person = { name: "Achraf", age: 22 };
// for (const item of person) { 
//   console.log(item);
// }

Object.entries(person).forEach(name=>{
  console.log(name);
})