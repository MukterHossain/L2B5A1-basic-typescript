
{
   //

   function formatString(input:string, toUpper?:boolean):string{
        if(toUpper === true || toUpper === undefined){
            return input.toUpperCase()
        } else{
            return input.toLowerCase()
        }
   }
// formatString("hello")
// formatString("hello", true)
// formatString("hello", false)





   function filterByRating(items: {title:string, rating:number}[]): {title:string, rating:number}[]{
     return items.filter(item => item.rating >=4.0)
   }

   const books =[
    {title:'Book A', rating:4.5},
    {title:'Book B', rating:3.2},
    {title:'Book C', rating:5.0},
   ]

// filterByRating(books) 




   function contatenateArrays<T>(...arrays:T[][]):T[]{
    return arrays.reduce((acc, array)=> acc.concat(array),[])
   }

// contatenateArrays(['a', 'b'], ['c'])
// contatenateArrays([1, 2], [3, 4], [5])




 class Vehicle{
    make:string;
    year:number;
    constructor(make:string, year:number){
        this.make = make;
        this.year = year;
    }
    
   public getInfo():string{
        return `Make: ${this.make}, Year: ${this.year}`
    }

 }
 class Car extends Vehicle{
    private model: string;
    constructor(make:string, year:number, model:string){
        super(make, year);
        this.model = model;
    }

    public getModel():string{
        return `Model: ${this.model}`;
    }
 }

 const myCar = new Car("Toyota", 2020, "Corolla")
// myCar.getInfo()
//  myCar.getModel()
 



 function processValue(value:string |number):number{
    if(typeof value === 'string'){
        return value.length
    }else{
        return value * 2
    }
 }
 
// processValue("hello")
// processValue(10)




 interface Product{
    name:string;
    price:number;
 }

 function getMostExpensiveProduct(products:Product[]):Product| null{
    if(products.length === 0){
        return null
    }
    return products.reduce((prev, curr) => (prev.price > curr.price)? prev : curr)
 }
 const products= [
    {name: "Pen", price: 10},
    {name: "Notebook", price: 25},
    {name: "Bag", price: 50},
 ]

//  getMostExpensiveProduct(products)



 enum Day{
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
 }

 function getDayType(day:Day):string{
    switch(day){
        case Day.Saturday:
            case Day.Sunday:
                return "Weekend"
                default:
                    return "Weekday"

    }

 }

//  getDayType(Day.Monday)
//  getDayType(Day.Sunday)
//  Day.Friday)






async function squareAsync(n:number):Promise<number>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(typeof n === 'number' && n >=0){
                resolve(n * n)
            }
            else{
                reject(new Error("Error:Negative number not allowed"))
            }
        }, 1000)
    })
} 

// squareAsync(4).then(())










//
}