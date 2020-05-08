

$(document).ready(function(){


  $( function() {
      $( "#menu" ).menu();
    } );
$( function() {
    $( "#dialog" ).dialog();
  } );

$("#close").on("click",function(){
    $("#interface").css("display","none")
    $("#firsttext").css("display","none")
    $("#secondtext").css("display","none")
	$("#thirdtext").css("display","none")
	$("#fourthtext").css("display","none")
	$("#fifthtext").css("display","none")
	$("#sixthtext").css("display","none")
  $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","none")
  });


$("#first").on("click",function(){
	$("#firsttext").css("display","inline")
	$("#secondtext").css("display","none")
	$("#thirdtext").css("display","none")
	$("#fourthtext").css("display","none")
	$("#fifhttext").css("display","none")
	$("#sixthtext").css("display","none")
   $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","none")

    $("#interface").css("display","inline")

    $("#firstimg").css("display","inline")
    $("#secondimg").css("display","none")
    $("#thirdimg").css("display","none")
    $("#fourthimg").css("display","none")
    $("#fifthimg").css("display","none")
    $("#sixthimg").css("display","none")
    $("#seventhimg").css("display","none")
    $("#eighthimg").css("display","none")
  });

$("#second").on("click",function(){
	$("#firsttext").css("display","none")
	$("#secondtext").css("display","inline")
	$("#thirdtext").css("display","none")
	$("#fourthtext").css("display","none")
	$("#fifhttext").css("display","none")
	$("#sixthtext").css("display","none")
  $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","none")

    $("#interface").css("display","inline")
    $("#secondimg").css("display","inline")
    $("#firstimg").css("display","none")
    $("#thirdimg").css("display","none")
    $("#fourthimg").css("display","none")
    $("#fifthimg").css("display","none")
    $("#sixthimg").css("display","none")
    $("#seventhimg").css("display","none")
    $("#eighthimg").css("display","none")
  });

$("#third").on("click",function(){
	$("#firsttext").css("display","none")
	$("#secondtext").css("display","none")
	$("#thirdtext").css("display","inline")
	$("#fourthtext").css("display","none")
	$("#fifhttext").css("display","none")
	$("#sixthtext").css("display","none")
  $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","none")

    $("#interface").css("display","inline")
    $("#thirdimg").css("display","inline")
    $("#firstimg").css("display","none")
    $("#secondimg").css("display","none")
    $("#fourthimg").css("display","none")
    $("#fifthimg").css("display","none")
    $("#sixthimg").css("display","none")
    $("#seventhimg").css("display","none")
    $("#eighthimg").css("display","none")
  });

$("#fourth").on("click",function(){
	$("#firsttext").css("display","none")
	$("#secondtext").css("display","none")
	$("#thirdtext").css("display","none")
	$("#fourthtext").css("display","inline")
	$("#fifhttext").css("display","none")
	$("#sixthtext").css("display","none")
  $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","none")

    $("#interface").css("display","inline")
    $("#fourthimg").css("display","inline")
     $("#firstimg").css("display","none")
    $("#secondimg").css("display","none")
     $("#thirdimg").css("display","none")
    $("#fifthimg").css("display","none")
    $("#sixthimg").css("display","none")
    $("#seventhimg").css("display","none")
    $("#eighthimg").css("display","none")
  });

$("#fifth").on("click",function(){
	$("#firsttext").css("display","none")
	$("#secondtext").css("display","none")
	$("#thirdtext").css("display","none")
	$("#fourthtext").css("display","none")
	$("#fifthtext").css("display","inline")
	$("#sixthtext").css("display","none")
  $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","none")

    $("#interface").css("display","inline")
    $("#fifthimg").css("display","inline")
     $("#firstimg").css("display","none")
    $("#secondimg").css("display","none")
     $("#thirdimg").css("display","none")
    $("#fourthimg").css("display","none")
    $("#sixthimg").css("display","none")
    $("#seventhimg").css("display","none")
    $("#eighthimg").css("display","none")
  });

$("#sixth").on("click",function(){
	$("#firsttext").css("display","none")
	$("#secondtext").css("display","none")
	$("#thirdtext").css("display","none")
	$("#fourthtext").css("display","none")
	$("#fifhttext").css("display","none")
	$("#sixthtext").css("display","inline")
  $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","none")

    $("#interface").css("display","inline")
    $("#sixthimg").css("display","inline")
     $("#firstimg").css("display","none")
    $("#secondimg").css("display","none")
     $("#thirdimg").css("display","none")
    $("#fourthimg").css("display","none")
    $("#fifthimg").css("display","none")
    $("#seventhimg").css("display","none")
    $("#eighthimg").css("display","none")

  });

  $("#seventh").on("click",function(){
  $("#firsttext").css("display","none")
  $("#secondtext").css("display","none")
  $("#thirdtext").css("display","none")
  $("#fourthtext").css("display","none")
  $("#fifhttext").css("display","none")
  $("#sixthtext").css("display","none")
  $("#seventhtext").css("display","inline")
  $("#eighthtext").css("display","none")
  
    $("#interface").css("display","inline")
    $("#sixthimg").css("display","none")
     $("#firstimg").css("display","none")
    $("#secondimg").css("display","none")
     $("#thirdimg").css("display","none")
    $("#fourthimg").css("display","none")
    $("#fifthimg").css("display","none")
    $("#seventhimg").css("display","inline")
    $("#eighthimg").css("display","none")

  });

  $("#eighth").on("click",function(){
  $("#firsttext").css("display","none")
  $("#secondtext").css("display","none")
  $("#thirdtext").css("display","none")
  $("#fourthtext").css("display","none")
  $("#fifhttext").css("display","none")
  $("#sixthtext").css("display","none")
  $("#seventhtext").css("display","none")
  $("#eighthtext").css("display","inline")
  
    $("#interface").css("display","inline")
     $("#firstimg").css("display","none")
    $("#secondimg").css("display","none")
     $("#thirdimg").css("display","none")
    $("#fourthimg").css("display","none")
    $("#fifthimg").css("display","none")
    $("#sixthimg").css("display","none")
    $("#seventhimg").css("display","none")
    $("#eighthimg").css("display","inline")

  });
  

 /* $("#start").on("click",function(){
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

  */


})