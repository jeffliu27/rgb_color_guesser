var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	alert("Clicked reset button")
})


colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//adding click listeners
	squares[i].addEventListener("click", function(){
		//grab color
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";

		}
	})
}


function changeColors(color){
//loop through all squares and change each color to match given color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;

	}
//change h1 to color

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array with num length 
	var arr = [];

	for (var i = 0; i < num; i++) {
		//get rand color and push into array
		arr.push(randomColor());
	}


	return arr;
}

function randomColor(){
	//pick red from 0-255
	//pick green from 0-255
	//pick blue from 0-255

	var r = Math.floor(Math.random()*256)
	var g = Math.floor(Math.random()*256)
	var b = Math.floor(Math.random()*256)

	//"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";
}