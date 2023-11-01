function checkAnswer() {
    const correctAnswer = "2";
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

     if (selectedAnswer) {
                if (selectedAnswer.value === correctAnswer) {
                    document.getElementById("result").textContent = "Helyes válasz!";
                } else {
                    document.getElementById("result").textContent = "Rossz válasz. Próbáld újra.";
                }
            } 
            else {
                document.getElementById("result").textContent = "Válassz egy választ!";
             }
             
              }
