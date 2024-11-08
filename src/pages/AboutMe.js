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
    font-size: 1.2rem;
    text-align: justify;
    margin: 0.6rem;
    padding: 1.5rem;
    line-height: 1.5;
    color: whitesmoke;

    @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 1rem;
    margin: 0.2rem;
    padding: 0.2rem;
  }
`

const CenteredParagraph = styled.p`
    font-size: 1.2rem;
    text-align: center;
    margin: 0.6rem;
    padding: 1.5rem;
    color: whitesmoke;

@media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 1rem;
  margin: 0.2rem;
  padding: 0.2rem;
  flex-wrap: wrap;
  }
`

const H3 = styled.h3`
    text-align: center;
    font-style: italic;
    color: white;
`

const Anchor = styled.a`
    color: #efd6ac;
    text-decoration: none;
`

const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 3.8rem;
  flex-wrap: wrap;
  color: whitesmoke;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 2.7rem;
  flex-wrap: wrap;
  }
`

const PageSpacing = styled.div`
  margin: 100px 0;
`

const OtherH2 = styled.h2`
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-size: 3.5rem;
  flex-wrap: wrap;
  color: white;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 2.3rem;
  flex-wrap: wrap;
  }
`


const AboutMe = () => {

    return (
        <>
        <PageSpacing>
        <div className="body-space">
        <H1>About Me</H1>
        <ImgDiv>
        <Picture src={banffPhoto} alt="Picture of William Nam-Amnath"></Picture>
        </ImgDiv>
        <br/>
        <CenteredParagraph>
        <h2 style={{fontStyle: "italic", color: "white"}}>👋 Hi there! </h2>
        My name is William Nam-Amnath and I am a full-stack web developer from Montreal, Canada.</CenteredParagraph>
        <br/>
        <Paragraph>I am a junior developer having graduated from the Concordia University Web Development bootcamp program in May 2024. Throughout the program, I learned about the <Anchor href="https://codefinity.com/blog/MERN-Stack-Web-Development?utm_source=google&utm_medium=cpc&utm_campaign=21380043065&utm_content=&utm_term=&gad_source=1&gclid=Cj0KCQiAire5BhCNARIsAM53K1j-s9VbvnQEd8gpDJHnjjP3ZcL5qiq2zNRQbkji1sUbIyR-YRCoitUaAv3EEALw_wcB">
        MERN stack</Anchor>  and worked on projects while using these languages and libraries.
        </Paragraph>
        <br/>
        <OtherH2>My Coding Philosophy</OtherH2>
        <Paragraph>
        As a developer, I believe patience is a key attribute to possess. As someone that enjoys taking on challenges, I understand that problem-solving is a skill that can’t be mastered overnight and I am willing to put in the time and effort to get over any obstacle. 
        </Paragraph>
        <br/>
        <Paragraph>
        Moreover, attention to detail is an essential and valuable aspect that I take pride in. As a developer that enjoys making sure that every frame is to my liking, I only provide my maximum effort to make sure that the product I deliver is of excellent quality, whether I’m working on a personal project or working in teams. 
        </Paragraph>
        <br/>
        <Paragraph>
        Lastly, as a developer, it is important that one stays organized. Whether we’re talking about team planning or something as simple as how you arrange your files in your project, it can be easy to lose track of your work and your progress. Therefore, staying organized is essential and is a quality that can be easy to neglect. 
        </Paragraph>
        <br/>
        <br/>
        <br/>
        <H3>Quoi De Neuf? 🤔</H3>
        <Paragraph>
        At the moment, I currently work at the Montreal Children Hospital as an administrative agent. However, I am actively looking for a position in web development. 
        <br/>
        <br/>
        Since graduating in May, I have taken on a freelance contract from one of the colleagues I currently work with. <Anchor href="/nfib">Feel free to take a look!</Anchor>
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
        </div>
        </PageSpacing>
        </>
    )
}; 

export default AboutMe;