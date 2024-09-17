import { useEffect } from "react";

import styled from "styled-components";
import game from "../images/game-screenshot.PNG";
import reactImg from "../images/react-intro.PNG";

const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 20px 0 #efd6ac;
    color: black;
    background-color: #efd6ac;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
`

const Project = styled.div`
    display:inline-block;
`

const Projects = () => {

    useEffect(() => {
        document.title = "My Projects"
    }, []);
    
    return (
        <>
    <h1 style={{fontSize: "40px"}}>My Projects</h1>
    <br/>
    <br/>

    <Panel>
        <Project>
    <h2 style={{textDecoration: "underline"}}>NFIB - Freelance Project</h2>
        <img src={game} alt="Nyan Cat Project" className="pj-img1"></img>
        </Project>
    </Panel>
    <br/>

    <Panel>
        <Project>
    <h2 style={{textDecoration: "underline"}}>Nutrissence</h2>
        <img src={game} alt="Nyan Cat Project" className="pj-img1"></img>
        </Project>
    </Panel>
    <br/>

    <Panel>
        <Project>
    <h2 style={{textDecoration: "underline"}}>E-Wear Emporium - Team Project</h2>
        <img src={reactImg} alt="React Workshop" className="pj-img2"></img>
        </Project>
    </Panel>

    <br/>
    <h3>More projects will be added soon!</h3>
    <br/>
        </>
    )
};

export default Projects;