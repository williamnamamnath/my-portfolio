import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

const SocialsDiv = styled.div`
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 2rem;
    padding: 3rem;
`

const Button = styled.button`
  font-size: 1.2rem;
  display: block;
  align-items: center;
  justify-content: center;
  color: white;
  background: linear-gradient(90deg, #3672FF 0%, #0046EA 100%);
  box-shadow: 0 2px 20px 0 #0046EA;
  padding: 2rem 3.6rem 2.4rem 3.6rem;
  margin: 2rem;
  border: none;
  outline: 1.5px solid transparent;
  border-radius: 1.5rem;
  cursor: pointer;
  transition: all 0.5s ease;
  flex-wrap: wrap;
  max-width: 18rem;
  max-height: 12rem;

  &:hover {
    color: white;
    background: black;
    outline: 1.5px solid #0046EA;
  }

    @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 1rem;
    flex-wrap: wrap;
    padding: 1rem 4rem;
    margin: 2rem 0;
    border-radius: 1.5rem;
    max-width: 14rem;
}
`

const H2 = styled.h2`
  text-align: center;
`

const PageSpacing = styled.div`
  margin: 8rem 0;

  @media all and (min-width: 360px) and (max-width: 969px) {
    margin: 4.5rem 0;
    flex-wrap: wrap;
  }
`

const ProjectsPage = () => {

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
      <PageSpacing />
      <h1 style={{color: "white"}}>My Projects 💻</h1>   

      <SocialsDiv>
      <Button onClick={handleClickNFIB}>
    <H2>🌟  <span style={{textDecoration: "underline"}}>NFIB</span></H2>
    <h5>Freelance Project</h5>
      </Button>


      <Button onClick={handleClickNutrissence}>
    <H2>🌟  <span style={{textDecoration: "underline"}}>Nutrissence</span></H2>
    <h5>Personal Project</h5>
      </Button>


      <Button onClick={handleClickEmporium}>
    <H2>🌟  <span style={{textDecoration: "underline"}}>E-Wear Emporium</span></H2>
    <h5>Team Project</h5>
      </Button>
    </SocialsDiv>
    
    <ParentDiv>
    </ParentDiv>
    <h3 style={{color: "white"}}>More projects will be added soon!</h3>
    <PageSpacing />
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        </>
    )
};

export default ProjectsPage;