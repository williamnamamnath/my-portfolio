import React from "react";
import Navbar from "../components/NavBar";

import styled from "styled-components";
import projectNFIB from "../images/NFIB-home-page.JPG";

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

const LI = styled.li`
    line-height: 1.5;
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

const NFIB = () => {

    return (
        <>
        <Navbar />
            <div className="popup-window">
            <h1><span style={{textDecoration: "underline"}}>NFIB</span> 🧬</h1>
            <h3>(Still in progress! 🛠)</h3>
            <br/>
                <ImgDiv>
                <Picture src={projectNFIB} alt="Picture of NFIB Home Page"></Picture>
                </ImgDiv>
                <a className="project-link" href="https://github.com/williamnamamnath/project-nfib" target="_blank" rel="noopener noreferrer"><h2>Click here for more info!</h2></a>
                    <div className="div-inner">
                        <H3>What is Project NFIB?</H3>
                        <Paragraph>
                            Project NFIB is a freelance project that was proposed to me by one of the medical geneticists that I work with at the Montreal University Health Centre (MUHC) from the genetics department.
                        </Paragraph> 
                            <Paragraph>
                                The goal of this website is to provide more information on how the pediatric and adult clinics work. NFIB or NF1, which stand for Neurofibromatosis or Neurofibromatosis Type 1 respectively, is still a genetic disease that needs more discussion as it is not talked about enough.
                            </Paragraph> 
                            <Paragraph>
                                With the help of this website, patients and their families will be able to get more information on NFIB/NF1 and how to send their referrals to the genetics department at the MUHC among other benefits. 
                            </Paragraph>
                    <H3>Responsibilities:</H3>
                        <ul>
                            <LI>
                            Created for the neurofibromatosis (NFIB) team, a sub-department of medical genetics at the Montreal University Health Centre (MUHC), at the request of one of the medical geneticists
                            </LI>
                            <br/>
                            <LI>
                            Frontend-based website with the goal of illustrating the NFIB team at the MUHC and to describe this genetic disease
                            </LI>
                        </ul>
                    </div>
                    <br/>
                    <ParentDiv>
                    <NameCard>
                        <h2>Technologies Used:</h2>
                        <div className="project-stack">
                        <TechStack className="devicon-html5-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-css3-plain-wordmark colored"></TechStack>
                        <TechStack className="devicon-react-original-wordmark colored"></TechStack>    
                        </div>
                    </NameCard>
                    </ParentDiv>
            </div>
        </>
    )
}

export default NFIB;