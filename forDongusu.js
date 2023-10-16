
let users =["Lorem", "Ipsum", "Dolor", ]

/*for ( let index = 0; index<10 ;index++) {
    console.log(index)
} */

/*
let index=0; //index=0 kismini disari aldik ayni sekilde yanit döner.

for(; index<10; index++) {
    console.log(index)
}
*/

const userListDOM= document.querySelector('#userList') //userList dom'una ulastik.

for(index=0; index<users.length;index++) {
    const liDOM=document.createElement('li') //li elementi olusturduk.
    liDOM.innerHTML=users[index] // li elementi icine bilgiyi atadik.
    userListDOM.appendChild[liDOM] // li elementini userlistDOM icine append ettik(ekledik).
}