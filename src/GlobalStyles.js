import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



body {
    background-color: whitesmoke;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500px;
    font-style: normal;  
    color: black;
    min-height: 100vh;
    overflow-x: hidden;
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

.tech-stack {
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 2px 20px 0 gray;
    color: #efd6ac;
    background-color: #efd6ac;
    border-radius: 40px;
    margin: 30px;
    padding: 25px;
}

.socials {
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
}

.project-stack {
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: black;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
}

.github, 
.linkedin,
.email {
    transition: transform 0.3s ease;

&:hover {
  transform: scale(1.2);
  cursor: pointer;
}
}

.div-inner {
    margin: 20px;
    padding: 15px;
}

.project-link {
    color: #efd6ac;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: black;
}

.body-space {
    gap: 2rem;
    padding: 0 2rem;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

label {
    font-weight: bold;
}

.input-field {
    width: auto;
    padding: 5px;
}

.msg-field {
    margin: 5px 0;
    width: 50%;
    padding: auto;
    resize: vertical;
    min-height: 100px;
}

.input-field,
.msg-field {
    border-radius: 2px;
}

.input-field,
.submit-btn {
    margin: 5px 0;
}

.home-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24;
  font-size: 50px;
}

.projects-section {
    text-align: center;
    justify-content: space-between;
}

.projects-img,
.text {
    display: inline-block;
    vertical-align: middle;
}

.projects-img {
    align-items: center;
}

.ul-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 2rem;
}

.title {
  font-size: 1.4em;
  margin: 1.5rem;
  right: 2rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.title,
.nav-link {
  display: block;
  text-decoration: none;
  color: white;
  padding: 0 1.5rem 0 0;
  margin: 0 0.5rem;

  @media all and (min-width: 360px) and (max-width: 969px) {
    display: block;
  text-decoration: none;
  color: white;
  padding: 0.7rem;
  margin: 0 0.5rem;
  border-radius: 0.5rem;
  }
}


.title {
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
}

.nav-link {
  transition: 0.3s ease;
}

.nav-link:not(.active):hover {
    transform: scale(1.2);
  color: #1D1D1D;

  @media all and (min-width: 360px) and (max-width: 969px) {
    transform: none;
    color: #1D1D1D;
  }
  }

.active {
  color: black;
}

nav ul {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media all and (min-width: 360px) and (max-width: 969px) {
    display: none;
    flex-direction: column;
    width: 97.9%;
    margin-bottom: 0.25rem;
  }
}

.menu-clicked {
  display: flex;
}

/* .nav {
    background-color: #faa307;
    box-shadow: 0 2px 10px 0 #343a40;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
    flex-wrap: wrap;
}

.nav a {
    color: inherit;
    text-decoration: none;
    transition: transform 0.5s ease;
}

.nav a:hover {
    color: inherit;
    transform: scale(1.1);
    cursor: pointer;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
} */

.footer {
    background-color: #faa307;
    box-shadow: 0 2px 10px 0 #343a40;
    font-size: 15px;
    gap: 10px;
    padding: 15px;
    flex-wrap: wrap;
}

@media all and (min-width: 969px) {

body {
    width: 100vw;
}

/* .nav {
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
} */

.projects-img {
    width: 40%;
    height: 40%;
}

.name-title {
    font-size: x-large;
    font-weight: 700;
}

.wd-position {
    font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
    flex-wrap: wrap;
}

.ul-btn {
        flex-wrap: wrap;
        align-items: center;
    }
}

.tech-stack {
        flex-wrap: wrap;
    }

@media all and (min-width: 360px) {

    * {
        max-width: auto;
    }

    .tech-stack {
        flex-wrap: wrap;
        margin: 0;
    }

    .ul-btn {
        flex-wrap: wrap;
        align-items: center;
    }

    .website-btn {
        justify-content: center;
    }

    /* .nav {
        width: 100vw;
        flex-wrap: wrap;
        justify-content: space-around;
    } */

    .links {
        font-size: medium;
        flex-wrap: wrap;
        text-align: center;
    }

    .name-title {
        font-size: xx-large;
        font-weight: 700;

    }

    .body-space {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        margin: 15px;
        padding: 15px;
    }

    .pj-img1 {
        max-width: 250px;
        max-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        flex-wrap: wrap;
    }

    .pj-img2 {
        max-width: 250px;
        max-height: 200px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        flex-wrap: wrap;
    }

    .text {
        max-width: 75vw;
    }

    h1 {
        font-size: 40px;
    }

    p {
    font-size: 23px;
    flex-wrap: wrap;
    text-align: center;
    }

    h3 {
        flex-wrap: wrap;
    }

    .wd-position {
        font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;

    flex-wrap: wrap;
    font-size: 50px;
}

}
`;

export default GlobalStyles;
