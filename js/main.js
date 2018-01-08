console.log("Up and Running!")

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} 	else {
	alert("Sorry, try again.");
}
};

var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);	
	console.log("User flipped " + cards[cardId].cardImage);	
	console.log("User flipped " + cards[cardId].suit);	
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch ();
	}
};

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {	
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipCard);
	document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();

//Create a working reset button that resets the cards without generating new ones.


var button = document.getElementById("reset");
var gameBoard = document.getElementById("game-board");
	
button.addEventListener("click", function() {
	while (gameBoard.firstChild) {
		gameBoard.removeChild(gameBoard.firstChild);
	}
	createBoard();
});


/*for (var i = 0; i < cards.length; i++) {
	document.getElementById("game-board").removeChild;
	button.addEventListener("click", createBoard);
*/	

