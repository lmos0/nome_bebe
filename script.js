const correctAnswers = {
    question1: 'redbull',
    question2: 'corinthians',
    question3: 'fefedos',
    question4: 'biscoito',
    question5: 'mf',
    question6: 'setembro',
    question7: 'janeiro',
    question8: 'acdc',
    question9: 'bomba',
    question10: 'redbull'
};
const isCorrect = {};

document.querySelectorAll('form').forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const questionId = form.id;
        const formData = new FormData(form);
        const answer = formData.get(form.querySelector('input[type="radio"]').name);
        
        if (answer === correctAnswers[questionId]) {
            isCorrect[questionId] = true;
            alert('Resposta correta');
            form.querySelector('button[type="submit"]').style.backgroundColor = 'green';
            form.querySelector('button[type="submit"]').disabled = true;
        } else {
            isCorrect[questionId] = false;
            alert('Resposta errada');
            form.querySelector('button[type="submit"]').style.backgroundColor = 'red';
        }
    });
});


function babyname() {
    const allCorrect = Object.keys(correctAnswers).every((key) => isCorrect[key]);
    
    if (allCorrect) {
        alert('Parabéns, você acertou todas as perguntas!');
        displayMessage('Ícaro');
    } else {
        alert('Você errou alguma pergunta, tente novamente');
        displayMessage('Errou, tente novamente!');
    }
}

function displayMessage(message) {
    const existingMessage = document.getElementById('message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageElement = document.createElement('h1');
    messageElement.id = 'message';
    messageElement.innerText = message;
    document.body.appendChild(messageElement);
}
