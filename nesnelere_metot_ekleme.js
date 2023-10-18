
let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1,2,3,4],
    isActive: true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
        //user1.shortName()
        //'B. Uzman' ciktisi verir.
    }
};

console.log(user1)

/* ---------- */

var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	city: 'Istanbul',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};
/*
//arrow function' da this yok. isimlerle ulasilir metot icindeki ozelliklere.
var person = {
	name: 'Rumeysa',
	surname: 'Turgut',
	age: 23,
	introduce: () => {
		return `My name is ${person1.name} ${person1.surname}, I'm ${person1.age} yo.`;
	},
};
*/

// önceden oluşturulmuş bir nesneye metot ekleme

person.myCity = function () {
	console.log(`I live in ${this.city}`);
};
person.myCity();


/****** */
var birey = {
	isim: 'Ali',
	soyisim: 'Veli',
	dogumYili: 1989,
	merhabaDe: (age) => `Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yasindayim`
};
birey.yasHesapla = function () {
	return 2021 - this.dogumYili;
};
console.log(birey.merhabaDe(birey.yasHesapla()));


/*---------- */


function Insan(isim,yas) {
    this.isim = isim;
    this.yas = yas;
  }

  //"new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz.
  const ali = new Insan("ali",21);
console.log(ali.yas);
// 21

ali.yeniOzellik = "Sonradan eklenmiş bir özellik";
console.log(ali.yeniOzellik);
// "Sonradan eklenmiş bir özellik"

//Sınıfa Prototype yardımıyla fonksiyon eklemek :

// Sınıfa prototype yardımıyla fonksiyon eklemek
Insan.prototype.yeniFonksiyon = () => {console.log("Merhaba Kodluyoruz")}
const ayse = new Insan("ayşe",22);
ayse.yeniFonksiyon();
// Output : "Merhaba Kodluyoruz"
//Objeye prototype yardımıyla fonksiyon eklemek :

ayse.__proto__.enYeniFonksiyon = () => {console.log("Tekrar Merhaba Kodluyoruz!")}
ayse.enYeniFonksiyon();
// Output : "Tekrar Merhaba Kodluyoruz!"

