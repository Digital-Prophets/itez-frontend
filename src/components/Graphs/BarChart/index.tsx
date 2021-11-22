import { Bar } from "react-chartjs-2";

const BarChart = () =>{


    const data = {
        labels: ["Beneficiaries","Recorded","Females","Males"],
        datasets: [
          {
            label: "Trendes",
            fill: false,
            lineTension: 0.1,
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [150, 390, 30, 410]
          }
        ]
      };
      
      //const myRef = React.createRef();
      const lineOptions = {
        onClick: (e: any, element: string | any[]) => {
          if (element.length > 0) {
            var ind = element[0]._index;
            alert(ind);
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              // stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                beginAtZero: true,
                // Return an empty string to draw the tick line but hide the tick label
                // Return `null` or `undefined` to hide the tick line entirely
                userCallback(value: { toString: () => any; split: (arg0: RegExp) => any; join: (arg0: string) => any; }) {
                  // Convert the number to a string and splite the string every 3 charaters from the end
                  value = value.toString();
                  value = value.split(/(?=(?:...)*$)/);
      
                  // Convert the array to a string and format the output
                  value = value.join(".");
                  return `Rp.${value}`;
                }
              }
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      };
      
        return (
          <div className="shadow-lg bg-white m-2 p-4">
         <Bar data={data} options={lineOptions} />
         </div>
          )
}

export default BarChart;