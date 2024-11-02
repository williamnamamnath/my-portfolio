import { useState } from "react";

import styled from "styled-components";
import MobileNavbar from "./MobileNavbar";

const NavBar = () => {

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenu = () => {
        setMenuClicked(!menuClicked);
    };

    return (
        <>
        <MobileNavbar isOpen={menuClicked} toggleMenu={toggleMenu} />

        <Nav>
            <NavContent>
                <NavbarName href="/">William Nam-Amnath</NavbarName>
            <Ul>
              <Li>
                <MenuItem href="/about">About Me</MenuItem>
              </Li>
              <Li>
                <MenuItem href="all-projects">My Projects</MenuItem>
              </Li>
              {/* <Li>
              <NavLink to="/socials" className="nav-link">My Socials</NavLink>
              </Li> */}
            </Ul>
            <Button onClick={toggleMenu}>
                <span class={"material-symbols-outlined"} style={{fontSize: "1.8rem"}}>
                    {menuClicked ? "Close" : "Menu"}
                </span>
            </Button>
            </NavContent>
        </Nav>
        </>
    )
}; 


const Nav = styled.nav`
    padding: 0.5rem 0;
    position: sticky;
    top: 0;
    z-index: 30;
    backdrop-filter: blur(50px);
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 2px 10px #0046EA;

    @media all and (max-width: 1325px) {
        padding: 0 2rem;
    }
`

const NavContent = styled.div`
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin: 0 auto;
`

const Ul = styled.ul`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;

    @media all and (max-width: 960px) {
        display: none;
    }
`

const Li = styled.li`
    color: white;
    margin: 0 1.5rem;
`

const MenuItem = styled.a`
    text-decoration: none;
    font-size: 0.9rem;
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

const NavbarName = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.7em;
    cursor: pointer;

    @media all and (max-width: 960px) {
        content: "William";
    }
`

const Button = styled.button`
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.4rem;
    color: white;
    background: linear-gradient(90deg, #3672FF 0%, #0046EA 100%);
    line-height: 0;
    cursor: pointer;
    transition: all 0.4s ease;
    display: none;

    &:hover {
        color: #0046EA;
        background: black;
        border: 1px solid #0046EA;
    }

    @media all and (max-width: 960px) {
        display: block;
    }
`

export default NavBar;