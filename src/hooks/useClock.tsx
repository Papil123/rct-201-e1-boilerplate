import { useEffect, useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const [hours,setHours]= useState(0)
  const [minutes,setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

   useEffect(()=>{
    setInterval(()=>{
      if(seconds===60){
        setSeconds(0)
        let min =minutes+1
        setMinutes(min)
      } else{
        let sec =seconds+1
        setSeconds(sec)
      }
      if(hours===24){
        setHours(0)
      }
      if(minutes===60){
        setMinutes(0)
        let hr = hours+1
        setHours(hr)
        
      }
    },1000)
   },[seconds])


  return{hours,minutes,seconds}


};

export default useClock;
