
$(document).ready(function(){




  $("#start").on("click",function(){
    $("#first").css("display","none")
    $("#mouth").css("display","none")
    $("#start").css("display","none")
    
  });

  $("#mouth").on("click",function(){
    $("#mouth").css("top","63vh")
    
  });

  $("#icon1").on("click",function(){
    $("#instruction").css("display","inline")
  });

  $("#instruction").on("click",function(){
    $("#instruction").css("display","none")
  });

var headCounter = 0;
		var len = $('#imgs').find('img').length;
		$('#next').click(function() {
			headCounter++;
			if(headCounter >= len) {
				headCounter = 0;
			}
			$('#imgs').find('img').hide();
			$('#imgs').find('img').eq(headCounter).fadeIn();
		})
		$('#prev').click(function() {
			headCounter--;
			if(headCounter < 0) {
				headCounter = len - 1;
			}
			$('#imgs').find('img').hide();
			$('#imgs').find('img').eq(headCounter).fadeIn();
		})

var llegCounter = 0;
		var lleglen = $('#llegimgs').find('img').length;
		$('#llegnext').click(function() {
			llegCounter++;
			if(llegCounter >= lleglen) {
				llegCounter = 0;
			}
			$('#llegimgs').find('img').hide();
			$('#llegimgs').find('img').eq(llegCounter).fadeIn();
		})
		$('#llegprev').click(function() {
			llegCounter--;
			if(llegCounter < 0) {
				llegCounter = lleglen - 1;
			}
			$('#llegimgs').find('img').hide();
			$('#llegimgs').find('img').eq(llegCounter).fadeIn();
		})


var rlegCounter = 0;
		var rleglen = $('#rlegimgs').find('img').length;
		$('#rlegnext').click(function() {
			rlegCounter++;
			if(rlegCounter >= rleglen) {
				rlegCounter = 0;
			}
			$('#rlegimgs').find('img').hide();
			$('#rlegimgs').find('img').eq(rlegCounter).fadeIn();
		})
		$('#rlegprev').click(function() {
			rlegCounter--;
			if(rlegCounter < 0) {
				rlegCounter = rleglen - 1;
			}
			$('#rlegimgs').find('img').hide();
			$('#rlegimgs').find('img').eq(rlegCounter).fadeIn();
		})


var rhandCounter = 0;
		var rhandlen = $('#rhandimgs').find('img').length;
		$('#rhandnext').click(function() {
			rhandCounter++;
			if( rhandCounter >= rhandlen) {
				rhandCounter = 0;
			}
			$('#rhandimgs').find('img').hide();
			$('#rhandimgs').find('img').eq(rhandCounter).fadeIn();
		})
		$('#rhandprev').click(function() {
			rhandCounter--;
			if( rhandCounter < 0) {
				rhandCounter = rhandlen - 1;
			}
			$('#rhandimgs').find('img').hide();
			$('#rhandimgs').find('img').eq(rhandCounter).fadeIn();
		})


var lhandCounter = 0;
		var lhandlen = $('#lhandimgs').find('img').length;
		$('#lhandnext').click(function() {
			lhandCounter++;
			if(lhandCounter >= lhandlen) {
				lhandCounter = 0;
			}
			$('#lhandimgs').find('img').hide();
			$('#lhandimgs').find('img').eq(lhandCounter).fadeIn();
		})
		$('#lhandprev').click(function() {
			lhandCounter--;
			if(lhandCounter < 0) {
				lhandCounter = lhandlen - 1;
			}
			$('#lhandimgs').find('img').hide();
			$('#lhandimgs').find('img').eq(lhandCounter).fadeIn();
		})



var bodyCounter = 0;
		var bodylen = $('#bodyimgs').find('img').length;
		$('#bodynext').click(function() {
			bodyCounter++;
			if(bodyCounter >= bodylen) {
				bodyCounter = 0;
			}
			$('#bodyimgs').find('img').hide();
			$('#bodyimgs').find('img').eq(bodyCounter).fadeIn();
		})
		$('#bodyprev').click(function() {
			bodyCounter--;
			if(bodyCounter < 0) {
				bodyCounter = bodylen - 1;
			}
			$('#bodyimgs').find('img').hide();
			$('#bodyimgs').find('img').eq(bodyCounter).fadeIn();
		})


})
