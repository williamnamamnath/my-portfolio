import { Link } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
color: green;
`


const Success = () => {
    return (
        <div className="body-space">
        <H1>Message submitted successfully!</H1>
        <h2>Thank you for reaching out to me! I look forward to reading your message!</h2>
        <br/>
        <br/>
        <Link to="/" style={{color:"black", textDecoration:"none"}}>
            <div className="home-btn">
            <button className="website-btn">
            <span class="material-symbols-outlined">Home</span>
            </button>
            <br/>
            </div>
        </Link>
        </div>
    )
}; 

export default Success;