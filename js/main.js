document.addEventListener('DOMContentLoaded', (event) => {
    // GLOBAL VARIABLES
    const quizContainer = document.getElementById('quiz-wrapper');
    const resultsContainer = document.getElementById('quiz-results');
    const submitButton = document.getElementById('submit-quiz');

    // QUESTIONS FOR THE QUIZ
    const myQuestions = [
        {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
        },
        {
        question: "Which one of these is a JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypeScript",
            c: "npm"
        },
        correctAnswer: "c"
        },
        {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "RequireJS",
            d: "ESLint"
        },
        correctAnswer: "d"
        }
    ];


    // FUNCTION: BUILD THE QUIZ
    function buildQuiz(){
        console.log('up and running!');

        // variable to store the HTML output
        const output = [];
    
        // for each question...
        myQuestions.forEach(
        (currentQuestion, questionNumber) => {
    
            // variable to store the list of possible answers
            const answers = [];
    
            // and for each available answer...
            for(letter in currentQuestion.answers){
    
            // ...add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
                </label>`
            );
            }
    
            // add this question and its answers to the output
            output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }
        );
    
        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    // FUNCTION: SHOW QUIZ RESULTS
    function showResults(){}


    // DISPLAY QUIZ RIGHT AWAY
    buildQuiz();


    // ON SUBMIT, SHOW QUIZ RESULTS
    submitButton.addEventListener('click', showResults);
  })
