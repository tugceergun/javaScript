//GET Methodu: Form verilerini URL üzerinden gönderir. Örneğin; elimizde kullanıcıdan yaşını istediğimiz bir form elementi bulunsun. Kullanıcı yaşını girip gönder butonuna bastığı zaman mail alanına girdiği veri URL üzerinden gönderilir.
//POST Methodu: Verileri arka planda gönderir. Örneğin; kullanıcı mail adresini girip gönder butonuna bastığı zaman veriler kullanıcıya gözükmeyecek şekilde sayfaya gönderilir.
//method = Form datanızın hangi methodla gönderileceğine karar verir. "Get" veya "Post" request olarak. Bu özellik verilmemesi durumunda default olarak "Get" methodu formunuza atanır.
//onChange: Form'un içindeki form elementlerinin(input) value'su her değiştiğinde bu değişen value'yu bizim her defasında elde etmemize olanak sağlayan eventtir.
//onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir.

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault() //default islemi engelledik. (default olarak index.html'deki formdaki get methodu oluyordu ve url'de girilen bilgi gozukuyordu simdi gozukmeyecek.)
    console.log("islem gerceklesti")
}