import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutMe = () => {

    useEffect(() => {
        document.title = "About Me"
    }, []);

    return (
        <div className="body-space">
        <h1>About Me</h1>
        <p>The ability to create websites from scratch has been a very intriguing idea. Ever since I took an HTML class in my second year of CEGEP in 2016, I fell in love with its creative aspect, but also its complexity. The creativity, as well as the attention to detail, are qualities that I believe are required in this domain. That is why I am excited to be able to start working on projects professionally. My objective is to have my work ethic and my passion for web development be reflected in my work so that my clients can have the best and easiest experience possible.</p>
        <p>I am set to graduate from the Full Stack Web Development Concordia Bootcamps program in May 2024, and I can't wait to begin this new journey.</p>
        <p>In terms of my personal life, I am an avid basketball fan. I enjoy watching the game and I love playing it even more. This sport has been a passion of mine since I started high school. I also really enjoy bouldering. Basically, you can probably tell that I love staying active whenever I can. Video games are also a great way for me to take it easy and relax on my free time.
        </p>
        <br/>
        <br/>
        <Link to="/" style={{color:"black", textDecoration:"none"}}>
            <div className="home-btn">
            <button className="website-btn">
            <span class="material-symbols-outlined">Home</span>
            </button>
            <br/>
            </div>
        </Link>
        <br/>
        </div>
    )
}; 

export default AboutMe;