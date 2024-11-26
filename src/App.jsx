import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Bookshelf from './components/Bookshelf';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        console.log("Starting fetch");
        
        const response = await axios.get("https://seussology.info/api/books");
        console.log("API Response:", response.data);
        
        if (Array.isArray(response.data)) {
          setBooks(response.data);
        } else {
          console.error("Unexpected data structure:", response.data);
          setBooks([]); // Set empty array if data doesn't match expectations
        }
      } catch (error) {
        console.error("Error fetching books:", error.message);
        setError(error.message);
        setBooks([]); // Set empty array if fetch fails
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <p>Loading books...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <Bookshelf listOfBooks={books} />
      )}
    </div>
  );
}

export default App;
