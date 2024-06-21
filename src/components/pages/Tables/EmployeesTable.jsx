import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import './custom-grid.css';

const EmployeesTable = () => {
  const data = [
    { EmployeeID: 1, FirstName: 'Nancy', LastName: 'Davolio', Title: 'Sales Representative' },
    { EmployeeID: 2, FirstName: 'Andrew', LastName: 'Fuller', Title: 'Vice President, Sales' },
    { EmployeeID: 3, FirstName: 'Janet', LastName: 'Leverling', Title: 'Sales Representative' },
    { EmployeeID: 4, FirstName: 'Margaret', LastName: 'Peacock', Title: 'Sales Representative' },
    { EmployeeID: 5, FirstName: 'Julie', LastName: 'Khanna', Title: 'App Developer' },
    { EmployeeID: 6, FirstName: 'Harry', LastName: 'Shekhawat', Title: 'App Developer' },
    { EmployeeID: 7, FirstName: 'Ronit', LastName: 'Raj', Title: 'Web Developer' },
    { EmployeeID: 8, FirstName: 'Priyanshu', LastName: 'Kumar', Title: 'Game Developer' },
  ];

  return (
    <div className="custom-grid mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Employees Table</p>
      <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageSize: 6 }}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' textAlign='Right' width='100' />
          <ColumnDirective field='FirstName' headerText='First Name' width='150' />
          <ColumnDirective field='LastName' headerText='Last Name' width='150' />
          <ColumnDirective field='Title' headerText='Title' width='200' />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};

export default EmployeesTable;
