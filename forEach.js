
//foreach ile dizideki elemanlar kolaylikla dolasilabilir.
const PRODUCTS = ["Laptop", "Phone", "Speaker","Desktop PC","Server","Mouse","Keyboard"]

PRODUCTS.forEach((product,index,array) => array[index] = product)
PRODUCTS.forEach((product,index,array) => array[index] = `${product.toUpperCase()}`)
console.log(PRODUCTS)

/***for ile liste islemi**
 * 
 const userListDOM= document.querySelector('#userList') //userList dom'una ulastik.

for(index=0; index<users.length;index++) {
    const liDOM=document.createElement('li') //li elementi olusturduk.
    liDOM.innerHTML=users[index] // li elementi icine bilgiyi atadik.
    userListDOM.appendChild[liDOM] // li elementini userlistDOM icine append ettik(ekledik).
}
 */

//forach ile liste islemi index donmeye gerek yok.
const userListDOM= document.querySelector('#userList')

PRODUCTS.forEach(item => {
    const liDOM=document.createElement('li') //lidom olusturduk.
    liDOM.innerHTML=item //lidom icine item bilgisini koyduk.
    userListDOM.append(liDOM)  //userListDOM icine liDOM u ekledik.
}

)