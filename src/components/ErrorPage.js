import { Link } from "react-router-dom";

const ErrorPage = () => {

    return (
        <>
        <h1>404</h1>
        <h2>Page not found...</h2>
        <Link to="/" style={{color:"black", textDecoration:"none"}}>
        <div className="home-btn">
        <button className="website-btn">
        <span className="material-symbols-outlined">Home</span>
        </button>
        </div>
        </Link>
        </>
    )
}; 

export default ErrorPage;