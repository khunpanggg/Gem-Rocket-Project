var quiz = [];
quiz[0] = new Question("./img/diamond/talc.png", "Talc", "1", "5", "2");
quiz[1] = new Question("./img/diamond/gypsum.png", "Gypsum", "2", "6", "3");
quiz[2] = new Question("./img/diamond/calsite.png", "Calsite", "3", "1", "8");
quiz[3] = new Question("./img/diamond/fluorite.png", "Fluorite", "4", "10", "6");
quiz[4] = new Question("./img/diamond/apatite.png", "Apatite", "5", "6", "2");
quiz[5] = new Question("./img/diamond/orthoclase.png", "Orthoclase", "6", "1", "8");
quiz[6] = new Question("./img/diamond/quartz.png", "Quartz", "7", "9", "4");
quiz[7] = new Question("./img/diamond/topaz.png", "Topaz", "8", "5", "3");
quiz[8] = new Question("./img/diamond/corundum.png", "Corundum", "9", "3", "7");
quiz[9] = new Question("./img/diamond/diamond.png", "Diamond", "10", "1", "8");

var randomQuestion;
var answers = [];
var currentScore = 0;
var play = true;

document.addEventListener("DOMContentLoaded", function (event) {
  btnProvideQuestion();
});

function Question(question, namequestion, rightAnswer, wrongAnswer1, wrongAnswer2) {
  this.question = question;
  this.namequestion = namequestion;
  this.rightAnswer = rightAnswer;
  this.wrongAnswer1 = wrongAnswer1;
  this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(o) {
  for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
};

function btnProvideQuestion() {

  var randomNumber = Math.floor(Math.random() * quiz.length);
  randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);

  document.getElementById("pic").src = randomQuestion.question
  document.getElementById("name").value = randomQuestion.namequestion
  document.getElementById("name").innerHTML = randomQuestion.namequestion
  document.getElementById("answerA").value = answers[0];
  document.getElementById("answerA").innerHTML = answers[0];
  document.getElementById("answerB").value = answers[1];
  document.getElementById("answerB").innerHTML = answers[1];
  document.getElementById("answerC").value = answers[2];
  document.getElementById("answerC").innerHTML = answers[2];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  checkAnswer(answerA);
}

function answerB_clicked() {
  var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;

  checkAnswer(answerC);
}

function adjustScore(isCorrect) {
  if (isCorrect) {
      currentScore++;
  } else {
      if (currentScore > 0) {
          currentScore--;
      }
  }
  document.getElementById("sco").innerHTML = currentScore;
}

function checkAnswer(answer) {
  if (answer == randomQuestion.rightAnswer) {
      adjustScore(true);
      btnProvideQuestion();
  } else {
      btnProvideQuestion();
      adjustScore(false);
  }
}