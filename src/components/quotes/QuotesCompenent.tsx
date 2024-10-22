import { useState, useEffect } from 'react';
import './QuotesComponent.css';

interface Quote {
  content: string;
  author: string;
}

const QuoteComponent = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
/**
 * Asynchronously fetches a quote from the API endpoint 'https://api.api-ninjas.com/v1/quotes'.
 * If successful, updates the quote state with the fetched data.
 * If an error occurs during the fetch, sets the error state.
 */
    const fetchQuote = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://api.api-ninjas.com/v1/quotes');
        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }
        const data: Quote = await response.json();
        setQuote(data);
      } catch {
        setError('Error fetching quote. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="quote-container">
      {quote && (
        <>
          <p className="quote-text">{quote.content}</p>
          <p className="quote-author">{quote.author}</p>
        </>
      )}
    </div>
  );
};

export default QuoteComponent;