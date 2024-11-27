import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Bookshelf from './components/Bookshelf';
import Quotes from './components/Quotes';
import axios from 'axios';
import BookInfo from './components/BookInfo';
import { Route, Routes } from 'react-router-dom';

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
          setBooks([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error.message);
        setError(error.message);
        setBooks([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Bookshelf listOfBooks={books} />} />
        <Route path="/book/:id" element={<BookInfo bookToDisplay={books}/>} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      
  
    </div>
  );
}

export default App;
