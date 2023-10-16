
let items = [10, 20, 30, 40 ]
console.log("items - ilk hali: ", items)

//sona eleman ekleme (push)
items.push(50)
console.log("50 : ", items)

//basa eleman ekleme (unshift)
items.unshift("5 : ", items)

//sondaki ogeyi cikarmak
let lastItem = items.pop() //son elemani lastItem icine ekledik.
console.log("lastItem: ", lastItem, ", items: ", items)

//bastaki ogeyi cikarmak (shift)
firstItem = items.shift() 
console.log("firstItem: ", firstItem, ", items: ",items)

//array icindeki degeri degistirme
items[0] = 5;
console.log(items)

items[length-1] = 1000
console.log(items)

//bos alan olsturur. Dikkat.
items[10000]=1000
console.log(items)