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
    text-align: center;
    margin: 0.6rem;
    padding: 1.5rem;
    line-height: 1.7;
    color: whitesmoke;
    box-shadow: 0px 2px 20px #0046EA;
    outline: solid 3px #0046EA;
    border-radius: 1rem;
    background-color: #383260;

    @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 1rem;
    margin: 0;
    padding: 0.7rem;
    line-height: 1.7;
  }
`

const OtherParagraph = styled.p`
    font-size: 1.2rem;
    text-align: center;
    margin: 0.6rem;
    padding: 1.5rem;
    line-height: 1.7;
    color: whitesmoke;

    @media all and (min-width: 360px) and (max-width: 969px) {
    font-size: 1rem;
    margin: 0.2rem;
    padding: 1rem;
    line-height: 1.5;
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
    color: white;
`

const Anchor = styled.a`
    color: #01A7C2;
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
  font-size: 3rem;
  flex-wrap: wrap;
  color: white;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
  font-size: 2.1rem;
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
        <OtherParagraph>I am a junior developer having graduated from the Concordia University Web Development bootcamp program in May 2024. Throughout the program, I learned about the <Anchor href="https://codefinity.com/blog/MERN-Stack-Web-Development?utm_source=google&utm_medium=cpc&utm_campaign=21380043065&utm_content=&utm_term=&gad_source=1&gclid=Cj0KCQiAire5BhCNARIsAM53K1j-s9VbvnQEd8gpDJHnjjP3ZcL5qiq2zNRQbkji1sUbIyR-YRCoitUaAv3EEALw_wcB">
        MERN stack</Anchor>  and worked on projects while using this tech stack.
        </OtherParagraph>
        <br/>        
        <br/>
        <br/>
        <Paragraph>
        <OtherH2>My Coding Philosophy</OtherH2>
        As a developer, I believe patience is a key attribute to possess. As someone that enjoys taking on challenges, I understand that problem-solving is a skill that can’t be mastered overnight and I am willing to put in the time and effort to get over any obstacle. 
        <br/>
        <br/>
        Moreover, attention to detail is an essential and valuable aspect that I take pride in. As a developer that enjoys making sure that every frame is to my liking, I only provide my maximum effort to make sure that the product I deliver is of excellent quality, whether I’m working on a personal project or working in teams. 
        <br/>
        <br/>
        In addition, as a developer, it is important that one stays organized. Whether we’re talking about team planning or something as simple as how you arrange your files in your project, it can be easy to lose track of your work and your progress. Therefore, staying organized is essential and is a quality that can be easy to neglect. 
        </Paragraph>
        <br/>
        <br/>
        <br/>
        <br/>
        <Paragraph>
        <H3>Constant Growth is Key 📚</H3>
        As a developer, I enjoy learning and acquiring new skills to add to my repertoire in order to become more versatile. I am currently learning <Anchor href="https://flutter.dev/?gad_source=1&gclid=CjwKCAiApY-7BhBjEiwAQMrrEWtDcYA4zY_R4N_9fS0BlcRoVui6y9xUtQDstBCg7vL5rlpMdBOIHhoCO94QAvD_BwE&gclsrc=aw.ds" target="_blank" rel="noopener noreferrer">Flutter</Anchor> and <Anchor href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">Bootstrap</Anchor> and I am looking forward to learning more tech stacks and libraries soon. Next on my list is <Anchor href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer">Ruby</Anchor>.
        </Paragraph>
        <br/>
        <br/>
        <br/>
        <br/>
        <Paragraph>
        <H3>My Hobbies 🏀</H3>
        When I’m not coding, I like to do activities that take my mind off from work to give myself a break. More specifically, I love playing some basketball or going to the gym to let loose. I also enjoy listening to music or watching movies if I'm not looking to be too active. Speaking of horror movies, I always love some good recommendations so send them my way if you have any!
        </Paragraph>
        <br/>
        <br/>
        </div>
        </PageSpacing>
        </>
    )
}; 

export default AboutMe;