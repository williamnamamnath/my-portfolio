import { useEffect, React } from "react";

import styled from "styled-components";
import projectNutrissence from "../images/Nutrissence-home-page.JPG";

const Picture = styled.img`
  box-shadow: 0 2px 20px 0 #0046EA;
  border-radius: 15px;
  height: 60%;
  width: 60%;
  object-fit: fill;

  @media all and (min-width: 360px) and (max-width: 969px) {
    height: 90%;
    width: 90%;
  }
`

const ImgDiv = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
`

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const NameCard = styled.div`
display: block;
color: white;
border-radius: 30px;
margin: 20px 40px;
padding: 15px 30px;
align-items: center;
justify-content: center;
`

const TechStack = styled.i`
font-size: 8rem;
background-color: transparent;
padding: 5px;
border-radius: 10px;
flex-wrap: wrap;

@media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 3.1rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  flex-wrap: wrap;
}
`

const Paragraph = styled.p`
    font-size: 50px;
    text-align: justify;
    margin: 20px;
    padding: 15px;
    line-height: 1.5;

    @media all and (min-width: 360px) {
    font-size: 20px;
    line-height: 1.7;
    margin: auto;
    padding: 0%;
    }
`

const H3 = styled.h3`
    text-align: left;
`

const LI = styled.li`
    line-height: 1.5;
    font-size: 20px;

  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 20px;
  }
`

const H2 = styled.h2`
    text-decoration: underline;
    text-align: center;
`

const SecondH2 = styled.h2`
    text-align: center;
`

const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 3.8rem;
  flex-wrap: wrap;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 2.5rem;
  flex-wrap: wrap;
  }
`

const PageSpacing = styled.div`
  margin: 8rem 0;

  @media all and (min-width: 360px) and (max-width: 969px) {
    margin: 5rem 0;
    flex-wrap: wrap;
  }
`

const ProjectStack = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
`

const InnerDiv = styled.div`
    margin: 20px;
    padding: 15px;
`

const ProjectLink = styled.a`
    color: #efd6ac;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: white;
`

const Nutrissence = () => {

  useEffect(() => {
    document.title = "Project Nutrissence"
}, []);

    return (
        <>
        <PageSpacing />
            <div className="project-space">
            <H1>
            <ProjectLink href="https://github.com/williamnamamnath/project-final" target="_blank" rel="noopener noreferrer">
              Project Nutrissence 🍃
              </ProjectLink>
              </H1>
            <br/>
                <ImgDiv>
                <ProjectLink href="https://github.com/williamnamamnath/project-final" target="_blank" rel="noopener noreferrer">
                <Picture src={projectNutrissence} alt="Picture of Nutrissence Home Page"></Picture></ProjectLink>
                </ImgDiv>
                    <br/>
                    <InnerDiv>
                        <SecondH2>What is Project Nutrissence?</SecondH2>
                        <Paragraph>
                          <br/>
                            As someone that takes his health seriously, I wanted to create a resource that provides users with valuable intel on what they can consume depending on the type of diet they would like to follow. 
                        </Paragraph>
                        <br/>
                        <Paragraph>
                            Simply put, Nutrissence is a recipe search engine. Each recipe will display essential information that will give clients a better understanding of what can eat or what they should avoid. ***Insert screenshot of recipe details  
                        </Paragraph>
                        <br/>
                        <Paragraph>
                            And the best part, this website is FREE to use! You simply need to create an account and you'll be able to get started 😊
                        </Paragraph>
                        <br/>
                    <H3>Responsibilities:</H3>
                        <ul>
                            <LI>
                            Implemented a search engine to retrieve recipes based on ingredients searched
                            </LI>
                            <br/>
                            <LI>
                            Integrated a user authentication system that provides logged-in users exclusive access
                            </LI>
                        </ul>
                    </InnerDiv>
                    <ParentDiv>
                    <NameCard>
                        <H2>Technologies Used:</H2>
                        <ProjectStack>
                        <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-react-original-wordmark colored"></TechStack>
                        </ProjectStack>
                        <ProjectStack>    
                        <TechStack className="devicon-javascript-plain colored"></TechStack>
                        <TechStack className="devicon-mongodb-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-nodejs-plain-wordmark colored"></TechStack>
                        </ProjectStack>
                    </NameCard>
                    </ParentDiv>
            </div>
        </>
    )
}

export default Nutrissence;