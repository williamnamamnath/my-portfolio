import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import email from "../images/small-email.png";
import github from "../images/small-github.png";
import linkedin from "../images/small-linkedin.png"; 



const MobileNavbar = ({ isOpen, toggleMenu }) => {

    const navigate = useNavigate();

const navProjects = () => {
  navigate('/projects'); 
};

const navExperience = () => {
    navigate('/experience'); 
  };


    return (
        <>
        <div className={`mobile-nav ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <NavContainer>
                <CloseMenu>Welcome to my portfolio!</CloseMenu>
                <hr/>
                <br/>

            <ul>
            <li>
                <MenuItem href="/">Home</MenuItem>
              </li>
            <li>
                <MenuItem onClick={navProjects}>My Projects</MenuItem>
              </li>
              <li>
                <MenuItem onClick={navExperience}>My Professional Experience</MenuItem>
              </li>
              <li>
              <SocialsDiv>
                <SocialLogo href="https://github.com/williamnamamnath" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo"/></SocialLogo>
                <SocialLogo href="https://www.linkedin.com/in/william-nam-amnath/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo"/></SocialLogo>
                <SocialLogo href="mailto:william.nam-amnath@mail.mcgill.ca" target="_blank" rel="noopener noreferrer"><img src={email} alt="email logo"/></SocialLogo>
                </SocialsDiv>
              </li>
            </ul>
            </NavContainer>
        </div>
        </>
    )
}; 

const MenuItem = styled.a`
    text-decoration: none;
    font-size: 1rem;
    color: white;
    position: relative;
    cursor: pointer;

    &:before {
        content: "";
        width: 2rem;
        height: 0.2rem;
        background: linear-gradient(90deg, #3672FF 0%, #0046EA 100%);
        border-radius: 0.5rem;
        position: absolute;
        bottom: -0.6rem;
        opacity: 0;
        transform: translateX(-1.5rem);
        transition: all 0.3s ease;
    }

    &:hover::before {
        width: 100%;
        transform: translateX(0);
        opacity: 1;
    }
`

const CloseMenu = styled.a`
    text-decoration: none;
    text-align: center;
    font-size: 2rem;
    color: white;
    position: relative;
    cursor: pointer;
`

const NavContainer = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: #0D164B;
    padding: 2rem;
`

const SocialsDiv = styled.div`
    display: flex; 
    justify-content: left;
    align-items: left;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 0;
    padding: 1rem 0;
`

const SocialLogo = styled.a`
  cursor: pointer;
`

export default MobileNavbar;