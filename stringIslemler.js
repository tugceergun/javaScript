
let email= "tugceergunn0@gmail.com"
let firstName = "Tugce"
let lastName = "ERGUN"

//String karakter sayisi
console.log(email.length)

//ilk karakteri bulmak
console.log(firstName[0])
console.log(firstName.charAt[0])

//buyuk harf / kucuk harf
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLocaleLowerCase()
console.log(firstName)

//sitring icinde istedigimiz bilgiyi aramak ve yerini bulmak (search)
console.log(email.search("@"))
console.log(email[12])

email.search('olmayan') //olmayan bir seyi aratinca -1 sonucunu verir.

//belli bir yere kadar bilgiyi almak (slice)
console.log(email.slice(0,10)) //0-10 arası karakterleri gosterir.

let DOMAIN =email.slice(email.search("@")+1) //@'ten sonrasini gosterir.
console.log(DOMAIN)

console.log(DOMAIN.indexOf('.'))
console.log(DOMAIN.slice(0,DOMAIN.indexOf('.'))) //gmail yazisini aldık. ('.' ya kadar.)

//bilgiyi degistirmek (replace)
let kodluyoruzEmail= email.replace('gmail.com','kodluyoruz.org')
console.log(kodluyoruzEmail)

//istenilen bilgi var mi? (includes)
email.includes('dkhsd') //false
email.includes('@') //true

//istenilen bilgiye basladi mi? bitti mi? (startsWith, endWith)
console.log(
    email.endsWith('kodluyoruz.org')
)

//ilk harfleri buyuk yapmak
firstName = "FIRST"
lastName = "LAST"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
//ilk harfleri buyuk, geri kalan harfleri kucuk yapti.
console.log(fullName)