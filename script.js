var w = document.getElementById("bubbleArea");
var btn = document.getElementById("btn");

w.addEventListener("click", function(){

	var newB = document.createElement("div");
	newB.setAttribute("class", "bubble");

	var r = Math.floor(Math.random() * 4);
	var bubbleType = "bubble" + r;

	newB.setAttribute("id", bubbleType);
	
	w.appendChild(newB);
})

btn.addEventListener("click", function(){
	var bubbles = document.getElementsByClassName("bubble");
	while(bubbles.length > 0){
		bubbles[0].parentNode.removeChild(bubbles[0]);
	}
})