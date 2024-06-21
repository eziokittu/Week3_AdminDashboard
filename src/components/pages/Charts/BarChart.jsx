import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import './custom-charts.css';

const BarChart = () => {
  const data = [
    { x: 'Q1', y: 15 },
    { x: 'Q2', y: 20 },
    { x: 'Q3', y: 35 },
    { x: 'Q4', y: 40 },
  ];

  return (
    <div className="custom-chart mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Bar Chart</p>
      <ChartComponent primaryXAxis={{ valueType: 'Category' }} tooltip={{ enable: true }}>
        <Inject services={[ColumnSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName="x" yName="y" type="Column" name="Revenue" />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default BarChart;
