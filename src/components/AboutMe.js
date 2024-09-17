import { useEffect } from "react";

import styled from "styled-components";
import NavBar from "./NavBar";

import banffPhoto from "../images/wnam-amnath.JPG";

const Picture = styled.img`
  box-shadow: 0 2px 20px 0 #efd6ac;
  border-radius: 10px;
  height: 20%;
  width: 20%;
  object-fit: cover;
`

const ImgDiv = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
`

const Paragraph = styled.p`
font-size: large;
    text-align: justify;
    margin: 20px;
    padding: 15px;
    line-height: 1.5;
`

const CenteredParagraph = styled.p`
    text-align: center;
    margin: 20px;
    padding: 15px;
`

const ListDiv = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
`

const ListBackground = styled.div`
    box-shadow: 0 2px 20px 0 #efd6ac;
    color: #efd6ac;
    background-color: black;
    border-radius: 30px;
    margin: 20px 40px;
    padding: 15px 30px;
`

const H3 = styled.h3`
    text-align: left;
`

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const ChildDiv = styled.div`
    display:inline-block;
    box-shadow: 0 2px 20px 0 #efd6ac;
    color: black;
    background-color: #efd6ac;
    border-radius: 30px;
    margin: 20px;
    padding: 25px;
    transition: transform 0.3s ease;

&:hover {
  transform: scale(1.1);
}
  `

const Anchor = styled.a`
    color: #efd6ac;
`

const AboutMe = () => {

    useEffect(() => {
        document.title = "About Me"
    }, []);

    return (
        <>
        <NavBar />
        <div className="body-space">
        <h1 style={{textDecoration: "underline"}}>About Me</h1>
        <ImgDiv>
        <Picture src={banffPhoto} alt="Picture of William Nam-Amnath"></Picture>
        </ImgDiv>
        <h2>👋 Hi there! </h2>
        <CenteredParagraph>My name is <span style={{color: "#01A7C2"}}>William Nam-Amnath</span> and I am a full-stack web developer from Montreal, Canada.</CenteredParagraph>
        <Paragraph>I am a junior developer having graduated from the Concordia University Web Development bootcamp program in May 2024. Throughout the program, I learned and practiced using the following techniques stacks/concepts: </Paragraph>
        <ListDiv>
            <ListBackground>
        <ul>
            <li>
                HTML
            </li>
            <br/>
            <li>
                CSS
            </li>
            <br/>
            <li>
                Javascript
            </li>
            <br/>
            <li>
                React
            </li>
            <br/>
            <li>
                Express.js
            </li>
            <br/>
            <li>
                Node.js
            </li>
            <br/>
            <li>
                MongoDB
            </li>
        </ul>
            </ListBackground>
        </ListDiv>
        <H3>Quoi De Neuf? 🤔</H3>
        <Paragraph>
        At the moment, I currently work at the Montreal Children Hospital as an administrative agent. However, I am actively looking for a position in web development. Since graduating in May, I have taken on a freelance contract from one of the colleagues I currently work with. <Anchor href="/nfib">Feel free to take a look!</Anchor>
        </Paragraph>
        <H3>Gaining New Knowledge 📚</H3>
        <Paragraph>
        During my free time, I enjoy learning and acquiring new skills. I am currently learning <span style={{color: "#01A7C2"}}>Typescript</span> and am looking forward to learning about other tech stacks and libraries. 
        </Paragraph>
        <H3>My Hobbies 🏀</H3>
        <Paragraph>
        If I’m not coding, you can find me playing basketball, listening to music or watching movies. 
        </Paragraph>
        <br/>
        <br/>
        <h1 style={{textDecoration: "underline"}}>My Coding Philosophy</h1>
        <Paragraph>
        As a developer, I believe patience is a key attribute to possess. As someone that enjoys taking on challenges, I understand that problem-solving is a skill that can’t be mastered overnight and I am willing to put in the time and effort to get over any obstacle. 
        </Paragraph>
        <Paragraph>
        Moreover, attention to detail is an essential and valuable aspect that I take pride in. As a developer that enjoys making sure that every frame is to my liking, I only provide my maximum effort to make sure that the product I deliver is of excellent quality, whether I’m working on a personal project or working in teams. 
        </Paragraph>
        <Paragraph>
        Lastly, as a developer, it is important that one stays organized. Whether we’re talking about team planning or something as simple as how you arrange your files in your project, it can be easy to lose track of your work and your progress. Therefore, staying organized is essential and is a quality that can be easy to neglect. 
        </Paragraph>
        <br/>
        <br/>
        <h1 style={{textDecoration: "underline"}}>My Education</h1>
        <ParentDiv>
            <ChildDiv>
                <H3><span style={{color: "#1C6E8C"}}>October 2023 - May 2024</span></H3>
                <ul>
                    <li><span style={{fontWeight: "bold", textDecoration: "underline"}}>Certificate</span> from the Concordia University Web Development Bootcamp</li>
                </ul>
            </ChildDiv>
        </ParentDiv>
        <br/>
        <ParentDiv>
            <ChildDiv>
                <H3><span style={{color: "#1C6E8C"}}>August 2017 - April 2021</span></H3>
                <ul>
                    <li><span style={{fontWeight: "bold", textDecoration: "underline"}}>Bachelor</span> of Education from McGill University</li>
                    <br/>
                    <ul>
                        <li>
                        Teaching English as a Second Language (TESL)
                        </li>
                    </ul>
                </ul>
            </ChildDiv>
        </ParentDiv>
        <br/>
        </div>
        </>
    )
}; 

export default AboutMe;