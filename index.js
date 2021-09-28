var fruit= [ "mango", "lemon", "blueberry"]
console.log(fruit)
console.table(fruit)

// 2 ACCESS
var ingredients=["eggs", "milk", "butter"]
console.log("milk")
console.log(ingredients[2])
console.table(ingredients)

// 3 ADD AND REMOVE 
var objects=["pen", "book", "lamp"]
objects.unshift("chair")
console.log(objects)
console.table(objects)

objects.pop("lamp")
console.log(objects)
console.table(objects)

objects.push("laptop")
console.log(objects)
console.table(objects)

//4 ORDER
var numbers=[4, 10, 8, 12, 6]
numbers.reverse()
console.table(numbers)
numbers.sort((a,b)=> a-b)
console.table(numbers)

//5 BOUCLE
var total=0
var limit=10
for (var i= 0; i <= limit; i++){
    console.log(i)
    total + i
    console.log(total)

}

//6 REVERSE
var sentence = "Hello Konexio !"
 var inverse = ""
 for (var i = sentence.length - 1; i>= 0; i--) {
    inverse = inverse + sentence[i]
 } 
 console.log(inverse)

//BONUS 
for (var i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5==0){
        console.log(i,"fizzbuzz")
    }
      else if (i % 5 == 0){
          console.log(i, "buzz")
      }
      else if (i % 3 ==0 ){
        console.log(i, "fizz")
    }
  }

//BONUS 2
var total=0
var limit=10
while (total <= limit){
    total++
    console.log(total)

//BONUS 3
var konexio=["vincent","syrine","rebecca","kevin","karimou","chaima","marco","salwa",
"hana","evan","edouard","bilal","alin","ahmed","helene","jeremy","jong","severin"]
