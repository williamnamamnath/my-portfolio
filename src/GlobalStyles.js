import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    background-color: #C5D5EA;
    font-family: "Noto Sans Display";
}

h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 75px;
    text-decoration: underline;
}

h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: auto;
}

p {
    display: flex;
    font-size: 25px;
}

.tech-stack {
    display: flex; 
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
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
    display: flex; 
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
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

@media (min-width: 768px) {
  .website-btn {
    padding: 0 40px;
  }
}

.nav {
    background-color: #333;
    color: white;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 0 2rem;
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
`;

export default GlobalStyles;