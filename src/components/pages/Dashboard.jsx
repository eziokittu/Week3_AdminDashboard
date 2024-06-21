import React from 'react';
import { useStateContext } from '../Contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { currentMode } = useStateContext();
  const navigate = useNavigate();
  return (
    <div className={`mt-14 flex flex-col text-center min-h-[700px] ${currentMode==='light' ? 'text-black' : 'text-white'}`}>
      <p className='text-3xl underline underline-offset-3 py-8'>Dashboard</p>
      <div className='flex flex-col text-center justify-center gap-3'>
        <p>Admin Dashboard made using ReactJs and Tailwind CSS</p>
        <p>'Local Storage' is implemented to store the theme settings</p>
        <p>Various Components used, made using EJ2 SyncFusion Library</p>
        <div className='flex justify-center text-center flex-wrap space-x-1'>
          <p>Like the</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/kanban')}>Kanban Board</p>
          <p>,</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/calendar')}>Calendar</p>
          <p>, various charts - </p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/charts/bar')}>Bar</p>
          <p>,</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/charts/line')}>Line</p>
          <p>,</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/charts/pie')}>Pie</p>
          <p>,</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/charts/scatter')}>Scatter</p>
          <p>, and various tables for - </p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/tables/customers')}>Customers</p>
          <p>,</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/tables/employees')}>Employees</p>
          <p>,</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/tables/products')}>Products</p>
          <p>and</p>
          <p className='font-bold underline underline-offset-2 cursor-pointer' onClick={()=>navigate('/tables/orders')}>Orders</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard