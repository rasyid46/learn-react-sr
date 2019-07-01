import React from 'react';

const ImageList= props => {
    
  const gambar =  props.images.map((image)=>{
               console.log(image.urls);

     return  <div key={image.id}>
            <img src={image.urls.regular} /> 
     </div>
     
  });
  
    return <div className="image-list">{gambar}</div>;
}

export default ImageList;
 