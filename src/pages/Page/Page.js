import useFetchData from '../../hooks/use-fetch-data'
import { useParams } from "react-router-dom";

import {Heading, Description, ImageSection} from './components/PageComponents';

import './style.scss'

export default function Page() {

  let { id } = useParams();

  let baseUrl = process.env.REACT_APP_API_URL
  let url = `${baseUrl}/api/works/${id}`;

  const {
      data,
    } = useFetchData(url);

  const renderComponent = (component,index) => {
    switch(component['__component']){
      case 'projects.heading':
        return (
          <Heading key={index} data={component}/>
        )
      case 'projects.description':
        return (
          <Description key={index} data={component}/>
        )
      case 'projects.image-section':
        return (
          <ImageSection key={index} data={component}/>
        )
      default:
        return(
          <></>
        )
    }
  }

  return (
    <div className='section page'>

      {
        data.feature_image ? <div className="img-wrapper feature-img" style={{backgroundImage: `url(${process.env.REACT_APP_API_URL}${data.feature_image.url})`}}/> : <></>
      }

      <div className="container page">
        { 
        data.page_structure ?
        data.page_structure.map((component,index) => (
          renderComponent(component,index)
        ))
        : <></>
      }
      </div>
    </div>
  )
}
