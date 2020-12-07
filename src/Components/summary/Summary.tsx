import React from 'react'
import  './styles.css';
function Summary(props:any) {
    const {selectedModel,setPage1,setPage2}=props;
    return (
        <div>
            <div className='d-flex justify-content-between'>
            <div className='image'>Image</div>
            <div className='edit' onClick={()=>setPage1()}>edit</div>
            </div>
            <div className="image-card-list">
    <div className="image-card row ">
        <div className="image-block col-1"></div>
        <div className='image-content col-9'>
        <div data-testid='my-test-id'className="image-name">{selectedModel.name}</div>
        <p >{selectedModel.description}</p>
        </div>
        <div className='col-2'>
        <div className='radio-btns'>
        <div className='d-flex'>
        <input type="radio" value='64-bit-(x86)' className='radio-btn' checked/>
        <div className='radio-label'>64 bit (x86)</div>
        <div >
         </div> 
         </div>  
    </div>
        
</div>
        </div>
        </div>
        <div className='d-flex justify-content-between'>
            <div className='instance-title'>Instance</div>
            <div className='edit'onClick={()=>setPage2()}>edit</div>
            </div>
    <div className='instance'>
    <div className='instance-type'>{selectedModel.instance}</div>
    <div className='d-flex justify-content-between selected-types'>
    <div>{selectedModel.core}</div>
    <div>{selectedModel.memory}</div>
    </div>
    </div>
        </div>
    )
}

export default Summary;
