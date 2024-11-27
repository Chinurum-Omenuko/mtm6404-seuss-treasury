import React, { useState, useEffect } from 'react';
import './Quotes.css'

export default function Quotes() {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch('https://seussology.info/api/quotes')
          .then(response => response.json())
          .then(data => {setQuotes(data.sort(() => 0.5 - Math.random()).slice(0, 10))})
          .catch(error => console.log(error));
    }, []);

    return (
        <div className="q-container">
           
            {quotes.map((quote) => (
                <div className="quote">
                    <p key={quote.id}>
                        {quote.text}
                    </p>
                    <br />
                    
                    
                    <p>Dr seuss in <i>{quote.book.title}</i></p>
                    
                    

                </div>
            ))}
            
        </div>
    );
}
    