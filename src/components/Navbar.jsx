import React, { useState } from 'react';
import { useStateContext } from './Contexts/ContextProvider';

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { currentMode } = useStateContext();

  const setDarkTheme = () => {
    localStorage.setItem('themeMode', 'dark');
    window.location.reload();
  }

  const setLightTheme = () => {
    localStorage.setItem('themeMode', 'light');
    window.location.reload();
  }

  return (
    <div className={`fixed top-0 z-20 h-14 px-1 xsm:px-4 w-full flex justify-between items-center
    ${currentMode === 'light' ? 'bg-slate-100 text-black' : 'bg-slate-900 text-white'} `}>
      {/* Left side Hamburger */}
      <div onClick={() => (setSidebarOpen(!sidebarOpen))} className='md:hidden'>
        {sidebarOpen ? (
          <button
            className={`
              ${currentMode === 'light' ? 'text-black bg-slate-200 hover:bg-white' : 'text-white bg-slate-800 hover:bg-slate-700'} 
              rounded-full p-3 md:hidden `}
          >
            <svg className="w-4 h-4 xsm:w-6 xsm:h-6" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd"></path> </g></svg>
          </button>
        ) : (
          <button
            className={`
              ${currentMode === 'light' ? 'text-black bg-slate-200 hover:bg-white' : 'text-white bg-slate-800 hover:bg-slate-700'}
              rounded-full p-2 `}
          >
            <svg className="w-6 h-6 xsm:w-8 xsm:h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11066"> <rect width="24" height="24" fill="currentColor" transform="translate(0 0.000915527)"></rect> </clipPath> </defs> </g></svg>
          </button>
        )}
      </div>

      {/* logo */}
      <div
        className={`cursor-pointer rounded-full px-2 xsm:px-4 py-1
        ${currentMode === 'light' ? 'bg-slate-600 hover:bg-slate-700' : 'bg-slate-800 hover:bg-slate-700'} `}
        onClick={() => { window.open(`https://celebaltech.com/`, '_blank') }}
      >
        <img
          className='h-8 xsm:h-10'
          src="/logo.webp"
          alt="Celebal Technologies"
        />
      </div>

      {/* Right side options */}
      <div className={`${currentMode === 'light' ? 'bg-slate-200' : 'bg-slate-800'}
        flex flex-row gap-2 xsm:gap-4 items-center px-2 xsm:px-4 py-1 rounded-full text-sm xsm:text-base`}>
        <p>Theme</p>
        <div className='flex gap-2 items-center text-sm'>

          {/* Button to set Dark mode */}
          {currentMode === 'light' && (
            <div
              onClick={setDarkTheme}
              className='flex flex-col items-center cursor-pointer'>
              <p className={`w-fit p-2 xsm:p-3 rounded-full bg-black border-1 border-transparent hover:border-orange-600`}></p>
              <p>Dark</p>
            </div>
          )}

          {/* Button to set light mode */}
          {currentMode === 'dark' && (
            <div
              onClick={setLightTheme}
              className='flex flex-col items-center cursor-pointer'>
              <p className={`w-fit p-2 xsm:p-3 rounded-full bg-white border-1 border-transparent hover:border-orange-600`}></p>
              <p>Light</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar