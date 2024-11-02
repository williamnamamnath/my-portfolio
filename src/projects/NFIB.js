import React from "react";

import styled from "styled-components";
import projectNFIB from "../images/NFIB-home-page.JPG";

const Picture = styled.img`
  box-shadow: 0 2px 15px 0 gray;
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
  font-size: 60px;
  font-weight: 600;
  flex-wrap: wrap;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 40px;
    font-weight: 600;
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
font-size: 75px;
background-color: black;
padding: 5px;
border-radius: 10px;

@media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center; 
}
`

const LI = styled.li`
    line-height: 1.5;
    font-size: 20px;
    font-weight: 550;

  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 20px;
  }
`

const Paragraph = styled.p`
    font-size: large;
    font-weight: 550;
    text-align: justify;
    margin: 20px;
    padding: 15px;
    line-height: 1.5;

    @media all and (min-width: 360px) and (max-width: 969px) {
    margin: 15px;
    padding: 5px;
  flex-wrap: wrap;
  }
`

const H3 = styled.h3`
    text-align: left;
`

const H2 = styled.h2`
    text-decoration: underline;
    text-align: center;
`

const SecondH2 = styled.h2`
    text-align: center;
`

const PageSpacing = styled.div`
  margin: 100px 0 100px 0;
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
    color: black;
`

const NFIB = () => {

    return (
        <>
        <PageSpacing>
            <div className="popup-window">
            <H1>
            <ProjectLink href="https://github.com/williamnamamnath/project-nfib" target="_blank" rel="noopener noreferrer">
              <span style={{textDecoration: "underline"}}>NFIB </span> 🧬
              </ProjectLink>
              </H1>
            <br/>
                <ImgDiv>
                <ProjectLink href="https://github.com/williamnamamnath/project-nfib" target="_blank" rel="noopener noreferrer">
                <Picture src={projectNFIB} alt="Picture of NFIB Home Page"></Picture></ProjectLink>
                </ImgDiv>
                <br/>
                    <InnerDiv>
                        <SecondH2>What is Project NFIB (neurofibromatosis)?</SecondH2>
                        <Paragraph>
                            Project NFIB is a freelance project that was proposed to me by one of the medical geneticists that I work with at the Montreal University Health Centre (MUHC).
                        </Paragraph> 
                        <br/>
                            <Paragraph>
                                With the help of this website, patients and their families will be able to get more information on the genetic disease known as neurofibromatosis type 1 (NFIB/NF1), what are the related symptoms and treatment how to send referrals to the genetics department at the MUHC. 
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
            </div>
        </PageSpacing>
        </>
    )
}

export default NFIB;