import { useEffect } from "react";

import styled from "styled-components";

import banffPhoto from "../images/wnam-amnath.JPG";

const Picture = styled.img`
  box-shadow: 0 2px 20px 0 #efd6ac;
  border-radius: 10px;
  height: 500px;
  width: 300px;
  object-fit: cover;

  @media all and (min-width: 360px) and (max-width: 969px) {
    height: 350px;
    width: 250px;
  }
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
    color: white;

    @media all and (min-width: 360px) and (max-width: 969px) {
    margin: 15px;
    padding: 5px;
  flex-wrap: wrap;
  }
`

const CenteredParagraph = styled.p`
    text-align: center;
    margin: 20px;
    padding: 15px;
    color: white;

@media all and (min-width: 360px) and (max-width: 969px) {
    margin: 10px;
    padding: 5px;
  flex-wrap: wrap;
  }
`

const H2 = styled.h2`
    text-align: center;
    font-style: italic;
`

const H3 = styled.h3`
    text-align: center;
    font-style: italic;
    color: white;
`

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  `

  const ChildDiv = styled.div`
    display:inline-block;
    box-shadow: 0 2px 20px 0 gray;
    color: black;
    background-color: #efd6ac;
    border-radius: 30px;
    margin: 20px;
    padding: 25px;
  `

const Anchor = styled.a`
    color: #efd6ac;
`

const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 60px;
  flex-wrap: wrap;
  color: white;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 50px;
    font-weight: 600;
  flex-wrap: wrap;
  }
`

const PageSpacing = styled.div`
  margin: 100px 0;
`

const OtherH2 = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 60px;
  flex-wrap: wrap;
  color: white;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 50px;
    font-weight: 600;
  flex-wrap: wrap;
  }
`


const AboutMe = () => {

    useEffect(() => {
        document.title = "About Me"
    }, []);

    return (
        <>
        <PageSpacing>
        <div className="body-space">
        <H1>About Me 🙋‍♂️</H1>
        <ImgDiv>
        <Picture src={banffPhoto} alt="Picture of William Nam-Amnath"></Picture>
        </ImgDiv>
        <h2 style={{fontStyle: "italic", color: "white"}}>👋 Hi there! </h2>
        <CenteredParagraph>My name is <span style={{color: "#0046EA"}}>William Nam-Amnath</span> 
        <br/>
        and I am a full-stack web developer from Montreal, Canada.</CenteredParagraph>
        <Paragraph>I am a junior developer having graduated from the Concordia University Web Development bootcamp program in May 2024. Throughout the program, I learned and practiced using the following techniques stacks/concepts: </Paragraph>
        <br/>
        <H3>Quoi De Neuf? 🤔</H3>
        <Paragraph>
        At the moment, I currently work at the Montreal Children Hospital as an administrative agent. However, I am actively looking for a position in web development. Since graduating in May, I have taken on a freelance contract from one of the colleagues I currently work with. <Anchor href="/nfib">Feel free to take a look!</Anchor>
        </Paragraph>
        <br/>
        <H3>Gaining New Knowledge 📚</H3>
        <Paragraph>
        During my free time, I enjoy learning and acquiring new skills. I am currently learning <span style={{color: "#01A7C2"}}>Typescript</span> and am looking forward to learning about other tech stacks and libraries. 
        </Paragraph>
        <br/>
        <H3>My Hobbies 🏀</H3>
        <Paragraph>
        If I’m not coding, you can find me playing basketball, listening to music or watching movies. 
        </Paragraph>
        <br/>
        <br/>
        <OtherH2>My Coding Philosophy</OtherH2>
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
        <OtherH2>My Education and Internships</OtherH2>
        <ParentDiv>
            <ChildDiv>
                <H2><span style={{color: "#0046EA"}}>October 2024 - Present</span></H2>
                <ul>
                    <li><span style={{fontWeight: "bold"}}>Frontend developer intern</span> for Loriginal.org, also known as Artur.Art</li>
                </ul>
            </ChildDiv>
        </ParentDiv>
        <br/>
        <ParentDiv>
            <ChildDiv>
                <H2><span style={{color: "#0046EA"}}>October 2023 - May 2024</span></H2>
                <ul>
                    <li><span style={{fontWeight: "bold"}}>Certificate</span> from the Concordia University Web Development Bootcamp</li>
                </ul>
            </ChildDiv>
        </ParentDiv>
        <br/>
        <ParentDiv>
            <ChildDiv>
                <H2><span style={{color: "#0046EA"}}>August 2017 - April 2021</span></H2>
                <ul>
                    <li><span style={{fontWeight: "bold"}}>Bachelor of Education</span> from McGill University</li>
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
        </PageSpacing>
        </>
    )
}; 

export default AboutMe;