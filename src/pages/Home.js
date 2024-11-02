import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../GlobalStyles";

import Projects from "./Projects";

import styled from "styled-components";
import picture from "../images/profile-picture.jpg";
import email from "../images/134146_mail_email_icon.png";
import github from "../images/211904_social_github_icon.png";
import linkedin from "../images/5296501_linkedin_network_linkedin logo_icon.png";


const H2 = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 55px;
  flex-wrap: wrap;

  @media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 35px;
  flex-wrap: wrap;
  }
`

const OtherH1 = styled.h1`
color: #0046EA;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 60px;
  flex-wrap: wrap;

  @media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 40px;
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
  margin: 20px 20px 0 20px;
  padding: 20px 20px 0 20px;
  }
`

const PicAndCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`


const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const NameCard = styled.div`
display:inline-block;
color: white;
border-radius: 30px;
margin: 15px;
padding: 10px;
`

// const MoreInfo = styled.div`
// display:inline-block;
// box-shadow: 0 2px 20px 0 gray;
// color: white;
// background-color: #efd6ac;
// border-radius: 30px;
// margin: 20px;
// padding: 15px;
// transition: transform 0.3s ease;

// &:hover {
//   transform: scale(1.1);
//   cursor: pointer;
// }
// `

const Picture = styled.img`
  border-radius: 200px;
  height: 380px;
  width: 380px;
  object-fit: cover;
  box-shadow: 0 2px 20px 0 gray;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
    border-radius: 150px;
    height: 250px;
    width: 250px;
    flex-wrap: wrap;
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

const StackDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 2px 20px 0 gray;
    color: #efd6ac;
    background-color: #efd6ac;
    border-radius: 40px;
    margin: 30px;
    padding: 25px;
`

const SocialsDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
`

const Social = styled.a`
    transition: transform 0.3s ease;

&:hover {
  transform: scale(1.2);
  cursor: pointer;
}
`

const Button = styled.button`
      font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(90deg, #3672FF 0%, #0046EA 100%);
  padding: 1rem;
  border: none;
  outline: 1.5px solid transparent;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: white;
    background: black;
    outline: 1.5px solid #0046EA;
  }
`

const Home = () => {

  useEffect(() => {
    document.title = "William Nam-Amnath | My Portfolio"
}, []);

const navigate = useNavigate();

const navAbout = () => {
  navigate('/about'); 
};

const navProjects = () => {
  navigate('/all-projects'); 
};

  return (
    <div className="body-space">
      <PicAndCard>    
    <Div>
    <Picture src={picture} alt="Picture of William Nam-Amnath"></Picture>
    </Div>
    <NameCard>
      <H2>William</H2>
      <OtherH1>Nam-Amnath</OtherH1>
      <h2 style={{textAlign: "center"}}>▶ Full-Stack Web Developer ◀</h2>
      <h3>📍 Montreal, QC</h3> 
      <SocialsDiv>
      <Social href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"/></Social>
      <Social href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"/></Social>
      <Social href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer"><img src={email} alt="email logo"/></Social>
      </SocialsDiv>
    </NameCard>
      </PicAndCard>

      <br/>
      <br/>
    <h3 style={{textAlign: "center", color: "white"}}>I have experience with the following tech stack:</h3>
    <ParentDiv>
    <StackDiv>
    <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-javascript-plain colored"></TechStack>
    <TechStack className="devicon-react-original-wordmark colored"></TechStack>    
    <TechStack className="devicon-mongodb-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-nodejs-plain-wordmark colored"></TechStack>
    </StackDiv>
    </ParentDiv>
    <br/>
    <br/>
    <br/>
    <SocialsDiv>
      <Button onClick={navAbout}>
        Learn More About Me! 👨‍💻
      </Button>
      <Button onClick={navProjects}>
        My Projects
      </Button>
    </SocialsDiv>
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

export default Home;
