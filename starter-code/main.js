console.log("JS file is connected to HTML! Woo!");
var a, b, c, d;
a = "King";
b = "King";
c = "Queen";
d = "Queen";
console.log(a === b);
console.log(a === d);
console.log(a+" "+b+" " +c+" "+d);
/*
if(a===c){
	alert("You found a match");}
else{
	alert("Try again!");}*/

var gameBoard = document.getElementsByClassName('board')[0];

gameBoard.setAttribute('id',"game-board");

var addCards = function(num){
	var card;
	for(i=0;i<num;i++){
		card = document.createElement('div');
		card.setAttribute('class','card');
		gameBoard.appendChild(card);
		}
	
	}
addCards(4);
