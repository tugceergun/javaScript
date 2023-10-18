
let show = {
    showName:"How I Met Your Mother",
    characters:[
    {

  	name:"Ted",
  	age: 35,
  	job: ["Architect"]
  },
  {
  	name: "Robin",
  	age: 32,
  	job: ["News Anchor", "Pop-Star"]
  }
  ]
};

//Robin Karakterinin ikinci isine ulasmak icin
alert(show.characters[1].job[1]) //index 0'dan basladigi icin 1 ikinci karakteri verir.