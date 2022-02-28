import React from 'react'
import Typewriter from 'typewriter-effect';

import './style.scss'

import {ReactComponent as Pattern1} from '../../assets/pattern2.svg';

export default function index() {

    // new Typewriter('#typewriter', {
    //     strings: ['Hello', 'World'],
    //     autoStart: true,
    // });

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
                    I'm Sam Mathew <br/>
                    a <Typewriter 
                      options={{
                        strings: ['designer', 'teacher', 'maker'],
                        autoStart: true,
                        loop: true,
                        delay: 75,
                      }}/>
                </div>

                <div className="sub-heading">
                   <p>Currently managing <a href="https://www.blindvsnry.com/">blindvsnry</a> and CTO at <a href="https://getimbued.com/">Imbue Education</a></p>
                </div>

                <a href="/projects/" className="btn btn--primary">
                    See my work
                </a>

            </div>
        </div>
    )
}
