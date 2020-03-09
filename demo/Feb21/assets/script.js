console.log("hello");
/*for testing*/

//variables
var myString= "this is a string"

var myBoolean = true;
var myOtherBollean = false;

var myFloat = 1.52465
var myIntergers = 5;// whoe numbers

var myArray = ["apple","orange","pear"]//llist

var myObjects = {
	key:"a value",
	myArray: ["my","array"],
	aNumber:22
};

/*console.log(myObjects,aNumber)*/

var square = document.getElementById("square")

var circles = document.querySelectorAll(".circle");


/*
square.classlist.add("circle")
square.classlest.remove("circle")
*/
square.style.backgroundColor = "rgb(255,0,0)"

square.style.backgroundColor = red

setInterval(function(){

square.style.backgroundColor = "rgb(255,0,0)"


}, 1000)
var red =255;
green = 0;
blue = 0;

setInterval(function(){
	/*square.style.backgroundColor = "rgb(" + red + ", " + green + ", "+ blue + ")";*/
	square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


blue = blue + 20;
red = red - 40;



}, 2000)
/*if(red <= 0){ 
	red = red + 40;
}else{
	red=red - 40;
}

*/

var towardsBlue=blue

if(towardsBlue == true){
	blue = blue + 40;
	red = red - 40;
}else{
	blue = blue - 40;
	red = red + 40;
}


if(blue >= 255 && red <= 0){
	towardsBlue = false;
}else if(red >= 255 && blue <= 0){
	towardsBlue = true;
}


setTimeout(function(){
	console.log(blue)},2000)
/**/


//newsection

var j = 0;
while(j < 10){
	//do something
console.log(j);

j = j + 1;
}

/*i++=i+1*///i--,i++
// for loop

console.log("circles: ", circles.length)
for (var i = 0; i < circles.lenth; i++) {

	circles[i].style.borderWidth = (i+1) + "px";//strings
		circles[i].style.borderWidth = `$((i + 1)*2)px`;
}

/*!!!!!!!!!*/
//changing content innerHTML

var title = document. querySelector("h1")
console.log(title.innerHTML)

title.innerHTML = "Hellooooooo";
title.innerHTML +=" everyone!";

var container = document.getElementById("container")

var r= Math.round(Math.random()+255);
	var g= Math.round(Math.random()+255);
	var b= Math.round(Math.random()+255);
	


var degrees = 0;
setInterval(function(){

	container.insertAdjacentHTML('beforeend',`

	<div class="circle"  dstyle="transform:skew($(degrees)deg);">
	 </div>
`)

 
	
degrees = degrees +5;
}, 1000)




var now= new Date();



// insertAdjacentHTML adds new elements






