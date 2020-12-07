import React,{useState} from 'react'
import './styles.css';
function ImageCard(props:any) {
   const [selectedOption,setSelectedOption]=useState('');
 
    function setCard(){
        let selectedModel={...props,'type':selectedOption}
        props.getSelectedModel(selectedModel);
        console.log(props);
        return null;
    }
    function onSelectingRadioOption(e:any){
         console.log(e.target.value);
          setSelectedOption(e.target.value);
    }
return(
    <div className="image-card-list">
    
    <div className="image-card row ">
        <div className="image-block col-1"></div>
        <div className='image-content col-9'>
        <div data-testid='my-test-id'className="image-name">{props.name}</div>
        <p >{props.description}</p>
        </div>
        <div className='col-2'>
        <div className='radio-btns'onChange={onSelectingRadioOption}>
        <div className='d-flex'>
        <input type="radio" value='64-bit-(x86)' className='radio-btn' checked={selectedOption==='64-bit-(x86)'}/>
        <div className='radio-label'>64 bit (x86)</div>
        </div>
         {(props.id)!=='4'? <div  className='d-flex'><input className='radio-btn' type="radio" value='64-bit-(ARM)' checked={selectedOption==='64-bit-(ARM)'}/><div className='radio-label'>64 bit (ARM)</div></div> :null}
        </div>
        <div >
         <button className='select-btn'  onClick={setCard}>Select</button>
         </div> 
         </div>  
    </div>
        
</div>
)
            

        
    
}

export default ImageCard;
