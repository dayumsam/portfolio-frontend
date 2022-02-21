import useFetchData from '../../hooks/use-fetch-data'

import './style.scss'

import ProjectCard from '../../components/ProjectCard/ProjectCard'

export default function Projects() {

    let baseUrl = process.env.REACT_APP_API_URL
    let url = `${baseUrl}/api/projects-page`;

    const {
        data,
        loading,
      } = useFetchData(url);

    return (
        <div className="work-section section">
            <div className="container">
                <section>
                    {!loading ? <h1 className="_heading"> {data.projects_title} </h1> : ''}
                    {!loading ? <p className="_subheading"> {data.projects_description} </p> : ''}

                    <div className="projects-wrapper">
                        {
                            data.projects ? 
                                data.projects.map((projectRow) => {
                                    return(
                                        <div className="row" key={projectRow.id}>
                                            {
                                                projectRow.project.map((project) => {
                                                    return(
                                                        <ProjectCard data={project} key={project.id} featured={project.featured}/>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            : <></>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
