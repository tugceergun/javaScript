
// bir sey olana "kadar" dongu yapilabilir. 
/*
let counter=0;

while(counter<10){
    console.log(counter) //0123456789 yazdirir.
    counter++
}
*/

let userName= ""

while(!userName) {
    userName= prompt("Kullanici adini giriniz: ")
    console.log(userName) //kullanici adi girilmedigi surece dongu devam eder.
}


