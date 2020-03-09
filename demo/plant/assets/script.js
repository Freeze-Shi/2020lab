
/*Dom Selection*/
//document object model

var stem = document.getElementById("stem");
console.log(stem)

var leaves = document.getElementById("window");
console.log(window)

var leaf = document.getElementById("leaf");
console.log(leaf)


stem.style.borderTop = "solid 1rem yellowgreen ";

leaves.style.borderTop = "solid rem yellowgreen ";
/*css: #tribeca-loft{
	border-top*/


setTimeout(function(){
/*these happen after delay*/

   stem.style.borderTop = "solid 1rem yellowgreen";
},1000);

 var roofHeight = 1;
//happens every sec

setInterval(function(){

stem.style.borderBottom = "solid " + roofHeight + ".1rem yellowgreen";
/*need to read solid/ one rem
need the space*/

leaves.style.borderTop = "solid " + roofHeight + ".1rem yellowgreen";
/*need to read solid/ one rem
need the space*/

leaves.style.borderRight = "solid " + roofHeight + ".1rem yellowgreen";
/*need to read solid/ one rem
need the space*/

roofHeight = roofHeight + 1;

},1000);


setInterval(function(){
leaf.style.borderTop = "solid " + roofHeight + ".1rem yellowgreen";
/*need to read solid/ one rem
need the space*/

leaf.style.borderLeft = "solid " + roofHeight + ".1rem yellowgreen";


},1000);
/*need to read solid/ one rem
need the space*/
/*=1s*/


















