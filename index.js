document.getElementById('quoteButton').addEventListener('click', getQuote);

function getQuote() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerText = `"${data.slip.advice}"`;
            document.getElementById('quoteId').innerText = `ADVICE #${data.slip.id}`;
        })
        .catch(error => console.error('Error:', error));
}
