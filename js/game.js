var quiz = [];
quiz[0] = new Question("./img/diamond/talc.png", "Talc (ทัลก์)", "1", "5", "2");
quiz[1] = new Question("./img/diamond/gypsum.png", "Gypsum (ยิปซัม)", "2", "6", "3");
quiz[2] = new Question("./img/diamond/calsite.png", "Calsite (แคลไซต์)", "3", "1", "8");
quiz[3] = new Question("./img/diamond/fluorite.png", "Fluorite (ฟลูออไรด์)", "4", "10", "6");
quiz[4] = new Question("./img/diamond/apatite.png", "Apatite (อะพาไทต์)", "5", "6", "2");
quiz[5] = new Question("./img/diamond/orthoclase.png", "Orthoclase (ออร์โทเคลส)", "6", "1", "8");
quiz[6] = new Question("./img/diamond/quartz.png", "Quartz (ควอตซ์)", "7", "9", "4");
quiz[7] = new Question("./img/diamond/topaz.png", "Topaz (โทแพซ)", "8", "5", "3");
quiz[8] = new Question("./img/diamond/corundum.png", "Corundum (คอรันดัม)", "9", "3", "7");
quiz[9] = new Question("./img/diamond/diamond.png", "Diamond (เพชร)", "10", "1", "8");

// level([
//   {
//     "id": 1,
//     "name": ["Talc"]
//   },
//   {
//     "id": 2,
//     "name": ["Gypsum", "Calcium", "Selenio", "Cadmium", "Sulfur", "Tellurium", "Bismuth"]
//   },
//   {
//     "id": 3,
//     "name": ["Calsite", "Copper", "Arsenic", "Antimony", "Thorium"]
//   },
//   {
//     "id": 4,
//     "name": ["Fluorite", "Iron", "Nickel"]
//   },
//   {
//     "id": 5,
//     "name": ["Apatite", "Cobalt", "Zirconium", "Palladium"]
//   },
//   {
//     "id": 6,
//     "name": ["Orthoclase", "Titanium", "Germanium", "Niobium", "Rhodium"]
//   },
//   {
//     "id": 7,
//     "name": ["Quartz", "Osmium", "Rhenium", "Vanadium"]
//   },
//   {
//     "id": 8,
//     "name": ["Topaz", "Zirconia"]
//   },
//   {
//     "id": 9,
//     "name": ["Corundum", "Tungsten Carbide", "Titanium Carbide"]
//   },
//   {
//     "id": 10,
//     "name": ["Diamond"]
//   }
// ]);

var randomQuestion;
var answers = [];
// var currentScore = 0;
var play = true;


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
  // Enable #x
  $( ".bgame" ).prop( "disabled", false );
  $( "#demo" ).empty();
  var randomNumber = Math.floor(Math.random() * quiz.length);
  randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  document.getElementById("answerA").style.backgroundColor = "rgb(226, 220, 203)";
  document.getElementById("answerB").style.backgroundColor = "rgb(226, 220, 203)";
  document.getElementById("answerC").style.backgroundColor = "rgb(226, 220, 203)";

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
    $(".bgame").click(function() {
      var idName = $(this).attr("id");
      if (isCorrect) {
//         currentScore++;
        document.getElementById("sco").innerHTML = "Correct!";
        document.getElementById(idName).style.backgroundColor = "green";
        // Disable #x
        $( ".bgame" ).prop( "disabled", true );
      } else {
//         if (currentScore > 0) {
            document.getElementById("sco").innerHTML = "Uncorrect!";
            document.getElementById(idName).style.backgroundColor = "red";
            // Disable #x
            $( ".bgame" ).prop( "disabled", true );
            listLevel();
//         }
      }
      // document.getElementById("sco").innerHTML = currentScore;
      });
  }
  function listLevel(){
    $(".bgame").click(function(){
      var val = $(this).val();	
      var hint, i;
      if (val != randomQuestion.rightAnswer) {
            if (val == 1) {
              hint = ["Talc"]
            }
            if (val == 2) {
              hint = ["Gypsum", "Calcium", "Selenio", "Cadmium", "Sulfur", "Tellurium", "Bismuth"]
            }
            if (val == 3) {
              hint = ["Calsite", "Copper", "Arsenic", "Antimony", "Thorium"]
            }
            if (val == 4) {
              hint = ["Fluorite", "Iron", "Nickel"]
            }
            if (val == 5) {
              hint = ["Apatite", "Cobalt", "Zirconium", "Palladium"]
            }
            if (val == 6) {
              hint = ["Orthoclase", "Titanium", "Germanium", "Niobium", "Rhodium"]
            }
            if (val == 7) {
              hint = ["Quartz", "Osmium", "Rhenium", "Vanadium"]
            }
            if (val == 8) {
              hint = ["Topaz", "Zirconia"]
            }
            if (val == 9) {
              hint = ["Corundum", "Tungsten Carbide", "Titanium Carbide"]
            }
            if (val == 10) {
              hint = ["Diamond"]
            }
            hLen = hint.length;
            hLen = hint.length;
            text = "<ul>";
            for (i = 0; i < hLen; i++) {
              text += "<li>" + hint[i] + "</li>";
            }
            text += "</ul>";
            document.getElementById("demo").innerHTML = text;
        }
    });
  }
  function checkAnswer(answer) {
    if (answer == randomQuestion.rightAnswer) {
      adjustScore(true);
      // btnProvideQuestion();
    } else {
      adjustScore(false);
      // btnProvideQuestion();
    }
  }


$(window).load(btnProvideQuestion());
