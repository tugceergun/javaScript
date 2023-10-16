
let items = [1, 2, 3, 4, 5]

//array icinde array
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let malesUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(malesUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) //arrar icinde istedigimiz elemanin lenght bilgisi
console.log(items[0][0]) //Ayse bilgisi

//Array icinden oge ayirmak (splice(pos, item?))
let newItems = items.splice(2,4)

console.log("newItems: ", newItems)
console.log("Items: ", items)

//Array icindeki ogenin index bilgisini bulmak  
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum"))

//Array kopyalamak (slice), [...ES6]
let copyItems = items
console.log("copyItems", copyItems)
console.log("Items: ", items)

let es6Items = [...items]
console.log(es6Items)

let allUsers = [...femaleUsers, ...malesUsers]
console.log(allUsers)

//Array icindeki bilgiyi String'e cevirme (toString, join)
console.log(allUsers.toString())
console.log(allUsers.join(" ---"))


//Istedigimiz Index bilgisine oge eklemek (splice(imndex,0,value))
allUsers.splice(allUsers.length, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length / 2), 0, "Lorem")
console.log(allUsers)
