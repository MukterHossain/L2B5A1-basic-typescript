# Blog-1
# Difference Between Interfaces and Ypes in TypeScript 
In TypeScript, both `interface` and `type` are used to describe the shape of an object. There ar important difference between them that can impact how and when you use each. Here are the main differences:

## Main differences
### Interface 
* Interface defines object structure , use extends,  (Declaration Merging) supported, (Union/Intersection) Limited, more structured and readable 

### Type 
* Type defines object, union, intersection and primitives. use intersection(&), (Declaration merging) Not supported, (Union/Intersection) supported, more flexible, especially with complex types 

## Use case 
* Interface used when designing the shpe of objects, especially clas-based. Take advantage of declaration merging  
* Type used when need unions, intersectios, mapped types. Nessessary to alias primitives, tuples types. 

## Example Code: 

### Interface 
interface Person1{
    name:string;
    age:number
}
### type 
Type Person2 ={
    name:string;
    age:number
}


### Conclusion 
* Interface and Type are both powerfull tools in TypeSscript. Sellect the right one depends on the specific needs of your codebe.






# Blog-2
# Explain the difference between any, unknown, and never types in TypeScript. 

TypeScript provides powerfull type system that help developer catch bugs easily. Here are the types: `any`, `unknown`, and `never`. 

## any 
* The `any` type disables TypeScript's type checking for a vaiable.  


### Example 

 let data:any = 'Hello World!!';
 data = 50 ;
 data.toUpperCase();



## unknown 
* The `unknown` is like any but it is safer. developer must check the type before using the value  


### Example 

 let input:unknown = 'Hello World!!';
if(typeof input === 'string'){
    console.log(input.toLowerCase());
}



## never
* The `never` type represents values that never occur usually in functions that throw error. used when a function never returns.


### Example 

function throwError():never{
    throw new Error('Something went wrong!')
}


### Conclusion 
* Developers write safer and more predictable ts code by using `any`, `unknown`, and `never` types. 
