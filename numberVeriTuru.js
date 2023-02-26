
//number veri turu tanimlama
let price =100
let tax = 0.18
let priceTax = price * tax 
console.log(price, tax , priceTax)

//string sayiyi sayisala cevirme
let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log(Number ("11"))

//arttirma-azaltma

let counter = 320
counter = counter + 1 
counter += 1;
counter ++;
console.log(counter)

counter --;
counter -= 1;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)

//islem onceligi

console.log(2 + 3 * 10)  
console.log( (2 + 3) * 10) 

//mod alma %
//sayi tek mi cift mi
console.log(17 % 2) //0 ise cift, 1 ise tek

//8 urun alan koliye tum urunler sıgar mi?
console.log("Koli kalan urun ornegi: ", 18 % 8 );

//us alma **
console.log(2 ** 4)

//asagi yuvarlama ( Math.floor)
console.log(Math.floor(1.9))

//yukari yuvarlama ( Math.ceil)
console.log(Math.ceil(1.9))

//Yakina yuvarlama (Math.round)
console.log(Math.round(1.7))