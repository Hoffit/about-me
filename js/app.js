'use strict';

/**
 * This program is created as a part of a training exercise. The program is a guessing game with subject
 * matter related to me. Interacting/quizzing the user through prompts and alerts.
 */
//Get user's name
var userName = prompt('What should I call you?');
userName = (userName===null ? 'user' : userName);
console.log('User name is: '+userName);

//Determine if the user wants to play
//Prompt user until valid entry provided
var validAffirtmativeAnswers = ['yes', 'YES', 'y', 'Y'];
var validNegativeAnswers = ['no', 'NO', 'n', 'N'];
var playTheGameAnswer;
var validUserEntry = false;
var wantsToPlay = true;
while(!validUserEntry && wantsToPlay) {
  playTheGameAnswer = prompt(userName+', do you want to play my guessing game?');
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
}

//Let's play! User can replay game as many times as desired due to playAgain attribute.
var playAgain = true;
//Next two attributes are used to track and share score with user at end.
var numberOfQuestions;
var correctCount;
while(playAgain && wantsToPlay) {
  numberOfQuestions = 0;
  correctCount = 0;
  var correctGuess = false;
  var playerWantsToTryAgain = true;
  alert('Ok '+userName+' - Ready Player One!');

  //First Question: age = 46
  numberOfQuestions++;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question 1: my age');
    var myAge = 46;
    var myAgeGuess = prompt(userName+', can you guess my age correctly?');
    myAgeGuess = (myAgeGuess === null ? null : parseInt(myAgeGuess));
    console.log('The user entered: '+myAgeGuess);
    if(myAgeGuess !== null && myAgeGuess === myAge) {
      correctGuess = true;
      correctCount++;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else if(myAgeGuess !== null) {
      console.log('The user got it wrong!');
      playerWantsToTryAgain = confirm('That is not it! Try again? (hint - mid 40s)');
      if(!playerWantsToTryAgain) {
        console.log('The user gave up on this question! Moving on.');
        alert('Next question!');
      }
    }
    else {
      playerWantsToTryAgain = false;
      console.log('The user is skipping this question! Moving on.');
    }
  }

  //Second Question: favorite tv show is  = Rick and Morty
  numberOfQuestions++;
  correctGuess = false;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question 2: my fav tv show');
    var myFavoriteTVShow = 'Rick and Morty';
    var myFavoriteTVShowGuess = prompt(userName+', can you guess my favorite animated tv program?');
    console.log('The user entered: '+myFavoriteTVShowGuess);
    if(myFavoriteTVShowGuess !== null && myFavoriteTVShowGuess === myFavoriteTVShow) {
      correctGuess = true;
      correctCount++;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else if(myFavoriteTVShowGuess !== null) {
      console.log('The user got it wrong!');
      playerWantsToTryAgain = confirm('That is not it! Try again? (hint - one main character is played by Chris Parnell)');
      if(!playerWantsToTryAgain) {
        console.log('The user gave up on this question! Moving on.');
        alert('Next question!');
      }
    }
    else {
      playerWantsToTryAgain = false;
      console.log('The user is skipping this question! Moving on.');
    }
  }

  //Third Question: favorite tv show episode is  = Pickle Rick
  numberOfQuestions++;
  correctGuess = false;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question 3: my fav episode');
    var myFavoriteEpisode = 'Pickle Rick';
    var myFavoriteEpisodeGuess = prompt(userName+', can you guess my favorite episode in the Rick and Morty animated tv program?');
    console.log('The user entered: '+myFavoriteEpisodeGuess);
    if(myFavoriteEpisodeGuess !== null && myFavoriteEpisodeGuess === myFavoriteEpisode) {
      correctGuess = true;
      correctCount++;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else if(myFavoriteEpisodeGuess !== null) {
      console.log('The user got it wrong!');
      playerWantsToTryAgain = confirm('That is not it! Try again? (hint - Rick is in a real pickle this time bro!)');
      if(!playerWantsToTryAgain) {
        console.log('The user gave up on this question! Moving on.');
        alert('Next question!');
      }
    }
    else {
      playerWantsToTryAgain = false;
      console.log('The user is skipping this question! Moving on.');
    }
  }

  //Fourth Question: worst place I ever lived is  = OMAHA
  numberOfQuestions++;
  correctGuess = false;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question 4: my least favorite place to live');
    var myLeaseFavoriteCity = 'Omaha';
    var myLeaseFavoriteCityGuess = prompt(userName+', can you guess my least favorite place to live?');
    console.log('The user entered: '+myLeaseFavoriteCityGuess);
    if(myLeaseFavoriteCityGuess !== null && myLeaseFavoriteCityGuess === myLeaseFavoriteCity) {
      correctGuess = true;
      correctCount++;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else if(myLeaseFavoriteCityGuess !== null) {
      console.log('The user got it wrong!');
      playerWantsToTryAgain = confirm('That is not it! Try again? (hint - it is in Nebraska)');
      if(!playerWantsToTryAgain) {
        console.log('The user gave up on this question! Moving on.');
        alert('Next question!');
      }
    }
    else {
      playerWantsToTryAgain = false;
      console.log('The user is skipping this question! Moving on.');
    }
  }
  
  //Fifth Question: best place I ever lived is  = Auckland
  numberOfQuestions++;
  correctGuess = false;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question 5: my favorite place to live');
    var myFavoriteCity = 'Auckland';
    var myFavoriteCityGuess = prompt(userName+', can you guess my favorite place to live?');
    console.log('The user entered: '+myFavoriteCityGuess);
    if(myFavoriteCityGuess !== null && myFavoriteCityGuess === myFavoriteCity) {
      correctGuess = true;
      correctCount++;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else if(myFavoriteCityGuess !== null) {
      console.log('The user got it wrong!');
      playerWantsToTryAgain = confirm('That is not it! Try again? (hint - it is the capital of New Zealand!)');
      if(!playerWantsToTryAgain) {
        console.log('The user gave up on this question! Moving on.');
        alert('Next question!');
      }
    }
    else {
      playerWantsToTryAgain = false;
      console.log('The user is skipping this question! Moving on.');
    }
  }

  //Let the user know how they did, and see if they want to try again
  alert('You got '+correctCount+' out of '+numberOfQuestions);
  playAgain = confirm(userName+' Play again?');
}
alert('Bye '+userName+'!');