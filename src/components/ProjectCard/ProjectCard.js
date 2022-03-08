import React, { useContext } from "react";
import { MouseContext } from "../../context/mouse-context";

import './style.scss'

export default function ProjectCard({featured, data}) {

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <div className={featured ? 'feature-card' : 'blog-card'}>
            <div className="project">
                <p className="project__type">
                    Full Stack Webapp
                </p>

                <h1 className="project__title">{data.work.title}</h1>

                <p className="project__description">
                {data.work.description}
                </p>

                <a href={data.work.url} onMouseEnter={() => cursorChangeHandler("large")} onMouseLeave={() => cursorChangeHandler("")} className="project__link">View Case Study</a>
            </div>

            
            {featured ? 
                    <>
                        {data.work ? <div className="img-wrapper" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}${data.work.preview_image.url}`}}/> : <></>}
                    </>
                : <></>}
        </div>
    )
}
