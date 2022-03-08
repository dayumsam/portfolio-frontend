import React, { useContext } from "react";
import { MouseContext } from "../../context/mouse-context";

import './style.scss'

export default function Footer() {

    const {cursorChangeHandler } = useContext(MouseContext);

    let links = [
        {
            'name': "Instagram",
            'link': 'https://www.instagram.com/dayumsam_/'
        },
        {
            'name': "Youtube",
            'link': 'https://www.youtube.com/channel/UC8wi7Df7OqfioeL6iPJ3KJA'
        },
        {
            'name': "Twitter",
            'link': 'https://twitter.com/dayumsam22'
        }
    ]

    return (
        <footer className="section footer">
            <div className="container">
            {
                links.map((link, index) => <a key={index} onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} href={link.link} target="_blank" className="social-link">{link.name}</a> )
            }
            <div className="rule"></div>
            </div>
        </footer>
    )
}
