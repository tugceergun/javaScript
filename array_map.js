
const USERS =["ISMOS","Emir","TugCE","AkSEL"]

//userName icinde orijinal isim kalsin.,
//shortName icinde ilk harf buyuk.
//newName icinde ilk harf buyuk olsun

const NEW_USERS= USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

const USERS_OBJ = USERS.map( item =>
    {
        return{ //return ile {} kullanilmasinin sebebi bunun object oldugunu belirtmek.
            userName:item, shortName: `${item[0]}.`,newName: `${item[0].toUpperCase()}${item.slice(1).
                toLowerCase()}`
        }
    }
    )

    console.log(USERS_OBJ)