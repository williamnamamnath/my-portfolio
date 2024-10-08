import React from "react";

import styled from "styled-components";
import projectEmporium from "../images/Emporium-home-page.JPG";

const Picture = styled.img`
  box-shadow: 0 2px 15px 0 gray;
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

const Paragraph = styled.p`
    font-size: 50px;
    text-align: justify;
    margin: 20px;
    padding: 15px;
    line-height: 1.5;
    font-weight: 550;

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
    font-weight: 550;

  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 20px;
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

const Emporium = () => {

    return (
        <>
        <PageSpacing>
            <div className="popup-window">
            <H1>
            <a className="project-link" href="https://github.com/williamnamamnath/project-GROUP-e-commerce" target="_blank" rel="noopener noreferrer">
              <span style={{textDecoration: "underline"}}>E-Wear Emporium </span> 🏬
              </a>
              </H1>
                <br/>
                <ImgDiv>
                <a className="project-link" href="https://github.com/williamnamamnath/project-GROUP-e-commerce" target="_blank" rel="noopener noreferrer">
                <Picture src={projectEmporium} alt="Picture of E-Wear Emporium"></Picture></a>
                </ImgDiv>
                    <br/>
                    <div className="div-inner">
                        <SecondH2>What is Project E-Wear Emporium?</SecondH2>
                        <Paragraph>
                            Project E-Wear Emporium is a group project, with tasks divided between 4 team members. The objective of this e-commerce website is to display fitness products
                        </Paragraph>
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
                    </div>
                    <ParentDiv>
                    <NameCard>
                        <H2>Technologies Used:</H2>
                        <div className="project-stack">
                        <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-react-original-wordmark colored"></TechStack>    
                        <TechStack className="devicon-javascript-plain colored"></TechStack>
                        <TechStack className="devicon-mongodb-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-nodejs-plain-wordmark colored"></TechStack>
                        </div>
                    </NameCard>
                    </ParentDiv>
            </div>
        </PageSpacing>
        </>
    )
}

export default Emporium;