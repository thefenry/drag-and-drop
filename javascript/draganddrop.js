function doFirst() {
	mypic = document.getElementById("legion");
	mypic.addEventListener("dragstart", startDrag, false);
	
	leftbox = document.getElementById("leftbox");
	leftbox.addEventListener("dragenter", function(e){e.preventDefault();},false);
	leftbox.addEventListener("dragover", function(e){e.preventDefault();},false);
	leftbox.addEventListener("drop", dropped,false);

};

function startDrag(e){
	var code = '<img src="images/legion.jpg">';
	e.dataTransfer.setData('Text', code);
};

function dropped(e){
	e.preventDefault();
	console.log(e.dataTransfer.getData('Text'))
	leftbox.innerHTML = e.dataTransfer.getData('Text');
};

window.addEventListener("load", doFirst, false);
