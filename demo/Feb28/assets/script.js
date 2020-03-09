var counter = 0;


function timeUnit(output, secondsOrMinutes){

 var seconds = document.getElementById("seconds")

 if(output < 10){
  secondsOrMinutes.innerHTML = "0" + output;
 }else{
  secondsOrMinutes.innerHTML = output;
 }
 console.log("time unit:", output)
}

var counter = 0;
var minuteCounter = 0;
var hourCounter = 0;
var seconds = document.getElementById("seconds")
var minutes = document.getElementById("minutes")
var hours = document.getElementById("hours")

function myRepeater(){
  counter = counter + 1;
   timeUnit(counter,seconds)


  if(counter === 60){
   counter = 0;
   console.log(minuteCounter)
   minuteCounter = minuteCounter + 1;
   timeUnit(minuteCounter, minutes);
  }

  if(minuteCounter === 60){
   minuteCounter = 0;
   hourCounter = hourCounter + 1;
   timeUnit(hourCounter, hours);
  }
}
setInterval(myRepeater, 1000)


/*clock*/
var day = document.getElementById("weekday")
var weekDays = ["sun","mon","tue","wed","thu","fri","sat"]
var monthDay = document.getElementById("monthday")
//




function weekDay(dayIndex, dayElement){

	dayElement.innerHTML = weekDays[dayIndex] + "day"


}


function Clock(){

	var currentDate = new Date;

	timeUnit(currentDate.getHours(),hours)
	timeUnit(currentDate.getMinutes(),minutes)
	timeUnit(currentDate.getSeconds(),seconds)

	weekDay(currentDate.getDay(),day)

	

monthDay.innerHTML = currentDate.getDate()

}


setInterval(Clock, 1000)






















































