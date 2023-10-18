/*
Bir obje(object), {…} süslü parantezleri ile, isteğe bağlı olarak bir özellikler(property) listesiyle oluşturulabilir. 
Property bir "anahtar(key): değer(value)" çiftidir ve burada key("property name" de denir) bir string(yazı tipinde), value herhangi bir veri tipi olabilir.
*/

let laptop1 = {
    brand: "Apple",
    model: "Macbook Pro",
    "2kg": 2, //key'in basina sayi yazacaksak tirnak icinde yazabiliriz.
    modelName: "Macbook Pro", //camel case ile isimlendirme.
   // model-name: "Macbook Pro", //hatali
    model_name:"Macbook Pro" //dogru

}

console.log(laptop1)

//Dogru anahtar bilgisi olusturma
console.log(laptop1.brand, laptop1["brand"]) //brand bilgisine bu sekilde ulasilabilir.
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"]) // koseli parantez icinde cift tirnakli olarak yazarak ulasabiliriz.

//Anahtar bilgisine yeni deger eklemek
laptop1.brand="Mac" //artik apple degil mac yazdirir.
laptop1["brand"] = "Mac1" // Mac1 yazdirir.
console.log(laptop1)

//Yeni bilgi eklemek
laptop1.version="10.15.7" //version bilgisi eklendi.
console.log(laptop1)

//Anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys) // iki sekilde de key bilgilerine ulasiriz.
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => { //key bilgilerini foreach ile dolastik.
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

//Deger bilgilerine ulasmak (values) -> Object.values(item)
console.log(
    Object.values(laptop1) //sadece degerlerinin oldugu bir liste tuttuk.
)

let values=Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
} )

//obje icinde sifre, kullanici adi tutabiliriz.
let setting = {
    password: 1234,
    userName: 'user1'
}








