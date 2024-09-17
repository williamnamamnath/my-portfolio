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
                    <h3 style={{textAlign: "left"}}>Responsibilities:</h3>
                        <ul>
                            <li>
                            Created for the neurofibromatosis (NFIB) team, a sub-department of medical genetics at the Montreal University Health Centre (MUHC), at the request of one of the medical geneticists
                            </li>
                            <br/>
                            <li>
                            Frontend-based website with the goal of illustrating the NFIB team at the MUHC and to describe this genetic disease
                            </li>
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