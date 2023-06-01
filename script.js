document.addEventListener('DOMContentLoaded', function() {
    fetchQuote();
  });
  
  const newQuoteButton = document.getElementById('new-quote-button');
  newQuoteButton.addEventListener('click', fetchQuote);
  
  function fetchQuote() {
    fetch('https://quotes.rest/qod')
      .then(response => response.json())
      .then(data => displayQuote(data.contents.quotes[0]))
      .catch(error => console.log(error));
  }
  
  function displayQuote(quote) {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = '';
  
    const quoteText = document.createElement('h3');
    quoteText.textContent = `"${quote.quote}"`;
  
    const quoteAuthor = document.createElement('p');
    quoteAuthor.textContent = `- ${quote.author}`;
  
    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(quoteAuthor);
  }
  