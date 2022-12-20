var randomNumber=Math.floor(Math.random()*6)+1; //generates random no 1-6
var randomDiceImage="dice"+randomNumber+".png";//generate images of dice 1-6
var randomimageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimageSource);
 

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomDiceImage2="dice"+randomNumber2+".png"
var randomimageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimageSource2);

if(randomNumber>randomNumber2)
{
document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(randomNumber<randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 2 Wins 🚩!";
}
else if(randomNumber===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
