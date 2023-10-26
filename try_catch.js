//try anahtar kelimesi kodları çalışma zamanında test etmek için kullanılırken, 
//catch anahtar kelimesi ise çalışma zamanında hata çıkması durumunda bu hataları yakalamak için kullanılır.
/*
try {
  hello();
}catch (err) {
  console.error(err);
  // beklenen çıktı: ReferenceError: hello is not defined
  // hata mesajları tarayıcıya göre değişiklik gösterecektir
}
*/
/* //throw---
throw ifadesi bize özel hatalarımızı oluşturmanıza olanak tanır. Teknik olarak throw ile bir istisna (hata) atılabilir.

throw "Çok büyük";    // Çok büyük hatası at, oluştur
throw 500;            // 500 numarası hatasını at, oluştur

-------
function valid(){
    try {
        if (document.querySelector("#dogumTarihi").value == "") {
            throw 'Doğum tarihini boş geçemezsiniz';
        };
    }catch(err) {
        alert(err);
    }
}
*/

let products;

try{
    products.forEach(item => console.log(item))
    
}catch(error){
    console.log("error:", error)
    //products=[1,2,3] //hata verdikten sonra islem yaptirabiliriz.
    //products.forEach(item => console.log(item));
}

console.log("hata yonetimi duzgun calisiyor.")

let info="kodluyoruz"
console.log(info)