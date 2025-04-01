import React from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { useData } from '../../context/DataContext';

interface Trend {
  id: number;
  name: string;
  popularity: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const Trends: React.FC = () => {
  const { data: trendsData } = useData<Trend[]>();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Current Trends</h1>
      <div className="w-full h-64 bg-white p-4 pb-12 rounded-lg shadow-md mb-8">
        <h2 className="text-lg font-medium mb-2">Bar Chart</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={trendsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="popularity" fill="#8884D8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full h-96 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-medium mb-2">Pie Chart</h2>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trendsData}
              dataKey="popularity"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884D8"
              label
            >
              {trendsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Trends;
