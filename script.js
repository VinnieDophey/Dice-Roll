console.clear()
function getRandom(min, max) {
    const floatRandom = Math.random()
  
    const difference = max - min
  
    // random between 0 and the difference
    const random = Math.round(difference * floatRandom)
  
    const randomWithinRange = random + min
  
    return randomWithinRange
  }

let P1 = getRandom(0, 5);
let P2 = getRandom(0, 5);
console.log(P1)
let diceFace = ["dice1.webp","dice2.webp","dice3.webp","dice4.webp","dice5.webp","dice6.webp"]

document.getElementById('img1').src=diceFace[P1];

document.getElementById('img2').src=diceFace[P2];

if (P1>P2){
    document.getElementById("winner").innerHTML = "Player 1 has the higher number!"

} else if (P2>P1){
    document.getElementById("winner").innerHTML = "Player 2 has the higher number!"
} else{
    document.getElementById("winner").innerHTML = "It is a tie!"
}