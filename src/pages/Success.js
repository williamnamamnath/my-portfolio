import { Link } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
color: green;
text-align: center;
font-size: xx-large;
`

const Span = styled.span`
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  font-size: 50px;
`


const Success = () => {
    return (
        <div className="body-space">
        <H1>Message submitted successfully!</H1>
        <h3 style={{textAlign: "center"}}>Thank you for reaching out to me! I look forward to reading your message!</h3>
        <br/>
        <br/>
        <Link to="/" style={{color:"black", textDecoration:"none"}}>
            <div className="home-btn">
            <button style={{justifyContent: "center"}}>
            <Span>Home</Span>
            </button>
            <br/>
            </div>
        </Link>
        </div>
    )
}; 

export default Success;