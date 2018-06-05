'use strict';

var validAffirtmativeAnswers = ['yes', 'YES', 'y', 'Y'];
var validNegativeAnswers = ['no', 'NO', 'n', 'N'];
var playTheGameAnswer;
var validUserEntry = false;
var wantsToPlay = false;

//User wants to play?
while(!validUserEntry) {
  playTheGameAnswer = prompt('Do you want to play my guessing game?').toUpperCase();
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
    console.log('The user provided a valid response and wants to play');
  }
}