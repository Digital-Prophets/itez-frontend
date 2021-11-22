import { Line } from "react-chartjs-2";

export default function SpineArea() {
       

    const data = {
      labels: ["Sunday", "Monday", "Tuesday", "Wenesday", "Thursday", "Friday", "Saturday"],
      datasets: [
        {
          label: "Yesterday",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [15000, 3900, 3000, 4100, 800, 60, 500]
        },
        {
          label: "Today",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "red",
          borderColor: "red",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "red",
          pointBackgroundColor: "red",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "red",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [1500, 3900, 3000, 4100, 2300, 1800, 90]
        },
        {
          label: "Others",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#FFBC00",
          borderColor: "#FFBC00",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#FFBC00",
          pointBackgroundColor: "#FFBC00",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#FFBC00",
          pointHoverBorderColor: "#FFBC00",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [1500, 3900, 30000, 418, 2300, 1800, 90]
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
       <Line data={data} options={lineOptions} />
       </div>
        )

    }
