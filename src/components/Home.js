import { Link } from "react-router-dom"; 
import { useEffect } from "react";

import "../GlobalStyles";

import game from "../images/game-screenshot.PNG";
import reactImg from "../images/react-intro.PNG";
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
  const ChildDiv = styled.div`
    display:inline-block;
    box-shadow: 0 2px 20px 0 #efd6ac;
    color: black;
    background-color: #efd6ac;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
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

  return (
    <div className="body-space">
      <br/>
      <br/>

      <ParentDiv>    
    <ChildDiv>
    <h1 className="wd-position" style={{textAlign: "center", fontSize: "60px", fontWeight: "600"}}>{title}</h1>
    <h2 style={{textAlign: "center"}}>▶ Full-Stack Web Developer ◀</h2>
    <h3>📍Montreal, QC</h3> 
    <div className="socials">
    <a href="https://github.com/williamnamamnath"><img src={github} alt="github logo"/></a>
    <a href="https://www.linkedin.com/in/william-nam-amnath/"><img src={linkedin} alt="linkedin logo"/></a>
    <a href="mailto:william.nam-amnath@mail.mcgill.ca"><img src={email} alt="email logo"/></a>
    </div>
    </ChildDiv>
    <Div>
    <Picture src={picture} alt="Picture of William Nam-Amnath"></Picture>
    </Div>
      </ParentDiv>

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
    <Link to="/about" style={{color:"black", fontWeight:"bold", textDecoration:"none"}}><button className="website-btn">Learn more about me</button></Link>
    </ul>
    <br/>
    <br/>

    <h1>My Projects 💻</h1>
    <ParentDiv>
      <ChildDiv>
    <h2>🌟 NFIB - Freelance Project</h2>
        <Picture src={game} alt="Nyan Cat Project" className="pj-img1"></Picture>
      </ChildDiv>
    </ParentDiv>
    <br/>

    <ParentDiv>
      <ChildDiv>
    <h2>🌟 Nutrissence</h2>
        <Picture src={game} alt="Nyan Cat Project" className="pj-img1"></Picture>
      </ChildDiv>
    </ParentDiv>
    <br/>

    <ParentDiv>
      <ChildDiv>
    <h2>🌟 E-Wear Emporium - Team Project</h2>
        <Picture src={reactImg} alt="React Workshop" className="pj-img2"></Picture>
      </ChildDiv>
    </ParentDiv>

    <br/>
    <h3>More projects will be added soon!</h3>
    <br/>
    </div>
  );
}

export default Intro;
