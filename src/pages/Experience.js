import { useEffect } from "react";

import styled from "styled-components";


const H2 = styled.h2`
    text-align: center;
    font-style: italic;
`

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  `

  const ChildDiv = styled.div`
    font-weight: 550;
    display:inline-block;
    box-shadow: 0 2px 20px 0 gray;
    color: black;
    background-color: #efd6ac;
    border-radius: 30px;
    margin: 20px;
    padding: 25px;
  `

const H1 = styled.h1`
  font-family: "Open Sans", sans-serif;
  text-align: left;
  font-size: 3.8rem;
  flex-wrap: wrap;
  color: whitesmoke;
  
  @media all and (min-width: 360px) and (max-width: 969px) {
  text-align: center;
  font-size: 2.5rem;
  flex-wrap: wrap;
  }
`

const PageSpacing = styled.div`
  margin: 100px 0;
`


const Experience = () => {

    useEffect(() => {
        document.title = "My Experience and Education"
    }, []);

    return (
        <>
        <PageSpacing>
        <div className="popup-window">
        <H1>My Professional Experience</H1>
        <ParentDiv>
            <ChildDiv>
                <H2><span style={{color: "#1C6E8C"}}>July 2024 - Present</span></H2>
                <ul>
                    <li><span style={{fontWeight: "bold"}}>Freelance project</span> - Creating a website for a subdivision of the medical genetics department at the Montreal University Health Centre</li>
                </ul>
            </ChildDiv>
        </ParentDiv>
        <br/>
        <br/>
        <H1>My Education and Internships</H1>
        <ParentDiv>
            <ChildDiv>
                <H2><span style={{color: "#1C6E8C"}}>October 2024</span></H2>
                <ul>
                    <li><span style={{fontWeight: "bold"}}>Frontend Developer Intern</span> at Loriginal.org, also known as Artur.Art</li>
                </ul>
            </ChildDiv>
        </ParentDiv>
        <br/>
        <ParentDiv>
            <ChildDiv>
                <H2><span style={{color: "#1C6E8C"}}>October 2023 - May 2024</span></H2>
                <ul>
                    <li><span style={{fontWeight: "bold"}}>Certificate</span> from the Concordia University Web Development Bootcamp</li>
                </ul>
            </ChildDiv>
        </ParentDiv>
        <br/>
        <ParentDiv>
            <ChildDiv>
                <H2><span style={{color: "#1C6E8C"}}>August 2017 - April 2021</span></H2>
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

export default Experience;