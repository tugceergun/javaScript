/*
Form seçimi
Input Bilgisini UL içerisine ekle
Form içindeki bilgiyi sıfırla
Eğer forma bilgi girilmez ise kullanıcıyı uyar
*/

let userFormDOM=document.querySelector('#userForm')
userFormDOM.addEventListener('submit',formHandler)

const alertDOM=document.querySelector('#alert')

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username") //username bilgisini aliyoruz.
    const SCORE = document.querySelector("#score") //score bilgisini aliyoruz.

    if(USER_NAME.value && SCORE.value){  //username ve score'un valuse'su varsa calissin.

        addItem(USER_NAME.value, SCORE.value) //gonderdikten sonra sifirladik.
        USER_NAME.value = ""
        SCORE.value = ""

    }else{
        alertDOM.innerHTML = alertFunction( //eksik bilgi girince uyari veriyor.
            "Baslik Bilgisi",
            "Eksik bilgi girdiniz.",
            "danger" //danger,success
            )
    }
    
}

let userListDOM=document.querySelector('#userList')
const addItem = (userName, score) => { //arrow func.
    let liDOM =document.createElement('li')
    liDOM.innerHTML = `
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span> 

    ` //li'ye ekledik. //username bilgisini yaziyor ve scoru'u span icinde yaziyor.
    liDOM.classList.add(  //bu class'ları ekledik lidom'a.
        'list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'
    )
    userListDOM.append(liDOM) //liDOM'u ekledik. (ul'ye li ekledik.)
}