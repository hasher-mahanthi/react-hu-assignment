import React,{useState} from 'react'
import Select from 'react-select';
import './styles.css';
import {generalPurposeCoreOptions,cpuOptimizedCoreOptions,storageOptimizedCoreOptions,networkOptimizedCoreOptions,
    generalPurposeMemoryOptions,storageOptimizedMemoryOptions,cpuOptimizedMemoryOptions,networkOptimizedMemoryOptions} from './constants';
import ErrorModal from './ErrorModal';
function ChooseInstanceType(props:any) {

    const {getSelectedModel,setPage1,setPage3}=props;

    type option={
        value:string;
        label:string;
    }

    const [cpuCoreOptions,setCpuCoreOptions]=useState([] as any);
    const [memoryOptions,setMemoryOptions]=useState([] as any);
    const [selectedCoreOption,setSelectedCoreOption]=useState(({value:'',label:''} as option));
    const [selectedMemoryOption,setSelectedMemoryOption]=useState({value:'',label:''} as option);
   function setGeneralPurposeCoreOptions(){
      setCpuCoreOptions(generalPurposeCoreOptions);//keep the functions in one file
      setMemoryOptions(generalPurposeMemoryOptions);
      getSelectedModel({
        'instance':'General Pupose'
    })
       if(selectedCoreOption.value&&generalPurposeCoreOptions.every((value:any)=>value!==selectedCoreOption.value)){
       
        alert(selectedCoreOption.value+'is not available for GeneralPurposeCoreOptions') 
          
       }
       if(selectedMemoryOption.value&&generalPurposeMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
   function setCpuOptimizedCoreOptions(){
    setCpuCoreOptions(cpuOptimizedCoreOptions);
    setMemoryOptions(cpuOptimizedMemoryOptions);
    getSelectedModel({
        'instance':'CPU Optimized',
    })
    if(selectedCoreOption.value&&cpuOptimizedCoreOptions.every((value)=>value!==selectedCoreOption.value)){
        
        alert(selectedMemoryOption.value+'is not available for CpuOptimizedCoreOptions') 
     }
     if(selectedMemoryOption.value&&cpuOptimizedMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
   function setStorageOptimizedCoreOptions(){
       setCpuCoreOptions(storageOptimizedCoreOptions);
       setMemoryOptions(storageOptimizedMemoryOptions);
       getSelectedModel({
        'instance':'Storage Optimized',
    })
       if(selectedCoreOption.value&&storageOptimizedCoreOptions.every((value)=>value!==selectedCoreOption.value)){
        
        alert(selectedCoreOption.value+'is not available for storage optimized CoreOptions') 
     }
     if(selectedMemoryOption.value&&storageOptimizedMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
   function setNetworkOptimizedCoreOptions(){ //check the naming concention once
    setCpuCoreOptions(networkOptimizedCoreOptions);
    setMemoryOptions(networkOptimizedMemoryOptions);
    getSelectedModel({
        'instance':'Network Optimized',
    })
    if(selectedCoreOption.value&&networkOptimizedCoreOptions.every((value)=>value!==selectedCoreOption.value)){
        
        alert(selectedCoreOption.value+'is not available for NetworkOptimizedCoreOptions') 
     }
     if(selectedMemoryOption.value&&networkOptimizedMemoryOptions.every((value)=>value!==selectedMemoryOption.value)){
       
        alert(selectedMemoryOption.value+'is not available for GeneralPurposeMemoryOptions') 
          
       }
   }
    function getCpuCoreSelectMenuOptions(){
        let selectMenuOptions:any=[];
        let options=[...cpuCoreOptions];
        options.map((option)=>{
          selectMenuOptions.push({value:option,label:option})
        });
        return selectMenuOptions;
    }
    function getMemorySelectMenuOptions(){
        let selectMenuOptions:any=[];
        let options=[...memoryOptions];
        options.map((option)=>{
          selectMenuOptions.push({value:option,label:option})
        });
        return selectMenuOptions;
    }

  const   handleCoreOptionChange = (option:any) => {
    setSelectedCoreOption(option);
    getSelectedModel({
        'core':option.value,
    })
      };
      const   handleMemoryOptioonChange = (option:any) => {
        setSelectedMemoryOption(option);
        getSelectedModel({
            'memory':option.value,
        })
          };

    return (
        <div>
            <section className="nav-bar d-flex ">  
            <button className="nav-button" onClick={setGeneralPurposeCoreOptions}>General Purpose</button>
            <button className="nav-button" onClick={setCpuOptimizedCoreOptions}>CPU Optimized</button>
            <button className="nav-button" onClick={setStorageOptimizedCoreOptions}>Storage Optimized</button>
            <button className="nav-button" onClick={setNetworkOptimizedCoreOptions}>Network Optimized</button>
            </section>
 
             <div className='select-menu-title'>Create Configuration</div>
            <div className="select-menus d-flex ">
            <Select className="cpu-core-select select" options={getCpuCoreSelectMenuOptions()} value={selectedCoreOption}
        onChange={handleCoreOptionChange}/>
            <Select className="memory-select select" options={getMemorySelectMenuOptions()}
            value={selectedMemoryOption}
            onChange={handleMemoryOptioonChange}
            />
            
            </div>
            <footer className='footer'>
                <button className='back' onClick={()=>setPage1()}>Back</button>
                <button className='proceed' onClick={()=>setPage3()}>Proceed</button>
            </footer>
        </div>
    )
}

export default ChooseInstanceType;
