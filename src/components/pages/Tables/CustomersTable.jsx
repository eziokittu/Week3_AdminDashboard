import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import 'tailwindcss/tailwind.css';
import './custom-grid.css';

const CustomersTable = () => {
  const data = [
    { CustomerID: 'ALFKI', CompanyName: 'Alfreds Futterkiste', ContactName: 'Maria Anders', Country: 'Germany' },
    { CustomerID: 'ANATR', CompanyName: 'Ana Trujillo Emparedados y helados', ContactName: 'Ana Trujillo', Country: 'Mexico' },
    { CustomerID: 'ANTON', CompanyName: 'Antonio Moreno Taquería', ContactName: 'Antonio Moreno', Country: 'Mexico' },
    { CustomerID: 'AROUT', CompanyName: 'Around the Horn', ContactName: 'Thomas Hardy', Country: 'UK' },
  ];

  return (
    <div className="custom-grid mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Customers Table</p>
      <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageSize: 6 }}>
        <ColumnsDirective>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
          <ColumnDirective field='CompanyName' headerText='Company Name' width='150' />
          <ColumnDirective field='ContactName' headerText='Contact Name' width='150' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};

export default CustomersTable;
