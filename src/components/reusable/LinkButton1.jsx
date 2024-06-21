import React from 'react';
import { Link } from 'react-router-dom';
import { useStateContext } from '../Contexts/ContextProvider';

const LinkButton1 = ({name, setSidebarOpen, linkTo}) => {
  const { currentMode } = useStateContext();
  return (
    <Link 
      onClick={() => { setSidebarOpen(false) }} 
      to={linkTo}
      className={`${currentMode==='light' ? 'bg-slate-200 hover:bg-slate-300 text-black' : 'bg-slate-800 hover:bg-slate-700 text-white'}
        rounded-full px-4 py-2 `}
    >{name}</Link>
  )
}

export default LinkButton1