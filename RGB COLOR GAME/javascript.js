var squares = document.querySelectorAll(".square");
var numSquares=6;
var color=generateRandomColors(squares.length);

var header=document.querySelector("#header");
var resetButton=document.querySelector("#playAgain");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

var colorDisplay= document.querySelector("#colorDisplay");
var modeBtns=document.querySelectorAll(".mode");

// to display pickedColor
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;


// // Easy 
// easyBtn.addEventListener("click",function() {
	
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares=3;
// 	color=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.innerHTML=pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		if(color[i]) {
// 			squares[i].style.background = color[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	document.querySelector("#tryagain").innerHTML=" ";
// });

// // Hard
// hardBtn.addEventListener("click",function() {

// 	header.style.backgroundColor="#0059b3";
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares=6;
// 	color=generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.innerHTML=pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.background = color[i];
// 		squares[i].style.display = "block";
// 	}
// 	document.querySelector("#tryagain").innerHTML=" ";


// });

// METHOD 2
for(var i=0;i<modeBtns.length;i++){
	modeBtns[i].addEventListener("click", function() {
		modeBtns[0].classList.remove("selected");
		modeBtns[1].classList.remove("selected");
		modeBtns[2].classList.remove("selected");

		this.classList.add("selected");
		if(this.textContent==="EASY")
			numSquares=3;
		else if(this.textContent==="HARD")
			numSquares=6;
		else
			numSquares=9;

		reset();
	});
}

function reset(){
	//generate all new color
	color = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		
		if(color[i]){
			squares[i].style.display="block";
			squares[i].style.background = color[i];

		}
		else
			squares[i].style.display="none";

	}
	header.style.background = "#0059b3";

	document.querySelector("#tryagain").innerHTML=" ";

}


// Reset Button
resetButton.addEventListener("click", function() {
	//generate all new color
	color = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < numSquares; i++) {
		squares[i].style.background = color[i];
	}
	header.style.background = "#0059b3";

	document.querySelector("#tryagain").innerHTML=" ";

});


// main
for(var i=0; i<squares.length; i++){

	squares[i].style.backgroundColor=color[i];
	
	squares[i].addEventListener("click",function(){

		var clickedColor=this.style.backgroundColor;

		if(clickedColor=== pickedColor){
			document.querySelector("#tryagain").innerHTML="CORRECT!";
			changeColor(clickedColor);
			document.querySelector("#playAgain").innerHTML="PLAY AGAIN?";
			header.style.backgroundColor=clickedColor;
			document.querySelector("#playAgain").addEventListener("click",function(){
				document.querySelector("#playAgain").innerHTML="NEW COLORS";

			});

		}

		else{
			
			this.style.backgroundColor="#232323";
			document.querySelector("#tryagain").innerHTML="TRY AGAIN";

		}

	}); 

}

// to generate random Color
function randomColors(){
	
	var r=Math.floor(Math.random() * 256);  
	var g=Math.floor(Math.random() * 256);  
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
// to give random colors to squares
function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColors());
	}
	//return that array
	return arr;
}
// to pick  random color
function pickColor(){
	var random=Math.floor(Math.random() * numSquares);
	return color[random];

}

//to change color when correct
function changeColor(samecolor){

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor= samecolor;
	} 
}



