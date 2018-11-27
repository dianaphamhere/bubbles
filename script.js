var w = document.getElementById("wrapper");

w.addEventListener("click", function(){

	var newB = document.createElement("div");
	newB.setAttribute("class", "bubble");
	newB.setAttribute("id", "bubble1");
	w.appendChild(newB);
})