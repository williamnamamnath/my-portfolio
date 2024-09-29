import styled from "styled-components";

import user from "../images/user.png";
import email from "../images/134146_mail_email_icon.png";
import github from "../images/211904_social_github_icon.png";
import linkedin from "../images/linkedin-icon.png";

const Name = styled.a`
font-size: 2rem;
`
const NavBarLinks = styled.a`
font-size: larger;
`

const NavBar = () => {
    return (
        <>
        <nav className="nav">
        <Name href="/" className="name-title">William Nam-Amnath</Name>
            <ul>
            <li>
                <NavBarLinks href="/about"><img src={user} alt="github logo"/></NavBarLinks>
              </li>
              <li>
                <NavBarLinks href="https://github.com/williamnamamnath" className="github"><img src={github} alt="github logo"/></NavBarLinks>
              </li>
              <li>
                <NavBarLinks href="https://www.linkedin.com/in/william-nam-amnath-a270b2157/" className="linkedin"><img src={linkedin} alt="linkedin logo"/></NavBarLinks>
              </li>
              <li>
              <NavBarLinks href="mailto:william.nam-amnath@mail.mcgill.ca" className="email"><img src={email} alt="email logo"/></NavBarLinks>
              </li>
            </ul>
        </nav>
        </>
    )
}; 

export default NavBar;