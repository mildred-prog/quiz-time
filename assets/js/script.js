
document.addEventListener("DOMContentLoaded",function(){
  //Quiz question array
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
  
    // Elements selector
    const welcomeContainer = document.getElementById("welcome-container");
    const gameContainer = document.getElementById("game-container");
    const descriptionContainer = document.getElementById("description-container");
    const resultsContainer = document.getElementById("results-container");
    const btnContainers = document.getElementsByClassName("answers-container");
    const choiceContainer = document.getElementById("choice-container");
    const questionContainer = document.getElementById("question-container");
    const playBtn = document.getElementById("play-btn");
    const roundContainer = document.getElementById("round-container");
    const roundNumber = document.getElementById("round-number");
    const questionElement = document.getElementById("question");
    const nextRoundBtn = document.getElementById("next-round-btn");
    const restartBtn = document.getElementById("restart-quiz");
    const endQuizTitle = document.getElementById("encouragement-title");
    const scoreText = document.getElementById("score-text");
  
    // Quiz state variables
    let shuffledListOfQuestionAndAnswers;
    let currentQuestionIndex = 0;
    let currentRound = 0;
    let correctAnswers = 0;
    let chosenAnswer = "";
    const maxNumOfQuestions = 10;
  
    // Start the quiz when the user clicks the start quiz button
    playBtn.addEventListener("click", startQuiz);
  
    // Add eventlistener for answer buttons 
    Array.from(btnContainers).forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.add("selected"); // Highlights selected answer
        chosenAnswer = btn.textContent; // Saves chosen answer for validation
        nextBtnEnable();
      });
    });
  
    // Next round button
    nextRoundBtn.addEventListener("click", () => {
      checkAnswer();
      currentQuestionIndex++;
      if (currentQuestionIndex < maxNumOfQuestions) { // Limit rounds to 10
        displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
        nextRoundBtn.disabled = true; // Disable button until new answer selected
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
    questionContainer.classList.remove("hide");// Show the question container
    welcomeContainer.classList.add("hide");// Hide welcome screen elements
    descriptionContainer.classList.add("hide");
    playBtn.classList.add("hide");
    nextRoundBtn.classList.remove("hide");
    gameContainer.classList.remove("hide");
    choiceContainer.classList.remove("hide");
    questionElement.style.display = "flex";
    roundContainer.style.display = "flex";
    welcomeContainer.style.marginTop = "0";

  
  shuffleQuestions();
  displayQuestion(shuffledListOfQuestionAndAnswers[currentQuestionIndex]);
    }
  
    // Shuffle questions and limit to the maximum number of questions
    function shuffleQuestions() {
      for (let i = questions.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = questions[i];
        questions[i] = questions[randomIndex];
        questions[randomIndex] = temp;
      }
      shuffledListOfQuestionAndAnswers = questions.slice(0 ,maxNumOfQuestions);
    }
  
    // Display the current question and answers
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
  
    // Check if the chosen answer is correct
    function checkAnswer() {
      let correctAnswer = shuffledListOfQuestionAndAnswers[currentQuestionIndex].correctAnswer;
      if (chosenAnswer === correctAnswer) {
        correctAnswers++;
      }
      nextRoundBtn.disabled = true;
      nextRoundBtn.style.opacity = "0.2";
    }
  
     // Enable the "Next" button when an answer is selected
    function nextBtnEnable() {
      nextRoundBtn.disabled = false;
      nextRoundBtn.style.opacity = "1";
      nextRoundBtn.style.color = "#fff";
      nextRoundBtn.style.border = "0.3rem solid #fff";
      nextRoundBtn.style.cursor = "pointer";
      nextRoundBtn.style.backgroundColor = "#e63010";
  
      for (let i = 0; i < btnContainers.length; i++) {
        btnContainers[i].disabled = true;
      }
    }

    
    // Restart the quiz by resetting variables and showing the welcome screen
    function restartQuiz() {
      currentQuestionIndex = 0;
      currentRound = 0;
      correctAnswers = 0;
  
      resultsContainer.style.display = "none";
      welcomeContainer.classList.remove("hide");
      descriptionContainer.classList.remove("hide");
      playBtn.classList.remove("hide");
      welcomeContainer.style.marginTop = "8rem";

    }

    /**
    * Displays the results container, showing the users score and the restart btn
    */
    function displayResults() {
      gameContainer.classList.add("hide");
      resultsContainer.style.display = "flex";
  
      if (correctAnswers === maxNumOfQuestions) {
        endQuizTitle.textContent = "Arts & literature Genuis!";
      } else if (correctAnswers >= 6) {
        endQuizTitle.textContent = "You're Amazing!";
      } else if (correctAnswers >= 3) {
        endQuizTitle.textContent = "Hey!! Put more Efforts!";
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
  