import { Link } from "react-router-dom"; 
import { useEffect } from "react";

import Projects from "../components/Projects";

import styled from "styled-components";
import picture from "../images/profile-picture.jpg";
import email from "../images/134146_mail_email_icon.png";
import github from "../images/211904_social_github_icon.png";
import linkedin from "../images/5296501_linkedin_network_linkedin logo_icon.png";


const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const NameTag = styled.div`
  box-shadow: 0 2px 20px 0 rgba(0,0,0,.2);
  color: black;
  background-color: #efd6ac;
  border-radius: 10px;
  margin: 20px 0;
  padding: 15px 0;
`

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
    <NameTag>
    <h1 className="wd-position" style={{textAlign: "center"}}>{title}</h1>
    <h2 style={{textAlign: "center", textDecoration: "underline"}}>Full-Stack Web Developer</h2> 
    <div className="tech-stack">
    <a href="https://github.com/williamnamamnath"><img src={github} alt="github logo"/></a>
    <a href="https://www.linkedin.com/in/william-nam-amnath/"><img src={linkedin} alt="linkedin logo"/></a>
    <a href="mailto:william.nam-amnath@mail.mcgill.ca"><img src={email} alt="email logo"/></a>
    </div>
    </NameTag>
    <div className="intro-text">
      <h2 style={{textAlign: "center"}}>I am a web developer with experience working in both the frontend and the backend.</h2>
    <br/>
    <h3 style={{textAlign: "center"}}>I have experience with the following tech stack:</h3>
    <br/>
    </div>
    <div className="tech-stack">
    <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-javascript-plain colored"></TechStack>
    <TechStack className="devicon-react-original-wordmark colored"></TechStack>    
    <TechStack className="devicon-mongodb-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-nodejs-plain-wordmark colored"></TechStack>
    </div>
    <br/>
    <br/>
    <br/>
    <ul className="ul-btn">
    <Link to="/about" style={{color:"black", fontWeight:"bold", textDecoration:"none"}}><button className="website-btn">About Me</button></Link>
    <Link to="/contact" style={{color:"black", fontWeight:"bold", textDecoration:"none"}}><button className="website-btn">Contact Me</button></Link>
    </ul>
    <br/>
    <br/>
    <Projects />
    </div>
  );
}

export default Intro;
