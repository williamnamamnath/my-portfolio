import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    flex-wrap: wrap;
}

html, body {
    overflow-x: hidden;
}

body {
    background-color: #343a40;
    margin: 0;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500px;
    font-style: normal;  
    color: #efd6ac;
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
    box-shadow: 0 2px 20px 0 #efd6ac;
    color: black;
    background-color: black;
    border-radius: 40px;
    margin: 20px;
    padding: 15px;
}

.socials {
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 2px 20px 0 #efd6ac;
    color: black;
    border-radius: 30px;
    margin: 20px;
    padding: 15px;
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

.pj-img1 {
    width: 500px;
    height: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.pj-img2 {
    width: 400px;
    height: 375px;
    display: block;
    margin-left: auto;
    margin-right: auto;
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

.website-btn {
  align-items: center;
  background-color: #fee6e3;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-size: 20px;
  font-weight: bold;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.website-btn:after {
  background-color: #111;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.website-btn:hover:after {
  transform: translate(0, 0);
}

.website-btn:active {
  background-color: #ffdeda;
  outline: 0;
}

.website-btn:hover {
  outline: 0;
}

.nav {
    box-shadow: 0 2px 20px 0 rgba(0,0,0,.2);
    display: flex; 
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 0 2rem;
    flex-wrap: wrap;
}

.nav a {
    color: inherit;
    text-decoration: none;
}

.nav a:hover {
    color: inherit;
    text-decoration: underline;
}

.nav ul {
    display: flex;
    list-style: none;
    gap: 2rem;
}

@media all and (min-width: 969px) {

body {
    width: 100vw;
}

.nav {
    width: 100vw;
    flex-wrap: wrap;
    justify-content: space-around;
}

.projects-img {
    width: 40%;
    height: 40%;
}

.name-title {
    font-size: x-large;
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

    .nav {
        width: 100vw;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    .links {
        font-size: medium;
        flex-wrap: wrap;
        text-align: center;
    }

    .name-title {
        font-size: xx-large;
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
