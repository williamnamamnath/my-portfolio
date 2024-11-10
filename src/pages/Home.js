import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AboutMe from "./AboutMe";

import styled from "styled-components";
import picture from "../images/profile-picture.jpg";
import email from "../images/email-logo.png";
import github from "../images/github-logo.png";
import linkedin from "../images/linkedin-logo.png";


const H1 = styled.h1`
    font-family: "Poppins", sans-serif;
    text-align: center;
  font-size: 3.8rem;
  flex-wrap: wrap;
  line-height: 2rem;
  color: whitesmoke;

  @media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 2.5rem;
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
font-size: 8rem;
background-color: transparent;
padding: 5px;
border-radius: 10px;
flex-wrap: wrap;

@media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap;
}
`

const StackDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
`

const SocialsDiv = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 1rem;
    padding: 1rem 2.5rem;
`

const Social = styled.a`
    transition: transform 0.3s ease;

&:hover {
  transform: scale(1.2);
  cursor: pointer;
}
`

const Button = styled.button`
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(90deg, #3672FF 0%, #0046EA 100%);
  padding: 2rem 2.2rem;
  margin: 2rem 0;
  border: none;
  outline: 1.5px solid transparent;
  border-radius: 2.5rem;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    color: white;
    background: black;
    outline: 1.5px solid #0046EA;
  }

  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 0.95rem;
    flex-wrap: wrap;
    padding: 1rem 2rem;
    margin: 2rem 0;
    border-radius: 1.5rem;
    max-height: 6rem;
}
`

const PageSpacing = styled.div`
  margin: 8rem 0;

  @media all and (min-width: 360px) and (max-width: 969px) {
    margin: 2rem 0;
    flex-wrap: wrap;
  }
`

const Home = () => {

  useEffect(() => {
    document.title = "William Nam-Amnath | My Portfolio"
}, []);

const navigate = useNavigate();

const navProjects = () => {
  navigate('/projects'); 
};

const navExperience = () => {
  navigate('/experience'); 
};

  return (
    <div className="body-space">
      <PageSpacing />
      <PicAndCard>    
    <Div>
    <Picture src={picture} alt="Picture of William Nam-Amnath"></Picture>
    </Div>
    <NameCard>
      <H1>William</H1>
      <H1>Nam-Amnath</H1>
      <br/>
      <br/>
      <h3 style={{textAlign: "center"}}>Full-Stack Web Developer with a Passion for the Frontend</h3>
      <hr/>
      <h4>📍 Montreal, QC</h4> 
      <SocialsDiv>
      <Social href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"/></Social>
      <Social href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"/></Social>
      <Social href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer"><img src={email} alt="email logo"/></Social>
      </SocialsDiv>
    </NameCard>
      </PicAndCard>
      <br/>
      <br/>
      <br/>

      <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <PageSpacing />
    <h3 style={{textAlign: "center", color: "white"}}>I have experience with the following tech stack:</h3>
    <ParentDiv>
      <NameCard>
    <StackDiv>
    <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-javascript-plain colored"></TechStack>
    </StackDiv>
    <StackDiv>
    <TechStack className="devicon-react-original-wordmark colored"></TechStack>    
    <TechStack className="devicon-mongodb-plain-wordmark colored"></TechStack>
    <TechStack className="devicon-nodejs-plain-wordmark colored"></TechStack>
    </StackDiv>
      </NameCard>
    </ParentDiv>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <PageSpacing />
    <h3 style={{textAlign: "center", color: "white"}}>Visit these sections below for more information on myself</h3>
    <SocialsDiv>
      <Button onClick={navProjects}>
        View My Projects 💻
      </Button>
      <Button onClick={navExperience}>
         My Professional Experience 🎓💼
      </Button>
    </SocialsDiv>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <AboutMe />

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <PageSpacing />
    </div>
  );
}

export default Home;
