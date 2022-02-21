import React from 'react'

import './style.scss'

import {ReactComponent as Pattern1} from '../../assets/pattern2.svg';

export default function index() {
    return (
        <div className="section" style={{marginTop:'auto'}}>
            <div className="container home-content">
                <div className="clip">
                    <div className="img-wrapper">
                        <Pattern1/>
                    </div>
                </div>

                <div className="heading">
                    Hello! <br/>
                    I'm Sam Mathew & I 
                    am a
                </div>

                <div className="sub-heading">
                   <p>Currently managing <a href="https://www.blindvsnry.com/">blindvsnry</a> and CTO at <a href="https://getimbued.com/">Imbue Education</a></p>
                </div>

                <a href="/about/" className="btn btn--primary">
                    See my work
                </a>

            </div>
        </div>
    )
}
