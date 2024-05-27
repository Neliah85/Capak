function checkAnswers() {
    const answers = {
        question1: 2,
        question2: 2,
        question3: 2,
        question4: 1,
        question5: 4,
        question6: 2,
        question7: 3,
        question8: 1,
        question9: 3,
        question10: 1
    };

    let score = 0;
    for (let question in answers) {
        const selected = document.querySelector(`input[name="${question}"]:checked`);
        if (selected && parseInt(selected.value) === answers[question]) {
            score++;
        }
    }

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    let resultText = `Eredményed: ${score}/10\n`;

    if (name && email && phone) {
        resultText += `Név: ${name}\nEmail: ${email}\nTelefonszám: ${phone}\n`;
        resultText += "Köszönjük, hogy részt vettél a nyereményjátékon!";
    } else {
        resultText += "Nem adtál meg minden adatot a nyereményjátékhoz.";
    }

    document.getElementById('result').innerText = resultText;
}
