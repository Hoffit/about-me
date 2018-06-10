'use strict'; //Enforce tight syntax standards

/**
 * This program is created as a part of a training exercise. It is a guessing
 * game with subject matter related to me. Interacting/quizzing the user
 * through prompts, confirms and alerts.
 */
var log = true; //Turn this on/off to control logging.
var correctCount;
var numberOfQuestions;
const maxGuesses = 10;

//Get the user's name & entice them to play!
var userName = prompt('How shall I address you?');
userName = (userName===null ? 'user' : userName);
if(log) logIt('User name is: '+userName);
var keepPlaying = askYesNoQuestion('Do you want to play my guessing game?', userName);
if(log) logIt('User choice to play the game is: '+keepPlaying);

//Play the game! The user can replay the game an unlimited number of times.
while (keepPlaying) {
  //init game variables
  correctCount = 0;
  numberOfQuestions = 0;

  //Question #1: My age = 46
  numberOfQuestions++;
  if(askQuestion('Can you guess my current age? Enter a number:', [46], userName, '(hint - mid 40s)')) {
    correctCount++;
  }

  //Question #2: My favorite animated tv show = Rick and Morty
  numberOfQuestions++;
  if(askQuestion('Can you guess my favorite animated tv program?', ['Rick and Morty'], userName, '(hint - one main character is played by Chris Parnell)')) {
    correctCount++;
  }

  //Question #3: My favorite episode = Pickle Rick
  numberOfQuestions++;
  if(askQuestion('Can you guess my favorite episode in the Rick and Morty animated tv program?', ['Pickle Rick'], userName, '(hint - Rick is in a real pickle this time bro!)')) {
    correctCount++;
  }

  //Question #4: My least favorite city = Omaha
  numberOfQuestions++;
  if(askQuestion('Can you guess my least favorite place to live?', ['Omaha'], userName, '(hint - it is in Nebraska)')) {
    correctCount++;
  }

  //Question #5: My favorite city = Auckland
  numberOfQuestions++;
  if(askQuestion('Can you guess my favorite place to live?', ['Auckland'], userName, '(hint - it is the capitol city of New Zealand')) {
    correctCount++;
  }

  //Question #6: longest sailing excursion = 8 days
  numberOfQuestions++;
  if(askQuestion('Can you guess my longest sailing excursion (in days)?', [8], userName)) {
    correctCount++;
  }

  //Question #7:Some of my places lived = Auckland
  numberOfQuestions++;
  if(askQuestion('Can you guess a State that I have lived in?', ['Alaska', 'Arizona', 'California', 'Colorado', 'Connecticut', 'Idaho', 'Kentucky', 'Minnesota', 'Montana', 'Nebraska', 'New Jersey', 'New York', 'Ohio', 'Utah', 'Washington'], userName, 'Hint - way too many of them!!!')) {
    correctCount++;
  }

  //Let the user know how they did, and see if they want to try again
  alert('You got '+correctCount+' out of '+numberOfQuestions);
  keepPlaying = confirm(userName+' Play again?');
}

alert('Bye '+userName+'!');
//end program flow

//Function declarations...
/**
 * This function can be used by the caller to ask the user a question that requires
 * an affirmative or negative response.
 *
 * Valid affirmative responses: 'yes', 'YES', 'y', 'Y'
 * Valid negative responses: 'no', 'NO', 'n', 'N'
 */
function askYesNoQuestion(question, userName) {

  var validAffirtmativeAnswers = ['yes', 'YES', 'y', 'Y'];
  var validNegativeAnswers = ['no', 'NO', 'n', 'N'];
  var validUserEntry = false;
  var questionText = (userName===null ? question : userName+', '+question);
  if(log) logIt('The question: '+questionText);

  var answer;
  while(!validUserEntry) {
    answer = prompt(questionText);
    if(log) logIt('The user entered: '+answer);
    if(validAffirtmativeAnswers.includes(answer)) {
      if(log) logIt('The user provided a valid affirmative response: '+answer);
      validUserEntry = true;
      answer = true;
    }
    else if(validNegativeAnswers.includes(answer)) {
      if(log) logIt('The user provided a valid negative response: '+answer);
      validUserEntry = true;
      answer = false;
    }
    else {
      if(log) logIt('The user provided an invalid response: '+answer);
      alert('Invalid response!\n'+
          'Enter a valid affirmative answer:'+validAffirtmativeAnswers+'\n'+
          'OR\n'+
          'Enter a valid negative answer:'+validNegativeAnswers);
    }
  }
  return answer;
}

