import React from 'react';
import { Image } from 'semantic-ui-react'
import ImageSource from '../map-image.jpg'

const  Map = (props) => {
     return (
         <div style={{width:'100%', height:'30%px'}}>
            <Image 
            src={ImageSource}
            fluid 
            style={{width:'100%', height:'450px'}}
              />
        </div>
     )

}
 export default Map;