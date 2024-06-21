import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useStateContext } from './components/Contexts/ContextProvider';

import { registerLicense } from '@syncfusion/ej2-base';
let key = "Ngo9BigBOggjHTQxAR8/V1NCaF5cXmtCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXlccHRcR2heVkRxW0U=";
registerLicense(key);

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Background from './components/Background';
import Sidebar from './components/Sidebar';

import Dashboard from './components/pages/Dashboard';
import Kanban from './components/pages/Kanban/Kanban';
import CalendarPage from './components/pages/Calendar/CalendarPage';
import BarChart from './components/pages/Charts/BarChart';
import LineChart from './components/pages/Charts/LineChart';
import ScatterChart from './components/pages/Charts/ScatterChart';
import PieChart from './components/pages/Charts/PieChart';
import CustomersTable from './components/pages/Tables/CustomersTable';
import ProductsTable from './components/pages/Tables/ProductsTable';
import EmployeesTable from './components/pages/Tables/EmployeesTable';
import OrdersTable from './components/pages/Tables/OrdersTable';

const App = () => {
  const { setCurrentMode, currentMode } = useStateContext();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
    else {
      setCurrentMode('light');
      localStorage.setItem('themeMode', 'light');
    }
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Background/>
      <BrowserRouter>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className={`relative md:ml-48 `}>
          <Routes>
            <Route path="*" element={<Dashboard />} />
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/kanban" element={<Kanban />} />
            <Route exact path="/calendar" element={<CalendarPage />} />
            <Route exact path="/charts/pie" element={<PieChart />} />
            <Route exact path="/charts/line" element={<LineChart />} />
            <Route exact path="/charts/scatter" element={<ScatterChart />} />
            <Route exact path="/charts/bar" element={<BarChart />} />
            <Route exact path="/tables/orders" element={<OrdersTable />} />
            <Route exact path="/tables/employees" element={<EmployeesTable />} />
            <Route exact path="/tables/customers" element={<CustomersTable />} />
            <Route exact path="/tables/products" element={<ProductsTable />} />
          </Routes>

          {/* A gap */}
          <div className={`h-14 bg-gradient-to-b 
            ${currentMode==='light' ? 'from-slate-50 to-slate-100' : 'from-slate-950 to-slate-900'}`}></div>
        </div>
        <Footer sidebarOpen={sidebarOpen} />
      </BrowserRouter>
    </div>
  );
}

export default App;