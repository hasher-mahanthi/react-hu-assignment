import React,{useState} from 'react';
//Constants
import {STORAGE_TYPES} from './Constants';

//Styles
import './styles.css';

//Components
import Select from 'react-select';

function ImageCard(props:any) {

    type option={
        value:string;
        label:string;
    }
    const {id,volumeContent,onDelete,getSelectedModel}=props;
    const [storageType,setStorageType]=useState({} as option);
    const [capacityValue,setCapacityValue]=useState('');
    const [iopsValue,setIopsValue]=useState(0);
    console.log(getSelectedModel);
    const onStorageTypeChange=(option:any)=>{
      setStorageType(option);
      if(volumeContent==='Ext'){
          console.log(storageType);
      getSelectedModel({
          'volumeContent':volumeContent,
          'storageType':storageType.value
      })
    }
    }
    const onCapacityChange=(e:any)=>{
        console.log(e);
    }
    const handleKeyPress=(e:any)=>{
        console.log('key is pressed');
        let value=e.target.value;
        console.log(value);
        if(e.key==='Enter'){
            if(storageType.value==='magnetic-disks' && (value>=40 && value<=2000)){
                setCapacityValue(value);
            }
            else{
                alert('got an error in memory');
            }
            if(storageType.value==='SSD' && (value>=20 && value<=512)){
                setCapacityValue(value);
            }
            else{
                alert('got an error in ssd');
            }
          
           if(value<100){
            setIopsValue(100);
           }
           else if(value>=100 && value <=500){
            setIopsValue(600);
           }
           else{
            setIopsValue(1000);
           }
        }
    }


    return (
<div className="network-card row" key={id}>
            <div className="col-2">
                <div className="tagName">Type</div>
            <Select className="tagItem selectTag" options={STORAGE_TYPES} value={storageType}
           onChange={onStorageTypeChange}/>
            </div>
            <div className="col-1">
            <div className="tagName">Volume</div>
            <div className="tagItem">{volumeContent}</div>
            </div>
            <div className="col-2">
            <div className="tagName">Capacity(GB)</div>
            <input className="tagItem selectItem" onChange={onCapacityChange}  onKeyPress ={handleKeyPress}/>
            </div>
            <div className="col-1">
            <div className="tagName">Encryption</div>
            <input className='encryption-radio'type="radio"   />
            </div>
            <div className="col-1">
            <div className="tagName">IOPS</div>
    <div className="tagItem">{iopsValue}</div>
            </div>
            <div className="col-2">
            <div className="tagName">Backup Required</div>
            <input className='backup-radio' type="radio"  />
            </div>
            <div className="col-3">
            <div className="tagName">Remarks</div>
            <input className="tagItem selectItem"   />
         {volumeContent==='Ext' &&   <i className="fa fa-times-circle-o delete" onClick={()=>{onDelete(id)}} aria-hidden="true"></i>}
            </div>

           
        </div>
    )
}

export default ImageCard;
