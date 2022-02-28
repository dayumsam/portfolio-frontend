import React from 'react'

import './style.scss'

export default function ProjectCard({featured, data}) {

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

                <a href={data.work.url} className="project__link">View Case Study</a>
            </div>

            
            {featured ? 
                    <>
                        {data.work ? <div className="img-wrapper" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}${data.work.preview_image.url}`}}/> : <></>}
                    </>
                : <></>}
        </div>
    )
}
