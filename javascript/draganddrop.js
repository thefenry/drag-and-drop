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
	leftbox.innerHTML = e.dataTransfer.getData('Text');
};

window.addEventListener("load", doFirst, false);



////////////////////////////////////////
//					Dragable boxes						//
////////////////////////////////////////

function handleDragStart(e) {
  this.style.opacity = '0.4';  // this / e.target is the source node.
}

var cols = document.querySelectorAll('#columns .column');
[].forEach.call(cols, function(cols) {
  col.addEventListener('dragstart', handleDragStart, false);
});