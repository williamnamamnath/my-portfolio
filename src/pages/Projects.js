import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import nf1 from "../images/nfib-small.JPG";
import nutr from "../images/nutrissence-small.JPG";
import empo from "../images/emporium-small.JPG";

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const ChildDiv = styled.div`
    display:inline-block;
    box-shadow: 0 2px 20px 0 gray;
    color: black;
    background-color: #efd6ac;
    border-radius: 30px;
    margin: 20px;
    padding: 25px;
    transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
  cursor: pointer;
}
  `

const Picture = styled.img`
  box-shadow: 0 2px 20px 0 #efd6ac;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media all and (min-width: 360px) {
    max-width: 250px;
    max-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    flex-wrap: wrap;
  }
`

const H2 = styled.h2`
  text-align: center;
`

const Projects = () => {

    useEffect(() => {
        document.title = "My Projects"
    }, []);

    const navigate = useNavigate();

    const handleClickNFIB = () => {
        navigate('/nfib'); 
      };

      const handleClickNutrissence = () => {
        navigate('/nutrissence'); 
      };

      const handleClickEmporium = () => {
        navigate('/emporium'); 
      };
    
    return (
        <>
    <h1 style={{color: "white"}}>My Projects 💻</h1>
    <ParentDiv>
      <ChildDiv onClick={handleClickNFIB}>
    <H2>🌟 <span style={{textDecoration: "underline"}}>NFIB</span></H2>
    <h3>Freelance Project</h3>
        <Picture src={nf1} alt="NFIB preview"></Picture>
      </ChildDiv>
    </ParentDiv>
    <br/>

    <ParentDiv>
      <ChildDiv onClick={handleClickNutrissence}>
    <H2>🌟 <span style={{textDecoration: "underline"}}>Nutrissence</span></H2>
        <Picture src={nutr} alt="Nutrissence preview"></Picture>
      </ChildDiv>
      </ParentDiv>
    <br/>

    <ParentDiv>
      <ChildDiv onClick={handleClickEmporium}>
    <H2>🌟 <span style={{textDecoration: "underline"}}>E-Wear Emporium</span></H2>
    <h3>Team Project</h3>
        <Picture src={empo} alt="E-Wear Emporium preview"></Picture>
      </ChildDiv>
    </ParentDiv>
    <br/>
    <br/>
        </>
    )
};

export default Projects;