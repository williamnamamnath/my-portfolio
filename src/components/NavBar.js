import styled from "styled-components";

import logo from "../images/icons8-w-48.png";

const NavBarLinks = styled.a`
font-size: larger;
`

const NavBar = () => {
    return (
        <>
        <nav className="nav">
            <a href="/" className="name-title"><img src={logo} alt="Logo of William Nam-Amnath's Portfolio"></img></a>
            <ul>
              <li>
                <NavBarLinks href="https://github.com/williamnamamnath" className="links">Github</NavBarLinks>
              </li>
              <li>
                <NavBarLinks href="https://www.linkedin.com/in/william-nam-amnath-a270b2157/" className="links">LinkedIn</NavBarLinks>
              </li>
              <li>
              <NavBarLinks href="/contact" className="links">Contact</NavBarLinks>
              </li>
            </ul>
        </nav>
        </>
    )
}; 

export default NavBar;