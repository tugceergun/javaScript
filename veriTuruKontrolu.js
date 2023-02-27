
//veri turunu ogrenmek (typeof)
let price =111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price)
)

console.log(
    "stringPrice: ",
    typeof(stringPrice)
)

console.log(
    "hasPassword: ",
    typeof(hasPassword)
)


typeof("22") === "string" //true

//string bilgileri int ve float'a donusturme (parseInt, parseFloat)
let number1 ="11"
number1 = parseInt(number1);
console.log("number1: ", number1, typeof(number1));

let number2 ="11px"
number2 = parseInt(number2); //11'i alir.
console.log("number2: ", number2, typeof(number2));

let number3 ="11"
number3 = Number(number3); //Number icinde sadece sayi varsa ve baska karakter yoksa cevirebiliyo number'a("11px" e NaN der.)
console.log("number3: ", number3, typeof(number3));

let number4 ="11.4px" 
number4 = parseFloat(number4); //11.4 'u alir.
console.log("number4: ", number4, typeof(number4));

//number veri turunden string'e donusturmek (toString)
let number5=55
number5 = number5.toString()
console.log(number5, typeof(number5))