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
