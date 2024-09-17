import React from "react";

import styled from "styled-components";
import projectNutrissence from "../images/Nutrissence-home-page.JPG";

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

const Nutrissence = () => {

    return (
        <>
            <div className="popup-window">
            <h1><span style={{textDecoration: "underline"}}>Nutrissence</span> 🍃</h1>
            <br/>
                <ImgDiv>
                <Picture src={projectNutrissence} alt="Picture of Nutrissence Home Page"></Picture>
                </ImgDiv>
                <a className="project-link" href="https://github.com/williamnamamnath/project-final" target="_blank" rel="noopener noreferrer"><h2>Click here for more info!</h2></a>
                    <div className="div-inner">
                    <h3 style={{textAlign: "left"}}>Responsibilities:</h3>
                        <ul>
                            <li>
                            Implemented a search engine to retrieve recipes based on ingredients searched
                            </li>
                            <br/>
                            <li>
                            Integrated a user authentication system that provides logged-in users exclusive access
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

export default Nutrissence;