import { Link } from "react-router-dom"; 
import { useEffect } from "react";

import styled from "styled-components";
import picture from "../images/profile-picture.jpg";


const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const ProfilePic = styled.img`
border-radius: 75%;
height: 300px;
width: 300px;
object-fit: cover;
`;

const TechStack = styled.i`
font-size: 75px;
`

const Intro = ({ title }) => {

  useEffect(() => {
    document.title = "William Nam-Amnath | My Portfolio"
}, []);

  return (
    <div className="body-space">
      <br/>
      <br/>
    <Div>
    <ProfilePic src={picture} alt="Picture of William Nam-Amnath"></ProfilePic>
    </Div>
    <h1 className="wd-position" style={{textAlign: "center"}}>{title}</h1>
    <div className="intro-text">
    <h2 style={{textAlign: "center"}}>Hello! My name is William Nam-Amnath. I am a web developer that has applied knowledge in both the front end, as well as the back end.</h2>
    <br/>
    <h2 style={{textAlign: "center"}}>I have experience with the following tech stack:</h2>
    <br/>
    </div>
    <div className="tech-stack">
    <TechStack className="devicon-html5-plain-wordmark"></TechStack>
    <TechStack className="devicon-css3-plain-wordmark"></TechStack>
    <TechStack className="devicon-javascript-plain"></TechStack>
    <TechStack className="devicon-mongodb-plain-wordmark"></TechStack>
    <TechStack className="devicon-react-original-wordmark"></TechStack>    
    <TechStack className="devicon-nodejs-plain-wordmark"></TechStack>
    </div>
    <br/>
    <br/>
    <h2 style={{textAlign: "center"}}>Please visit these sections to learn more about me!</h2>
    <ul className="ul-btn">
    <Link to="/about" style={{color:"black", fontWeight:"bold", textDecoration:"none"}}><button className="website-btn">About Me</button></Link>
    <Link to="/projects" style={{color:"black", fontWeight:"bold", textDecoration:"none"}}><button className="website-btn">My Projects</button></Link>
    <Link to="/contact" style={{color:"black", fontWeight:"bold", textDecoration:"none"}}><button className="website-btn">Contact Me</button></Link>
    </ul>
    </div>
  );
}

export default Intro;
