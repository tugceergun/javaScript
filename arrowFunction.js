
function hello(firstName){
    console.log(`Merhaba ${firstName}`)
}

hello("javaScript")

const helloFuncv1=(firstName) => { console.log(`Merhaba ${firstName}`)}
helloFuncv1("helloFuncV1")

const helloFuncV2=firstName => console.log(`Merhaba ${firstName}`) //bir parametre,bir donus
helloFuncV2("helloFuncV2")

const helloFuncV3=(firstName,lastName) => console.log(`Merhaba ${firstName} ${lastName}`) //iki parametre
helloFuncV3("helloFuncV3","Last Name info")

const helloFuncV4=(firstName,lastName) => { //iki parametre acik yazim.
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}

helloFuncV4("helloFuncV4","Other Info")