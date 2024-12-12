let count = 0;
const pointElm = document.querySelector('#point');

function checkAnswer(event) {
    const button = event.currentTarget;
    const divQuiz = button.parentElement;

    divQuiz.querySelectorAll('button').forEach((button) => {
        button.disabled = "true";
        button.style.backgroundColor = "grey";
    });

    const result = document.getElementById('result');
    if (button.value === 'correct') {
        result.textContent = "Correct!";
        result.style.color = 'green';
        count++;
        pointElm.innerHTML = count;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

const div = document.querySelector('div');
div.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', checkAnswer);
});