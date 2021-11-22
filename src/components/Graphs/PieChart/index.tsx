import { Pie } from "react-chartjs-2";

const MultMix = () =>{

    const data = {
        labels: [
          'Male',
          'Female',
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 89],
          backgroundColor: [
            '#73A4BC',
            '#92B703',
          ],
          hoverOffset: 4
        }]
      };

      const options =  {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Male vs female rate',
                align: 'start',
              
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                labelString: 'probability',
                display: false
            }
        }
    }

    return (


        <div className="renderChart border-2 rounded-l m-2">
   
        <div className="m-2" style={{height:350, marginBottom: 60}}>
        <Pie data={data} options={options}/> 
       </div>
            <div className="flex items-center justify-center mr-4 mb-4">
                <div className="flex flex-row items-center">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" style={{color: "#FFF", backgroundColor: "#73A4BC"}}>
                    300
                    </span>
                    <label htmlFor="males" className="ml-2 text-sm font-normal text-gray-600">Males</label>
                </div>
                <div className="flex flex-row items-center ml-4">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full uppercase last:mr-0 mr-1" style={{color: "#FFF", backgroundColor: "#92B703"}}>
                    200
                </span>
                    <label htmlFor="females" className="ml-2 text-sm font-normal text-gray-600">Females</label>
                </div>
            </div>
         </div>
    )
}

export default MultMix;