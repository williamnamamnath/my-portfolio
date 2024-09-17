import React from "react";

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

const Emporium = () => {

    return (
        <>
            <div className="popup-window">
                <h1><span style={{textDecoration: "underline"}}>E-Wear Emporium</span> 🏬</h1>
                <br/>
                <ImgDiv>
                <Picture src={projectEmporium} alt="Picture of E-Wear Emporium" href="https://github.com/williamnamamnath/project-GROUP-e-commerce"></Picture>
                </ImgDiv>
                <a className="project-link" href="https://github.com/williamnamamnath/project-GROUP-e-commerce" target="_blank" rel="noopener noreferrer"><h2>Click here for more info!</h2></a>
                    <div className="div-inner">
                        <h3 style={{textAlign: "left"}}>Responsibilities:</h3>
                        <ul>
                            <li>
                            Collaborated on a group project to create a full-stack e-commerce application using the MERN stack
                            </li>
                            <br/>
                            <li>
                            Orchestrated the general layout for the frontend:
                            <ul>
                                <li>
                                Created the brand name of our website
                                </li>
                                <li>
                                Proposed the current design of E-Wear Emporium
                                </li>
                            </ul>
                            </li>
                            <br/>
                            <li>
                            Created the customer service pages to look as authentic to a real brand as possible
                            </li>
                            <br/>
                            <li>
                            Implemented authentication and authorization features to ensure secure access to family accounts and data privacy
                            </li>
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