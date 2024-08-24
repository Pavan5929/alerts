
import React,{useState,useEffect} from 'react'
import Button from "./Button"
function AlertComponent({type,message,delay=false,delayTime=3000}) {
  const [showAlert,setShowAlert]=useState(true);
  const closeAlert=(e)=>{
    e.target.parentElement.parentElement.classList.add("fadeAlert")
    setTimeout(()=>{
        setShowAlert(false);
    },400);
  };
  useEffect(()=>{
    delay &&
    setTimeout(() => {
        setShowAlert(false)
    }, delayTime );
});
    return (
        showAlert &&(
             <div className={`alert alert-${type}`}>
               <div className='alert-close'>
               <span className='mr-1'>{message}</span>
               <Button text={"❌"} 
               onClick={closeAlert}
               />
               </div>

             </div>
        )
    );
}

export default AlertComponent
