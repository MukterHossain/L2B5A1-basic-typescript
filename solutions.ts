
{
   //

   function formatString(input:string, toUpper?:boolean):string{
        if(toUpper === true || toUpper === undefined){
            return input.toUpperCase()
        } else{
            return input.toLowerCase()
        }
   }
//    const result = formatString("hello")
//    const result = formatString("hello", true)
//    const result = formatString("hello", false)

//    console.log(result)


    // problem 2
   function filterByRating(items: {title:string, rating:number}[]): {title:string, rating:number}[]{
     return items.filter(item => item.rating >=4.0)
   }

   const books =[
    {title:'Book A', rating:4.5},
    {title:'Book B', rating:3.2},
    {title:'Book C', rating:5.0},
   ]

//    console.log(filterByRating(books))


   // problem 3
   function contatenateArrays<T>(...arrays:T[][]):T[]{
    return arrays.reduce((acc, array)=> acc.concat(array),[])
   }

//    console.log(contatenateArrays(['a', 'b'], ['c']))
//    console.log(contatenateArrays([1, 2], [3, 4], [5]))
















   
   










   //
}