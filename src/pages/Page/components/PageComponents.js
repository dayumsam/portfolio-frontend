import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { useState } from 'react';

function Heading({data}) {
  return (
    <h1 className='heading'>{data.heading}</h1>
  )
}

function Description({data}) {
  return (
    <div className="description">
      <ReactMarkdown children={data.description} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}/>
    </div>
  )
}

function ImageSection({data}) {
  const imageData = (data.images);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="image-section">
      <img src={`${process.env.REACT_APP_API_URL}${imageData[currentImage].url}`} className="active-image" alt="" />
      <div className="scroll-wrapper" style={{  display: 'flex',  overflow: 'auto'}}> 
      <div className="preview" style={{gridTemplateColumns: `repeat(${imageData.length * 2}, 1fr)`}}>
        {
          imageData.map((image,index) => {
            return(
              <div className="preview-image" key={image.id} onClick={()=>{setCurrentImage(index)}}>
                <img src={`${process.env.REACT_APP_API_URL}${image.url}`} />
                {/* <img src={`${process.env.REACT_APP_API_URL}${image.formats ? image.formats.small.url : image.url}`} /> */}
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export {Heading, Description, ImageSection}