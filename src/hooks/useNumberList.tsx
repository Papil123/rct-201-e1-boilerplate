import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [list ,setList] =useState(initialArray)
  const appendStart= ()=>{
    let a = 
    setList(  initialArray)
  }
  const appendEnd = ()=>{}
  const popStart =()=>{
    let a=[]
    for(let i=1;i<=initialArray.length;i++){
      a.push(initialArray[i])
    }
    setList(a)
  }
  const popEnd =()=>{
    let a = initialArray
    a.pop()
     
    setList(a)
  }
  const clear =()=>{
    setList([])
  }
  const reset =()=>{
    setList(initialArray)
  }
  return {list,appendStart,appendEnd, popStart,popEnd,clear,reset}
};

export default useNumberList;
