
// 1. Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the capital city of France?",
        answer: "paris"
    },
    {
        question: "Which programming language is often used for front-end web development, alongside HTML and CSS?",
        answer: "javascript"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "jupiter"
    },
    {
        question: "What keyword is used to declare a variable with block scope in modern JavaScript?",
        answer: "let"
    },
    {
        question: "What is the result of 2 + 2 * 3 in standard mathematical order?",
        answer: "8"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {
    // 3. Score Initialization
    let score = 0;
    const totalQuestions = quizQuestions.length;

    // Display a welcome message in the console
    console.log("Welcome to the JavaScript Console Quiz!");
    console.log(`You have ${totalQuestions} questions to answer. Good luck!`);

    // 4. Loop Through Questions
    for (let i = 0; i < totalQuestions; i++) {
        const currentQ = quizQuestions[i];

        // 5. Prompt for User Input
        const userInput = prompt(`Question ${i + 1} of ${totalQuestions}:\n${currentQ.question}`);

        // Handle case where user presses Cancel or closes the prompt
        if (userInput === null) {
            alert("Quiz interrupted. Displaying current results.");
            break;
        }

        // 6. Normalize the Input
        const normalizedInput = userInput.toLowerCase().trim();
        const correctAnswer = currentQ.answer.toLowerCase().trim();

        // 7. Check the Answer
        if (normalizedInput === correctAnswer) {
            score++;
            // 8. Provide Immediate Feedback (Correct)
            alert("✅ Correct! Moving to the next question.");
        } else {
            // 8. Provide Immediate Feedback (Incorrect)
            alert(`❌ Incorrect. The correct answer was: "${correctAnswer}".`);
        }
    }

    // 9. Display the Final Score
    const finalMessage = `Quiz Complete! Your final score is: ${score} out of ${totalQuestions}.`;
    
   
    console.log("-----------------------------------------");
    console.log(finalMessage);
    console.log("-----------------------------------------");

    // Display the final score using alert() as required
    alert(finalMessage);
}
runQuiz();

