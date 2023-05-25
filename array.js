//Diziler nesne(object) tipindedir.

let domain="kodluyoruz"
let isActive=false
let items =[1, 2, 3, isActive, domain] //dizi olusturduk.
console.log(items)

let emptyArray = [] //bos list

//array icindeki oge sayisi
console.log(items.length) // document.querySelector('#info').innerHTML = items.length (ekranda gozukmesi icin)

//ilk eleman
console.log(items[0])

//son eleman
console.log(items[items.length-1])

//Array icindeki ortadaki eleman
console.log(
    items[ Math.floor(items.length / 2) ] //3 yazdirir.
)

//degisken icindeki bilginin array olup olmamasinin kontrolu.
console.log(typeof(items)) //object olarak cikti verir.

console.log(
    Array.isArray(items) //Array constructer'ı icinde isArray
)

//hangileri isArray -> True verir?
console.log("[] : ", Array.isArray( [] ) ) //true
console.log("1 : ", Array.isArray( 1 ) )  //false
console.log("true :", Array.isArray( true ) ) //false