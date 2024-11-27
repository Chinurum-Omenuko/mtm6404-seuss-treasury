import "./Header.css"
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <nav>
            <ul>
                <p>Seuss Treasury</p>
                
               
                <p><Link to="/">Books</Link></p>
                <p><Link to="/quotes">Quotes</Link></p>
                
    
            </ul>
            <section>
                <h1>Seuss Treasury</h1>
            </section>
        </nav>
    )
}