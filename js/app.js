$(document).ready(function() {
    //Global variables declarations
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var guess;
    var guessCounter;
    var userGuess;
	var pastGuess = userGuess;

    // start a new game
    newGame();

    $('form').submit(function(event) {
        event.preventDefault();

        if (!found) {
            userGuess = $('#userGuess').val();
            console.log('userGuess = ' + userGuess);
            clearText();
            setFocus();
        }
    });

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    $(".new").click(function() {
        newGame();
    });
    $("#guessButton").click(function() {
		checkGuess();

    });

	function checkGuess() {
		var userGuess = parseInt($("#userGuess").val());
		console.log(userGuess);
		console.log(secretNumber);

		if (userGuess === secretNumber){
			$('#feedback').text('You got it!');
		}
		else if (userGuess >= secretNumber -10 && userGuess <= secretNumber +10 ) {
			$('#feedback').text('Very hot!');
		}
		else if (userGuess >= secretNumber -20 && userGuess <= secretNumber +20 ) {
			$('#feedback').text('Hot!');
		}
		else if (userGuess >= secretNumber -30 && userGuess <= secretNumber +30 ) {
			$('#feedback').text('warm!');
		}
		else if (userGuess >= secretNumber -50 && userGuess <= secretNumber +50 ) {
			$('#feedback').text('Cold!');
		}
		else  {
			$('#feedback').text('Ice Cold!');
		}
	}
    newGame();

    function newGame() {


        // switch (checkGuess){
        //     case: [1 >= 10]
        //     var msg1 = "Very Hot";
        //         console.log(msg1);
        //         break;
        //     case [10..20]:
        //         text = "warm";
        //         break;
        //     default:
        //         text = "Looking forward to the Weekend";
        // }

    }
});
