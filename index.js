var randomNumber1 = Math.floor(Math.random()*6 + 1);
const nodeList = document.querySelectorAll("img");

if(randomNumber1 === 1){
  nodeList[0].setAttribute("src","images/dice1.png");
}else if(randomNumber1 === 2){
  nodeList[0].setAttribute("src","images/dice2.png");
}else if(randomNumber1 === 3){
  nodeList[0].setAttribute("src","images/dice3.png");
}else if(randomNumber1 === 4){
  nodeList[0].setAttribute("src","images/dice4.png");
}else if(randomNumber1 === 5){
  nodeList[0].setAttribute("src","images/dice5.png");
}else if(randomNumber1 === 6){
  nodeList[0].setAttribute("src","images/dice6.png");
}else{
  console.log("Error");	
}
var randomNumber2 = Math.floor(Math.random()*6 + 1);
if(randomNumber2 === 1){
  nodeList[1].setAttribute("src","images/dice1.png");
}else if(randomNumber2 === 2){
  nodeList[1].setAttribute("src","images/dice2.png");
}else if(randomNumber2 === 3){
  nodeList[1].setAttribute("src","images/dice3.png");
}else if(randomNumber2 === 4){
  nodeList[1].setAttribute("src","images/dice4.png");
}else if(randomNumber2 === 5){
  nodeList[1].setAttribute("src","images/dice5.png");
}else if(randomNumber2 === 6){
  nodeList[1].setAttribute("src","images/dice6.png");
}else{
  console.log("Error");	
}

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 won";
}else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 won";
}else {
  document.querySelector("h1").innerHTML = "Draw";
}
