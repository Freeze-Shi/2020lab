/*target.addEventListener('attribute',function(e){

})*/

window.addEventListener('DOMContentLoaded',function(){

  console.log("hello")
})


//keypress
var keycontent = document.getElementById("keycontent");
var body = document.querySelector('body');


window.addEventListener('keypress',function(e){


if (e.code = "space") {

  e.preventDefault()
}

console.log(e)

keycontent.innerHTML = keycontent.innerHTML + e.key;

})

//focus

window.addEventListener('focus',function(e){

  console.log("focus")
})

window.addEventListener('blur',function(e){

  console.log("blur")
})













