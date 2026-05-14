
//1-Normal Funtion
//syntex:
//function functionName(parameters){
//return value;
//}
function addNumberfunc(a,b){
    return a+b;
}
console.log("normal function ", addNumberfunc(2,3));
console.log(`normal function: ${addNumberfunc(5,7)}`);//morden way to write string with variable;
const greetexp=function(){
    return "hello world";
}
console.log("greetexp ", greetexp());
const sqfunc=function(num){
    return num*num;
}
console.log(`sq of a number: ${sqfunc(6)}`);
//arrow funtion
//syntex:
//const functionName=(parameters)=>experation
//ex-
const addNumberArrow=(a1,b2)=>a1+b2;
 console.log("arrow function ", addNumberArrow(6,2));
 //arrow funtion with no parameter
const greetArrow=()=> "hello world";
console.log("greetArrow ", greetArrow());
//arrow funtion with one parameter
const sqArrow=num=> num*num;
console.log(`sq of a number: ${sqArrow(8)}`);
//arry
const arr=[1,2,3,4,5];
//using normal function
const sqArrfunc=arr.map(function(num){
    return num*num;
});
console.log(`square of array elements: ${sqArrfunc}`);
//using arrow function
const sqArrArrow=arr.map(num=> num*num);
console.log(`square of array elements: ${sqArrArrow}`);