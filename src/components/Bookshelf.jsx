import Book from "./Book.jsx";
import './Bookshelf.css';

export default function Bookshelf({ listOfBooks }) {
    return (
        <main>
            <section id="shelf">
                {listOfBooks?.map((book) => (
                    <Book
                        key={book.id}
                        title={book.title}
                        description={book.description}
                        image={book.image}
                    />
                ))}
            </section>
        </main>
    );
}
