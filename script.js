var w = document.getElementById("bubbleArea");
var btn = document.getElementById("btn");

w.addEventListener("click", function(){

	var newB = document.createElement("div");
	newB.setAttribute("class", "bubble");
	newB.setAttribute("id", "bubble1");
	w.appendChild(newB);
})

btn.addEventListener("click", function(){
	var bubbles = document.getElementsByClassName("bubble");
	while(bubbles.length > 0){
		bubbles[0].parentNode.removeChild(bubbles[0]);
	}
})