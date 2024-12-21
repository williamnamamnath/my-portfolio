import { useEffect, React } from "react";

import styled from "styled-components";
import projectEmporium from "../images/Emporium-home-page.JPG";
import backToTop from "../images/arrow-up.png"

const Picture = styled.img`
  box-shadow: 0 2px 20px 0 #0046EA;
  border-radius: 15px;
  height: 50%;
  width: 50%;
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
    font-size: 1.4rem;
    text-align: left;
    margin: 0.6rem;
    padding: 1.5rem;
    line-height: 1.5;

    @media all and (min-width: 360px) {
    font-size: 1.2rem;
    line-height: 1.7;
    margin: 0.2rem;
    padding: 0.2rem;
    }
`

const H3 = styled.h3`
    font-size: 1.5rem;
    text-align: left;

    @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 1.4rem;
  }
`

const LI = styled.li`
    line-height: 1.5;
    font-size: 1.4rem;

  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 1.2rem;
  }
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

const H2 = styled.h2`
    text-decoration: underline;
    text-align: center;
`

const SecondH2 = styled.h2`
    text-align: center;
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

const Emporium = () => {

  useEffect(() => {
    document.title = "Project E-Wear Emporium"
}, []);

    return (
        <>
        <PageSpacing />
            <div className="project-space">
            <H1>
            <ProjectLink href="https://github.com/williamnamamnath/project-GROUP-e-commerce" target="_blank" rel="noopener noreferrer">
              Project E-Wear Emporium 🏬
              </ProjectLink>
              </H1>
                <br/>
                <ImgDiv>
                <ProjectLink href="https://github.com/williamnamamnath/project-GROUP-e-commerce" target="_blank" rel="noopener noreferrer">
                <Picture src={projectEmporium} alt="Picture of E-Wear Emporium"></Picture></ProjectLink>
                </ImgDiv>
                    <br/>
                    <InnerDiv>
                        <SecondH2>What is Project E-Wear Emporium?</SecondH2>
                        <Paragraph>
                            Project E-Wear Emporium is a group project, with tasks divided between 4 team members. The objective of this e-commerce website is to display fitness products
                        </Paragraph>
                        <br/>
                        <br/>
                        <br/>
                        <H3>Responsibilities:</H3>
                        <ul>
                            <LI>
                            Collaborated on a group project to create a full-stack e-commerce application using the MERN stack
                            </LI>
                            <br/>
                            <LI>
                            Orchestrated the general layout for the frontend:
                            <ul>
                                <LI>
                                Created the brand name of our website
                                </LI>
                                <LI>
                                Proposed the current design of E-Wear Emporium
                                </LI>
                            </ul>
                            </LI>
                            <br/>
                            <LI>
                            Created the customer service pages to look as authentic to a real brand as possible
                            </LI>
                            <br/>
                            <LI>
                            Implemented authentication and authorization features to ensure secure access to family accounts and data privacy
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
                    <div className="top-btn">
                    <a href="/emporium"><img src={backToTop} alt="arrow up"/></a>
                    </div>
            </div>
        </>
    )
}

export default Emporium;