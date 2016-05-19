$(document).ready(function () {
    //Global variables declarations
    var secretNumber = Math.floor(Math.random() * 100) + 1;
    var guess;
    var oldGuess = 0;
    var userGuess;
    var guessList;
    var counter = 0;
    //set auto-focus to text box
    var autoFocus = function setAutoFocusToTextBox() {
            document.getElementById('#userGuess').autofocus();
            console.log('atuoFocus');
        }
        // start a new game



    /*--- Display information modal box ---*/
    $(".what").click(function () {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function () {
        $(".overlay").fadeOut(1000);
    });

    $(".new").click(function () {
        newGame();
        autoFocus(); //not working ****using html autofocus as alternative

    });
    $("#guessButton").click(function () {
        var userGuess = $("#userGuess").val();
        checkGuess(userGuess);
        $('#userGuess').val(''); //reset input field when btn's press
    });

    //convert userguess to integer and generate feedback based on guess
    function checkGuess(userGuess) {
        if (isNaN(userGuess)) {
            alert('Come on yooo ENTER a number');
        } else if (userGuess % 1 !== 0) { //avoid decimal num
            alert('Decimal number are NOT allowed');
        } else if (userGuess < 1 || userGuess > 100) {
            alert('you must type a number between 1 - 100');
        } else {

            guessHistory(userGuess);
            counter++;
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
        }
    };





    // function to display number of guesses users has entered
    function showGuessCounter(counter) {
        $('#count').text(counter);
    }

    //show history of all the guesses
    function guessHistory(userGuess) {
        $('#guessList').append('<li>' + userGuess + '</li>');
    }

});
