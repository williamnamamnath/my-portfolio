import styled from "styled-components";

const MobileNavbar = ({ isOpen, toggleMenu }) => {


    return (
        <>
        <div className={`mobile-nav ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <NavContainer>
                <CloseMenu>Welcome to my portfolio!</CloseMenu>
                <hr/>
                <br/>

            <ul>
            <li>
                <MenuItem href="all-projects">My Projects</MenuItem>
              </li>
              {/* <li>
                <MenuItem href="/experience">My Professional Experience</MenuItem>
              </li>
              <li>
                <MenuItem href="/contact">My Socials</MenuItem>
              </li> */}
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

// const NavbarName = styled.a`
//     text-decoration: none;
//     color: white;
//     font-size: 1.5em;
//     cursor: pointer;
// `

const NavContainer = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: #0D164B;
    padding: 2rem;
`

export default MobileNavbar;