let greeting =document.querySelector("#greeting")
greeting.addEventListener("click",domClick)

function domClick() {
console.log("tiklandi.")
//console.log(this.innerHTML="tiklandigi icin bilgi degisti.") //this tiklanan nesneyi gösterir. Burda greeting id'li nesneye ulasiyoruz.
this.style.color == "red" ? this.sytle.color = "black" : this.style.color="red" // tiklandiginda kirmiziysa siyah yap degilse kirmizi yap.
}