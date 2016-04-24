$(document).ready(function() {
    //Global variables declarations
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var guess;
    var oldGuess = 0;
    var userGuess;
    var guessList;
    var counter =[];

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
    //convert userguess to integer and generate feedback based on guess
    function checkGuess() {
        var userGuess = parseInt($("#userGuess").val());
        verifyNumber(userGuess);
        guessHistory(userGuess);
        showGuessCounter(counter);
        console.log(userGuess);
        console.log(secretNumber);
        if (userGuess === secretNumber) {
            $('#feedback').text('You nailed it! click New Game to play again');
        } else if (userGuess >= secretNumber - 10 && userGuess <= secretNumber + 10) {
            $('#feedback').text('Very hot!');
        } else if (userGuess >= secretNumber - 20 && userGuess <= secretNumber + 20) {
            $('#feedback').text('Hot!');
        } else if (userGuess >= secretNumber - 30 && userGuess <= secretNumber + 30) {
            $('#feedback').text('warm!');
        } else if (userGuess >= secretNumber - 50 && userGuess <= secretNumber + 50) {
            $('#feedback').text('Cold!');
        } else {
            $('#feedback').text('Ice Cold!');
        }

        function verifyNumber(userGuess) {
            if (userGuess < 0 || userGuess > 100) {
                alert('you must type a number between 1 - 100');
            }
        }
// function to display number of guesses users has entered
        function showGuessCounter(userGuess) {
            $('#count').text(counter);
            counter++;
        }

        //show history of all the guesses
        function guessHistory(userGuess) {
            $('#guessList').append('<li>' + userGuess + '</li>');
        }

    }
    newGame();

    function newGame() {


    }
});
