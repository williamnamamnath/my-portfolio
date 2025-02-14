import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
    scroll-behavior: smooth;
}

body {
    font-family: "Poppins", sans-serif;
    background-image: radial-gradient(circle, #1F184E, #0A0529);
    margin: 0;
    overflow-x: hidden;
    color: whitesmoke;

    @media all and (min-width: 969px) {
        width: 100vw;
    }
}

h1 {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: 75px;
}

h2 {
    display: flex;
    justify-content: center;
    align-items: center;
}

h3 {
    justify-content: center;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
}

h4 {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
}

.project-space {
    color: whitesmoke;
}

.body-space {
    max-width: 1300px !important;
    margin: 0 auto;
    position: relative;
    overflow-x: hidden;

    @media all and (max-width: 1300px) {
        padding: 0 1.5rem;
        
    }
}

.mobile-nav {
    width: 100vw;
    height: 100vh;
    display: none;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999 !important;
    opacity: 0;
    box-shadow: 0 29px 80px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    transform: translateX(-100vw);

    @media (max-width: 960px) {
        display: block;
    }
}

.mobile-nav.active {
    opacity: 1;
    transform: translateX(0);
}

.mobile-nav ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    list-style: none;
    margin-left: -2rem;
}

.top-btn a {
    position: fixed;
    background-color: lightgray;
    bottom: 5rem;
    right: 1rem;
    padding: 0.6rem 0.5rem 0.5rem 0.5rem;
    border-radius: 20px;
}

.top-btn img {
    height: 2rem;
}

.footer {
    background-color: #0A0529;
    box-shadow: 0 2px 10px 0 #0046EA;
    font-size: 15px;
    gap: 10px;
    padding: 15px;
    flex-wrap: wrap;
    color: white;
}
`;

export default GlobalStyles;
