import React from 'react';

const ImageList= props => {
    
  const gambar =  props.images.map((image)=>{
               console.log(image.urls.small);

     return  <div key={image.id}>
            <img src={image.urls.small} /> 
     </div>
     
  });
  
    return <div>{gambar}</div>;
}

export default ImageList;
 