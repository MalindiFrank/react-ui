import React from 'react';
import './QuoteCard.css';

interface QuoteCardProps {
  quote: string;
  author: string;
  category: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, author, category }) => {
  const handleShare = () => {
    const shareText = `"${quote}" - ${author}`;
    if (navigator.share) {
      navigator.share({
        title: 'Inspirational Quote',
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert('Quote copied to clipboard!');
    }
  };

  return (
    <div className="quote-card">
      <div className="quote-category">
        {category}
      </div>
      
      <blockquote className="quote-text">
        "{quote}"
      </blockquote>
      
      <cite className="quote-author">
        — {author}
      </cite>
      
      <button 
        className="share-button"
        onClick={handleShare}
        aria-label="Share this quote"
        title="Share this quote"
      >
        📤 Share
      </button>
    </div>
  );
};

export default QuoteCard;
