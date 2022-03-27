import React, { useState, useRef, useContext } from "react";
import axios from 'axios';

import { MouseContext } from "../../context/mouse-context";

import './style.scss';

export default function Navbar() {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const [contactActive, setContactActive] = useState(false);
    const [menuActive, setMenuActive] = useState(false);

    const submitButton = useRef(null);

    const [inputField , setInputField] = useState({
        email: '',
        message: '',
        _gotcha: '',
    })

    let baseUrl = process.env.REACT_APP_API_URL

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(inputField['_gotcha'] !== undefined){
            return;
        }
        else{
            submitButton.current.innerHTML = 'Sending...';
            axios
            .post(`${baseUrl}/api/contact/`, {
                email: inputField.email,
                message: inputField.message,
            })
            .then(response => {
                if (response.status === 200){
                    submitButton.current.innerHTML = 'Sent';
                }else{
                    submitButton.current.innerHTML = 'Error';
                }
            });
        }
        }

    const toggleContact = () => {
        setContactActive(!contactActive);
    }

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    
    let links = [
        {
            'name': "About",
            'link': '/about/'
        },
        {
            'name': "Projects",
            'link': '/projects/'
        }
    ]

    return (
        <nav className={`navbar section${contactActive|menuActive ? ' light' : ''}`}>
            <div className={`contact${contactActive ? ' active' : ''}`}>
                <div className="panel left">
                    <h1>
                        Let's create<br/> awesomeness together
                    </h1>
                </div>
                <div className="panel right">
                    <div className="form-wrapper">
                        <h1>Say hello!</h1>
                        <form action="/api/contact/" method="POST" onSubmit={handleSubmit}>
                            <div className="form-field">
                                <label>Your email:</label>
                                <input 
                                type="email" 
                                name="email"  
                                onChange={inputsHandler}
                                value={inputField.first_name}
                                required/>
                            </div>

                            <div className="form-field">
                                <label>Your message:</label>
                                <textarea 
                                name="message" 
                                rows="5"
                                onChange={inputsHandler}
                                value={inputField.first_name}
                                required></textarea>
                            </div>

                            <input type="text" onChange={inputsHandler} name="_gotcha" style={{display:'none'}} />
                            <button type="submit" onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} ref={submitButton} className="btn btn--submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className={`menu${menuActive ? ' active' : ''}`}>
                <div className="panel"> 
                    {
                        links.map((link, index) => <a key={index}  href={link.link} className="nav-link">{link.name}</a> )
                    }
                    <span className={`nav-link${contactActive ? ' active' : ''}`} onClick={toggleContact}>Get in Touch</span>
                </div>
            </div>
            <div className="container">
                <a href="/" className={`logo ${menuActive ? ' light' : ''}`}>dayumsam.</a>
                <div className="nav-links">
                    {
                        links.map((link, index) => <a key={index} onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} href={link.link} className="nav-link">{link.name}</a> )
                    }
                    <span className={`nav-link${contactActive ? ' active' : ''}`} onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} onClick={toggleContact}>Get in Touch</span>

                    {contactActive ? <button className={`btn btn--dark`} onClick={toggleContact}>Close</button> : <button className="btn btn--dark" onClick={toggleMenu}  onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")}>{menuActive ? 'Close' : 'Menu'}</button>}
                    
                </div>
            </div>
        </nav>
    )
}
