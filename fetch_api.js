/*

Fetch Api JavaScript ile bir protokol üzerinden istekte bulunmak ve cevaplarını almak ve ayrıca bu veriler üzerinde işlem yapmak için geliştirilmiş bir arayüzdür. 


const adres = 'https://jsonplaceholder.typicode.com/users';

fetch(adres)
    .then(res => return res.json())
    .then(data => console.log(data));

    İlk olarak istekte bulunacağımız adresi bir değişkene atadık. const adres = 'https://jsonplaceholder.typicode.com/users';
fetch(adres) ile isteğimizi yaptık.
Sonrasında sonuç bir Promise olarak döndüğü için then ile sonucu yakalıyoruz. Gelen bilgiyi bir değişken ile yakalıyoruz. Biz burada res adı verdik. Farklı bir isim de verilebilir.
Gelen bilgi bir promise nesnesidir. Bu nesne içerisinde json bilgisini almak için return res.json(); kodunu kullanıyoruz. Burada json metodu gelen bilgi içerisinde json bilgilerini almak için kullanılır.
Sonrasında yeni bir then ifadesi ile json olarak gelen bilgiyi yakalıyoruz ve bu bilgiyi data değişkenine atıyoruz.
data değişkeni artık bize gelen bilgiyi içeriyor. console.log(data) diyerek konsola gelen veriyi yazdırıyoruz.

*/


//JSON dosyadan veri cekmek:
fetch("data/settings.json").then(  //data klasorundeki settings.json dosyasina ulastik.
    response => response.json() //json bilgisini aldik.
    
).then(responsJson => {
    console.log(responsJson) //bilgiyi yazdirdik.
    console.log(responseJson.userName) //userName ' ulastik ve yazdirdik.
})


let userListDOM = document.querySelector("#userList")

//API uzerinden veri cekmek
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()  //jsonla bilrikte ulastik.
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM =document.createElement('li') //listeye ekleme
        liDOM.innerHTML=item.title //item'ın title bilgisini aldik.
        userListDOM.appendChild(liDOM)
    });
})