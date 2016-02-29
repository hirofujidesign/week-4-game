  $( document ).ready(function() {
    var numberToGuess = 37;
    var counter = 0;
    var numbers = [10, 5, 3, 7];
    $('#number').text(numberToGuess);
    for (var i=0; i< numbers.length; i++){
      var imageCrystal = $('<img>');
      
      imageCrystal.attr('data-num', numbers[i]);
      imageCrystal.attr('src', 'assets/images/blue.png');
      imageCrystal.attr('alt', 'crystals');
      imageCrystal.addClass('crystalImage');
      $('#crystals').append(imageCrystal);
    }
    
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);
      if (counter == numberToGuess){
        alert('You won!!!!');
      }else if( counter > numberToGuess){
        alert('You lost!');
      }
    });
  });