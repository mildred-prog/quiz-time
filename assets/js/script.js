// Array containing quiz data (questions, options, and correct answers)
const questions = [
    {
        question: "Who wrote the novel 'Pride & Pejudice'?",
        options: [
          "J.D Salinger", 
          "Leo Tolstoy",
          "F. Scott Fitzgerald",
          "Jane Austen",
        ],
        correctAnswer: "Jane Austen",
    },
    {
        question: "Which metallic color is used on the background of 'The Kiss' by Klimt?",
        options: [
          "Red",
          "Yellow",
          "Purple",
          "Gold",
        ],
        correctAnswer: "Gold",
      },
    {
        question: "Which artist painted the 'Mona Lisa'?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet",
        ],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "Who wrote 'Alice Adventure in Wonderland'?",
        options: [
          "George Orwell",
          "Claude Monet",
          "Lewis Carroll",
          "Moby Dick",
        ],
        correctAnswer: "Lewis Carroll",
    },
    {
        question: "In Greek mythology, who was the god of the sea?",
        options: [
            "Poseidon",
            "Cronos",
            "Neptune",
            "Pluto",
        ],
        correctAnswer: "Poseidon",
    },
    {
        question: "In the play 'Romeo & Juliet',who is Juliet's romantic partner?",
        options: [
            "Rio",
            "Samuel",
            "Romeo",
            "David",
        ],
        correctAnswer: "Romeo",
    },
    {
        question: "Which figure appears in the da Vinci picture 'Salvator Mundi'?",
        options: [
            "Jesus",
            "Mary",
            "HolySpirit",
            "Moses",
        ],
        correctAnswer: "Jesus",
    },
    {
        question: " Who is the author of the dystopian novel '1984'?",
        options: [
            "George R.R. Martin",
            "George Orwell",
            "Daren Salinger",
            "Lewis Carroll",
        ],
        correctAnswer: "George Orwell",
    },
    {
        question: " Who wrote the novel 'The Catcher in the Rye'?",
        options: [
            "Stuart Martin",
            "Karl Marx",
            "J.D. Salinger",
            "Paul Carroll",
        ],
        correctAnswer: "J.D. Salinger",
    },    
    {
        question: "How many lines are there in a Shakesperean sonnet?",
        options: [
            "10",
            "12",
            "14",
            "16",
        ],
        correctAnswer: "14",
    },     
];

const welcomeContainer = document.getElementById("welcome-container");
const gameContainer = document.getElementById("game-container");
const resultsContainer = document.getElementById("results-container");
//Grabbing the answer btn and setting the variable
const btnContainers = document.getElementsByClassName("answers-sub-container");
const playBtn = document.getElementById("play-btn");
//Variable for shuffled questions undefined enabling us to define inside the function startQuiz
let shuffledListOfQuestionAndAnswers;
//Grabbing the round number element for setting the round number
const roundNumber = document.getElementById("round-number");
//Grabbing the question <p> element for setting the question
const questionElement = document.getElementById("question");
//Grabbing btn elements for next question and restarting the quiz
const nextRoundBtn = document.getElementById("next-round-btn");
const restartBtn = document.getElementById("restart-quiz");
//Grabbing the results container text variables
const endQuizTitle = document.getElementById("encouragement-title");
let correctAnswers = document.getElementById("correct-answers");
const scoreText = document.getElementById("score-text");

