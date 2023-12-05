const adviceNumberElement = document.querySelector(".advice-id");
const adviceDescriptionElement = document.querySelector(".descricao-advice");
const adviceUpdateButton = document.getElementById('button');

adviceUpdateButton.addEventListener('click', async function () {
    const apiUrl = 'https://api.adviceslip.com/advice';
    const response = await fetch(apiUrl);
        const data = await response.json();
        const adviceNumber = data.slip.id;
        const adviceDescription = data.slip.advice;

        adviceNumberElement.innerText = `ADVICE #${adviceNumber}`;
        adviceDescriptionElement.innerText = `${adviceDescription}`;
});

