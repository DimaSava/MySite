
var ab= document.getElementById("up");
var vh=window.screen.height;
console.log(vh)
console.log(ab);
console.log(document.deltaY);
var nvh= window.screenTop;
console.log(nvh);
function downUp() {
	
	ab.style.display="block"
};
function noVisible() {
	ab.style.display="none"
};
ab.addEventListener("click", noVisible);

document.addEventListener("mousewheel", downUp);


