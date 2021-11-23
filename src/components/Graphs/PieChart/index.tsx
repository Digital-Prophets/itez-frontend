import React from "react";
import { Line } from "react-chartjs-2";


const MultMix = () =>{
const [activeNav, setActiveNav] = React.useState(1);


    const toggleNavs = (e: { preventDefault: () => void; }, index: number) => {
        e.preventDefault();
        setActiveNav(index);
        // setChartExample1Data("data" + index);
      }


    const data = {
        labels: ["Central Province", "Copperbelt Province", "Eastern Province", "Luapula Province", "Lusaka Province", "Muchinga Province", "Northern Province"],
        datasets: [
          {
            label: "Data",
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
            data: [10, 3900, 3000, 4100, 800, 60, 15000]
          }
        ]
      };
      
      //const myRef = React.createRef();
      const lineOptions = {
        legend: {
            display: false
         },
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
        }
   
      };

    return (


        <div className="renderChart bg-white shadow-lg mb-8 m-2 pb-12">

            <div className="flext m-6 float-right">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4" onClick={(e) => toggleNavs(e, 1)}>Province </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => toggleNavs(e, 2)}>District</button>
            </div>
   
        <div className="m-2" style={{height:350, marginBottom: 60}}>
        <Line
            data={data}
            options={lineOptions}
            getDatasetAtEvent={(e) => console.log(e)}
            />
       </div>
    </div>
    )
}

export default MultMix;

