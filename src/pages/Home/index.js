import { useContext } from "react";

import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';

import {ReactComponent as Pattern1} from '../../assets/pattern2.svg';

import { MouseContext } from "../../context/mouse-context";

import './style.scss'

export default function Home() {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

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
                   <p>Currently managing&nbsp;
                       <a onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} href="https://www.blindvsnry.com/">blindvsnry</a> and CTO at&nbsp;
                       <a onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} href="https://getimbued.com/">Imbue Education</a>
                    </p>
                </div>

                <a href="/projects/" onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} className="btn btn--primary">
                    See my work
                </a>

            </div>
        </div>
    )
}
