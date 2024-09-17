import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../GlobalStyles";

import Projects from "./Projects";

import styled from "styled-components";
import picture from "../images/profile-picture.jpg";
import email from "../images/134146_mail_email_icon.png";
import github from "../images/211904_social_github_icon.png";
import linkedin from "../images/5296501_linkedin_network_linkedin logo_icon.png";


const Div = styled.div`
  display:inline-block;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;
`

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const NameCard = styled.div`
display:inline-block;
box-shadow: 0 2px 20px 0 #efd6ac;
color: black;
background-color: #efd6ac;
border-radius: 30px;
margin: 20px;
padding: 15px;
`

const MoreInfo = styled.div`
display:inline-block;
box-shadow: 0 2px 20px 0 #efd6ac;
color: black;
background-color: #efd6ac;
border-radius: 30px;
margin: 20px;
padding: 15px;
transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
  cursor: pointer;
}
`

const Picture = styled.img`
  box-shadow: 0 2px 20px 0 #efd6ac;
  border-radius: 10px;
  height: 360px;
  width: 360px;
  object-fit: cover;
`

const TechStack = styled.i`
font-size: 75px;
`

const Intro = ({ title }) => {

  useEffect(() => {
    document.title = "William Nam-Amnath | My Portfolio"
}, []);

const navigate = useNavigate();

const handleClick = () => {
  navigate('/about'); 
};

  return (
    <div className="body-space">
      <br/>
      <br/>

      <ParentDiv>    
    <NameCard>
      <h1 className="wd-position" style={{textAlign: "center", fontSize: "60px", fontWeight: "600"}}>{title}</h1>
      <h2 style={{textAlign: "center"}}>▶ Full-Stack Web Developer ◀</h2>
      <h3>📍 Montreal, QC</h3> 
      <div className="socials">
      <a className="github" href="https://github.com/williamnamamnath"><img src={github} alt="github logo"/></a>
      <a className="linkedin" href="https://www.linkedin.com/in/william-nam-amnath/"><img src={linkedin} alt="linkedin logo"/></a>
      <a className="email" href="mailto:william.nam-amnath@mail.mcgill.ca"><img src={email} alt="email logo"/></a>
      </div>
    </NameCard>
    <Div>
    <Picture src={picture} alt="Picture of William Nam-Amnath"></Picture>
    </Div>
      </ParentDiv>

    <div className="intro-text">
      <h2 style={{textAlign: "center"}}>I am a web developer with experience working in both the frontend and the backend.</h2>
    <br/>
    <br/>
    </div>
    <h3 style={{textAlign: "center"}}>I have experience with the following tech stack:</h3>
    <ParentDiv>
    <div className="tech-stack">
    <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-javascript-plain colored"></TechStack>
    <TechStack className="devicon-react-original-wordmark colored"></TechStack>    
    <TechStack className="devicon-mongodb-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-nodejs-plain-wordmark colored"></TechStack>
    </div>
    </ParentDiv>
    <br/>
    <br/>
    <br/>
    <ParentDiv>
      <MoreInfo onClick={handleClick}>
        <h2>Learn More About Me! 👨‍💻</h2>
      </MoreInfo>
    </ParentDiv>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr style={{width: "50%"}}/>    
    <br/>
    <br/>    
    <br/>
    <br/>
    <Projects />

    </div>
  );
}

export default Intro;
