import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart'; // Verifique se este é o import correto
import Stack from '@mui/material/Stack';

interface Transaction {
  date: string;
  type: 'Entrada' | 'Saída';
  value: number;
}

interface Props {
  transactions: Transaction[];
}

interface BarSeriesType {
  data: (number | null)[];
  stack: string;
  label: string;
}

const BarChartComponent: React.FC<Props> = ({ transactions }) => {
  const aggregatedData: { [key: string]: { Entrada: number; Saída: number } } = {};

  transactions.forEach(({ date, type, value }) => {
    const dateString = new Date(date).toLocaleDateString();
    if (!aggregatedData[dateString]) {
      aggregatedData[dateString] = { Entrada: 0, Saída: 0 };
    }
    aggregatedData[dateString][type] += value;
  });

  // Transforma aggregatedData em um array de objetos para o dataset
  const dataset = Object.entries(aggregatedData).map(([date, values]) => ({
    date,
    Entrada: values.Entrada,
    Saída: values.Saída,
  }));

  const series = [
    { dataKey: 'Entrada', label: 'Entrada' },
    { dataKey: 'Saída', label: 'Saída' },
  ];

  return (
    <Stack direction="column" spacing={1} sx={{ width: '100%', maxWidth: 600 }}>
      <BarChart
       
      colors={['#188348', '#E47880']}
      dataset={dataset}
      xAxis={[{ scaleType: 'band', dataKey: 'date', tickLabelStyle: { fill: 'white' }, }]}
      yAxis={[{ scaleType: 'linear', tickLabelStyle: { fill: 'white' }, }]} 
      sx={{ fill: 'white' }}
      borderRadius={5}
      series={series}
      width={400}
      height={300}
      slotProps={{
        legend: {
          labelStyle: {
            fontSize: 13,
            fill: 'white',
          },
        },
      }}
        
      />
    </Stack>
  );
};

export default BarChartComponent;