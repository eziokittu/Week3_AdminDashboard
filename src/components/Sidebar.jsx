import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton1 from './reusable/LinkButton1';
import { useStateContext } from './Contexts/ContextProvider';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { currentMode } = useStateContext();
  return (
    <div
      className={`fixed z-30 left-0 top-14 h-full 
      justify-center ${sidebarOpen ? 'flex' : 'hidden md:flex'}
      w-screen xsm:max-w-48 overflow-y-scroll
      ${currentMode==='light' ? 'bg-slate-100' : 'bg-slate-900'}`}
    >
      <div className=''>

        {/* Content */}
        <div className='flex flex-col gap-4 w-full py-2'>
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/'} name={'Dashboard'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/kanban'} name={'Kanban Board'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/calendar'} name={'Calender'} />

          {/* divider */}
          <div className='flex items-center w-full'>
            <div className='bg-slate-300 p-[2px] w-full rounded-l-full'></div>
            <p className={`px-4 ${currentMode==='light' ? 'text-black' : 'text-white'}`}>Charts</p>
            <div className='bg-slate-300 p-[2px] w-full rounded-r-full'></div>
          </div>

          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/charts/pie'} name={'Pie Chart'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/charts/line'} name={'Line Chart'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/charts/bar'} name={'Bar Chart'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/charts/scatter'} name={'Scatter Chart'} />

          {/* divider */}
          <div className='flex items-center w-full'>
            <div className='bg-slate-300 p-[2px] w-full rounded-l-full'></div>
            <p className={`px-4 ${currentMode==='light' ? 'text-black' : 'text-white'}`}>Tables</p>
            <div className='bg-slate-300 p-[2px] w-full rounded-r-full'></div>
          </div>

          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/tables/customers'} name={'Customers Table'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/tables/employees'} name={'Employees Table'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/tables/orders'} name={'Orders Table'} />
          <LinkButton1 setSidebarOpen={setSidebarOpen} linkTo={'/tables/products'} name={'Products Table'} />
        </div>

        <div className='h-16' />
      </div>
    </div>
  )
}

export default Sidebar