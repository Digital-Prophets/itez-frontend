import { Line } from 'react-chartjs-2';

const LineChart = () => {
  const data: any = {
    labels: ['4', '8', '12', '16', '20', '24'],
    datasets: [
      {
        label: ['Yesterday'],
        data: [300, 80, 600, 90, 100, 600],
        fill: true,
        borderColor: '#97896',
        lineTension: 0.4,
      },
      {
        label: ['Yesterday'],
        data: [90, 100, 400, 400, 100, 600],
        fill: false,
        borderColor: '#742774',
        lineTension: 0.4,
      },
    ],
  };

  const options: any = {
    title: {
      display: true,
      text: 'Line Chart',
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 600,
            stepsize: 1,
          },
        },
      ],
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
