
let settings = {
    userName: "LoremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

//Obje icindeki bilgilerin tek seferde cikarilmasi
//let userName=settings.userName
//console.log(userName)

//rename&destructuring
let {userName: user, password, isActive, ip:serverIP, serverName} = settings

console.log(user, password, isActive, serverIP, serverName)
    console.log(settings)
    console.log(user)

    //obje icindeki bazi bilgilerin cikarilmasi
    let{userName:userName2, password:password2, isActive:isActive2, ...Newsettings} =settings
    //eger degisken ismi daha once tanimlandiysa:
    //let {userName, password, isActive, ...NewSettings}

    console.log(userName2, password2, isActive2, Newsettings)

    //objenin destructuring ile kopyalanmasi

    //Hatali!
    // let settings2 = settings
    // settings2.userName= "Degisen bilgi"
    // console.log("setting", settings)
    // console.log("settings2", settings2)

    //Dogrusu
    let settings2= {...settings}
    settings2.userName= "Degisen bilgi"
    console.log("settings", settings)
    console.log("settings2", settings2)

let score =[100, 200, 300, 400]

let [score1, score2, ...otherScore]= score
console.log(score1, score2, otherScore)

//object kopyalama ile ayni... let settings2 = {...settings}
let copyOfScore = {...score}
console.log(copyOfScore)