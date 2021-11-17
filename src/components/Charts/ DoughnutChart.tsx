import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
  const data: any = {
    labels: ['Male', 'Female'],

    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 100],
        backgroundColor: ['rgb(255, 99, 132)', '#808080'],
        hoverOffset: 4,
        barRoundness: 0.3,
      },
    ],
    text: '98%',
  };

  const options: any = {
    barRoundness: 0.3,
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};
export default DoughnutChart;
