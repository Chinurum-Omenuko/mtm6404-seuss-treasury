
import { Link } from "react-router-dom";
import Book from "./Book.jsx";
import './Bookshelf.css';

export default function Bookshelf({ listOfBooks }) {
    return (
        <main>
            <section id="shelf">
                {listOfBooks?.map((book) => (
                    <Link key={book.id} to={`/book/${book.id}`}>
                        <Book
                            title={book.title}
                            description={book.description}
                            image={book.image}
                        />
                    </Link>
                ))}
            </section>
        </main>
    );
}
                    