//variables


//strings

var greeting = 'hello!';

greeting += ' how are you doing?'; //overide the previous one

//⬆️=greeting = + ' how are you doing?'; //overide the previous one


//numbers
var week = -4.2;

week = week*2;

week = week/2;

week = week + 2;

week = week * (2 + 6);

week = week - 1;

var weeklyGreeting = greeting + ' ' + week;

var time = 44;

var output = time + "rem"; // 44rem


console.log(greeting, week, weeklyGreeting);/*test*/


//'4' !== 4

//booleans
//if sth's open or not
var open = false;
var closed = true;

console. log(true)

//arrays
/*lists start with 0, the first one is always 0*/
var myArray = ['apples', 'oranges','pears', 4];

console.log(myArray[2]);


//objects
//object are collections
var myObject ={
	code : "fun",
	class : "even more fun",
	list :["string", "another", "string"]
};

console.log(myObject.class);

/* Conditionals*/

var smallNumber = 50;

var name = "Freeze",
	haircolor = "Black";

//== is an approx. equal sign
//=== absolutely equal same type of variable and same value
// > smaller <   >=  <=
// != approx not equal to
// !== (absolute not equal to)
// && and/  can be used to combine condtions 
// ||  or


if(smallNumber == 50 || name !== 'Freeze'){

	if(name === 'Freeze'){
		name = name + ' '+'Shi'
	}

	console.log(name)

}else if(hairColor === 'black'){
	console. log(hairColor)
}

else{
	//defult
	console. log(hairColor, name)

}

/*Dom Selection*/
//document object model

var loft = document.getElementById("tribeca-loft");
console.log(loft)


var firstWindow = document.querySelector("#tribeca-loft .window:nth-of-type(3)");

var allWindows = document. querySelectorAll(".window")

console. log(firstWindow);
console. log(allWindows);

//access html

/*Dom manipulation*/

//add or remove a class

if(loft.classList.contains("night")){
	loft.classlist.remove("night");
}else{
	loft.classList.add("night");
}

//inline styles;
loft.style.borderTop = "solid 1rem pink";

/*css: #tribeca-loft{
	border-top*/

setTimeout(function(){
/*these happen after delay*/

   loft.style.borderTop = "solid 1rem red";

},1000);


 var roofHeight = 1;
//happens every sec

setInterval(function(){

loft.style.borderTop = "solid " + roofHeight + "rem red";
/*need to read solid/ one rem
need the space*/

roofHeight = roofHeight + 1;

},1000);

/*=1s*/


















