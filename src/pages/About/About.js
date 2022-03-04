import useFetchData from '../../hooks/use-fetch-data'

import './style.scss'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

import {ReactComponent as Pattern1} from '../../assets/pattern2.svg';


export default function About() {
    let baseUrl = process.env.REACT_APP_API_URL
    let url = `${baseUrl}/api/about-page/`;

    const {
        data,
        loading,
      } = useFetchData(url);

    return (
        <div className='section about'>

            <div className="clip">
                <div className="img-wrapper">
                    <Pattern1/>
                </div>
            </div>

            <div className="container about">
                <section className="about-section section">
                    {data.title_image ? <img src={`${baseUrl}${data.title_image.url}`} alt="profile-img" className="profile-img" /> : <></>}
                    <div className="content">
                        <p className="heading">
                            Sam Mathew
                        </p>
                        {
                            !loading ? <p> {data.title_description} </p> : ''
                        }
                        <p>
                        </p>
                    </div>
                </section>

                <section className='story-section' style={{position: 'relative'}}>

                    <div className="pattern1">
                            <Pattern1/>
                    </div>

                    {!loading ?  <>
                        <h1 className="_heading">{data.story_title}</h1>
                        <p className="_content">{data.story_description}</p>
                    </> : ''}

                    <div className="stats">
                        { data.stats ?
                            data.stats.map((stat, id) => {
                            return(
                                <div key={id} className="stat">
                                    <div className="stat__number">
                                        {stat.number}+
                                    </div>
                                    <div className="stat__title">
                                        {stat.title}
                                    </div>
                                </div>
                            )
                        }) : <></>
                        }
                    </div>

                    <div className="work">
                        {  data.projects?
                                data.projects.map((project) => {
                                    return(
                                        <ProjectCard data={project} key={project.id} featured={project.featured}/>
                                    )
                                })
                            : <></>
                        }
                        {/* <ProjectCard/> */}
                    </div>
                </section>

                <section>
                    {
                        !loading ? <>
                            <h1 className="_heading">{data.testimonial_title}</h1>
                            <p className="_subheading">{data.testimonial_description}</p>
                        </> : ''
                    }
                    <div className="testimonial-cards">
                        { data.testimonials ?
                            data.testimonials.map((testimonial, id) => {

                            return(
                                <div className="testimonial-card" key={id}>

                                <p className="testimonial-title">{testimonial.title}</p>
    
                                <p className="testimonial">{testimonial.testimonial}</p>
    
                                <div className="testimonial-about">
                                    {testimonial.image ? <img src={`${baseUrl}${testimonial.image.url}`} alt="" className="testimonial-img" /> : <></>}
                                    <div>
                                    <p className="testimonial-name">
                                        {testimonial.name}
                                    </p>
                                    <p className="testimonial-designation">
                                        {testimonial.designation}
                                    </p>
                                    </div>
                                </div>
                            </div>
                            )
                        }) : <></>
                        }
                    </div>
                </section>

                <section className="centered collab">
                    <h1 className="collab-tagline">Lets create something together!</h1>
                    <button className="btn btn--primary" >Drop me a message!</button>
                </section>
            </div>
        </div>
    )   
}
