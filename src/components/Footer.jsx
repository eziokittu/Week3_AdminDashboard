import React from 'react';
import { useStateContext } from './Contexts/ContextProvider';

const Footer = () => {
  const { currentMode } = useStateContext();
  return (
    <div className={`z-10 h-16 sm:h-14 md:h-20 lg:h-14 relative bottom-0 md:ml-48 border-t px-1 xsm:px-2 sm:px-4 py-1 xsm:py-2
      flex flex-col justify-center items-center tracking-tighter text-center text-[11px] xsm:text-sm sm:text-base
      ${currentMode==='light' ? 'bg-slate-100  border-slate-300 text-black' : 'bg-slate-900  border-slate-300 text-white'} `}>
      <div className='flex flex-wrap justify-center items-center gap-1'>
        <p>This is the Week 3 Assignment</p>
        <p>-</p>
        <p>"Admin Dashboard" for</p>
        <p
          className={`${currentMode==='light' ? 'hover:text-slate-700' : 'hover:text-slate-200'}
            cursor-pointer font-bold underline underline-offset-4 transition-colors duration-300`}
          onClick={()=>{window.open(`https://celebaltech.com`, '_blank')}}
        >Celebal Technologies</p>
        <p>Summer Internship</p>
      </div>
      <div className='flex flex-row gap-1 flex-wrap justify-center'>
        <span className=''>Developed by</span> 
        <span 
          className={`${currentMode==='light' ? 'hover:text-slate-700' : 'hover:text-slate-200'}
            cursor-pointer font-bold underline underline-offset-4 transition-colors duration-300`}
          onClick={()=>{window.open(`https://bodhisatta1999.netlify.app/`, '_blank')}} 
        >Bodhisatta Bhattacharjee</span>
      </div>
    </div>
  )
}

export default Footer