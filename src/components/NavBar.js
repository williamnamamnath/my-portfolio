import styled from "styled-components";

const NavBarLinks = styled.a`
font-size: larger;
`

const NavBar = () => {
    return (
        <>
        <nav className="nav">
            <a href="/" className="name-title">William Nam-Amnath</a>
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