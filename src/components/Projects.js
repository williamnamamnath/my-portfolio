import { Link } from "react-router-dom";
import { useEffect } from "react";

import styled from "styled-components";
import game from "../images/game-screenshot.PNG";
import reactImg from "../images/react-intro.PNG";

const Text = styled.p`
    display: flex;
    flex-wrap: wrap;
    text-align: justify;
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
    <h2 style={{textDecoration: "underline"}}>Nyan Cat Project</h2>
        <img src={game} alt="Nyan Cat Project" className="pj-img1"></img>
    <Text>Before we get started, just a disclaimer that I did not build this whole application from scratch. My role was to debug this application that was already built to make sure the game runs smoothly.</Text>
    <Text>I really enjoyed this project as it required a lot of critical thinking and logic. Although the project was difficult, I still enjoyed asking my teachers questions to make sure I was on the right track. The learning process was fruitful as I had to do a lot of research to make sure I was using the right concepts which in the end, seeing the game run smoothly makes this whole process very fulfilling. </Text>
    <br/>
    <h2 style={{textDecoration: "underline"}}>React</h2>
        <img src={reactImg} alt="React Workshop" className="pj-img2"></img>
    <Text>Ever since I started learning React, it just made creating websites from scratch so much easier since it is a combination of HTML, CSS as well as Javascript.</Text> 
    <Text>This image is the introduction to the React framework but I’ve also learned very helpful concepts that are time-efficient such as useState and useEffect. These hooks can be easily integrated into your components and can make your life so much easier as a developer.</Text> 
    <Text>The reason why I enjoy working with React is because it is less time-consuming than working with HTML, CSS and Javascript separately and there are so many resources available to help you understand this framework. In fact, this whole portfolio is built from scratch with React!
    </Text>
    <br/>
    <h3>More projects will be added soon!</h3>
    <br/>
    <br/>
    <Link to="/" style={{color:"black", textDecoration:"none"}}>
        <div className="home-btn">
        <button className="website-btn">
        <span className="material-symbols-outlined">Home</span>
        </button>
        <br/>
        </div>
    </Link>
    <br/>
        </>
    )
};

export default Projects;