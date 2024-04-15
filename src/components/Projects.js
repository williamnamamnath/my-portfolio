import { Link } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

import game from "../images/game-screenshot.PNG";
import reactImg from "../images/react-intro.PNG";

const H2 = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
    text-decoration: underline;
`

const Projects = () => {

    useEffect(() => {
        document.title = "My Projects"
    }, []);
    
    return (
        <div className="body-space">
        <h1>My Projects</h1>
        <h2>Here are some projects and assignments that I've worked on during the Full Stack Web Development Bootcamp program. They are tasks that I've really enjoyed the learning process, which makes their final outcome so rewarding.</h2>
        <br/>
        <H2>Nyan Cat Project</H2>
        <div className="projects-section">
        <div className="projects-img">
            <img src={game} alt="Nyan Cat Project" className="pj-img1"></img>
        </div>
        <div className="text">
        <p>Before we get started, just a disclaimer that I did not build this whole application from scratch. My role was to debug this application that was already built to make sure the game runs smoothly.</p>
        <p>I really enjoyed this project as it required a lot of critical thinking and logic. Although the project was difficult, I still enjoyed asking my teachers questions to make sure I was on the right track. The learning process was fruitful as I had to do a lot of research to make sure I was using the right concepts which in the end, seeing the game run smoothly makes this whole process very fulfilling. </p>
        </div>
        </div>
        <H2>React</H2>
        <div className="projects-section">
        <div className="projects-img">
            <img src={reactImg} alt="React Workshop" className="pj-img2"></img>
        </div>
        <div className="text">
        <p>Ever since I started learning React, it just made creating websites from scratch so much easier since it is a combination of HTML, CSS as well as Javascript.</p> 
        <p>This image is the introduction to the React framework but I’ve also learned very helpful concepts that are time-efficient such as useState and useEffect. These hooks can be easily integrated into your components and can make your life so much easier as a developer.</p> 
        <p>The reason why I enjoy working with React is because it is less time-consuming than working with HTML, CSS and Javascript separately and there are so many resources available to help you understand this framework. In fact, this whole portfolio is built from scratch with React!
        </p>
        </div>
        </div>
        <br/>
        <br/>
        <h2>These are just a few of the work that I've done during my program. That being said, please feel free to reach out to me if you are interested in learning about the other projects that I've worked on!</h2>
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
        </div>
    )
};

export default Projects;