import React, { useState, useEffect, useRef, useContext } from "react";

import { MouseContext } from "../../context/mouse-context";

import {ReactComponent as Pattern1} from '../../assets/rangoli_1.svg';

import './style.scss';

export default function Cursor() {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const [cursorXY, setCursorXY] = useState({ x: -100, y: -100 })
    const [cursorVisibility, setCursorVisibility] = useState(true)

    const cursor = useRef(null);

    useEffect(() => {
    
        const moveCursor = (e) => {
          const x = e.clientX - 8
          const y = e.clientY - 8
    
          setCursorXY({ x, y })
        }
    
        const cursorVisible = (state) => {
            setCursorVisibility(state)
        }
    
        document.addEventListener('mouseleave', () => cursorVisible(false))
        document.addEventListener('mouseenter', () => cursorVisible(true))
        window.addEventListener('mousemove', moveCursor)
    
        return () => {
          window.removeEventListener('mousemove', moveCursor)
          window.removeEventListener('mouseenter', cursorVisible(true))
          window.removeEventListener('mouseleave', cursorVisible(false))
        }
    
      }, [])

  return (
    <div className={`cursor${cursorVisibility? '' : ' hidden'} ${cursorType}` }
    ref={cursor}
    style={{
      left: `${cursorXY.x}px`,
      top: `${cursorXY.y}px`}}>
    </div>
  )
}
