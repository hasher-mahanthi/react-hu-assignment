import React from 'react';
import   './styles.css';

function CostEstimates(props:any) {


    
    let {selectedModel}=props;
    console.log(selectedModel);
    function getMemoryCost(){
        let memoryCost;
    if(selectedModel.memory==='32GB'){
          memoryCost=20;
    }
    else if(selectedModel.memory==='64GB'){
        memoryCost=40;
    }
    else{
        memoryCost=0;
    }
    return memoryCost;
}

  function getCoreCost(){
    let coreCost;
    if(selectedModel.core==='8Core'){
          coreCost=20;
    }
    else if(selectedModel.core==='16Core'){
        coreCost=40;
    }
    else{
        coreCost=0;
    }
    return coreCost;
  }
  const getVolumeCost=()=>{
let volumeCost;
if(selectedModel.storageType==='SSD'){
    volumeCost=40;
}
else{
    volumeCost=20;
}
return volumeCost;
  }
  let totalCost=0;
  if(selectedModel.cost){
   totalCost=selectedModel.cost+getCoreCost()+getMemoryCost()+getVolumeCost();
  }
    return (
        <div className="cost-estimate-card">
            <div data-testid='cost'  className='cost-estimate-title'>Cost Estimates</div>
    {selectedModel.cost &&  <div className="modal-tags d-flex justify-content-between">
    <div className='modal-name modal-property'>{selectedModel.name}</div>
    <div className='modal-cost modal-property'>${selectedModel.cost}</div>
    </div>}
  {selectedModel.core &&  <div className="modal-tags d-flex justify-content-between">
    <div className='modal-core modal-property'>CPUs-{selectedModel.core}s</div>
    <div className='modal-core-cost modal-property'>${getCoreCost()}</div>
    </div>}
  {selectedModel.memory &&  <div className="modal-tags d-flex justify-content-between">
    <div className='modal-memory modal-property'>Memory {selectedModel.memory}</div>
    <div className='modal-memory-cost modal-property'>${getMemoryCost()}</div>
    </div>}
    {
        selectedModel.volumeContent &&<div className="modal-tags d-flex justify-content-between">
        <div className=' modal-property'>Memory {selectedModel.storageType}</div>
        <div className=' modal-property'>${getVolumeCost()}</div>
        </div>
    }
   <div className='bar-line'></div>
    <div className='total-cost modal-property'>${totalCost}/mo</div>
        </div>
    )
}

export default CostEstimates;