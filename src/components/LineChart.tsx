import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data: any = {
    labels: ['today', 'yesterday'],
    datasets: [
      {
        label: ['Today'],
        data: [100, 200, 300, 400, 500, 400],
      },
      {
        label: ['Yesterday'],
        data: [90, 100, 600, 400, 100, 600],
      },
    ],
  };
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
