/*
JavaScript dizilerinde filtreleme yaparak istediğimiz elemanları almamız için geliştirilmiş bir metodudur.
 Array üzerinde çalışır ve sonuçta istenen dizi elemanlarından yeni bir array oluşturur.
*/

//5 harften fazla olanlarla yeni array olusturma.
const PRODUCTS = ["Mic","Cable","Speaker","Desktop PC", "Server","Mouse","Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5) //item(her bir ogeye item dedik.) 5 harften buyuk olanlar yeni diziye.
console.log(NEW_PRODUCTS)

//aktif kullanicilari bulma
const USERS = [
    {fullName: "Ayse Sumer", isActive:false},
    {fullName: "Ahmet Ugur", isActive:true},
    {fullName: "Asya Basar", isActive:true},
    {fullName: "Aksel Durmaz", isActive:false},
]

const NEW_USERS = USERS.filter(user => user.isActive === true) //aktif olanlar yeni array'e.
console.log(NEW_USERS)