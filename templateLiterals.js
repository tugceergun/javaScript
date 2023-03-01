
// ***Template literals***
//Kod okunabilirligini kolaylastırır,
//Stringler icerisinde degisken yazma kolaylıgını saglar,
//Sablon etiketlerini daha az karmasık hale getirir.
//icinde hesaplama yapilabilir.
//`` icinde kullanilir. 

let username ="Tugce"
const DOMAIN = "kodluyoruz.org"

let email =username + "@" + DOMAIN
//string ile birleştirme
console.log("merhaba", username, "sitemize hosgeldin", "mail adresin:", email)

//template literals kullanimi
let info = `
Merhaba ${username} sitemize hosgeldin..
mail adresin: ${email}

mail adresinin uzunlugu: ${email.length}   //(coklu satir kullandik.)
borcunuz: ${(2+3) * 10} TL
gunun saat bilgisi : ${new Date().getHours()}

kisa isminiz: ${username[0]}.
`

console.log(info)