import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../GlobalStyles";

import Projects from "./Projects";

import styled from "styled-components";
import picture from "../images/profile-picture.jpg";
import email from "../images/134146_mail_email_icon.png";
import github from "../images/211904_social_github_icon.png";
import linkedin from "../images/5296501_linkedin_network_linkedin logo_icon.png";


const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  flex-wrap: wrap;

  @media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 40px;
  font-weight: 800;
  flex-wrap: wrap;
  }
`

const Div = styled.div`
  display:inline-block;
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: 20px;

  @media all and (min-width: 360px) and (max-width: 969px) {
  margin: 15px;
  padding: 15px;
  }
`

const PicAndCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 20px 0 gray;
  border-radius: 20px;
  background-color: #efd6ac;
`


const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const NameCard = styled.div`
display:inline-block;
box-shadow: none;
background-color: #efd6ac;
color: black;
border-radius: 30px;
margin: 15px;
padding: 10px;
`

const MoreInfo = styled.div`
display:inline-block;
box-shadow: 0 2px 20px 0 gray;
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
  border-radius: 10px;
  height: 380px;
  width: 380px;
  object-fit: cover;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
    height: 200px;
    width: 200px;
  }
`

const TechStack = styled.i`
font-size: 75px;
background-color: black;
padding: 5px;
border-radius: 10px;

@media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 50px;
}
`

const Intro = () => {

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

      <PicAndCard>    
    <Div>
    <Picture src={picture} alt="Picture of William Nam-Amnath"></Picture>
    </Div>
    <NameCard>
      <H1>William <br/>Nam-Amnath</H1>
      <h2 style={{textAlign: "center"}}>▶ Full-Stack Web Developer ◀</h2>
      <h3>📍 Montreal, QC</h3> 
      <div className="socials">
      <a className="github" href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"/></a>
      <a className="linkedin" href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"/></a>
      <a className="email" href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer"><img src={email} alt="email logo"/></a>
      </div>
    </NameCard>
      </PicAndCard>

      <br/>
      <br/>
    <h3 style={{textAlign: "center"}}>I have experience with the following tech stack:</h3>
    <br/>
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
        <h3>Learn More About Me! 👨‍💻</h3>
      </MoreInfo>
    </ParentDiv>
    <br/>
    <br/>
    <br/>
    <hr style={{width: "50%"}}/>        
    <br/>
    <br/>
    <Projects />

    </div>
  );
}

export default Intro;
