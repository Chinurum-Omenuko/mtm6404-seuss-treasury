import { useState } from "react";
import { useParams } from 'react-router-dom';
import './BookInfo.css'

export default function BookInfo({ bookToDisplay }) {
    const { id } = useParams();
    const book = bookToDisplay.find((book) => book.id === parseInt(id));

    if (!book) {
        return <p>Book not found!</p>;
    }

    return(
    <div className="book-info">
        <div className="cover">
            <img src={book.image} alt="" />
        </div>

        <div className="content">
            <h3>{book.title}</h3>
            <p>{book.description}</p>
        </div>
    </div>
    );
}