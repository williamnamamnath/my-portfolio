import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styled from "styled-components";

// import user from "../images/user.png";
// import email from "../images/134146_mail_email_icon.png";
// import github from "../images/211904_social_github_icon.png";
// import linkedin from "../images/linkedin-icon.png";

const NavBar = () => {

  const [menuClicked, setMenuClicked] = useState(false);

  const handleClick = () => {
      setMenuClicked(!menuClicked)
  };

    return (
        <>
        <Nav>
        <Link to="/" className="title">William Nam-Amnath</Link>
        <Div onClick={handleClick}>
                <Span></Span>
                <Span></Span>
                <Span></Span>
            </Div>
            <ul className={menuClicked ? "menu-clicked" : ""}>
              <Li>
                <NavLink to="/about" className="nav-link">About Me</NavLink>
              </Li>
              <Li>
                <NavLink to="/all-projects" className="nav-link">My Projects</NavLink>
              </Li>
              <Li>
              <NavLink to="/socials" className="nav-link">My Socials</NavLink>
              </Li>
            </ul>
        </Nav>
        </>
    )
}; 


/* <Li>
<NavLink href="/about"><img src={user} alt="github logo"/></NavLink>
</Li>
<Li>
<NavLink href="https://github.com/williamnamamnath" className="github"><img src={github} alt="github logo"/></NavLink>
</Li>
<Li>
<NavLink href="https://www.linkedin.com/in/william-nam-amnath-a270b2157/" className="linkedin"><img src={linkedin} alt="linkedin logo"/></NavLink>
</Li>
<Li>
<NavLink href="mailto:william.nam-amnath@mail.mcgill.ca" className="email"><img src={email} alt="email logo"/></NavLink>
</Li> */


const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #245BDE;
    box-shadow: 0px 3px 3px #2048A8;

    @media all and (min-width: 360px) and (max-width: 969px) {
        flex-direction: column;
        align-items: start;
        width: 100vw;
    }
`


const Li = styled.li`
    list-style: none;
    font-weight: bold;
    
    @media all and (min-width: 360px) and (max-width: 969px) {
        width: 100%;
        text-align: center;
    }
    `

const Div = styled.div`
    display: none;
    position: absolute;
    top: 0.6rem;
    right: 0.5rem;
    flex-direction: column;
    justify-content: space-between;
    width: 2.2rem;
    height: 2rem;
    
    &:hover {
        cursor: pointer;
    }
    
    @media all and (min-width: 360px) and (max-width: 969px) {
        display: flex;
        right: 2rem;
    }
    `

const Span = styled.span`
    height: 0.4rem;
    width: 100%;
    background-color: white;
    border-radius: 0.2rem;
    `

export default NavBar;