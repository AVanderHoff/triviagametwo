$(document).ready(function(){


var array = [["Who is the only defensive player to ever win the Heisman Trophy?","Charles Woodson","Lavaar Arrington","Lawrence Taylor","Deacon Jones","1"] , 
["The 'Black Sox Scandal' in which eight Chicago White Sox players were accused of intentionally losing games in exhange for money from gamblers, took place in what year ?","1917","1919","1934","1960","2"] ,
["Which club has the most European Cup/UEFA Champions League championships of all time ?","AC Milan","Bayern Munich","Real Madrid","Ajax","3"] ,
["Michael Jordan played college basketball for which school ?","Kentucky","UCLA","Kansas","North Carolina","4"],
["Who was the first major league baseball player to have his number retired ?","Ty Cobb","Lou Gehrig","Cy Young ","Willie Mays","2"] ,
[" Dale Earnhardt was killed while racing at which track ?","Charlotte","Daytona","Watkins Glen ","New Hampshire","2"] ,
["The current world record for the mens 100M dash is ?","9.58","9.79","9.62 ","9.69","1"] ,
["The Tour De France is approximately how long ?","900 miles","3300 miles","2200 miles ","1700 miles","3"],
["Which NHL goaltender has the most career wins ? ","Martin Broduer ","Patrick Roy","Dominik Hasek","Terry Sawchuk","1"] ,
["Brett Favre was originally drafted by which team ? ","Dolphins ","Falcons","Jets","Oilers","2"] ];


var correct = 0 ;
var incorrect = 0 ;
var count = 0 ;
var x = 0;
var number = 26;

$("#main-area").hide();
$("#timer").hide();
$("#reset").hide();

function run(){
      counter = setInterval(increment, 1000);
}

function reset(){
    number = 26;
    x = 0;
}

function stop(){
    clearInterval(counter);
}

function increment(){
      number--
      
      document.getElementById('timer-area').innerHTML = ('<h2>' + (number - 5) + '</h2>')
      
		if (number == 0){
        	stop();
        	reset();
			run();
        	$("#answer-status").html("");
        	$("#correct-answer").html("");
      		if(count== (array.length - 1)){
      			stop()
      			$("#all-done").html("All Done");
      			$("#correct").html("Correct: "+ correct);
      			$("#incorrect").html("Incorrect: "+ incorrect);
      			$("#unanswered").html("Unanswered: "+ (array.length - correct - incorrect))
      			$("#reset").show();
      		}
      		else{count += 1;} 
      	} 
		else if(number >= 5 ){
       		$("#myForm").show();
        	$("#submit").show();
       		$("#timer-area").show();
       	    $("#questionstyle").html(array[count][0]);
  			$("#label1").html(array[count][1]);
  			$("#label2").html(array[count][2]);
  			$("#label3").html(array[count][3]);
  			$("#label4").html(array[count][4]);
      	}
      	else{
			if(x != 0){
      			$("#timer-area").hide();
        		$("#myForm").hide();
        		$("#submit").hide();
			}
      		else{
				$("#timer-area").hide();
        		$("#myForm").hide();
        		$("#submit").hide();
      			$("#answer-status").html("Times up");
	 			$("#correct-answer").html("Correct answer is " + array[count][array[count][5]]);
	 		}
       
		}
} 

$("#start").click(function(){
 	$("#main-area").show();
 	$("#start").hide();
 	$("#timer").show();
 	count= 0 ;
 	number = 26

})

$("#submit").click(function(){

	number= 5;
	$("#myForm").hide();
    $("#submit").hide();
    $("#timer-area").hide();
	x = $('input[name=question]:checked', '#myForm').val()
	if(x == array[count][5]){
		$("#answer-status").html("Correct")
		correct += 1;
	}
	else{
		$("#answer-status").html("Incorrect");
	 	$("#correct-answer").html("Correct answer is " + array[count][array[count][5]]);
	 	incorrect += 1;
	}
});

$("#reset").click(function(){
	count = 0;
	number = 26;
	correct = 0;
	incorrect = 0;
	x = 0;
	$("#main-area").show();
 	$("#start").hide();
 	$("#timer").show();
 	$("#all-done").empty();
    $("#correct").empty();
    $("#incorrect").empty();
    $("#unanswered").empty();
    $("#reset").hide();
	run();
});

run();
  
  
});



