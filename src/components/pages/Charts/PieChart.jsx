import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Legend, Tooltip, Inject } from '@syncfusion/ej2-react-charts';
import './custom-charts.css';

const PieChart = () => {
  const data = [
    { x: 'Product A', y: 30 },
    { x: 'Product B', y: 20 },
    { x: 'Product C', y: 45 },
    { x: 'Product D', y: 25 },
  ];

  return (
    <div className="custom-chart mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Pie Chart</p>
      <AccumulationChartComponent tooltip={{ enable: true }}>
        <Inject services={[PieSeries, Legend, Tooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={data} xName="x" yName="y" type="Pie" name="Products" />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default PieChart;
