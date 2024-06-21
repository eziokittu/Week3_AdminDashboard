import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ScatterSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-react-charts';
import './custom-charts.css';

const ScatterChart = () => {
  const data = [
    { x: 'USA', y: 50 },
    { x: 'China', y: 55 },
    { x: 'Japan', y: 48 },
    { x: 'Australia', y: 60 },
    { x: 'France', y: 45 },
    { x: 'Germany', y: 55 },
    { x: 'Italy', y: 60 },
    { x: 'Sweden', y: 42 },
    { x: 'UK', y: 57 },
    { x: 'India', y: 61 },
  ];

  return (
    <div className="custom-chart mt-14 min-h-[700px]">
      <p className="text-xl font-bold mb-4">Scatter Chart</p>
      <ChartComponent primaryXAxis={{ valueType: 'Category' }} tooltip={{ enable: true }}>
        <Inject services={[ScatterSeries, Category, Legend, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={data} xName="x" yName="y" type="Scatter" name="Sales" marker={{ visible: true, width: 10, height: 10 }} />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default ScatterChart;
