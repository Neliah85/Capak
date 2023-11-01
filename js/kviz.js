function checkAnswer() {
    const correctAnswer = {
        question1:"2",
        question2:"2",
        question3:"2",
        question4:"1",
        question5:"3",
        question6:"2",
        question7:"3",
        question8:"3",
        question9:"3",
        question10:"1"
    };

    const userAnswers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value,
        question4: document.querySelector('input[name="question4"]:checked').value,
        question5: document.querySelector('input[name="question5"]:checked').value,
        question6: document.querySelector('input[name="question6"]:checked').value,
        question7: document.querySelector('input[name="question7"]:checked').value,
        question8: document.querySelector('input[name="question8"]:checked').value,
        question9: document.querySelector('input[name="question9"]:checked').value,
        question10: document.querySelector('input[name="question10"]:checked').value
    };

    if (
        userAnswers.question1 === correctAnswers.question1 &&
        userAnswers.question2 === correctAnswers.question2 &&
        userAnswers.question3 === correctAnswers.question3 &&
        userAnswers.question4 === correctAnswers.question4 &&
        userAnswers.question5 === correctAnswers.question5 &&
        userAnswers.question6 === correctAnswers.question6 &&
        userAnswers.question7 === correctAnswers.question7 &&
        userAnswers.question8 === correctAnswers.question8 &&
        userAnswers.question9 === correctAnswers.question9 &&
        userAnswers.question10 === correctAnswers.question10
    ) {
        document.getElementById("result").textContent = "Gratulálok, minden válasz helyes!";
    } else {
        document.getElementById("result").textContent = "Nem minden válasz helyes, próbáld újra.";
    }
}
              
