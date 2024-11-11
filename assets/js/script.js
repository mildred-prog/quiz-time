// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function() {
  //variables
    const questions = [
      {
          question: "Who wrote the novel 'Pride & Pejudice'?",
          options: ["J.D Salinger", "Leo Tolstoy", "F. Scott Fitzgerald", "Jane Austen"],
          correctAnswer: "Jane Austen",
      },
      {
          question: "Which metallic color is used on the background of 'The Kiss' by Klimt?",
          options: ["Red", "Yellow", "Purple", "Gold"],
          correctAnswer: "Gold",
      },
      {
          question: "Which artist painted the 'Mona Lisa'?",
          options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
          correctAnswer: "Leonardo da Vinci",
      },
      {
          question: "Who wrote 'Alice Adventure in Wonderland'?",
          options: ["George Orwell", "Claude Monet", "Lewis Carroll", "Moby Dick"],
          correctAnswer: "Lewis Carroll",
      },
      {
          question: "In Greek mythology, who was the god of the sea?",
          options: ["Poseidon", "Cronos", "Neptune", "Pluto"],
          correctAnswer: "Poseidon",
      },
      {
          question: "In the play 'Romeo & Juliet', who is Juliet's romantic partner?",
          options: ["Rio", "Samuel", "Romeo", "David"],
          correctAnswer: "Romeo",
      },
      {
          question: "Which figure appears in the da Vinci picture 'Salvator Mundi'?",
          options: ["Jesus", "Mary", "HolySpirit", "Moses"],
          correctAnswer: "Jesus",
      },
      {
          question: "Who is the author of the dystopian novel '1984'?",
          options: ["George R.R. Martin", "George Orwell", "Daren Salinger", "Lewis Carroll"],
          correctAnswer: "George Orwell",
      },
      {
          question: "Who wrote the novel 'The Catcher in the Rye'?",
          options: ["Stuart Martin", "Karl Marx", "J.D. Salinger", "Paul Carroll"],
          correctAnswer: "J.D. Salinger",
      },
      {
          question: "How many lines are there in a Shakespearean sonnet?",
          options: ["10", "12", "14", "16"],
          correctAnswer: "14",
      },
    ];
  
    // Elements
    const welcomeContainer = document.getElementById("welcome-container");
    const gameContainer = document.getElementById("game-container");
    const resultsContainer = document.getElementById("results-container");
    const btnContainers = document.getElementsByClassName("answers-container");
    const playBtn = document.getElementById("play-btn");
    const roundNumber = document.getElementById("round-number");
    const questionElement = document.getElementById("question");
    const nextRoundBtn = document.getElementById("next-round-btn");
    const restartBtn = document.getElementById("restart-quiz");
    const endQuizTitle = document.getElementById("encouragement-title");
    const scoreText = document.getElementById("score-text");
  
    let shuffledListOfQuestionAndAnswers;
    let currentQuestionIndex = 0;
    let currentRound = 0;
    let correctAnswers = 0;
    let chosenAnswer = "";
    const maxNumOfQuestions = 10;
  
    // Start the quiz
    playBtn.addEventListener("click", startQuiz);
  
    // Answer buttons
    Array.from(btnContainers).forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.add("selected");
        chosenAnswer = btn.textContent;
        nextBtnEnable();
      });
    });
  
    // Next round button
    nextRoundBtn.addEventListener("click", () => {
      checkAnswer();
      currentQuestionIndex++;
      if (currentQuestionIndex < maxNumOfQuestions) { // Limit rounds to 10
        displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
        nextRoundBtn.disabled = true;
        nextRoundBtn.style.opacity = "0.2";
      } else {
        displayResults(); // Show results when all questions are answered
      }
    });
  
    // Restart quiz button
    restartBtn.addEventListener("click", restartQuiz);
  
    // Functions
  
    function startQuiz() {
  // Hides welcome and results containers, show game container
  welcomeContainer.classList.add("hide");
  resultsContainer.classList.add("hide");
  gameContainer.classList.remove("hide");
  

  /**
 * This function is used for shuffling the questions and answer
 */
  shuffleQuestions();
  displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
    }
  
    function shuffleQuestions() {
      for (let i = questions.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = questions[i];
        questions[i] = questions[randomIndex];
        questions[randomIndex] = temp;
      }
      shuffledListOfQuestionAndAnswers = questions.slice(0 ,maxNumOfQuestions);
    }
  
    function displayQuestion(questionAndAnswer) {
      currentRound++;
      roundNumber.textContent = currentRound;
      questionElement.textContent = questionAndAnswer.question;
  
      for (let i = 0; i < questionAndAnswer.options.length; i++) {
        btnContainers[i].textContent = questionAndAnswer.options[i];
        btnContainers[i].classList.remove("selected");
        btnContainers[i].disabled = false;
      }
    }
  
    function checkAnswer() {
      let correctAnswer = shuffledListOfQuestionAndAnswers[currentQuestionIndex].correctAnswer;
      if (chosenAnswer === correctAnswer) {
        correctAnswers++;
      }
      nextRoundBtn.disabled = true;
      nextRoundBtn.style.opacity = "0.2";
    }
  
    function nextBtnEnable() {
      nextRoundBtn.disabled = false;
      nextRoundBtn.style.opacity = "1";
      nextRoundBtn.style.color = "#fff";
      nextRoundBtn.style.border = "0.3rem solid #fff";
      nextRoundBtn.style.cursor = "pointer";
      nextRoundBtn.style.backgroundColor = "#782420";
  
      for (let i = 0; i < btnContainers.length; i++) {
        btnContainers[i].disabled = true;
      }
    }
  
    function restartQuiz() {
      currentQuestionIndex = 0;
      currentRound = 0;
      correctAnswers = 0;
  
      resultsContainer.classList.add("hide");
      welcomeContainer.classList.remove("hide");
    }
  
    function displayResults() {
      gameContainer.classList.add("hide");
      resultsContainer.classList.remove("hide");
  
      if (correctAnswers === maxNumOfQuestions) {
        endQuizTitle.textContent = "Perfect Score!";
      } else if (correctAnswers >= 6) {
        endQuizTitle.textContent = "Wow, you did great!";
      } else if (correctAnswers >= 3) {
        endQuizTitle.textContent = "You can do better!";
      } else if (correctAnswers <3) {
        endQuizTitle.textContent ="You need to study more!";
      }
      else {
        endQuizTitle.textContent = "Try again!";
      }
  
      scoreText.textContent = `You scored ${correctAnswers} out of ${maxNumOfQuestions}`;
      restartBtn.disabled = false;
    }
  });
  