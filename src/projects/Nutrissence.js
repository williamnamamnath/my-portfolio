import React from "react";
import Navbar from "../components/NavBar";

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

const Nutrissence = () => {

    return (
        <>
        <Navbar />
            <div className="popup-window">
            <h1><span style={{textDecoration: "underline"}}>Nutrissence</span> 🍃</h1>
            <br/>
                <ImgDiv>
                <Picture src={projectNutrissence} alt="Picture of Nutrissence Home Page"></Picture>
                </ImgDiv>
                <a className="project-link" href="https://github.com/williamnamamnath/project-final" target="_blank" rel="noopener noreferrer"><h2>Click here for more info!</h2></a>
                    <div className="div-inner">
                        <H3>What is Project Nutrissence?</H3>
                        <Paragraph>
                            Nutrissence is the final project that I worked on for the Web Development bootcamp program in May 2024. The guidelines were fairly simple: to create any kind of full-stack website of your choosing as long as you use an API and use the big concepts that were covered throughout the bootcamp.
                        </Paragraph>
                        <Paragraph>
                            As someone that takes his health and diet seriously, I struggled finding resources that were easy to understand or even easy to access. Of course, there are many resources available but personally, and once can even just read the nutritional facts about the food that they buy but that's not the easiest thing do. 
                        </Paragraph>
                        <Paragraph>
                            This is where Nutrissence comes in. Simply put, this resource is a recipe search engine. Users simply have to search a specific ingredient such as "avocado" and the results will return recipes that include avocado in the ingredients list. 
                        </Paragraph>
                            <Paragraph>My goal for this project was to help the general consumer by informing on what specific recipes are good for and which recipes they should avoid.
                        </Paragraph> 
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