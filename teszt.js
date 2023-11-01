function checkAnswers() {
    const correctAnswers = {
        question1: "2",
        question2: "2",
        question3: "1"
    };

    const userAnswers = {
        question1: document.querySelector('input[name="question1"]:checked').value,
        question2: document.querySelector('input[name="question2"]:checked').value,
        question3: document.querySelector('input[name="question3"]:checked').value
    };

    if (
        userAnswers.question1 === correctAnswers.question1 &&
        userAnswers.question2 === correctAnswers.question2 &&
        userAnswers.question3 === correctAnswers.question3
    ) {
        document.getElementById("result").textContent = "Gratulálok, minden válasz helyes!";
    } else {
        document.getElementById("result").textContent = "Nem minden válasz helyes, próbáld újra.";
    }
}