/**
 * This function can be used by the caller to prompt the user to answer a
 * question, that can have any number of caller specified possible correct
 * answers.
 * The user can keep guessing answers to a question, up to maxGuesses.
 * The user can skip questions.
 * If the question is for a string, function uses the caller specified hint.
 * If the question is for a number, function provides hints (too high/low).
 * Mixed data types are not permitted in the caller correctAnswerArray. All
 * answers must be number xor string.
 *
 * @param {*} question The question to ask the user.
 * @param {*} correctAnswerArray The correct answers to the question.
 * @param {*} userName The name of the user.
 * @param {*} hint A hint for the user, if they get it wrong.
 * @param {*} numberOfAllowedGuesses The number of tries the user gets.
 */
function askQuestion(question, correctAnswerArray, userName, hint, numberOfAllowedGuesses) {
  var playerWantsToTryAgain=true;
  var validUserEntry=false;
  var answer;
  var answerIsNumber = (typeof correctAnswerArray[0] === 'number' ? true : false);
  var lowestValidNumericAnswer;
  var highestValidNumericAnswer;
  if(answerIsNumber) {
    lowestValidNumericAnswer = Math.min(correctAnswerArray);
    highestValidNumericAnswer = Math.max(correctAnswerArray);
  }
  //Deal with situation where caller did not provide a value for numberOfAllowedGuesses
  numberOfAllowedGuesses = (numberOfAllowedGuesses ? numberOfAllowedGuesses : maxGuesses);
  //Control the numberOfAllowedGuess to something reasonable
  numberOfAllowedGuesses = Math.min(maxGuesses, numberOfAllowedGuesses);
  var guessCount = 0;
  if(log) logIt('In function \'askQuestion\'');
  if(log) logIt('The question: '+question);
  if(log) logIt('The user name: '+userName);
  if(log) logIt('The list of correct answers: '+correctAnswerArray);
  if(log) logIt('The answer data type is: '+typeof correctAnswerArray[0]);
  if(log) logIt('Is the answer a number? '+answerIsNumber);
  if(log) logIt('The hint: '+hint);
  if(log) logIt('The number of allowed guesses: '+numberOfAllowedGuesses);
  if(log&&answerIsNumber) logIt('The lowest valid number answer is: '+lowestValidNumericAnswer);
  if(log&&answerIsNumber) logIt('The lowest valid number answer is: '+highestValidNumericAnswer);

  while(!validUserEntry && playerWantsToTryAgain && (guessCount<numberOfAllowedGuesses)) {
    answer = (answerIsNumber ? parseInt(prompt(userName+', '+question)) : prompt(userName+', '+question));
    if(log) logIt('The user entered: '+answer);
    if(answer !== null && correctAnswerArray.includes(answer)) {
      validUserEntry = true;
      if(log) logIt('The user got it right!');
      alert('You got it!');
    }
    else if(answer !== null) {
      guessCount++;
      if(log) logIt('The user got it wrong!');
      if(answerIsNumber) {
        hint = (answer>correctAnswerArray[0]) ? 'Hint - Too high!' : 'Hint - Too low';
      }
      playerWantsToTryAgain = confirm('That is not it! Try again? '+hint);
      if(!playerWantsToTryAgain) {
        if(log) logIt('The user gave up on this question! Moving on.');
      }
    }
    else {
      playerWantsToTryAgain = false;
      if(log) logIt('The user is skipping this question! Moving on.');
    }
  }
  if(guessCount === numberOfAllowedGuesses) {
    alert('You have exceeded the limit of times you can guess the answer for this question! Next question!');
  }
  return validUserEntry;
}

/**
 * Logging function.
 *
 * @param {*} message 
 */
function logIt(message) {
  console.log(message);
}