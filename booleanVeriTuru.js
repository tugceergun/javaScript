
let isActive = false //0
isActive = true //1
console.log(isActive)

let userName;
let isUserName = Boolean(userName) //Boolean kullanirken isimlendirme(isUserName).
console.log(isUserName) //false

Boolean("11") //true
Boolean("0") //true
Boolean("") //false

//userNmae var mı ?
userName="user"
console.log("User name: ",Boolean(userName))

//0,-0, null, false, NaN, undefined, ("")
Boolean(0) //false
Boolean(-0) //false
Boolean(-0.1) //true (0 disindakileri true kabul ediyor.İcinde deger varsa true.)
Boolean(0==0) //true (0, 0'a esit mi?)

Boolean(userName.length>0) //true (if yerine kullanildi.)

//farkli ornekler
var z = {2: 'js'} ; 
console.log(Boolean(z)); //true

var y = "" || -2 ||'JavaScript'; 
console.log(Boolean(y)); //true

var x = 10 / 'a';
console.log(Boolean(x)); //false

var t=""&&-2&&'JavaScript';
console.log(Boolean(t)); //false

var w = false ||0;
console.log(Boolean(w)); //false

var a = true;
console.log(Boolean(a)); //true

const b = "0"; 
console.log(Boolean(b)); //true

let s;
console.log( Boolean(s)); //false

