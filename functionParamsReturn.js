let firstName="lorem";

function greetings(firstName=""){
    console.log(`Merhaba ${firstName}`)
}

console.log(firstName)
greetings() //parametre vermeyince paramtre olan firstName lorem olan firstName i ezdi. Sadece merhaba yazdı.
greetings("parametre")

function greetings2(firstName,lastName){
    let info= `Merhaba ${firstName} ${lastName}`
    return info; //info bilginin dışarıya aktarılması demek.
}

let greetingsInfo=greetings2("Ad","soyad")

console.log(greetingsInfo)

function domIdWriteInfo(id,info){
    let domObject=document.querySelector(`#${id}`)
    domObject.innerHTML=info
}

let htmlInfo=`<span style="color:red">Color REDD</span>`

domIdWriteInfo('greeting',htmlInfo)
domIdWriteInfo('info', greetings2("lorem","ipsum"))