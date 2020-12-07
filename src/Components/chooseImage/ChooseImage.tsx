import React from 'react';
import ImageCard from './ImageCard'
import './styles.css';
import {IMAGE_LIST,IMAGE_LIST_WITHOUT_WINDOWS} from './constants';
function ChooseImage(props:any) {


  const {getSelectedModel,selectedRegion}=props;
  let imageList;
  if(selectedRegion.value==='us-west-1'||selectedRegion.value==='india'){
    imageList=IMAGE_LIST_WITHOUT_WINDOWS;
  }
  else{
    imageList=IMAGE_LIST;
  }
        
       const imagecards=  imageList.map((item:any,index:any) =>(
                <ImageCard id={item.id} name={item.name} cost={item.cost} description={item.description} type={item.type} getSelectedModel={getSelectedModel}
               />
            ));
            return <div>{imagecards}</div>      
}

export default ChooseImage;
