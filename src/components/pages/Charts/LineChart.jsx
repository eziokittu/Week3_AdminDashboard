import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import './custom-charts.css';

const LineChart = () => {
  const data = [
    { x: new Date(2020, 0, 1), y: 45 },
    { x: new Date(2020, 1, 1), y: 50 },
    { x: new Date(2020, 2, 1), y: 55 },
    { x: new Date(2020, 3, 1), y: 48 },
    { x: new Date(2020, 4, 1), y: 60 },
  ];

  return (
    <div className="custom-chart mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Line Chart</p>
      <ChartComponent primaryXAxis={{ valueType: 'DateTime' }} tooltip={{ enable: true }}>
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName="x" yName="y" type="Line" name="Sales" marker={{ visible: true }} />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default LineChart;
