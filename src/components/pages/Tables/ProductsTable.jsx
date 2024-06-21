import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import 'tailwindcss/tailwind.css';
import './custom-grid.css';

const ProductsTable = () => {
  const data = [
    { ProductID: 1, ProductName: 'Chai', Category: 'Beverages', Price: 18 },
    { ProductID: 2, ProductName: 'Chang', Category: 'Beverages', Price: 19 },
    { ProductID: 3, ProductName: 'Aniseed Syrup', Category: 'Condiments', Price: 10 },
    { ProductID: 4, ProductName: 'Chef Anton\'s Cajun Seasoning', Category: 'Condiments', Price: 22 },
  ];

  return (
    <div className="custom-grid mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Products Table</p>
      <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageSize: 6 }}>
        <ColumnsDirective>
          <ColumnDirective field='ProductID' headerText='Product ID' textAlign='Right' width='100' />
          <ColumnDirective field='ProductName' headerText='Product Name' width='150' />
          <ColumnDirective field='Category' headerText='Category' width='100' />
          <ColumnDirective field='Price' headerText='Price' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};

export default ProductsTable;
