import { useEffect, React } from "react";

import styled from "styled-components";
import projectNFIB from "../images/NFIB-home-page.JPG";
import backToTop from "../images/arrow-up.png"

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
//box-shadow: 0 2px 20px 0 #efd6ac;
color: black;
//background-color: black;
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

const LI = styled.li`
    line-height: 1.5;
    font-size: 20px;

  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 20px;
  }
`

const Paragraph = styled.p`
    font-size: 1.4rem;
    text-align: justify;
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
    text-align: left;
`

const SecondH3 = styled.h3`
    text-align: center;
`

const H2 = styled.h2`
    text-decoration: underline;
    text-align: center;
    color: white;
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

const NFIB = () => {

  useEffect(() => {
    document.title = "Project NFIB"
}, []);

    return (
        <>
        <PageSpacing />
            <div className="project-space">
            <H1>
            <ProjectLink href="https://github.com/williamnamamnath/project-nfib" target="_blank" rel="noopener noreferrer">
              Project NFIB 🧬
              </ProjectLink>
              </H1>
              <SecondH3>(work in progress)</SecondH3>
            <br/>
                <ImgDiv>
                <ProjectLink href="https://github.com/williamnamamnath/project-nfib" target="_blank" rel="noopener noreferrer">
                <Picture src={projectNFIB} alt="Picture of NFIB Home Page"></Picture></ProjectLink>
                </ImgDiv>
                <br/>
                    <InnerDiv>
                        <SecondH2>What is Project NFIB?</SecondH2>
                        <Paragraph>
                            Project NFIB, also known as Project Neurofibromatosis, is a freelance project that was offered to me by one of the medical geneticists that I work with at the Montreal University Health Centre (MUHC).
                        </Paragraph> 
                        <br/>
                            <Paragraph>
                                With this website, visitors will be able to learn more about the NFIB clinic at the MUHC and how to refer patients or family members to the clinic. 
                            </Paragraph>
                            <br/>
                    <H3>Responsibilities:</H3>
                        <ul>
                            <br/>
                            <LI>
                            Frontend-based website with the goal of illustrating the NFIB team at the MUHC and to describe this genetic disease
                            </LI>
                        </ul>
                    </InnerDiv>
                    <br/>
                    <ParentDiv>
                    <NameCard>
                        <H2>Technologies Used:</H2>
                        <ProjectStack>
                        <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-react-original-wordmark colored"></TechStack>    
                        </ProjectStack>
                    </NameCard>
                    </ParentDiv>
                    <div className="top-btn">
                    <a href="/nfib"><img src={backToTop} alt="arrow up"/></a>
                    </div>
            </div>
        </>
    )
}

export default NFIB;