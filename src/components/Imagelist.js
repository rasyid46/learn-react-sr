import React from 'react';
import ImageCard from './ImageCard';
const ImageList= props => {
    
  // const gambar =  props.images.map(({id,urls , description})=>{
    const gambar =  props.images.map(image =>{            
     return <ImageCard key={image.id} image={image}/>;
    //  return   <img key={id} alt={description} src={urls.regular} /> 
     
  });
  
    return <div className="image-list">{gambar}</div>;
}

export default ImageList;
 