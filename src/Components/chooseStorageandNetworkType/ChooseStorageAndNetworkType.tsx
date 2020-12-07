import React,{useState} from 'react';

//Constants
import {STORAGE_TYPES} from './Constants';

//Styles
import './styles.css';

//Components
import Select from 'react-select';
import ImageCard from './ImageCard';

function ChooseStorageAndNetworkType(props:any) {

   const [data,setData]=useState([] as any);
  const{getSelectedModel,setPage2,setPage4}=props;
  console.log(getSelectedModel);
  const addImageCard=()=>{
      console.log('came to add Image Card');
      let newData=[...data];
      newData.push({
          id:Date.now(),
          value:'Ext'
      });
      setData(newData);
  }
  const onDelete=(id:any)=>{
      console.log('came to delete',id);
      console.log(data);
    const filteredData= data.filter((item:any) =>
      item.id!==id);
      console.log(filteredData);
    setData(filteredData);
  }
    return (
        <div>
        <ImageCard volumeContent='Root' />
        {data.length!==0 && data.map((item:any)=>{
            return <ImageCard id={item.id} volumeContent={item.value} 
            onDelete={onDelete}
            getSelectedModel={getSelectedModel}
            />
        })}
        <button className='add-volume' onClick={addImageCard}>Add Volume</button>
        <footer className='footer'>
                <button className='back' onClick={()=>setPage2()}>Back</button>
                <button className='proceed' onClick={()=>setPage4()}>Proceed</button>
            </footer>
        </div>
    )
}

export default ChooseStorageAndNetworkType;
