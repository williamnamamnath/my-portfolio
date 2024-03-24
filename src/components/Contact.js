import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    useEffect(() => {
        document.title = "Contact"
    }, []);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");


    const userFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const userLastName = (event) => {
        setLastName(event.target.value);
    };

    const userMessage = (event) => {
        setMessage(event.target.value);
    };

const blankInput = !firstName || !lastName || !message;
    
    return (
<form className="form">
<h1>Let's Get In Touch!</h1>
<h2>For any questions or inquiries, please feel free to leave a message. Thank you!</h2>
<br/>
<label>First Name: </label>
<input className="input-field" type="text" value={firstName} onChange={userFirstName} placeholder="Your first name"></input>
<br/>
<label>Last Name: </label>
<input className="input-field" type="text" value={lastName} onChange={userLastName} placeholder="Your last name"></input>
<br/>
<label>Your Message: </label>
<input className="msg-field" type="text" value={message} onChange={userMessage} placeholder="Your message"></input>
<br/>
<Link to="/success" style={{color:"black", textDecoration:"none"}}>
    <button className="website-btn" type="submit" disabled={blankInput}>Submit</button>
</Link> 
<br/>
<br/>
<Link to="/" style={{color:"black", textDecoration:"none"}}>
<div className="home-btn">
<button className="website-btn">
<span className="material-symbols-outlined">Home</span>
</button>
</div>
</Link>
<br/>
</form>
    )
};

export default Contact;