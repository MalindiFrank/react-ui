import { useState } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import Button from './components/Button';
import { quotes } from './data/quotes';

function App() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const currentQuote = quotes[currentQuoteIndex];

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const handlePreviousQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const handleRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuoteIndex(randomIndex);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Inspirational Quotes</h1>
        <p>Discover wisdom and motivation</p>
      </header>
      
      <main className="app-main">
        <QuoteCard 
          quote={currentQuote.text}
          author={currentQuote.author}
          category={currentQuote.category}
        />
        
        <div className="controls">
          <Button 
            onClick={handlePreviousQuote}
            variant="secondary"
            icon="←"
          >
            Previous
          </Button>
          
          <Button 
            onClick={handleRandomQuote}
            variant="primary"
            icon="🎲"
          >
            Random
          </Button>
          
          <Button 
            onClick={handleNextQuote}
            variant="secondary"
            icon="→"
          >
            Next
          </Button>
        </div>
        
        <div className="quote-counter">
          {currentQuoteIndex + 1} of {quotes.length}
        </div>
      </main>
      
      <footer className="app-footer">
        <p>Made with ❤️ using React TypeScript</p>
      </footer>
    </div>
  );
}

export default App;
