import React from "react";
import Navbar from "../components/NavBar";

import styled from "styled-components";
import projectEmporium from "../images/Emporium-home-page.JPG";

const Picture = styled.img`
  box-shadow: 0 2px 20px 0 #efd6ac;
  border-radius: 10px;
  height: 60%;
  width: 60%;
  object-fit: fill;
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
box-shadow: 0 2px 20px 0 #efd6ac;
color: #efd6ac;
background-color: black;
border-radius: 30px;
margin: 20px 40px;
padding: 15px 30px;
align-items: center;
justify-content: center;
`

const TechStack = styled.i`
font-size: 75px;
`

const Paragraph = styled.p`
font-size: large;
    text-align: justify;
    margin: 20px;
    padding: 15px;
    line-height: 1.5;
`

const H3 = styled.h3`
    text-align: left;
    text-decoration: underline;
`

const LI = styled.li`
    line-height: 1.5;
`

const Emporium = () => {

    return (
        <>
        <Navbar />
            <div className="popup-window">
                <h1><span style={{textDecoration: "underline"}}>E-Wear Emporium</span> 🏬</h1>
                <br/>
                <ImgDiv>
                <Picture src={projectEmporium} alt="Picture of E-Wear Emporium" href="https://github.com/williamnamamnath/project-GROUP-e-commerce"></Picture>
                </ImgDiv>
                <a className="project-link" href="https://github.com/williamnamamnath/project-GROUP-e-commerce" target="_blank" rel="noopener noreferrer"><h2>Click here for more info!</h2></a>
                    <div className="div-inner">
                        <H3>What is Project E-Wear Emporium?</H3>
                        <Paragraph>
                            Project E-Wear Emporium is a group assignment that was worked on during the Web Development Bootcamp program. In teams of 4, we were tasked with creating a full-stack e-commerce website based on a common list of fitness brands and products for every team. How we display those products on the frontend and how we store them in the backend was up to each team to figure out how they wanted to go about it. 
                        </Paragraph>
                        <Paragraph>
                            It is important to note that users will not actually be able to buy the products displayed on E-Wear Emporium, but they will be able to sign up or login and add items to their cart. Each user is stored in our MongoDB database, so they know that our website and their information is secure and in good hands.  
                        </Paragraph>
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
                        <h2 style={{textDecoration: "underline"}}>Technologies Used:</h2>
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
        </>
    )
}

export default Emporium;