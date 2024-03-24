import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <>
        <h1>404</h1>
        <h2>Page not found...</h2>
        <Link to="/">
            <div className="home">Back to Home Page</div>
        </Link>
        </>
    )
}; 

export default ErrorPage;