var userName = prompt('What should I call you?');
userName = (userName===null ? 'user' : userName);
console.log('User name is: '+userName);
askYesNoQuestion('do you want to play my guessing game?', userName);
askQuestion('can you guess my age correctly?', userName, 47);







function askYesNoQuestion(question, userName){
  var validAffirtmativeAnswers = ['yes', 'YES', 'y', 'Y'];
  var validNegativeAnswers = ['no', 'NO', 'n', 'N'];
  var validUserEntry = false;
  var questionText;

  if(userName===null){questionText=question;

  }else{
    questionText=userName + ', ' + question;
  }


  while(!validUserEntry) {
    var answer = prompt(questionText);
    console.log('The user entered: '+answer);
    if(validAffirtmativeAnswers.includes(answer)) {
      console.log('The user provided a valid affirmative response: '+answer);
      validUserEntry = true;

    }
    else if(validNegativeAnswers.includes(answer)) {
      console.log('The user provided a valid negative response: '+answer);
      validUserEntry = true;

    }
    else {
      console.log('The user provided an invalid response: '+answer);
      alert('Invalid response!\n'+
          'Enter a valid affirmative answer:'+validAffirtmativeAnswers+'\n'+
          'OR\n'+
          'Enter a valid negative answer:'+validNegativeAnswers);
    }
  }
  return validUserEntry;

}


function askQuestion(question, userName, answer){
  var playerWantsToTryAgain=true;
  var correctGuess=false;
  var guess;
  while(!correctGuess && playerWantsToTryAgain) {
    console.log('Begin question ' +question);

    guess = prompt(userName+ ', '+ question);
    guess = (guess === null ? null : parseInt(guess));
    console.log('The user entered: '+guess);
    if(guess !== null && guess === answer) {
      correctGuess = true;
      console.log('The user got it right!');
      alert('You got it!');
    }
    else if(guess !== null) {
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
  return correctGuess;
}