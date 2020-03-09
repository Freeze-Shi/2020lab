

/*clock*/

var day = document.getElementById("weekday")
var weekDays = ["星期日 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSUN","星期壹 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspMON","星期贰 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTUES","星期叁&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp WEDNES","星期肆 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspTHURS","星期伍 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspFRI","星期陆 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspSATUR"]
var monthDay = document.getElementById("monthday")


function weekDay(dayIndex, dayElement){

  dayElement.innerHTML = weekDays[dayIndex] + "DAY"


}

/*var secondBlack = true;
var thirdBlack = true;


function timeUnit(output,ourHtmlElement){
if(output === 20){
	var toggle = "";

	if(ourHtmlElement.getAttribute("id") === "ccsecond"){
		toggle = secondBlack;
		secondBlack = !secondBlack;
	}

	if(ourHtmlElement.getAttribute("id") === "ccthird"){
		toggle = thirdBlack;
		thirdBlack = !thirdBlack;
	}

	if(toggle){
		ourHtmlElement.style.backgroundColor = "black";
		ourHtmlElement.style.color = "white";
	} else{
		ourHtmlElement.style.backgroundColor = "white";
		ourHtmlElement.style.color = "black";
	}

	ourHtmlElement.innerHTML === "00"

}
}*/

var months    = ['JANUARY','FEBRUARY','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPTEMBER','OCTOBER','NOVEMBER','DECEMBER'];
var now       = new Date();
var thisMonth = months[now.getMonth()];
var month = document.getElementById('month');
console.log(thisMonth);
if(month.textContent !== undefined) {
    month.textContent = thisMonth;
  }
  else {
    month.innerText = thisMonth;
  }



var months    = ['壹月','贰月','叁月','肆月','伍月','陆月','柒月','捌月','玖月','拾月','拾壹月','拾贰月'];
var now       = new Date();
var thisMonth = months[now.getMonth()]; // getMonth method returns the month of the date (0-January :: 11-December)
var output = document.getElementById('output');
console.log(thisMonth);

 if(output.textContent !== undefined) {
    output.textContent = thisMonth;
  }
  else {
    output.innerText = thisMonth;
  }
 


function Clock(){

  var currentDate = new Date;


  weekDay(currentDate.getDay(),day)

monthDay.innerHTML = currentDate.getDate()

}


setInterval(Clock, 1000)


function timeUnit(output, ourHtmlElement){	
	if(output < 10){
		ourHtmlElement.innerHTML = "0" + output;
	} else if(output === 20){
		ourHtmlElement.innerHTML = "00";
	} else{
		ourHtmlElement.innerHTML = output;	
	}	


}

var first = 0;
var second = 0;
var third = 0;
var fourth = 0;
var fifth = 0;

// get html elements
var firstVar = document.getElementById("firstVar")
var secondVar = document.getElementById("secondVar")
var thirdVar = document.getElementById("thirdVar")
var fourthVar = document.getElementById("fourthVar")
var fifthVar = document.getElementById("fifthVar")

/* timer: */
// myRepeater increases by 1 every second:



function myRepeater(){
	timeUnit(first, firstVar);
	first = first + 1;


	if(first === 20){
		first = 0;second
		second = second + 1;

		timeUnit(second, secondVar);


		if(second === 20){
			second = 0;
			third = third + 1;
			timeUnit(third, thirdVar);	
		}

			if(third === 20){
			third = 0;
			fourth = fourth + 1;
			timeUnit(fourth, fourthVar);}

			if(fourth === 20){
			fourth = 0;
			fifth = fifth + 1;
			timeUnit(fifth, fifthVar);	}
			
		
	}

}

setInterval(myRepeater, 18)

var counter = 0;
var secondCounter = 0;
var thirdCounter = 0;
var fourthCounter = 0;
var fifthCounter = 0;

var firstunit = document.getElementById("firstunit")
var secondunit = document.getElementById("secondunit")
var thirdunit = document.getElementById("thirdunit")
var fourthunit = document.getElementById("fourthunit")
var fifthunit = document.getElementById("fifthunit")

function otherRepeater(){
	timeUnit(counter, firstunit);
	counter = counter + 1;

	if(counter === 20){
		counter = 0;
		secondCounter = secondCounter + 1;

		timeUnit(secondCounter, secondunit);


		if(secondCounter === 20){
			secondCounter = 0;
			thirdCounter = thirdCounter + 1;
			timeUnit(thirdCounter, thirdunit);	
		}

			if(thirdCounter === 20){
			thirdCounter = 0;
			fourthCounter = fourthCounter + 1;
			timeUnit(fourthCounter, fourthunit);}

			if(fourthCounter === 20){
			fourthCounter = 0;
			fifthCounter = fifthCounter + 1;
			timeUnit(fifthCounter, fifthunit);	}
			
		
	}

}


setInterval(otherRepeater, 18)










