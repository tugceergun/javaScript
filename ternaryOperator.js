
/*
Ternary Operator 3 adet parametre alan tek JavaScript operatörüdür. 
If kullanarak kontrol etmek istediğimiz koşullarda ternary operator kullanarak
satır sayısı olarak avantaj sağlayabiliriz.
//kullanimi:
//osul ? dogruysa : yanlissa

**************

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)

console.log(boolean) //undefined yazdirir.

*/

let userName=prompt("Kullanici bilginizi yaziniz")
let info =document.querySelector("#info")

info.innerHTML=`${userName ? userName : "Kullanici bilginiz bulunamadi. :("}`