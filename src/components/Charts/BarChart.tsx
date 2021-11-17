import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  // const data: any = {
  //   labels: [""],
  //   datasets: [
  //     {
  //       label: ["Male"],
  //       data: [600],
  //       backgroundColor: ["rgba(255, 99, 132, 0.6)"],
  //       borderSkipped: false,
  //       borderRadius: Number.MAX_VALUE,
  //       barThickness: 50,
  //     },

  //     {
  //       label: ["Female"],
  //       data: [500],
  //       backgroundColor: ["rgba(54, 162, 235, 0.6)"],

  //       borderSkipped: false,
  //       borderRadius: Number.MAX_VALUE,
  //       barThickness: 50,
  //     },
  //     {
  //       label: ["?"],
  //       data: [50],
  //       backgroundColor: ["rgba(255, 206, 86, 0.6)"],
  //       borderRadius: Number.MAX_VALUE,
  //       borderSkipped: false,
  //       barThickness: 50,
  //     },
  //   ],
  // };

  // // const options: any = {
  // //   scales: {
  // //     xAxes: [
  // //       {
  // //         barThickness: 2, // number (pixels) or 'flex'
  // //         maxBarThickness: 1, // number (pixels)
  // //       },
  // //     ],
  // //   },
  // // };

  // // const options: any = {
  // //   cornerRadius: 4,
  // // };
  const data: any = {
    labels: ['Male', 'Female', '?'],
    datasets: [
      {
        label: ['Male vs Female'],
        data: [500, 300, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],

        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barThickness: 40,
      },
    ],
  };

  const options: any = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
      ],
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};
export default BarChart;
