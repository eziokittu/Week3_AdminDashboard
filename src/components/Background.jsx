import React from 'react';
import { useStateContext } from './Contexts/ContextProvider';

const Background = () => {
  const { currentMode } = useStateContext();
  return (
    <div className={`z-0 fixed w-screen h-screen ${currentMode==='light' ? 'bg-slate-50' : 'bg-slate-950'}`}></div>
  )
}

export default Background