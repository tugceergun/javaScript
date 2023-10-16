
const LOREM_LIST= [
    'lorem','ipsum', 'dolor','amet', 'consectetur', 'adipisicing', 'elit'
]

let counter=0;
/*
for(; counter<10;counter++){
    //console.log(counter) // counteri burda yazdirirsak 012345 yazdirir.
    if(counter===5) {break} 
    console.log(counter) //burdayken 01234 yazdirir. 5'te durur.
}*/

/*
for(;counter<10;counter++){
    if(counter===5) {continue}
    console.log(counter) //5 i yazdirmaz devam eder. 102346789
}  */

const UL_DOM=document.querySelector('#userList')

let index=0;
/*
for(;index<LOREM_LIST.length;index++){
    if(LOREM_LIST[index]== 'dolor') {break} //lorem ipsum yazdirir durur.
    let LI_DOM= document.createElement('li')
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.appendChild(LI_DOM)
} */

for(;index<LOREM_LIST.length;index++){
    if(LOREM_LIST[index]== 'dolor') {continue} //dolor yazdirmaz devam eder.
    let LI_DOM= document.createElement('li')
    LI_DOM.innerHTML=LOREM_LIST[index]
    UL_DOM.appendChild(LI_DOM)
}
/*
//Etiketli break ornegi
//etiketli break ifadesi her ne kadar iç döngü icerisinde olsa dahi
//etiketin basına konuldugu dongu icin etki eder.
//Boylece daha genis caplı bir dögüden cikilmis oldu.
cikis_etiketi: for (var i = 0; i <= 5; i++) {
    for (var j = 0; j <= 50; j++) {
      if (j == 9) {
        break cikis_etiketi;
      }
      console.log("iç döngüden j :" + j); //012345678 yazdirdi.
    }
} 
*/

/*
    //Etiketli Continue Örneği

gec_etiketi: for (var i = 0; i <=5; i++) {
    for (var j = 0; j <= 4; j++) {
      if (j == 2) {
        continue gec_etiketi;
      }
      console.log("iç döngüden j :" + j);  //010101010101 yazdirdi.
    }
   } 
   */
