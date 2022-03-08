//console.log('Hello World')
//document.getElementById('TextChange').innerHTML="New World"

//When we declare variable with let, we can't create that name variable next

/*
Null vs Undifined
The undefined value is a primitive value used when a variable has 
not been assigned a value. The null value is a primitive value that 
represents the null, empty, or non-existent reference

Shallow copy
Shallow copy point to the same location where memory point same as reference type

Deep copy
Deep copy point to the new location same as value type
*/

//Now we moved on functions:
/*function num(){
    return 3
}
console.log(num())
*/


/*function Student(name, regno, uni) {
    this.name = name;
    this.regno = regno;
    this.uni = uni;
    this.display = function () {
      console.log("Name: " + this.name);
    };
  }
  let std1 = new Student("Umar", "01", "uet");
  let std2 = new Student("Khayam", "02", "cui");
  std2.display();
*/

//Loops
//While loop same as python
//For loop same as c++ or Java

/*let fruit='Banana'
console.log(fruit.length)
console.log(fruit.indexOf('n'))
console.log(fruit.slice(2,4))
console.log(fruit.replace('Ban',123))
console.log(fruit.toUpperCase())
console.log(fruit.charAt(2))
console.log(fruit[2])
console.log(fruit.split(''))
*/
/*
let fruit=['Banana','Apple','Orange']
console.log(fruit.toString())
console.log(fruit.join(''))
console.log(fruit.pop())
console.log(fruit.shift())
console.log(fruit.push('Banana'))
console.log(fruit.push('Orange'))
console.log(fruit.unshift('Kivi')) //Add element in the head of list
*/

//Map function
/*let fruit=['Banana','Apple','Orange']
function fun(a)
{
    return a.length
}

console.log(fruit.map(fun))
*/

//Filter function

/*let fruit=['Banana','Apple','Orange']
function fun(a)
{
    return a.length>5
}

console.log(fruit.filter(fun))
*/

//Reduce function
/*
//Sum all the number, total start from zero and add number 
let arr=[1,2,3,4,5]
console.log(arr.reduce(fun))
function fun(total, num){
    return total+num
}*/

//Rest operator used for allowing user to give desired paramater we don't need to initilize every paramater we provide to function
/*function fun(...args) {
    console.log(args)
}
fun(1, 2, 3, 4,5)*/

arr1 = [1, 2, 3, 4, 5]
arr2 = [6, 7, 8, 9, 10]
console.log(...arr1, ...arr2)