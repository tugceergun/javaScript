

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit',formSubmit)

function formSubmit(event) {
    event.preventDefault() //default islemi engelledik. (default olarak index.html'deki formdaki get methodu oluyordu ve url'de girilen bilgi gozukuyordu simdi gozukmeyecek.)
    console.log("islem gerceklesti")
    let scoreInputDOM=document.querySelector('#score') //id'si score olanı inputu aldık. 
    console.log(scoreInputDOM.value) //id'si score olanı inputun degerini aldık(.value ile).
    localStorage.setItem('score',scoreInputDOM.value) //inputtaki degeri local storage'e kaydettik.
}

/* Bir input oluşturup yanına ekleyecegimiz buton ile butona tikladigimizda degerimiz alt satirda alalim.

<input type="text" id="myInput" value="Buraya yazınız."><button onclick="myFunction()">Tıklayınız</button><p id="myP"></p>

function myFunction(){
        var x = document.getElementById("myInput").value;
  document.getElementById("myP").innerHTML = ("Değerimiz:" + " " + x );
    }  */