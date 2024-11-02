import { Link } from "react-router-dom";
import styled from "styled-components";

const Span = styled.span`
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  font-size: 50px;
`

const ErrorPage = () => {

    return (
        <>
        <h1>404</h1>
        <h2>Page not found...</h2>
        <Link to="/" style={{color:"black", textDecoration:"none"}}>
        <div className="home-btn">
        <button style={{justifyContent: "center"}}>
        <Span>Home</Span>
        </button>
        </div>
        </Link>
        </>
    )
}; 

export default ErrorPage;