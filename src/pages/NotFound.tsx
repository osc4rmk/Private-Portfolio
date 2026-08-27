import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="not-found">
            <h2>404 - Page Not Found</h2>
            <p>The page you're looking for is unavailable or has been moved.</p>
            <Link to="/">Back to Home</Link>
        </section>
    );
}

export default NotFound;