import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import 'tailwindcss/tailwind.css';
import './custom-grid.css';

const OrdersTable = () => {
  const data = [
    { OrderID: 10248, CustomerName: 'Paul Henriot', Freight: 32.38, OrderDate: new Date(8364186e5) },
    { OrderID: 10249, CustomerName: 'Karin Josephs', Freight: 11.61, OrderDate: new Date(836505e6) },
    { OrderID: 10250, CustomerName: 'Mario Pontes', Freight: 65.83, OrderDate: new Date(8367642e5) },
    { OrderID: 10251, CustomerName: 'Mary Saveley', Freight: 41.34, OrderDate: new Date(8367642e5) },
  ];

  return (
    <div className="custom-grid mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Orders Table</p>
      <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageSize: 6 }}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' textAlign='Right' width='100' />
          <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' />
          <ColumnDirective field='Freight' headerText='Freight' textAlign='Right' format='C2' width='100' />
          <ColumnDirective field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width='130' />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};

export default OrdersTable;
