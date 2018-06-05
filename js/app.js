'use strict';

//Get user's name
var userName = prompt('What should I call you?');
var numberOfQuestions = 0;

//User wants to play?
var validAffirtmativeAnswers = ['yes', 'YES', 'y', 'Y'];
var validNegativeAnswers = ['no', 'NO', 'n', 'N'];
var playTheGameAnswer;
var validUserEntry = false;
var wantsToPlay = false;

//Prompt user until valid entry provided
while(!validUserEntry) {
  playTheGameAnswer = prompt(userName+', do you want to play my guessing game?').toUpperCase();
  console.log('The user entered: '+playTheGameAnswer);
  if(validAffirtmativeAnswers.includes(playTheGameAnswer)) {
    console.log('The user provided a valid affirmative response: '+playTheGameAnswer);
    validUserEntry = true;
    wantsToPlay = true;
  }
  else if(validNegativeAnswers.includes(playTheGameAnswer)) {
    console.log('The user provided a valid negative response: '+playTheGameAnswer);
    validUserEntry = true;
    wantsToPlay = false;
  }
  else {
    console.log('The user provided an invalid response: '+playTheGameAnswer);
    alert('Invalid response!\n'+
          'Enter a valid affirmative answer:'+validAffirtmativeAnswers+'\n'+
          'OR\n'+
          'Enter a valid negative answer:'+validNegativeAnswers);
  }

  //Let's play!
  if(wantsToPlay) {
    var correctGuess = false;
    var playerWantsToTryAgain = true;
    var correctCount = 0;
    console.log('The user provided a valid response and wants to play');
    alert('Ok '+userName+' - ready player one!');

    //First Question: age = 46
    numberOfQuestions++;
    while(!correctGuess && playerWantsToTryAgain) {
      console.log('Begin question 1: my age');
      var myAge = 46;
      var myAgeGuess = parseInt(prompt(userName+', can you guess my age correctly?'));
      console.log('The user entered: '+myAgeGuess);
      if(myAgeGuess === myAge) {
        correctGuess = true;
        correctCount++;
        console.log('The user got it right!');
        alert('You got it!');
      }
      else {
        console.log('The user got it wrong!');
        playerWantsToTryAgain = confirm('That is not it! Try again? (hint - mid 40s)');
        if(!playerWantsToTryAgain) {
          alert('Bye '+userName+'!');
        }
      }
    }
    //Second Question: favorite tv show is  = Rick and Morty
    correctGuess = false;
    playerWantsToTryAgain = true;
    numberOfQuestions++;
    while(!correctGuess && playerWantsToTryAgain) {
      console.log('Begin question 2: my fav tv show');
      var myFavoriteTVShow = 'Rick and Morty';
      var myFavoriteTVShowGuess = prompt(userName+', can you guess my favorite animated tv program?');
      console.log('The user entered: '+myFavoriteTVShowGuess);
      if(myFavoriteTVShowGuess === myFavoriteTVShow) {
        correctGuess = true;
        correctCount++;
        console.log('The user got it right!');
        alert('You got it!');
      }
      else {
        console.log('The user got it wrong!');
        playerWantsToTryAgain = confirm('That is not it! Try again? (hint - one main character is played by Chris Parnell)');
        if(!playerWantsToTryAgain) {
          alert('Bye '+userName+'!');
        }
      }
    }
    //Third Question: favorite tv show episode is  = Pickle Rick
    correctGuess = false;
    playerWantsToTryAgain = true;
    numberOfQuestions++;
    while(!correctGuess && playerWantsToTryAgain) {
      console.log('Begin question 3: my fav episode');
      var myFavoriteEpisode = 'Pickle Rick';
      var myFavoriteEpisodeGuess = prompt(userName+', can you guess my favorite episode in the Rick and Morty animated tv program?');
      console.log('The user entered: '+myFavoriteEpisodeGuess);
      if(myFavoriteEpisodeGuess === myFavoriteEpisode) {
        correctGuess = true;
        correctCount++;
        console.log('The user got it right!');
        alert('You got it!');
      }
      else {
        console.log('The user got it wrong!');
        playerWantsToTryAgain = confirm('That is not it! Try again? (hint - Rick is in a real pickle this time bro!)');
        if(!playerWantsToTryAgain) {
          alert('Bye '+userName+'!');
        }
      }
    }
  }
  //Fourth Question: worst place I ever lived is  = OMAHA
  correctGuess = false;
  playerWantsToTryAgain = true;
  numberOfQuestions++;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question 4: my least favorite place to live');
    var myLeaseFavoriteCity = 'Omaha';
    var myLeaseFavoriteCityGuess = prompt(userName+', can you guess my least favorite place to live?');
    console.log('The user entered: '+myLeaseFavoriteCityGuess);
    if(myLeaseFavoriteCityGuess === myLeaseFavoriteCity) {
      correctGuess = true;
      correctCount++;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else {
      console.log('The user got it wrong!');
      playerWantsToTryAgain = confirm('That is not it! Try again? (hint - it is in Nebraska)');
      if(!playerWantsToTryAgain) {
        alert('Bye '+userName+'!');
      }
    }
  }
  //Fifth Question: best place I ever lived is  = Auckland
  correctGuess = false;
  playerWantsToTryAgain = true;
  numberOfQuestions++;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question 4: my  favorite place to live');
    var myFavoriteCity = 'Auckland';
    var myFavoriteCityGuess = prompt(userName+', can you guess my favorite place to live?');
    console.log('The user entered: '+myFavoriteCityGuess);
    if(myFavoriteCityGuess === myFavoriteCity) {
      correctGuess = true;
      correctCount++;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else {
      console.log('The user got it wrong!');
      playerWantsToTryAgain = confirm('That is not it! Try again? (hint - it is the capital of New Zealand!)');
      if(!playerWantsToTryAgain) {
        alert('Bye '+userName+'!');
      }
    }
  }
  alert('You got '+correctCount+' out of '+numberOfQuestions);
}