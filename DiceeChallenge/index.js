var randomSayi1 = Math.floor(Math.random()*6) +1;
console.log(randomSayi1);
var randomGorsel = "images/dice"+ randomSayi1 +".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomGorsel);

var randomSayi2 = Math.floor(Math.random()*6) +1;
console.log(randomSayi2);
var randomGorsel2 = "images/dice"+ randomSayi2 +".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomGorsel2);

if (randomSayi1 > randomSayi2){
    document.querySelector("h1").innerHTML = " Player 1 Wins"
}
else if (randomSayi1 < randomSayi2){
    document.querySelector("h1").innerHTML = " Player 2 Wins"
}
else {document.querySelector("h1").innerHTML = " Draw"}