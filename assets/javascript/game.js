$( document ).ready(function() {

  
  var getTarget = function() {

   targetScore = Math.floor((Math.random() * 120) + 1);
  
  while (targetScore < 19) {
   targetScore = Math.floor((Math.random() * 120) + 1);
    }
  $("#target").text("Target score: "+targetScore);  
        }



var randomize = function() {
  
  totalScore = 0;
  Redvalue = Math.floor((Math.random() * 12) + 1);
  Bluevalue = Math.floor((Math.random() * 12) + 1);
  Yellowvalue = Math.floor((Math.random() * 12) + 1);
  Greenvalue = Math.floor((Math.random() * 12) + 1);
  }

  getTarget();
  randomize();

  wins = 0;
  losses = 0;

  $("#wins").text("Wins: "+wins);
  $("#losses").text("Losses: "+losses);

 var checkTotal = function(currentScore) {
  if (currentScore == targetScore) {
  $("#winorlose").text("You win!");
  wins++;
  $("#wins").text("Wins: "+wins);
  $("#total").empty();
  getTarget();
  randomize();


 }
 else if (currentScore > targetScore) {
  $("#winorlose").text("You lose");
  losses++;
  $("#losses").text("Losses: "+losses);
  $("#total").empty();
  getTarget();
  randomize();
  }
 }

$("#red").on('click', function(){
    totalScore = totalScore + Redvalue;
    $("#total").text("Total score: "+totalScore);
    checkTotal(totalScore);
    });
$("#blue").on('click', function(){
    totalScore = totalScore + Bluevalue;
    $("#total").text("Total score: "+totalScore);
    checkTotal(totalScore);
    });
 $("#yellow").on('click', function(){
    totalScore = totalScore + Yellowvalue;
    $("#total").text("Total score: "+totalScore);
    checkTotal(totalScore);
    });
 $("#green").on('click', function(){
    totalScore = totalScore + Greenvalue;
    $("#total").text("Total score: "+totalScore);
    checkTotal(totalScore);
    });

 
});