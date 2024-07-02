import React from 'react';
import { PieChart } from '@mui/x-charts';

interface Transaction {
  id: number;
  category: string;
  value: number;
}

interface Props {
  transactions: Transaction[];
}

const Pie: React.FC<Props> = ({ transactions }) => {
  const safeTransactions = transactions || [];

  const totalsByCategory = safeTransactions.reduce((acc, { category, value }) => {
    acc[category] = (acc[category] || 0) + value;
    return acc;
  }, {} as { [key: string]: number });

  const total = Object.values(totalsByCategory).reduce((acc, value) => acc + value, 0);

  const data = Object.entries(totalsByCategory).map(([label, value], id) => ({
    id,
    value: (value / total) * 100,
    label: `${label} (${((value / total) * 100).toFixed(2)}%)`,
  }));

  const colors = [  
    '#FF5733', 
    '#33FF57', 
    '#3357FF', 
    '#FF33A1', 
    '#33FFF6', 
    '#FFD700', 
    '#FF69B4', 
    '#8A2BE2', 
    '#7FFF00', 
    '#DC143C', 
    '#00FFFF', 
    '#FF4500',
    '#2E8B57', 
    '#FF6347', 
    '#40E0D0', 
    '#DA70D6', 
    '#EEE8AA', 
    '#98FB98', 
    '#AFEEEE', 
    '#DB7093'  ];

  return (
    <div className="flex justify-center">
      <PieChart
        margin={{ top: 0, bottom: 0, left: 0, right: 190 }}
        colors={colors}
        width={350}
        height={200}
        series={[{ data }]}
        slotProps={{
          legend: {
            labelStyle: {
              fontSize: 13,
              fill: 'white',
            },
          },
        }}
        responsive
      />
    </div>
  );
};

export default Pie;
